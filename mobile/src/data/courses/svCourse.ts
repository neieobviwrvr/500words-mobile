// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_sv.py
// Neu bauen: python bauplan.py sv --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 28 Module, 253 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const SWEDISH_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / han / hon är [Slot]",
          "lerntext": "jag / du / han / hon är [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "hon": "p",
            "är": "v"
          }
        },
        "frameDe": "ich / du / er / sie (Sg.) bin [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trött",
              "lerntext": "trött",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "glad",
              "lerntext": "glad",
              "de": "froh",
              "c": "a"
            },
            {
              "schrift": "ledsen",
              "lerntext": "ledsen",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "arg",
              "lerntext": "arg",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "nöjd",
              "lerntext": "nöjd",
              "de": "zufrieden",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "är",
            "lerntext": "är",
            "de": "sein",
            "c": "v"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / han / hon är [Slot]",
          "lerntext": "jag / du / han / hon är [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "hon": "p",
            "är": "v"
          }
        },
        "frameDe": "ich / du / er / sie (Sg.) bin [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hungrig",
              "lerntext": "hungrig",
              "de": "hungrig",
              "c": "a"
            },
            {
              "schrift": "törstig",
              "lerntext": "törstig",
              "de": "durstig",
              "c": "a"
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "redo",
              "lerntext": "redo",
              "de": "bereit",
              "c": "a"
            },
            {
              "schrift": "lugn",
              "lerntext": "lugn",
              "de": "ruhig",
              "c": "a"
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
          "schrift": "vi / ni / de / man / det / den är [Slot]",
          "lerntext": "vi / ni / de / man / det / den är [Slot]",
          "wortarten": {
            "vi": "p",
            "ni": "p",
            "är": "v"
          }
        },
        "frameDe": "wir / ihr / sie (Pl.) / man / er / er bin [Slot].",
        "pronouns": [
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "ni",
            "lerntext": "ni",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          },
          {
            "schrift": "man",
            "lerntext": "man",
            "de": "man",
            "c": "p"
          },
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "den",
            "lerntext": "den",
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
              "schrift": "lärare",
              "lerntext": "lärare",
              "de": "Lehrer",
              "c": "n"
            },
            {
              "schrift": "turist",
              "lerntext": "turist",
              "de": "Tourist",
              "c": "n"
            },
            {
              "schrift": "chef",
              "lerntext": "chef",
              "de": "Chef",
              "c": "n"
            },
            {
              "schrift": "kollega",
              "lerntext": "kollega",
              "de": "Kollege",
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
          "schrift": "vi / ni / de / man / det / den är [Slot]",
          "lerntext": "vi / ni / de / man / det / den är [Slot]",
          "wortarten": {
            "vi": "p",
            "ni": "p",
            "är": "v"
          }
        },
        "frameDe": "wir / ihr / sie (Pl.) / man / er / er bin [Slot].",
        "pronouns": [
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "ni",
            "lerntext": "ni",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          },
          {
            "schrift": "man",
            "lerntext": "man",
            "de": "man",
            "c": "p"
          },
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "den",
            "lerntext": "den",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "polis",
              "lerntext": "polis",
              "de": "Polizei",
              "c": "n"
            },
            {
              "schrift": "vän",
              "lerntext": "vän",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "fru",
              "lerntext": "fru",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "barn",
              "lerntext": "barn",
              "de": "Kind",
              "c": "n"
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
          "schrift": "han / hon / de är väldigt [Slot]",
          "lerntext": "han / hon / de är väldigt [Slot]",
          "wortarten": {
            "han": "p",
            "hon": "p",
            "är": "v"
          }
        },
        "frameDe": "er / sie (Sg.) / sie (Pl.) ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "snäll",
              "lerntext": "snäll",
              "de": "nett",
              "c": "a"
            },
            {
              "schrift": "trevlig",
              "lerntext": "trevlig",
              "de": "nett",
              "c": "a"
            },
            {
              "schrift": "smart",
              "lerntext": "smart",
              "de": "klug",
              "c": "a"
            },
            {
              "schrift": "dum",
              "lerntext": "dum",
              "de": "dumm",
              "c": "a"
            },
            {
              "schrift": "vacker",
              "lerntext": "vacker",
              "de": "schön",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "väldigt",
            "lerntext": "väldigt",
            "de": "sehr"
          }
        ],
        "id": "1.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "han / hon / de är väldigt [Slot]",
          "lerntext": "han / hon / de är väldigt [Slot]",
          "wortarten": {
            "han": "p",
            "hon": "p",
            "är": "v"
          }
        },
        "frameDe": "er / sie (Sg.) / sie (Pl.) ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "rolig",
              "lerntext": "rolig",
              "de": "lustig",
              "c": "a"
            },
            {
              "schrift": "tråkig",
              "lerntext": "tråkig",
              "de": "langweilig",
              "c": "a"
            },
            {
              "schrift": "stark",
              "lerntext": "stark",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "svag",
              "lerntext": "svag",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "ung",
              "lerntext": "ung",
              "de": "jung",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "1.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "han / hon / de är väldigt [Slot]",
          "lerntext": "han / hon / de är väldigt [Slot]",
          "wortarten": {
            "han": "p",
            "hon": "p",
            "är": "v"
          }
        },
        "frameDe": "er / sie (Sg.) / sie (Pl.) ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gammal",
              "lerntext": "gammal",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "lycklig",
              "lerntext": "lycklig",
              "de": "glücklich",
              "c": "a"
            },
            {
              "schrift": "ensam",
              "lerntext": "ensam",
              "de": "einsam",
              "c": "a"
            },
            {
              "schrift": "nervös",
              "lerntext": "nervös",
              "de": "nervös",
              "c": "a"
            },
            {
              "schrift": "stressad",
              "lerntext": "stressad",
              "de": "gestresst",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "1.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / han / hon är [Slot]",
          "lerntext": "jag / du / han / hon är [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "hon": "p",
            "är": "v"
          }
        },
        "frameDe": "ich / du / er / sie (Sg.) bin [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trött",
              "lerntext": "trött",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "glad",
              "lerntext": "glad",
              "de": "froh",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ledsen",
              "lerntext": "ledsen",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arg",
              "lerntext": "arg",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nöjd",
              "lerntext": "nöjd",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "hungrig",
              "lerntext": "hungrig",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "törstig",
              "lerntext": "törstig",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "redo",
              "lerntext": "redo",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lugn",
              "lerntext": "lugn",
              "de": "ruhig",
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
          "schrift": "han / hon / de är väldigt [Slot]",
          "lerntext": "han / hon / de är väldigt [Slot]",
          "wortarten": {
            "han": "p",
            "hon": "p",
            "är": "v"
          }
        },
        "frameDe": "er / sie (Sg.) / sie (Pl.) ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "snäll",
              "lerntext": "snäll",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "trevlig",
              "lerntext": "trevlig",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smart",
              "lerntext": "smart",
              "de": "klug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dum",
              "lerntext": "dum",
              "de": "dumm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vacker",
              "lerntext": "vacker",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rolig",
              "lerntext": "rolig",
              "de": "lustig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tråkig",
              "lerntext": "tråkig",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stark",
              "lerntext": "stark",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svag",
              "lerntext": "svag",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ung",
              "lerntext": "ung",
              "de": "jung",
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
          "schrift": "jag / du / han / hon är [Slot]",
          "lerntext": "jag / du / han / hon är [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "hon": "p",
            "är": "v"
          }
        },
        "frameDe": "ich / du / er / sie (Sg.) bin [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trött",
              "lerntext": "trött",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "glad",
              "lerntext": "glad",
              "de": "froh",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ledsen",
              "lerntext": "ledsen",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arg",
              "lerntext": "arg",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nöjd",
              "lerntext": "nöjd",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "hungrig",
              "lerntext": "hungrig",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "törstig",
              "lerntext": "törstig",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "redo",
              "lerntext": "redo",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lugn",
              "lerntext": "lugn",
              "de": "ruhig",
              "c": "a",
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
        "kind": "frame",
        "frame": {
          "schrift": "han / hon / de är väldigt [Slot]",
          "lerntext": "han / hon / de är väldigt [Slot]",
          "wortarten": {
            "han": "p",
            "hon": "p",
            "är": "v"
          }
        },
        "frameDe": "er / sie (Sg.) / sie (Pl.) ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gammal",
              "lerntext": "gammal",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lycklig",
              "lerntext": "lycklig",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ensam",
              "lerntext": "ensam",
              "de": "einsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nervös",
              "lerntext": "nervös",
              "de": "nervös",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stressad",
              "lerntext": "stressad",
              "de": "gestresst",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "snäll",
              "lerntext": "snäll",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "trevlig",
              "lerntext": "trevlig",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smart",
              "lerntext": "smart",
              "de": "klug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dum",
              "lerntext": "dum",
              "de": "dumm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vacker",
              "lerntext": "vacker",
              "de": "schön",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "1.11"
      },
      {
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
        "id": "1.12"
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
          "schrift": "det är en [Slot]",
          "lerntext": "det är en [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "den",
            "lerntext": "den",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "väska",
              "lerntext": "väska",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "lampa",
              "lerntext": "lampa",
              "de": "Lampe",
              "c": "n"
            },
            {
              "schrift": "dörr",
              "lerntext": "dörr",
              "de": "Tür",
              "c": "n"
            },
            {
              "schrift": "mamma",
              "lerntext": "mamma",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "syster",
              "lerntext": "syster",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "fru",
              "lerntext": "fru",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "polis",
              "lerntext": "polis",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är en [Slot]",
          "lerntext": "det är en [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "den",
            "lerntext": "den",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "penna",
              "lerntext": "penna",
              "de": "Stift",
              "c": "n"
            },
            {
              "schrift": "stol",
              "lerntext": "stol",
              "de": "Stuhl",
              "c": "n"
            },
            {
              "schrift": "nyckel",
              "lerntext": "nyckel",
              "de": "Schlüssel",
              "c": "n"
            },
            {
              "schrift": "dator",
              "lerntext": "dator",
              "de": "Computer",
              "c": "n"
            },
            {
              "schrift": "pappa",
              "lerntext": "pappa",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "lärare",
              "lerntext": "lärare",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kollega",
              "lerntext": "kollega",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chef",
              "lerntext": "chef",
              "de": "Chef",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "turist",
              "lerntext": "turist",
              "de": "Tourist",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vän",
              "lerntext": "vän",
              "de": "Freund",
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
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är en [Slot]",
          "lerntext": "det är en [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "den",
            "lerntext": "den",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bror",
              "lerntext": "bror",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "penna",
              "lerntext": "penna",
              "de": "Stift",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stol",
              "lerntext": "stol",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nyckel",
              "lerntext": "nyckel",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dator",
              "lerntext": "dator",
              "de": "Computer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pappa",
              "lerntext": "pappa",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lärare",
              "lerntext": "lärare",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kollega",
              "lerntext": "kollega",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chef",
              "lerntext": "chef",
              "de": "Chef",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "turist",
              "lerntext": "turist",
              "de": "Tourist",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vän",
              "lerntext": "vän",
              "de": "Freund",
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
          "schrift": "det är en [Slot]",
          "lerntext": "det är en [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "den",
            "lerntext": "den",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bok",
              "lerntext": "bok",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "säng",
              "lerntext": "säng",
              "de": "Bett",
              "c": "n"
            },
            {
              "schrift": "soffa",
              "lerntext": "soffa",
              "de": "Sofa",
              "c": "n"
            },
            {
              "schrift": "telefon",
              "lerntext": "telefon",
              "de": "Telefon",
              "c": "n"
            },
            {
              "schrift": "barn",
              "lerntext": "barn",
              "de": "Kind",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "2.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är ett [Slot]",
          "lerntext": "det är ett [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kök",
              "lerntext": "kök",
              "de": "Küche",
              "c": "n"
            },
            {
              "schrift": "syster",
              "lerntext": "syster",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dörr",
              "lerntext": "dörr",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väska",
              "lerntext": "väska",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lampa",
              "lerntext": "lampa",
              "de": "Lampe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mamma",
              "lerntext": "mamma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fru",
              "lerntext": "fru",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "polis",
              "lerntext": "polis",
              "de": "Polizei",
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
          "schrift": "det är ett [Slot]",
          "lerntext": "det är ett [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bord",
              "lerntext": "bord",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "jobb",
              "lerntext": "jobb",
              "de": "Job",
              "c": "n"
            },
            {
              "schrift": "bror",
              "lerntext": "bror",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nyckel",
              "lerntext": "nyckel",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "penna",
              "lerntext": "penna",
              "de": "Stift",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dator",
              "lerntext": "dator",
              "de": "Computer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pappa",
              "lerntext": "pappa",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stol",
              "lerntext": "stol",
              "de": "Stuhl",
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
              "schrift": "lärare",
              "lerntext": "lärare",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kollega",
              "lerntext": "kollega",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chef",
              "lerntext": "chef",
              "de": "Chef",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är ett [Slot]",
          "lerntext": "det är ett [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hus",
              "lerntext": "hus",
              "de": "Haus",
              "c": "n"
            },
            {
              "schrift": "rum",
              "lerntext": "rum",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "fönster",
              "lerntext": "fönster",
              "de": "Fenster",
              "c": "n"
            },
            {
              "schrift": "papper",
              "lerntext": "papper",
              "de": "Papier",
              "c": "n"
            },
            {
              "schrift": "glas",
              "lerntext": "glas",
              "de": "Glas (Trinkgefäß)",
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
              "schrift": "säng",
              "lerntext": "säng",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soffa",
              "lerntext": "soffa",
              "de": "Sofa",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bok",
              "lerntext": "bok",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "barn",
              "lerntext": "barn",
              "de": "Kind",
              "c": "n",
              "wieder": true
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
          "schrift": "det är ett [Slot]",
          "lerntext": "det är ett [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kontor",
              "lerntext": "kontor",
              "de": "Büro",
              "c": "n"
            },
            {
              "schrift": "hotell",
              "lerntext": "hotell",
              "de": "Hotel",
              "c": "n"
            },
            {
              "schrift": "hus",
              "lerntext": "hus",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rum",
              "lerntext": "rum",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fönster",
              "lerntext": "fönster",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "papper",
              "lerntext": "papper",
              "de": "Papier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "glas",
              "lerntext": "glas",
              "de": "Glas (Trinkgefäß)",
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
              "schrift": "säng",
              "lerntext": "säng",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soffa",
              "lerntext": "soffa",
              "de": "Sofa",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bok",
              "lerntext": "bok",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "barn",
              "lerntext": "barn",
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
          "schrift": "jag / du / han / vi har en [Slot]",
          "lerntext": "jag / du / han / vi har en [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "vi": "p",
            "har": "v"
          }
        },
        "frameDe": "ich / du / er / wir habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "familj",
              "lerntext": "familj",
              "de": "Familie",
              "c": "n"
            },
            {
              "schrift": "dotter",
              "lerntext": "dotter",
              "de": "Tochter",
              "c": "n"
            },
            {
              "schrift": "lägenhet",
              "lerntext": "lägenhet",
              "de": "Wohnung",
              "c": "n"
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand",
              "c": "n"
            },
            {
              "schrift": "kök",
              "lerntext": "kök",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "syster",
              "lerntext": "syster",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dörr",
              "lerntext": "dörr",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väska",
              "lerntext": "väska",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lampa",
              "lerntext": "lampa",
              "de": "Lampe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mamma",
              "lerntext": "mamma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fru",
              "lerntext": "fru",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "polis",
              "lerntext": "polis",
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
            "schrift": "har",
            "lerntext": "har",
            "de": "haben",
            "c": "v"
          }
        ],
        "id": "2.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / han / vi har en [Slot]",
          "lerntext": "jag / du / han / vi har en [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "vi": "p",
            "har": "v"
          }
        },
        "frameDe": "ich / du / er / wir habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
              "c": "n"
            },
            {
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm",
              "c": "n"
            },
            {
              "schrift": "fot",
              "lerntext": "fot",
              "de": "Fuß",
              "c": "n"
            },
            {
              "schrift": "kropp",
              "lerntext": "kropp",
              "de": "Körper",
              "c": "n"
            },
            {
              "schrift": "mun",
              "lerntext": "mun",
              "de": "Mund",
              "c": "n"
            },
            {
              "schrift": "jobb",
              "lerntext": "jobb",
              "de": "Job",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bord",
              "lerntext": "bord",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bror",
              "lerntext": "bror",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nyckel",
              "lerntext": "nyckel",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "penna",
              "lerntext": "penna",
              "de": "Stift",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dator",
              "lerntext": "dator",
              "de": "Computer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "turist",
              "lerntext": "turist",
              "de": "Tourist",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pappa",
              "lerntext": "pappa",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vän",
              "lerntext": "vän",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stol",
              "lerntext": "stol",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / han / vi har en [Slot]",
          "lerntext": "jag / du / han / vi har en [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "vi": "p",
            "har": "v"
          }
        },
        "frameDe": "ich / du / er / wir habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bil",
              "lerntext": "bil",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "kontor",
              "lerntext": "kontor",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hotell",
              "lerntext": "hotell",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "glas",
              "lerntext": "glas",
              "de": "Glas (Trinkgefäß)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hus",
              "lerntext": "hus",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rum",
              "lerntext": "rum",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "papper",
              "lerntext": "papper",
              "de": "Papier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fönster",
              "lerntext": "fönster",
              "de": "Fenster",
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
              "schrift": "soffa",
              "lerntext": "soffa",
              "de": "Sofa",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "säng",
              "lerntext": "säng",
              "de": "Bett",
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
          "schrift": "det är min [Slot]",
          "lerntext": "det är min [Slot]",
          "wortarten": {
            "är": "v",
            "min": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "min",
            "lerntext": "min",
            "de": "mein (Utrum)",
            "c": "p"
          },
          {
            "schrift": "din",
            "lerntext": "din",
            "de": "dein (Utrum)",
            "c": "p"
          },
          {
            "schrift": "vår",
            "lerntext": "vår",
            "de": "unser (Utrum)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mor",
              "lerntext": "mor",
              "de": "Mutter (formell)",
              "c": "n"
            },
            {
              "schrift": "far",
              "lerntext": "far",
              "de": "Vater (formell)",
              "c": "n"
            },
            {
              "schrift": "fru",
              "lerntext": "fru",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "kollega",
              "lerntext": "kollega",
              "de": "Kollege",
              "c": "n"
            },
            {
              "schrift": "chef",
              "lerntext": "chef",
              "de": "Chef",
              "c": "n"
            },
            {
              "schrift": "dotter",
              "lerntext": "dotter",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lägenhet",
              "lerntext": "lägenhet",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bil",
              "lerntext": "bil",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mun",
              "lerntext": "mun",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fot",
              "lerntext": "fot",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kropp",
              "lerntext": "kropp",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "familj",
              "lerntext": "familj",
              "de": "Familie",
              "c": "n",
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
          "schrift": "det är [Slot] hus",
          "lerntext": "det är [Slot] hus",
          "wortarten": {
            "är": "v",
            "hus": "n"
          }
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mitt",
            "lerntext": "mitt",
            "de": "mein (Neutrum)",
            "c": "p"
          },
          {
            "schrift": "ditt",
            "lerntext": "ditt",
            "de": "dein (Neutrum)",
            "c": "p"
          },
          {
            "schrift": "vårt",
            "lerntext": "vårt",
            "de": "unser (Neutrum)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sitt",
              "lerntext": "sitt",
              "de": "sein",
              "c": "p"
            },
            {
              "schrift": "detta",
              "lerntext": "detta",
              "de": "dieses (Neutrum)",
              "c": "p"
            },
            {
              "schrift": "vår",
              "lerntext": "vår",
              "de": "unser (Utrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "man",
              "lerntext": "man",
              "de": "man",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "din",
              "lerntext": "din",
              "de": "dein (Utrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "min",
              "lerntext": "min",
              "de": "mein (Utrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "hon",
              "lerntext": "hon",
              "de": "sie (Sg.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "du",
              "lerntext": "du",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "den",
              "lerntext": "den",
              "de": "er",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "jag",
              "lerntext": "jag",
              "de": "ich",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.13"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är [Slot] böcker",
          "lerntext": "det är [Slot] böcker",
          "wortarten": {
            "är": "v",
            "böcker": "n"
          }
        },
        "frameDe": "Das sind [Slot] Bücher.",
        "pronouns": [
          {
            "schrift": "mina",
            "lerntext": "mina",
            "de": "meine (Pl.)",
            "c": "p"
          },
          {
            "schrift": "dina",
            "lerntext": "dina",
            "de": "deine (Pl.)",
            "c": "p"
          },
          {
            "schrift": "våra",
            "lerntext": "våra",
            "de": "unsere (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dessa",
              "lerntext": "dessa",
              "de": "diese (Pl.)",
              "c": "p"
            },
            {
              "schrift": "alla",
              "lerntext": "alla",
              "de": "alle",
              "c": "p"
            },
            {
              "schrift": "ditt",
              "lerntext": "ditt",
              "de": "dein (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mitt",
              "lerntext": "mitt",
              "de": "mein (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vårt",
              "lerntext": "vårt",
              "de": "unser (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vår",
              "lerntext": "vår",
              "de": "unser (Utrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "man",
              "lerntext": "man",
              "de": "man",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "din",
              "lerntext": "din",
              "de": "dein (Utrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "sitt",
              "lerntext": "sitt",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "min",
              "lerntext": "min",
              "de": "mein (Utrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "de",
              "lerntext": "de",
              "de": "sie (Pl.)",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.14"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] är här",
          "lerntext": "[Slot] är här",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "ingen",
            "lerntext": "ingen",
            "de": "keiner",
            "c": "p"
          },
          {
            "schrift": "inget",
            "lerntext": "inget",
            "de": "keines (Neutrum)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "denna",
              "lerntext": "denna",
              "de": "dieser",
              "c": "p"
            },
            {
              "schrift": "sin",
              "lerntext": "sin",
              "de": "sein",
              "c": "p"
            },
            {
              "schrift": "er",
              "lerntext": "er",
              "de": "euch",
              "c": "p"
            },
            {
              "schrift": "dina",
              "lerntext": "dina",
              "de": "deine (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "våra",
              "lerntext": "våra",
              "de": "unsere (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mina",
              "lerntext": "mina",
              "de": "meine (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ditt",
              "lerntext": "ditt",
              "de": "dein (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mitt",
              "lerntext": "mitt",
              "de": "mein (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vårt",
              "lerntext": "vårt",
              "de": "unser (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "dessa",
              "lerntext": "dessa",
              "de": "diese (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "alla",
              "lerntext": "alla",
              "de": "alle",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vår",
              "lerntext": "vår",
              "de": "unser (Utrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "ihr",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "här",
            "lerntext": "här",
            "de": "hier"
          }
        ],
        "id": "2.15"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är min [Slot]",
          "lerntext": "det är min [Slot]",
          "wortarten": {
            "är": "v",
            "min": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "min",
            "lerntext": "min",
            "de": "mein (Utrum)",
            "c": "p"
          },
          {
            "schrift": "din",
            "lerntext": "din",
            "de": "dein (Utrum)",
            "c": "p"
          },
          {
            "schrift": "vår",
            "lerntext": "vår",
            "de": "unser (Utrum)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mor",
              "lerntext": "mor",
              "de": "Mutter (formell)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "far",
              "lerntext": "far",
              "de": "Vater (formell)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dotter",
              "lerntext": "dotter",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lägenhet",
              "lerntext": "lägenhet",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bil",
              "lerntext": "bil",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mun",
              "lerntext": "mun",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fot",
              "lerntext": "fot",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kropp",
              "lerntext": "kropp",
              "de": "Körper",
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
          "schrift": "det är [Slot] hus",
          "lerntext": "det är [Slot] hus",
          "wortarten": {
            "är": "v",
            "hus": "n"
          }
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mitt",
            "lerntext": "mitt",
            "de": "mein (Neutrum)",
            "c": "p"
          },
          {
            "schrift": "ditt",
            "lerntext": "ditt",
            "de": "dein (Neutrum)",
            "c": "p"
          },
          {
            "schrift": "vårt",
            "lerntext": "vårt",
            "de": "unser (Neutrum)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "detta",
              "lerntext": "detta",
              "de": "dieses (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "man",
              "lerntext": "man",
              "de": "man",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "din",
              "lerntext": "din",
              "de": "dein (Utrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "sitt",
              "lerntext": "sitt",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vår",
              "lerntext": "vår",
              "de": "unser (Utrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "min",
              "lerntext": "min",
              "de": "mein (Utrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "hon",
              "lerntext": "hon",
              "de": "sie (Sg.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "du",
              "lerntext": "du",
              "de": "du",
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
          "schrift": "[Slot] är här",
          "lerntext": "[Slot] är här",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "ingen",
            "lerntext": "ingen",
            "de": "keiner",
            "c": "p"
          },
          {
            "schrift": "inget",
            "lerntext": "inget",
            "de": "keines (Neutrum)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dina",
              "lerntext": "dina",
              "de": "deine (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "våra",
              "lerntext": "våra",
              "de": "unsere (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mina",
              "lerntext": "mina",
              "de": "meine (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "denna",
              "lerntext": "denna",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "sin",
              "lerntext": "sin",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "er",
              "lerntext": "er",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ditt",
              "lerntext": "ditt",
              "de": "dein (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mitt",
              "lerntext": "mitt",
              "de": "mein (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vårt",
              "lerntext": "vårt",
              "de": "unser (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "dessa",
              "lerntext": "dessa",
              "de": "diese (Pl.)",
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
          "schrift": "[Slot] är här",
          "lerntext": "[Slot] är här",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "ingen",
            "lerntext": "ingen",
            "de": "keiner",
            "c": "p"
          },
          {
            "schrift": "inget",
            "lerntext": "inget",
            "de": "keines (Neutrum)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dina",
              "lerntext": "dina",
              "de": "deine (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "våra",
              "lerntext": "våra",
              "de": "unsere (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mina",
              "lerntext": "mina",
              "de": "meine (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "denna",
              "lerntext": "denna",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "sin",
              "lerntext": "sin",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "er",
              "lerntext": "er",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ditt",
              "lerntext": "ditt",
              "de": "dein (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mitt",
              "lerntext": "mitt",
              "de": "mein (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vårt",
              "lerntext": "vårt",
              "de": "unser (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "alla",
              "lerntext": "alla",
              "de": "alle",
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
          "schrift": "jag / du / vi vill ha [Slot]",
          "lerntext": "jag / du / vi vill ha [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "vill": "v",
            "ha": "v"
          }
        },
        "frameDe": "ich / du / wir möchte [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vatten",
              "lerntext": "vatten",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "kaffe",
              "lerntext": "kaffe",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "Tee",
              "c": "n"
            },
            {
              "schrift": "öl",
              "lerntext": "öl",
              "de": "Bier",
              "c": "n"
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "c": "n"
            },
            {
              "schrift": "far",
              "lerntext": "far",
              "de": "Vater (formell)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bord",
              "lerntext": "bord",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jobb",
              "lerntext": "jobb",
              "de": "Job",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mor",
              "lerntext": "mor",
              "de": "Mutter (formell)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kontor",
              "lerntext": "kontor",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kök",
              "lerntext": "kök",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hotell",
              "lerntext": "hotell",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "familj",
              "lerntext": "familj",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "syster",
              "lerntext": "syster",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "vill",
            "lerntext": "vill",
            "de": "wollen",
            "c": "v"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / vi vill ha [Slot]",
          "lerntext": "jag / du / vi vill ha [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "vill": "v",
            "ha": "v"
          }
        },
        "frameDe": "ich / du / wir möchte [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mat",
              "lerntext": "mat",
              "de": "Essen (allgemein)",
              "c": "n"
            },
            {
              "schrift": "bröd",
              "lerntext": "bröd",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "ost",
              "lerntext": "ost",
              "de": "Käse",
              "c": "n"
            },
            {
              "schrift": "mjölk",
              "lerntext": "mjölk",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "socker",
              "lerntext": "socker",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "vatten",
              "lerntext": "vatten",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kaffe",
              "lerntext": "kaffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "öl",
              "lerntext": "öl",
              "de": "Bier",
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
              "schrift": "dotter",
              "lerntext": "dotter",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "far",
              "lerntext": "far",
              "de": "Vater (formell)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lägenhet",
              "lerntext": "lägenhet",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väska",
              "lerntext": "väska",
              "de": "Tasche",
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
          "schrift": "jag / du / han behöver [Slot]",
          "lerntext": "jag / du / han behöver [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "behöver": "v"
          }
        },
        "frameDe": "ich / du / er brauche [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hjälp",
              "lerntext": "hjälp",
              "de": "Hilfe",
              "c": "n"
            },
            {
              "schrift": "tid",
              "lerntext": "tid",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "pengar",
              "lerntext": "pengar",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz",
              "c": "n"
            },
            {
              "schrift": "smör",
              "lerntext": "smör",
              "de": "Butter",
              "c": "n"
            },
            {
              "schrift": "ost",
              "lerntext": "ost",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bröd",
              "lerntext": "bröd",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mjölk",
              "lerntext": "mjölk",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "socker",
              "lerntext": "socker",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mat",
              "lerntext": "mat",
              "de": "Essen (allgemein)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vatten",
              "lerntext": "vatten",
              "de": "Wasser",
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
              "schrift": "kaffe",
              "lerntext": "kaffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "öl",
              "lerntext": "öl",
              "de": "Bier",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "behöver",
            "lerntext": "behöver",
            "de": "brauchen",
            "c": "v"
          }
        ],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag vill ha en [Slot], tack",
          "lerntext": "jag vill ha en [Slot], tack",
          "wortarten": {
            "jag": "p",
            "vill": "v",
            "ha": "v"
          }
        },
        "frameDe": "ich möchte eine [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "soppa",
              "lerntext": "soppa",
              "de": "Suppe",
              "c": "n"
            },
            {
              "schrift": "banan",
              "lerntext": "banan",
              "de": "Banane",
              "c": "n"
            },
            {
              "schrift": "potatis",
              "lerntext": "potatis",
              "de": "Kartoffel",
              "c": "n"
            },
            {
              "schrift": "tid",
              "lerntext": "tid",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "smör",
              "lerntext": "smör",
              "de": "Butter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hjälp",
              "lerntext": "hjälp",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mjölk",
              "lerntext": "mjölk",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mamma",
              "lerntext": "mamma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dörr",
              "lerntext": "dörr",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lampa",
              "lerntext": "lampa",
              "de": "Lampe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kök",
              "lerntext": "kök",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "familj",
              "lerntext": "familj",
              "de": "Familie",
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
          "schrift": "jag vill ha en [Slot], tack",
          "lerntext": "jag vill ha en [Slot], tack",
          "wortarten": {
            "jag": "p",
            "vill": "v",
            "ha": "v"
          }
        },
        "frameDe": "ich möchte einen [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sallad",
              "lerntext": "sallad",
              "de": "Salat",
              "c": "n"
            },
            {
              "schrift": "kaka",
              "lerntext": "kaka",
              "de": "Kuchen",
              "c": "n"
            },
            {
              "schrift": "ost",
              "lerntext": "ost",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "socker",
              "lerntext": "socker",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bord",
              "lerntext": "bord",
              "de": "Tisch",
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
              "schrift": "jobb",
              "lerntext": "jobb",
              "de": "Job",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kaffe",
              "lerntext": "kaffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bror",
              "lerntext": "bror",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mun",
              "lerntext": "mun",
              "de": "Mund",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "3.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag vill ha en [Slot], tack",
          "lerntext": "jag vill ha en [Slot], tack",
          "wortarten": {
            "jag": "p",
            "vill": "v",
            "ha": "v"
          }
        },
        "frameDe": "ich möchte ein [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "frukost",
              "lerntext": "frukost",
              "de": "Frühstück",
              "c": "n"
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen",
              "c": "n"
            },
            {
              "schrift": "middag",
              "lerntext": "middag",
              "de": "Abendessen",
              "c": "n"
            },
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Eis (Süßspeise)",
              "c": "n"
            },
            {
              "schrift": "frukt",
              "lerntext": "frukt",
              "de": "Obst",
              "c": "n"
            },
            {
              "schrift": "pengar",
              "lerntext": "pengar",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bröd",
              "lerntext": "bröd",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "glas",
              "lerntext": "glas",
              "de": "Glas (Trinkgefäß)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vatten",
              "lerntext": "vatten",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kontor",
              "lerntext": "kontor",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bil",
              "lerntext": "bil",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rum",
              "lerntext": "rum",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hotell",
              "lerntext": "hotell",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "öl",
              "lerntext": "öl",
              "de": "Bier",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "3.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / vi äter [Slot]",
          "lerntext": "jag / vi äter [Slot]",
          "wortarten": {
            "jag": "p",
            "vi": "p",
            "äter": "v"
          }
        },
        "frameDe": "ich / wir esse [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kött",
              "lerntext": "kött",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "fisk",
              "lerntext": "fisk",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "ägg",
              "lerntext": "ägg",
              "de": "Ei",
              "c": "n"
            },
            {
              "schrift": "äpple",
              "lerntext": "äpple",
              "de": "Apfel",
              "c": "n"
            },
            {
              "schrift": "grönsak",
              "lerntext": "grönsak",
              "de": "Gemüse (einzelnes)",
              "c": "n"
            },
            {
              "schrift": "sallad",
              "lerntext": "sallad",
              "de": "Salat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soppa",
              "lerntext": "soppa",
              "de": "Suppe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banan",
              "lerntext": "banan",
              "de": "Banane",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Eis (Süßspeise)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frukost",
              "lerntext": "frukost",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kaka",
              "lerntext": "kaka",
              "de": "Kuchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "potatis",
              "lerntext": "potatis",
              "de": "Kartoffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frukt",
              "lerntext": "frukt",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "middag",
              "lerntext": "middag",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "äter",
            "lerntext": "äter",
            "de": "essen",
            "c": "v"
          },
          {
            "schrift": "dricker",
            "lerntext": "dricker",
            "de": "trinken",
            "c": "v"
          }
        ],
        "id": "3.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / vi äter [Slot]",
          "lerntext": "jag / vi äter [Slot]",
          "wortarten": {
            "jag": "p",
            "vi": "p",
            "äter": "v"
          }
        },
        "frameDe": "ich / wir esse [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kött",
              "lerntext": "kött",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fisk",
              "lerntext": "fisk",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ägg",
              "lerntext": "ägg",
              "de": "Ei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "äpple",
              "lerntext": "äpple",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "grönsak",
              "lerntext": "grönsak",
              "de": "Gemüse (einzelnes)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sallad",
              "lerntext": "sallad",
              "de": "Salat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soppa",
              "lerntext": "soppa",
              "de": "Suppe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banan",
              "lerntext": "banan",
              "de": "Banane",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Eis (Süßspeise)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frukost",
              "lerntext": "frukost",
              "de": "Frühstück",
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
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / han behöver [Slot]",
          "lerntext": "jag / du / han behöver [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "behöver": "v"
          }
        },
        "frameDe": "ich / du / er brauche [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hjälp",
              "lerntext": "hjälp",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tid",
              "lerntext": "tid",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pengar",
              "lerntext": "pengar",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "smör",
              "lerntext": "smör",
              "de": "Butter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mat",
              "lerntext": "mat",
              "de": "Essen (allgemein)",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "3.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / vi äter [Slot]",
          "lerntext": "jag / vi äter [Slot]",
          "wortarten": {
            "jag": "p",
            "vi": "p",
            "äter": "v"
          }
        },
        "frameDe": "ich / wir esse [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kött",
              "lerntext": "kött",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fisk",
              "lerntext": "fisk",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ägg",
              "lerntext": "ägg",
              "de": "Ei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "äpple",
              "lerntext": "äpple",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "grönsak",
              "lerntext": "grönsak",
              "de": "Gemüse (einzelnes)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kaka",
              "lerntext": "kaka",
              "de": "Kuchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "potatis",
              "lerntext": "potatis",
              "de": "Kartoffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frukt",
              "lerntext": "frukt",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "middag",
              "lerntext": "middag",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "3.10"
      },
      {
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
        "id": "3.11"
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
          "schrift": "jag / du / han / hon är inte [Slot]",
          "lerntext": "jag / du / han / hon är inte [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "hon": "p",
            "är": "v"
          }
        },
        "frameDe": "ich / du / er / sie (Sg.) bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "färdig",
              "lerntext": "färdig",
              "de": "fertig",
              "c": "a"
            },
            {
              "schrift": "klar",
              "lerntext": "klar",
              "de": "fertig",
              "c": "a"
            },
            {
              "schrift": "säker",
              "lerntext": "säker",
              "de": "sicher",
              "c": "a"
            },
            {
              "schrift": "rädd",
              "lerntext": "rädd",
              "de": "ängstlich",
              "c": "a"
            },
            {
              "schrift": "förvånad",
              "lerntext": "förvånad",
              "de": "überrascht",
              "c": "a"
            },
            {
              "schrift": "rolig",
              "lerntext": "rolig",
              "de": "lustig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tråkig",
              "lerntext": "tråkig",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stressad",
              "lerntext": "stressad",
              "de": "gestresst",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stark",
              "lerntext": "stark",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ung",
              "lerntext": "ung",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nervös",
              "lerntext": "nervös",
              "de": "nervös",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gammal",
              "lerntext": "gammal",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lycklig",
              "lerntext": "lycklig",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svag",
              "lerntext": "svag",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ensam",
              "lerntext": "ensam",
              "de": "einsam",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "inte",
            "lerntext": "inte",
            "de": "nicht"
          },
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ja"
          },
          {
            "schrift": "nej",
            "lerntext": "nej",
            "de": "nein"
          }
        ],
        "id": "4.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "är du / han / hon / ni [Slot]?",
          "lerntext": "är du / han / hon / ni [Slot]?",
          "wortarten": {
            "är": "v",
            "du": "p",
            "han": "p",
            "hon": "p",
            "ni": "p"
          }
        },
        "frameDe": "Bist du / er / sie (Sg.) / ihr [Slot]?",
        "pronouns": [
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "ni",
            "lerntext": "ni",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gammal",
              "lerntext": "gammal",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "ny",
              "lerntext": "ny",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "bra",
              "lerntext": "bra",
              "de": "gut",
              "c": "a"
            },
            {
              "schrift": "dålig",
              "lerntext": "dålig",
              "de": "schlecht",
              "c": "a"
            },
            {
              "schrift": "viktig",
              "lerntext": "viktig",
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "färdig",
              "lerntext": "färdig",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "säker",
              "lerntext": "säker",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "klar",
              "lerntext": "klar",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rädd",
              "lerntext": "rädd",
              "de": "ängstlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "förvånad",
              "lerntext": "förvånad",
              "de": "überrascht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "törstig",
              "lerntext": "törstig",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "hungrig",
              "lerntext": "hungrig",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rolig",
              "lerntext": "rolig",
              "de": "lustig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tråkig",
              "lerntext": "tråkig",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stressad",
              "lerntext": "stressad",
              "de": "gestresst",
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
          "schrift": "[Slot] är det?",
          "lerntext": "[Slot] är det?",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "vad",
            "lerntext": "vad",
            "de": "was"
          },
          {
            "schrift": "vem",
            "lerntext": "vem",
            "de": "wer"
          },
          {
            "schrift": "hur",
            "lerntext": "hur",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vilken",
              "lerntext": "vilken",
              "de": "welcher"
            },
            {
              "schrift": "vilket",
              "lerntext": "vilket",
              "de": "welches (Neutrum)"
            },
            {
              "schrift": "vilka",
              "lerntext": "vilka",
              "de": "welche (Pl.)"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "vad",
            "lerntext": "vad",
            "de": "was"
          },
          {
            "schrift": "vem",
            "lerntext": "vem",
            "de": "wer"
          },
          {
            "schrift": "hur",
            "lerntext": "hur",
            "de": "wie"
          },
          {
            "schrift": "varför",
            "lerntext": "varför",
            "de": "warum"
          }
        ],
        "id": "4.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] är det?",
          "lerntext": "[Slot] är det?",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "vad",
            "lerntext": "vad",
            "de": "was"
          },
          {
            "schrift": "vem",
            "lerntext": "vem",
            "de": "wer"
          },
          {
            "schrift": "hur",
            "lerntext": "hur",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "något",
              "lerntext": "något",
              "de": "etwas",
              "c": "p"
            },
            {
              "schrift": "allt",
              "lerntext": "allt",
              "de": "alles",
              "c": "p"
            },
            {
              "schrift": "ingen",
              "lerntext": "ingen",
              "de": "keiner",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "inget",
              "lerntext": "inget",
              "de": "keines (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "dina",
              "lerntext": "dina",
              "de": "deine (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "våra",
              "lerntext": "våra",
              "de": "unsere (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "man",
              "lerntext": "man",
              "de": "man",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mina",
              "lerntext": "mina",
              "de": "meine (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "den",
              "lerntext": "den",
              "de": "er",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "de",
              "lerntext": "de",
              "de": "sie (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "detta",
              "lerntext": "detta",
              "de": "dieses (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "din",
              "lerntext": "din",
              "de": "dein (Utrum)",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "4.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "är du / han / hon / ni [Slot]?",
          "lerntext": "är du / han / hon / ni [Slot]?",
          "wortarten": {
            "är": "v",
            "du": "p",
            "han": "p",
            "hon": "p",
            "ni": "p"
          }
        },
        "frameDe": "Bist du / er / sie (Sg.) / ihr [Slot]?",
        "pronouns": [
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "ni",
            "lerntext": "ni",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ny",
              "lerntext": "ny",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bra",
              "lerntext": "bra",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dålig",
              "lerntext": "dålig",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "viktig",
              "lerntext": "viktig",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "färdig",
              "lerntext": "färdig",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "säker",
              "lerntext": "säker",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "klar",
              "lerntext": "klar",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rädd",
              "lerntext": "rädd",
              "de": "ängstlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "förvånad",
              "lerntext": "förvånad",
              "de": "überrascht",
              "c": "a",
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
          "schrift": "[Slot] är det?",
          "lerntext": "[Slot] är det?",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "vad",
            "lerntext": "vad",
            "de": "was"
          },
          {
            "schrift": "vem",
            "lerntext": "vem",
            "de": "wer"
          },
          {
            "schrift": "hur",
            "lerntext": "hur",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ingen",
              "lerntext": "ingen",
              "de": "keiner",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "inget",
              "lerntext": "inget",
              "de": "keines (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vilken",
              "lerntext": "vilken",
              "de": "welcher",
              "wieder": true
            },
            {
              "schrift": "vilket",
              "lerntext": "vilket",
              "de": "welches (Neutrum)",
              "wieder": true
            },
            {
              "schrift": "vilka",
              "lerntext": "vilka",
              "de": "welche (Pl.)",
              "wieder": true
            },
            {
              "schrift": "något",
              "lerntext": "något",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "allt",
              "lerntext": "allt",
              "de": "alles",
              "c": "p",
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
          "schrift": "är du / han / hon / ni [Slot]?",
          "lerntext": "är du / han / hon / ni [Slot]?",
          "wortarten": {
            "är": "v",
            "du": "p",
            "han": "p",
            "hon": "p",
            "ni": "p"
          }
        },
        "frameDe": "Bist du / er / sie (Sg.) / ihr [Slot]?",
        "pronouns": [
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "ni",
            "lerntext": "ni",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ny",
              "lerntext": "ny",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bra",
              "lerntext": "bra",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dålig",
              "lerntext": "dålig",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "viktig",
              "lerntext": "viktig",
              "de": "wichtig",
              "c": "a",
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
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] är det?",
          "lerntext": "[Slot] är det?",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "vad",
            "lerntext": "vad",
            "de": "was"
          },
          {
            "schrift": "vem",
            "lerntext": "vem",
            "de": "wer"
          },
          {
            "schrift": "hur",
            "lerntext": "hur",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ingen",
              "lerntext": "ingen",
              "de": "keiner",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "inget",
              "lerntext": "inget",
              "de": "keines (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vilken",
              "lerntext": "vilken",
              "de": "welcher",
              "wieder": true
            },
            {
              "schrift": "vilket",
              "lerntext": "vilket",
              "de": "welches (Neutrum)",
              "wieder": true
            },
            {
              "schrift": "vilka",
              "lerntext": "vilka",
              "de": "welche (Pl.)",
              "wieder": true
            },
            {
              "schrift": "något",
              "lerntext": "något",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "allt",
              "lerntext": "allt",
              "de": "alles",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "4.8"
      },
      {
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
        "id": "4.9"
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
          "schrift": "var finns en [Slot]?",
          "lerntext": "var finns en [Slot]?",
          "wortarten": {
            "var": "v"
          }
        },
        "frameDe": "Wo gibt es eine [Slot]?",
        "pronouns": [
          {
            "schrift": "var",
            "lerntext": "var",
            "de": "wo"
          },
          {
            "schrift": "vart",
            "lerntext": "vart",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bank",
              "lerntext": "bank",
              "de": "Bank (Institut)",
              "c": "n"
            },
            {
              "schrift": "toalett",
              "lerntext": "toalett",
              "de": "Toilette",
              "c": "n"
            },
            {
              "schrift": "kyrka",
              "lerntext": "kyrka",
              "de": "Kirche",
              "c": "n"
            },
            {
              "schrift": "skola",
              "lerntext": "skola",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "gata",
              "lerntext": "gata",
              "de": "Straße",
              "c": "n"
            },
            {
              "schrift": "soppa",
              "lerntext": "soppa",
              "de": "Suppe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banan",
              "lerntext": "banan",
              "de": "Banane",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "potatis",
              "lerntext": "potatis",
              "de": "Kartoffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tid",
              "lerntext": "tid",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mjölk",
              "lerntext": "mjölk",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "smör",
              "lerntext": "smör",
              "de": "Butter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hjälp",
              "lerntext": "hjälp",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "syster",
              "lerntext": "syster",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dotter",
              "lerntext": "dotter",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lägenhet",
              "lerntext": "lägenhet",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "var",
            "lerntext": "var",
            "de": "wo"
          }
        ],
        "id": "5.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "var finns en [Slot]?",
          "lerntext": "var finns en [Slot]?",
          "wortarten": {
            "var": "v"
          }
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "var",
            "lerntext": "var",
            "de": "wo"
          },
          {
            "schrift": "vart",
            "lerntext": "vart",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "butik",
              "lerntext": "butik",
              "de": "Laden",
              "c": "n"
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "flygplats",
              "lerntext": "flygplats",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "sallad",
              "lerntext": "sallad",
              "de": "Salat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kaka",
              "lerntext": "kaka",
              "de": "Kuchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ost",
              "lerntext": "ost",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "socker",
              "lerntext": "socker",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fisk",
              "lerntext": "fisk",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fot",
              "lerntext": "fot",
              "de": "Fuß",
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
              "schrift": "kropp",
              "lerntext": "kropp",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "äpple",
              "lerntext": "äpple",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lärare",
              "lerntext": "lärare",
              "de": "Lehrer",
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
          "schrift": "var finns en [Slot]?",
          "lerntext": "var finns en [Slot]?",
          "wortarten": {
            "var": "v"
          }
        },
        "frameDe": "Wo gibt es ein [Slot]?",
        "pronouns": [
          {
            "schrift": "var",
            "lerntext": "var",
            "de": "wo"
          },
          {
            "schrift": "vart",
            "lerntext": "vart",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "affär",
              "lerntext": "affär",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "restaurang",
              "lerntext": "restaurang",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "grönsak",
              "lerntext": "grönsak",
              "de": "Gemüse (einzelnes)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Eis (Süßspeise)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frukost",
              "lerntext": "frukost",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ägg",
              "lerntext": "ägg",
              "de": "Ei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pengar",
              "lerntext": "pengar",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kött",
              "lerntext": "kött",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bröd",
              "lerntext": "bröd",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bok",
              "lerntext": "bok",
              "de": "Buch",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "5.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "var finns ett [Slot]?",
          "lerntext": "var finns ett [Slot]?",
          "wortarten": {
            "var": "v"
          }
        },
        "frameDe": "Wo gibt es eine [Slot]?",
        "pronouns": [
          {
            "schrift": "var",
            "lerntext": "var",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bibliotek",
              "lerntext": "bibliotek",
              "de": "Bibliothek",
              "c": "n"
            },
            {
              "schrift": "universitet",
              "lerntext": "universitet",
              "de": "Universität",
              "c": "n"
            },
            {
              "schrift": "toalett",
              "lerntext": "toalett",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skola",
              "lerntext": "skola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gata",
              "lerntext": "gata",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kyrka",
              "lerntext": "kyrka",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bank",
              "lerntext": "bank",
              "de": "Bank (Institut)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soppa",
              "lerntext": "soppa",
              "de": "Suppe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banan",
              "lerntext": "banan",
              "de": "Banane",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väska",
              "lerntext": "väska",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "potatis",
              "lerntext": "potatis",
              "de": "Kartoffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mamma",
              "lerntext": "mamma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
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
          "schrift": "var finns ett [Slot]?",
          "lerntext": "var finns ett [Slot]?",
          "wortarten": {
            "var": "v"
          }
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "var",
            "lerntext": "var",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "torg",
              "lerntext": "torg",
              "de": "Marktplatz",
              "c": "n"
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "flygplats",
              "lerntext": "flygplats",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "butik",
              "lerntext": "butik",
              "de": "Laden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sallad",
              "lerntext": "sallad",
              "de": "Salat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dator",
              "lerntext": "dator",
              "de": "Computer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "penna",
              "lerntext": "penna",
              "de": "Stift",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kaka",
              "lerntext": "kaka",
              "de": "Kuchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ost",
              "lerntext": "ost",
              "de": "Käse",
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
          "schrift": "var finns ett [Slot]?",
          "lerntext": "var finns ett [Slot]?",
          "wortarten": {
            "var": "v"
          }
        },
        "frameDe": "Wo gibt es ein [Slot]?",
        "pronouns": [
          {
            "schrift": "var",
            "lerntext": "var",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sjukhus",
              "lerntext": "sjukhus",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "museum",
              "lerntext": "museum",
              "de": "Museum",
              "c": "n"
            },
            {
              "schrift": "affär",
              "lerntext": "affär",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restaurang",
              "lerntext": "restaurang",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frukt",
              "lerntext": "frukt",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "middag",
              "lerntext": "middag",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "papper",
              "lerntext": "papper",
              "de": "Papier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fönster",
              "lerntext": "fönster",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "grönsak",
              "lerntext": "grönsak",
              "de": "Gemüse (einzelnes)",
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
              "schrift": "soffa",
              "lerntext": "soffa",
              "de": "Sofa",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Eis (Süßspeise)",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "5.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] är här",
          "lerntext": "[Slot] är här",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "här",
            "lerntext": "här",
            "de": "hier"
          },
          {
            "schrift": "där",
            "lerntext": "där",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stad",
              "lerntext": "stad",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "bro",
              "lerntext": "bro",
              "de": "Brücke",
              "c": "n"
            },
            {
              "schrift": "park",
              "lerntext": "park",
              "de": "Park",
              "c": "n"
            },
            {
              "schrift": "väg",
              "lerntext": "väg",
              "de": "Weg",
              "c": "n"
            },
            {
              "schrift": "hamn",
              "lerntext": "hamn",
              "de": "Hafen",
              "c": "n"
            },
            {
              "schrift": "universitet",
              "lerntext": "universitet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bibliotek",
              "lerntext": "bibliotek",
              "de": "Bibliothek",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "museum",
              "lerntext": "museum",
              "de": "Museum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sjukhus",
              "lerntext": "sjukhus",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "torg",
              "lerntext": "torg",
              "de": "Marktplatz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "toalett",
              "lerntext": "toalett",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "affär",
              "lerntext": "affär",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restaurang",
              "lerntext": "restaurang",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skola",
              "lerntext": "skola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "där",
            "lerntext": "där",
            "de": "dort"
          },
          {
            "schrift": "hos",
            "lerntext": "hos",
            "de": "bei"
          }
        ],
        "id": "5.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] är här",
          "lerntext": "[Slot] är här",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "här",
            "lerntext": "här",
            "de": "hier"
          },
          {
            "schrift": "där",
            "lerntext": "där",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "strand",
              "lerntext": "strand",
              "de": "Strand",
              "c": "n"
            },
            {
              "schrift": "skog",
              "lerntext": "skog",
              "de": "Wald",
              "c": "n"
            },
            {
              "schrift": "sjö",
              "lerntext": "sjö",
              "de": "See (Gewässer)",
              "c": "n"
            },
            {
              "schrift": "natur",
              "lerntext": "natur",
              "de": "Natur",
              "c": "n"
            },
            {
              "schrift": "gräns",
              "lerntext": "gräns",
              "de": "Grenze",
              "c": "n"
            },
            {
              "schrift": "stad",
              "lerntext": "stad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bro",
              "lerntext": "bro",
              "de": "Brücke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "park",
              "lerntext": "park",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väg",
              "lerntext": "väg",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hamn",
              "lerntext": "hamn",
              "de": "Hafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "flygplats",
              "lerntext": "flygplats",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universitet",
              "lerntext": "universitet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bibliotek",
              "lerntext": "bibliotek",
              "de": "Bibliothek",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "museum",
              "lerntext": "museum",
              "de": "Museum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sjukhus",
              "lerntext": "sjukhus",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "5.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det ligger [Slot] huset",
          "lerntext": "det ligger [Slot] huset",
          "wortarten": {
            "ligger": "v",
            "huset": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "in"
          },
          {
            "schrift": "på",
            "lerntext": "på",
            "de": "auf"
          },
          {
            "schrift": "till",
            "lerntext": "till",
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "under",
              "lerntext": "under",
              "de": "unter"
            },
            {
              "schrift": "över",
              "lerntext": "över",
              "de": "über"
            },
            {
              "schrift": "mellan",
              "lerntext": "mellan",
              "de": "zwischen"
            },
            {
              "schrift": "bakom",
              "lerntext": "bakom",
              "de": "hinter"
            },
            {
              "schrift": "framför",
              "lerntext": "framför",
              "de": "vor (räumlich)"
            },
            {
              "schrift": "hos",
              "lerntext": "hos",
              "de": "bei",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "in"
          },
          {
            "schrift": "på",
            "lerntext": "på",
            "de": "auf"
          },
          {
            "schrift": "till",
            "lerntext": "till",
            "de": "zu"
          },
          {
            "schrift": "från",
            "lerntext": "från",
            "de": "von"
          },
          {
            "schrift": "med",
            "lerntext": "med",
            "de": "mit"
          },
          {
            "schrift": "om",
            "lerntext": "om",
            "de": "über"
          },
          {
            "schrift": "av",
            "lerntext": "av",
            "de": "von"
          },
          {
            "schrift": "efter",
            "lerntext": "efter",
            "de": "nach"
          }
        ],
        "id": "5.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det ligger [Slot] huset",
          "lerntext": "det ligger [Slot] huset",
          "wortarten": {
            "ligger": "v",
            "huset": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "in"
          },
          {
            "schrift": "på",
            "lerntext": "på",
            "de": "auf"
          },
          {
            "schrift": "till",
            "lerntext": "till",
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bredvid",
              "lerntext": "bredvid",
              "de": "neben"
            },
            {
              "schrift": "genom",
              "lerntext": "genom",
              "de": "durch"
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "gegen"
            },
            {
              "schrift": "vid",
              "lerntext": "vid",
              "de": "bei"
            },
            {
              "schrift": "runt",
              "lerntext": "runt",
              "de": "um"
            },
            {
              "schrift": "under",
              "lerntext": "under",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "över",
              "lerntext": "över",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "mellan",
              "lerntext": "mellan",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "bakom",
              "lerntext": "bakom",
              "de": "hinter",
              "wieder": true
            },
            {
              "schrift": "framför",
              "lerntext": "framför",
              "de": "vor (räumlich)",
              "wieder": true
            },
            {
              "schrift": "hos",
              "lerntext": "hos",
              "de": "bei",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "5.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] är här",
          "lerntext": "[Slot] är här",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "här",
            "lerntext": "här",
            "de": "hier"
          },
          {
            "schrift": "där",
            "lerntext": "där",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "strand",
              "lerntext": "strand",
              "de": "Strand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skog",
              "lerntext": "skog",
              "de": "Wald",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sjö",
              "lerntext": "sjö",
              "de": "See (Gewässer)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "natur",
              "lerntext": "natur",
              "de": "Natur",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gräns",
              "lerntext": "gräns",
              "de": "Grenze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stad",
              "lerntext": "stad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bro",
              "lerntext": "bro",
              "de": "Brücke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "park",
              "lerntext": "park",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väg",
              "lerntext": "väg",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hamn",
              "lerntext": "hamn",
              "de": "Hafen",
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
          "schrift": "det ligger [Slot] huset",
          "lerntext": "det ligger [Slot] huset",
          "wortarten": {
            "ligger": "v",
            "huset": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "in"
          },
          {
            "schrift": "på",
            "lerntext": "på",
            "de": "auf"
          },
          {
            "schrift": "till",
            "lerntext": "till",
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bredvid",
              "lerntext": "bredvid",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "genom",
              "lerntext": "genom",
              "de": "durch",
              "wieder": true
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "vid",
              "lerntext": "vid",
              "de": "bei",
              "wieder": true
            },
            {
              "schrift": "runt",
              "lerntext": "runt",
              "de": "um",
              "wieder": true
            },
            {
              "schrift": "under",
              "lerntext": "under",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "över",
              "lerntext": "över",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "mellan",
              "lerntext": "mellan",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "bakom",
              "lerntext": "bakom",
              "de": "hinter",
              "wieder": true
            },
            {
              "schrift": "framför",
              "lerntext": "framför",
              "de": "vor (räumlich)",
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
          "schrift": "[Slot] är här",
          "lerntext": "[Slot] är här",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "här",
            "lerntext": "här",
            "de": "hier"
          },
          {
            "schrift": "där",
            "lerntext": "där",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "torg",
              "lerntext": "torg",
              "de": "Marktplatz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "strand",
              "lerntext": "strand",
              "de": "Strand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skog",
              "lerntext": "skog",
              "de": "Wald",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sjö",
              "lerntext": "sjö",
              "de": "See (Gewässer)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "natur",
              "lerntext": "natur",
              "de": "Natur",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gräns",
              "lerntext": "gräns",
              "de": "Grenze",
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
        "kind": "frame",
        "frame": {
          "schrift": "det ligger [Slot] huset",
          "lerntext": "det ligger [Slot] huset",
          "wortarten": {
            "ligger": "v",
            "huset": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "in"
          },
          {
            "schrift": "på",
            "lerntext": "på",
            "de": "auf"
          },
          {
            "schrift": "till",
            "lerntext": "till",
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bredvid",
              "lerntext": "bredvid",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "genom",
              "lerntext": "genom",
              "de": "durch",
              "wieder": true
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "vid",
              "lerntext": "vid",
              "de": "bei",
              "wieder": true
            },
            {
              "schrift": "runt",
              "lerntext": "runt",
              "de": "um",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "5.14"
      },
      {
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
        "id": "5.15"
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
              "schrift": "noll",
              "lerntext": "noll",
              "de": "null"
            },
            {
              "schrift": "en/ett",
              "lerntext": "en/ett",
              "de": "eins"
            },
            {
              "schrift": "två",
              "lerntext": "två",
              "de": "zwei"
            },
            {
              "schrift": "tre",
              "lerntext": "tre",
              "de": "drei"
            },
            {
              "schrift": "fyra",
              "lerntext": "fyra",
              "de": "vier"
            },
            {
              "schrift": "fem",
              "lerntext": "fem",
              "de": "fünf"
            },
            {
              "schrift": "sex",
              "lerntext": "sex",
              "de": "sechs"
            },
            {
              "schrift": "sju",
              "lerntext": "sju",
              "de": "sieben"
            },
            {
              "schrift": "åtta",
              "lerntext": "åtta",
              "de": "acht"
            },
            {
              "schrift": "nio",
              "lerntext": "nio",
              "de": "neun"
            },
            {
              "schrift": "tio",
              "lerntext": "tio",
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
              "schrift": "elva",
              "lerntext": "elva",
              "de": "elf"
            },
            {
              "schrift": "tolv",
              "lerntext": "tolv",
              "de": "zwölf"
            },
            {
              "schrift": "tretton",
              "lerntext": "tretton",
              "de": "dreizehn"
            },
            {
              "schrift": "fjorton",
              "lerntext": "fjorton",
              "de": "vierzehn"
            },
            {
              "schrift": "femton",
              "lerntext": "femton",
              "de": "fünfzehn"
            },
            {
              "schrift": "sexton",
              "lerntext": "sexton",
              "de": "sechzehn"
            },
            {
              "schrift": "sjutton",
              "lerntext": "sjutton",
              "de": "siebzehn"
            },
            {
              "schrift": "arton",
              "lerntext": "arton",
              "de": "achtzehn"
            },
            {
              "schrift": "nitton",
              "lerntext": "nitton",
              "de": "neunzehn"
            },
            {
              "schrift": "tjugo",
              "lerntext": "tjugo",
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
              "schrift": "trettio",
              "lerntext": "trettio",
              "de": "dreißig"
            },
            {
              "schrift": "fyrtio",
              "lerntext": "fyrtio",
              "de": "vierzig"
            },
            {
              "schrift": "femtio",
              "lerntext": "femtio",
              "de": "fünfzig"
            },
            {
              "schrift": "sextio",
              "lerntext": "sextio",
              "de": "sechzig"
            },
            {
              "schrift": "sjuttio",
              "lerntext": "sjuttio",
              "de": "siebzig"
            },
            {
              "schrift": "åttio",
              "lerntext": "åttio",
              "de": "achtzig"
            },
            {
              "schrift": "nittio",
              "lerntext": "nittio",
              "de": "neunzig"
            },
            {
              "schrift": "hundra",
              "lerntext": "hundra",
              "de": "hundert"
            },
            {
              "schrift": "tusen",
              "lerntext": "tusen",
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
          "schrift": "det är den [Slot] gången",
          "lerntext": "det är den [Slot] gången",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist das [Slot] Mal.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "första",
              "lerntext": "första",
              "de": "erste(r)"
            },
            {
              "schrift": "andra",
              "lerntext": "andra",
              "de": "zweite(r)"
            },
            {
              "schrift": "tredje",
              "lerntext": "tredje",
              "de": "dritte(r)"
            },
            {
              "schrift": "sexton",
              "lerntext": "sexton",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "femton",
              "lerntext": "femton",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "trettio",
              "lerntext": "trettio",
              "de": "dreißig",
              "wieder": true
            },
            {
              "schrift": "nio",
              "lerntext": "nio",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "tolv",
              "lerntext": "tolv",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "tio",
              "lerntext": "tio",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "fjorton",
              "lerntext": "fjorton",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "åttio",
              "lerntext": "åttio",
              "de": "achtzig",
              "wieder": true
            },
            {
              "schrift": "två",
              "lerntext": "två",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "nittio",
              "lerntext": "nittio",
              "de": "neunzig",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "6.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "hur mycket kostar en [Slot]?",
          "lerntext": "hur mycket kostar en [Slot]?"
        },
        "frameDe": "Wie viel kostet eine [Slot]?",
        "pronouns": [
          {
            "schrift": "hur mycket",
            "lerntext": "hur mycket",
            "de": "wie viel"
          },
          {
            "schrift": "hur många",
            "lerntext": "hur många",
            "de": "wie viele"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "karta",
              "lerntext": "karta",
              "de": "Landkarte",
              "c": "n"
            },
            {
              "schrift": "gata",
              "lerntext": "gata",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kyrka",
              "lerntext": "kyrka",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bank",
              "lerntext": "bank",
              "de": "Bank (Institut)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "toalett",
              "lerntext": "toalett",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bro",
              "lerntext": "bro",
              "de": "Brücke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gräns",
              "lerntext": "gräns",
              "de": "Grenze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skola",
              "lerntext": "skola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universitet",
              "lerntext": "universitet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "natur",
              "lerntext": "natur",
              "de": "Natur",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bibliotek",
              "lerntext": "bibliotek",
              "de": "Bibliothek",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "hur mycket",
            "lerntext": "hur mycket",
            "de": "wie viel"
          },
          {
            "schrift": "hur många",
            "lerntext": "hur många",
            "de": "wie viele"
          },
          {
            "schrift": "mycket",
            "lerntext": "mycket",
            "de": "sehr"
          },
          {
            "schrift": "lite",
            "lerntext": "lite",
            "de": "wenig"
          }
        ],
        "id": "6.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "hur mycket kostar en [Slot]?",
          "lerntext": "hur mycket kostar en [Slot]?"
        },
        "frameDe": "Wie viel kostet ein [Slot]?",
        "pronouns": [
          {
            "schrift": "hur mycket",
            "lerntext": "hur mycket",
            "de": "wie viel"
          },
          {
            "schrift": "hur många",
            "lerntext": "hur många",
            "de": "wie viele"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kurs",
              "lerntext": "kurs",
              "de": "Kurs",
              "c": "n"
            },
            {
              "schrift": "resväska",
              "lerntext": "resväska",
              "de": "Koffer",
              "c": "n"
            },
            {
              "schrift": "butik",
              "lerntext": "butik",
              "de": "Laden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "strand",
              "lerntext": "strand",
              "de": "Strand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "park",
              "lerntext": "park",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skog",
              "lerntext": "skog",
              "de": "Wald",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "flygplats",
              "lerntext": "flygplats",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sjö",
              "lerntext": "sjö",
              "de": "See (Gewässer)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "torg",
              "lerntext": "torg",
              "de": "Marktplatz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väg",
              "lerntext": "väg",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "turist",
              "lerntext": "turist",
              "de": "Tourist",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "6.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "hur mycket kostar en [Slot]?",
          "lerntext": "hur mycket kostar en [Slot]?"
        },
        "frameDe": "Wie viel kostet ein [Slot]?",
        "pronouns": [
          {
            "schrift": "hur mycket",
            "lerntext": "hur mycket",
            "de": "wie viel"
          },
          {
            "schrift": "hur många",
            "lerntext": "hur många",
            "de": "wie viele"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "biljett",
              "lerntext": "biljett",
              "de": "Ticket",
              "c": "n"
            },
            {
              "schrift": "affär",
              "lerntext": "affär",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restaurang",
              "lerntext": "restaurang",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "museum",
              "lerntext": "museum",
              "de": "Museum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sjukhus",
              "lerntext": "sjukhus",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frukost",
              "lerntext": "frukost",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ägg",
              "lerntext": "ägg",
              "de": "Ei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "säng",
              "lerntext": "säng",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "glas",
              "lerntext": "glas",
              "de": "Glas (Trinkgefäß)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vatten",
              "lerntext": "vatten",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pengar",
              "lerntext": "pengar",
              "de": "Geld",
              "c": "n",
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
          "schrift": "hur mycket kostar en [Slot]?",
          "lerntext": "hur mycket kostar en [Slot]?"
        },
        "frameDe": "Wie viel kostet ein [Slot]?",
        "pronouns": [
          {
            "schrift": "hur mycket",
            "lerntext": "hur mycket",
            "de": "wie viel"
          },
          {
            "schrift": "hur många",
            "lerntext": "hur många",
            "de": "wie viele"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "resa",
              "lerntext": "resa",
              "de": "reisen",
              "c": "v"
            },
            {
              "schrift": "äta",
              "lerntext": "äta",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "behöva",
              "lerntext": "behöva",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dricka",
              "lerntext": "dricka",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vara",
              "lerntext": "vara",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vilja",
              "lerntext": "vilja",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ha",
              "lerntext": "ha",
              "de": "haben",
              "c": "v",
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
          "schrift": "det är för [Slot]",
          "lerntext": "det är för [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dyr",
              "lerntext": "dyr",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "billig",
              "lerntext": "billig",
              "de": "billig",
              "c": "a"
            },
            {
              "schrift": "stor",
              "lerntext": "stor",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "liten",
              "lerntext": "liten",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "lång",
              "lerntext": "lång",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "viktig",
              "lerntext": "viktig",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bra",
              "lerntext": "bra",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "färdig",
              "lerntext": "färdig",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "snäll",
              "lerntext": "snäll",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stark",
              "lerntext": "stark",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dålig",
              "lerntext": "dålig",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ung",
              "lerntext": "ung",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "trött",
              "lerntext": "trött",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nervös",
              "lerntext": "nervös",
              "de": "nervös",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "för",
            "lerntext": "för",
            "de": "für"
          },
          {
            "schrift": "utan",
            "lerntext": "utan",
            "de": "ohne"
          }
        ],
        "id": "6.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är för [Slot]",
          "lerntext": "det är för [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "kort",
              "lerntext": "kort",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "hög",
              "lerntext": "hög",
              "de": "hoch",
              "c": "a"
            },
            {
              "schrift": "låg",
              "lerntext": "låg",
              "de": "niedrig",
              "c": "a"
            },
            {
              "schrift": "tung",
              "lerntext": "tung",
              "de": "schwer (Gewicht)",
              "c": "a"
            },
            {
              "schrift": "lätt",
              "lerntext": "lätt",
              "de": "leicht (Gewicht)",
              "c": "a"
            },
            {
              "schrift": "dyr",
              "lerntext": "dyr",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "billig",
              "lerntext": "billig",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stor",
              "lerntext": "stor",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "liten",
              "lerntext": "liten",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lång",
              "lerntext": "lång",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "säker",
              "lerntext": "säker",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lycklig",
              "lerntext": "lycklig",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dum",
              "lerntext": "dum",
              "de": "dumm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "trevlig",
              "lerntext": "trevlig",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lugn",
              "lerntext": "lugn",
              "de": "ruhig",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "6.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är för [Slot]",
          "lerntext": "det är för [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bred",
              "lerntext": "bred",
              "de": "breit",
              "c": "a"
            },
            {
              "schrift": "smal",
              "lerntext": "smal",
              "de": "schmal",
              "c": "a"
            },
            {
              "schrift": "djup",
              "lerntext": "djup",
              "de": "tief",
              "c": "a"
            },
            {
              "schrift": "tjock",
              "lerntext": "tjock",
              "de": "dick",
              "c": "a"
            },
            {
              "schrift": "tunn",
              "lerntext": "tunn",
              "de": "dünn",
              "c": "a"
            },
            {
              "schrift": "kort",
              "lerntext": "kort",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "hög",
              "lerntext": "hög",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "låg",
              "lerntext": "låg",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tung",
              "lerntext": "tung",
              "de": "schwer (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lätt",
              "lerntext": "lätt",
              "de": "leicht (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dyr",
              "lerntext": "dyr",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "billig",
              "lerntext": "billig",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stor",
              "lerntext": "stor",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "liten",
              "lerntext": "liten",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lång",
              "lerntext": "lång",
              "de": "lang",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
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
              "schrift": "noll",
              "lerntext": "noll",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "en/ett",
              "lerntext": "en/ett",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "tre",
              "lerntext": "tre",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "fyra",
              "lerntext": "fyra",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "fem",
              "lerntext": "fem",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "sex",
              "lerntext": "sex",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "sju",
              "lerntext": "sju",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "åtta",
              "lerntext": "åtta",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "elva",
              "lerntext": "elva",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "tretton",
              "lerntext": "tretton",
              "de": "dreizehn",
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
              "schrift": "sjutton",
              "lerntext": "sjutton",
              "de": "siebzehn",
              "wieder": true
            },
            {
              "schrift": "arton",
              "lerntext": "arton",
              "de": "achtzehn",
              "wieder": true
            },
            {
              "schrift": "nitton",
              "lerntext": "nitton",
              "de": "neunzehn",
              "wieder": true
            },
            {
              "schrift": "tjugo",
              "lerntext": "tjugo",
              "de": "zwanzig",
              "wieder": true
            },
            {
              "schrift": "fyrtio",
              "lerntext": "fyrtio",
              "de": "vierzig",
              "wieder": true
            },
            {
              "schrift": "femtio",
              "lerntext": "femtio",
              "de": "fünfzig",
              "wieder": true
            },
            {
              "schrift": "sextio",
              "lerntext": "sextio",
              "de": "sechzig",
              "wieder": true
            },
            {
              "schrift": "sjuttio",
              "lerntext": "sjuttio",
              "de": "siebzig",
              "wieder": true
            },
            {
              "schrift": "hundra",
              "lerntext": "hundra",
              "de": "hundert",
              "wieder": true
            },
            {
              "schrift": "tusen",
              "lerntext": "tusen",
              "de": "tausend",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "6.13"
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
              "schrift": "noll",
              "lerntext": "noll",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "en/ett",
              "lerntext": "en/ett",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "två",
              "lerntext": "två",
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
              "schrift": "fyra",
              "lerntext": "fyra",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "fem",
              "lerntext": "fem",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "sex",
              "lerntext": "sex",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "sju",
              "lerntext": "sju",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "åtta",
              "lerntext": "åtta",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "nio",
              "lerntext": "nio",
              "de": "neun",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "6.14"
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
              "schrift": "tio",
              "lerntext": "tio",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "elva",
              "lerntext": "elva",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "tolv",
              "lerntext": "tolv",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "tretton",
              "lerntext": "tretton",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "fjorton",
              "lerntext": "fjorton",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "femton",
              "lerntext": "femton",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "sexton",
              "lerntext": "sexton",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "sjutton",
              "lerntext": "sjutton",
              "de": "siebzehn",
              "wieder": true
            },
            {
              "schrift": "arton",
              "lerntext": "arton",
              "de": "achtzehn",
              "wieder": true
            },
            {
              "schrift": "nitton",
              "lerntext": "nitton",
              "de": "neunzehn",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "6.15"
      },
      {
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
        "id": "6.16"
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
          "schrift": "jag / du / vi / han kan [Slot]",
          "lerntext": "jag / du / vi / han kan [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "han": "p",
            "kan": "v"
          }
        },
        "frameDe": "ich / du / wir / er kann [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "simma",
              "lerntext": "simma",
              "de": "schwimmen",
              "c": "v"
            },
            {
              "schrift": "dansa",
              "lerntext": "dansa",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "laga",
              "lerntext": "laga",
              "de": "reparieren",
              "c": "v"
            },
            {
              "schrift": "spela",
              "lerntext": "spela",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "köra",
              "lerntext": "köra",
              "de": "fahren (Fahrzeug)",
              "c": "v"
            },
            {
              "schrift": "äta",
              "lerntext": "äta",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "behöva",
              "lerntext": "behöva",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "resa",
              "lerntext": "resa",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dricka",
              "lerntext": "dricka",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vara",
              "lerntext": "vara",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vilja",
              "lerntext": "vilja",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ha",
              "lerntext": "ha",
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
            "schrift": "kan",
            "lerntext": "kan",
            "de": "können",
            "c": "v"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / vi / han kan [Slot]",
          "lerntext": "jag / du / vi / han kan [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "han": "p",
            "kan": "v"
          }
        },
        "frameDe": "ich / du / wir / er kann [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "skriva",
              "lerntext": "skriva",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "läsa",
              "lerntext": "läsa",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "hjälpa",
              "lerntext": "hjälpa",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "visa",
              "lerntext": "visa",
              "de": "zeigen",
              "c": "v"
            },
            {
              "schrift": "förklara",
              "lerntext": "förklara",
              "de": "erklären",
              "c": "v"
            },
            {
              "schrift": "simma",
              "lerntext": "simma",
              "de": "schwimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dansa",
              "lerntext": "dansa",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "laga",
              "lerntext": "laga",
              "de": "reparieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spela",
              "lerntext": "spela",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "köra",
              "lerntext": "köra",
              "de": "fahren (Fahrzeug)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "äta",
              "lerntext": "äta",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "behöva",
              "lerntext": "behöva",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "resa",
              "lerntext": "resa",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dricka",
              "lerntext": "dricka",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vara",
              "lerntext": "vara",
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
          "schrift": "jag / du / vi / han kan [Slot]",
          "lerntext": "jag / du / vi / han kan [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "han": "p",
            "kan": "v"
          }
        },
        "frameDe": "ich / du / wir / er kann [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "göra",
              "lerntext": "göra",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "säga",
              "lerntext": "säga",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "använda",
              "lerntext": "använda",
              "de": "benutzen",
              "c": "v"
            },
            {
              "schrift": "bygga",
              "lerntext": "bygga",
              "de": "bauen",
              "c": "v"
            },
            {
              "schrift": "skapa",
              "lerntext": "skapa",
              "de": "erschaffen",
              "c": "v"
            },
            {
              "schrift": "skriva",
              "lerntext": "skriva",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "läsa",
              "lerntext": "läsa",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hjälpa",
              "lerntext": "hjälpa",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "visa",
              "lerntext": "visa",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förklara",
              "lerntext": "förklara",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "simma",
              "lerntext": "simma",
              "de": "schwimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dansa",
              "lerntext": "dansa",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "laga",
              "lerntext": "laga",
              "de": "reparieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spela",
              "lerntext": "spela",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "köra",
              "lerntext": "köra",
              "de": "fahren (Fahrzeug)",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / vi måste [Slot]",
          "lerntext": "jag / du / vi måste [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "måste": "v"
          }
        },
        "frameDe": "ich / du / wir muss [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "arbeta",
              "lerntext": "arbeta",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "sova",
              "lerntext": "sova",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "vänta",
              "lerntext": "vänta",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "betala",
              "lerntext": "betala",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "börja",
              "lerntext": "börja",
              "de": "beginnen",
              "c": "v"
            },
            {
              "schrift": "skapa",
              "lerntext": "skapa",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "säga",
              "lerntext": "säga",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bygga",
              "lerntext": "bygga",
              "de": "bauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "använda",
              "lerntext": "använda",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "göra",
              "lerntext": "göra",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "visa",
              "lerntext": "visa",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kunna",
              "lerntext": "kunna",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förklara",
              "lerntext": "förklara",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skriva",
              "lerntext": "skriva",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hjälpa",
              "lerntext": "hjälpa",
              "de": "helfen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "måste",
            "lerntext": "måste",
            "de": "müssen",
            "c": "v"
          }
        ],
        "id": "7.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / vi måste [Slot]",
          "lerntext": "jag / du / vi måste [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "måste": "v"
          }
        },
        "frameDe": "ich / du / wir muss [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sluta",
              "lerntext": "sluta",
              "de": "aufhören",
              "c": "v"
            },
            {
              "schrift": "duscha",
              "lerntext": "duscha",
              "de": "duschen",
              "c": "v"
            },
            {
              "schrift": "tvätta",
              "lerntext": "tvätta",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "städa",
              "lerntext": "städa",
              "de": "putzen",
              "c": "v"
            },
            {
              "schrift": "bestämma",
              "lerntext": "bestämma",
              "de": "bestimmen",
              "c": "v"
            },
            {
              "schrift": "arbeta",
              "lerntext": "arbeta",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sova",
              "lerntext": "sova",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vänta",
              "lerntext": "vänta",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "betala",
              "lerntext": "betala",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "börja",
              "lerntext": "börja",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skapa",
              "lerntext": "skapa",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "säga",
              "lerntext": "säga",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bygga",
              "lerntext": "bygga",
              "de": "bauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "använda",
              "lerntext": "använda",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "göra",
              "lerntext": "göra",
              "de": "machen",
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
          "schrift": "jag / du / han / hon vill [Slot]",
          "lerntext": "jag / du / han / hon vill [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "hon": "p",
            "vill": "v"
          }
        },
        "frameDe": "ich / du / er / sie (Sg.) will [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "prata",
              "lerntext": "prata",
              "de": "reden",
              "c": "v"
            },
            {
              "schrift": "lyssna",
              "lerntext": "lyssna",
              "de": "zuhören",
              "c": "v"
            },
            {
              "schrift": "titta",
              "lerntext": "titta",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "träffa",
              "lerntext": "träffa",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "ringa",
              "lerntext": "ringa",
              "de": "anrufen",
              "c": "v"
            },
            {
              "schrift": "bestämma",
              "lerntext": "bestämma",
              "de": "bestimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "städa",
              "lerntext": "städa",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tvätta",
              "lerntext": "tvätta",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "duscha",
              "lerntext": "duscha",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sluta",
              "lerntext": "sluta",
              "de": "aufhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sova",
              "lerntext": "sova",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arbeta",
              "lerntext": "arbeta",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "börja",
              "lerntext": "börja",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "betala",
              "lerntext": "betala",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vänta",
              "lerntext": "vänta",
              "de": "warten",
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
          "schrift": "jag / du / han / hon vill [Slot]",
          "lerntext": "jag / du / han / hon vill [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "hon": "p",
            "vill": "v"
          }
        },
        "frameDe": "ich / du / er / sie (Sg.) will [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fråga",
              "lerntext": "fråga",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "svara",
              "lerntext": "svara",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "tala",
              "lerntext": "tala",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "höra",
              "lerntext": "höra",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "prata",
              "lerntext": "prata",
              "de": "reden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lyssna",
              "lerntext": "lyssna",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "titta",
              "lerntext": "titta",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "träffa",
              "lerntext": "träffa",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ringa",
              "lerntext": "ringa",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bestämma",
              "lerntext": "bestämma",
              "de": "bestimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "städa",
              "lerntext": "städa",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tvätta",
              "lerntext": "tvätta",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "duscha",
              "lerntext": "duscha",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sluta",
              "lerntext": "sluta",
              "de": "aufhören",
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
          "schrift": "jag / du får inte [Slot]",
          "lerntext": "jag / du får inte [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "får": "v"
          }
        },
        "frameDe": "ich / du darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "glömma",
              "lerntext": "glömma",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "förlora",
              "lerntext": "förlora",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "gråta",
              "lerntext": "gråta",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "skratta",
              "lerntext": "skratta",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "stanna",
              "lerntext": "stanna",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "höra",
              "lerntext": "höra",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fråga",
              "lerntext": "fråga",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tala",
              "lerntext": "tala",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "svara",
              "lerntext": "svara",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prata",
              "lerntext": "prata",
              "de": "reden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "träffa",
              "lerntext": "träffa",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "titta",
              "lerntext": "titta",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lyssna",
              "lerntext": "lyssna",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ringa",
              "lerntext": "ringa",
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
            "schrift": "får",
            "lerntext": "får",
            "de": "bekommen",
            "c": "v"
          }
        ],
        "id": "7.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du får inte [Slot]",
          "lerntext": "jag / du får inte [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "får": "v"
          }
        },
        "frameDe": "ich / du darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dö",
              "lerntext": "dö",
              "de": "sterben",
              "c": "v"
            },
            {
              "schrift": "öppna",
              "lerntext": "öppna",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "stänga",
              "lerntext": "stänga",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "lämna",
              "lerntext": "lämna",
              "de": "verlassen",
              "c": "v"
            },
            {
              "schrift": "vinna",
              "lerntext": "vinna",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "glömma",
              "lerntext": "glömma",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förlora",
              "lerntext": "förlora",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gråta",
              "lerntext": "gråta",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skratta",
              "lerntext": "skratta",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stanna",
              "lerntext": "stanna",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "höra",
              "lerntext": "höra",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "läsa",
              "lerntext": "läsa",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "svara",
              "lerntext": "svara",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fråga",
              "lerntext": "fråga",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "sehen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "7.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du får inte [Slot]",
          "lerntext": "jag / du får inte [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "får": "v"
          }
        },
        "frameDe": "ich / du darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dö",
              "lerntext": "dö",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "öppna",
              "lerntext": "öppna",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stänga",
              "lerntext": "stänga",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lämna",
              "lerntext": "lämna",
              "de": "verlassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vinna",
              "lerntext": "vinna",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "glömma",
              "lerntext": "glömma",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förlora",
              "lerntext": "förlora",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gråta",
              "lerntext": "gråta",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skratta",
              "lerntext": "skratta",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stanna",
              "lerntext": "stanna",
              "de": "bleiben",
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
          "schrift": "jag / du får inte [Slot]",
          "lerntext": "jag / du får inte [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "får": "v"
          }
        },
        "frameDe": "ich / du darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tala",
              "lerntext": "tala",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dö",
              "lerntext": "dö",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "öppna",
              "lerntext": "öppna",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stänga",
              "lerntext": "stänga",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lämna",
              "lerntext": "lämna",
              "de": "verlassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vinna",
              "lerntext": "vinna",
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
          "schrift": "jag / du / vi / de går till en [Slot]",
          "lerntext": "jag / du / vi / de går till en [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "går": "v"
          }
        },
        "frameDe": "ich / du / wir / sie (Pl.) gehe zu einer [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lektion",
              "lerntext": "lektion",
              "de": "Unterrichtsstunde",
              "c": "n"
            },
            {
              "schrift": "klass",
              "lerntext": "klass",
              "de": "Klasse",
              "c": "n"
            },
            {
              "schrift": "karta",
              "lerntext": "karta",
              "de": "Landkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stad",
              "lerntext": "stad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kyrka",
              "lerntext": "kyrka",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gata",
              "lerntext": "gata",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bank",
              "lerntext": "bank",
              "de": "Bank (Institut)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "toalett",
              "lerntext": "toalett",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bro",
              "lerntext": "bro",
              "de": "Brücke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gräns",
              "lerntext": "gräns",
              "de": "Grenze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lampa",
              "lerntext": "lampa",
              "de": "Lampe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "går",
            "lerntext": "går",
            "de": "gehen",
            "c": "v"
          },
          {
            "schrift": "kommer",
            "lerntext": "kommer",
            "de": "kommen",
            "c": "v"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / vi / de går till en [Slot]",
          "lerntext": "jag / du / vi / de går till en [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "går": "v"
          }
        },
        "frameDe": "ich / du / wir / sie (Pl.) gehe zu einem [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kurs",
              "lerntext": "kurs",
              "de": "Kurs",
              "c": "n"
            },
            {
              "schrift": "resväska",
              "lerntext": "resväska",
              "de": "Koffer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "butik",
              "lerntext": "butik",
              "de": "Laden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "strand",
              "lerntext": "strand",
              "de": "Strand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "flygplats",
              "lerntext": "flygplats",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stol",
              "lerntext": "stol",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mun",
              "lerntext": "mun",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nyckel",
              "lerntext": "nyckel",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "äpple",
              "lerntext": "äpple",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / vi / de går till en [Slot]",
          "lerntext": "jag / du / vi / de går till en [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "går": "v"
          }
        },
        "frameDe": "ich / du / wir / sie (Pl.) gehe zu einem [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "intervju",
              "lerntext": "intervju",
              "de": "Vorstellungsgespräch",
              "c": "n"
            },
            {
              "schrift": "affär",
              "lerntext": "affär",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "biljett",
              "lerntext": "biljett",
              "de": "Ticket",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hus",
              "lerntext": "hus",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "museum",
              "lerntext": "museum",
              "de": "Museum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sjukhus",
              "lerntext": "sjukhus",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restaurang",
              "lerntext": "restaurang",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bröd",
              "lerntext": "bröd",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rum",
              "lerntext": "rum",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hotell",
              "lerntext": "hotell",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "öl",
              "lerntext": "öl",
              "de": "Bier",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "8.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / vi åker [Slot]",
          "lerntext": "jag / vi åker [Slot]",
          "wortarten": {
            "jag": "p",
            "vi": "p"
          }
        },
        "frameDe": "ich / wir fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buss",
              "lerntext": "buss",
              "de": "Bus",
              "c": "n"
            },
            {
              "schrift": "tåg",
              "lerntext": "tåg",
              "de": "Zug",
              "c": "n"
            },
            {
              "schrift": "bil",
              "lerntext": "bil",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "flygplan",
              "lerntext": "flygplan",
              "de": "Flugzeug",
              "c": "n"
            },
            {
              "schrift": "väg",
              "lerntext": "väg",
              "de": "Weg",
              "c": "n"
            },
            {
              "schrift": "intervju",
              "lerntext": "intervju",
              "de": "Vorstellungsgespräch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klass",
              "lerntext": "klass",
              "de": "Klasse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lektion",
              "lerntext": "lektion",
              "de": "Unterrichtsstunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "resväska",
              "lerntext": "resväska",
              "de": "Koffer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "biljett",
              "lerntext": "biljett",
              "de": "Ticket",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "karta",
              "lerntext": "karta",
              "de": "Landkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mat",
              "lerntext": "mat",
              "de": "Essen (allgemein)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mor",
              "lerntext": "mor",
              "de": "Mutter (formell)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hamn",
              "lerntext": "hamn",
              "de": "Hafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bord",
              "lerntext": "bord",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "reser",
            "lerntext": "reser",
            "de": "reisen",
            "c": "v"
          }
        ],
        "id": "8.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / han / hon [Slot] nu",
          "lerntext": "jag / han / hon [Slot] nu",
          "wortarten": {
            "jag": "p",
            "han": "p",
            "hon": "p"
          }
        },
        "frameDe": "ich / er / sie (Sg.) [Slot] jetzt.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "springer",
              "lerntext": "springer",
              "de": "laufen",
              "c": "v"
            },
            {
              "schrift": "flyger",
              "lerntext": "flyger",
              "de": "fliegen",
              "c": "v"
            },
            {
              "schrift": "sitter",
              "lerntext": "sitter",
              "de": "sitzen",
              "c": "v"
            },
            {
              "schrift": "står",
              "lerntext": "står",
              "de": "stehen",
              "c": "v"
            },
            {
              "schrift": "ligger",
              "lerntext": "ligger",
              "de": "liegen",
              "c": "v"
            },
            {
              "schrift": "får",
              "lerntext": "får",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "går",
              "lerntext": "går",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kommer",
              "lerntext": "kommer",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stannar",
              "lerntext": "stannar",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hör",
              "lerntext": "hör",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "simmar",
              "lerntext": "simmar",
              "de": "schwimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hjälper",
              "lerntext": "hjälper",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "säger",
              "lerntext": "säger",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skriver",
              "lerntext": "skriver",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lämnar",
              "lerntext": "lämnar",
              "de": "verlassen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "nu",
            "lerntext": "nu",
            "de": "jetzt"
          }
        ],
        "id": "8.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / han / hon [Slot] nu",
          "lerntext": "jag / han / hon [Slot] nu",
          "wortarten": {
            "jag": "p",
            "han": "p",
            "hon": "p"
          }
        },
        "frameDe": "ich / er / sie (Sg.) [Slot] jetzt.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "flyttar",
              "lerntext": "flyttar",
              "de": "umziehen",
              "c": "v"
            },
            {
              "schrift": "bor",
              "lerntext": "bor",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "lever",
              "lerntext": "lever",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "vaknar",
              "lerntext": "vaknar",
              "de": "aufwachen",
              "c": "v"
            },
            {
              "schrift": "sätter",
              "lerntext": "sätter",
              "de": "setzen",
              "c": "v"
            },
            {
              "schrift": "springer",
              "lerntext": "springer",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "flyger",
              "lerntext": "flyger",
              "de": "fliegen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sitter",
              "lerntext": "sitter",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "står",
              "lerntext": "står",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ligger",
              "lerntext": "ligger",
              "de": "liegen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "får",
              "lerntext": "får",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ringer",
              "lerntext": "ringer",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "betalar",
              "lerntext": "betalar",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "måste",
              "lerntext": "måste",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "läser",
              "lerntext": "läser",
              "de": "lesen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "8.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / han / hon [Slot] nu",
          "lerntext": "jag / han / hon [Slot] nu",
          "wortarten": {
            "jag": "p",
            "han": "p",
            "hon": "p"
          }
        },
        "frameDe": "ich / er / sie (Sg.) [Slot] jetzt.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "flyttar",
              "lerntext": "flyttar",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bor",
              "lerntext": "bor",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lever",
              "lerntext": "lever",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vaknar",
              "lerntext": "vaknar",
              "de": "aufwachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sätter",
              "lerntext": "sätter",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "springer",
              "lerntext": "springer",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "flyger",
              "lerntext": "flyger",
              "de": "fliegen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sitter",
              "lerntext": "sitter",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "står",
              "lerntext": "står",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ligger",
              "lerntext": "ligger",
              "de": "liegen",
              "c": "v",
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
        "kind": "frame",
        "frame": {
          "schrift": "jag / vi åker [Slot]",
          "lerntext": "jag / vi åker [Slot]",
          "wortarten": {
            "jag": "p",
            "vi": "p"
          }
        },
        "frameDe": "ich / wir fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buss",
              "lerntext": "buss",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tåg",
              "lerntext": "tåg",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "flygplan",
              "lerntext": "flygplan",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "intervju",
              "lerntext": "intervju",
              "de": "Vorstellungsgespräch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klass",
              "lerntext": "klass",
              "de": "Klasse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lektion",
              "lerntext": "lektion",
              "de": "Unterrichtsstunde",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / han / hon [Slot] nu",
          "lerntext": "jag / han / hon [Slot] nu",
          "wortarten": {
            "jag": "p",
            "han": "p",
            "hon": "p"
          }
        },
        "frameDe": "ich / er / sie (Sg.) [Slot] jetzt.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "flyttar",
              "lerntext": "flyttar",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bor",
              "lerntext": "bor",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lever",
              "lerntext": "lever",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vaknar",
              "lerntext": "vaknar",
              "de": "aufwachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sätter",
              "lerntext": "sätter",
              "de": "setzen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / vi åker [Slot]",
          "lerntext": "jag / vi åker [Slot]",
          "wortarten": {
            "jag": "p",
            "vi": "p"
          }
        },
        "frameDe": "ich / wir fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buss",
              "lerntext": "buss",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tåg",
              "lerntext": "tåg",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "flygplan",
              "lerntext": "flygplan",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.10"
      },
      {
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
        "id": "8.11"
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
              "schrift": "idag",
              "lerntext": "idag",
              "de": "heute"
            },
            {
              "schrift": "igår",
              "lerntext": "igår",
              "de": "gestern"
            },
            {
              "schrift": "imorgon",
              "lerntext": "imorgon",
              "de": "morgen"
            },
            {
              "schrift": "nu",
              "lerntext": "nu",
              "de": "jetzt"
            },
            {
              "schrift": "snart",
              "lerntext": "snart",
              "de": "bald"
            },
            {
              "schrift": "sedan",
              "lerntext": "sedan",
              "de": "seitdem"
            },
            {
              "schrift": "alltid",
              "lerntext": "alltid",
              "de": "immer"
            },
            {
              "schrift": "aldrig",
              "lerntext": "aldrig",
              "de": "nie"
            },
            {
              "schrift": "ofta",
              "lerntext": "ofta",
              "de": "oft"
            },
            {
              "schrift": "ibland",
              "lerntext": "ibland",
              "de": "manchmal"
            },
            {
              "schrift": "redan",
              "lerntext": "redan",
              "de": "schon"
            },
            {
              "schrift": "då",
              "lerntext": "då",
              "de": "dann"
            },
            {
              "schrift": "genast",
              "lerntext": "genast",
              "de": "sofort"
            },
            {
              "schrift": "fortfarande",
              "lerntext": "fortfarande",
              "de": "immer noch"
            },
            {
              "schrift": "tillsammans",
              "lerntext": "tillsammans",
              "de": "zusammen"
            }
          ]
        ],
        "newCount": 14,
        "task": null,
        "newFrameWords": [],
        "id": "9.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "vi ses på [Slot]",
          "lerntext": "vi ses på [Slot]",
          "wortarten": {
            "vi": "p"
          }
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "när",
            "lerntext": "när",
            "de": "wann",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morgon",
              "lerntext": "morgon",
              "de": "Morgen",
              "c": "n"
            },
            {
              "schrift": "kväll",
              "lerntext": "kväll",
              "de": "Abend",
              "c": "n"
            },
            {
              "schrift": "natt",
              "lerntext": "natt",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "dag",
              "lerntext": "dag",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "vecka",
              "lerntext": "vecka",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "intervju",
              "lerntext": "intervju",
              "de": "Vorstellungsgespräch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "resväska",
              "lerntext": "resväska",
              "de": "Koffer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "biljett",
              "lerntext": "biljett",
              "de": "Ticket",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "buss",
              "lerntext": "buss",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "flygplan",
              "lerntext": "flygplan",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "karta",
              "lerntext": "karta",
              "de": "Landkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tåg",
              "lerntext": "tåg",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klass",
              "lerntext": "klass",
              "de": "Klasse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lektion",
              "lerntext": "lektion",
              "de": "Unterrichtsstunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mat",
              "lerntext": "mat",
              "de": "Essen (allgemein)",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "när",
            "lerntext": "när",
            "de": "wann",
            "c": "k"
          },
          {
            "schrift": "också",
            "lerntext": "också",
            "de": "auch"
          },
          {
            "schrift": "bara",
            "lerntext": "bara",
            "de": "nur"
          }
        ],
        "id": "9.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det tar en [Slot]",
          "lerntext": "det tar en [Slot]",
          "wortarten": {
            "tar": "v"
          }
        },
        "frameDe": "Es dauert eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "timme",
              "lerntext": "timme",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "minut",
              "lerntext": "minut",
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "sekund",
              "lerntext": "sekund",
              "de": "Sekunde",
              "c": "n"
            },
            {
              "schrift": "lektion",
              "lerntext": "lektion",
              "de": "Unterrichtsstunde",
              "c": "n"
            },
            {
              "schrift": "vecka",
              "lerntext": "vecka",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "natt",
              "lerntext": "natt",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stad",
              "lerntext": "stad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hjälp",
              "lerntext": "hjälp",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kyrka",
              "lerntext": "kyrka",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "natur",
              "lerntext": "natur",
              "de": "Natur",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bibliotek",
              "lerntext": "bibliotek",
              "de": "Bibliothek",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "karta",
              "lerntext": "karta",
              "de": "Landkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klass",
              "lerntext": "klass",
              "de": "Klasse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "polis",
              "lerntext": "polis",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "9.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det tar en [Slot]",
          "lerntext": "det tar en [Slot]",
          "wortarten": {
            "tar": "v"
          }
        },
        "frameDe": "Es dauert einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "semester",
              "lerntext": "semester",
              "de": "Urlaub",
              "c": "n"
            },
            {
              "schrift": "morgon",
              "lerntext": "morgon",
              "de": "Morgen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dag",
              "lerntext": "dag",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kväll",
              "lerntext": "kväll",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "resväska",
              "lerntext": "resväska",
              "de": "Koffer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jobb",
              "lerntext": "jobb",
              "de": "Job",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sjö",
              "lerntext": "sjö",
              "de": "See (Gewässer)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fot",
              "lerntext": "fot",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "buss",
              "lerntext": "buss",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "park",
              "lerntext": "park",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skog",
              "lerntext": "skog",
              "de": "Wald",
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
              "schrift": "idag",
              "lerntext": "idag",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "igår",
              "lerntext": "igår",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "imorgon",
              "lerntext": "imorgon",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "snart",
              "lerntext": "snart",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "sedan",
              "lerntext": "sedan",
              "de": "seitdem",
              "wieder": true
            },
            {
              "schrift": "alltid",
              "lerntext": "alltid",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "aldrig",
              "lerntext": "aldrig",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "ofta",
              "lerntext": "ofta",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "ibland",
              "lerntext": "ibland",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "redan",
              "lerntext": "redan",
              "de": "schon",
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
          "schrift": "vi ses på [Slot]",
          "lerntext": "vi ses på [Slot]",
          "wortarten": {
            "vi": "p"
          }
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "när",
            "lerntext": "när",
            "de": "wann",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morgon",
              "lerntext": "morgon",
              "de": "Morgen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kväll",
              "lerntext": "kväll",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "natt",
              "lerntext": "natt",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dag",
              "lerntext": "dag",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vecka",
              "lerntext": "vecka",
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
              "schrift": "då",
              "lerntext": "då",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "genast",
              "lerntext": "genast",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "fortfarande",
              "lerntext": "fortfarande",
              "de": "immer noch",
              "wieder": true
            },
            {
              "schrift": "tillsammans",
              "lerntext": "tillsammans",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "idag",
              "lerntext": "idag",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "igår",
              "lerntext": "igår",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "imorgon",
              "lerntext": "imorgon",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "snart",
              "lerntext": "snart",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "sedan",
              "lerntext": "sedan",
              "de": "seitdem",
              "wieder": true
            },
            {
              "schrift": "alltid",
              "lerntext": "alltid",
              "de": "immer",
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
              "schrift": "aldrig",
              "lerntext": "aldrig",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "ofta",
              "lerntext": "ofta",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "ibland",
              "lerntext": "ibland",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "redan",
              "lerntext": "redan",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "då",
              "lerntext": "då",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "genast",
              "lerntext": "genast",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "fortfarande",
              "lerntext": "fortfarande",
              "de": "immer noch",
              "wieder": true
            },
            {
              "schrift": "tillsammans",
              "lerntext": "tillsammans",
              "de": "zusammen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "9.8"
      },
      {
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
        "id": "9.9"
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
          "schrift": "jag / du / han / vi gillar [Slot]",
          "lerntext": "jag / du / han / vi gillar [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "vi": "p",
            "gillar": "v"
          }
        },
        "frameDe": "ich / du / er / wir mag [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
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
              "schrift": "regn",
              "lerntext": "regn",
              "de": "Regen",
              "c": "n"
            },
            {
              "schrift": "snö",
              "lerntext": "snö",
              "de": "Schnee",
              "c": "n"
            },
            {
              "schrift": "vind",
              "lerntext": "vind",
              "de": "Wind",
              "c": "n"
            },
            {
              "schrift": "väder",
              "lerntext": "väder",
              "de": "Wetter",
              "c": "n"
            },
            {
              "schrift": "sekund",
              "lerntext": "sekund",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "timme",
              "lerntext": "timme",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minut",
              "lerntext": "minut",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semester",
              "lerntext": "semester",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "morgon",
              "lerntext": "morgon",
              "de": "Morgen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vecka",
              "lerntext": "vecka",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "natt",
              "lerntext": "natt",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dag",
              "lerntext": "dag",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kväll",
              "lerntext": "kväll",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "intervju",
              "lerntext": "intervju",
              "de": "Vorstellungsgespräch",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "gillar",
            "lerntext": "gillar",
            "de": "mögen",
            "c": "v"
          },
          {
            "schrift": "älskar",
            "lerntext": "älskar",
            "de": "lieben",
            "c": "v"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / han / vi gillar [Slot]",
          "lerntext": "jag / du / han / vi gillar [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "vi": "p",
            "gillar": "v"
          }
        },
        "frameDe": "ich / du / er / wir mag [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "blomma",
              "lerntext": "blomma",
              "de": "Blume",
              "c": "n"
            },
            {
              "schrift": "träd",
              "lerntext": "träd",
              "de": "Baum",
              "c": "n"
            },
            {
              "schrift": "berg",
              "lerntext": "berg",
              "de": "Berg",
              "c": "n"
            },
            {
              "schrift": "hav",
              "lerntext": "hav",
              "de": "Meer",
              "c": "n"
            },
            {
              "schrift": "djur",
              "lerntext": "djur",
              "de": "Tier",
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
              "schrift": "regn",
              "lerntext": "regn",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "snö",
              "lerntext": "snö",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vind",
              "lerntext": "vind",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väder",
              "lerntext": "väder",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sekund",
              "lerntext": "sekund",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "timme",
              "lerntext": "timme",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minut",
              "lerntext": "minut",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semester",
              "lerntext": "semester",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "morgon",
              "lerntext": "morgon",
              "de": "Morgen",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / hon / de tycker om [Slot]",
          "lerntext": "jag / hon / de tycker om [Slot]",
          "wortarten": {
            "jag": "p",
            "hon": "p",
            "tycker": "v",
            "om": "k"
          }
        },
        "frameDe": "ich / sie (Sg.) / sie (Pl.) mag [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mig",
              "lerntext": "mig",
              "de": "mich",
              "c": "p"
            },
            {
              "schrift": "dig",
              "lerntext": "dig",
              "de": "dich",
              "c": "p"
            },
            {
              "schrift": "honom",
              "lerntext": "honom",
              "de": "ihn",
              "c": "p"
            },
            {
              "schrift": "henne",
              "lerntext": "henne",
              "de": "sie",
              "c": "p"
            },
            {
              "schrift": "oss",
              "lerntext": "oss",
              "de": "uns",
              "c": "p"
            },
            {
              "schrift": "ingen",
              "lerntext": "ingen",
              "de": "keiner",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "inget",
              "lerntext": "inget",
              "de": "keines (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "dessa",
              "lerntext": "dessa",
              "de": "diese (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "dina",
              "lerntext": "dina",
              "de": "deine (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "våra",
              "lerntext": "våra",
              "de": "unsere (Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mitt",
              "lerntext": "mitt",
              "de": "mein (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "allt",
              "lerntext": "allt",
              "de": "alles",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ditt",
              "lerntext": "ditt",
              "de": "dein (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "denna",
              "lerntext": "denna",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mina",
              "lerntext": "mina",
              "de": "meine (Pl.)",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "tycker",
            "lerntext": "tycker",
            "de": "finden",
            "c": "v"
          }
        ],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / hon / de tycker om [Slot]",
          "lerntext": "jag / hon / de tycker om [Slot]",
          "wortarten": {
            "jag": "p",
            "hon": "p",
            "tycker": "v",
            "om": "k"
          }
        },
        "frameDe": "ich / sie (Sg.) / sie (Pl.) mag [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dem",
              "lerntext": "dem",
              "de": "sie",
              "c": "p"
            },
            {
              "schrift": "mig",
              "lerntext": "mig",
              "de": "mich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "dig",
              "lerntext": "dig",
              "de": "dich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "honom",
              "lerntext": "honom",
              "de": "ihn",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "henne",
              "lerntext": "henne",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "oss",
              "lerntext": "oss",
              "de": "uns",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ingen",
              "lerntext": "ingen",
              "de": "keiner",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "inget",
              "lerntext": "inget",
              "de": "keines (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "något",
              "lerntext": "något",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "detta",
              "lerntext": "detta",
              "de": "dieses (Neutrum)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vår",
              "lerntext": "vår",
              "de": "unser (Utrum)",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "10.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "den är [Slot]",
          "lerntext": "den är [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "röd",
              "lerntext": "röd",
              "de": "rot",
              "c": "a"
            },
            {
              "schrift": "blå",
              "lerntext": "blå",
              "de": "blau",
              "c": "a"
            },
            {
              "schrift": "gul",
              "lerntext": "gul",
              "de": "gelb",
              "c": "a"
            },
            {
              "schrift": "grön",
              "lerntext": "grön",
              "de": "grün",
              "c": "a"
            },
            {
              "schrift": "svart",
              "lerntext": "svart",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "bred",
              "lerntext": "bred",
              "de": "breit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tjock",
              "lerntext": "tjock",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "djup",
              "lerntext": "djup",
              "de": "tief",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smal",
              "lerntext": "smal",
              "de": "schmal",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tunn",
              "lerntext": "tunn",
              "de": "dünn",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lätt",
              "lerntext": "lätt",
              "de": "leicht (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "hög",
              "lerntext": "hög",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tung",
              "lerntext": "tung",
              "de": "schwer (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "låg",
              "lerntext": "låg",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "kort",
              "lerntext": "kort",
              "de": "kurz",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "den är [Slot]",
          "lerntext": "den är [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vit",
              "lerntext": "vit",
              "de": "weiß",
              "c": "a"
            },
            {
              "schrift": "brun",
              "lerntext": "brun",
              "de": "braun",
              "c": "a"
            },
            {
              "schrift": "grå",
              "lerntext": "grå",
              "de": "grau",
              "c": "a"
            },
            {
              "schrift": "rosa",
              "lerntext": "rosa",
              "de": "rosa",
              "c": "a"
            },
            {
              "schrift": "lila",
              "lerntext": "lila",
              "de": "lila",
              "c": "a"
            },
            {
              "schrift": "röd",
              "lerntext": "röd",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blå",
              "lerntext": "blå",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gul",
              "lerntext": "gul",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grön",
              "lerntext": "grön",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svart",
              "lerntext": "svart",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bred",
              "lerntext": "bred",
              "de": "breit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tjock",
              "lerntext": "tjock",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "djup",
              "lerntext": "djup",
              "de": "tief",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smal",
              "lerntext": "smal",
              "de": "schmal",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tunn",
              "lerntext": "tunn",
              "de": "dünn",
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
          "schrift": "den är [Slot]",
          "lerntext": "den är [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "orange",
              "lerntext": "orange",
              "de": "orange",
              "c": "a"
            },
            {
              "schrift": "vit",
              "lerntext": "vit",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brun",
              "lerntext": "brun",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grå",
              "lerntext": "grå",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rosa",
              "lerntext": "rosa",
              "de": "rosa",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lila",
              "lerntext": "lila",
              "de": "lila",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "röd",
              "lerntext": "röd",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blå",
              "lerntext": "blå",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gul",
              "lerntext": "gul",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grön",
              "lerntext": "grön",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svart",
              "lerntext": "svart",
              "de": "schwarz",
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
          "schrift": "det är [Slot] mat",
          "lerntext": "det är [Slot] mat",
          "wortarten": {
            "är": "v",
            "mat": "n"
          }
        },
        "frameDe": "Das ist [Slot] Essen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "söt",
              "lerntext": "söt",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "sur",
              "lerntext": "sur",
              "de": "sauer",
              "c": "a"
            },
            {
              "schrift": "varm",
              "lerntext": "varm",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "kall",
              "lerntext": "kall",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "torr",
              "lerntext": "torr",
              "de": "trocken",
              "c": "a"
            },
            {
              "schrift": "orange",
              "lerntext": "orange",
              "de": "orange",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rosa",
              "lerntext": "rosa",
              "de": "rosa",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lila",
              "lerntext": "lila",
              "de": "lila",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grå",
              "lerntext": "grå",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vit",
              "lerntext": "vit",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brun",
              "lerntext": "brun",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lätt",
              "lerntext": "lätt",
              "de": "leicht (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "billig",
              "lerntext": "billig",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vacker",
              "lerntext": "vacker",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dyr",
              "lerntext": "dyr",
              "de": "teuer",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är [Slot] mat",
          "lerntext": "det är [Slot] mat",
          "wortarten": {
            "är": "v",
            "mat": "n"
          }
        },
        "frameDe": "Das ist [Slot] Essen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "våt",
              "lerntext": "våt",
              "de": "nass",
              "c": "a"
            },
            {
              "schrift": "ren",
              "lerntext": "ren",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "smutsig",
              "lerntext": "smutsig",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "vanlig",
              "lerntext": "vanlig",
              "de": "gewöhnlich",
              "c": "a"
            },
            {
              "schrift": "speciell",
              "lerntext": "speciell",
              "de": "besonders",
              "c": "a"
            },
            {
              "schrift": "söt",
              "lerntext": "söt",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sur",
              "lerntext": "sur",
              "de": "sauer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "varm",
              "lerntext": "varm",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "kall",
              "lerntext": "kall",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "torr",
              "lerntext": "torr",
              "de": "trocken",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "orange",
              "lerntext": "orange",
              "de": "orange",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svart",
              "lerntext": "svart",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "liten",
              "lerntext": "liten",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rosa",
              "lerntext": "rosa",
              "de": "rosa",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bred",
              "lerntext": "bred",
              "de": "breit",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / han / vi gillar [Slot]",
          "lerntext": "jag / du / han / vi gillar [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "vi": "p",
            "gillar": "v"
          }
        },
        "frameDe": "ich / du / er / wir mag [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "blomma",
              "lerntext": "blomma",
              "de": "Blume",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "träd",
              "lerntext": "träd",
              "de": "Baum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "berg",
              "lerntext": "berg",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hav",
              "lerntext": "hav",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "djur",
              "lerntext": "djur",
              "de": "Tier",
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
              "schrift": "regn",
              "lerntext": "regn",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "snö",
              "lerntext": "snö",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vind",
              "lerntext": "vind",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väder",
              "lerntext": "väder",
              "de": "Wetter",
              "c": "n",
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
          "schrift": "det är [Slot] mat",
          "lerntext": "det är [Slot] mat",
          "wortarten": {
            "är": "v",
            "mat": "n"
          }
        },
        "frameDe": "Das ist [Slot] Essen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "våt",
              "lerntext": "våt",
              "de": "nass",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ren",
              "lerntext": "ren",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smutsig",
              "lerntext": "smutsig",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vanlig",
              "lerntext": "vanlig",
              "de": "gewöhnlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "speciell",
              "lerntext": "speciell",
              "de": "besonders",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "söt",
              "lerntext": "söt",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sur",
              "lerntext": "sur",
              "de": "sauer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "varm",
              "lerntext": "varm",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "kall",
              "lerntext": "kall",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "torr",
              "lerntext": "torr",
              "de": "trocken",
              "c": "a",
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
        "kind": "frame",
        "frame": {
          "schrift": "jag / hon / de tycker om [Slot]",
          "lerntext": "jag / hon / de tycker om [Slot]",
          "wortarten": {
            "jag": "p",
            "hon": "p",
            "tycker": "v",
            "om": "k"
          }
        },
        "frameDe": "ich / sie (Sg.) / sie (Pl.) mag [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "sie (Pl.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dem",
              "lerntext": "dem",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mig",
              "lerntext": "mig",
              "de": "mich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "dig",
              "lerntext": "dig",
              "de": "dich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "honom",
              "lerntext": "honom",
              "de": "ihn",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "henne",
              "lerntext": "henne",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "oss",
              "lerntext": "oss",
              "de": "uns",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du / han / vi gillar [Slot]",
          "lerntext": "jag / du / han / vi gillar [Slot]",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "vi": "p",
            "gillar": "v"
          }
        },
        "frameDe": "ich / du / er / wir mag [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "blomma",
              "lerntext": "blomma",
              "de": "Blume",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "träd",
              "lerntext": "träd",
              "de": "Baum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "berg",
              "lerntext": "berg",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hav",
              "lerntext": "hav",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "djur",
              "lerntext": "djur",
              "de": "Tier",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.13"
      },
      {
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
        "id": "10.14"
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
          "schrift": "jag / du / han / vi var [Slot] igår",
          "lerntext": "jag / du / han / vi var [Slot] igår",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "han": "p",
            "vi": "p",
            "var": "v"
          }
        },
        "frameDe": "ich / du / er / wir war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "glad",
              "lerntext": "glad",
              "de": "froh",
              "c": "a"
            },
            {
              "schrift": "trött",
              "lerntext": "trött",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "ensam",
              "lerntext": "ensam",
              "de": "einsam",
              "c": "a"
            },
            {
              "schrift": "nöjd",
              "lerntext": "nöjd",
              "de": "zufrieden",
              "c": "a"
            },
            {
              "schrift": "våt",
              "lerntext": "våt",
              "de": "nass",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ren",
              "lerntext": "ren",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smutsig",
              "lerntext": "smutsig",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "speciell",
              "lerntext": "speciell",
              "de": "besonders",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vanlig",
              "lerntext": "vanlig",
              "de": "gewöhnlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "orange",
              "lerntext": "orange",
              "de": "orange",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blå",
              "lerntext": "blå",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lila",
              "lerntext": "lila",
              "de": "lila",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "klar",
              "lerntext": "klar",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svag",
              "lerntext": "svag",
              "de": "schwach",
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
          "schrift": "jag / du / vi ska [Slot] imorgon",
          "lerntext": "jag / du / vi ska [Slot] imorgon",
          "wortarten": {
            "jag": "p",
            "du": "p",
            "vi": "p",
            "ska": "v"
          }
        },
        "frameDe": "ich / du / wir werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "köpa",
              "lerntext": "köpa",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "sälja",
              "lerntext": "sälja",
              "de": "verkaufen",
              "c": "v"
            },
            {
              "schrift": "ge",
              "lerntext": "ge",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "hitta",
              "lerntext": "hitta",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "tycka",
              "lerntext": "tycka",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gilla",
              "lerntext": "gilla",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "älska",
              "lerntext": "älska",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "flytta",
              "lerntext": "flytta",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sitta",
              "lerntext": "sitta",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lyssna",
              "lerntext": "lyssna",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gå",
              "lerntext": "gå",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "behöva",
              "lerntext": "behöva",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arbeta",
              "lerntext": "arbeta",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ska",
            "lerntext": "ska",
            "de": "werden",
            "c": "v"
          }
        ],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du [Slot] mycket",
          "lerntext": "jag / du [Slot] mycket",
          "wortarten": {
            "jag": "p",
            "du": "p"
          }
        },
        "frameDe": "ich / du [Slot] viel.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "letar",
              "lerntext": "letar",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "vet",
              "lerntext": "vet",
              "de": "wissen",
              "c": "v"
            },
            {
              "schrift": "tror",
              "lerntext": "tror",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "tänker",
              "lerntext": "tänker",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "känner",
              "lerntext": "känner",
              "de": "fühlen",
              "c": "v"
            },
            {
              "schrift": "ger",
              "lerntext": "ger",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ska",
              "lerntext": "ska",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "säljer",
              "lerntext": "säljer",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hittar",
              "lerntext": "hittar",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "köper",
              "lerntext": "köper",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tar",
              "lerntext": "tar",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tycker",
              "lerntext": "tycker",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gillar",
              "lerntext": "gillar",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "älskar",
              "lerntext": "älskar",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bygger",
              "lerntext": "bygger",
              "de": "bauen",
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
          "schrift": "jag / det blir [Slot]",
          "lerntext": "jag / det blir [Slot]",
          "wortarten": {
            "jag": "p",
            "blir": "v"
          }
        },
        "frameDe": "ich / er werde [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "öppen",
              "lerntext": "öppen",
              "de": "offen",
              "c": "a"
            },
            {
              "schrift": "stängd",
              "lerntext": "stängd",
              "de": "geschlossen",
              "c": "a"
            },
            {
              "schrift": "klar",
              "lerntext": "klar",
              "de": "fertig",
              "c": "a"
            },
            {
              "schrift": "säker",
              "lerntext": "säker",
              "de": "sicher",
              "c": "a"
            },
            {
              "schrift": "farlig",
              "lerntext": "farlig",
              "de": "gefährlich",
              "c": "a"
            },
            {
              "schrift": "våt",
              "lerntext": "våt",
              "de": "nass",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smart",
              "lerntext": "smart",
              "de": "klug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tjock",
              "lerntext": "tjock",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "röd",
              "lerntext": "röd",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "hög",
              "lerntext": "hög",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "varm",
              "lerntext": "varm",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "söt",
              "lerntext": "söt",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ren",
              "lerntext": "ren",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "kall",
              "lerntext": "kall",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tung",
              "lerntext": "tung",
              "de": "schwer (Gewicht)",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "blir",
            "lerntext": "blir",
            "de": "werden",
            "c": "v"
          }
        ],
        "id": "11.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag / du [Slot] mycket",
          "lerntext": "jag / du [Slot] mycket",
          "wortarten": {
            "jag": "p",
            "du": "p"
          }
        },
        "frameDe": "ich / du [Slot] viel.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "letar",
              "lerntext": "letar",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vet",
              "lerntext": "vet",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tror",
              "lerntext": "tror",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tänker",
              "lerntext": "tänker",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "känner",
              "lerntext": "känner",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ger",
              "lerntext": "ger",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ska",
              "lerntext": "ska",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "säljer",
              "lerntext": "säljer",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hittar",
              "lerntext": "hittar",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "köper",
              "lerntext": "köper",
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
          "schrift": "jag / det blir [Slot]",
          "lerntext": "jag / det blir [Slot]",
          "wortarten": {
            "jag": "p",
            "blir": "v"
          }
        },
        "frameDe": "ich / er werde [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "öppen",
              "lerntext": "öppen",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stängd",
              "lerntext": "stängd",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "farlig",
              "lerntext": "farlig",
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
          "schrift": "jag / du [Slot] mycket",
          "lerntext": "jag / du [Slot] mycket",
          "wortarten": {
            "jag": "p",
            "du": "p"
          }
        },
        "frameDe": "ich / du [Slot] viel.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "letar",
              "lerntext": "letar",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vet",
              "lerntext": "vet",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tror",
              "lerntext": "tror",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tänker",
              "lerntext": "tänker",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "känner",
              "lerntext": "känner",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tar",
              "lerntext": "tar",
              "de": "nehmen",
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
          "schrift": "jag / det blir [Slot]",
          "lerntext": "jag / det blir [Slot]",
          "wortarten": {
            "jag": "p",
            "blir": "v"
          }
        },
        "frameDe": "ich / er werde [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "det",
            "lerntext": "det",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "öppen",
              "lerntext": "öppen",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stängd",
              "lerntext": "stängd",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "farlig",
              "lerntext": "farlig",
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
          "schrift": "jag är trött [Slot] jag arbetar",
          "lerntext": "jag är trött [Slot] jag arbetar",
          "wortarten": {
            "jag": "p",
            "är": "v",
            "trött": "a",
            "arbetar": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "och",
            "lerntext": "och",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "men",
            "lerntext": "men",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "eller",
            "lerntext": "eller",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "eftersom",
              "lerntext": "eftersom",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "medan",
              "lerntext": "medan",
              "de": "während",
              "c": "k"
            },
            {
              "schrift": "fastän",
              "lerntext": "fastän",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "tills",
              "lerntext": "tills",
              "de": "bis",
              "c": "k"
            },
            {
              "schrift": "för att",
              "lerntext": "för att",
              "de": "damit",
              "c": "k"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "och",
            "lerntext": "och",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "men",
            "lerntext": "men",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "eller",
            "lerntext": "eller",
            "de": "oder",
            "c": "k"
          },
          {
            "schrift": "så",
            "lerntext": "så",
            "de": "also",
            "c": "k"
          },
          {
            "schrift": "att",
            "lerntext": "att",
            "de": "dass",
            "c": "k"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag är trött [Slot] jag arbetar",
          "lerntext": "jag är trött [Slot] jag arbetar",
          "wortarten": {
            "jag": "p",
            "är": "v",
            "trött": "a",
            "arbetar": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "och",
            "lerntext": "och",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "men",
            "lerntext": "men",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "eller",
            "lerntext": "eller",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "om",
              "lerntext": "om",
              "de": "über"
            },
            {
              "schrift": "innan",
              "lerntext": "innan",
              "de": "vor (zeitlich)"
            },
            {
              "schrift": "efter",
              "lerntext": "efter",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "av",
              "lerntext": "av",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "från",
              "lerntext": "från",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "med",
              "lerntext": "med",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "utan",
              "lerntext": "utan",
              "de": "ohne",
              "wieder": true
            },
            {
              "schrift": "runt",
              "lerntext": "runt",
              "de": "um",
              "wieder": true
            },
            {
              "schrift": "i",
              "lerntext": "i",
              "de": "in",
              "wieder": true
            },
            {
              "schrift": "genom",
              "lerntext": "genom",
              "de": "durch",
              "wieder": true
            },
            {
              "schrift": "framför",
              "lerntext": "framför",
              "de": "vor (räumlich)",
              "wieder": true
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "gegen",
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
          "schrift": "det är [Slot] bra",
          "lerntext": "det är [Slot] bra",
          "wortarten": {
            "är": "v",
            "bra": "a"
          }
        },
        "frameDe": "Es ist [Slot] gut.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "kanske",
              "lerntext": "kanske",
              "de": "vielleicht"
            },
            {
              "schrift": "ganska",
              "lerntext": "ganska",
              "de": "ziemlich"
            },
            {
              "schrift": "nej",
              "lerntext": "nej",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "bara",
              "lerntext": "bara",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "också",
              "lerntext": "också",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "ja",
              "lerntext": "ja",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "ibland",
              "lerntext": "ibland",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "alltid",
              "lerntext": "alltid",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "aldrig",
              "lerntext": "aldrig",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "redan",
              "lerntext": "redan",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "snart",
              "lerntext": "snart",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "lite",
              "lerntext": "lite",
              "de": "wenig",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "12.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag är [Slot]",
          "lerntext": "jag är [Slot]",
          "wortarten": {
            "jag": "p",
            "är": "v"
          }
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "förälskad",
              "lerntext": "förälskad",
              "de": "verliebt",
              "c": "a"
            },
            {
              "schrift": "farlig",
              "lerntext": "farlig",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stängd",
              "lerntext": "stängd",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gul",
              "lerntext": "gul",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grön",
              "lerntext": "grön",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "djup",
              "lerntext": "djup",
              "de": "tief",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "låg",
              "lerntext": "låg",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grå",
              "lerntext": "grå",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rädd",
              "lerntext": "rädd",
              "de": "ängstlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "redo",
              "lerntext": "redo",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "förvånad",
              "lerntext": "förvånad",
              "de": "überrascht",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "12.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag vill [Slot] men jag kan inte",
          "lerntext": "jag vill [Slot] men jag kan inte",
          "wortarten": {
            "jag": "p",
            "vill": "v",
            "men": "k",
            "kan": "v"
          }
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "förstå",
              "lerntext": "förstå",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "lära",
              "lerntext": "lära",
              "de": "lehren",
              "c": "v"
            },
            {
              "schrift": "fortsätta",
              "lerntext": "fortsätta",
              "de": "fortsetzen",
              "c": "v"
            },
            {
              "schrift": "önska",
              "lerntext": "önska",
              "de": "wünschen",
              "c": "v"
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "bli",
              "lerntext": "bli",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ge",
              "lerntext": "ge",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tänka",
              "lerntext": "tänka",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tycka",
              "lerntext": "tycka",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tvätta",
              "lerntext": "tvätta",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "träffa",
              "lerntext": "träffa",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "komma",
              "lerntext": "komma",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spela",
              "lerntext": "spela",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ska",
              "lerntext": "ska",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vilja",
              "lerntext": "vilja",
              "de": "wollen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "12.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är [Slot] men det går",
          "lerntext": "det är [Slot] men det går",
          "wortarten": {
            "är": "v",
            "men": "k",
            "går": "v"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "svår",
              "lerntext": "svår",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "enkel",
              "lerntext": "enkel",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "konstig",
              "lerntext": "konstig",
              "de": "komisch",
              "c": "a"
            },
            {
              "schrift": "intressant",
              "lerntext": "intressant",
              "de": "interessant",
              "c": "a"
            },
            {
              "schrift": "spännande",
              "lerntext": "spännande",
              "de": "spannend",
              "c": "a"
            },
            {
              "schrift": "förälskad",
              "lerntext": "förälskad",
              "de": "verliebt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ledsen",
              "lerntext": "ledsen",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ny",
              "lerntext": "ny",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smal",
              "lerntext": "smal",
              "de": "schmal",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stor",
              "lerntext": "stor",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "kort",
              "lerntext": "kort",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lång",
              "lerntext": "lång",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vit",
              "lerntext": "vit",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sur",
              "lerntext": "sur",
              "de": "sauer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brun",
              "lerntext": "brun",
              "de": "braun",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "12.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är [Slot] men det går",
          "lerntext": "det är [Slot] men det går",
          "wortarten": {
            "är": "v",
            "men": "k",
            "går": "v"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rätt",
              "lerntext": "rätt",
              "de": "richtig",
              "c": "a"
            },
            {
              "schrift": "fel",
              "lerntext": "fel",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "snabb",
              "lerntext": "snabb",
              "de": "schnell",
              "c": "a"
            },
            {
              "schrift": "långsam",
              "lerntext": "långsam",
              "de": "langsam",
              "c": "a"
            },
            {
              "schrift": "ful",
              "lerntext": "ful",
              "de": "hässlich",
              "c": "a"
            },
            {
              "schrift": "svår",
              "lerntext": "svår",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "enkel",
              "lerntext": "enkel",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "konstig",
              "lerntext": "konstig",
              "de": "komisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "intressant",
              "lerntext": "intressant",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "spännande",
              "lerntext": "spännande",
              "de": "spannend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "förälskad",
              "lerntext": "förälskad",
              "de": "verliebt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "öppen",
              "lerntext": "öppen",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tunn",
              "lerntext": "tunn",
              "de": "dünn",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "torr",
              "lerntext": "torr",
              "de": "trocken",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smutsig",
              "lerntext": "smutsig",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "12.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag [Slot] dig",
          "lerntext": "jag [Slot] dig",
          "wortarten": {
            "jag": "p",
            "dig": "p"
          }
        },
        "frameDe": "Ich [Slot] dich.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "saknar",
              "lerntext": "saknar",
              "de": "vermissen",
              "c": "v"
            },
            {
              "schrift": "kysser",
              "lerntext": "kysser",
              "de": "küssen",
              "c": "v"
            },
            {
              "schrift": "väljer",
              "lerntext": "väljer",
              "de": "wählen",
              "c": "v"
            },
            {
              "schrift": "skickar",
              "lerntext": "skickar",
              "de": "schicken",
              "c": "v"
            },
            {
              "schrift": "byter",
              "lerntext": "byter",
              "de": "wechseln",
              "c": "v"
            },
            {
              "schrift": "fortsätter",
              "lerntext": "fortsätter",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "önskar",
              "lerntext": "önskar",
              "de": "wünschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "blir",
              "lerntext": "blir",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förstår",
              "lerntext": "förstår",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lär",
              "lerntext": "lär",
              "de": "lehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sätter",
              "lerntext": "sätter",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kör",
              "lerntext": "kör",
              "de": "fahren (Fahrzeug)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "duschar",
              "lerntext": "duschar",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "säljer",
              "lerntext": "säljer",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "12.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag [Slot] dig",
          "lerntext": "jag [Slot] dig",
          "wortarten": {
            "jag": "p",
            "dig": "p"
          }
        },
        "frameDe": "Ich [Slot] dich.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ler",
              "lerntext": "ler",
              "de": "lächeln",
              "c": "v"
            },
            {
              "schrift": "växer",
              "lerntext": "växer",
              "de": "wachsen",
              "c": "v"
            },
            {
              "schrift": "förändrar",
              "lerntext": "förändrar",
              "de": "verändern",
              "c": "v"
            },
            {
              "schrift": "heter",
              "lerntext": "heter",
              "de": "heißen",
              "c": "v"
            },
            {
              "schrift": "festar",
              "lerntext": "festar",
              "de": "feiern",
              "c": "v"
            },
            {
              "schrift": "saknar",
              "lerntext": "saknar",
              "de": "vermissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kysser",
              "lerntext": "kysser",
              "de": "küssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "väljer",
              "lerntext": "väljer",
              "de": "wählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skickar",
              "lerntext": "skickar",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "byter",
              "lerntext": "byter",
              "de": "wechseln",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fortsätter",
              "lerntext": "fortsätter",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "önskar",
              "lerntext": "önskar",
              "de": "wünschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "blir",
              "lerntext": "blir",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förstår",
              "lerntext": "förstår",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "12.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag är trött [Slot] jag arbetar",
          "lerntext": "jag är trött [Slot] jag arbetar",
          "wortarten": {
            "jag": "p",
            "är": "v",
            "trött": "a",
            "arbetar": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "och",
            "lerntext": "och",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "men",
            "lerntext": "men",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "eller",
            "lerntext": "eller",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "eftersom",
              "lerntext": "eftersom",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "medan",
              "lerntext": "medan",
              "de": "während",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "fastän",
              "lerntext": "fastän",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "tills",
              "lerntext": "tills",
              "de": "bis",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "för att",
              "lerntext": "för att",
              "de": "damit",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "innan",
              "lerntext": "innan",
              "de": "vor (zeitlich)",
              "wieder": true
            },
            {
              "schrift": "efter",
              "lerntext": "efter",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "av",
              "lerntext": "av",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "från",
              "lerntext": "från",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "med",
              "lerntext": "med",
              "de": "mit",
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
        "kind": "frame",
        "frame": {
          "schrift": "det är [Slot] men det går",
          "lerntext": "det är [Slot] men det går",
          "wortarten": {
            "är": "v",
            "men": "k",
            "går": "v"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rätt",
              "lerntext": "rätt",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fel",
              "lerntext": "fel",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "snabb",
              "lerntext": "snabb",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "långsam",
              "lerntext": "långsam",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ful",
              "lerntext": "ful",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svår",
              "lerntext": "svår",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "enkel",
              "lerntext": "enkel",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "konstig",
              "lerntext": "konstig",
              "de": "komisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "intressant",
              "lerntext": "intressant",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "spännande",
              "lerntext": "spännande",
              "de": "spannend",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.11"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag [Slot] dig",
          "lerntext": "jag [Slot] dig",
          "wortarten": {
            "jag": "p",
            "dig": "p"
          }
        },
        "frameDe": "Ich [Slot] dich.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ler",
              "lerntext": "ler",
              "de": "lächeln",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "växer",
              "lerntext": "växer",
              "de": "wachsen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förändrar",
              "lerntext": "förändrar",
              "de": "verändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "heter",
              "lerntext": "heter",
              "de": "heißen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "festar",
              "lerntext": "festar",
              "de": "feiern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saknar",
              "lerntext": "saknar",
              "de": "vermissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kysser",
              "lerntext": "kysser",
              "de": "küssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "väljer",
              "lerntext": "väljer",
              "de": "wählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skickar",
              "lerntext": "skickar",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "byter",
              "lerntext": "byter",
              "de": "wechseln",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag är trött [Slot] jag arbetar",
          "lerntext": "jag är trött [Slot] jag arbetar",
          "wortarten": {
            "jag": "p",
            "är": "v",
            "trött": "a",
            "arbetar": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "och",
            "lerntext": "och",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "men",
            "lerntext": "men",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "eller",
            "lerntext": "eller",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "eftersom",
              "lerntext": "eftersom",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "medan",
              "lerntext": "medan",
              "de": "während",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "fastän",
              "lerntext": "fastän",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "tills",
              "lerntext": "tills",
              "de": "bis",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "för att",
              "lerntext": "för att",
              "de": "damit",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "innan",
              "lerntext": "innan",
              "de": "vor (zeitlich)",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.13"
      },
      {
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
        "id": "12.14"
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
          "schrift": "[Slot] gör ont",
          "lerntext": "[Slot] gör ont",
          "wortarten": {
            "gör": "v"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "min",
            "lerntext": "min",
            "de": "mein (Utrum)",
            "c": "p"
          },
          {
            "schrift": "mitt",
            "lerntext": "mitt",
            "de": "mein (Neutrum)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "huvud",
              "lerntext": "huvud",
              "de": "Kopf",
              "c": "n"
            },
            {
              "schrift": "hals",
              "lerntext": "hals",
              "de": "Hals",
              "c": "n"
            },
            {
              "schrift": "tand",
              "lerntext": "tand",
              "de": "Zahn",
              "c": "n"
            },
            {
              "schrift": "rygg",
              "lerntext": "rygg",
              "de": "Rücken",
              "c": "n"
            },
            {
              "schrift": "mage",
              "lerntext": "mage",
              "de": "Bauch",
              "c": "n"
            },
            {
              "schrift": "djur",
              "lerntext": "djur",
              "de": "Tier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hav",
              "lerntext": "hav",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "regn",
              "lerntext": "regn",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "blomma",
              "lerntext": "blomma",
              "de": "Blume",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sekund",
              "lerntext": "sekund",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "timme",
              "lerntext": "timme",
              "de": "Stunde",
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
              "schrift": "väder",
              "lerntext": "väder",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vind",
              "lerntext": "vind",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "berg",
              "lerntext": "berg",
              "de": "Berg",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "13.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] gör ont",
          "lerntext": "[Slot] gör ont",
          "wortarten": {
            "gör": "v"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "min",
            "lerntext": "min",
            "de": "mein (Utrum)",
            "c": "p"
          },
          {
            "schrift": "mitt",
            "lerntext": "mitt",
            "de": "mein (Neutrum)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "knä",
              "lerntext": "knä",
              "de": "Knie",
              "c": "n"
            },
            {
              "schrift": "hjärta",
              "lerntext": "hjärta",
              "de": "Herz",
              "c": "n"
            },
            {
              "schrift": "öga",
              "lerntext": "öga",
              "de": "Auge",
              "c": "n"
            },
            {
              "schrift": "öra",
              "lerntext": "öra",
              "de": "Ohr",
              "c": "n"
            },
            {
              "schrift": "finger",
              "lerntext": "finger",
              "de": "Finger",
              "c": "n"
            },
            {
              "schrift": "huvud",
              "lerntext": "huvud",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hals",
              "lerntext": "hals",
              "de": "Hals",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tand",
              "lerntext": "tand",
              "de": "Zahn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rygg",
              "lerntext": "rygg",
              "de": "Rücken",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mage",
              "lerntext": "mage",
              "de": "Bauch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minut",
              "lerntext": "minut",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "träd",
              "lerntext": "träd",
              "de": "Baum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semester",
              "lerntext": "semester",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "snö",
              "lerntext": "snö",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "djur",
              "lerntext": "djur",
              "de": "Tier",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "13.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag har ont i [Slot]",
          "lerntext": "jag har ont i [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v"
          }
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hår",
              "lerntext": "hår",
              "de": "Haar",
              "c": "n"
            },
            {
              "schrift": "näsa",
              "lerntext": "näsa",
              "de": "Nase",
              "c": "n"
            },
            {
              "schrift": "hud",
              "lerntext": "hud",
              "de": "Haut",
              "c": "n"
            },
            {
              "schrift": "axel",
              "lerntext": "axel",
              "de": "Schulter",
              "c": "n"
            },
            {
              "schrift": "ben",
              "lerntext": "ben",
              "de": "Bein",
              "c": "n"
            },
            {
              "schrift": "öga",
              "lerntext": "öga",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "knä",
              "lerntext": "knä",
              "de": "Knie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hjärta",
              "lerntext": "hjärta",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "öra",
              "lerntext": "öra",
              "de": "Ohr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finger",
              "lerntext": "finger",
              "de": "Finger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rygg",
              "lerntext": "rygg",
              "de": "Rücken",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mage",
              "lerntext": "mage",
              "de": "Bauch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hals",
              "lerntext": "hals",
              "de": "Hals",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "huvud",
              "lerntext": "huvud",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tand",
              "lerntext": "tand",
              "de": "Zahn",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "13.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag har ont i [Slot]",
          "lerntext": "jag har ont i [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v"
          }
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hår",
              "lerntext": "hår",
              "de": "Haar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "näsa",
              "lerntext": "näsa",
              "de": "Nase",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hud",
              "lerntext": "hud",
              "de": "Haut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "axel",
              "lerntext": "axel",
              "de": "Schulter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ben",
              "lerntext": "ben",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "öga",
              "lerntext": "öga",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "knä",
              "lerntext": "knä",
              "de": "Knie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hjärta",
              "lerntext": "hjärta",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "öra",
              "lerntext": "öra",
              "de": "Ohr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finger",
              "lerntext": "finger",
              "de": "Finger",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "13.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag har ont i [Slot]",
          "lerntext": "jag har ont i [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v"
          }
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hår",
              "lerntext": "hår",
              "de": "Haar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "näsa",
              "lerntext": "näsa",
              "de": "Nase",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hud",
              "lerntext": "hud",
              "de": "Haut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "axel",
              "lerntext": "axel",
              "de": "Schulter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ben",
              "lerntext": "ben",
              "de": "Bein",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "13.5"
      },
      {
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
        "id": "13.6"
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
          "schrift": "jag har ett [Slot]",
          "lerntext": "jag har ett [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v"
          }
        },
        "frameDe": "Ich habe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "golv",
              "lerntext": "golv",
              "de": "Boden",
              "c": "n"
            },
            {
              "schrift": "huvud",
              "lerntext": "huvud",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finger",
              "lerntext": "finger",
              "de": "Finger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vän",
              "lerntext": "vän",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kaffe",
              "lerntext": "kaffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bror",
              "lerntext": "bror",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tåg",
              "lerntext": "tåg",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "socker",
              "lerntext": "socker",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "butik",
              "lerntext": "butik",
              "de": "Laden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dag",
              "lerntext": "dag",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vind",
              "lerntext": "vind",
              "de": "Wind",
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
          "schrift": "jag har ett [Slot]",
          "lerntext": "jag har ett [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v"
          }
        },
        "frameDe": "Ich habe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "badrum",
              "lerntext": "badrum",
              "de": "Badezimmer",
              "c": "n"
            },
            {
              "schrift": "sovrum",
              "lerntext": "sovrum",
              "de": "Schlafzimmer",
              "c": "n"
            },
            {
              "schrift": "vardagsrum",
              "lerntext": "vardagsrum",
              "de": "Wohnzimmer",
              "c": "n"
            },
            {
              "schrift": "tak",
              "lerntext": "tak",
              "de": "Dach",
              "c": "n"
            },
            {
              "schrift": "öga",
              "lerntext": "öga",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ben",
              "lerntext": "ben",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hjärta",
              "lerntext": "hjärta",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hår",
              "lerntext": "hår",
              "de": "Haar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "biljett",
              "lerntext": "biljett",
              "de": "Ticket",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "flygplan",
              "lerntext": "flygplan",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kött",
              "lerntext": "kött",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kontor",
              "lerntext": "kontor",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frukt",
              "lerntext": "frukt",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fönster",
              "lerntext": "fönster",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "14.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det finns en [Slot] här",
          "lerntext": "det finns en [Slot] här"
        },
        "frameDe": "Hier gibt es eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vägg",
              "lerntext": "vägg",
              "de": "Wand",
              "c": "n"
            },
            {
              "schrift": "gaffel",
              "lerntext": "gaffel",
              "de": "Gabel",
              "c": "n"
            },
            {
              "schrift": "axel",
              "lerntext": "axel",
              "de": "Schulter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hud",
              "lerntext": "hud",
              "de": "Haut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "näsa",
              "lerntext": "näsa",
              "de": "Nase",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vecka",
              "lerntext": "vecka",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sekund",
              "lerntext": "sekund",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "natt",
              "lerntext": "natt",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "timme",
              "lerntext": "timme",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gata",
              "lerntext": "gata",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kök",
              "lerntext": "kök",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skola",
              "lerntext": "skola",
              "de": "Schule",
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
          "schrift": "det finns en [Slot] här",
          "lerntext": "det finns en [Slot] här"
        },
        "frameDe": "Hier gibt es einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "trädgård",
              "lerntext": "trädgård",
              "de": "Garten",
              "c": "n"
            },
            {
              "schrift": "tallrik",
              "lerntext": "tallrik",
              "de": "Teller",
              "c": "n"
            },
            {
              "schrift": "sked",
              "lerntext": "sked",
              "de": "Löffel",
              "c": "n"
            },
            {
              "schrift": "golv",
              "lerntext": "golv",
              "de": "Boden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "huvud",
              "lerntext": "huvud",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pappa",
              "lerntext": "pappa",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finger",
              "lerntext": "finger",
              "de": "Finger",
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
              "schrift": "fisk",
              "lerntext": "fisk",
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
              "schrift": "semester",
              "lerntext": "semester",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kropp",
              "lerntext": "kropp",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "torg",
              "lerntext": "torg",
              "de": "Marktplatz",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "14.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag köper en [Slot]",
          "lerntext": "jag köper en [Slot]",
          "wortarten": {
            "jag": "p",
            "köper": "v"
          }
        },
        "frameDe": "Ich kaufe eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "jacka",
              "lerntext": "jacka",
              "de": "Jacke",
              "c": "n"
            },
            {
              "schrift": "strumpa",
              "lerntext": "strumpa",
              "de": "Socke",
              "c": "n"
            },
            {
              "schrift": "mössa",
              "lerntext": "mössa",
              "de": "Mütze",
              "c": "n"
            },
            {
              "schrift": "gaffel",
              "lerntext": "gaffel",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vägg",
              "lerntext": "vägg",
              "de": "Wand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "axel",
              "lerntext": "axel",
              "de": "Schulter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hud",
              "lerntext": "hud",
              "de": "Haut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "näsa",
              "lerntext": "näsa",
              "de": "Nase",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universitet",
              "lerntext": "universitet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dörr",
              "lerntext": "dörr",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tid",
              "lerntext": "tid",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minut",
              "lerntext": "minut",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mjölk",
              "lerntext": "mjölk",
              "de": "Milch",
              "c": "n",
              "wieder": true
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
          "schrift": "jag köper en [Slot]",
          "lerntext": "jag köper en [Slot]",
          "wortarten": {
            "jag": "p",
            "köper": "v"
          }
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tröja",
              "lerntext": "tröja",
              "de": "Pullover",
              "c": "n"
            },
            {
              "schrift": "kjol",
              "lerntext": "kjol",
              "de": "Rock",
              "c": "n"
            },
            {
              "schrift": "sko",
              "lerntext": "sko",
              "de": "Schuh",
              "c": "n"
            },
            {
              "schrift": "handske",
              "lerntext": "handske",
              "de": "Handschuh",
              "c": "n"
            },
            {
              "schrift": "sked",
              "lerntext": "sked",
              "de": "Löffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "trädgård",
              "lerntext": "trädgård",
              "de": "Garten",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tallrik",
              "lerntext": "tallrik",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "golv",
              "lerntext": "golv",
              "de": "Boden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kväll",
              "lerntext": "kväll",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "strand",
              "lerntext": "strand",
              "de": "Strand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "morgon",
              "lerntext": "morgon",
              "de": "Morgen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "penna",
              "lerntext": "penna",
              "de": "Stift",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "flygplats",
              "lerntext": "flygplats",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stol",
              "lerntext": "stol",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "14.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag köper en [Slot]",
          "lerntext": "jag köper en [Slot]",
          "wortarten": {
            "jag": "p",
            "köper": "v"
          }
        },
        "frameDe": "Ich kaufe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "skjorta",
              "lerntext": "skjorta",
              "de": "Hemd",
              "c": "n"
            },
            {
              "schrift": "klänning",
              "lerntext": "klänning",
              "de": "Kleid",
              "c": "n"
            },
            {
              "schrift": "kniv",
              "lerntext": "kniv",
              "de": "Messer",
              "c": "n"
            },
            {
              "schrift": "vardagsrum",
              "lerntext": "vardagsrum",
              "de": "Wohnzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "badrum",
              "lerntext": "badrum",
              "de": "Badezimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tak",
              "lerntext": "tak",
              "de": "Dach",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sovrum",
              "lerntext": "sovrum",
              "de": "Schlafzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "öga",
              "lerntext": "öga",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ben",
              "lerntext": "ben",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hjärta",
              "lerntext": "hjärta",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väder",
              "lerntext": "väder",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hår",
              "lerntext": "hår",
              "de": "Haar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen",
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
          "schrift": "jag har [Slot]",
          "lerntext": "jag har [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "kläder",
              "lerntext": "kläder",
              "de": "Kleidung",
              "c": "n"
            },
            {
              "schrift": "byxor",
              "lerntext": "byxor",
              "de": "Hose",
              "c": "n"
            },
            {
              "schrift": "hatt",
              "lerntext": "hatt",
              "de": "Hut",
              "c": "n"
            },
            {
              "schrift": "pass",
              "lerntext": "pass",
              "de": "Reisepass",
              "c": "n"
            },
            {
              "schrift": "namn",
              "lerntext": "namn",
              "de": "Name",
              "c": "n"
            },
            {
              "schrift": "mössa",
              "lerntext": "mössa",
              "de": "Mütze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sko",
              "lerntext": "sko",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klänning",
              "lerntext": "klänning",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kjol",
              "lerntext": "kjol",
              "de": "Rock",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tröja",
              "lerntext": "tröja",
              "de": "Pullover",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skjorta",
              "lerntext": "skjorta",
              "de": "Hemd",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jacka",
              "lerntext": "jacka",
              "de": "Jacke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kniv",
              "lerntext": "kniv",
              "de": "Messer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "strumpa",
              "lerntext": "strumpa",
              "de": "Socke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "handske",
              "lerntext": "handske",
              "de": "Handschuh",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "14.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är mitt [Slot]",
          "lerntext": "det är mitt [Slot]",
          "wortarten": {
            "är": "v",
            "mitt": "p"
          }
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "arbete",
              "lerntext": "arbete",
              "de": "Arbeit",
              "c": "n"
            },
            {
              "schrift": "företag",
              "lerntext": "företag",
              "de": "Firma",
              "c": "n"
            },
            {
              "schrift": "möte",
              "lerntext": "möte",
              "de": "Meeting",
              "c": "n"
            },
            {
              "schrift": "projekt",
              "lerntext": "projekt",
              "de": "Projekt",
              "c": "n"
            },
            {
              "schrift": "yrke",
              "lerntext": "yrke",
              "de": "Beruf",
              "c": "n"
            },
            {
              "schrift": "pass",
              "lerntext": "pass",
              "de": "Reisepass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hatt",
              "lerntext": "hatt",
              "de": "Hut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "namn",
              "lerntext": "namn",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "byxor",
              "lerntext": "byxor",
              "de": "Hose",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kläder",
              "lerntext": "kläder",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mössa",
              "lerntext": "mössa",
              "de": "Mütze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vardagsrum",
              "lerntext": "vardagsrum",
              "de": "Wohnzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sko",
              "lerntext": "sko",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klänning",
              "lerntext": "klänning",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kjol",
              "lerntext": "kjol",
              "de": "Rock",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "14.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag väntar på [Slot]",
          "lerntext": "jag väntar på [Slot]",
          "wortarten": {
            "jag": "p",
            "väntar": "v"
          }
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lön",
              "lerntext": "lön",
              "de": "Gehalt",
              "c": "n"
            },
            {
              "schrift": "uppgift",
              "lerntext": "uppgift",
              "de": "Aufgabe",
              "c": "n"
            },
            {
              "schrift": "anställning",
              "lerntext": "anställning",
              "de": "Anstellung",
              "c": "n"
            },
            {
              "schrift": "svar",
              "lerntext": "svar",
              "de": "Antwort",
              "c": "n"
            },
            {
              "schrift": "prov",
              "lerntext": "prov",
              "de": "Prüfung",
              "c": "n"
            },
            {
              "schrift": "möte",
              "lerntext": "möte",
              "de": "Meeting",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "företag",
              "lerntext": "företag",
              "de": "Firma",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "projekt",
              "lerntext": "projekt",
              "de": "Projekt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "yrke",
              "lerntext": "yrke",
              "de": "Beruf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arbete",
              "lerntext": "arbete",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pass",
              "lerntext": "pass",
              "de": "Reisepass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hatt",
              "lerntext": "hatt",
              "de": "Hut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tröja",
              "lerntext": "tröja",
              "de": "Pullover",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skjorta",
              "lerntext": "skjorta",
              "de": "Hemd",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "namn",
              "lerntext": "namn",
              "de": "Name",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "14.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det blir [Slot] imorgon",
          "lerntext": "det blir [Slot] imorgon",
          "wortarten": {
            "blir": "v"
          }
        },
        "frameDe": "Morgen gibt es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "moln",
              "lerntext": "moln",
              "de": "Wolke",
              "c": "n"
            },
            {
              "schrift": "storm",
              "lerntext": "storm",
              "de": "Sturm",
              "c": "n"
            },
            {
              "schrift": "åska",
              "lerntext": "åska",
              "de": "Gewitter",
              "c": "n"
            },
            {
              "schrift": "is",
              "lerntext": "is",
              "de": "Eis (gefroren)",
              "c": "n"
            },
            {
              "schrift": "himmel",
              "lerntext": "himmel",
              "de": "Himmel",
              "c": "n"
            },
            {
              "schrift": "uppgift",
              "lerntext": "uppgift",
              "de": "Aufgabe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lön",
              "lerntext": "lön",
              "de": "Gehalt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "svar",
              "lerntext": "svar",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "anställning",
              "lerntext": "anställning",
              "de": "Anstellung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "prov",
              "lerntext": "prov",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "möte",
              "lerntext": "möte",
              "de": "Meeting",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "företag",
              "lerntext": "företag",
              "de": "Firma",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "projekt",
              "lerntext": "projekt",
              "de": "Projekt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "badrum",
              "lerntext": "badrum",
              "de": "Badezimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "byxor",
              "lerntext": "byxor",
              "de": "Hose",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "14.11"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag fick ett bra [Slot]",
          "lerntext": "jag fick ett bra [Slot]",
          "wortarten": {
            "jag": "p",
            "fick": "v",
            "bra": "a"
          }
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "betyg",
              "lerntext": "betyg",
              "de": "Note (Zeugnis)",
              "c": "n"
            },
            {
              "schrift": "barnbarn",
              "lerntext": "barnbarn",
              "de": "Enkelkind",
              "c": "n"
            },
            {
              "schrift": "hus",
              "lerntext": "hus",
              "de": "Haus",
              "c": "n"
            },
            {
              "schrift": "rum",
              "lerntext": "rum",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "bord",
              "lerntext": "bord",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "storm",
              "lerntext": "storm",
              "de": "Sturm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "himmel",
              "lerntext": "himmel",
              "de": "Himmel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "is",
              "lerntext": "is",
              "de": "Eis (gefroren)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "moln",
              "lerntext": "moln",
              "de": "Wolke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "åska",
              "lerntext": "åska",
              "de": "Gewitter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uppgift",
              "lerntext": "uppgift",
              "de": "Aufgabe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lön",
              "lerntext": "lön",
              "de": "Gehalt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jacka",
              "lerntext": "jacka",
              "de": "Jacke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tak",
              "lerntext": "tak",
              "de": "Dach",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "yrke",
              "lerntext": "yrke",
              "de": "Beruf",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "14.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det blir [Slot] imorgon",
          "lerntext": "det blir [Slot] imorgon",
          "wortarten": {
            "blir": "v"
          }
        },
        "frameDe": "Morgen gibt es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "moln",
              "lerntext": "moln",
              "de": "Wolke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "storm",
              "lerntext": "storm",
              "de": "Sturm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "åska",
              "lerntext": "åska",
              "de": "Gewitter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "is",
              "lerntext": "is",
              "de": "Eis (gefroren)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "himmel",
              "lerntext": "himmel",
              "de": "Himmel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "svar",
              "lerntext": "svar",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "anställning",
              "lerntext": "anställning",
              "de": "Anstellung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "prov",
              "lerntext": "prov",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.13"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag köper en [Slot]",
          "lerntext": "jag köper en [Slot]",
          "wortarten": {
            "jag": "p",
            "köper": "v"
          }
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "handske",
              "lerntext": "handske",
              "de": "Handschuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sked",
              "lerntext": "sked",
              "de": "Löffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "trädgård",
              "lerntext": "trädgård",
              "de": "Garten",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tallrik",
              "lerntext": "tallrik",
              "de": "Teller",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.14"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag köper en [Slot]",
          "lerntext": "jag köper en [Slot]",
          "wortarten": {
            "jag": "p",
            "köper": "v"
          }
        },
        "frameDe": "Ich kaufe eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "strumpa",
              "lerntext": "strumpa",
              "de": "Socke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gaffel",
              "lerntext": "gaffel",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vägg",
              "lerntext": "vägg",
              "de": "Wand",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.15"
      },
      {
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
        "id": "14.16"
      }
    ]
  },
  {
    "number": 15,
    "title": "Was hast du gemacht?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag har [Slot]",
          "lerntext": "jag har [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v"
          }
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tittat",
              "lerntext": "tittat",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "köpt",
              "lerntext": "köpt",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "sett",
              "lerntext": "sett",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "gjort",
              "lerntext": "gjort",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "tyckt",
              "lerntext": "tyckt",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "tagit",
              "lerntext": "tagit",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förlorat",
              "lerntext": "förlorat",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "läst",
              "lerntext": "läst",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skrivit",
              "lerntext": "skrivit",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hört",
              "lerntext": "hört",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vuxit",
              "lerntext": "vuxit",
              "de": "wachsen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förändrat",
              "lerntext": "förändrat",
              "de": "verändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "festat",
              "lerntext": "festat",
              "de": "feiern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lett",
              "lerntext": "lett",
              "de": "lächeln",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hetat",
              "lerntext": "hetat",
              "de": "heißen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag har [Slot]",
          "lerntext": "jag har [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v"
          }
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tagit",
              "lerntext": "tagit",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "läst",
              "lerntext": "läst",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "skrivit",
              "lerntext": "skrivit",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "hört",
              "lerntext": "hört",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "förlorat",
              "lerntext": "förlorat",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "tittat",
              "lerntext": "tittat",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "köpt",
              "lerntext": "köpt",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sett",
              "lerntext": "sett",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gjort",
              "lerntext": "gjort",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tyckt",
              "lerntext": "tyckt",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lärt",
              "lerntext": "lärt",
              "de": "lehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fortsatt",
              "lerntext": "fortsatt",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kysst",
              "lerntext": "kysst",
              "de": "küssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vuxit",
              "lerntext": "vuxit",
              "de": "wachsen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "önskat",
              "lerntext": "önskat",
              "de": "wünschen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "igår har jag [Slot]",
          "lerntext": "igår har jag [Slot]",
          "wortarten": {
            "har": "v",
            "jag": "p"
          }
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "arbetat",
              "lerntext": "arbetat",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "spelat",
              "lerntext": "spelat",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "dansat",
              "lerntext": "dansat",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "sovit",
              "lerntext": "sovit",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "väntat",
              "lerntext": "väntat",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "letat",
              "lerntext": "letat",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "frågat",
              "lerntext": "frågat",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "svarat",
              "lerntext": "svarat",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hjälpt",
              "lerntext": "hjälpt",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "betalat",
              "lerntext": "betalat",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förändrat",
              "lerntext": "förändrat",
              "de": "verändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "blivit",
              "lerntext": "blivit",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förstått",
              "lerntext": "förstått",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gillat",
              "lerntext": "gillat",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hittat",
              "lerntext": "hittat",
              "de": "finden",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "igår har jag [Slot]",
          "lerntext": "igår har jag [Slot]",
          "wortarten": {
            "har": "v",
            "jag": "p"
          }
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "letat",
              "lerntext": "letat",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "frågat",
              "lerntext": "frågat",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "svarat",
              "lerntext": "svarat",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "hjälpt",
              "lerntext": "hjälpt",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "betalat",
              "lerntext": "betalat",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "dansat",
              "lerntext": "dansat",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sovit",
              "lerntext": "sovit",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "väntat",
              "lerntext": "väntat",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arbetat",
              "lerntext": "arbetat",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spelat",
              "lerntext": "spelat",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saknat",
              "lerntext": "saknat",
              "de": "vermissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "slutat",
              "lerntext": "slutat",
              "de": "aufhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skapat",
              "lerntext": "skapat",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "levt",
              "lerntext": "levt",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kunnat",
              "lerntext": "kunnat",
              "de": "können",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag har redan [Slot]",
          "lerntext": "jag har redan [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v"
          }
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vunnit",
              "lerntext": "vunnit",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "glömt",
              "lerntext": "glömt",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "förstått",
              "lerntext": "förstått",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "träffat",
              "lerntext": "träffat",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "gett",
              "lerntext": "gett",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "talat",
              "lerntext": "talat",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "öppnat",
              "lerntext": "öppnat",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stängt",
              "lerntext": "stängt",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sagt",
              "lerntext": "sagt",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tvättat",
              "lerntext": "tvättat",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lagat",
              "lerntext": "lagat",
              "de": "reparieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ätit",
              "lerntext": "ätit",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gråtit",
              "lerntext": "gråtit",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förklarat",
              "lerntext": "förklarat",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "legat",
              "lerntext": "legat",
              "de": "liegen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag har redan [Slot]",
          "lerntext": "jag har redan [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v"
          }
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sagt",
              "lerntext": "sagt",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "talat",
              "lerntext": "talat",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "öppnat",
              "lerntext": "öppnat",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "stängt",
              "lerntext": "stängt",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "tvättat",
              "lerntext": "tvättat",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "vunnit",
              "lerntext": "vunnit",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "glömt",
              "lerntext": "glömt",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förstått",
              "lerntext": "förstått",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "träffat",
              "lerntext": "träffat",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gett",
              "lerntext": "gett",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sprungit",
              "lerntext": "sprungit",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "festat",
              "lerntext": "festat",
              "de": "feiern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fått",
              "lerntext": "fått",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "visat",
              "lerntext": "visat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lett",
              "lerntext": "lett",
              "de": "lächeln",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.6"
      },
      {
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
        "id": "15.7"
      }
    ]
  },
  {
    "number": 16,
    "title": "Du, ihr, sie",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "du [Slot]",
          "lerntext": "du [Slot]",
          "wortarten": {
            "du": "p"
          }
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tittar",
              "lerntext": "tittar",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "köper",
              "lerntext": "köper",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "gör",
              "lerntext": "gör",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "tycker",
              "lerntext": "tycker",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "tar",
              "lerntext": "tar",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "läser",
              "lerntext": "läser",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skriver",
              "lerntext": "skriver",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "känner",
              "lerntext": "känner",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "väljer",
              "lerntext": "väljer",
              "de": "wählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skickar",
              "lerntext": "skickar",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "byter",
              "lerntext": "byter",
              "de": "wechseln",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "heter",
              "lerntext": "heter",
              "de": "heißen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bestämmer",
              "lerntext": "bestämmer",
              "de": "bestimmen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "du [Slot]",
          "lerntext": "du [Slot]",
          "wortarten": {
            "du": "p"
          }
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tar",
              "lerntext": "tar",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "läser",
              "lerntext": "läser",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "skriver",
              "lerntext": "skriver",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "tittar",
              "lerntext": "tittar",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "köper",
              "lerntext": "köper",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gör",
              "lerntext": "gör",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tycker",
              "lerntext": "tycker",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dör",
              "lerntext": "dör",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "städar",
              "lerntext": "städar",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "står",
              "lerntext": "står",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tror",
              "lerntext": "tror",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pratar",
              "lerntext": "pratar",
              "de": "reden",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "han [Slot]",
          "lerntext": "han [Slot]",
          "wortarten": {
            "han": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "arbetar",
              "lerntext": "arbetar",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "spelar",
              "lerntext": "spelar",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "dansar",
              "lerntext": "dansar",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "sover",
              "lerntext": "sover",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "väntar",
              "lerntext": "väntar",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "letar",
              "lerntext": "letar",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "frågar",
              "lerntext": "frågar",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "svarar",
              "lerntext": "svarar",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "älskar",
              "lerntext": "älskar",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skrattar",
              "lerntext": "skrattar",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "flyger",
              "lerntext": "flyger",
              "de": "fliegen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vet",
              "lerntext": "vet",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "börjar",
              "lerntext": "börjar",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "använder",
              "lerntext": "använder",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dricker",
              "lerntext": "dricker",
              "de": "trinken",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "han [Slot]",
          "lerntext": "han [Slot]",
          "wortarten": {
            "han": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "han",
            "lerntext": "han",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "letar",
              "lerntext": "letar",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "frågar",
              "lerntext": "frågar",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "svarar",
              "lerntext": "svarar",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "dansar",
              "lerntext": "dansar",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sover",
              "lerntext": "sover",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "väntar",
              "lerntext": "väntar",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arbetar",
              "lerntext": "arbetar",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spelar",
              "lerntext": "spelar",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lär",
              "lerntext": "lär",
              "de": "lehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vaknar",
              "lerntext": "vaknar",
              "de": "aufwachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fortsätter",
              "lerntext": "fortsätter",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stannar",
              "lerntext": "stannar",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kysser",
              "lerntext": "kysser",
              "de": "küssen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "vi [Slot]",
          "lerntext": "vi [Slot]",
          "wortarten": {
            "vi": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vinner",
              "lerntext": "vinner",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "glömmer",
              "lerntext": "glömmer",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "förstår",
              "lerntext": "förstår",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "träffar",
              "lerntext": "träffar",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "ger",
              "lerntext": "ger",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "talar",
              "lerntext": "talar",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "öppnar",
              "lerntext": "öppnar",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "säger",
              "lerntext": "säger",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "simmar",
              "lerntext": "simmar",
              "de": "schwimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "växer",
              "lerntext": "växer",
              "de": "wachsen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lämnar",
              "lerntext": "lämnar",
              "de": "verlassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ringer",
              "lerntext": "ringer",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "måste",
              "lerntext": "måste",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "önskar",
              "lerntext": "önskar",
              "de": "wünschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "flyttar",
              "lerntext": "flyttar",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "vi [Slot]",
          "lerntext": "vi [Slot]",
          "wortarten": {
            "vi": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "säger",
              "lerntext": "säger",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "talar",
              "lerntext": "talar",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "öppnar",
              "lerntext": "öppnar",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "vinner",
              "lerntext": "vinner",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "glömmer",
              "lerntext": "glömmer",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förstår",
              "lerntext": "förstår",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "träffar",
              "lerntext": "träffar",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ger",
              "lerntext": "ger",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förändrar",
              "lerntext": "förändrar",
              "de": "verändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tänker",
              "lerntext": "tänker",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bor",
              "lerntext": "bor",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "blir",
              "lerntext": "blir",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sitter",
              "lerntext": "sitter",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "hon [Slot]",
          "lerntext": "hon [Slot]",
          "wortarten": {
            "hon": "p"
          }
        },
        "frameDe": "sie (Sg.) [Slot].",
        "pronouns": [
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bor",
              "lerntext": "bor",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "stannar",
              "lerntext": "stannar",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "skrattar",
              "lerntext": "skrattar",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "gråter",
              "lerntext": "gråter",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "tänker",
              "lerntext": "tänker",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "tror",
              "lerntext": "tror",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "behöver",
              "lerntext": "behöver",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lyssnar",
              "lerntext": "lyssnar",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "går",
              "lerntext": "går",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bygger",
              "lerntext": "bygger",
              "de": "bauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "är",
              "lerntext": "är",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kommer",
              "lerntext": "kommer",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ska",
              "lerntext": "ska",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vill",
              "lerntext": "vill",
              "de": "wollen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "hon [Slot]",
          "lerntext": "hon [Slot]",
          "wortarten": {
            "hon": "p"
          }
        },
        "frameDe": "sie (Sg.) [Slot].",
        "pronouns": [
          {
            "schrift": "hon",
            "lerntext": "hon",
            "de": "sie (Sg.)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tror",
              "lerntext": "tror",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "behöver",
              "lerntext": "behöver",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "skrattar",
              "lerntext": "skrattar",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gråter",
              "lerntext": "gråter",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bor",
              "lerntext": "bor",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stannar",
              "lerntext": "stannar",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tänker",
              "lerntext": "tänker",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sätter",
              "lerntext": "sätter",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kör",
              "lerntext": "kör",
              "de": "fahren (Fahrzeug)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "duschar",
              "lerntext": "duschar",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "säljer",
              "lerntext": "säljer",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gillar",
              "lerntext": "gillar",
              "de": "mögen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
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
        "task": "Frag jemanden, was er macht - und antworte.",
        "newFrameWords": [],
        "id": "16.9"
      }
    ]
  },
  {
    "number": 17,
    "title": "Größer, besser, lieber",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är mer [Slot]",
          "lerntext": "det är mer [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "intressant",
              "lerntext": "intressant",
              "de": "interessant",
              "c": "a"
            },
            {
              "schrift": "svår",
              "lerntext": "svår",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "viktig",
              "lerntext": "viktig",
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "farlig",
              "lerntext": "farlig",
              "de": "gefährlich",
              "c": "a"
            },
            {
              "schrift": "dyr",
              "lerntext": "dyr",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "smutsig",
              "lerntext": "smutsig",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ledsen",
              "lerntext": "ledsen",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "trött",
              "lerntext": "trött",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "snabb",
              "lerntext": "snabb",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ful",
              "lerntext": "ful",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fel",
              "lerntext": "fel",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rätt",
              "lerntext": "rätt",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "långsam",
              "lerntext": "långsam",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "förälskad",
              "lerntext": "förälskad",
              "de": "verliebt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "spännande",
              "lerntext": "spännande",
              "de": "spannend",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är mer [Slot]",
          "lerntext": "det är mer [Slot]",
          "wortarten": {
            "är": "v"
          }
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "smutsig",
              "lerntext": "smutsig",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "trött",
              "lerntext": "trött",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "ledsen",
              "lerntext": "ledsen",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "intressant",
              "lerntext": "intressant",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svår",
              "lerntext": "svår",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "viktig",
              "lerntext": "viktig",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "farlig",
              "lerntext": "farlig",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dyr",
              "lerntext": "dyr",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "snabb",
              "lerntext": "snabb",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "konstig",
              "lerntext": "konstig",
              "de": "komisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ful",
              "lerntext": "ful",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fel",
              "lerntext": "fel",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rätt",
              "lerntext": "rätt",
              "de": "richtig",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "är lika [Slot] som du",
          "lerntext": "är lika [Slot] som du",
          "wortarten": {
            "är": "v",
            "du": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "stor",
              "lerntext": "stor",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "liten",
              "lerntext": "liten",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "gammal",
              "lerntext": "gammal",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "ung",
              "lerntext": "ung",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "dyr",
              "lerntext": "dyr",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "vacker",
              "lerntext": "vacker",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "varm",
              "lerntext": "varm",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "kall",
              "lerntext": "kall",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ny",
              "lerntext": "ny",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stark",
              "lerntext": "stark",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "enkel",
              "lerntext": "enkel",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "speciell",
              "lerntext": "speciell",
              "de": "besonders",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vanlig",
              "lerntext": "vanlig",
              "de": "gewöhnlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "långsam",
              "lerntext": "långsam",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arg",
              "lerntext": "arg",
              "de": "wütend",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "när",
            "lerntext": "när",
            "de": "wann",
            "c": "k"
          }
        ],
        "id": "17.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "är lika [Slot] som du",
          "lerntext": "är lika [Slot] som du",
          "wortarten": {
            "är": "v",
            "du": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vacker",
              "lerntext": "vacker",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "varm",
              "lerntext": "varm",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "kall",
              "lerntext": "kall",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "ny",
              "lerntext": "ny",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "stark",
              "lerntext": "stark",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "stor",
              "lerntext": "stor",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "liten",
              "lerntext": "liten",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ung",
              "lerntext": "ung",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gammal",
              "lerntext": "gammal",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dyr",
              "lerntext": "dyr",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "hungrig",
              "lerntext": "hungrig",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "orange",
              "lerntext": "orange",
              "de": "orange",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "färdig",
              "lerntext": "färdig",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stressad",
              "lerntext": "stressad",
              "de": "gestresst",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lätt",
              "lerntext": "lätt",
              "de": "leicht (Gewicht)",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.4"
      },
      {
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
        "id": "17.5"
      }
    ]
  },
  {
    "number": 18,
    "title": "Ich fühle mich",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag känner mig [Slot]",
          "lerntext": "jag känner mig [Slot]",
          "wortarten": {
            "jag": "p",
            "känner": "v",
            "mig": "p"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trött",
              "lerntext": "trött",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "ledsen",
              "lerntext": "ledsen",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "stark",
              "lerntext": "stark",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "svag",
              "lerntext": "svag",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "redo",
              "lerntext": "redo",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arg",
              "lerntext": "arg",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ung",
              "lerntext": "ung",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vacker",
              "lerntext": "vacker",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gammal",
              "lerntext": "gammal",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "billig",
              "lerntext": "billig",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "förälskad",
              "lerntext": "förälskad",
              "de": "verliebt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stängd",
              "lerntext": "stängd",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "snabb",
              "lerntext": "snabb",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "våt",
              "lerntext": "våt",
              "de": "nass",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "18.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag känner mig [Slot]",
          "lerntext": "jag känner mig [Slot]",
          "wortarten": {
            "jag": "p",
            "känner": "v",
            "mig": "p"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "redo",
              "lerntext": "redo",
              "de": "bereit",
              "c": "a"
            },
            {
              "schrift": "ung",
              "lerntext": "ung",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "gammal",
              "lerntext": "gammal",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "arg",
              "lerntext": "arg",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "vacker",
              "lerntext": "vacker",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "svag",
              "lerntext": "svag",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ledsen",
              "lerntext": "ledsen",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stark",
              "lerntext": "stark",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "trött",
              "lerntext": "trött",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svart",
              "lerntext": "svart",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "spännande",
              "lerntext": "spännande",
              "de": "spannend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "konstig",
              "lerntext": "konstig",
              "de": "komisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rosa",
              "lerntext": "rosa",
              "de": "rosa",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bred",
              "lerntext": "bred",
              "de": "breit",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "18.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "vi träffas [Slot]",
          "lerntext": "vi träffas [Slot]",
          "wortarten": {
            "vi": "p"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "idag",
              "lerntext": "idag",
              "de": "heute"
            },
            {
              "schrift": "imorgon",
              "lerntext": "imorgon",
              "de": "morgen"
            },
            {
              "schrift": "nu",
              "lerntext": "nu",
              "de": "jetzt"
            },
            {
              "schrift": "snart",
              "lerntext": "snart",
              "de": "bald"
            },
            {
              "schrift": "igår",
              "lerntext": "igår",
              "de": "gestern"
            },
            {
              "schrift": "ofta",
              "lerntext": "ofta",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "aldrig",
              "lerntext": "aldrig",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "alltid",
              "lerntext": "alltid",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "ganska",
              "lerntext": "ganska",
              "de": "ziemlich",
              "wieder": true
            },
            {
              "schrift": "kanske",
              "lerntext": "kanske",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "nej",
              "lerntext": "nej",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "bara",
              "lerntext": "bara",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "också",
              "lerntext": "också",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "ja",
              "lerntext": "ja",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "då",
              "lerntext": "då",
              "de": "dann",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "18.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "vi träffas [Slot]",
          "lerntext": "vi träffas [Slot]",
          "wortarten": {
            "vi": "p"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ofta",
              "lerntext": "ofta",
              "de": "oft"
            },
            {
              "schrift": "aldrig",
              "lerntext": "aldrig",
              "de": "nie"
            },
            {
              "schrift": "alltid",
              "lerntext": "alltid",
              "de": "immer"
            },
            {
              "schrift": "idag",
              "lerntext": "idag",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "snart",
              "lerntext": "snart",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "imorgon",
              "lerntext": "imorgon",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "igår",
              "lerntext": "igår",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "nu",
              "lerntext": "nu",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "ganska",
              "lerntext": "ganska",
              "de": "ziemlich",
              "wieder": true
            },
            {
              "schrift": "kanske",
              "lerntext": "kanske",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "nej",
              "lerntext": "nej",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "bara",
              "lerntext": "bara",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "också",
              "lerntext": "också",
              "de": "auch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "18.4"
      },
      {
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
        "id": "18.5"
      }
    ]
  },
  {
    "number": 19,
    "title": "Weil, wenn, obwohl",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag stannar här [Slot] jag är trött",
          "lerntext": "jag stannar här [Slot] jag är trött",
          "wortarten": {
            "jag": "p",
            "stannar": "v",
            "är": "v",
            "trött": "a"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "när",
              "lerntext": "när",
              "de": "wann",
              "c": "k"
            },
            {
              "schrift": "vart",
              "lerntext": "vart",
              "de": "wohin",
              "wieder": true
            },
            {
              "schrift": "varför",
              "lerntext": "varför",
              "de": "warum",
              "wieder": true
            },
            {
              "schrift": "vilken",
              "lerntext": "vilken",
              "de": "welcher",
              "wieder": true
            },
            {
              "schrift": "vilket",
              "lerntext": "vilket",
              "de": "welches (Neutrum)",
              "wieder": true
            },
            {
              "schrift": "vilka",
              "lerntext": "vilka",
              "de": "welche (Pl.)",
              "wieder": true
            },
            {
              "schrift": "vem",
              "lerntext": "vem",
              "de": "wer",
              "wieder": true
            },
            {
              "schrift": "vad",
              "lerntext": "vad",
              "de": "was",
              "wieder": true
            },
            {
              "schrift": "hur mycket",
              "lerntext": "hur mycket",
              "de": "wie viel",
              "wieder": true
            },
            {
              "schrift": "hur många",
              "lerntext": "hur många",
              "de": "wie viele",
              "wieder": true
            },
            {
              "schrift": "hur",
              "lerntext": "hur",
              "de": "wie",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "19.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag stannar här [Slot] jag är trött",
          "lerntext": "jag stannar här [Slot] jag är trött",
          "wortarten": {
            "jag": "p",
            "stannar": "v",
            "är": "v",
            "trött": "a"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "eftersom",
              "lerntext": "eftersom",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "fastän",
              "lerntext": "fastän",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "men",
              "lerntext": "men",
              "de": "aber",
              "c": "k"
            },
            {
              "schrift": "eller",
              "lerntext": "eller",
              "de": "oder",
              "c": "k"
            },
            {
              "schrift": "och",
              "lerntext": "och",
              "de": "und",
              "c": "k"
            },
            {
              "schrift": "att",
              "lerntext": "att",
              "de": "dass",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "så",
              "lerntext": "så",
              "de": "also",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "för att",
              "lerntext": "för att",
              "de": "damit",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "tills",
              "lerntext": "tills",
              "de": "bis",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "medan",
              "lerntext": "medan",
              "de": "während",
              "c": "k",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "19.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag stannar här [Slot] jag är trött",
          "lerntext": "jag stannar här [Slot] jag är trött",
          "wortarten": {
            "jag": "p",
            "stannar": "v",
            "är": "v",
            "trött": "a"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "om",
              "lerntext": "om",
              "de": "über"
            },
            {
              "schrift": "under",
              "lerntext": "under",
              "de": "unter"
            },
            {
              "schrift": "efter",
              "lerntext": "efter",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "över",
              "lerntext": "över",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "av",
              "lerntext": "av",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "från",
              "lerntext": "från",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "med",
              "lerntext": "med",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "vid",
              "lerntext": "vid",
              "de": "bei",
              "wieder": true
            },
            {
              "schrift": "bredvid",
              "lerntext": "bredvid",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "bakom",
              "lerntext": "bakom",
              "de": "hinter",
              "wieder": true
            },
            {
              "schrift": "innan",
              "lerntext": "innan",
              "de": "vor (zeitlich)",
              "wieder": true
            },
            {
              "schrift": "utan",
              "lerntext": "utan",
              "de": "ohne",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "19.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag tror att det är [Slot]",
          "lerntext": "jag tror att det är [Slot]",
          "wortarten": {
            "jag": "p",
            "tror": "v",
            "är": "v"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lätt",
              "lerntext": "lätt",
              "de": "leicht (Gewicht)",
              "c": "a"
            },
            {
              "schrift": "fel",
              "lerntext": "fel",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "kort",
              "lerntext": "kort",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "lång",
              "lerntext": "lång",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "ren",
              "lerntext": "ren",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "söt",
              "lerntext": "söt",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svart",
              "lerntext": "svart",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svag",
              "lerntext": "svag",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arg",
              "lerntext": "arg",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ful",
              "lerntext": "ful",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nervös",
              "lerntext": "nervös",
              "de": "nervös",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blå",
              "lerntext": "blå",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dum",
              "lerntext": "dum",
              "de": "dumm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lila",
              "lerntext": "lila",
              "de": "lila",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "att",
            "lerntext": "att",
            "de": "dass",
            "c": "k"
          }
        ],
        "id": "19.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag tror att det är [Slot]",
          "lerntext": "jag tror att det är [Slot]",
          "wortarten": {
            "jag": "p",
            "tror": "v",
            "är": "v"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ren",
              "lerntext": "ren",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "svag",
              "lerntext": "svag",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "svart",
              "lerntext": "svart",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "söt",
              "lerntext": "söt",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "arg",
              "lerntext": "arg",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "fel",
              "lerntext": "fel",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "kort",
              "lerntext": "kort",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lång",
              "lerntext": "lång",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lätt",
              "lerntext": "lätt",
              "de": "leicht (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "trevlig",
              "lerntext": "trevlig",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smart",
              "lerntext": "smart",
              "de": "klug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tjock",
              "lerntext": "tjock",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "röd",
              "lerntext": "röd",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "hög",
              "lerntext": "hög",
              "de": "hoch",
              "c": "a",
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
          "schrift": "om jag har tid, vill jag [Slot]",
          "lerntext": "om jag har tid, vill jag [Slot]",
          "wortarten": {
            "om": "k",
            "jag": "p",
            "har": "v",
            "tid,": "n",
            "vill": "v"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "stanna",
              "lerntext": "stanna",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "skratta",
              "lerntext": "skratta",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "gråta",
              "lerntext": "gråta",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "tänka",
              "lerntext": "tänka",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "tro",
              "lerntext": "tro",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "behöva",
              "lerntext": "behöva",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hitta",
              "lerntext": "hitta",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sakna",
              "lerntext": "sakna",
              "de": "vermissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sluta",
              "lerntext": "sluta",
              "de": "aufhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skapa",
              "lerntext": "skapa",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leva",
              "lerntext": "leva",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kunna",
              "lerntext": "kunna",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "laga",
              "lerntext": "laga",
              "de": "reparieren",
              "c": "v",
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
          "schrift": "om jag har tid, vill jag [Slot]",
          "lerntext": "om jag har tid, vill jag [Slot]",
          "wortarten": {
            "om": "k",
            "jag": "p",
            "har": "v",
            "tid,": "n",
            "vill": "v"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tro",
              "lerntext": "tro",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "behöva",
              "lerntext": "behöva",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "skratta",
              "lerntext": "skratta",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gråta",
              "lerntext": "gråta",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stanna",
              "lerntext": "stanna",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tänka",
              "lerntext": "tänka",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "äta",
              "lerntext": "äta",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förklara",
              "lerntext": "förklara",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ligga",
              "lerntext": "ligga",
              "de": "liegen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "springa",
              "lerntext": "springa",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "festa",
              "lerntext": "festa",
              "de": "feiern",
              "c": "v",
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
        "kind": "frame",
        "frame": {
          "schrift": "jag stannar här [Slot] jag är trött",
          "lerntext": "jag stannar här [Slot] jag är trött",
          "wortarten": {
            "jag": "p",
            "stannar": "v",
            "är": "v",
            "trött": "a"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vart",
              "lerntext": "vart",
              "de": "wohin",
              "wieder": true
            },
            {
              "schrift": "varför",
              "lerntext": "varför",
              "de": "warum",
              "wieder": true
            },
            {
              "schrift": "så",
              "lerntext": "så",
              "de": "also",
              "c": "k",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "19.8"
      },
      {
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
        "id": "19.9"
      }
    ]
  },
  {
    "number": 20,
    "title": "Bitten und auffordern",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "kan du [Slot], tack?",
          "lerntext": "kan du [Slot], tack?",
          "wortarten": {
            "kan": "v",
            "du": "p"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "arbeta",
              "lerntext": "arbeta",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "spela",
              "lerntext": "spela",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "dansa",
              "lerntext": "dansa",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "sova",
              "lerntext": "sova",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "vänta",
              "lerntext": "vänta",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "hjälpa",
              "lerntext": "hjälpa",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "betala",
              "lerntext": "betala",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leta",
              "lerntext": "leta",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fråga",
              "lerntext": "fråga",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "svara",
              "lerntext": "svara",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "få",
              "lerntext": "få",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "visa",
              "lerntext": "visa",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "le",
              "lerntext": "le",
              "de": "lächeln",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "känna",
              "lerntext": "känna",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "välja",
              "lerntext": "välja",
              "de": "wählen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "20.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "kan du [Slot], tack?",
          "lerntext": "kan du [Slot], tack?",
          "wortarten": {
            "kan": "v",
            "du": "p"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "leta",
              "lerntext": "leta",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "fråga",
              "lerntext": "fråga",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "svara",
              "lerntext": "svara",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "hjälpa",
              "lerntext": "hjälpa",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "betala",
              "lerntext": "betala",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "dansa",
              "lerntext": "dansa",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sova",
              "lerntext": "sova",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vänta",
              "lerntext": "vänta",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arbeta",
              "lerntext": "arbeta",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spela",
              "lerntext": "spela",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skicka",
              "lerntext": "skicka",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "byta",
              "lerntext": "byta",
              "de": "wechseln",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "heta",
              "lerntext": "heta",
              "de": "heißen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bestämma",
              "lerntext": "bestämma",
              "de": "bestimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dö",
              "lerntext": "dö",
              "de": "sterben",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "20.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "du måste [Slot]",
          "lerntext": "du måste [Slot]",
          "wortarten": {
            "du": "p",
            "måste": "v"
          }
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vinna",
              "lerntext": "vinna",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "glömma",
              "lerntext": "glömma",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "förstå",
              "lerntext": "förstå",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "träffa",
              "lerntext": "träffa",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "ge",
              "lerntext": "ge",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "tala",
              "lerntext": "tala",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "öppna",
              "lerntext": "öppna",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "säga",
              "lerntext": "säga",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "städa",
              "lerntext": "städa",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stå",
              "lerntext": "stå",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prata",
              "lerntext": "prata",
              "de": "reden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "älska",
              "lerntext": "älska",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "flyga",
              "lerntext": "flyga",
              "de": "fliegen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "veta",
              "lerntext": "veta",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "börja",
              "lerntext": "börja",
              "de": "beginnen",
              "c": "v",
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
          "schrift": "du måste [Slot]",
          "lerntext": "du måste [Slot]",
          "wortarten": {
            "du": "p",
            "måste": "v"
          }
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "du",
            "lerntext": "du",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "säga",
              "lerntext": "säga",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "tala",
              "lerntext": "tala",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "öppna",
              "lerntext": "öppna",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "vinna",
              "lerntext": "vinna",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "glömma",
              "lerntext": "glömma",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förstå",
              "lerntext": "förstå",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "träffa",
              "lerntext": "träffa",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ge",
              "lerntext": "ge",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "använda",
              "lerntext": "använda",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dricka",
              "lerntext": "dricka",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lära",
              "lerntext": "lära",
              "de": "lehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vakna",
              "lerntext": "vakna",
              "de": "aufwachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fortsätta",
              "lerntext": "fortsätta",
              "de": "fortsetzen",
              "c": "v",
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
        "task": "Bitte jemanden höflich um etwas.",
        "newFrameWords": [],
        "id": "20.5"
      }
    ]
  },
  {
    "number": 21,
    "title": "Wem gebe ich was?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag ger boken till [Slot]",
          "lerntext": "jag ger boken till [Slot]",
          "wortarten": {
            "jag": "p",
            "ger": "v",
            "boken": "n"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vän",
              "lerntext": "vän",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "mamma",
              "lerntext": "mamma",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "pappa",
              "lerntext": "pappa",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "barn",
              "lerntext": "barn",
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
              "schrift": "syster",
              "lerntext": "syster",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bror",
              "lerntext": "bror",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fru",
              "lerntext": "fru",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "barnbarn",
              "lerntext": "barnbarn",
              "de": "Enkelkind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "betyg",
              "lerntext": "betyg",
              "de": "Note (Zeugnis)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kläder",
              "lerntext": "kläder",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sovrum",
              "lerntext": "sovrum",
              "de": "Schlafzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kniv",
              "lerntext": "kniv",
              "de": "Messer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arbete",
              "lerntext": "arbete",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mössa",
              "lerntext": "mössa",
              "de": "Mütze",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "21.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag ger boken till [Slot]",
          "lerntext": "jag ger boken till [Slot]",
          "wortarten": {
            "jag": "p",
            "ger": "v",
            "boken": "n"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fru",
              "lerntext": "fru",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "syster",
              "lerntext": "syster",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "bror",
              "lerntext": "bror",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "barn",
              "lerntext": "barn",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vän",
              "lerntext": "vän",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mamma",
              "lerntext": "mamma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pappa",
              "lerntext": "pappa",
              "de": "Vater",
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
              "schrift": "barnbarn",
              "lerntext": "barnbarn",
              "de": "Enkelkind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "betyg",
              "lerntext": "betyg",
              "de": "Note (Zeugnis)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "storm",
              "lerntext": "storm",
              "de": "Sturm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "himmel",
              "lerntext": "himmel",
              "de": "Himmel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "möte",
              "lerntext": "möte",
              "de": "Meeting",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "21.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag visar staden för [Slot]",
          "lerntext": "jag visar staden för [Slot]",
          "wortarten": {
            "jag": "p",
            "visar": "v",
            "staden": "n"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vän",
              "lerntext": "vän",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "mamma",
              "lerntext": "mamma",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "pappa",
              "lerntext": "pappa",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "barn",
              "lerntext": "barn",
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
              "schrift": "syster",
              "lerntext": "syster",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bror",
              "lerntext": "bror",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fru",
              "lerntext": "fru",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rygg",
              "lerntext": "rygg",
              "de": "Rücken",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vardagsrum",
              "lerntext": "vardagsrum",
              "de": "Wohnzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pass",
              "lerntext": "pass",
              "de": "Reisepass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uppgift",
              "lerntext": "uppgift",
              "de": "Aufgabe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "is",
              "lerntext": "is",
              "de": "Eis (gefroren)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "moln",
              "lerntext": "moln",
              "de": "Wolke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sko",
              "lerntext": "sko",
              "de": "Schuh",
              "c": "n",
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
          "schrift": "jag visar staden för [Slot]",
          "lerntext": "jag visar staden för [Slot]",
          "wortarten": {
            "jag": "p",
            "visar": "v",
            "staden": "n"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fru",
              "lerntext": "fru",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "syster",
              "lerntext": "syster",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "bror",
              "lerntext": "bror",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "barn",
              "lerntext": "barn",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vän",
              "lerntext": "vän",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mamma",
              "lerntext": "mamma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pappa",
              "lerntext": "pappa",
              "de": "Vater",
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
              "schrift": "hatt",
              "lerntext": "hatt",
              "de": "Hut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klänning",
              "lerntext": "klänning",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kjol",
              "lerntext": "kjol",
              "de": "Rock",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "företag",
              "lerntext": "företag",
              "de": "Firma",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "projekt",
              "lerntext": "projekt",
              "de": "Projekt",
              "c": "n",
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
        "task": "Sag, wem du etwas gibst.",
        "newFrameWords": [],
        "id": "21.5"
      }
    ]
  },
  {
    "number": 22,
    "title": "Ein Glas, genug, zu viel",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag vill ha ett glas [Slot]",
          "lerntext": "jag vill ha ett glas [Slot]",
          "wortarten": {
            "jag": "p",
            "vill": "v",
            "ha": "v",
            "glas": "n"
          }
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vatten",
              "lerntext": "vatten",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "öl",
              "lerntext": "öl",
              "de": "Bier",
              "c": "n"
            },
            {
              "schrift": "mjölk",
              "lerntext": "mjölk",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "kaffe",
              "lerntext": "kaffe",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "tröja",
              "lerntext": "tröja",
              "de": "Pullover",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "knä",
              "lerntext": "knä",
              "de": "Knie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skjorta",
              "lerntext": "skjorta",
              "de": "Hemd",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "åska",
              "lerntext": "åska",
              "de": "Gewitter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "barnbarn",
              "lerntext": "barnbarn",
              "de": "Enkelkind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "namn",
              "lerntext": "namn",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mage",
              "lerntext": "mage",
              "de": "Bauch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "badrum",
              "lerntext": "badrum",
              "de": "Badezimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "byxor",
              "lerntext": "byxor",
              "de": "Hose",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hals",
              "lerntext": "hals",
              "de": "Hals",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "glas",
            "lerntext": "glas",
            "de": "Glas (Trinkgefäß)",
            "c": "n"
          }
        ],
        "id": "22.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "vi har tillräckligt [Slot]",
          "lerntext": "vi har tillräckligt [Slot]",
          "wortarten": {
            "vi": "p",
            "har": "v"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pengar",
              "lerntext": "pengar",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "tid",
              "lerntext": "tid",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "bröd",
              "lerntext": "bröd",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "frukt",
              "lerntext": "frukt",
              "de": "Obst",
              "c": "n"
            },
            {
              "schrift": "kött",
              "lerntext": "kött",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "fisk",
              "lerntext": "fisk",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "socker",
              "lerntext": "socker",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mjölk",
              "lerntext": "mjölk",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lön",
              "lerntext": "lön",
              "de": "Gehalt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jacka",
              "lerntext": "jacka",
              "de": "Jacke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tak",
              "lerntext": "tak",
              "de": "Dach",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "betyg",
              "lerntext": "betyg",
              "de": "Note (Zeugnis)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "yrke",
              "lerntext": "yrke",
              "de": "Beruf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gaffel",
              "lerntext": "gaffel",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vägg",
              "lerntext": "vägg",
              "de": "Wand",
              "c": "n",
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
          "schrift": "vi har tillräckligt [Slot]",
          "lerntext": "vi har tillräckligt [Slot]",
          "wortarten": {
            "vi": "p",
            "har": "v"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "vi",
            "lerntext": "vi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fisk",
              "lerntext": "fisk",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "socker",
              "lerntext": "socker",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "mjölk",
              "lerntext": "mjölk",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "pengar",
              "lerntext": "pengar",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bröd",
              "lerntext": "bröd",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frukt",
              "lerntext": "frukt",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kött",
              "lerntext": "kött",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tid",
              "lerntext": "tid",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "öra",
              "lerntext": "öra",
              "de": "Ohr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sked",
              "lerntext": "sked",
              "de": "Löffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "svar",
              "lerntext": "svar",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kläder",
              "lerntext": "kläder",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sovrum",
              "lerntext": "sovrum",
              "de": "Schlafzimmer",
              "c": "n",
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
        "task": "Bestell etwas mit einer Menge.",
        "newFrameWords": [],
        "id": "22.4"
      }
    ]
  },
  {
    "number": 23,
    "title": "Seit, vor, in einer Stunde",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag har väntat i en [Slot]",
          "lerntext": "jag har väntat i en [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v",
            "väntat": "v"
          }
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "timme",
              "lerntext": "timme",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "minut",
              "lerntext": "minut",
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "vecka",
              "lerntext": "vecka",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "natt",
              "lerntext": "natt",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "strumpa",
              "lerntext": "strumpa",
              "de": "Socke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "prov",
              "lerntext": "prov",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arbete",
              "lerntext": "arbete",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mössa",
              "lerntext": "mössa",
              "de": "Mütze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jacka",
              "lerntext": "jacka",
              "de": "Jacke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gaffel",
              "lerntext": "gaffel",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vägg",
              "lerntext": "vägg",
              "de": "Wand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "svar",
              "lerntext": "svar",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kläder",
              "lerntext": "kläder",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "smör",
              "lerntext": "smör",
              "de": "Butter",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "23.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag har väntat i en [Slot]",
          "lerntext": "jag har väntat i en [Slot]",
          "wortarten": {
            "jag": "p",
            "har": "v",
            "väntat": "v"
          }
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dag",
              "lerntext": "dag",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "kväll",
              "lerntext": "kväll",
              "de": "Abend",
              "c": "n"
            },
            {
              "schrift": "trädgård",
              "lerntext": "trädgård",
              "de": "Garten",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "handske",
              "lerntext": "handske",
              "de": "Handschuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "golv",
              "lerntext": "golv",
              "de": "Boden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tallrik",
              "lerntext": "tallrik",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sko",
              "lerntext": "sko",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kjol",
              "lerntext": "kjol",
              "de": "Rock",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tröja",
              "lerntext": "tröja",
              "de": "Pullover",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sked",
              "lerntext": "sked",
              "de": "Löffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "resväska",
              "lerntext": "resväska",
              "de": "Koffer",
              "c": "n",
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
          "schrift": "[Slot] går jag hem",
          "lerntext": "[Slot] går jag hem",
          "wortarten": {
            "går": "v",
            "jag": "p"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "idag",
              "lerntext": "idag",
              "de": "heute"
            },
            {
              "schrift": "imorgon",
              "lerntext": "imorgon",
              "de": "morgen"
            },
            {
              "schrift": "nu",
              "lerntext": "nu",
              "de": "jetzt"
            },
            {
              "schrift": "snart",
              "lerntext": "snart",
              "de": "bald"
            },
            {
              "schrift": "igår",
              "lerntext": "igår",
              "de": "gestern"
            },
            {
              "schrift": "ofta",
              "lerntext": "ofta",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "aldrig",
              "lerntext": "aldrig",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "alltid",
              "lerntext": "alltid",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "ja",
              "lerntext": "ja",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "ganska",
              "lerntext": "ganska",
              "de": "ziemlich",
              "wieder": true
            },
            {
              "schrift": "kanske",
              "lerntext": "kanske",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "nej",
              "lerntext": "nej",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "bara",
              "lerntext": "bara",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "också",
              "lerntext": "också",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "tillsammans",
              "lerntext": "tillsammans",
              "de": "zusammen",
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
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] går jag hem",
          "lerntext": "[Slot] går jag hem",
          "wortarten": {
            "går": "v",
            "jag": "p"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ofta",
              "lerntext": "ofta",
              "de": "oft"
            },
            {
              "schrift": "aldrig",
              "lerntext": "aldrig",
              "de": "nie"
            },
            {
              "schrift": "alltid",
              "lerntext": "alltid",
              "de": "immer"
            },
            {
              "schrift": "idag",
              "lerntext": "idag",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "snart",
              "lerntext": "snart",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "imorgon",
              "lerntext": "imorgon",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "igår",
              "lerntext": "igår",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "nu",
              "lerntext": "nu",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "ja",
              "lerntext": "ja",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "genast",
              "lerntext": "genast",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "där",
              "lerntext": "där",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "sedan",
              "lerntext": "sedan",
              "de": "seitdem",
              "wieder": true
            },
            {
              "schrift": "fortfarande",
              "lerntext": "fortfarande",
              "de": "immer noch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "23.4"
      },
      {
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
        "id": "23.5"
      }
    ]
  },
  {
    "number": 24,
    "title": "Ich hätte gern",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag skulle vilja [Slot]",
          "lerntext": "jag skulle vilja [Slot]",
          "wortarten": {
            "jag": "p",
            "skulle": "v",
            "vilja": "v"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "stanna",
              "lerntext": "stanna",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "skratta",
              "lerntext": "skratta",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "gråta",
              "lerntext": "gråta",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "tänka",
              "lerntext": "tänka",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "tro",
              "lerntext": "tro",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "behöva",
              "lerntext": "behöva",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kyssa",
              "lerntext": "kyssa",
              "de": "küssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "simma",
              "lerntext": "simma",
              "de": "schwimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "växa",
              "lerntext": "växa",
              "de": "wachsen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lämna",
              "lerntext": "lämna",
              "de": "verlassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ringa",
              "lerntext": "ringa",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "önska",
              "lerntext": "önska",
              "de": "wünschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "flytta",
              "lerntext": "flytta",
              "de": "umziehen",
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
          "schrift": "jag skulle vilja [Slot]",
          "lerntext": "jag skulle vilja [Slot]",
          "wortarten": {
            "jag": "p",
            "skulle": "v",
            "vilja": "v"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tro",
              "lerntext": "tro",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "behöva",
              "lerntext": "behöva",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "skratta",
              "lerntext": "skratta",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gråta",
              "lerntext": "gråta",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stanna",
              "lerntext": "stanna",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tänka",
              "lerntext": "tänka",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förändra",
              "lerntext": "förändra",
              "de": "verändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bli",
              "lerntext": "bli",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sitta",
              "lerntext": "sitta",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lyssna",
              "lerntext": "lyssna",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gå",
              "lerntext": "gå",
              "de": "gehen",
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
          "schrift": "kan du ge mig [Slot]?",
          "lerntext": "kan du ge mig [Slot]?",
          "wortarten": {
            "kan": "v",
            "du": "p",
            "ge": "v",
            "mig": "p"
          }
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vatten",
              "lerntext": "vatten",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "bröd",
              "lerntext": "bröd",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "nyckel",
              "lerntext": "nyckel",
              "de": "Schlüssel",
              "c": "n"
            },
            {
              "schrift": "bok",
              "lerntext": "bok",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "väska",
              "lerntext": "väska",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "kaffe",
              "lerntext": "kaffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "socker",
              "lerntext": "socker",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mjölk",
              "lerntext": "mjölk",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kniv",
              "lerntext": "kniv",
              "de": "Messer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "anställning",
              "lerntext": "anställning",
              "de": "Anstellung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tand",
              "lerntext": "tand",
              "de": "Zahn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "storm",
              "lerntext": "storm",
              "de": "Sturm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "himmel",
              "lerntext": "himmel",
              "de": "Himmel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "möte",
              "lerntext": "möte",
              "de": "Meeting",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rygg",
              "lerntext": "rygg",
              "de": "Rücken",
              "c": "n",
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
          "schrift": "kan du ge mig [Slot]?",
          "lerntext": "kan du ge mig [Slot]?",
          "wortarten": {
            "kan": "v",
            "du": "p",
            "ge": "v",
            "mig": "p"
          }
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "socker",
              "lerntext": "socker",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "kaffe",
              "lerntext": "kaffe",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "mjölk",
              "lerntext": "mjölk",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "bok",
              "lerntext": "bok",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nyckel",
              "lerntext": "nyckel",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "väska",
              "lerntext": "väska",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vatten",
              "lerntext": "vatten",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bröd",
              "lerntext": "bröd",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vardagsrum",
              "lerntext": "vardagsrum",
              "de": "Wohnzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pass",
              "lerntext": "pass",
              "de": "Reisepass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uppgift",
              "lerntext": "uppgift",
              "de": "Aufgabe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "is",
              "lerntext": "is",
              "de": "Eis (gefroren)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "moln",
              "lerntext": "moln",
              "de": "Wolke",
              "c": "n",
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
        "id": "24.5"
      }
    ]
  },
  {
    "number": 25,
    "title": "Ich glaube, dass",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag tror att det är [Slot]",
          "lerntext": "jag tror att det är [Slot]",
          "wortarten": {
            "jag": "p",
            "tror": "v",
            "är": "v"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stor",
              "lerntext": "stor",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "liten",
              "lerntext": "liten",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "gammal",
              "lerntext": "gammal",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "ung",
              "lerntext": "ung",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "dyr",
              "lerntext": "dyr",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "varm",
              "lerntext": "varm",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "kall",
              "lerntext": "kall",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ny",
              "lerntext": "ny",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vacker",
              "lerntext": "vacker",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stark",
              "lerntext": "stark",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "snäll",
              "lerntext": "snäll",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dålig",
              "lerntext": "dålig",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tung",
              "lerntext": "tung",
              "de": "schwer (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lycklig",
              "lerntext": "lycklig",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gul",
              "lerntext": "gul",
              "de": "gelb",
              "c": "a",
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
          "schrift": "jag tror att det är [Slot]",
          "lerntext": "jag tror att det är [Slot]",
          "wortarten": {
            "jag": "p",
            "tror": "v",
            "är": "v"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vacker",
              "lerntext": "vacker",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "varm",
              "lerntext": "varm",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "kall",
              "lerntext": "kall",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "ny",
              "lerntext": "ny",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "stark",
              "lerntext": "stark",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "stor",
              "lerntext": "stor",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "liten",
              "lerntext": "liten",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ung",
              "lerntext": "ung",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dyr",
              "lerntext": "dyr",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gammal",
              "lerntext": "gammal",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grön",
              "lerntext": "grön",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lugn",
              "lerntext": "lugn",
              "de": "ruhig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "djup",
              "lerntext": "djup",
              "de": "tief",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rätt",
              "lerntext": "rätt",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "låg",
              "lerntext": "låg",
              "de": "niedrig",
              "c": "a",
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
          "schrift": "jag tycker det är väldigt [Slot]",
          "lerntext": "jag tycker det är väldigt [Slot]",
          "wortarten": {
            "jag": "p",
            "tycker": "v",
            "är": "v"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lätt",
              "lerntext": "lätt",
              "de": "leicht (Gewicht)",
              "c": "a"
            },
            {
              "schrift": "fel",
              "lerntext": "fel",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "kort",
              "lerntext": "kort",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "lång",
              "lerntext": "lång",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "ren",
              "lerntext": "ren",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "söt",
              "lerntext": "söt",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svart",
              "lerntext": "svart",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "svag",
              "lerntext": "svag",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arg",
              "lerntext": "arg",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grå",
              "lerntext": "grå",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rädd",
              "lerntext": "rädd",
              "de": "ängstlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "förvånad",
              "lerntext": "förvånad",
              "de": "überrascht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "enkel",
              "lerntext": "enkel",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smal",
              "lerntext": "smal",
              "de": "schmal",
              "c": "a",
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
          "schrift": "jag tycker det är väldigt [Slot]",
          "lerntext": "jag tycker det är väldigt [Slot]",
          "wortarten": {
            "jag": "p",
            "tycker": "v",
            "är": "v"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ren",
              "lerntext": "ren",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "svag",
              "lerntext": "svag",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "svart",
              "lerntext": "svart",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "söt",
              "lerntext": "söt",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "arg",
              "lerntext": "arg",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "fel",
              "lerntext": "fel",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "kort",
              "lerntext": "kort",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lång",
              "lerntext": "lång",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lätt",
              "lerntext": "lätt",
              "de": "leicht (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sjuk",
              "lerntext": "sjuk",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "törstig",
              "lerntext": "törstig",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rolig",
              "lerntext": "rolig",
              "de": "lustig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tråkig",
              "lerntext": "tråkig",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vit",
              "lerntext": "vit",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sur",
              "lerntext": "sur",
              "de": "sauer",
              "c": "a",
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
        "id": "25.5"
      }
    ]
  },
  {
    "number": 26,
    "title": "Was ich vorhabe",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "imorgon ska jag [Slot]",
          "lerntext": "imorgon ska jag [Slot]",
          "wortarten": {
            "ska": "v",
            "jag": "p"
          }
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "titta",
              "lerntext": "titta",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "köpa",
              "lerntext": "köpa",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "göra",
              "lerntext": "göra",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "tycka",
              "lerntext": "tycka",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "läsa",
              "lerntext": "läsa",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skriva",
              "lerntext": "skriva",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bygga",
              "lerntext": "bygga",
              "de": "bauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vara",
              "lerntext": "vara",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "komma",
              "lerntext": "komma",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sätta",
              "lerntext": "sätta",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "köra",
              "lerntext": "köra",
              "de": "fahren (Fahrzeug)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "duscha",
              "lerntext": "duscha",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sälja",
              "lerntext": "sälja",
              "de": "verkaufen",
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
          "schrift": "imorgon ska jag [Slot]",
          "lerntext": "imorgon ska jag [Slot]",
          "wortarten": {
            "ska": "v",
            "jag": "p"
          }
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "läsa",
              "lerntext": "läsa",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "skriva",
              "lerntext": "skriva",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "titta",
              "lerntext": "titta",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "köpa",
              "lerntext": "köpa",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "göra",
              "lerntext": "göra",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tycka",
              "lerntext": "tycka",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gilla",
              "lerntext": "gilla",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hitta",
              "lerntext": "hitta",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sakna",
              "lerntext": "sakna",
              "de": "vermissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sluta",
              "lerntext": "sluta",
              "de": "aufhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skapa",
              "lerntext": "skapa",
              "de": "erschaffen",
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
          "schrift": "jag vill snart [Slot]",
          "lerntext": "jag vill snart [Slot]",
          "wortarten": {
            "jag": "p",
            "vill": "v"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "arbeta",
              "lerntext": "arbeta",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "spela",
              "lerntext": "spela",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "dansa",
              "lerntext": "dansa",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "sova",
              "lerntext": "sova",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "vänta",
              "lerntext": "vänta",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "leta",
              "lerntext": "leta",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fråga",
              "lerntext": "fråga",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "svara",
              "lerntext": "svara",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leva",
              "lerntext": "leva",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kunna",
              "lerntext": "kunna",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "laga",
              "lerntext": "laga",
              "de": "reparieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "äta",
              "lerntext": "äta",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förklara",
              "lerntext": "förklara",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ligga",
              "lerntext": "ligga",
              "de": "liegen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "springa",
              "lerntext": "springa",
              "de": "laufen",
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
          "schrift": "jag vill snart [Slot]",
          "lerntext": "jag vill snart [Slot]",
          "wortarten": {
            "jag": "p",
            "vill": "v"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "leta",
              "lerntext": "leta",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "fråga",
              "lerntext": "fråga",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "svara",
              "lerntext": "svara",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "dansa",
              "lerntext": "dansa",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sova",
              "lerntext": "sova",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vänta",
              "lerntext": "vänta",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arbeta",
              "lerntext": "arbeta",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spela",
              "lerntext": "spela",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "festa",
              "lerntext": "festa",
              "de": "feiern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "få",
              "lerntext": "få",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "visa",
              "lerntext": "visa",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "le",
              "lerntext": "le",
              "de": "lächeln",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "känna",
              "lerntext": "känna",
              "de": "fühlen",
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
        "id": "26.5"
      }
    ]
  },
  {
    "number": 27,
    "title": "Der Mann, der dort steht",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "det är mannen som [Slot]",
          "lerntext": "det är mannen som [Slot]",
          "wortarten": {
            "är": "v",
            "mannen": "n"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bor",
              "lerntext": "bor",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "stannar",
              "lerntext": "stannar",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "skrattar",
              "lerntext": "skrattar",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "gråter",
              "lerntext": "gråter",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "tänker",
              "lerntext": "tänker",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "tror",
              "lerntext": "tror",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "behöver",
              "lerntext": "behöver",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "väljer",
              "lerntext": "väljer",
              "de": "wählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "skickar",
              "lerntext": "skickar",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "byter",
              "lerntext": "byter",
              "de": "wechseln",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "heter",
              "lerntext": "heter",
              "de": "heißen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bestämmer",
              "lerntext": "bestämmer",
              "de": "bestimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dör",
              "lerntext": "dör",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "städar",
              "lerntext": "städar",
              "de": "putzen",
              "c": "v",
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
          "schrift": "det är mannen som [Slot]",
          "lerntext": "det är mannen som [Slot]",
          "wortarten": {
            "är": "v",
            "mannen": "n"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tror",
              "lerntext": "tror",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "hoppas",
              "lerntext": "hoppas",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "behöver",
              "lerntext": "behöver",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "skrattar",
              "lerntext": "skrattar",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gråter",
              "lerntext": "gråter",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bor",
              "lerntext": "bor",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stannar",
              "lerntext": "stannar",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tänker",
              "lerntext": "tänker",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "står",
              "lerntext": "står",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pratar",
              "lerntext": "pratar",
              "de": "reden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "älskar",
              "lerntext": "älskar",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "flyger",
              "lerntext": "flyger",
              "de": "fliegen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vet",
              "lerntext": "vet",
              "de": "wissen",
              "c": "v",
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
          "schrift": "jag letar efter ett ställe där man kan [Slot]",
          "lerntext": "jag letar efter ett ställe där man kan [Slot]",
          "wortarten": {
            "jag": "p",
            "letar": "v",
            "kan": "v"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "arbeta",
              "lerntext": "arbeta",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "spela",
              "lerntext": "spela",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "dansa",
              "lerntext": "dansa",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "sova",
              "lerntext": "sova",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "vänta",
              "lerntext": "vänta",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "leta",
              "lerntext": "leta",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fråga",
              "lerntext": "fråga",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "svara",
              "lerntext": "svara",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "börja",
              "lerntext": "börja",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "använda",
              "lerntext": "använda",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dricka",
              "lerntext": "dricka",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lära",
              "lerntext": "lära",
              "de": "lehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vakna",
              "lerntext": "vakna",
              "de": "aufwachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fortsätta",
              "lerntext": "fortsätta",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kyssa",
              "lerntext": "kyssa",
              "de": "küssen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "var",
            "lerntext": "var",
            "de": "wo"
          }
        ],
        "id": "27.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jag letar efter ett ställe där man kan [Slot]",
          "lerntext": "jag letar efter ett ställe där man kan [Slot]",
          "wortarten": {
            "jag": "p",
            "letar": "v",
            "kan": "v"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "leta",
              "lerntext": "leta",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "fråga",
              "lerntext": "fråga",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "svara",
              "lerntext": "svara",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "dansa",
              "lerntext": "dansa",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sova",
              "lerntext": "sova",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vänta",
              "lerntext": "vänta",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arbeta",
              "lerntext": "arbeta",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spela",
              "lerntext": "spela",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "simma",
              "lerntext": "simma",
              "de": "schwimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "växa",
              "lerntext": "växa",
              "de": "wachsen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lämna",
              "lerntext": "lämna",
              "de": "verlassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ringa",
              "lerntext": "ringa",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "önska",
              "lerntext": "önska",
              "de": "wünschen",
              "c": "v",
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
        "task": "Beschreib jemanden mit einem Nebensatz.",
        "newFrameWords": [],
        "id": "27.5"
      }
    ]
  },
  {
    "number": 28,
    "title": "Alles zusammen",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "igår var jag på [Slot]",
          "lerntext": "igår var jag på [Slot]",
          "wortarten": {
            "var": "v",
            "jag": "p"
          }
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "restaurang",
              "lerntext": "restaurang",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "hotell",
              "lerntext": "hotell",
              "de": "Hotel",
              "c": "n"
            },
            {
              "schrift": "skola",
              "lerntext": "skola",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "universitet",
              "lerntext": "universitet",
              "de": "Universität",
              "c": "n"
            },
            {
              "schrift": "sjukhus",
              "lerntext": "sjukhus",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stad",
              "lerntext": "stad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "flygplats",
              "lerntext": "flygplats",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hatt",
              "lerntext": "hatt",
              "de": "Hut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klänning",
              "lerntext": "klänning",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "företag",
              "lerntext": "företag",
              "de": "Firma",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "projekt",
              "lerntext": "projekt",
              "de": "Projekt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "knä",
              "lerntext": "knä",
              "de": "Knie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hav",
              "lerntext": "hav",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skjorta",
              "lerntext": "skjorta",
              "de": "Hemd",
              "c": "n",
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
          "schrift": "igår var jag på [Slot]",
          "lerntext": "igår var jag på [Slot]",
          "wortarten": {
            "var": "v",
            "jag": "p"
          }
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "flygplats",
              "lerntext": "flygplats",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "stad",
              "lerntext": "stad",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "restaurang",
              "lerntext": "restaurang",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hotell",
              "lerntext": "hotell",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "skola",
              "lerntext": "skola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universitet",
              "lerntext": "universitet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sjukhus",
              "lerntext": "sjukhus",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "åska",
              "lerntext": "åska",
              "de": "Gewitter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mor",
              "lerntext": "mor",
              "de": "Mutter (formell)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "barnbarn",
              "lerntext": "barnbarn",
              "de": "Enkelkind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "regn",
              "lerntext": "regn",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "namn",
              "lerntext": "namn",
              "de": "Name",
              "c": "n",
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
          "schrift": "jag vill [Slot] för att jag har tid",
          "lerntext": "jag vill [Slot] för att jag har tid",
          "wortarten": {
            "jag": "p",
            "vill": "v",
            "har": "v",
            "tid": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vinna",
              "lerntext": "vinna",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "glömma",
              "lerntext": "glömma",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "förstå",
              "lerntext": "förstå",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "träffa",
              "lerntext": "träffa",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "ge",
              "lerntext": "ge",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "tala",
              "lerntext": "tala",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "öppna",
              "lerntext": "öppna",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "säga",
              "lerntext": "säga",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "flytta",
              "lerntext": "flytta",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förändra",
              "lerntext": "förändra",
              "de": "verändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bli",
              "lerntext": "bli",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sitta",
              "lerntext": "sitta",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lyssna",
              "lerntext": "lyssna",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gå",
              "lerntext": "gå",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bygga",
              "lerntext": "bygga",
              "de": "bauen",
              "c": "v",
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
          "schrift": "jag vill [Slot] för att jag har tid",
          "lerntext": "jag vill [Slot] för att jag har tid",
          "wortarten": {
            "jag": "p",
            "vill": "v",
            "har": "v",
            "tid": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "jag",
            "lerntext": "jag",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "säga",
              "lerntext": "säga",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "tala",
              "lerntext": "tala",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "öppna",
              "lerntext": "öppna",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "vinna",
              "lerntext": "vinna",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "glömma",
              "lerntext": "glömma",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "förstå",
              "lerntext": "förstå",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "träffa",
              "lerntext": "träffa",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ge",
              "lerntext": "ge",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vara",
              "lerntext": "vara",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "komma",
              "lerntext": "komma",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sätta",
              "lerntext": "sätta",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "köra",
              "lerntext": "köra",
              "de": "fahren (Fahrzeug)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "duscha",
              "lerntext": "duscha",
              "de": "duschen",
              "c": "v",
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
        "task": "Erzähl von deinem Tag in drei Sätzen.",
        "newFrameWords": [],
        "id": "28.5"
      }
    ]
  }
];
