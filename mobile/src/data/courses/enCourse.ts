// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_en.py
// Neu bauen: python bauplan.py en --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 29 Module, 249 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const ENGLISH_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "I am, you are",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I am [Slot]",
          "lerntext": "I am [Slot]"
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "me",
            "lerntext": "me",
            "de": "mir"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tired",
              "lerntext": "tired",
              "de": "müde"
            },
            {
              "schrift": "happy",
              "lerntext": "happy",
              "de": "glücklich"
            },
            {
              "schrift": "sad",
              "lerntext": "sad",
              "de": "traurig"
            },
            {
              "schrift": "angry",
              "lerntext": "angry",
              "de": "wütend"
            },
            {
              "schrift": "hungry",
              "lerntext": "hungry",
              "de": "hungrig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "be",
            "lerntext": "be",
            "de": "sein"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I am [Slot]",
          "lerntext": "I am [Slot]"
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "me",
            "lerntext": "me",
            "de": "mir"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "thirsty",
              "lerntext": "thirsty",
              "de": "durstig"
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank"
            },
            {
              "schrift": "healthy",
              "lerntext": "healthy",
              "de": "gesund"
            },
            {
              "schrift": "ready",
              "lerntext": "ready",
              "de": "bereit"
            },
            {
              "schrift": "busy",
              "lerntext": "busy",
              "de": "beschäftigt"
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
          "schrift": "you are [Slot]",
          "lerntext": "you are [Slot]"
        },
        "frameDe": "Du bist [Slot].",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          },
          {
            "schrift": "they",
            "lerntext": "they",
            "de": "sie (Mehrzahl)"
          },
          {
            "schrift": "your",
            "lerntext": "your",
            "de": "dein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nice",
              "lerntext": "nice",
              "de": "nett"
            },
            {
              "schrift": "kind",
              "lerntext": "kind",
              "de": "freundlich"
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark"
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach"
            },
            {
              "schrift": "funny",
              "lerntext": "funny",
              "de": "lustig"
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
          "schrift": "you are [Slot]",
          "lerntext": "you are [Slot]"
        },
        "frameDe": "Du bist [Slot].",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          },
          {
            "schrift": "they",
            "lerntext": "they",
            "de": "sie (Mehrzahl)"
          },
          {
            "schrift": "your",
            "lerntext": "your",
            "de": "dein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung"
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt"
            },
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön"
            },
            {
              "schrift": "pretty",
              "lerntext": "pretty",
              "de": "hübsch"
            },
            {
              "schrift": "ugly",
              "lerntext": "ugly",
              "de": "hässlich"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "1.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "he is [Slot]",
          "lerntext": "he is [Slot]"
        },
        "frameDe": "Er ist [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          },
          {
            "schrift": "she",
            "lerntext": "she",
            "de": "sie"
          },
          {
            "schrift": "it",
            "lerntext": "it",
            "de": "es"
          },
          {
            "schrift": "his",
            "lerntext": "his",
            "de": "sein"
          },
          {
            "schrift": "her",
            "lerntext": "her",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student"
            },
            {
              "schrift": "teacher",
              "lerntext": "teacher",
              "de": "Lehrer"
            },
            {
              "schrift": "doctor",
              "lerntext": "doctor",
              "de": "Arzt"
            },
            {
              "schrift": "friend",
              "lerntext": "friend",
              "de": "Freund"
            },
            {
              "schrift": "colleague",
              "lerntext": "colleague",
              "de": "Kollege"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "1.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "he is [Slot]",
          "lerntext": "he is [Slot]"
        },
        "frameDe": "Er ist [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          },
          {
            "schrift": "she",
            "lerntext": "she",
            "de": "sie"
          },
          {
            "schrift": "it",
            "lerntext": "it",
            "de": "es"
          },
          {
            "schrift": "his",
            "lerntext": "his",
            "de": "sein"
          },
          {
            "schrift": "her",
            "lerntext": "her",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "man",
              "lerntext": "man",
              "de": "Mann"
            },
            {
              "schrift": "woman",
              "lerntext": "woman",
              "de": "Frau"
            },
            {
              "schrift": "boy",
              "lerntext": "boy",
              "de": "Junge"
            },
            {
              "schrift": "girl",
              "lerntext": "girl",
              "de": "Mädchen"
            },
            {
              "schrift": "child",
              "lerntext": "child",
              "de": "Kind"
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
          "schrift": "I am [Slot]",
          "lerntext": "I am [Slot]"
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "me",
            "lerntext": "me",
            "de": "mir"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tired",
              "lerntext": "tired",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "happy",
              "lerntext": "happy",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "sad",
              "lerntext": "sad",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "angry",
              "lerntext": "angry",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "hungry",
              "lerntext": "hungry",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "thirsty",
              "lerntext": "thirsty",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "healthy",
              "lerntext": "healthy",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "ready",
              "lerntext": "ready",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "busy",
              "lerntext": "busy",
              "de": "beschäftigt",
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
          "schrift": "you are [Slot]",
          "lerntext": "you are [Slot]"
        },
        "frameDe": "Du bist [Slot].",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          },
          {
            "schrift": "they",
            "lerntext": "they",
            "de": "sie (Mehrzahl)"
          },
          {
            "schrift": "your",
            "lerntext": "your",
            "de": "dein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nice",
              "lerntext": "nice",
              "de": "nett",
              "wieder": true
            },
            {
              "schrift": "kind",
              "lerntext": "kind",
              "de": "freundlich",
              "wieder": true
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "funny",
              "lerntext": "funny",
              "de": "lustig",
              "wieder": true
            },
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "pretty",
              "lerntext": "pretty",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "ugly",
              "lerntext": "ugly",
              "de": "hässlich",
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
          "schrift": "I am [Slot]",
          "lerntext": "I am [Slot]"
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "me",
            "lerntext": "me",
            "de": "mir"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tired",
              "lerntext": "tired",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "happy",
              "lerntext": "happy",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "sad",
              "lerntext": "sad",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "angry",
              "lerntext": "angry",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "hungry",
              "lerntext": "hungry",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "thirsty",
              "lerntext": "thirsty",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "healthy",
              "lerntext": "healthy",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "ready",
              "lerntext": "ready",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "busy",
              "lerntext": "busy",
              "de": "beschäftigt",
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
          "schrift": "you are [Slot]",
          "lerntext": "you are [Slot]"
        },
        "frameDe": "Du bist [Slot].",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          },
          {
            "schrift": "they",
            "lerntext": "they",
            "de": "sie (Mehrzahl)"
          },
          {
            "schrift": "your",
            "lerntext": "your",
            "de": "dein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nice",
              "lerntext": "nice",
              "de": "nett",
              "wieder": true
            },
            {
              "schrift": "kind",
              "lerntext": "kind",
              "de": "freundlich",
              "wieder": true
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "funny",
              "lerntext": "funny",
              "de": "lustig",
              "wieder": true
            },
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "pretty",
              "lerntext": "pretty",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "ugly",
              "lerntext": "ugly",
              "de": "hässlich",
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
        "task": "Say who you are and how you feel.",
        "newFrameWords": [],
        "id": "1.11"
      }
    ]
  },
  {
    "number": 2,
    "title": "This is, I have",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "this is a [Slot]",
          "lerntext": "this is a [Slot]"
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "this",
            "lerntext": "this",
            "de": "dieser"
          },
          {
            "schrift": "these",
            "lerntext": "these",
            "de": "diese (Mehrzahl)"
          },
          {
            "schrift": "those",
            "lerntext": "those",
            "de": "jene"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "door",
              "lerntext": "door",
              "de": "Tür"
            },
            {
              "schrift": "bag",
              "lerntext": "bag",
              "de": "Tasche"
            },
            {
              "schrift": "card",
              "lerntext": "card",
              "de": "Karte"
            },
            {
              "schrift": "bottle",
              "lerntext": "bottle",
              "de": "Flasche"
            },
            {
              "schrift": "woman",
              "lerntext": "woman",
              "de": "Frau",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "ein"
          },
          {
            "schrift": "the",
            "lerntext": "the",
            "de": "der"
          },
          {
            "schrift": "that",
            "lerntext": "that",
            "de": "dass"
          },
          {
            "schrift": "this",
            "lerntext": "this",
            "de": "dieser"
          }
        ],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "this is a [Slot]",
          "lerntext": "this is a [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "this",
            "lerntext": "this",
            "de": "dieser"
          },
          {
            "schrift": "these",
            "lerntext": "these",
            "de": "diese (Mehrzahl)"
          },
          {
            "schrift": "those",
            "lerntext": "those",
            "de": "jene"
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
              "schrift": "key",
              "lerntext": "key",
              "de": "Schlüssel"
            },
            {
              "schrift": "doctor",
              "lerntext": "doctor",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "colleague",
              "lerntext": "colleague",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "boy",
              "lerntext": "boy",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "friend",
              "lerntext": "friend",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "teacher",
              "lerntext": "teacher",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "man",
              "lerntext": "man",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "this is a [Slot]",
          "lerntext": "this is a [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "this",
            "lerntext": "this",
            "de": "dieser"
          },
          {
            "schrift": "these",
            "lerntext": "these",
            "de": "diese (Mehrzahl)"
          },
          {
            "schrift": "those",
            "lerntext": "those",
            "de": "jene"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "book",
              "lerntext": "book",
              "de": "Buch"
            },
            {
              "schrift": "bed",
              "lerntext": "bed",
              "de": "Bett"
            },
            {
              "schrift": "window",
              "lerntext": "window",
              "de": "Fenster"
            },
            {
              "schrift": "phone",
              "lerntext": "phone",
              "de": "Handy"
            },
            {
              "schrift": "child",
              "lerntext": "child",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "girl",
              "lerntext": "girl",
              "de": "Mädchen",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "2.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "this is an [Slot]",
          "lerntext": "this is an [Slot]"
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "it",
            "lerntext": "it",
            "de": "es"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "exam",
              "lerntext": "exam",
              "de": "Prüfung"
            },
            {
              "schrift": "answer",
              "lerntext": "answer",
              "de": "Antwort"
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee"
            },
            {
              "schrift": "door",
              "lerntext": "door",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "card",
              "lerntext": "card",
              "de": "Karte",
              "wieder": true
            },
            {
              "schrift": "bottle",
              "lerntext": "bottle",
              "de": "Flasche",
              "wieder": true
            },
            {
              "schrift": "bag",
              "lerntext": "bag",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "woman",
              "lerntext": "woman",
              "de": "Frau",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "an",
            "lerntext": "an",
            "de": "ein (vor Vokal)"
          }
        ],
        "id": "2.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "this is an [Slot]",
          "lerntext": "this is an [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "it",
            "lerntext": "it",
            "de": "es"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "example",
              "lerntext": "example",
              "de": "Beispiel"
            },
            {
              "schrift": "eye",
              "lerntext": "eye",
              "de": "Auge"
            },
            {
              "schrift": "window",
              "lerntext": "window",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "book",
              "lerntext": "book",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "bed",
              "lerntext": "bed",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "phone",
              "lerntext": "phone",
              "de": "Handy",
              "wieder": true
            },
            {
              "schrift": "child",
              "lerntext": "child",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "girl",
              "lerntext": "girl",
              "de": "Mädchen",
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
          "schrift": "I have a [Slot]",
          "lerntext": "I have a [Slot]"
        },
        "frameDe": "Ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          },
          {
            "schrift": "they",
            "lerntext": "they",
            "de": "sie (Mehrzahl)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "family",
              "lerntext": "family",
              "de": "Familie"
            },
            {
              "schrift": "flat",
              "lerntext": "flat",
              "de": "Wohnung"
            },
            {
              "schrift": "job",
              "lerntext": "job",
              "de": "Arbeit"
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage"
            },
            {
              "schrift": "ticket",
              "lerntext": "ticket",
              "de": "Fahrkarte"
            },
            {
              "schrift": "answer",
              "lerntext": "answer",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "exam",
              "lerntext": "exam",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "door",
              "lerntext": "door",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "card",
              "lerntext": "card",
              "de": "Karte",
              "wieder": true
            },
            {
              "schrift": "bottle",
              "lerntext": "bottle",
              "de": "Flasche",
              "wieder": true
            },
            {
              "schrift": "bag",
              "lerntext": "bag",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "woman",
              "lerntext": "woman",
              "de": "Frau",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "have",
            "lerntext": "have",
            "de": "haben"
          }
        ],
        "id": "2.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I have a [Slot]",
          "lerntext": "I have a [Slot]"
        },
        "frameDe": "Ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          },
          {
            "schrift": "they",
            "lerntext": "they",
            "de": "sie (Mehrzahl)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "passport",
              "lerntext": "passport",
              "de": "Pass"
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "key",
              "lerntext": "key",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "doctor",
              "lerntext": "doctor",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "colleague",
              "lerntext": "colleague",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "boy",
              "lerntext": "boy",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "friend",
              "lerntext": "friend",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "teacher",
              "lerntext": "teacher",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "man",
              "lerntext": "man",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
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
          "schrift": "I have a [Slot]",
          "lerntext": "I have a [Slot]"
        },
        "frameDe": "Ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          },
          {
            "schrift": "they",
            "lerntext": "they",
            "de": "sie (Mehrzahl)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "house",
              "lerntext": "house",
              "de": "Haus"
            },
            {
              "schrift": "room",
              "lerntext": "room",
              "de": "Zimmer"
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "Auto"
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem"
            },
            {
              "schrift": "example",
              "lerntext": "example",
              "de": "Beispiel",
              "wieder": true
            },
            {
              "schrift": "eye",
              "lerntext": "eye",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "window",
              "lerntext": "window",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "book",
              "lerntext": "book",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "bed",
              "lerntext": "bed",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "phone",
              "lerntext": "phone",
              "de": "Handy",
              "wieder": true
            },
            {
              "schrift": "child",
              "lerntext": "child",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "girl",
              "lerntext": "girl",
              "de": "Mädchen",
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
          "schrift": "he has a [Slot]",
          "lerntext": "he has a [Slot]"
        },
        "frameDe": "Er hat eine [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          },
          {
            "schrift": "she",
            "lerntext": "she",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mother",
              "lerntext": "mother",
              "de": "Mutter"
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester"
            },
            {
              "schrift": "daughter",
              "lerntext": "daughter",
              "de": "Tochter"
            },
            {
              "schrift": "wife",
              "lerntext": "wife",
              "de": "Ehefrau"
            },
            {
              "schrift": "cat",
              "lerntext": "cat",
              "de": "Katze"
            },
            {
              "schrift": "job",
              "lerntext": "job",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "ticket",
              "lerntext": "ticket",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "family",
              "lerntext": "family",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "flat",
              "lerntext": "flat",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "answer",
              "lerntext": "answer",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "exam",
              "lerntext": "exam",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "door",
              "lerntext": "door",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "card",
              "lerntext": "card",
              "de": "Karte",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "he has a [Slot]",
          "lerntext": "he has a [Slot]"
        },
        "frameDe": "Er hat einen [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          },
          {
            "schrift": "she",
            "lerntext": "she",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "father",
              "lerntext": "father",
              "de": "Vater"
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder"
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn"
            },
            {
              "schrift": "husband",
              "lerntext": "husband",
              "de": "Ehemann"
            },
            {
              "schrift": "dog",
              "lerntext": "dog",
              "de": "Hund"
            },
            {
              "schrift": "passport",
              "lerntext": "passport",
              "de": "Pass",
              "wieder": true
            },
            {
              "schrift": "key",
              "lerntext": "key",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "doctor",
              "lerntext": "doctor",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "friend",
              "lerntext": "friend",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "teacher",
              "lerntext": "teacher",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "man",
              "lerntext": "man",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "colleague",
              "lerntext": "colleague",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "boy",
              "lerntext": "boy",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
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
          "schrift": "that is my [Slot]",
          "lerntext": "that is my [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "mein"
          },
          {
            "schrift": "your",
            "lerntext": "your",
            "de": "dein"
          },
          {
            "schrift": "our",
            "lerntext": "our",
            "de": "unser"
          },
          {
            "schrift": "their",
            "lerntext": "their",
            "de": "ihr (Mehrzahl)"
          },
          {
            "schrift": "its",
            "lerntext": "its",
            "de": "sein (sächlich)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "name",
              "lerntext": "name",
              "de": "Name"
            },
            {
              "schrift": "money",
              "lerntext": "money",
              "de": "Geld"
            },
            {
              "schrift": "luggage",
              "lerntext": "luggage",
              "de": "Gepäck"
            },
            {
              "schrift": "present",
              "lerntext": "present",
              "de": "Geschenk"
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Ort"
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "dog",
              "lerntext": "dog",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "house",
              "lerntext": "house",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem",
              "wieder": true
            },
            {
              "schrift": "room",
              "lerntext": "room",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "cat",
              "lerntext": "cat",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "mother",
              "lerntext": "mother",
              "de": "Mutter",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.11"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "he has a [Slot]",
          "lerntext": "he has a [Slot]"
        },
        "frameDe": "Er hat eine [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          },
          {
            "schrift": "she",
            "lerntext": "she",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "daughter",
              "lerntext": "daughter",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "wife",
              "lerntext": "wife",
              "de": "Ehefrau",
              "wieder": true
            },
            {
              "schrift": "mother",
              "lerntext": "mother",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "cat",
              "lerntext": "cat",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "job",
              "lerntext": "job",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "ticket",
              "lerntext": "ticket",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "family",
              "lerntext": "family",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "flat",
              "lerntext": "flat",
              "de": "Wohnung",
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
          "schrift": "that is my [Slot]",
          "lerntext": "that is my [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "mein"
          },
          {
            "schrift": "your",
            "lerntext": "your",
            "de": "dein"
          },
          {
            "schrift": "our",
            "lerntext": "our",
            "de": "unser"
          },
          {
            "schrift": "their",
            "lerntext": "their",
            "de": "ihr (Mehrzahl)"
          },
          {
            "schrift": "its",
            "lerntext": "its",
            "de": "sein (sächlich)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "name",
              "lerntext": "name",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "money",
              "lerntext": "money",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "luggage",
              "lerntext": "luggage",
              "de": "Gepäck",
              "wieder": true
            },
            {
              "schrift": "present",
              "lerntext": "present",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Ort",
              "wieder": true
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "dog",
              "lerntext": "dog",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "house",
              "lerntext": "house",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem",
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
          "schrift": "he has a [Slot]",
          "lerntext": "he has a [Slot]"
        },
        "frameDe": "Er hat einen [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          },
          {
            "schrift": "she",
            "lerntext": "she",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "father",
              "lerntext": "father",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "husband",
              "lerntext": "husband",
              "de": "Ehemann",
              "wieder": true
            },
            {
              "schrift": "passport",
              "lerntext": "passport",
              "de": "Pass",
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
          "schrift": "that is my [Slot]",
          "lerntext": "that is my [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "mein"
          },
          {
            "schrift": "your",
            "lerntext": "your",
            "de": "dein"
          },
          {
            "schrift": "our",
            "lerntext": "our",
            "de": "unser"
          },
          {
            "schrift": "their",
            "lerntext": "their",
            "de": "ihr (Mehrzahl)"
          },
          {
            "schrift": "its",
            "lerntext": "its",
            "de": "sein (sächlich)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "name",
              "lerntext": "name",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "money",
              "lerntext": "money",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "luggage",
              "lerntext": "luggage",
              "de": "Gepäck",
              "wieder": true
            },
            {
              "schrift": "present",
              "lerntext": "present",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Ort",
              "wieder": true
            },
            {
              "schrift": "room",
              "lerntext": "room",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
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
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Point at three things and say what they are.",
        "newFrameWords": [],
        "id": "2.16"
      }
    ]
  },
  {
    "number": 3,
    "title": "I want, I need",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I want [Slot]",
          "lerntext": "I want [Slot]"
        },
        "frameDe": "Ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "water",
              "lerntext": "water",
              "de": "Wasser"
            },
            {
              "schrift": "coffee",
              "lerntext": "coffee",
              "de": "Kaffee"
            },
            {
              "schrift": "tea",
              "lerntext": "tea",
              "de": "Tee"
            },
            {
              "schrift": "beer",
              "lerntext": "beer",
              "de": "Bier"
            },
            {
              "schrift": "wine",
              "lerntext": "wine",
              "de": "Wein"
            },
            {
              "schrift": "example",
              "lerntext": "example",
              "de": "Beispiel",
              "wieder": true
            },
            {
              "schrift": "wife",
              "lerntext": "wife",
              "de": "Ehefrau",
              "wieder": true
            },
            {
              "schrift": "daughter",
              "lerntext": "daughter",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "husband",
              "lerntext": "husband",
              "de": "Ehemann",
              "wieder": true
            },
            {
              "schrift": "eye",
              "lerntext": "eye",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "father",
              "lerntext": "father",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "present",
              "lerntext": "present",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "want",
            "lerntext": "want",
            "de": "wollen"
          },
          {
            "schrift": "need",
            "lerntext": "need",
            "de": "brauchen"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I want [Slot]",
          "lerntext": "I want [Slot]"
        },
        "frameDe": "Ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch"
            },
            {
              "schrift": "bread",
              "lerntext": "bread",
              "de": "Brot"
            },
            {
              "schrift": "cheese",
              "lerntext": "cheese",
              "de": "Käse"
            },
            {
              "schrift": "meat",
              "lerntext": "meat",
              "de": "Fleisch"
            },
            {
              "schrift": "fish",
              "lerntext": "fish",
              "de": "Fisch"
            },
            {
              "schrift": "water",
              "lerntext": "water",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "coffee",
              "lerntext": "coffee",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "tea",
              "lerntext": "tea",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "beer",
              "lerntext": "beer",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "wine",
              "lerntext": "wine",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "example",
              "lerntext": "example",
              "de": "Beispiel",
              "wieder": true
            },
            {
              "schrift": "bottle",
              "lerntext": "bottle",
              "de": "Flasche",
              "wieder": true
            },
            {
              "schrift": "family",
              "lerntext": "family",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "phone",
              "lerntext": "phone",
              "de": "Handy",
              "wieder": true
            },
            {
              "schrift": "key",
              "lerntext": "key",
              "de": "Schlüssel",
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
          "schrift": "he wants [Slot]",
          "lerntext": "he wants [Slot]"
        },
        "frameDe": "Er möchte [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          },
          {
            "schrift": "she",
            "lerntext": "she",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "food",
              "lerntext": "food",
              "de": "Essen"
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Obst"
            },
            {
              "schrift": "sugar",
              "lerntext": "sugar",
              "de": "Zucker"
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz"
            },
            {
              "schrift": "medicine",
              "lerntext": "medicine",
              "de": "Medizin"
            },
            {
              "schrift": "cheese",
              "lerntext": "cheese",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "bread",
              "lerntext": "bread",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "fish",
              "lerntext": "fish",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "meat",
              "lerntext": "meat",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "beer",
              "lerntext": "beer",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "water",
              "lerntext": "water",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "tea",
              "lerntext": "tea",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "coffee",
              "lerntext": "coffee",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "wine",
              "lerntext": "wine",
              "de": "Wein",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I need a [Slot]",
          "lerntext": "I need a [Slot]"
        },
        "frameDe": "Ich brauche eine [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte"
            },
            {
              "schrift": "bill",
              "lerntext": "bill",
              "de": "Rechnung"
            },
            {
              "schrift": "medicine",
              "lerntext": "medicine",
              "de": "Medizin",
              "wieder": true
            },
            {
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "exam",
              "lerntext": "exam",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "job",
              "lerntext": "job",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "cat",
              "lerntext": "cat",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "bag",
              "lerntext": "bag",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "mother",
              "lerntext": "mother",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "wife",
              "lerntext": "wife",
              "de": "Ehefrau",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "3.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I need a [Slot]",
          "lerntext": "I need a [Slot]"
        },
        "frameDe": "Ich brauche einen [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "plate",
              "lerntext": "plate",
              "de": "Teller"
            },
            {
              "schrift": "doctor",
              "lerntext": "doctor",
              "de": "Arzt"
            },
            {
              "schrift": "sugar",
              "lerntext": "sugar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "cheese",
              "lerntext": "cheese",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "fish",
              "lerntext": "fish",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "dog",
              "lerntext": "dog",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "passport",
              "lerntext": "passport",
              "de": "Pass",
              "wieder": true
            },
            {
              "schrift": "tea",
              "lerntext": "tea",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "coffee",
              "lerntext": "coffee",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "wine",
              "lerntext": "wine",
              "de": "Wein",
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
          "schrift": "I need a [Slot]",
          "lerntext": "I need a [Slot]"
        },
        "frameDe": "Ich brauche ein [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Glas"
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "food",
              "lerntext": "food",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "bread",
              "lerntext": "bread",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "meat",
              "lerntext": "meat",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "beer",
              "lerntext": "beer",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "water",
              "lerntext": "water",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "luggage",
              "lerntext": "luggage",
              "de": "Gepäck",
              "wieder": true
            },
            {
              "schrift": "house",
              "lerntext": "house",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "book",
              "lerntext": "book",
              "de": "Buch",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "3.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I would like [Slot], please",
          "lerntext": "I would like [Slot], please"
        },
        "frameDe": "Ich hätte gern [Slot], bitte.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "breakfast",
              "lerntext": "breakfast",
              "de": "Frühstück"
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen"
            },
            {
              "schrift": "dinner",
              "lerntext": "dinner",
              "de": "Abendessen"
            },
            {
              "schrift": "vegetables",
              "lerntext": "vegetables",
              "de": "Gemüse"
            },
            {
              "schrift": "part",
              "lerntext": "part",
              "de": "Teil"
            },
            {
              "schrift": "plate",
              "lerntext": "plate",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "bill",
              "lerntext": "bill",
              "de": "Rechnung",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "medicine",
              "lerntext": "medicine",
              "de": "Medizin",
              "wieder": true
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "sugar",
              "lerntext": "sugar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "food",
              "lerntext": "food",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "cheese",
              "lerntext": "cheese",
              "de": "Käse",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "would",
            "lerntext": "would",
            "de": "würde"
          },
          {
            "schrift": "like",
            "lerntext": "like",
            "de": "mögen"
          }
        ],
        "id": "3.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I would like [Slot], please",
          "lerntext": "I would like [Slot], please"
        },
        "frameDe": "Ich hätte gern [Slot], bitte.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "breakfast",
              "lerntext": "breakfast",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "dinner",
              "lerntext": "dinner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "vegetables",
              "lerntext": "vegetables",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "part",
              "lerntext": "part",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "plate",
              "lerntext": "plate",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "bill",
              "lerntext": "bill",
              "de": "Rechnung",
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
          "schrift": "I would like [Slot], please",
          "lerntext": "I would like [Slot], please"
        },
        "frameDe": "Ich hätte gern [Slot], bitte.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "breakfast",
              "lerntext": "breakfast",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "dinner",
              "lerntext": "dinner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "vegetables",
              "lerntext": "vegetables",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "part",
              "lerntext": "part",
              "de": "Teil",
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
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Order something to eat and to drink.",
        "newFrameWords": [],
        "id": "3.10"
      }
    ]
  },
  {
    "number": 4,
    "title": "Not and questions",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I am not [Slot]",
          "lerntext": "I am not [Slot]"
        },
        "frameDe": "Ich bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "not",
            "lerntext": "not",
            "de": "nicht"
          },
          {
            "schrift": "no",
            "lerntext": "no",
            "de": "nein"
          },
          {
            "schrift": "yes",
            "lerntext": "yes",
            "de": "ja"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "free",
              "lerntext": "free",
              "de": "frei"
            },
            {
              "schrift": "full",
              "lerntext": "full",
              "de": "voll"
            },
            {
              "schrift": "empty",
              "lerntext": "empty",
              "de": "leer"
            },
            {
              "schrift": "safe",
              "lerntext": "safe",
              "de": "sicher"
            },
            {
              "schrift": "dangerous",
              "lerntext": "dangerous",
              "de": "gefährlich"
            },
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "busy",
              "lerntext": "busy",
              "de": "beschäftigt",
              "wieder": true
            },
            {
              "schrift": "funny",
              "lerntext": "funny",
              "de": "lustig",
              "wieder": true
            },
            {
              "schrift": "sad",
              "lerntext": "sad",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "pretty",
              "lerntext": "pretty",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "thirsty",
              "lerntext": "thirsty",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "ready",
              "lerntext": "ready",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "healthy",
              "lerntext": "healthy",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "ugly",
              "lerntext": "ugly",
              "de": "hässlich",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "not",
            "lerntext": "not",
            "de": "nicht"
          },
          {
            "schrift": "no",
            "lerntext": "no",
            "de": "nein"
          },
          {
            "schrift": "yes",
            "lerntext": "yes",
            "de": "ja"
          }
        ],
        "id": "4.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "do you [Slot]?",
          "lerntext": "do you [Slot]?"
        },
        "frameDe": "Möchtest du [Slot]?",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          },
          {
            "schrift": "they",
            "lerntext": "they",
            "de": "sie (Mehrzahl)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "know",
              "lerntext": "know",
              "de": "wissen"
            },
            {
              "schrift": "see",
              "lerntext": "see",
              "de": "sehen"
            },
            {
              "schrift": "hear",
              "lerntext": "hear",
              "de": "hören"
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen"
            },
            {
              "schrift": "remember",
              "lerntext": "remember",
              "de": "sich erinnern"
            },
            {
              "schrift": "like",
              "lerntext": "like",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "be",
              "lerntext": "be",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "would",
              "lerntext": "would",
              "de": "würde",
              "wieder": true
            },
            {
              "schrift": "want",
              "lerntext": "want",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "need",
              "lerntext": "need",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "have",
              "lerntext": "have",
              "de": "haben",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "do",
            "lerntext": "do",
            "de": "tun"
          }
        ],
        "id": "4.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] is that?",
          "lerntext": "[Slot] is that?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "what",
            "lerntext": "what",
            "de": "was"
          },
          {
            "schrift": "who",
            "lerntext": "who",
            "de": "wer"
          },
          {
            "schrift": "which",
            "lerntext": "which",
            "de": "welcher"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "something",
              "lerntext": "something",
              "de": "etwas"
            },
            {
              "schrift": "anything",
              "lerntext": "anything",
              "de": "irgendetwas"
            },
            {
              "schrift": "nothing",
              "lerntext": "nothing",
              "de": "nichts"
            },
            {
              "schrift": "everything",
              "lerntext": "everything",
              "de": "alles"
            },
            {
              "schrift": "someone",
              "lerntext": "someone",
              "de": "jemand"
            },
            {
              "schrift": "her",
              "lerntext": "her",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "those",
              "lerntext": "those",
              "de": "jene",
              "wieder": true
            },
            {
              "schrift": "these",
              "lerntext": "these",
              "de": "diese (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "his",
              "lerntext": "his",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "our",
              "lerntext": "our",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "their",
              "lerntext": "their",
              "de": "ihr (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mir",
              "wieder": true
            },
            {
              "schrift": "its",
              "lerntext": "its",
              "de": "sein (sächlich)",
              "wieder": true
            },
            {
              "schrift": "it",
              "lerntext": "it",
              "de": "es",
              "wieder": true
            },
            {
              "schrift": "your",
              "lerntext": "your",
              "de": "dein",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "what",
            "lerntext": "what",
            "de": "was"
          },
          {
            "schrift": "who",
            "lerntext": "who",
            "de": "wer"
          },
          {
            "schrift": "which",
            "lerntext": "which",
            "de": "welcher"
          },
          {
            "schrift": "whose",
            "lerntext": "whose",
            "de": "wessen"
          }
        ],
        "id": "4.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I do not [Slot] that",
          "lerntext": "I do not [Slot] that"
        },
        "frameDe": "Ich [Slot] das nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken"
            },
            {
              "schrift": "believe",
              "lerntext": "believe",
              "de": "glauben"
            },
            {
              "schrift": "mean",
              "lerntext": "mean",
              "de": "bedeuten"
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen"
            },
            {
              "schrift": "remember",
              "lerntext": "remember",
              "de": "sich erinnern"
            },
            {
              "schrift": "hear",
              "lerntext": "hear",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "know",
              "lerntext": "know",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "see",
              "lerntext": "see",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "like",
              "lerntext": "like",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "be",
              "lerntext": "be",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "would",
              "lerntext": "would",
              "de": "würde",
              "wieder": true
            },
            {
              "schrift": "want",
              "lerntext": "want",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "need",
              "lerntext": "need",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "have",
              "lerntext": "have",
              "de": "haben",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "4.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] is that?",
          "lerntext": "[Slot] is that?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "what",
            "lerntext": "what",
            "de": "was"
          },
          {
            "schrift": "who",
            "lerntext": "who",
            "de": "wer"
          },
          {
            "schrift": "which",
            "lerntext": "which",
            "de": "welcher"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "her",
              "lerntext": "her",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "those",
              "lerntext": "those",
              "de": "jene",
              "wieder": true
            },
            {
              "schrift": "these",
              "lerntext": "these",
              "de": "diese (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "his",
              "lerntext": "his",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "our",
              "lerntext": "our",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "their",
              "lerntext": "their",
              "de": "ihr (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mir",
              "wieder": true
            },
            {
              "schrift": "its",
              "lerntext": "its",
              "de": "sein (sächlich)",
              "wieder": true
            },
            {
              "schrift": "something",
              "lerntext": "something",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "anything",
              "lerntext": "anything",
              "de": "irgendetwas",
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
          "schrift": "I do not [Slot] that",
          "lerntext": "I do not [Slot] that"
        },
        "frameDe": "Ich [Slot] das nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "believe",
              "lerntext": "believe",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "mean",
              "lerntext": "mean",
              "de": "bedeuten",
              "wieder": true
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "hear",
              "lerntext": "hear",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "know",
              "lerntext": "know",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "see",
              "lerntext": "see",
              "de": "sehen",
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
          "schrift": "[Slot] is that?",
          "lerntext": "[Slot] is that?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "what",
            "lerntext": "what",
            "de": "was"
          },
          {
            "schrift": "who",
            "lerntext": "who",
            "de": "wer"
          },
          {
            "schrift": "which",
            "lerntext": "which",
            "de": "welcher"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nothing",
              "lerntext": "nothing",
              "de": "nichts",
              "wieder": true
            },
            {
              "schrift": "everything",
              "lerntext": "everything",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "someone",
              "lerntext": "someone",
              "de": "jemand",
              "wieder": true
            },
            {
              "schrift": "her",
              "lerntext": "her",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "those",
              "lerntext": "those",
              "de": "jene",
              "wieder": true
            },
            {
              "schrift": "these",
              "lerntext": "these",
              "de": "diese (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "his",
              "lerntext": "his",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "our",
              "lerntext": "our",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "their",
              "lerntext": "their",
              "de": "ihr (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mir",
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
          "schrift": "[Slot] is that?",
          "lerntext": "[Slot] is that?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "what",
            "lerntext": "what",
            "de": "was"
          },
          {
            "schrift": "who",
            "lerntext": "who",
            "de": "wer"
          },
          {
            "schrift": "which",
            "lerntext": "which",
            "de": "welcher"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "its",
              "lerntext": "its",
              "de": "sein (sächlich)",
              "wieder": true
            },
            {
              "schrift": "something",
              "lerntext": "something",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "anything",
              "lerntext": "anything",
              "de": "irgendetwas",
              "wieder": true
            },
            {
              "schrift": "nothing",
              "lerntext": "nothing",
              "de": "nichts",
              "wieder": true
            },
            {
              "schrift": "everything",
              "lerntext": "everything",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "someone",
              "lerntext": "someone",
              "de": "jemand",
              "wieder": true
            },
            {
              "schrift": "her",
              "lerntext": "her",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "those",
              "lerntext": "those",
              "de": "jene",
              "wieder": true
            },
            {
              "schrift": "these",
              "lerntext": "these",
              "de": "diese (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "his",
              "lerntext": "his",
              "de": "sein",
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
        "task": "Ask someone a question and say something is not true.",
        "newFrameWords": [],
        "id": "4.9"
      }
    ]
  },
  {
    "number": 5,
    "title": "Where is it?",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "where is the [Slot]?",
          "lerntext": "where is the [Slot]?"
        },
        "frameDe": "Wo ist die [Slot]?",
        "pronouns": [
          {
            "schrift": "where",
            "lerntext": "where",
            "de": "wo"
          },
          {
            "schrift": "here",
            "lerntext": "here",
            "de": "hier"
          },
          {
            "schrift": "there",
            "lerntext": "there",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pharmacy",
              "lerntext": "pharmacy",
              "de": "Apotheke"
            },
            {
              "schrift": "bank",
              "lerntext": "bank",
              "de": "Bank (Geldinstitut)"
            },
            {
              "schrift": "toilet",
              "lerntext": "toilet",
              "de": "Toilette"
            },
            {
              "schrift": "medicine",
              "lerntext": "medicine",
              "de": "Medizin",
              "wieder": true
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "daughter",
              "lerntext": "daughter",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "answer",
              "lerntext": "answer",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "bill",
              "lerntext": "bill",
              "de": "Rechnung",
              "wieder": true
            },
            {
              "schrift": "ticket",
              "lerntext": "ticket",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "flat",
              "lerntext": "flat",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "bottle",
              "lerntext": "bottle",
              "de": "Flasche",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "where",
            "lerntext": "where",
            "de": "wo"
          },
          {
            "schrift": "here",
            "lerntext": "here",
            "de": "hier"
          },
          {
            "schrift": "there",
            "lerntext": "there",
            "de": "dort"
          }
        ],
        "id": "5.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "where is the [Slot]?",
          "lerntext": "where is the [Slot]?"
        },
        "frameDe": "Wo ist der [Slot]?",
        "pronouns": [
          {
            "schrift": "where",
            "lerntext": "where",
            "de": "wo"
          },
          {
            "schrift": "here",
            "lerntext": "here",
            "de": "hier"
          },
          {
            "schrift": "there",
            "lerntext": "there",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof"
            },
            {
              "schrift": "airport",
              "lerntext": "airport",
              "de": "Flughafen"
            },
            {
              "schrift": "shop",
              "lerntext": "shop",
              "de": "Laden"
            },
            {
              "schrift": "market",
              "lerntext": "market",
              "de": "Markt"
            },
            {
              "schrift": "plate",
              "lerntext": "plate",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "part",
              "lerntext": "part",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Ort",
              "wieder": true
            },
            {
              "schrift": "sugar",
              "lerntext": "sugar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "husband",
              "lerntext": "husband",
              "de": "Ehemann",
              "wieder": true
            },
            {
              "schrift": "fish",
              "lerntext": "fish",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "father",
              "lerntext": "father",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "friend",
              "lerntext": "friend",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "cheese",
              "lerntext": "cheese",
              "de": "Käse",
              "wieder": true
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
          "schrift": "where is the [Slot]?",
          "lerntext": "where is the [Slot]?"
        },
        "frameDe": "Wo ist das [Slot]?",
        "pronouns": [
          {
            "schrift": "where",
            "lerntext": "where",
            "de": "wo"
          },
          {
            "schrift": "here",
            "lerntext": "here",
            "de": "hier"
          },
          {
            "schrift": "there",
            "lerntext": "there",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel"
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus"
            },
            {
              "schrift": "restaurant",
              "lerntext": "restaurant",
              "de": "Restaurant"
            },
            {
              "schrift": "breakfast",
              "lerntext": "breakfast",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "vegetables",
              "lerntext": "vegetables",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "bread",
              "lerntext": "bread",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "dinner",
              "lerntext": "dinner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem",
              "wieder": true
            },
            {
              "schrift": "room",
              "lerntext": "room",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "money",
              "lerntext": "money",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "window",
              "lerntext": "window",
              "de": "Fenster",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "5.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is in the [Slot]",
          "lerntext": "it is in the [Slot]"
        },
        "frameDe": "Es ist in der [Slot].",
        "pronouns": [
          {
            "schrift": "in",
            "lerntext": "in",
            "de": "in"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "auf"
          },
          {
            "schrift": "at",
            "lerntext": "at",
            "de": "an"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "city",
              "lerntext": "city",
              "de": "Stadt"
            },
            {
              "schrift": "street",
              "lerntext": "street",
              "de": "Straße"
            },
            {
              "schrift": "school",
              "lerntext": "school",
              "de": "Schule"
            },
            {
              "schrift": "university",
              "lerntext": "university",
              "de": "Universität"
            },
            {
              "schrift": "pub",
              "lerntext": "pub",
              "de": "Kneipe"
            },
            {
              "schrift": "toilet",
              "lerntext": "toilet",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "pharmacy",
              "lerntext": "pharmacy",
              "de": "Apotheke",
              "wieder": true
            },
            {
              "schrift": "bank",
              "lerntext": "bank",
              "de": "Bank (Geldinstitut)",
              "wieder": true
            },
            {
              "schrift": "family",
              "lerntext": "family",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "exam",
              "lerntext": "exam",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "job",
              "lerntext": "job",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "door",
              "lerntext": "door",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "medicine",
              "lerntext": "medicine",
              "de": "Medizin",
              "wieder": true
            },
            {
              "schrift": "card",
              "lerntext": "card",
              "de": "Karte",
              "wieder": true
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
            "schrift": "on",
            "lerntext": "on",
            "de": "auf"
          },
          {
            "schrift": "at",
            "lerntext": "at",
            "de": "an"
          },
          {
            "schrift": "to",
            "lerntext": "to",
            "de": "zu"
          },
          {
            "schrift": "from",
            "lerntext": "from",
            "de": "von"
          }
        ],
        "id": "5.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is in the [Slot]",
          "lerntext": "it is in the [Slot]"
        },
        "frameDe": "Es ist in der [Slot].",
        "pronouns": [
          {
            "schrift": "in",
            "lerntext": "in",
            "de": "in"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "auf"
          },
          {
            "schrift": "at",
            "lerntext": "at",
            "de": "an"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "party",
              "lerntext": "party",
              "de": "Party"
            },
            {
              "schrift": "world",
              "lerntext": "world",
              "de": "Welt"
            },
            {
              "schrift": "city",
              "lerntext": "city",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "street",
              "lerntext": "street",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "school",
              "lerntext": "school",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "university",
              "lerntext": "university",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "pub",
              "lerntext": "pub",
              "de": "Kneipe",
              "wieder": true
            },
            {
              "schrift": "toilet",
              "lerntext": "toilet",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "pharmacy",
              "lerntext": "pharmacy",
              "de": "Apotheke",
              "wieder": true
            },
            {
              "schrift": "bank",
              "lerntext": "bank",
              "de": "Bank (Geldinstitut)",
              "wieder": true
            },
            {
              "schrift": "woman",
              "lerntext": "woman",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "cat",
              "lerntext": "cat",
              "de": "Katze",
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
          "schrift": "it is in the [Slot]",
          "lerntext": "it is in the [Slot]"
        },
        "frameDe": "Es ist in dem [Slot].",
        "pronouns": [
          {
            "schrift": "in",
            "lerntext": "in",
            "de": "in"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "auf"
          },
          {
            "schrift": "at",
            "lerntext": "at",
            "de": "an"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "way",
              "lerntext": "way",
              "de": "Weg"
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Ort"
            },
            {
              "schrift": "market",
              "lerntext": "market",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "airport",
              "lerntext": "airport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "shop",
              "lerntext": "shop",
              "de": "Laden",
              "wieder": true
            },
            {
              "schrift": "plate",
              "lerntext": "plate",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "key",
              "lerntext": "key",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "part",
              "lerntext": "part",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "dog",
              "lerntext": "dog",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "passport",
              "lerntext": "passport",
              "de": "Pass",
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
          "schrift": "it is in the [Slot]",
          "lerntext": "it is in the [Slot]"
        },
        "frameDe": "Es ist in dem [Slot].",
        "pronouns": [
          {
            "schrift": "in",
            "lerntext": "in",
            "de": "in"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "auf"
          },
          {
            "schrift": "at",
            "lerntext": "at",
            "de": "an"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "country",
              "lerntext": "country",
              "de": "Land"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "restaurant",
              "lerntext": "restaurant",
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
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "bed",
              "lerntext": "bed",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "food",
              "lerntext": "food",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "meat",
              "lerntext": "meat",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "eye",
              "lerntext": "eye",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "example",
              "lerntext": "example",
              "de": "Beispiel",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "5.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "the shop is [Slot] the hotel",
          "lerntext": "the shop is [Slot] the hotel"
        },
        "frameDe": "Der Laden ist [Slot] dem Hotel.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "behind",
              "lerntext": "behind",
              "de": "hinter"
            },
            {
              "schrift": "under",
              "lerntext": "under",
              "de": "unter"
            },
            {
              "schrift": "over",
              "lerntext": "over",
              "de": "über"
            },
            {
              "schrift": "between",
              "lerntext": "between",
              "de": "zwischen"
            },
            {
              "schrift": "near",
              "lerntext": "near",
              "de": "nahe"
            },
            {
              "schrift": "from",
              "lerntext": "from",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "to",
              "lerntext": "to",
              "de": "zu",
              "wieder": true
            },
            {
              "schrift": "at",
              "lerntext": "at",
              "de": "an",
              "wieder": true
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "auf",
              "wieder": true
            },
            {
              "schrift": "in",
              "lerntext": "in",
              "de": "in",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "of",
            "lerntext": "of",
            "de": "von"
          },
          {
            "schrift": "with",
            "lerntext": "with",
            "de": "mit"
          },
          {
            "schrift": "for",
            "lerntext": "for",
            "de": "für"
          },
          {
            "schrift": "by",
            "lerntext": "by",
            "de": "von"
          },
          {
            "schrift": "about",
            "lerntext": "about",
            "de": "über"
          }
        ],
        "id": "5.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "the shop is [Slot] the hotel",
          "lerntext": "the shop is [Slot] the hotel"
        },
        "frameDe": "Der Laden ist [Slot] dem Hotel.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "next to",
              "lerntext": "next to",
              "de": "neben"
            },
            {
              "schrift": "against",
              "lerntext": "against",
              "de": "gegen"
            },
            {
              "schrift": "through",
              "lerntext": "through",
              "de": "durch"
            },
            {
              "schrift": "into",
              "lerntext": "into",
              "de": "hinein"
            },
            {
              "schrift": "around",
              "lerntext": "around",
              "de": "um herum"
            },
            {
              "schrift": "behind",
              "lerntext": "behind",
              "de": "hinter",
              "wieder": true
            },
            {
              "schrift": "under",
              "lerntext": "under",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "over",
              "lerntext": "over",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "between",
              "lerntext": "between",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "near",
              "lerntext": "near",
              "de": "nahe",
              "wieder": true
            },
            {
              "schrift": "from",
              "lerntext": "from",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "to",
              "lerntext": "to",
              "de": "zu",
              "wieder": true
            },
            {
              "schrift": "at",
              "lerntext": "at",
              "de": "an",
              "wieder": true
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "auf",
              "wieder": true
            },
            {
              "schrift": "in",
              "lerntext": "in",
              "de": "in",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "5.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "go [Slot]",
          "lerntext": "go [Slot]"
        },
        "frameDe": "Geh [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "straight",
              "lerntext": "straight",
              "de": "geradeaus"
            },
            {
              "schrift": "outside",
              "lerntext": "outside",
              "de": "draußen"
            },
            {
              "schrift": "inside",
              "lerntext": "inside",
              "de": "drinnen"
            },
            {
              "schrift": "home",
              "lerntext": "home",
              "de": "nach Hause"
            },
            {
              "schrift": "again",
              "lerntext": "again",
              "de": "wieder"
            },
            {
              "schrift": "yes",
              "lerntext": "yes",
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
              "schrift": "there",
              "lerntext": "there",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "not",
              "lerntext": "not",
              "de": "nicht",
              "wieder": true
            },
            {
              "schrift": "here",
              "lerntext": "here",
              "de": "hier",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "go",
            "lerntext": "go",
            "de": "gehen"
          }
        ],
        "id": "5.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "the shop is [Slot] the hotel",
          "lerntext": "the shop is [Slot] the hotel"
        },
        "frameDe": "Der Laden ist [Slot] dem Hotel.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "next to",
              "lerntext": "next to",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "against",
              "lerntext": "against",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "through",
              "lerntext": "through",
              "de": "durch",
              "wieder": true
            },
            {
              "schrift": "into",
              "lerntext": "into",
              "de": "hinein",
              "wieder": true
            },
            {
              "schrift": "around",
              "lerntext": "around",
              "de": "um herum",
              "wieder": true
            },
            {
              "schrift": "behind",
              "lerntext": "behind",
              "de": "hinter",
              "wieder": true
            },
            {
              "schrift": "under",
              "lerntext": "under",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "over",
              "lerntext": "over",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "between",
              "lerntext": "between",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "near",
              "lerntext": "near",
              "de": "nahe",
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
          "schrift": "it is in the [Slot]",
          "lerntext": "it is in the [Slot]"
        },
        "frameDe": "Es ist in der [Slot].",
        "pronouns": [
          {
            "schrift": "in",
            "lerntext": "in",
            "de": "in"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "auf"
          },
          {
            "schrift": "at",
            "lerntext": "at",
            "de": "an"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "party",
              "lerntext": "party",
              "de": "Party",
              "wieder": true
            },
            {
              "schrift": "world",
              "lerntext": "world",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "city",
              "lerntext": "city",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "street",
              "lerntext": "street",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "school",
              "lerntext": "school",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "university",
              "lerntext": "university",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "pub",
              "lerntext": "pub",
              "de": "Kneipe",
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
          "schrift": "the shop is [Slot] the hotel",
          "lerntext": "the shop is [Slot] the hotel"
        },
        "frameDe": "Der Laden ist [Slot] dem Hotel.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "next to",
              "lerntext": "next to",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "against",
              "lerntext": "against",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "through",
              "lerntext": "through",
              "de": "durch",
              "wieder": true
            },
            {
              "schrift": "into",
              "lerntext": "into",
              "de": "hinein",
              "wieder": true
            },
            {
              "schrift": "around",
              "lerntext": "around",
              "de": "um herum",
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
          "schrift": "it is in the [Slot]",
          "lerntext": "it is in the [Slot]"
        },
        "frameDe": "Es ist in dem [Slot].",
        "pronouns": [
          {
            "schrift": "in",
            "lerntext": "in",
            "de": "in"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "auf"
          },
          {
            "schrift": "at",
            "lerntext": "at",
            "de": "an"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "way",
              "lerntext": "way",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "country",
              "lerntext": "country",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "market",
              "lerntext": "market",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "airport",
              "lerntext": "airport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "restaurant",
              "lerntext": "restaurant",
              "de": "Restaurant",
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
        "task": "Ask the way to three places.",
        "newFrameWords": [],
        "id": "5.15"
      }
    ]
  },
  {
    "number": 6,
    "title": "Numbers and prices",
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
              "schrift": "one",
              "lerntext": "one",
              "de": "eins"
            },
            {
              "schrift": "two",
              "lerntext": "two",
              "de": "zwei"
            },
            {
              "schrift": "three",
              "lerntext": "three",
              "de": "drei"
            },
            {
              "schrift": "four",
              "lerntext": "four",
              "de": "vier"
            },
            {
              "schrift": "five",
              "lerntext": "five",
              "de": "fünf"
            },
            {
              "schrift": "six",
              "lerntext": "six",
              "de": "sechs"
            },
            {
              "schrift": "seven",
              "lerntext": "seven",
              "de": "sieben"
            },
            {
              "schrift": "eight",
              "lerntext": "eight",
              "de": "acht"
            },
            {
              "schrift": "nine",
              "lerntext": "nine",
              "de": "neun"
            },
            {
              "schrift": "ten",
              "lerntext": "ten",
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
              "schrift": "eleven",
              "lerntext": "eleven",
              "de": "elf"
            },
            {
              "schrift": "twelve",
              "lerntext": "twelve",
              "de": "zwölf"
            },
            {
              "schrift": "thirteen",
              "lerntext": "thirteen",
              "de": "dreizehn"
            },
            {
              "schrift": "fourteen",
              "lerntext": "fourteen",
              "de": "vierzehn"
            },
            {
              "schrift": "fifteen",
              "lerntext": "fifteen",
              "de": "fünfzehn"
            },
            {
              "schrift": "sixteen",
              "lerntext": "sixteen",
              "de": "sechzehn"
            },
            {
              "schrift": "seventeen",
              "lerntext": "seventeen",
              "de": "siebzehn"
            },
            {
              "schrift": "eighteen",
              "lerntext": "eighteen",
              "de": "achtzehn"
            },
            {
              "schrift": "nineteen",
              "lerntext": "nineteen",
              "de": "neunzehn"
            },
            {
              "schrift": "twenty",
              "lerntext": "twenty",
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
              "schrift": "thirty",
              "lerntext": "thirty",
              "de": "dreissig"
            },
            {
              "schrift": "forty",
              "lerntext": "forty",
              "de": "vierzig"
            },
            {
              "schrift": "fifty",
              "lerntext": "fifty",
              "de": "fünfzig"
            },
            {
              "schrift": "sixty",
              "lerntext": "sixty",
              "de": "sechzig"
            },
            {
              "schrift": "seventy",
              "lerntext": "seventy",
              "de": "siebzig"
            },
            {
              "schrift": "eighty",
              "lerntext": "eighty",
              "de": "achtzig"
            },
            {
              "schrift": "ninety",
              "lerntext": "ninety",
              "de": "neunzig"
            },
            {
              "schrift": "hundred",
              "lerntext": "hundred",
              "de": "hundert"
            },
            {
              "schrift": "thousand",
              "lerntext": "thousand",
              "de": "tausend"
            },
            {
              "schrift": "million",
              "lerntext": "million",
              "de": "Million"
            }
          ]
        ],
        "newCount": 10,
        "task": null,
        "newFrameWords": [],
        "id": "6.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "how much is the [Slot]?",
          "lerntext": "how much is the [Slot]?"
        },
        "frameDe": "Wie viel kostet die [Slot]?",
        "pronouns": [
          {
            "schrift": "how much",
            "lerntext": "how much",
            "de": "wie viel"
          },
          {
            "schrift": "how many",
            "lerntext": "how many",
            "de": "wie viele"
          },
          {
            "schrift": "how long",
            "lerntext": "how long",
            "de": "wie lange"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "number",
              "lerntext": "number",
              "de": "Nummer"
            },
            {
              "schrift": "shift",
              "lerntext": "shift",
              "de": "Schicht"
            },
            {
              "schrift": "lecture",
              "lerntext": "lecture",
              "de": "Vorlesung"
            },
            {
              "schrift": "party",
              "lerntext": "party",
              "de": "Party",
              "wieder": true
            },
            {
              "schrift": "world",
              "lerntext": "world",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "street",
              "lerntext": "street",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "toilet",
              "lerntext": "toilet",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "city",
              "lerntext": "city",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "pharmacy",
              "lerntext": "pharmacy",
              "de": "Apotheke",
              "wieder": true
            },
            {
              "schrift": "bank",
              "lerntext": "bank",
              "de": "Bank (Geldinstitut)",
              "wieder": true
            },
            {
              "schrift": "pub",
              "lerntext": "pub",
              "de": "Kneipe",
              "wieder": true
            },
            {
              "schrift": "school",
              "lerntext": "school",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "university",
              "lerntext": "university",
              "de": "Universität",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "how much",
            "lerntext": "how much",
            "de": "wie viel"
          },
          {
            "schrift": "how many",
            "lerntext": "how many",
            "de": "wie viele"
          },
          {
            "schrift": "how long",
            "lerntext": "how long",
            "de": "wie lange"
          },
          {
            "schrift": "how",
            "lerntext": "how",
            "de": "wie"
          },
          {
            "schrift": "much",
            "lerntext": "much",
            "de": "viel"
          }
        ],
        "id": "6.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "how much is the [Slot]?",
          "lerntext": "how much is the [Slot]?"
        },
        "frameDe": "Wie viel kostet der [Slot]?",
        "pronouns": [
          {
            "schrift": "how much",
            "lerntext": "how much",
            "de": "wie viel"
          },
          {
            "schrift": "how many",
            "lerntext": "how many",
            "de": "wie viele"
          },
          {
            "schrift": "how long",
            "lerntext": "how long",
            "de": "wie lange"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "price",
              "lerntext": "price",
              "de": "Preis"
            },
            {
              "schrift": "way",
              "lerntext": "way",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "market",
              "lerntext": "market",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "airport",
              "lerntext": "airport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "tea",
              "lerntext": "tea",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "teacher",
              "lerntext": "teacher",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "man",
              "lerntext": "man",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "colleague",
              "lerntext": "colleague",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "coffee",
              "lerntext": "coffee",
              "de": "Kaffee",
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
          "schrift": "how much is the [Slot]?",
          "lerntext": "how much is the [Slot]?"
        },
        "frameDe": "Wie viel kostet das [Slot]?",
        "pronouns": [
          {
            "schrift": "how much",
            "lerntext": "how much",
            "de": "wie viel"
          },
          {
            "schrift": "how many",
            "lerntext": "how many",
            "de": "wie viele"
          },
          {
            "schrift": "how long",
            "lerntext": "how long",
            "de": "wie lange"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende"
            },
            {
              "schrift": "country",
              "lerntext": "country",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "restaurant",
              "lerntext": "restaurant",
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
              "schrift": "present",
              "lerntext": "present",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "breakfast",
              "lerntext": "breakfast",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "vegetables",
              "lerntext": "vegetables",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "beer",
              "lerntext": "beer",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Glas",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "6.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is too [Slot]",
          "lerntext": "it is too [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [
          {
            "schrift": "too",
            "lerntext": "too",
            "de": "zu"
          },
          {
            "schrift": "very",
            "lerntext": "very",
            "de": "sehr"
          },
          {
            "schrift": "enough",
            "lerntext": "enough",
            "de": "genug"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer"
            },
            {
              "schrift": "cheap",
              "lerntext": "cheap",
              "de": "billig"
            },
            {
              "schrift": "big",
              "lerntext": "big",
              "de": "groß"
            },
            {
              "schrift": "small",
              "lerntext": "small",
              "de": "klein"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang"
            },
            {
              "schrift": "free",
              "lerntext": "free",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "dangerous",
              "lerntext": "dangerous",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "safe",
              "lerntext": "safe",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "full",
              "lerntext": "full",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "empty",
              "lerntext": "empty",
              "de": "leer",
              "wieder": true
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "hungry",
              "lerntext": "hungry",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "tired",
              "lerntext": "tired",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "angry",
              "lerntext": "angry",
              "de": "wütend",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "too",
            "lerntext": "too",
            "de": "zu"
          },
          {
            "schrift": "very",
            "lerntext": "very",
            "de": "sehr"
          },
          {
            "schrift": "enough",
            "lerntext": "enough",
            "de": "genug"
          },
          {
            "schrift": "more",
            "lerntext": "more",
            "de": "mehr"
          },
          {
            "schrift": "less",
            "lerntext": "less",
            "de": "weniger"
          },
          {
            "schrift": "much",
            "lerntext": "much",
            "de": "viel"
          },
          {
            "schrift": "little",
            "lerntext": "little",
            "de": "wenig"
          }
        ],
        "id": "6.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is too [Slot]",
          "lerntext": "it is too [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [
          {
            "schrift": "too",
            "lerntext": "too",
            "de": "zu"
          },
          {
            "schrift": "very",
            "lerntext": "very",
            "de": "sehr"
          },
          {
            "schrift": "enough",
            "lerntext": "enough",
            "de": "genug"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "short",
              "lerntext": "short",
              "de": "kurz"
            },
            {
              "schrift": "high",
              "lerntext": "high",
              "de": "hoch"
            },
            {
              "schrift": "low",
              "lerntext": "low",
              "de": "niedrig"
            },
            {
              "schrift": "heavy",
              "lerntext": "heavy",
              "de": "schwer"
            },
            {
              "schrift": "light",
              "lerntext": "light",
              "de": "leicht"
            },
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "cheap",
              "lerntext": "cheap",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "big",
              "lerntext": "big",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "small",
              "lerntext": "small",
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
              "schrift": "free",
              "lerntext": "free",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "dangerous",
              "lerntext": "dangerous",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "safe",
              "lerntext": "safe",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "full",
              "lerntext": "full",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "empty",
              "lerntext": "empty",
              "de": "leer",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "6.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "the [Slot] one",
          "lerntext": "the [Slot] one"
        },
        "frameDe": "Der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "next",
              "lerntext": "next",
              "de": "nächster"
            },
            {
              "schrift": "low",
              "lerntext": "low",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "light",
              "lerntext": "light",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "heavy",
              "lerntext": "heavy",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "high",
              "lerntext": "high",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "short",
              "lerntext": "short",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "small",
              "lerntext": "small",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "big",
              "lerntext": "big",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "cheap",
              "lerntext": "cheap",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "6.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "the [Slot] one",
          "lerntext": "the [Slot] one"
        },
        "frameDe": "Der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "first",
              "lerntext": "first",
              "de": "erster"
            },
            {
              "schrift": "second",
              "lerntext": "second",
              "de": "zweiter"
            },
            {
              "schrift": "third",
              "lerntext": "third",
              "de": "dritter"
            },
            {
              "schrift": "last",
              "lerntext": "last",
              "de": "letzter"
            },
            {
              "schrift": "eighteen",
              "lerntext": "eighteen",
              "de": "achtzehn",
              "wieder": true
            },
            {
              "schrift": "seven",
              "lerntext": "seven",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "nineteen",
              "lerntext": "nineteen",
              "de": "neunzehn",
              "wieder": true
            },
            {
              "schrift": "three",
              "lerntext": "three",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "ninety",
              "lerntext": "ninety",
              "de": "neunzig",
              "wieder": true
            },
            {
              "schrift": "twelve",
              "lerntext": "twelve",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "fourteen",
              "lerntext": "fourteen",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "ten",
              "lerntext": "ten",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "thirty",
              "lerntext": "thirty",
              "de": "dreissig",
              "wieder": true
            },
            {
              "schrift": "eight",
              "lerntext": "eight",
              "de": "acht",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
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
              "schrift": "zero",
              "lerntext": "zero",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "two",
              "lerntext": "two",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "four",
              "lerntext": "four",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "five",
              "lerntext": "five",
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
              "schrift": "nine",
              "lerntext": "nine",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "eleven",
              "lerntext": "eleven",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "thirteen",
              "lerntext": "thirteen",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "fifteen",
              "lerntext": "fifteen",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "sixteen",
              "lerntext": "sixteen",
              "de": "sechzehn",
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
              "schrift": "seventeen",
              "lerntext": "seventeen",
              "de": "siebzehn",
              "wieder": true
            },
            {
              "schrift": "twenty",
              "lerntext": "twenty",
              "de": "zwanzig",
              "wieder": true
            },
            {
              "schrift": "forty",
              "lerntext": "forty",
              "de": "vierzig",
              "wieder": true
            },
            {
              "schrift": "fifty",
              "lerntext": "fifty",
              "de": "fünfzig",
              "wieder": true
            },
            {
              "schrift": "sixty",
              "lerntext": "sixty",
              "de": "sechzig",
              "wieder": true
            },
            {
              "schrift": "seventy",
              "lerntext": "seventy",
              "de": "siebzig",
              "wieder": true
            },
            {
              "schrift": "eighty",
              "lerntext": "eighty",
              "de": "achtzig",
              "wieder": true
            },
            {
              "schrift": "hundred",
              "lerntext": "hundred",
              "de": "hundert",
              "wieder": true
            },
            {
              "schrift": "thousand",
              "lerntext": "thousand",
              "de": "tausend",
              "wieder": true
            },
            {
              "schrift": "million",
              "lerntext": "million",
              "de": "Million",
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
              "schrift": "zero",
              "lerntext": "zero",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "two",
              "lerntext": "two",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "three",
              "lerntext": "three",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "four",
              "lerntext": "four",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "five",
              "lerntext": "five",
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
              "schrift": "seven",
              "lerntext": "seven",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "eight",
              "lerntext": "eight",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "nine",
              "lerntext": "nine",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "ten",
              "lerntext": "ten",
              "de": "zehn",
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
              "schrift": "eleven",
              "lerntext": "eleven",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "twelve",
              "lerntext": "twelve",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "thirteen",
              "lerntext": "thirteen",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "fourteen",
              "lerntext": "fourteen",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "fifteen",
              "lerntext": "fifteen",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "sixteen",
              "lerntext": "sixteen",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "seventeen",
              "lerntext": "seventeen",
              "de": "siebzehn",
              "wieder": true
            },
            {
              "schrift": "eighteen",
              "lerntext": "eighteen",
              "de": "achtzehn",
              "wieder": true
            },
            {
              "schrift": "nineteen",
              "lerntext": "nineteen",
              "de": "neunzehn",
              "wieder": true
            },
            {
              "schrift": "twenty",
              "lerntext": "twenty",
              "de": "zwanzig",
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
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Ask what something costs and say a number.",
        "newFrameWords": [],
        "id": "6.15"
      }
    ]
  },
  {
    "number": 7,
    "title": "I can, I must",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I can [Slot]",
          "lerntext": "I can [Slot]"
        },
        "frameDe": "Ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen"
            },
            {
              "schrift": "drive",
              "lerntext": "drive",
              "de": "fahren"
            },
            {
              "schrift": "sing",
              "lerntext": "sing",
              "de": "singen"
            },
            {
              "schrift": "walk",
              "lerntext": "walk",
              "de": "gehen"
            },
            {
              "schrift": "wash",
              "lerntext": "wash",
              "de": "waschen"
            },
            {
              "schrift": "go",
              "lerntext": "go",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "mean",
              "lerntext": "mean",
              "de": "bedeuten",
              "wieder": true
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "do",
              "lerntext": "do",
              "de": "tun",
              "wieder": true
            },
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "believe",
              "lerntext": "believe",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "hear",
              "lerntext": "hear",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "like",
              "lerntext": "like",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "know",
              "lerntext": "know",
              "de": "wissen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "can",
            "lerntext": "can",
            "de": "können"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I can [Slot]",
          "lerntext": "I can [Slot]"
        },
        "frameDe": "Ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen"
            },
            {
              "schrift": "write",
              "lerntext": "write",
              "de": "schreiben"
            },
            {
              "schrift": "help",
              "lerntext": "help",
              "de": "helfen"
            },
            {
              "schrift": "speak",
              "lerntext": "speak",
              "de": "sprechen"
            },
            {
              "schrift": "cook",
              "lerntext": "cook",
              "de": "kochen"
            },
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "drive",
              "lerntext": "drive",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "sing",
              "lerntext": "sing",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "walk",
              "lerntext": "walk",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "wash",
              "lerntext": "wash",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "go",
              "lerntext": "go",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "mean",
              "lerntext": "mean",
              "de": "bedeuten",
              "wieder": true
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "do",
              "lerntext": "do",
              "de": "tun",
              "wieder": true
            },
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken",
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
          "schrift": "he can [Slot]",
          "lerntext": "he can [Slot]"
        },
        "frameDe": "Er kann [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          },
          {
            "schrift": "she",
            "lerntext": "she",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "work",
              "lerntext": "work",
              "de": "arbeiten"
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen"
            },
            {
              "schrift": "run",
              "lerntext": "run",
              "de": "rennen"
            },
            {
              "schrift": "walk",
              "lerntext": "walk",
              "de": "gehen"
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten"
            },
            {
              "schrift": "write",
              "lerntext": "write",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "speak",
              "lerntext": "speak",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "help",
              "lerntext": "help",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "cook",
              "lerntext": "cook",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "drive",
              "lerntext": "drive",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "wash",
              "lerntext": "wash",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "sing",
              "lerntext": "sing",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "believe",
              "lerntext": "believe",
              "de": "glauben",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I must [Slot]",
          "lerntext": "I must [Slot]"
        },
        "frameDe": "Ich muss [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pay",
              "lerntext": "pay",
              "de": "bezahlen"
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen"
            },
            {
              "schrift": "eat",
              "lerntext": "eat",
              "de": "essen"
            },
            {
              "schrift": "drink",
              "lerntext": "drink",
              "de": "trinken"
            },
            {
              "schrift": "start",
              "lerntext": "start",
              "de": "starten"
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "run",
              "lerntext": "run",
              "de": "rennen",
              "wieder": true
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "work",
              "lerntext": "work",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "write",
              "lerntext": "write",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "speak",
              "lerntext": "speak",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "help",
              "lerntext": "help",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "cook",
              "lerntext": "cook",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "drive",
              "lerntext": "drive",
              "de": "fahren",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "must",
            "lerntext": "must",
            "de": "müssen"
          },
          {
            "schrift": "should",
            "lerntext": "should",
            "de": "sollen"
          }
        ],
        "id": "7.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "you should [Slot]",
          "lerntext": "you should [Slot]"
        },
        "frameDe": "Du solltest [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "answer",
              "lerntext": "answer",
              "de": "Antwort"
            },
            {
              "schrift": "price",
              "lerntext": "price",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "shift",
              "lerntext": "shift",
              "de": "Schicht",
              "wieder": true
            },
            {
              "schrift": "number",
              "lerntext": "number",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "lecture",
              "lerntext": "lecture",
              "de": "Vorlesung",
              "wieder": true
            },
            {
              "schrift": "way",
              "lerntext": "way",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "name",
              "lerntext": "name",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "party",
              "lerntext": "party",
              "de": "Party",
              "wieder": true
            },
            {
              "schrift": "world",
              "lerntext": "world",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "country",
              "lerntext": "country",
              "de": "Land",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "7.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "you should [Slot]",
          "lerntext": "you should [Slot]"
        },
        "frameDe": "Du solltest [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen"
            },
            {
              "schrift": "try",
              "lerntext": "try",
              "de": "versuchen"
            },
            {
              "schrift": "call",
              "lerntext": "call",
              "de": "rufen"
            },
            {
              "schrift": "look",
              "lerntext": "look",
              "de": "schauen"
            },
            {
              "schrift": "eat",
              "lerntext": "eat",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "must",
              "lerntext": "must",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "drink",
              "lerntext": "drink",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "start",
              "lerntext": "start",
              "de": "starten",
              "wieder": true
            },
            {
              "schrift": "pay",
              "lerntext": "pay",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "run",
              "lerntext": "run",
              "de": "rennen",
              "wieder": true
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "work",
              "lerntext": "work",
              "de": "arbeiten",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "7.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "you should [Slot]",
          "lerntext": "you should [Slot]"
        },
        "frameDe": "Du solltest [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "try",
              "lerntext": "try",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "call",
              "lerntext": "call",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "look",
              "lerntext": "look",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "price",
              "lerntext": "price",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "shift",
              "lerntext": "shift",
              "de": "Schicht",
              "wieder": true
            },
            {
              "schrift": "number",
              "lerntext": "number",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "lecture",
              "lerntext": "lecture",
              "de": "Vorlesung",
              "wieder": true
            },
            {
              "schrift": "eat",
              "lerntext": "eat",
              "de": "essen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "7.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "you should [Slot]",
          "lerntext": "you should [Slot]"
        },
        "frameDe": "Du solltest [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "try",
              "lerntext": "try",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "call",
              "lerntext": "call",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "look",
              "lerntext": "look",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "must",
              "lerntext": "must",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "drink",
              "lerntext": "drink",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "start",
              "lerntext": "start",
              "de": "starten",
              "wieder": true
            },
            {
              "schrift": "pay",
              "lerntext": "pay",
              "de": "bezahlen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
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
        "task": "Say what you can do and what you must do today.",
        "newFrameWords": [],
        "id": "7.9"
      }
    ]
  },
  {
    "number": 8,
    "title": "I go, I come",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I go to the [Slot]",
          "lerntext": "I go to the [Slot]"
        },
        "frameDe": "Ich gehe zum [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          },
          {
            "schrift": "they",
            "lerntext": "they",
            "de": "sie (Mehrzahl)"
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
              "schrift": "bus",
              "lerntext": "bus",
              "de": "Bus"
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "Auto"
            },
            {
              "schrift": "airport",
              "lerntext": "airport",
              "de": "Flughafen"
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof"
            },
            {
              "schrift": "price",
              "lerntext": "price",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "shift",
              "lerntext": "shift",
              "de": "Schicht",
              "wieder": true
            },
            {
              "schrift": "number",
              "lerntext": "number",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "lecture",
              "lerntext": "lecture",
              "de": "Vorlesung",
              "wieder": true
            },
            {
              "schrift": "phone",
              "lerntext": "phone",
              "de": "Handy",
              "wieder": true
            },
            {
              "schrift": "market",
              "lerntext": "market",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "street",
              "lerntext": "street",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "water",
              "lerntext": "water",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "way",
              "lerntext": "way",
              "de": "Weg",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "come",
            "lerntext": "come",
            "de": "kommen"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "we can [Slot]",
          "lerntext": "we can [Slot]"
        },
        "frameDe": "Wir können [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          },
          {
            "schrift": "she",
            "lerntext": "she",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "move",
              "lerntext": "move",
              "de": "bewegen"
            },
            {
              "schrift": "arrive",
              "lerntext": "arrive",
              "de": "ankommen"
            },
            {
              "schrift": "visit",
              "lerntext": "visit",
              "de": "besuchen"
            },
            {
              "schrift": "come",
              "lerntext": "come",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "should",
              "lerntext": "should",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "look",
              "lerntext": "look",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "eat",
              "lerntext": "eat",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "wash",
              "lerntext": "wash",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "sing",
              "lerntext": "sing",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "call",
              "lerntext": "call",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "write",
              "lerntext": "write",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "must",
              "lerntext": "must",
              "de": "müssen",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I [Slot] a lot",
          "lerntext": "I [Slot] a lot"
        },
        "frameDe": "Ich [Slot] viel.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "get",
              "lerntext": "get",
              "de": "bekommen"
            },
            {
              "schrift": "take",
              "lerntext": "take",
              "de": "nehmen"
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben"
            },
            {
              "schrift": "put",
              "lerntext": "put",
              "de": "legen"
            },
            {
              "schrift": "keep",
              "lerntext": "keep",
              "de": "behalten"
            },
            {
              "schrift": "visit",
              "lerntext": "visit",
              "de": "besuchen",
              "wieder": true
            },
            {
              "schrift": "move",
              "lerntext": "move",
              "de": "bewegen",
              "wieder": true
            },
            {
              "schrift": "come",
              "lerntext": "come",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "arrive",
              "lerntext": "arrive",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "should",
              "lerntext": "should",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "run",
              "lerntext": "run",
              "de": "rennen",
              "wieder": true
            },
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "be",
              "lerntext": "be",
              "de": "sein",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "8.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I [Slot] a lot",
          "lerntext": "I [Slot] a lot"
        },
        "frameDe": "Ich [Slot] viel.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "leave",
              "lerntext": "leave",
              "de": "verlassen"
            },
            {
              "schrift": "turn",
              "lerntext": "turn",
              "de": "drehen"
            },
            {
              "schrift": "show",
              "lerntext": "show",
              "de": "zeigen"
            },
            {
              "schrift": "tell",
              "lerntext": "tell",
              "de": "erzählen"
            },
            {
              "schrift": "let",
              "lerntext": "let",
              "de": "lassen"
            },
            {
              "schrift": "get",
              "lerntext": "get",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "take",
              "lerntext": "take",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "put",
              "lerntext": "put",
              "de": "legen",
              "wieder": true
            },
            {
              "schrift": "keep",
              "lerntext": "keep",
              "de": "behalten",
              "wieder": true
            },
            {
              "schrift": "visit",
              "lerntext": "visit",
              "de": "besuchen",
              "wieder": true
            },
            {
              "schrift": "move",
              "lerntext": "move",
              "de": "bewegen",
              "wieder": true
            },
            {
              "schrift": "come",
              "lerntext": "come",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "arrive",
              "lerntext": "arrive",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "8.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I [Slot] a lot",
          "lerntext": "I [Slot] a lot"
        },
        "frameDe": "Ich [Slot] viel.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bring",
              "lerntext": "bring",
              "de": "bringen"
            },
            {
              "schrift": "leave",
              "lerntext": "leave",
              "de": "verlassen",
              "wieder": true
            },
            {
              "schrift": "turn",
              "lerntext": "turn",
              "de": "drehen",
              "wieder": true
            },
            {
              "schrift": "show",
              "lerntext": "show",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "tell",
              "lerntext": "tell",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "let",
              "lerntext": "let",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "get",
              "lerntext": "get",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "take",
              "lerntext": "take",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "put",
              "lerntext": "put",
              "de": "legen",
              "wieder": true
            },
            {
              "schrift": "keep",
              "lerntext": "keep",
              "de": "behalten",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "8.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "we [Slot] together",
          "lerntext": "we [Slot] together"
        },
        "frameDe": "Wir [Slot] zusammen.",
        "pronouns": [
          {
            "schrift": "together",
            "lerntext": "together",
            "de": "zusammen"
          },
          {
            "schrift": "also",
            "lerntext": "also",
            "de": "auch"
          },
          {
            "schrift": "just",
            "lerntext": "just",
            "de": "gerade"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travel",
              "lerntext": "travel",
              "de": "reisen"
            },
            {
              "schrift": "meet",
              "lerntext": "meet",
              "de": "treffen"
            },
            {
              "schrift": "stay",
              "lerntext": "stay",
              "de": "bleiben"
            },
            {
              "schrift": "live",
              "lerntext": "live",
              "de": "leben"
            },
            {
              "schrift": "sit",
              "lerntext": "sit",
              "de": "sitzen"
            },
            {
              "schrift": "bring",
              "lerntext": "bring",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "let",
              "lerntext": "let",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "turn",
              "lerntext": "turn",
              "de": "drehen",
              "wieder": true
            },
            {
              "schrift": "tell",
              "lerntext": "tell",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "show",
              "lerntext": "show",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "leave",
              "lerntext": "leave",
              "de": "verlassen",
              "wieder": true
            },
            {
              "schrift": "visit",
              "lerntext": "visit",
              "de": "besuchen",
              "wieder": true
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "move",
              "lerntext": "move",
              "de": "bewegen",
              "wieder": true
            },
            {
              "schrift": "take",
              "lerntext": "take",
              "de": "nehmen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "together",
            "lerntext": "together",
            "de": "zusammen"
          },
          {
            "schrift": "also",
            "lerntext": "also",
            "de": "auch"
          },
          {
            "schrift": "just",
            "lerntext": "just",
            "de": "gerade"
          },
          {
            "schrift": "only",
            "lerntext": "only",
            "de": "nur"
          }
        ],
        "id": "8.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "we [Slot] together",
          "lerntext": "we [Slot] together"
        },
        "frameDe": "Wir [Slot] zusammen.",
        "pronouns": [
          {
            "schrift": "together",
            "lerntext": "together",
            "de": "zusammen"
          },
          {
            "schrift": "also",
            "lerntext": "also",
            "de": "auch"
          },
          {
            "schrift": "just",
            "lerntext": "just",
            "de": "gerade"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travel",
              "lerntext": "travel",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "meet",
              "lerntext": "meet",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "stay",
              "lerntext": "stay",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "live",
              "lerntext": "live",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "sit",
              "lerntext": "sit",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "bring",
              "lerntext": "bring",
              "de": "bringen",
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
          "schrift": "we [Slot] together",
          "lerntext": "we [Slot] together"
        },
        "frameDe": "Wir [Slot] zusammen.",
        "pronouns": [
          {
            "schrift": "together",
            "lerntext": "together",
            "de": "zusammen"
          },
          {
            "schrift": "also",
            "lerntext": "also",
            "de": "auch"
          },
          {
            "schrift": "just",
            "lerntext": "just",
            "de": "gerade"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travel",
              "lerntext": "travel",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "meet",
              "lerntext": "meet",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "stay",
              "lerntext": "stay",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "live",
              "lerntext": "live",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "sit",
              "lerntext": "sit",
              "de": "sitzen",
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
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Say where you are going and how.",
        "newFrameWords": [],
        "id": "8.9"
      }
    ]
  },
  {
    "number": 9,
    "title": "Time",
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
              "schrift": "yesterday",
              "lerntext": "yesterday",
              "de": "gestern"
            },
            {
              "schrift": "tomorrow",
              "lerntext": "tomorrow",
              "de": "morgen"
            },
            {
              "schrift": "soon",
              "lerntext": "soon",
              "de": "bald"
            },
            {
              "schrift": "always",
              "lerntext": "always",
              "de": "immer"
            },
            {
              "schrift": "never",
              "lerntext": "never",
              "de": "nie"
            },
            {
              "schrift": "often",
              "lerntext": "often",
              "de": "oft"
            },
            {
              "schrift": "sometimes",
              "lerntext": "sometimes",
              "de": "manchmal"
            },
            {
              "schrift": "rarely",
              "lerntext": "rarely",
              "de": "selten"
            },
            {
              "schrift": "still",
              "lerntext": "still",
              "de": "noch"
            },
            {
              "schrift": "already",
              "lerntext": "already",
              "de": "schon"
            },
            {
              "schrift": "yet",
              "lerntext": "yet",
              "de": "noch nicht"
            },
            {
              "schrift": "early",
              "lerntext": "early",
              "de": "früh"
            },
            {
              "schrift": "late",
              "lerntext": "late",
              "de": "spät"
            }
          ]
        ],
        "newCount": 13,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "now",
            "lerntext": "now",
            "de": "jetzt"
          },
          {
            "schrift": "today",
            "lerntext": "today",
            "de": "heute"
          },
          {
            "schrift": "when",
            "lerntext": "when",
            "de": "wann"
          }
        ],
        "id": "9.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "see you in the [Slot]",
          "lerntext": "see you in the [Slot]"
        },
        "frameDe": "Bis [Slot].",
        "pronouns": [
          {
            "schrift": "when",
            "lerntext": "when",
            "de": "wann"
          },
          {
            "schrift": "before",
            "lerntext": "before",
            "de": "vor"
          },
          {
            "schrift": "after",
            "lerntext": "after",
            "de": "nach"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morning",
              "lerntext": "morning",
              "de": "Morgen"
            },
            {
              "schrift": "afternoon",
              "lerntext": "afternoon",
              "de": "Nachmittag"
            },
            {
              "schrift": "evening",
              "lerntext": "evening",
              "de": "Abend"
            },
            {
              "schrift": "night",
              "lerntext": "night",
              "de": "Nacht"
            },
            {
              "schrift": "moment",
              "lerntext": "moment",
              "de": "Moment"
            },
            {
              "schrift": "bus",
              "lerntext": "bus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem",
              "wieder": true
            },
            {
              "schrift": "girl",
              "lerntext": "girl",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "room",
              "lerntext": "room",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "bed",
              "lerntext": "bed",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "ticket",
              "lerntext": "ticket",
              "de": "Fahrkarte",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "before",
            "lerntext": "before",
            "de": "vor"
          },
          {
            "schrift": "after",
            "lerntext": "after",
            "de": "nach"
          },
          {
            "schrift": "until",
            "lerntext": "until",
            "de": "bis"
          },
          {
            "schrift": "during",
            "lerntext": "during",
            "de": "während"
          }
        ],
        "id": "9.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it takes an [Slot]",
          "lerntext": "it takes an [Slot]"
        },
        "frameDe": "Es dauert eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hour",
              "lerntext": "hour",
              "de": "Stunde"
            },
            {
              "schrift": "minute",
              "lerntext": "minute",
              "de": "Minute"
            },
            {
              "schrift": "week",
              "lerntext": "week",
              "de": "Woche"
            },
            {
              "schrift": "time",
              "lerntext": "time",
              "de": "Zeit"
            },
            {
              "schrift": "night",
              "lerntext": "night",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "shift",
              "lerntext": "shift",
              "de": "Schicht",
              "wieder": true
            },
            {
              "schrift": "bag",
              "lerntext": "bag",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "party",
              "lerntext": "party",
              "de": "Party",
              "wieder": true
            },
            {
              "schrift": "bill",
              "lerntext": "bill",
              "de": "Rechnung",
              "wieder": true
            },
            {
              "schrift": "school",
              "lerntext": "school",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "flat",
              "lerntext": "flat",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "number",
              "lerntext": "number",
              "de": "Nummer",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "9.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it takes an [Slot]",
          "lerntext": "it takes an [Slot]"
        },
        "frameDe": "Es dauert einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "day",
              "lerntext": "day",
              "de": "Tag"
            },
            {
              "schrift": "month",
              "lerntext": "month",
              "de": "Monat"
            },
            {
              "schrift": "beginning",
              "lerntext": "beginning",
              "de": "Anfang"
            },
            {
              "schrift": "moment",
              "lerntext": "moment",
              "de": "Moment",
              "wieder": true
            },
            {
              "schrift": "afternoon",
              "lerntext": "afternoon",
              "de": "Nachmittag",
              "wieder": true
            },
            {
              "schrift": "evening",
              "lerntext": "evening",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "morning",
              "lerntext": "morning",
              "de": "Morgen",
              "wieder": true
            },
            {
              "schrift": "bus",
              "lerntext": "bus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "father",
              "lerntext": "father",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "sugar",
              "lerntext": "sugar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "fish",
              "lerntext": "fish",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "wine",
              "lerntext": "wine",
              "de": "Wein",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "9.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it takes an [Slot]",
          "lerntext": "it takes an [Slot]"
        },
        "frameDe": "Es dauert ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "year",
              "lerntext": "year",
              "de": "Jahr"
            },
            {
              "schrift": "life",
              "lerntext": "life",
              "de": "Leben"
            },
            {
              "schrift": "end",
              "lerntext": "end",
              "de": "Ende"
            },
            {
              "schrift": "dinner",
              "lerntext": "dinner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "luggage",
              "lerntext": "luggage",
              "de": "Gepäck",
              "wieder": true
            },
            {
              "schrift": "restaurant",
              "lerntext": "restaurant",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "child",
              "lerntext": "child",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "window",
              "lerntext": "window",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "eye",
              "lerntext": "eye",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "bread",
              "lerntext": "bread",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "house",
              "lerntext": "house",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "book",
              "lerntext": "book",
              "de": "Buch",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "9.5"
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
              "schrift": "yesterday",
              "lerntext": "yesterday",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "tomorrow",
              "lerntext": "tomorrow",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "soon",
              "lerntext": "soon",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "always",
              "lerntext": "always",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "never",
              "lerntext": "never",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "often",
              "lerntext": "often",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "sometimes",
              "lerntext": "sometimes",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "rarely",
              "lerntext": "rarely",
              "de": "selten",
              "wieder": true
            },
            {
              "schrift": "still",
              "lerntext": "still",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "already",
              "lerntext": "already",
              "de": "schon",
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
          "schrift": "it takes an [Slot]",
          "lerntext": "it takes an [Slot]"
        },
        "frameDe": "Es dauert einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "day",
              "lerntext": "day",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "month",
              "lerntext": "month",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "beginning",
              "lerntext": "beginning",
              "de": "Anfang",
              "wieder": true
            },
            {
              "schrift": "moment",
              "lerntext": "moment",
              "de": "Moment",
              "wieder": true
            },
            {
              "schrift": "afternoon",
              "lerntext": "afternoon",
              "de": "Nachmittag",
              "wieder": true
            },
            {
              "schrift": "evening",
              "lerntext": "evening",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "morning",
              "lerntext": "morning",
              "de": "Morgen",
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
              "schrift": "yet",
              "lerntext": "yet",
              "de": "noch nicht",
              "wieder": true
            },
            {
              "schrift": "early",
              "lerntext": "early",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "late",
              "lerntext": "late",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "yesterday",
              "lerntext": "yesterday",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "tomorrow",
              "lerntext": "tomorrow",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "soon",
              "lerntext": "soon",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "always",
              "lerntext": "always",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "never",
              "lerntext": "never",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "often",
              "lerntext": "often",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "sometimes",
              "lerntext": "sometimes",
              "de": "manchmal",
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
              "schrift": "rarely",
              "lerntext": "rarely",
              "de": "selten",
              "wieder": true
            },
            {
              "schrift": "still",
              "lerntext": "still",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "already",
              "lerntext": "already",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "yet",
              "lerntext": "yet",
              "de": "noch nicht",
              "wieder": true
            },
            {
              "schrift": "early",
              "lerntext": "early",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "late",
              "lerntext": "late",
              "de": "spät",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "9.9"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Make a plan for tomorrow.",
        "newFrameWords": [],
        "id": "9.10"
      }
    ]
  },
  {
    "number": 10,
    "title": "I like, I love",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I like [Slot]",
          "lerntext": "I like [Slot]"
        },
        "frameDe": "Ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "music",
              "lerntext": "music",
              "de": "Musik"
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film"
            },
            {
              "schrift": "story",
              "lerntext": "story",
              "de": "Geschichte"
            },
            {
              "schrift": "sun",
              "lerntext": "sun",
              "de": "Sonne"
            },
            {
              "schrift": "rain",
              "lerntext": "rain",
              "de": "Regen"
            },
            {
              "schrift": "time",
              "lerntext": "time",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "life",
              "lerntext": "life",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "end",
              "lerntext": "end",
              "de": "Ende",
              "wieder": true
            },
            {
              "schrift": "week",
              "lerntext": "week",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "minute",
              "lerntext": "minute",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "hour",
              "lerntext": "hour",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "year",
              "lerntext": "year",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "day",
              "lerntext": "day",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "beginning",
              "lerntext": "beginning",
              "de": "Anfang",
              "wieder": true
            },
            {
              "schrift": "night",
              "lerntext": "night",
              "de": "Nacht",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "to love",
            "lerntext": "to love",
            "de": "lieben"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I like [Slot]",
          "lerntext": "I like [Slot]"
        },
        "frameDe": "Ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "snow",
              "lerntext": "snow",
              "de": "Schnee"
            },
            {
              "schrift": "weather",
              "lerntext": "weather",
              "de": "Wetter"
            },
            {
              "schrift": "sea",
              "lerntext": "sea",
              "de": "Meer"
            },
            {
              "schrift": "mountain",
              "lerntext": "mountain",
              "de": "Berg"
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft"
            },
            {
              "schrift": "music",
              "lerntext": "music",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "story",
              "lerntext": "story",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "sun",
              "lerntext": "sun",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "rain",
              "lerntext": "rain",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "time",
              "lerntext": "time",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "life",
              "lerntext": "life",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "end",
              "lerntext": "end",
              "de": "Ende",
              "wieder": true
            },
            {
              "schrift": "week",
              "lerntext": "week",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "month",
              "lerntext": "month",
              "de": "Monat",
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
          "schrift": "she loves [Slot]",
          "lerntext": "she loves [Slot]"
        },
        "frameDe": "Sie liebt [Slot].",
        "pronouns": [
          {
            "schrift": "him",
            "lerntext": "him",
            "de": "ihm"
          },
          {
            "schrift": "her",
            "lerntext": "her",
            "de": "ihr"
          },
          {
            "schrift": "us",
            "lerntext": "us",
            "de": "uns"
          },
          {
            "schrift": "them",
            "lerntext": "them",
            "de": "ihnen"
          },
          {
            "schrift": "it",
            "lerntext": "it",
            "de": "es"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "love",
              "lerntext": "love",
              "de": "Liebe"
            },
            {
              "schrift": "people",
              "lerntext": "people",
              "de": "Leute"
            },
            {
              "schrift": "person",
              "lerntext": "person",
              "de": "Person"
            },
            {
              "schrift": "thing",
              "lerntext": "thing",
              "de": "Ding"
            },
            {
              "schrift": "reason",
              "lerntext": "reason",
              "de": "Grund"
            },
            {
              "schrift": "mountain",
              "lerntext": "mountain",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "snow",
              "lerntext": "snow",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "sea",
              "lerntext": "sea",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "weather",
              "lerntext": "weather",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "story",
              "lerntext": "story",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "minute",
              "lerntext": "minute",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "music",
              "lerntext": "music",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "rain",
              "lerntext": "rain",
              "de": "Regen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is [Slot]",
          "lerntext": "it is [Slot]"
        },
        "frameDe": "Es ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "white",
              "lerntext": "white",
              "de": "weiß"
            },
            {
              "schrift": "black",
              "lerntext": "black",
              "de": "schwarz"
            },
            {
              "schrift": "red",
              "lerntext": "red",
              "de": "rot"
            },
            {
              "schrift": "blue",
              "lerntext": "blue",
              "de": "blau"
            },
            {
              "schrift": "green",
              "lerntext": "green",
              "de": "grün"
            },
            {
              "schrift": "next",
              "lerntext": "next",
              "de": "nächster",
              "wieder": true
            },
            {
              "schrift": "high",
              "lerntext": "high",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "short",
              "lerntext": "short",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "low",
              "lerntext": "low",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "heavy",
              "lerntext": "heavy",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "light",
              "lerntext": "light",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "small",
              "lerntext": "small",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "free",
              "lerntext": "free",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "happy",
              "lerntext": "happy",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung",
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
          "schrift": "it is [Slot]",
          "lerntext": "it is [Slot]"
        },
        "frameDe": "Es ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "yellow",
              "lerntext": "yellow",
              "de": "gelb"
            },
            {
              "schrift": "grey",
              "lerntext": "grey",
              "de": "grau"
            },
            {
              "schrift": "brown",
              "lerntext": "brown",
              "de": "braun"
            },
            {
              "schrift": "clean",
              "lerntext": "clean",
              "de": "sauber"
            },
            {
              "schrift": "dirty",
              "lerntext": "dirty",
              "de": "schmutzig"
            },
            {
              "schrift": "white",
              "lerntext": "white",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "black",
              "lerntext": "black",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "red",
              "lerntext": "red",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "blue",
              "lerntext": "blue",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "green",
              "lerntext": "green",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "next",
              "lerntext": "next",
              "de": "nächster",
              "wieder": true
            },
            {
              "schrift": "high",
              "lerntext": "high",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "short",
              "lerntext": "short",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "kind",
              "lerntext": "kind",
              "de": "freundlich",
              "wieder": true
            },
            {
              "schrift": "safe",
              "lerntext": "safe",
              "de": "sicher",
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
          "schrift": "the food is [Slot]",
          "lerntext": "the food is [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sweet",
              "lerntext": "sweet",
              "de": "süß"
            },
            {
              "schrift": "salty",
              "lerntext": "salty",
              "de": "salzig"
            },
            {
              "schrift": "spicy",
              "lerntext": "spicy",
              "de": "scharf"
            },
            {
              "schrift": "delicious",
              "lerntext": "delicious",
              "de": "lecker"
            },
            {
              "schrift": "fresh",
              "lerntext": "fresh",
              "de": "frisch"
            },
            {
              "schrift": "grey",
              "lerntext": "grey",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "brown",
              "lerntext": "brown",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "yellow",
              "lerntext": "yellow",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "dirty",
              "lerntext": "dirty",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "clean",
              "lerntext": "clean",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "white",
              "lerntext": "white",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "blue",
              "lerntext": "blue",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "green",
              "lerntext": "green",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "red",
              "lerntext": "red",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "black",
              "lerntext": "black",
              "de": "schwarz",
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
          "schrift": "the food is [Slot]",
          "lerntext": "the food is [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hot",
              "lerntext": "hot",
              "de": "heiß"
            },
            {
              "schrift": "warm",
              "lerntext": "warm",
              "de": "warm"
            },
            {
              "schrift": "cold",
              "lerntext": "cold",
              "de": "kalt"
            },
            {
              "schrift": "good",
              "lerntext": "good",
              "de": "gut"
            },
            {
              "schrift": "bad",
              "lerntext": "bad",
              "de": "schlecht"
            },
            {
              "schrift": "sweet",
              "lerntext": "sweet",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "salty",
              "lerntext": "salty",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "spicy",
              "lerntext": "spicy",
              "de": "scharf",
              "wieder": true
            },
            {
              "schrift": "delicious",
              "lerntext": "delicious",
              "de": "lecker",
              "wieder": true
            },
            {
              "schrift": "fresh",
              "lerntext": "fresh",
              "de": "frisch",
              "wieder": true
            },
            {
              "schrift": "grey",
              "lerntext": "grey",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "brown",
              "lerntext": "brown",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "yellow",
              "lerntext": "yellow",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "dirty",
              "lerntext": "dirty",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "clean",
              "lerntext": "clean",
              "de": "sauber",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "that is [Slot]",
          "lerntext": "that is [Slot]"
        },
        "frameDe": "Das ist [Slot].",
        "pronouns": [
          {
            "schrift": "really",
            "lerntext": "really",
            "de": "wirklich"
          },
          {
            "schrift": "maybe",
            "lerntext": "maybe",
            "de": "vielleicht"
          },
          {
            "schrift": "exactly",
            "lerntext": "exactly",
            "de": "genau"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "interesting",
              "lerntext": "interesting",
              "de": "interessant"
            },
            {
              "schrift": "boring",
              "lerntext": "boring",
              "de": "langweilig"
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig"
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich"
            },
            {
              "schrift": "true",
              "lerntext": "true",
              "de": "wahr"
            },
            {
              "schrift": "bad",
              "lerntext": "bad",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "good",
              "lerntext": "good",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "warm",
              "lerntext": "warm",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "hot",
              "lerntext": "hot",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "cold",
              "lerntext": "cold",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "spicy",
              "lerntext": "spicy",
              "de": "scharf",
              "wieder": true
            },
            {
              "schrift": "salty",
              "lerntext": "salty",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "delicious",
              "lerntext": "delicious",
              "de": "lecker",
              "wieder": true
            },
            {
              "schrift": "sweet",
              "lerntext": "sweet",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "fresh",
              "lerntext": "fresh",
              "de": "frisch",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "really",
            "lerntext": "really",
            "de": "wirklich"
          },
          {
            "schrift": "maybe",
            "lerntext": "maybe",
            "de": "vielleicht"
          },
          {
            "schrift": "exactly",
            "lerntext": "exactly",
            "de": "genau"
          },
          {
            "schrift": "almost",
            "lerntext": "almost",
            "de": "fast"
          },
          {
            "schrift": "sure",
            "lerntext": "sure",
            "de": "sicher"
          }
        ],
        "id": "10.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "that is [Slot]",
          "lerntext": "that is [Slot]"
        },
        "frameDe": "Das ist [Slot].",
        "pronouns": [
          {
            "schrift": "really",
            "lerntext": "really",
            "de": "wirklich"
          },
          {
            "schrift": "maybe",
            "lerntext": "maybe",
            "de": "vielleicht"
          },
          {
            "schrift": "exactly",
            "lerntext": "exactly",
            "de": "genau"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "wrong",
              "lerntext": "wrong",
              "de": "falsch"
            },
            {
              "schrift": "right",
              "lerntext": "right",
              "de": "richtig"
            },
            {
              "schrift": "same",
              "lerntext": "same",
              "de": "gleich"
            },
            {
              "schrift": "different",
              "lerntext": "different",
              "de": "verschieden"
            },
            {
              "schrift": "usual",
              "lerntext": "usual",
              "de": "üblich"
            },
            {
              "schrift": "interesting",
              "lerntext": "interesting",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "boring",
              "lerntext": "boring",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich",
              "wieder": true
            },
            {
              "schrift": "true",
              "lerntext": "true",
              "de": "wahr",
              "wieder": true
            },
            {
              "schrift": "bad",
              "lerntext": "bad",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "good",
              "lerntext": "good",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "warm",
              "lerntext": "warm",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "hot",
              "lerntext": "hot",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "cold",
              "lerntext": "cold",
              "de": "kalt",
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
          "schrift": "she loves [Slot]",
          "lerntext": "she loves [Slot]"
        },
        "frameDe": "Sie liebt [Slot].",
        "pronouns": [
          {
            "schrift": "him",
            "lerntext": "him",
            "de": "ihm"
          },
          {
            "schrift": "her",
            "lerntext": "her",
            "de": "ihr"
          },
          {
            "schrift": "us",
            "lerntext": "us",
            "de": "uns"
          },
          {
            "schrift": "them",
            "lerntext": "them",
            "de": "ihnen"
          },
          {
            "schrift": "it",
            "lerntext": "it",
            "de": "es"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "love",
              "lerntext": "love",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "people",
              "lerntext": "people",
              "de": "Leute",
              "wieder": true
            },
            {
              "schrift": "person",
              "lerntext": "person",
              "de": "Person",
              "wieder": true
            },
            {
              "schrift": "thing",
              "lerntext": "thing",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "reason",
              "lerntext": "reason",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "mountain",
              "lerntext": "mountain",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "snow",
              "lerntext": "snow",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "sea",
              "lerntext": "sea",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "weather",
              "lerntext": "weather",
              "de": "Wetter",
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
          "schrift": "that is [Slot]",
          "lerntext": "that is [Slot]"
        },
        "frameDe": "Das ist [Slot].",
        "pronouns": [
          {
            "schrift": "really",
            "lerntext": "really",
            "de": "wirklich"
          },
          {
            "schrift": "maybe",
            "lerntext": "maybe",
            "de": "vielleicht"
          },
          {
            "schrift": "exactly",
            "lerntext": "exactly",
            "de": "genau"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "wrong",
              "lerntext": "wrong",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "right",
              "lerntext": "right",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "same",
              "lerntext": "same",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "different",
              "lerntext": "different",
              "de": "verschieden",
              "wieder": true
            },
            {
              "schrift": "usual",
              "lerntext": "usual",
              "de": "üblich",
              "wieder": true
            },
            {
              "schrift": "interesting",
              "lerntext": "interesting",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "boring",
              "lerntext": "boring",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich",
              "wieder": true
            },
            {
              "schrift": "true",
              "lerntext": "true",
              "de": "wahr",
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
          "schrift": "she loves [Slot]",
          "lerntext": "she loves [Slot]"
        },
        "frameDe": "Sie liebt [Slot].",
        "pronouns": [
          {
            "schrift": "him",
            "lerntext": "him",
            "de": "ihm"
          },
          {
            "schrift": "her",
            "lerntext": "her",
            "de": "ihr"
          },
          {
            "schrift": "us",
            "lerntext": "us",
            "de": "uns"
          },
          {
            "schrift": "them",
            "lerntext": "them",
            "de": "ihnen"
          },
          {
            "schrift": "it",
            "lerntext": "it",
            "de": "es"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "love",
              "lerntext": "love",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "people",
              "lerntext": "people",
              "de": "Leute",
              "wieder": true
            },
            {
              "schrift": "person",
              "lerntext": "person",
              "de": "Person",
              "wieder": true
            },
            {
              "schrift": "thing",
              "lerntext": "thing",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "reason",
              "lerntext": "reason",
              "de": "Grund",
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
          "schrift": "that is [Slot]",
          "lerntext": "that is [Slot]"
        },
        "frameDe": "Das ist [Slot].",
        "pronouns": [
          {
            "schrift": "really",
            "lerntext": "really",
            "de": "wirklich"
          },
          {
            "schrift": "maybe",
            "lerntext": "maybe",
            "de": "vielleicht"
          },
          {
            "schrift": "exactly",
            "lerntext": "exactly",
            "de": "genau"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "wrong",
              "lerntext": "wrong",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "right",
              "lerntext": "right",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "same",
              "lerntext": "same",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "different",
              "lerntext": "different",
              "de": "verschieden",
              "wieder": true
            },
            {
              "schrift": "usual",
              "lerntext": "usual",
              "de": "üblich",
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
        "task": "Say what you like and what you do not like.",
        "newFrameWords": [],
        "id": "10.14"
      }
    ]
  },
  {
    "number": 11,
    "title": "Yesterday and tomorrow",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I was [Slot] yesterday",
          "lerntext": "I was [Slot] yesterday"
        },
        "frameDe": "Ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          },
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          },
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "there",
              "lerntext": "there",
              "de": "dort"
            },
            {
              "schrift": "outside",
              "lerntext": "outside",
              "de": "draußen"
            },
            {
              "schrift": "well",
              "lerntext": "well",
              "de": "gut"
            },
            {
              "schrift": "badly",
              "lerntext": "badly",
              "de": "schlecht"
            },
            {
              "schrift": "slowly",
              "lerntext": "slowly",
              "de": "langsam"
            },
            {
              "schrift": "now",
              "lerntext": "now",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "today",
              "lerntext": "today",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "only",
              "lerntext": "only",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "home",
              "lerntext": "home",
              "de": "nach Hause",
              "wieder": true
            },
            {
              "schrift": "sure",
              "lerntext": "sure",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "inside",
              "lerntext": "inside",
              "de": "drinnen",
              "wieder": true
            },
            {
              "schrift": "almost",
              "lerntext": "almost",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "straight",
              "lerntext": "straight",
              "de": "geradeaus",
              "wieder": true
            },
            {
              "schrift": "again",
              "lerntext": "again",
              "de": "wieder",
              "wieder": true
            },
            {
              "schrift": "little",
              "lerntext": "little",
              "de": "wenig",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "11.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I will [Slot] tomorrow",
          "lerntext": "I will [Slot] tomorrow"
        },
        "frameDe": "Ich werde morgen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "buy",
              "lerntext": "buy",
              "de": "kaufen"
            },
            {
              "schrift": "sell",
              "lerntext": "sell",
              "de": "verkaufen"
            },
            {
              "schrift": "find",
              "lerntext": "find",
              "de": "finden"
            },
            {
              "schrift": "become",
              "lerntext": "become",
              "de": "werden"
            },
            {
              "schrift": "begin",
              "lerntext": "begin",
              "de": "anfangen"
            },
            {
              "schrift": "to love",
              "lerntext": "to love",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "let",
              "lerntext": "let",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "come",
              "lerntext": "come",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "bring",
              "lerntext": "bring",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "drink",
              "lerntext": "drink",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "keep",
              "lerntext": "keep",
              "de": "behalten",
              "wieder": true
            },
            {
              "schrift": "would",
              "lerntext": "would",
              "de": "würde",
              "wieder": true
            },
            {
              "schrift": "start",
              "lerntext": "start",
              "de": "starten",
              "wieder": true
            },
            {
              "schrift": "cook",
              "lerntext": "cook",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "pay",
              "lerntext": "pay",
              "de": "bezahlen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "will",
            "lerntext": "will",
            "de": "werden (Zukunft)"
          }
        ],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I have [Slot] it",
          "lerntext": "I have [Slot] it"
        },
        "frameDe": "Ich habe es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "finished",
              "lerntext": "finished",
              "de": "beenden"
            },
            {
              "schrift": "won",
              "lerntext": "won",
              "de": "gewinnen"
            },
            {
              "schrift": "lost",
              "lerntext": "lost",
              "de": "verlieren"
            },
            {
              "schrift": "ordered",
              "lerntext": "ordered",
              "de": "bestellen"
            },
            {
              "schrift": "reserved",
              "lerntext": "reserved",
              "de": "reservieren"
            },
            {
              "schrift": "found",
              "lerntext": "found",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "bought",
              "lerntext": "bought",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "sold",
              "lerntext": "sold",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "become",
              "lerntext": "become",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "begun",
              "lerntext": "begun",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "loved",
              "lerntext": "loved",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "put",
              "lerntext": "put",
              "de": "legen",
              "wieder": true
            },
            {
              "schrift": "worked",
              "lerntext": "worked",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "told",
              "lerntext": "told",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "stayed",
              "lerntext": "stayed",
              "de": "bleiben",
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
          "schrift": "[Slot] it was good",
          "lerntext": "[Slot] it was good"
        },
        "frameDe": "[Slot] war es gut.",
        "pronouns": [
          {
            "schrift": "finally",
            "lerntext": "finally",
            "de": "endlich"
          },
          {
            "schrift": "probably",
            "lerntext": "probably",
            "de": "wahrscheinlich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "quickly",
              "lerntext": "quickly",
              "de": "schnell"
            },
            {
              "schrift": "again",
              "lerntext": "again",
              "de": "wieder"
            },
            {
              "schrift": "only",
              "lerntext": "only",
              "de": "nur"
            },
            {
              "schrift": "little",
              "lerntext": "little",
              "de": "wenig"
            },
            {
              "schrift": "much",
              "lerntext": "much",
              "de": "viel"
            },
            {
              "schrift": "slowly",
              "lerntext": "slowly",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "badly",
              "lerntext": "badly",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "now",
              "lerntext": "now",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "today",
              "lerntext": "today",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "less",
              "lerntext": "less",
              "de": "weniger",
              "wieder": true
            },
            {
              "schrift": "well",
              "lerntext": "well",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "more",
              "lerntext": "more",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "home",
              "lerntext": "home",
              "de": "nach Hause",
              "wieder": true
            },
            {
              "schrift": "sure",
              "lerntext": "sure",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "inside",
              "lerntext": "inside",
              "de": "drinnen",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "finally",
            "lerntext": "finally",
            "de": "endlich"
          },
          {
            "schrift": "probably",
            "lerntext": "probably",
            "de": "wahrscheinlich"
          },
          {
            "schrift": "hopefully",
            "lerntext": "hopefully",
            "de": "hoffentlich"
          },
          {
            "schrift": "unfortunately",
            "lerntext": "unfortunately",
            "de": "leider"
          },
          {
            "schrift": "even",
            "lerntext": "even",
            "de": "sogar"
          }
        ],
        "id": "11.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I have [Slot] it",
          "lerntext": "I have [Slot] it"
        },
        "frameDe": "Ich habe es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "finished",
              "lerntext": "finished",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "won",
              "lerntext": "won",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "lost",
              "lerntext": "lost",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "ordered",
              "lerntext": "ordered",
              "de": "bestellen",
              "wieder": true
            },
            {
              "schrift": "reserved",
              "lerntext": "reserved",
              "de": "reservieren",
              "wieder": true
            },
            {
              "schrift": "found",
              "lerntext": "found",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "bought",
              "lerntext": "bought",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "sold",
              "lerntext": "sold",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "become",
              "lerntext": "become",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "begun",
              "lerntext": "begun",
              "de": "anfangen",
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
          "schrift": "[Slot] it was good",
          "lerntext": "[Slot] it was good"
        },
        "frameDe": "[Slot] war es gut.",
        "pronouns": [
          {
            "schrift": "finally",
            "lerntext": "finally",
            "de": "endlich"
          },
          {
            "schrift": "probably",
            "lerntext": "probably",
            "de": "wahrscheinlich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "quickly",
              "lerntext": "quickly",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "slowly",
              "lerntext": "slowly",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "badly",
              "lerntext": "badly",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "now",
              "lerntext": "now",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "today",
              "lerntext": "today",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "less",
              "lerntext": "less",
              "de": "weniger",
              "wieder": true
            },
            {
              "schrift": "well",
              "lerntext": "well",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "more",
              "lerntext": "more",
              "de": "mehr",
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
          "schrift": "I have [Slot] it",
          "lerntext": "I have [Slot] it"
        },
        "frameDe": "Ich habe es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "finished",
              "lerntext": "finished",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "won",
              "lerntext": "won",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "lost",
              "lerntext": "lost",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "ordered",
              "lerntext": "ordered",
              "de": "bestellen",
              "wieder": true
            },
            {
              "schrift": "reserved",
              "lerntext": "reserved",
              "de": "reservieren",
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
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Tell what you did yesterday.",
        "newFrameWords": [],
        "id": "11.8"
      }
    ]
  },
  {
    "number": 12,
    "title": "Putting sentences together",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I am tired [Slot] I work",
          "lerntext": "I am tired [Slot] I work"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "and",
            "lerntext": "and",
            "de": "und"
          },
          {
            "schrift": "but",
            "lerntext": "but",
            "de": "aber"
          },
          {
            "schrift": "or",
            "lerntext": "or",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "because",
              "lerntext": "because",
              "de": "weil"
            },
            {
              "schrift": "if",
              "lerntext": "if",
              "de": "wenn"
            },
            {
              "schrift": "while",
              "lerntext": "while",
              "de": "während"
            },
            {
              "schrift": "although",
              "lerntext": "although",
              "de": "obwohl"
            },
            {
              "schrift": "since",
              "lerntext": "since",
              "de": "seit"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "and",
            "lerntext": "and",
            "de": "und"
          },
          {
            "schrift": "but",
            "lerntext": "but",
            "de": "aber"
          },
          {
            "schrift": "or",
            "lerntext": "or",
            "de": "oder"
          },
          {
            "schrift": "so",
            "lerntext": "so",
            "de": "also"
          },
          {
            "schrift": "that",
            "lerntext": "that",
            "de": "dass"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I want to [Slot] but I cannot",
          "lerntext": "I want to [Slot] but I cannot"
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "learn",
              "lerntext": "learn",
              "de": "lernen"
            },
            {
              "schrift": "study",
              "lerntext": "study",
              "de": "studieren"
            },
            {
              "schrift": "change",
              "lerntext": "change",
              "de": "ändern"
            },
            {
              "schrift": "continue",
              "lerntext": "continue",
              "de": "fortsetzen"
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen"
            },
            {
              "schrift": "will",
              "lerntext": "will",
              "de": "werden (Zukunft)",
              "wieder": true
            },
            {
              "schrift": "find",
              "lerntext": "find",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "order",
              "lerntext": "order",
              "de": "bestellen",
              "wieder": true
            },
            {
              "schrift": "finish",
              "lerntext": "finish",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "reserve",
              "lerntext": "reserve",
              "de": "reservieren",
              "wieder": true
            },
            {
              "schrift": "arrive",
              "lerntext": "arrive",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "meet",
              "lerntext": "meet",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "show",
              "lerntext": "show",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "turn",
              "lerntext": "turn",
              "de": "drehen",
              "wieder": true
            },
            {
              "schrift": "win",
              "lerntext": "win",
              "de": "gewinnen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "12.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is very [Slot]",
          "lerntext": "it is very [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "than",
            "lerntext": "than",
            "de": "als (Vergleich)"
          },
          {
            "schrift": "as",
            "lerntext": "as",
            "de": "als"
          },
          {
            "schrift": "however",
            "lerntext": "however",
            "de": "jedoch"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "easy",
              "lerntext": "easy",
              "de": "einfach"
            },
            {
              "schrift": "difficult",
              "lerntext": "difficult",
              "de": "schwierig"
            },
            {
              "schrift": "fast",
              "lerntext": "fast",
              "de": "schnell"
            },
            {
              "schrift": "slow",
              "lerntext": "slow",
              "de": "langsam"
            },
            {
              "schrift": "tall",
              "lerntext": "tall",
              "de": "groß (Person)"
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich",
              "wieder": true
            },
            {
              "schrift": "grey",
              "lerntext": "grey",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "bad",
              "lerntext": "bad",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "spicy",
              "lerntext": "spicy",
              "de": "scharf",
              "wieder": true
            },
            {
              "schrift": "white",
              "lerntext": "white",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "salty",
              "lerntext": "salty",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "warm",
              "lerntext": "warm",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "next",
              "lerntext": "next",
              "de": "nächster",
              "wieder": true
            },
            {
              "schrift": "delicious",
              "lerntext": "delicious",
              "de": "lecker",
              "wieder": true
            },
            {
              "schrift": "hot",
              "lerntext": "hot",
              "de": "heiß",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "than",
            "lerntext": "than",
            "de": "als (Vergleich)"
          },
          {
            "schrift": "as",
            "lerntext": "as",
            "de": "als"
          },
          {
            "schrift": "however",
            "lerntext": "however",
            "de": "jedoch"
          },
          {
            "schrift": "therefore",
            "lerntext": "therefore",
            "de": "deshalb"
          },
          {
            "schrift": "unless",
            "lerntext": "unless",
            "de": "es sei denn"
          }
        ],
        "id": "12.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] of us",
          "lerntext": "[Slot] of us"
        },
        "frameDe": "[Slot] von uns.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "both",
              "lerntext": "both",
              "de": "beide"
            },
            {
              "schrift": "each",
              "lerntext": "each",
              "de": "jeder einzelne"
            },
            {
              "schrift": "few",
              "lerntext": "few",
              "de": "wenige"
            },
            {
              "schrift": "another",
              "lerntext": "another",
              "de": "ein anderer"
            },
            {
              "schrift": "nobody",
              "lerntext": "nobody",
              "de": "niemand"
            },
            {
              "schrift": "them",
              "lerntext": "them",
              "de": "ihnen",
              "wieder": true
            },
            {
              "schrift": "him",
              "lerntext": "him",
              "de": "ihm",
              "wieder": true
            },
            {
              "schrift": "who",
              "lerntext": "who",
              "de": "wer",
              "wieder": true
            },
            {
              "schrift": "which",
              "lerntext": "which",
              "de": "welcher",
              "wieder": true
            },
            {
              "schrift": "my",
              "lerntext": "my",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "our",
              "lerntext": "our",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "your",
              "lerntext": "your",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "their",
              "lerntext": "their",
              "de": "ihr (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mir",
              "wieder": true
            },
            {
              "schrift": "its",
              "lerntext": "its",
              "de": "sein (sächlich)",
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
          "schrift": "[Slot] of us",
          "lerntext": "[Slot] of us"
        },
        "frameDe": "[Slot] von uns.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "them",
              "lerntext": "them",
              "de": "ihnen",
              "wieder": true
            },
            {
              "schrift": "him",
              "lerntext": "him",
              "de": "ihm",
              "wieder": true
            },
            {
              "schrift": "both",
              "lerntext": "both",
              "de": "beide",
              "wieder": true
            },
            {
              "schrift": "each",
              "lerntext": "each",
              "de": "jeder einzelne",
              "wieder": true
            },
            {
              "schrift": "few",
              "lerntext": "few",
              "de": "wenige",
              "wieder": true
            },
            {
              "schrift": "another",
              "lerntext": "another",
              "de": "ein anderer",
              "wieder": true
            },
            {
              "schrift": "nobody",
              "lerntext": "nobody",
              "de": "niemand",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I want to [Slot] but I cannot",
          "lerntext": "I want to [Slot] but I cannot"
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "learn",
              "lerntext": "learn",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "study",
              "lerntext": "study",
              "de": "studieren",
              "wieder": true
            },
            {
              "schrift": "change",
              "lerntext": "change",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "continue",
              "lerntext": "continue",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "will",
              "lerntext": "will",
              "de": "werden (Zukunft)",
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
          "schrift": "[Slot] of us",
          "lerntext": "[Slot] of us"
        },
        "frameDe": "[Slot] von uns.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "them",
              "lerntext": "them",
              "de": "ihnen",
              "wieder": true
            },
            {
              "schrift": "him",
              "lerntext": "him",
              "de": "ihm",
              "wieder": true
            },
            {
              "schrift": "both",
              "lerntext": "both",
              "de": "beide",
              "wieder": true
            },
            {
              "schrift": "each",
              "lerntext": "each",
              "de": "jeder einzelne",
              "wieder": true
            },
            {
              "schrift": "few",
              "lerntext": "few",
              "de": "wenige",
              "wieder": true
            },
            {
              "schrift": "another",
              "lerntext": "another",
              "de": "ein anderer",
              "wieder": true
            },
            {
              "schrift": "nobody",
              "lerntext": "nobody",
              "de": "niemand",
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
          "schrift": "I am tired [Slot] I work",
          "lerntext": "I am tired [Slot] I work"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "and",
            "lerntext": "and",
            "de": "und"
          },
          {
            "schrift": "but",
            "lerntext": "but",
            "de": "aber"
          },
          {
            "schrift": "or",
            "lerntext": "or",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "because",
              "lerntext": "because",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "if",
              "lerntext": "if",
              "de": "wenn",
              "wieder": true
            },
            {
              "schrift": "while",
              "lerntext": "while",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "although",
              "lerntext": "although",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "since",
              "lerntext": "since",
              "de": "seit",
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
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Tell something about yourself in three connected sentences.",
        "newFrameWords": [],
        "id": "12.9"
      }
    ]
  },
  {
    "number": 13,
    "title": "Body and health",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "my [Slot] hurts",
          "lerntext": "my [Slot] hurts"
        },
        "frameDe": "Mein [Slot] tut weh.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "head",
              "lerntext": "head",
              "de": "Kopf"
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand"
            },
            {
              "schrift": "foot",
              "lerntext": "foot",
              "de": "Fuß"
            },
            {
              "schrift": "eye",
              "lerntext": "eye",
              "de": "Auge"
            },
            {
              "schrift": "mouth",
              "lerntext": "mouth",
              "de": "Mund"
            },
            {
              "schrift": "hour",
              "lerntext": "hour",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "year",
              "lerntext": "year",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "sun",
              "lerntext": "sun",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "time",
              "lerntext": "time",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "day",
              "lerntext": "day",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "people",
              "lerntext": "people",
              "de": "Leute",
              "wieder": true
            },
            {
              "schrift": "life",
              "lerntext": "life",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "moment",
              "lerntext": "moment",
              "de": "Moment",
              "wieder": true
            },
            {
              "schrift": "mountain",
              "lerntext": "mountain",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "love",
              "lerntext": "love",
              "de": "Liebe",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "13.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "my [Slot] hurts",
          "lerntext": "my [Slot] hurts"
        },
        "frameDe": "Mein [Slot] tut weh.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm"
            },
            {
              "schrift": "leg",
              "lerntext": "leg",
              "de": "Bein"
            },
            {
              "schrift": "hair",
              "lerntext": "hair",
              "de": "Haare"
            },
            {
              "schrift": "body",
              "lerntext": "body",
              "de": "Körper"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Schmerz"
            },
            {
              "schrift": "head",
              "lerntext": "head",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "foot",
              "lerntext": "foot",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "mouth",
              "lerntext": "mouth",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "eye",
              "lerntext": "eye",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "afternoon",
              "lerntext": "afternoon",
              "de": "Nachmittag",
              "wieder": true
            },
            {
              "schrift": "evening",
              "lerntext": "evening",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "bus",
              "lerntext": "bus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "end",
              "lerntext": "end",
              "de": "Ende",
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
          "schrift": "it is for [Slot]",
          "lerntext": "it is for [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "myself",
              "lerntext": "myself",
              "de": "mich selbst"
            },
            {
              "schrift": "yourself",
              "lerntext": "yourself",
              "de": "dich selbst"
            },
            {
              "schrift": "himself",
              "lerntext": "himself",
              "de": "sich selbst"
            },
            {
              "schrift": "each other",
              "lerntext": "each other",
              "de": "einander"
            },
            {
              "schrift": "everyone",
              "lerntext": "everyone",
              "de": "jeder"
            },
            {
              "schrift": "us",
              "lerntext": "us",
              "de": "uns",
              "wieder": true
            },
            {
              "schrift": "them",
              "lerntext": "them",
              "de": "ihnen",
              "wieder": true
            },
            {
              "schrift": "him",
              "lerntext": "him",
              "de": "ihm",
              "wieder": true
            },
            {
              "schrift": "both",
              "lerntext": "both",
              "de": "beide",
              "wieder": true
            },
            {
              "schrift": "few",
              "lerntext": "few",
              "de": "wenige",
              "wieder": true
            },
            {
              "schrift": "his",
              "lerntext": "his",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "something",
              "lerntext": "something",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "each",
              "lerntext": "each",
              "de": "jeder einzelne",
              "wieder": true
            },
            {
              "schrift": "who",
              "lerntext": "who",
              "de": "wer",
              "wieder": true
            },
            {
              "schrift": "someone",
              "lerntext": "someone",
              "de": "jemand",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "feel",
            "lerntext": "feel",
            "de": "fühlen"
          }
        ],
        "id": "13.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "my [Slot] hurts",
          "lerntext": "my [Slot] hurts"
        },
        "frameDe": "Mein [Slot] tut weh.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "leg",
              "lerntext": "leg",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "hair",
              "lerntext": "hair",
              "de": "Haare",
              "wieder": true
            },
            {
              "schrift": "body",
              "lerntext": "body",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "head",
              "lerntext": "head",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "foot",
              "lerntext": "foot",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "mouth",
              "lerntext": "mouth",
              "de": "Mund",
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
          "schrift": "it is for [Slot]",
          "lerntext": "it is for [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "myself",
              "lerntext": "myself",
              "de": "mich selbst",
              "wieder": true
            },
            {
              "schrift": "yourself",
              "lerntext": "yourself",
              "de": "dich selbst",
              "wieder": true
            },
            {
              "schrift": "himself",
              "lerntext": "himself",
              "de": "sich selbst",
              "wieder": true
            },
            {
              "schrift": "each other",
              "lerntext": "each other",
              "de": "einander",
              "wieder": true
            },
            {
              "schrift": "everyone",
              "lerntext": "everyone",
              "de": "jeder",
              "wieder": true
            },
            {
              "schrift": "us",
              "lerntext": "us",
              "de": "uns",
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
        "kind": "frame",
        "frame": {
          "schrift": "my [Slot] hurts",
          "lerntext": "my [Slot] hurts"
        },
        "frameDe": "Mein [Slot] tut weh.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "leg",
              "lerntext": "leg",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "hair",
              "lerntext": "hair",
              "de": "Haare",
              "wieder": true
            },
            {
              "schrift": "body",
              "lerntext": "body",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Schmerz",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "13.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is for [Slot]",
          "lerntext": "it is for [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "myself",
              "lerntext": "myself",
              "de": "mich selbst",
              "wieder": true
            },
            {
              "schrift": "yourself",
              "lerntext": "yourself",
              "de": "dich selbst",
              "wieder": true
            },
            {
              "schrift": "himself",
              "lerntext": "himself",
              "de": "sich selbst",
              "wieder": true
            },
            {
              "schrift": "each other",
              "lerntext": "each other",
              "de": "einander",
              "wieder": true
            },
            {
              "schrift": "everyone",
              "lerntext": "everyone",
              "de": "jeder",
              "wieder": true
            },
            {
              "schrift": "us",
              "lerntext": "us",
              "de": "uns",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "13.7"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Tell a doctor what hurts.",
        "newFrameWords": [],
        "id": "13.8"
      }
    ]
  },
  {
    "number": 14,
    "title": "Clothes, work and people",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I buy a [Slot]",
          "lerntext": "I buy a [Slot]"
        },
        "frameDe": "Ich kaufe eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "clothes",
              "lerntext": "clothes",
              "de": "Kleidung"
            },
            {
              "schrift": "language",
              "lerntext": "language",
              "de": "Sprache"
            },
            {
              "schrift": "police",
              "lerntext": "police",
              "de": "Polizei"
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "week",
              "lerntext": "week",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "story",
              "lerntext": "story",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "night",
              "lerntext": "night",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "minute",
              "lerntext": "minute",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "person",
              "lerntext": "person",
              "de": "Person",
              "wieder": true
            },
            {
              "schrift": "music",
              "lerntext": "music",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "hour",
              "lerntext": "hour",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "time",
              "lerntext": "time",
              "de": "Zeit",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "14.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I buy a [Slot]",
          "lerntext": "I buy a [Slot]"
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "shoe",
              "lerntext": "shoe",
              "de": "Schuh"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "mouth",
              "lerntext": "mouth",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "beginning",
              "lerntext": "beginning",
              "de": "Anfang",
              "wieder": true
            },
            {
              "schrift": "head",
              "lerntext": "head",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "morning",
              "lerntext": "morning",
              "de": "Morgen",
              "wieder": true
            },
            {
              "schrift": "body",
              "lerntext": "body",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "month",
              "lerntext": "month",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "foot",
              "lerntext": "foot",
              "de": "Fuß",
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
          "schrift": "I buy a [Slot]",
          "lerntext": "I buy a [Slot]"
        },
        "frameDe": "Ich kaufe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "word",
              "lerntext": "word",
              "de": "Wort"
            },
            {
              "schrift": "leg",
              "lerntext": "leg",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "thing",
              "lerntext": "thing",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "year",
              "lerntext": "year",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "weather",
              "lerntext": "weather",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "life",
              "lerntext": "life",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "end",
              "lerntext": "end",
              "de": "Ende",
              "wieder": true
            },
            {
              "schrift": "money",
              "lerntext": "money",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "meat",
              "lerntext": "meat",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "country",
              "lerntext": "country",
              "de": "Land",
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
          "schrift": "I know the [Slot]",
          "lerntext": "I know the [Slot]"
        },
        "frameDe": "Ich kenne die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "kitchen",
              "lerntext": "kitchen",
              "de": "Küche"
            },
            {
              "schrift": "clothes",
              "lerntext": "clothes",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "police",
              "lerntext": "police",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "language",
              "lerntext": "language",
              "de": "Sprache",
              "wieder": true
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "love",
              "lerntext": "love",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "week",
              "lerntext": "week",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "story",
              "lerntext": "story",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "city",
              "lerntext": "city",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "wife",
              "lerntext": "wife",
              "de": "Ehefrau",
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
          "schrift": "I know the [Slot]",
          "lerntext": "I know the [Slot]"
        },
        "frameDe": "Ich kenne den [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "customer",
              "lerntext": "customer",
              "de": "Kunde"
            },
            {
              "schrift": "colleague",
              "lerntext": "colleague",
              "de": "Kollege"
            },
            {
              "schrift": "shoe",
              "lerntext": "shoe",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "reason",
              "lerntext": "reason",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "day",
              "lerntext": "day",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "mouth",
              "lerntext": "mouth",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "moment",
              "lerntext": "moment",
              "de": "Moment",
              "wieder": true
            },
            {
              "schrift": "afternoon",
              "lerntext": "afternoon",
              "de": "Nachmittag",
              "wieder": true
            },
            {
              "schrift": "evening",
              "lerntext": "evening",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "bus",
              "lerntext": "bus",
              "de": "Bus",
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
          "schrift": "I can [Slot] it",
          "lerntext": "I can [Slot] it"
        },
        "frameDe": "Ich kann es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "teach",
              "lerntext": "teach",
              "de": "unterrichten"
            },
            {
              "schrift": "send",
              "lerntext": "send",
              "de": "senden"
            },
            {
              "schrift": "wear",
              "lerntext": "wear",
              "de": "tragen (Kleidung)"
            },
            {
              "schrift": "feel",
              "lerntext": "feel",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "change",
              "lerntext": "change",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "learn",
              "lerntext": "learn",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "continue",
              "lerntext": "continue",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "study",
              "lerntext": "study",
              "de": "studieren",
              "wieder": true
            },
            {
              "schrift": "will",
              "lerntext": "will",
              "de": "werden (Zukunft)",
              "wieder": true
            },
            {
              "schrift": "to love",
              "lerntext": "to love",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "lose",
              "lerntext": "lose",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "sell",
              "lerntext": "sell",
              "de": "verkaufen",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "14.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "he is [Slot]",
          "lerntext": "he is [Slot]"
        },
        "frameDe": "Er ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "English",
              "lerntext": "English",
              "de": "englisch"
            },
            {
              "schrift": "German",
              "lerntext": "German",
              "de": "deutsch"
            },
            {
              "schrift": "foreign",
              "lerntext": "foreign",
              "de": "ausländisch"
            },
            {
              "schrift": "lovely",
              "lerntext": "lovely",
              "de": "reizend"
            },
            {
              "schrift": "fast",
              "lerntext": "fast",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "slow",
              "lerntext": "slow",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "tall",
              "lerntext": "tall",
              "de": "groß (Person)",
              "wieder": true
            },
            {
              "schrift": "easy",
              "lerntext": "easy",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "difficult",
              "lerntext": "difficult",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "sweet",
              "lerntext": "sweet",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "blue",
              "lerntext": "blue",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "wrong",
              "lerntext": "wrong",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "brown",
              "lerntext": "brown",
              "de": "braun",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "14.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "he is [Slot]",
          "lerntext": "he is [Slot]"
        },
        "frameDe": "Er ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "half",
              "lerntext": "half",
              "de": "halb"
            },
            {
              "schrift": "last",
              "lerntext": "last",
              "de": "letzter",
              "wieder": true
            },
            {
              "schrift": "first",
              "lerntext": "first",
              "de": "erster",
              "wieder": true
            },
            {
              "schrift": "second",
              "lerntext": "second",
              "de": "zweiter",
              "wieder": true
            },
            {
              "schrift": "third",
              "lerntext": "third",
              "de": "dritter",
              "wieder": true
            },
            {
              "schrift": "sixty",
              "lerntext": "sixty",
              "de": "sechzig",
              "wieder": true
            },
            {
              "schrift": "ninety",
              "lerntext": "ninety",
              "de": "neunzig",
              "wieder": true
            },
            {
              "schrift": "seventy",
              "lerntext": "seventy",
              "de": "siebzig",
              "wieder": true
            },
            {
              "schrift": "forty",
              "lerntext": "forty",
              "de": "vierzig",
              "wieder": true
            },
            {
              "schrift": "fifty",
              "lerntext": "fifty",
              "de": "fünfzig",
              "wieder": true
            },
            {
              "schrift": "thousand",
              "lerntext": "thousand",
              "de": "tausend",
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
          "schrift": "we need a [Slot]",
          "lerntext": "we need a [Slot]"
        },
        "frameDe": "Wir brauchen ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sign",
              "lerntext": "sign",
              "de": "unterschreiben"
            },
            {
              "schrift": "rent",
              "lerntext": "rent",
              "de": "mieten"
            },
            {
              "schrift": "borrow",
              "lerntext": "borrow",
              "de": "sich leihen"
            },
            {
              "schrift": "teach",
              "lerntext": "teach",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "feel",
              "lerntext": "feel",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "wear",
              "lerntext": "wear",
              "de": "tragen (Kleidung)",
              "wieder": true
            },
            {
              "schrift": "send",
              "lerntext": "send",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "live",
              "lerntext": "live",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "change",
              "lerntext": "change",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "learn",
              "lerntext": "learn",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "become",
              "lerntext": "become",
              "de": "werden",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "14.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "we need a [Slot]",
          "lerntext": "we need a [Slot]"
        },
        "frameDe": "Wir brauchen ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pair",
              "lerntext": "pair",
              "de": "Paar"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "we need a [Slot]",
          "lerntext": "we need a [Slot]"
        },
        "frameDe": "Wir brauchen ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "double",
              "lerntext": "double",
              "de": "doppelt"
            },
            {
              "schrift": "pair",
              "lerntext": "pair",
              "de": "Paar",
              "wieder": true
            },
            {
              "schrift": "half",
              "lerntext": "half",
              "de": "halb",
              "wieder": true
            },
            {
              "schrift": "last",
              "lerntext": "last",
              "de": "letzter",
              "wieder": true
            },
            {
              "schrift": "first",
              "lerntext": "first",
              "de": "erster",
              "wieder": true
            },
            {
              "schrift": "second",
              "lerntext": "second",
              "de": "zweiter",
              "wieder": true
            },
            {
              "schrift": "third",
              "lerntext": "third",
              "de": "dritter",
              "wieder": true
            },
            {
              "schrift": "thirty",
              "lerntext": "thirty",
              "de": "dreissig",
              "wieder": true
            },
            {
              "schrift": "hundred",
              "lerntext": "hundred",
              "de": "hundert",
              "wieder": true
            },
            {
              "schrift": "eighty",
              "lerntext": "eighty",
              "de": "achtzig",
              "wieder": true
            },
            {
              "schrift": "million",
              "lerntext": "million",
              "de": "Million",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.11"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "he is [Slot]",
          "lerntext": "he is [Slot]"
        },
        "frameDe": "Er ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "English",
              "lerntext": "English",
              "de": "englisch",
              "wieder": true
            },
            {
              "schrift": "German",
              "lerntext": "German",
              "de": "deutsch",
              "wieder": true
            },
            {
              "schrift": "foreign",
              "lerntext": "foreign",
              "de": "ausländisch",
              "wieder": true
            },
            {
              "schrift": "lovely",
              "lerntext": "lovely",
              "de": "reizend",
              "wieder": true
            },
            {
              "schrift": "fast",
              "lerntext": "fast",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "slow",
              "lerntext": "slow",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "tall",
              "lerntext": "tall",
              "de": "groß (Person)",
              "wieder": true
            },
            {
              "schrift": "easy",
              "lerntext": "easy",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "difficult",
              "lerntext": "difficult",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "half",
              "lerntext": "half",
              "de": "halb",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "we need a [Slot]",
          "lerntext": "we need a [Slot]"
        },
        "frameDe": "Wir brauchen ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sign",
              "lerntext": "sign",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "rent",
              "lerntext": "rent",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "borrow",
              "lerntext": "borrow",
              "de": "sich leihen",
              "wieder": true
            },
            {
              "schrift": "double",
              "lerntext": "double",
              "de": "doppelt",
              "wieder": true
            },
            {
              "schrift": "teach",
              "lerntext": "teach",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "feel",
              "lerntext": "feel",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "wear",
              "lerntext": "wear",
              "de": "tragen (Kleidung)",
              "wieder": true
            },
            {
              "schrift": "send",
              "lerntext": "send",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "pair",
              "lerntext": "pair",
              "de": "Paar",
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
          "schrift": "I know the [Slot]",
          "lerntext": "I know the [Slot]"
        },
        "frameDe": "Ich kenne die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "kitchen",
              "lerntext": "kitchen",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "clothes",
              "lerntext": "clothes",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "police",
              "lerntext": "police",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "language",
              "lerntext": "language",
              "de": "Sprache",
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
          "schrift": "he is [Slot]",
          "lerntext": "he is [Slot]"
        },
        "frameDe": "Er ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "English",
              "lerntext": "English",
              "de": "englisch",
              "wieder": true
            },
            {
              "schrift": "German",
              "lerntext": "German",
              "de": "deutsch",
              "wieder": true
            },
            {
              "schrift": "foreign",
              "lerntext": "foreign",
              "de": "ausländisch",
              "wieder": true
            },
            {
              "schrift": "lovely",
              "lerntext": "lovely",
              "de": "reizend",
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
        "task": "Describe what you are wearing and what you do.",
        "newFrameWords": [],
        "id": "14.16"
      }
    ]
  },
  {
    "number": 15,
    "title": "Everyday actions",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I [Slot] to you",
          "lerntext": "I [Slot] to you"
        },
        "frameDe": "Ich [Slot] dir.",
        "pronouns": [
          {
            "schrift": "mine",
            "lerntext": "mine",
            "de": "meiner"
          },
          {
            "schrift": "yours",
            "lerntext": "yours",
            "de": "deiner"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen"
            },
            {
              "schrift": "talk",
              "lerntext": "talk",
              "de": "reden"
            },
            {
              "schrift": "listen",
              "lerntext": "listen",
              "de": "zuhören"
            },
            {
              "schrift": "thank",
              "lerntext": "thank",
              "de": "danken"
            },
            {
              "schrift": "smile",
              "lerntext": "smile",
              "de": "lächeln"
            },
            {
              "schrift": "borrow",
              "lerntext": "borrow",
              "de": "sich leihen",
              "wieder": true
            },
            {
              "schrift": "rent",
              "lerntext": "rent",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "sign",
              "lerntext": "sign",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "teach",
              "lerntext": "teach",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "feel",
              "lerntext": "feel",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "wear",
              "lerntext": "wear",
              "de": "tragen (Kleidung)",
              "wieder": true
            },
            {
              "schrift": "continue",
              "lerntext": "continue",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "travel",
              "lerntext": "travel",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "send",
              "lerntext": "send",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "get",
              "lerntext": "get",
              "de": "bekommen",
              "wieder": true
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
          "schrift": "I [Slot] the door",
          "lerntext": "I [Slot] the door"
        },
        "frameDe": "Ich [Slot] die Tür.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "open",
              "lerntext": "open",
              "de": "öffnen"
            },
            {
              "schrift": "close",
              "lerntext": "close",
              "de": "schließen"
            },
            {
              "schrift": "use",
              "lerntext": "use",
              "de": "benutzen"
            },
            {
              "schrift": "make",
              "lerntext": "make",
              "de": "machen"
            },
            {
              "schrift": "choose",
              "lerntext": "choose",
              "de": "wählen"
            },
            {
              "schrift": "smile",
              "lerntext": "smile",
              "de": "lächeln",
              "wieder": true
            },
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "thank",
              "lerntext": "thank",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "talk",
              "lerntext": "talk",
              "de": "reden",
              "wieder": true
            },
            {
              "schrift": "listen",
              "lerntext": "listen",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "borrow",
              "lerntext": "borrow",
              "de": "sich leihen",
              "wieder": true
            },
            {
              "schrift": "rent",
              "lerntext": "rent",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "sign",
              "lerntext": "sign",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "begin",
              "lerntext": "begin",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "study",
              "lerntext": "study",
              "de": "studieren",
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
          "schrift": "I [Slot] here",
          "lerntext": "I [Slot] here"
        },
        "frameDe": "Ich [Slot] hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "stand",
              "lerntext": "stand",
              "de": "stehen"
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen"
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen"
            },
            {
              "schrift": "watch",
              "lerntext": "watch",
              "de": "ansehen"
            },
            {
              "schrift": "enjoy",
              "lerntext": "enjoy",
              "de": "genießen"
            },
            {
              "schrift": "choose",
              "lerntext": "choose",
              "de": "wählen",
              "wieder": true
            },
            {
              "schrift": "use",
              "lerntext": "use",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "close",
              "lerntext": "close",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "make",
              "lerntext": "make",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "open",
              "lerntext": "open",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "smile",
              "lerntext": "smile",
              "de": "lächeln",
              "wieder": true
            },
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "thank",
              "lerntext": "thank",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "talk",
              "lerntext": "talk",
              "de": "reden",
              "wieder": true
            },
            {
              "schrift": "listen",
              "lerntext": "listen",
              "de": "zuhören",
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
          "schrift": "I need [Slot]",
          "lerntext": "I need [Slot]"
        },
        "frameDe": "Ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "why",
            "lerntext": "why",
            "de": "warum"
          },
          {
            "schrift": "whether",
            "lerntext": "whether",
            "de": "ob"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "to be called",
              "lerntext": "to be called",
              "de": "heißen"
            },
            {
              "schrift": "to answer",
              "lerntext": "to answer",
              "de": "antworten"
            },
            {
              "schrift": "watch",
              "lerntext": "watch",
              "de": "ansehen",
              "wieder": true
            },
            {
              "schrift": "enjoy",
              "lerntext": "enjoy",
              "de": "genießen",
              "wieder": true
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "stand",
              "lerntext": "stand",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "choose",
              "lerntext": "choose",
              "de": "wählen",
              "wieder": true
            },
            {
              "schrift": "use",
              "lerntext": "use",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "close",
              "lerntext": "close",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "make",
              "lerntext": "make",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "open",
              "lerntext": "open",
              "de": "öffnen",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "why",
            "lerntext": "why",
            "de": "warum"
          },
          {
            "schrift": "whether",
            "lerntext": "whether",
            "de": "ob"
          },
          {
            "schrift": "without",
            "lerntext": "without",
            "de": "ohne"
          }
        ],
        "id": "15.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I want to [Slot] today",
          "lerntext": "I want to [Slot] today"
        },
        "frameDe": "Ich will heute [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "marry",
              "lerntext": "marry",
              "de": "heiraten"
            },
            {
              "schrift": "tidy",
              "lerntext": "tidy",
              "de": "aufräumen"
            },
            {
              "schrift": "to answer",
              "lerntext": "to answer",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "to be called",
              "lerntext": "to be called",
              "de": "heißen",
              "wieder": true
            },
            {
              "schrift": "watch",
              "lerntext": "watch",
              "de": "ansehen",
              "wieder": true
            },
            {
              "schrift": "enjoy",
              "lerntext": "enjoy",
              "de": "genießen",
              "wieder": true
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "stand",
              "lerntext": "stand",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "smile",
              "lerntext": "smile",
              "de": "lächeln",
              "wieder": true
            },
            {
              "schrift": "choose",
              "lerntext": "choose",
              "de": "wählen",
              "wieder": true
            },
            {
              "schrift": "use",
              "lerntext": "use",
              "de": "benutzen",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "15.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it can [Slot]",
          "lerntext": "it can [Slot]"
        },
        "frameDe": "Es kann [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cost",
              "lerntext": "cost",
              "de": "kosten"
            },
            {
              "schrift": "happen",
              "lerntext": "happen",
              "de": "geschehen"
            },
            {
              "schrift": "marry",
              "lerntext": "marry",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "tidy",
              "lerntext": "tidy",
              "de": "aufräumen",
              "wieder": true
            },
            {
              "schrift": "to answer",
              "lerntext": "to answer",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "to be called",
              "lerntext": "to be called",
              "de": "heißen",
              "wieder": true
            },
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "watch",
              "lerntext": "watch",
              "de": "ansehen",
              "wieder": true
            },
            {
              "schrift": "thank",
              "lerntext": "thank",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "enjoy",
              "lerntext": "enjoy",
              "de": "genießen",
              "wieder": true
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "15.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is [Slot]",
          "lerntext": "it is [Slot]"
        },
        "frameDe": "Es ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "new",
              "lerntext": "new",
              "de": "neu"
            },
            {
              "schrift": "finished",
              "lerntext": "finished",
              "de": "fertig"
            },
            {
              "schrift": "left",
              "lerntext": "left",
              "de": "links"
            },
            {
              "schrift": "black",
              "lerntext": "black",
              "de": "schwarz"
            },
            {
              "schrift": "white",
              "lerntext": "white",
              "de": "weiß"
            },
            {
              "schrift": "German",
              "lerntext": "German",
              "de": "deutsch",
              "wieder": true
            },
            {
              "schrift": "lovely",
              "lerntext": "lovely",
              "de": "reizend",
              "wieder": true
            },
            {
              "schrift": "fast",
              "lerntext": "fast",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "slow",
              "lerntext": "slow",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "yellow",
              "lerntext": "yellow",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "low",
              "lerntext": "low",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "same",
              "lerntext": "same",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "tall",
              "lerntext": "tall",
              "de": "groß (Person)",
              "wieder": true
            },
            {
              "schrift": "heavy",
              "lerntext": "heavy",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "foreign",
              "lerntext": "foreign",
              "de": "ausländisch",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "15.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it can [Slot]",
          "lerntext": "it can [Slot]"
        },
        "frameDe": "Es kann [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cost",
              "lerntext": "cost",
              "de": "kosten",
              "wieder": true
            },
            {
              "schrift": "happen",
              "lerntext": "happen",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "marry",
              "lerntext": "marry",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "tidy",
              "lerntext": "tidy",
              "de": "aufräumen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is [Slot]",
          "lerntext": "it is [Slot]"
        },
        "frameDe": "Es ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "new",
              "lerntext": "new",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "finished",
              "lerntext": "finished",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "left",
              "lerntext": "left",
              "de": "links",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is [Slot]",
          "lerntext": "it is [Slot]"
        },
        "frameDe": "Es ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "new",
              "lerntext": "new",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "finished",
              "lerntext": "finished",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "left",
              "lerntext": "left",
              "de": "links",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.10"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Describe an ordinary day of yours from start to end.",
        "newFrameWords": [],
        "id": "15.11"
      }
    ]
  },
  {
    "number": 16,
    "title": "Was hast du gemacht?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I have [Slot] it",
          "lerntext": "I have [Slot] it"
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "looked",
              "lerntext": "looked",
              "de": "schauen"
            },
            {
              "schrift": "bought",
              "lerntext": "bought",
              "de": "kaufen"
            },
            {
              "schrift": "seen",
              "lerntext": "seen",
              "de": "sehen"
            },
            {
              "schrift": "made",
              "lerntext": "made",
              "de": "machen"
            },
            {
              "schrift": "found",
              "lerntext": "found",
              "de": "finden"
            },
            {
              "schrift": "taken",
              "lerntext": "taken",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "written",
              "lerntext": "written",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "heard",
              "lerntext": "heard",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "lost",
              "lerntext": "lost",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "happened",
              "lerntext": "happened",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "cost",
              "lerntext": "cost",
              "de": "kosten",
              "wieder": true
            },
            {
              "schrift": "married",
              "lerntext": "married",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "answered",
              "lerntext": "answered",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "tidied",
              "lerntext": "tidied",
              "de": "aufräumen",
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
          "schrift": "I have [Slot] it",
          "lerntext": "I have [Slot] it"
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "taken",
              "lerntext": "taken",
              "de": "nehmen"
            },
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen"
            },
            {
              "schrift": "written",
              "lerntext": "written",
              "de": "schreiben"
            },
            {
              "schrift": "heard",
              "lerntext": "heard",
              "de": "hören"
            },
            {
              "schrift": "lost",
              "lerntext": "lost",
              "de": "verlieren"
            },
            {
              "schrift": "made",
              "lerntext": "made",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "looked",
              "lerntext": "looked",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "seen",
              "lerntext": "seen",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "found",
              "lerntext": "found",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "bought",
              "lerntext": "bought",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "happened",
              "lerntext": "happened",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "closed",
              "lerntext": "closed",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "talked",
              "lerntext": "talked",
              "de": "reden",
              "wieder": true
            },
            {
              "schrift": "been called",
              "lerntext": "been called",
              "de": "heißen",
              "wieder": true
            },
            {
              "schrift": "stood",
              "lerntext": "stood",
              "de": "stehen",
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
          "schrift": "I have already [Slot]",
          "lerntext": "I have already [Slot]"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "worked",
              "lerntext": "worked",
              "de": "arbeiten"
            },
            {
              "schrift": "played",
              "lerntext": "played",
              "de": "spielen"
            },
            {
              "schrift": "danced",
              "lerntext": "danced",
              "de": "tanzen"
            },
            {
              "schrift": "slept",
              "lerntext": "slept",
              "de": "schlafen"
            },
            {
              "schrift": "waited",
              "lerntext": "waited",
              "de": "warten"
            },
            {
              "schrift": "helped",
              "lerntext": "helped",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "asked",
              "lerntext": "asked",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "answered",
              "lerntext": "answered",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "paid",
              "lerntext": "paid",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "listened",
              "lerntext": "listened",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "cost",
              "lerntext": "cost",
              "de": "kosten",
              "wieder": true
            },
            {
              "schrift": "spoken",
              "lerntext": "spoken",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "tried",
              "lerntext": "tried",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "opened",
              "lerntext": "opened",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "sat",
              "lerntext": "sat",
              "de": "sitzen",
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
          "schrift": "I have already [Slot]",
          "lerntext": "I have already [Slot]"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "asked",
              "lerntext": "asked",
              "de": "fragen"
            },
            {
              "schrift": "answered",
              "lerntext": "answered",
              "de": "antworten"
            },
            {
              "schrift": "helped",
              "lerntext": "helped",
              "de": "helfen"
            },
            {
              "schrift": "paid",
              "lerntext": "paid",
              "de": "bezahlen"
            },
            {
              "schrift": "played",
              "lerntext": "played",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "danced",
              "lerntext": "danced",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "slept",
              "lerntext": "slept",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "waited",
              "lerntext": "waited",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "worked",
              "lerntext": "worked",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "left",
              "lerntext": "left",
              "de": "verlassen",
              "wieder": true
            },
            {
              "schrift": "meant",
              "lerntext": "meant",
              "de": "bedeuten",
              "wieder": true
            },
            {
              "schrift": "washed",
              "lerntext": "washed",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "smiled",
              "lerntext": "smiled",
              "de": "lächeln",
              "wieder": true
            },
            {
              "schrift": "visited",
              "lerntext": "visited",
              "de": "besuchen",
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
          "schrift": "I have never [Slot]",
          "lerntext": "I have never [Slot]"
        },
        "frameDe": "Ich habe nie [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "won",
              "lerntext": "won",
              "de": "gewinnen"
            },
            {
              "schrift": "forgotten",
              "lerntext": "forgotten",
              "de": "vergessen"
            },
            {
              "schrift": "understood",
              "lerntext": "understood",
              "de": "verstehen"
            },
            {
              "schrift": "met",
              "lerntext": "met",
              "de": "treffen"
            },
            {
              "schrift": "given",
              "lerntext": "given",
              "de": "geben"
            },
            {
              "schrift": "said",
              "lerntext": "said",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "spoken",
              "lerntext": "spoken",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "opened",
              "lerntext": "opened",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "closed",
              "lerntext": "closed",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "washed",
              "lerntext": "washed",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "let",
              "lerntext": "let",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "taught",
              "lerntext": "taught",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "chosen",
              "lerntext": "chosen",
              "de": "wählen",
              "wieder": true
            },
            {
              "schrift": "borrowed",
              "lerntext": "borrowed",
              "de": "sich leihen",
              "wieder": true
            },
            {
              "schrift": "done",
              "lerntext": "done",
              "de": "tun",
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
          "schrift": "I have never [Slot]",
          "lerntext": "I have never [Slot]"
        },
        "frameDe": "Ich habe nie [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "said",
              "lerntext": "said",
              "de": "sagen"
            },
            {
              "schrift": "spoken",
              "lerntext": "spoken",
              "de": "sprechen"
            },
            {
              "schrift": "opened",
              "lerntext": "opened",
              "de": "öffnen"
            },
            {
              "schrift": "closed",
              "lerntext": "closed",
              "de": "schließen"
            },
            {
              "schrift": "washed",
              "lerntext": "washed",
              "de": "waschen"
            },
            {
              "schrift": "won",
              "lerntext": "won",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "forgotten",
              "lerntext": "forgotten",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "understood",
              "lerntext": "understood",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "met",
              "lerntext": "met",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "given",
              "lerntext": "given",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "used",
              "lerntext": "used",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "thought",
              "lerntext": "thought",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "ordered",
              "lerntext": "ordered",
              "de": "bestellen",
              "wieder": true
            },
            {
              "schrift": "married",
              "lerntext": "married",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "come",
              "lerntext": "come",
              "de": "kommen",
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
        "id": "16.7"
      }
    ]
  },
  {
    "number": 17,
    "title": "Du, ihr, sie",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "you [Slot]",
          "lerntext": "you [Slot]"
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "look",
              "lerntext": "look",
              "de": "schauen"
            },
            {
              "schrift": "buy",
              "lerntext": "buy",
              "de": "kaufen"
            },
            {
              "schrift": "see",
              "lerntext": "see",
              "de": "sehen"
            },
            {
              "schrift": "make",
              "lerntext": "make",
              "de": "machen"
            },
            {
              "schrift": "find",
              "lerntext": "find",
              "de": "finden"
            },
            {
              "schrift": "take",
              "lerntext": "take",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "write",
              "lerntext": "write",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "must",
              "lerntext": "must",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "rent",
              "lerntext": "rent",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "finish",
              "lerntext": "finish",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "bring",
              "lerntext": "bring",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "watch",
              "lerntext": "watch",
              "de": "ansehen",
              "wieder": true
            },
            {
              "schrift": "go",
              "lerntext": "go",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "drink",
              "lerntext": "drink",
              "de": "trinken",
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
          "schrift": "you [Slot]",
          "lerntext": "you [Slot]"
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "take",
              "lerntext": "take",
              "de": "nehmen"
            },
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen"
            },
            {
              "schrift": "write",
              "lerntext": "write",
              "de": "schreiben"
            },
            {
              "schrift": "make",
              "lerntext": "make",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "look",
              "lerntext": "look",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "see",
              "lerntext": "see",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "find",
              "lerntext": "find",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "buy",
              "lerntext": "buy",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "keep",
              "lerntext": "keep",
              "de": "behalten",
              "wieder": true
            },
            {
              "schrift": "would",
              "lerntext": "would",
              "de": "würde",
              "wieder": true
            },
            {
              "schrift": "sign",
              "lerntext": "sign",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "start",
              "lerntext": "start",
              "de": "starten",
              "wieder": true
            },
            {
              "schrift": "cook",
              "lerntext": "cook",
              "de": "kochen",
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
          "schrift": "he [Slot]",
          "lerntext": "he [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "works",
              "lerntext": "works",
              "de": "arbeiten"
            },
            {
              "schrift": "plays",
              "lerntext": "plays",
              "de": "spielen"
            },
            {
              "schrift": "dances",
              "lerntext": "dances",
              "de": "tanzen"
            },
            {
              "schrift": "sleeps",
              "lerntext": "sleeps",
              "de": "schlafen"
            },
            {
              "schrift": "waits",
              "lerntext": "waits",
              "de": "warten"
            },
            {
              "schrift": "asks",
              "lerntext": "asks",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "answers",
              "lerntext": "answers",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "puts",
              "lerntext": "puts",
              "de": "legen",
              "wieder": true
            },
            {
              "schrift": "drives",
              "lerntext": "drives",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "eats",
              "lerntext": "eats",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "calls",
              "lerntext": "calls",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "thanks",
              "lerntext": "thanks",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "enjoys",
              "lerntext": "enjoys",
              "de": "genießen",
              "wieder": true
            },
            {
              "schrift": "feels",
              "lerntext": "feels",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "tidies",
              "lerntext": "tidies",
              "de": "aufräumen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "he [Slot]",
          "lerntext": "he [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "he",
            "lerntext": "he",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "asks",
              "lerntext": "asks",
              "de": "fragen"
            },
            {
              "schrift": "answers",
              "lerntext": "answers",
              "de": "antworten"
            },
            {
              "schrift": "plays",
              "lerntext": "plays",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "dances",
              "lerntext": "dances",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "sleeps",
              "lerntext": "sleeps",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "waits",
              "lerntext": "waits",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "works",
              "lerntext": "works",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "reserves",
              "lerntext": "reserves",
              "de": "reservieren",
              "wieder": true
            },
            {
              "schrift": "tells",
              "lerntext": "tells",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "stays",
              "lerntext": "stays",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "arrives",
              "lerntext": "arrives",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "cries",
              "lerntext": "cries",
              "de": "weinen",
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
        "kind": "frame",
        "frame": {
          "schrift": "we [Slot]",
          "lerntext": "we [Slot]"
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "win",
              "lerntext": "win",
              "de": "gewinnen"
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen"
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen"
            },
            {
              "schrift": "meet",
              "lerntext": "meet",
              "de": "treffen"
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben"
            },
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "speak",
              "lerntext": "speak",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "open",
              "lerntext": "open",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "will",
              "lerntext": "will",
              "de": "werden (Zukunft)",
              "wieder": true
            },
            {
              "schrift": "show",
              "lerntext": "show",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "happen",
              "lerntext": "happen",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "wear",
              "lerntext": "wear",
              "de": "tragen (Kleidung)",
              "wieder": true
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "move",
              "lerntext": "move",
              "de": "bewegen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "we [Slot]",
          "lerntext": "we [Slot]"
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen"
            },
            {
              "schrift": "speak",
              "lerntext": "speak",
              "de": "sprechen"
            },
            {
              "schrift": "open",
              "lerntext": "open",
              "de": "öffnen"
            },
            {
              "schrift": "win",
              "lerntext": "win",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "meet",
              "lerntext": "meet",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "turn",
              "lerntext": "turn",
              "de": "drehen",
              "wieder": true
            },
            {
              "schrift": "to love",
              "lerntext": "to love",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "should",
              "lerntext": "should",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "talk",
              "lerntext": "talk",
              "de": "reden",
              "wieder": true
            },
            {
              "schrift": "run",
              "lerntext": "run",
              "de": "rennen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "you [Slot]",
          "lerntext": "you [Slot]"
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "live",
              "lerntext": "live",
              "de": "leben"
            },
            {
              "schrift": "stay",
              "lerntext": "stay",
              "de": "bleiben"
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen"
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen"
            },
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken"
            },
            {
              "schrift": "believe",
              "lerntext": "believe",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "need",
              "lerntext": "need",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "be",
              "lerntext": "be",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "to be called",
              "lerntext": "to be called",
              "de": "heißen",
              "wieder": true
            },
            {
              "schrift": "sell",
              "lerntext": "sell",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "change",
              "lerntext": "change",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "sing",
              "lerntext": "sing",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "learn",
              "lerntext": "learn",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "become",
              "lerntext": "become",
              "de": "werden",
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
          "schrift": "you [Slot]",
          "lerntext": "you [Slot]"
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "believe",
              "lerntext": "believe",
              "de": "glauben"
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen"
            },
            {
              "schrift": "need",
              "lerntext": "need",
              "de": "brauchen"
            },
            {
              "schrift": "live",
              "lerntext": "live",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "stay",
              "lerntext": "stay",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "continue",
              "lerntext": "continue",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "stand",
              "lerntext": "stand",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "listen",
              "lerntext": "listen",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "travel",
              "lerntext": "travel",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "send",
              "lerntext": "send",
              "de": "senden",
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
        "task": "Frag jemanden, was er macht - und antworte.",
        "newFrameWords": [],
        "id": "17.9"
      }
    ]
  },
  {
    "number": 18,
    "title": "Größer, besser, lieber",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is more [Slot]",
          "lerntext": "it is more [Slot]"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "interesting",
              "lerntext": "interesting",
              "de": "interessant"
            },
            {
              "schrift": "difficult",
              "lerntext": "difficult",
              "de": "schwierig"
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig"
            },
            {
              "schrift": "dangerous",
              "lerntext": "dangerous",
              "de": "gefährlich"
            },
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer"
            },
            {
              "schrift": "dirty",
              "lerntext": "dirty",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "sad",
              "lerntext": "sad",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "tired",
              "lerntext": "tired",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "new",
              "lerntext": "new",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "finished",
              "lerntext": "finished",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "left",
              "lerntext": "left",
              "de": "links",
              "wieder": true
            },
            {
              "schrift": "full",
              "lerntext": "full",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "easy",
              "lerntext": "easy",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "green",
              "lerntext": "green",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "nice",
              "lerntext": "nice",
              "de": "nett",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "more",
            "lerntext": "more",
            "de": "mehr"
          }
        ],
        "id": "18.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "it is more [Slot]",
          "lerntext": "it is more [Slot]"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dirty",
              "lerntext": "dirty",
              "de": "schmutzig"
            },
            {
              "schrift": "tired",
              "lerntext": "tired",
              "de": "müde"
            },
            {
              "schrift": "sad",
              "lerntext": "sad",
              "de": "traurig"
            },
            {
              "schrift": "interesting",
              "lerntext": "interesting",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "difficult",
              "lerntext": "difficult",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "dangerous",
              "lerntext": "dangerous",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "red",
              "lerntext": "red",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "light",
              "lerntext": "light",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "fresh",
              "lerntext": "fresh",
              "de": "frisch",
              "wieder": true
            },
            {
              "schrift": "right",
              "lerntext": "right",
              "de": "richtig",
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
          "schrift": "am as [Slot] as you",
          "lerntext": "am as [Slot] as you"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "big",
              "lerntext": "big",
              "de": "groß"
            },
            {
              "schrift": "small",
              "lerntext": "small",
              "de": "klein"
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt"
            },
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung"
            },
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer"
            },
            {
              "schrift": "cold",
              "lerntext": "cold",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "warm",
              "lerntext": "warm",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "new",
              "lerntext": "new",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "English",
              "lerntext": "English",
              "de": "englisch",
              "wieder": true
            },
            {
              "schrift": "usual",
              "lerntext": "usual",
              "de": "üblich",
              "wieder": true
            },
            {
              "schrift": "clean",
              "lerntext": "clean",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "empty",
              "lerntext": "empty",
              "de": "leer",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "than",
            "lerntext": "than",
            "de": "als (Vergleich)"
          }
        ],
        "id": "18.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "am as [Slot] as you",
          "lerntext": "am as [Slot] as you"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön"
            },
            {
              "schrift": "warm",
              "lerntext": "warm",
              "de": "warm"
            },
            {
              "schrift": "cold",
              "lerntext": "cold",
              "de": "kalt"
            },
            {
              "schrift": "new",
              "lerntext": "new",
              "de": "neu"
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark"
            },
            {
              "schrift": "big",
              "lerntext": "big",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "small",
              "lerntext": "small",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "true",
              "lerntext": "true",
              "de": "wahr",
              "wieder": true
            },
            {
              "schrift": "different",
              "lerntext": "different",
              "de": "verschieden",
              "wieder": true
            },
            {
              "schrift": "cheap",
              "lerntext": "cheap",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "boring",
              "lerntext": "boring",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich",
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
        "task": "Vergleich zwei Dinge miteinander.",
        "newFrameWords": [],
        "id": "18.5"
      }
    ]
  },
  {
    "number": 19,
    "title": "Ich fühle mich",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I feel [Slot]",
          "lerntext": "I feel [Slot]"
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tired",
              "lerntext": "tired",
              "de": "müde"
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank"
            },
            {
              "schrift": "sad",
              "lerntext": "sad",
              "de": "traurig"
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark"
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach"
            },
            {
              "schrift": "ready",
              "lerntext": "ready",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "angry",
              "lerntext": "angry",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "grey",
              "lerntext": "grey",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "free",
              "lerntext": "free",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "high",
              "lerntext": "high",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "bad",
              "lerntext": "bad",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "spicy",
              "lerntext": "spicy",
              "de": "scharf",
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
          "schrift": "I feel [Slot]",
          "lerntext": "I feel [Slot]"
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ready",
              "lerntext": "ready",
              "de": "bereit"
            },
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung"
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt"
            },
            {
              "schrift": "angry",
              "lerntext": "angry",
              "de": "wütend"
            },
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön"
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "sad",
              "lerntext": "sad",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "tired",
              "lerntext": "tired",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "happy",
              "lerntext": "happy",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "short",
              "lerntext": "short",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "German",
              "lerntext": "German",
              "de": "deutsch",
              "wieder": true
            },
            {
              "schrift": "kind",
              "lerntext": "kind",
              "de": "freundlich",
              "wieder": true
            },
            {
              "schrift": "good",
              "lerntext": "good",
              "de": "gut",
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
          "schrift": "we meet [Slot]",
          "lerntext": "we meet [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "today",
              "lerntext": "today",
              "de": "heute"
            },
            {
              "schrift": "tomorrow",
              "lerntext": "tomorrow",
              "de": "morgen"
            },
            {
              "schrift": "now",
              "lerntext": "now",
              "de": "jetzt"
            },
            {
              "schrift": "soon",
              "lerntext": "soon",
              "de": "bald"
            },
            {
              "schrift": "yesterday",
              "lerntext": "yesterday",
              "de": "gestern"
            },
            {
              "schrift": "often",
              "lerntext": "often",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "always",
              "lerntext": "always",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "never",
              "lerntext": "never",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "even",
              "lerntext": "even",
              "de": "sogar",
              "wieder": true
            },
            {
              "schrift": "hopefully",
              "lerntext": "hopefully",
              "de": "hoffentlich",
              "wieder": true
            },
            {
              "schrift": "unfortunately",
              "lerntext": "unfortunately",
              "de": "leider",
              "wieder": true
            },
            {
              "schrift": "quickly",
              "lerntext": "quickly",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "almost",
              "lerntext": "almost",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "straight",
              "lerntext": "straight",
              "de": "geradeaus",
              "wieder": true
            },
            {
              "schrift": "finally",
              "lerntext": "finally",
              "de": "endlich",
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
          "schrift": "we meet [Slot]",
          "lerntext": "we meet [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "often",
              "lerntext": "often",
              "de": "oft"
            },
            {
              "schrift": "never",
              "lerntext": "never",
              "de": "nie"
            },
            {
              "schrift": "always",
              "lerntext": "always",
              "de": "immer"
            },
            {
              "schrift": "now",
              "lerntext": "now",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "soon",
              "lerntext": "soon",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "today",
              "lerntext": "today",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "tomorrow",
              "lerntext": "tomorrow",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "yesterday",
              "lerntext": "yesterday",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "even",
              "lerntext": "even",
              "de": "sogar",
              "wieder": true
            },
            {
              "schrift": "hopefully",
              "lerntext": "hopefully",
              "de": "hoffentlich",
              "wieder": true
            },
            {
              "schrift": "unfortunately",
              "lerntext": "unfortunately",
              "de": "leider",
              "wieder": true
            },
            {
              "schrift": "probably",
              "lerntext": "probably",
              "de": "wahrscheinlich",
              "wieder": true
            },
            {
              "schrift": "also",
              "lerntext": "also",
              "de": "auch",
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
          "schrift": "we meet [Slot]",
          "lerntext": "we meet [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "even",
              "lerntext": "even",
              "de": "sogar",
              "wieder": true
            },
            {
              "schrift": "hopefully",
              "lerntext": "hopefully",
              "de": "hoffentlich",
              "wieder": true
            },
            {
              "schrift": "unfortunately",
              "lerntext": "unfortunately",
              "de": "leider",
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
        "task": "Sag, wie du dich fühlst und warum.",
        "newFrameWords": [],
        "id": "19.6"
      }
    ]
  },
  {
    "number": 20,
    "title": "Weil, wenn, obwohl",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I stay here [Slot] I am tired",
          "lerntext": "I stay here [Slot] I am tired"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "because",
              "lerntext": "because",
              "de": "weil"
            },
            {
              "schrift": "if",
              "lerntext": "if",
              "de": "wenn"
            },
            {
              "schrift": "although",
              "lerntext": "although",
              "de": "obwohl"
            },
            {
              "schrift": "while",
              "lerntext": "while",
              "de": "während"
            },
            {
              "schrift": "than",
              "lerntext": "than",
              "de": "als (Vergleich)"
            },
            {
              "schrift": "or",
              "lerntext": "or",
              "de": "oder",
              "wieder": true
            },
            {
              "schrift": "and",
              "lerntext": "and",
              "de": "und",
              "wieder": true
            },
            {
              "schrift": "but",
              "lerntext": "but",
              "de": "aber",
              "wieder": true
            },
            {
              "schrift": "therefore",
              "lerntext": "therefore",
              "de": "deshalb",
              "wieder": true
            },
            {
              "schrift": "so",
              "lerntext": "so",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "unless",
              "lerntext": "unless",
              "de": "es sei denn",
              "wieder": true
            },
            {
              "schrift": "since",
              "lerntext": "since",
              "de": "seit",
              "wieder": true
            },
            {
              "schrift": "however",
              "lerntext": "however",
              "de": "jedoch",
              "wieder": true
            },
            {
              "schrift": "as",
              "lerntext": "as",
              "de": "als",
              "wieder": true
            },
            {
              "schrift": "that",
              "lerntext": "that",
              "de": "dass",
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
          "schrift": "I stay here [Slot] I am tired",
          "lerntext": "I stay here [Slot] I am tired"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "but",
              "lerntext": "but",
              "de": "aber"
            },
            {
              "schrift": "or",
              "lerntext": "or",
              "de": "oder"
            },
            {
              "schrift": "and",
              "lerntext": "and",
              "de": "und"
            },
            {
              "schrift": "because",
              "lerntext": "because",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "if",
              "lerntext": "if",
              "de": "wenn",
              "wieder": true
            },
            {
              "schrift": "although",
              "lerntext": "although",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "while",
              "lerntext": "while",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "than",
              "lerntext": "than",
              "de": "als (Vergleich)",
              "wieder": true
            },
            {
              "schrift": "therefore",
              "lerntext": "therefore",
              "de": "deshalb",
              "wieder": true
            },
            {
              "schrift": "so",
              "lerntext": "so",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "unless",
              "lerntext": "unless",
              "de": "es sei denn",
              "wieder": true
            },
            {
              "schrift": "since",
              "lerntext": "since",
              "de": "seit",
              "wieder": true
            },
            {
              "schrift": "however",
              "lerntext": "however",
              "de": "jedoch",
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
          "schrift": "I think that it is [Slot]",
          "lerntext": "I think that it is [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "easy",
              "lerntext": "easy",
              "de": "einfach"
            },
            {
              "schrift": "wrong",
              "lerntext": "wrong",
              "de": "falsch"
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank"
            },
            {
              "schrift": "short",
              "lerntext": "short",
              "de": "kurz"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang"
            },
            {
              "schrift": "clean",
              "lerntext": "clean",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "sweet",
              "lerntext": "sweet",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "black",
              "lerntext": "black",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "angry",
              "lerntext": "angry",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "salty",
              "lerntext": "salty",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "healthy",
              "lerntext": "healthy",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "ugly",
              "lerntext": "ugly",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "next",
              "lerntext": "next",
              "de": "nächster",
              "wieder": true
            },
            {
              "schrift": "safe",
              "lerntext": "safe",
              "de": "sicher",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "that",
            "lerntext": "that",
            "de": "dass"
          }
        ],
        "id": "20.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I think that it is [Slot]",
          "lerntext": "I think that it is [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "clean",
              "lerntext": "clean",
              "de": "sauber"
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach"
            },
            {
              "schrift": "black",
              "lerntext": "black",
              "de": "schwarz"
            },
            {
              "schrift": "sweet",
              "lerntext": "sweet",
              "de": "süß"
            },
            {
              "schrift": "angry",
              "lerntext": "angry",
              "de": "wütend"
            },
            {
              "schrift": "easy",
              "lerntext": "easy",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "wrong",
              "lerntext": "wrong",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "short",
              "lerntext": "short",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "delicious",
              "lerntext": "delicious",
              "de": "lecker",
              "wieder": true
            },
            {
              "schrift": "finished",
              "lerntext": "finished",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "hot",
              "lerntext": "hot",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "lovely",
              "lerntext": "lovely",
              "de": "reizend",
              "wieder": true
            },
            {
              "schrift": "fast",
              "lerntext": "fast",
              "de": "schnell",
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
          "schrift": "if I have time, I want to [Slot]",
          "lerntext": "if I have time, I want to [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "live",
              "lerntext": "live",
              "de": "leben"
            },
            {
              "schrift": "stay",
              "lerntext": "stay",
              "de": "bleiben"
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen"
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen"
            },
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken"
            },
            {
              "schrift": "believe",
              "lerntext": "believe",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "need",
              "lerntext": "need",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "get",
              "lerntext": "get",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "begin",
              "lerntext": "begin",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "study",
              "lerntext": "study",
              "de": "studieren",
              "wieder": true
            },
            {
              "schrift": "cost",
              "lerntext": "cost",
              "de": "kosten",
              "wieder": true
            },
            {
              "schrift": "try",
              "lerntext": "try",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "sit",
              "lerntext": "sit",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "leave",
              "lerntext": "leave",
              "de": "verlassen",
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
        "kind": "frame",
        "frame": {
          "schrift": "if I have time, I want to [Slot]",
          "lerntext": "if I have time, I want to [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "believe",
              "lerntext": "believe",
              "de": "glauben"
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen"
            },
            {
              "schrift": "need",
              "lerntext": "need",
              "de": "brauchen"
            },
            {
              "schrift": "live",
              "lerntext": "live",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "stay",
              "lerntext": "stay",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "mean",
              "lerntext": "mean",
              "de": "bedeuten",
              "wieder": true
            },
            {
              "schrift": "smile",
              "lerntext": "smile",
              "de": "lächeln",
              "wieder": true
            },
            {
              "schrift": "visit",
              "lerntext": "visit",
              "de": "besuchen",
              "wieder": true
            },
            {
              "schrift": "let",
              "lerntext": "let",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "teach",
              "lerntext": "teach",
              "de": "unterrichten",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "20.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I stay here [Slot] I am tired",
          "lerntext": "I stay here [Slot] I am tired"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "therefore",
              "lerntext": "therefore",
              "de": "deshalb",
              "wieder": true
            },
            {
              "schrift": "so",
              "lerntext": "so",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "unless",
              "lerntext": "unless",
              "de": "es sei denn",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "20.7"
      },
      {
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
        "id": "20.8"
      }
    ]
  },
  {
    "number": 21,
    "title": "Bitten und auffordern",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "can you [Slot], please?",
          "lerntext": "can you [Slot], please?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "work",
              "lerntext": "work",
              "de": "arbeiten"
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen"
            },
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen"
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen"
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten"
            },
            {
              "schrift": "help",
              "lerntext": "help",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "pay",
              "lerntext": "pay",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "to answer",
              "lerntext": "to answer",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "choose",
              "lerntext": "choose",
              "de": "wählen",
              "wieder": true
            },
            {
              "schrift": "borrow",
              "lerntext": "borrow",
              "de": "sich leihen",
              "wieder": true
            },
            {
              "schrift": "do",
              "lerntext": "do",
              "de": "tun",
              "wieder": true
            },
            {
              "schrift": "use",
              "lerntext": "use",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "must",
              "lerntext": "must",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "order",
              "lerntext": "order",
              "de": "bestellen",
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
          "schrift": "can you [Slot], please?",
          "lerntext": "can you [Slot], please?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen"
            },
            {
              "schrift": "to answer",
              "lerntext": "to answer",
              "de": "antworten"
            },
            {
              "schrift": "help",
              "lerntext": "help",
              "de": "helfen"
            },
            {
              "schrift": "pay",
              "lerntext": "pay",
              "de": "bezahlen"
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "work",
              "lerntext": "work",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "marry",
              "lerntext": "marry",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "come",
              "lerntext": "come",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "rent",
              "lerntext": "rent",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "finish",
              "lerntext": "finish",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "bring",
              "lerntext": "bring",
              "de": "bringen",
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
          "schrift": "you must [Slot]",
          "lerntext": "you must [Slot]"
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "win",
              "lerntext": "win",
              "de": "gewinnen"
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen"
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen"
            },
            {
              "schrift": "meet",
              "lerntext": "meet",
              "de": "treffen"
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben"
            },
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "speak",
              "lerntext": "speak",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "open",
              "lerntext": "open",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "watch",
              "lerntext": "watch",
              "de": "ansehen",
              "wieder": true
            },
            {
              "schrift": "go",
              "lerntext": "go",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "drink",
              "lerntext": "drink",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "keep",
              "lerntext": "keep",
              "de": "behalten",
              "wieder": true
            },
            {
              "schrift": "would",
              "lerntext": "would",
              "de": "würde",
              "wieder": true
            },
            {
              "schrift": "sign",
              "lerntext": "sign",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "start",
              "lerntext": "start",
              "de": "starten",
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
          "schrift": "you must [Slot]",
          "lerntext": "you must [Slot]"
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "you",
            "lerntext": "you",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen"
            },
            {
              "schrift": "speak",
              "lerntext": "speak",
              "de": "sprechen"
            },
            {
              "schrift": "open",
              "lerntext": "open",
              "de": "öffnen"
            },
            {
              "schrift": "win",
              "lerntext": "win",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "meet",
              "lerntext": "meet",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "cook",
              "lerntext": "cook",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "put",
              "lerntext": "put",
              "de": "legen",
              "wieder": true
            },
            {
              "schrift": "drive",
              "lerntext": "drive",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "eat",
              "lerntext": "eat",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "call",
              "lerntext": "call",
              "de": "rufen",
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
        "task": "Bitte jemanden höflich um etwas.",
        "newFrameWords": [],
        "id": "21.5"
      }
    ]
  },
  {
    "number": 22,
    "title": "Wem gebe ich was?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I give the book to [Slot]",
          "lerntext": "I give the book to [Slot]"
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "friend",
              "lerntext": "friend",
              "de": "Freund"
            },
            {
              "schrift": "mother",
              "lerntext": "mother",
              "de": "Mutter"
            },
            {
              "schrift": "father",
              "lerntext": "father",
              "de": "Vater"
            },
            {
              "schrift": "child",
              "lerntext": "child",
              "de": "Kind"
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student"
            },
            {
              "schrift": "woman",
              "lerntext": "woman",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "word",
              "lerntext": "word",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "customer",
              "lerntext": "customer",
              "de": "Kunde",
              "wieder": true
            },
            {
              "schrift": "kitchen",
              "lerntext": "kitchen",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "shoe",
              "lerntext": "shoe",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "clothes",
              "lerntext": "clothes",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "hair",
              "lerntext": "hair",
              "de": "Haare",
              "wieder": true
            },
            {
              "schrift": "police",
              "lerntext": "police",
              "de": "Polizei",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "22.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I give the book to [Slot]",
          "lerntext": "I give the book to [Slot]"
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "woman",
              "lerntext": "woman",
              "de": "Frau"
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester"
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder"
            },
            {
              "schrift": "mother",
              "lerntext": "mother",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "friend",
              "lerntext": "friend",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "father",
              "lerntext": "father",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "child",
              "lerntext": "child",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "word",
              "lerntext": "word",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "customer",
              "lerntext": "customer",
              "de": "Kunde",
              "wieder": true
            },
            {
              "schrift": "kitchen",
              "lerntext": "kitchen",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "snow",
              "lerntext": "snow",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "rain",
              "lerntext": "rain",
              "de": "Regen",
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
          "schrift": "I show the city to [Slot]",
          "lerntext": "I show the city to [Slot]"
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "friend",
              "lerntext": "friend",
              "de": "Freund"
            },
            {
              "schrift": "mother",
              "lerntext": "mother",
              "de": "Mutter"
            },
            {
              "schrift": "father",
              "lerntext": "father",
              "de": "Vater"
            },
            {
              "schrift": "child",
              "lerntext": "child",
              "de": "Kind"
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student"
            },
            {
              "schrift": "woman",
              "lerntext": "woman",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "word",
              "lerntext": "word",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "customer",
              "lerntext": "customer",
              "de": "Kunde",
              "wieder": true
            },
            {
              "schrift": "sea",
              "lerntext": "sea",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "shoe",
              "lerntext": "shoe",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "sun",
              "lerntext": "sun",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "language",
              "lerntext": "language",
              "de": "Sprache",
              "wieder": true
            },
            {
              "schrift": "leg",
              "lerntext": "leg",
              "de": "Bein",
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
        "kind": "frame",
        "frame": {
          "schrift": "I show the city to [Slot]",
          "lerntext": "I show the city to [Slot]"
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "woman",
              "lerntext": "woman",
              "de": "Frau"
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester"
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder"
            },
            {
              "schrift": "mother",
              "lerntext": "mother",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "friend",
              "lerntext": "friend",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "father",
              "lerntext": "father",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "child",
              "lerntext": "child",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "word",
              "lerntext": "word",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "clothes",
              "lerntext": "clothes",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "customer",
              "lerntext": "customer",
              "de": "Kunde",
              "wieder": true
            },
            {
              "schrift": "people",
              "lerntext": "people",
              "de": "Leute",
              "wieder": true
            },
            {
              "schrift": "mountain",
              "lerntext": "mountain",
              "de": "Berg",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "22.4"
      },
      {
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
        "id": "22.5"
      }
    ]
  },
  {
    "number": 23,
    "title": "Ein Glas, genug, zu viel",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I want a glass of [Slot]",
          "lerntext": "I want a glass of [Slot]"
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "water",
              "lerntext": "water",
              "de": "Wasser"
            },
            {
              "schrift": "beer",
              "lerntext": "beer",
              "de": "Bier"
            },
            {
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch"
            },
            {
              "schrift": "coffee",
              "lerntext": "coffee",
              "de": "Kaffee"
            },
            {
              "schrift": "hair",
              "lerntext": "hair",
              "de": "Haare",
              "wieder": true
            },
            {
              "schrift": "kitchen",
              "lerntext": "kitchen",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "beginning",
              "lerntext": "beginning",
              "de": "Anfang",
              "wieder": true
            },
            {
              "schrift": "head",
              "lerntext": "head",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "police",
              "lerntext": "police",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "snow",
              "lerntext": "snow",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "morning",
              "lerntext": "morning",
              "de": "Morgen",
              "wieder": true
            },
            {
              "schrift": "body",
              "lerntext": "body",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "night",
              "lerntext": "night",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "month",
              "lerntext": "month",
              "de": "Monat",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "glass",
            "lerntext": "glass",
            "de": "Glas"
          }
        ],
        "id": "23.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "we have enough [Slot]",
          "lerntext": "we have enough [Slot]"
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "money",
              "lerntext": "money",
              "de": "Geld"
            },
            {
              "schrift": "time",
              "lerntext": "time",
              "de": "Zeit"
            },
            {
              "schrift": "bread",
              "lerntext": "bread",
              "de": "Brot"
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Obst"
            },
            {
              "schrift": "meat",
              "lerntext": "meat",
              "de": "Fleisch"
            },
            {
              "schrift": "fish",
              "lerntext": "fish",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "sugar",
              "lerntext": "sugar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "husband",
              "lerntext": "husband",
              "de": "Ehemann",
              "wieder": true
            },
            {
              "schrift": "world",
              "lerntext": "world",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "minute",
              "lerntext": "minute",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "person",
              "lerntext": "person",
              "de": "Person",
              "wieder": true
            },
            {
              "schrift": "music",
              "lerntext": "music",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "rain",
              "lerntext": "rain",
              "de": "Regen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "enough",
            "lerntext": "enough",
            "de": "genug"
          }
        ],
        "id": "23.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "we have enough [Slot]",
          "lerntext": "we have enough [Slot]"
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "we",
            "lerntext": "we",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fish",
              "lerntext": "fish",
              "de": "Fisch"
            },
            {
              "schrift": "sugar",
              "lerntext": "sugar",
              "de": "Zucker"
            },
            {
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch"
            },
            {
              "schrift": "money",
              "lerntext": "money",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "bread",
              "lerntext": "bread",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "meat",
              "lerntext": "meat",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "time",
              "lerntext": "time",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "foot",
              "lerntext": "foot",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "price",
              "lerntext": "price",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "hour",
              "lerntext": "hour",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "sea",
              "lerntext": "sea",
              "de": "Meer",
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
        "task": "Bestell etwas mit einer Menge.",
        "newFrameWords": [],
        "id": "23.4"
      }
    ]
  },
  {
    "number": 24,
    "title": "Seit, vor, in einer Stunde",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I have waited for an [Slot]",
          "lerntext": "I have waited for an [Slot]"
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hour",
              "lerntext": "hour",
              "de": "Stunde"
            },
            {
              "schrift": "minute",
              "lerntext": "minute",
              "de": "Minute"
            },
            {
              "schrift": "week",
              "lerntext": "week",
              "de": "Woche"
            },
            {
              "schrift": "night",
              "lerntext": "night",
              "de": "Nacht"
            },
            {
              "schrift": "toilet",
              "lerntext": "toilet",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "lecture",
              "lerntext": "lecture",
              "de": "Vorlesung",
              "wieder": true
            },
            {
              "schrift": "daughter",
              "lerntext": "daughter",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "pharmacy",
              "lerntext": "pharmacy",
              "de": "Apotheke",
              "wieder": true
            },
            {
              "schrift": "bank",
              "lerntext": "bank",
              "de": "Bank (Geldinstitut)",
              "wieder": true
            },
            {
              "schrift": "pub",
              "lerntext": "pub",
              "de": "Kneipe",
              "wieder": true
            },
            {
              "schrift": "language",
              "lerntext": "language",
              "de": "Sprache",
              "wieder": true
            },
            {
              "schrift": "university",
              "lerntext": "university",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "bottle",
              "lerntext": "bottle",
              "de": "Flasche",
              "wieder": true
            },
            {
              "schrift": "street",
              "lerntext": "street",
              "de": "Straße",
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
          "schrift": "I have waited for an [Slot]",
          "lerntext": "I have waited for an [Slot]"
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "day",
              "lerntext": "day",
              "de": "Tag"
            },
            {
              "schrift": "evening",
              "lerntext": "evening",
              "de": "Abend"
            },
            {
              "schrift": "reason",
              "lerntext": "reason",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "shoe",
              "lerntext": "shoe",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "boy",
              "lerntext": "boy",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "shop",
              "lerntext": "shop",
              "de": "Laden",
              "wieder": true
            },
            {
              "schrift": "cheese",
              "lerntext": "cheese",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "dog",
              "lerntext": "dog",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "customer",
              "lerntext": "customer",
              "de": "Kunde",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "mouth",
              "lerntext": "mouth",
              "de": "Mund",
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
          "schrift": "[Slot] I go home",
          "lerntext": "[Slot] I go home"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "today",
              "lerntext": "today",
              "de": "heute"
            },
            {
              "schrift": "tomorrow",
              "lerntext": "tomorrow",
              "de": "morgen"
            },
            {
              "schrift": "now",
              "lerntext": "now",
              "de": "jetzt"
            },
            {
              "schrift": "soon",
              "lerntext": "soon",
              "de": "bald"
            },
            {
              "schrift": "yesterday",
              "lerntext": "yesterday",
              "de": "gestern"
            },
            {
              "schrift": "often",
              "lerntext": "often",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "always",
              "lerntext": "always",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "never",
              "lerntext": "never",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "just",
              "lerntext": "just",
              "de": "gerade",
              "wieder": true
            },
            {
              "schrift": "exactly",
              "lerntext": "exactly",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "sometimes",
              "lerntext": "sometimes",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "together",
              "lerntext": "together",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "really",
              "lerntext": "really",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "quickly",
              "lerntext": "quickly",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "slowly",
              "lerntext": "slowly",
              "de": "langsam",
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
          "schrift": "[Slot] I go home",
          "lerntext": "[Slot] I go home"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "often",
              "lerntext": "often",
              "de": "oft"
            },
            {
              "schrift": "never",
              "lerntext": "never",
              "de": "nie"
            },
            {
              "schrift": "always",
              "lerntext": "always",
              "de": "immer"
            },
            {
              "schrift": "now",
              "lerntext": "now",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "soon",
              "lerntext": "soon",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "today",
              "lerntext": "today",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "tomorrow",
              "lerntext": "tomorrow",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "yesterday",
              "lerntext": "yesterday",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "sure",
              "lerntext": "sure",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "badly",
              "lerntext": "badly",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "even",
              "lerntext": "even",
              "de": "sogar",
              "wieder": true
            },
            {
              "schrift": "yet",
              "lerntext": "yet",
              "de": "noch nicht",
              "wieder": true
            },
            {
              "schrift": "inside",
              "lerntext": "inside",
              "de": "drinnen",
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
        "task": "Sag, wann du etwas machst.",
        "newFrameWords": [],
        "id": "24.5"
      }
    ]
  },
  {
    "number": 25,
    "title": "Ich hätte gern",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I would like to [Slot]",
          "lerntext": "I would like to [Slot]"
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "live",
              "lerntext": "live",
              "de": "leben"
            },
            {
              "schrift": "stay",
              "lerntext": "stay",
              "de": "bleiben"
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen"
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen"
            },
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken"
            },
            {
              "schrift": "believe",
              "lerntext": "believe",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "need",
              "lerntext": "need",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "thank",
              "lerntext": "thank",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "enjoy",
              "lerntext": "enjoy",
              "de": "genießen",
              "wieder": true
            },
            {
              "schrift": "tidy",
              "lerntext": "tidy",
              "de": "aufräumen",
              "wieder": true
            },
            {
              "schrift": "reserve",
              "lerntext": "reserve",
              "de": "reservieren",
              "wieder": true
            },
            {
              "schrift": "tell",
              "lerntext": "tell",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "arrive",
              "lerntext": "arrive",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "will",
              "lerntext": "will",
              "de": "werden (Zukunft)",
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
          "schrift": "I would like to [Slot]",
          "lerntext": "I would like to [Slot]"
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "believe",
              "lerntext": "believe",
              "de": "glauben"
            },
            {
              "schrift": "hope",
              "lerntext": "hope",
              "de": "hoffen"
            },
            {
              "schrift": "need",
              "lerntext": "need",
              "de": "brauchen"
            },
            {
              "schrift": "live",
              "lerntext": "live",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "laugh",
              "lerntext": "laugh",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "stay",
              "lerntext": "stay",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "happen",
              "lerntext": "happen",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "wear",
              "lerntext": "wear",
              "de": "tragen (Kleidung)",
              "wieder": true
            },
            {
              "schrift": "remember",
              "lerntext": "remember",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "move",
              "lerntext": "move",
              "de": "bewegen",
              "wieder": true
            },
            {
              "schrift": "turn",
              "lerntext": "turn",
              "de": "drehen",
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
          "schrift": "could you give me [Slot]?",
          "lerntext": "could you give me [Slot]?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "water",
              "lerntext": "water",
              "de": "Wasser"
            },
            {
              "schrift": "bread",
              "lerntext": "bread",
              "de": "Brot"
            },
            {
              "schrift": "key",
              "lerntext": "key",
              "de": "Schlüssel"
            },
            {
              "schrift": "book",
              "lerntext": "book",
              "de": "Buch"
            },
            {
              "schrift": "bag",
              "lerntext": "bag",
              "de": "Tasche"
            },
            {
              "schrift": "coffee",
              "lerntext": "coffee",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "sugar",
              "lerntext": "sugar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "thing",
              "lerntext": "thing",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "name",
              "lerntext": "name",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "year",
              "lerntext": "year",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "sun",
              "lerntext": "sun",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "weather",
              "lerntext": "weather",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "breakfast",
              "lerntext": "breakfast",
              "de": "Frühstück",
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
          "schrift": "could you give me [Slot]?",
          "lerntext": "could you give me [Slot]?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sugar",
              "lerntext": "sugar",
              "de": "Zucker"
            },
            {
              "schrift": "coffee",
              "lerntext": "coffee",
              "de": "Kaffee"
            },
            {
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch"
            },
            {
              "schrift": "key",
              "lerntext": "key",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "bag",
              "lerntext": "bag",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "book",
              "lerntext": "book",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "water",
              "lerntext": "water",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "bread",
              "lerntext": "bread",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "leg",
              "lerntext": "leg",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem",
              "wieder": true
            },
            {
              "schrift": "word",
              "lerntext": "word",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "girl",
              "lerntext": "girl",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "room",
              "lerntext": "room",
              "de": "Zimmer",
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
        "task": "Bitte höflich um etwas.",
        "newFrameWords": [],
        "id": "25.5"
      }
    ]
  },
  {
    "number": 26,
    "title": "Ich glaube, dass",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "I think that is [Slot]",
          "lerntext": "I think that is [Slot]"
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "big",
              "lerntext": "big",
              "de": "groß"
            },
            {
              "schrift": "small",
              "lerntext": "small",
              "de": "klein"
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt"
            },
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung"
            },
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer"
            },
            {
              "schrift": "cold",
              "lerntext": "cold",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "warm",
              "lerntext": "warm",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "new",
              "lerntext": "new",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "blue",
              "lerntext": "blue",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "brown",
              "lerntext": "brown",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "slow",
              "lerntext": "slow",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "yellow",
              "lerntext": "yellow",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "low",
              "lerntext": "low",
              "de": "niedrig",
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
          "schrift": "I think that is [Slot]",
          "lerntext": "I think that is [Slot]"
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön"
            },
            {
              "schrift": "warm",
              "lerntext": "warm",
              "de": "warm"
            },
            {
              "schrift": "cold",
              "lerntext": "cold",
              "de": "kalt"
            },
            {
              "schrift": "new",
              "lerntext": "new",
              "de": "neu"
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark"
            },
            {
              "schrift": "big",
              "lerntext": "big",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "small",
              "lerntext": "small",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "left",
              "lerntext": "left",
              "de": "links",
              "wieder": true
            },
            {
              "schrift": "funny",
              "lerntext": "funny",
              "de": "lustig",
              "wieder": true
            },
            {
              "schrift": "pretty",
              "lerntext": "pretty",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "thirsty",
              "lerntext": "thirsty",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "same",
              "lerntext": "same",
              "de": "gleich",
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
          "schrift": "I find that very [Slot]",
          "lerntext": "I find that very [Slot]"
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "easy",
              "lerntext": "easy",
              "de": "einfach"
            },
            {
              "schrift": "wrong",
              "lerntext": "wrong",
              "de": "falsch"
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank"
            },
            {
              "schrift": "short",
              "lerntext": "short",
              "de": "kurz"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang"
            },
            {
              "schrift": "clean",
              "lerntext": "clean",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "sweet",
              "lerntext": "sweet",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "black",
              "lerntext": "black",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "angry",
              "lerntext": "angry",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "tall",
              "lerntext": "tall",
              "de": "groß (Person)",
              "wieder": true
            },
            {
              "schrift": "heavy",
              "lerntext": "heavy",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "hungry",
              "lerntext": "hungry",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "foreign",
              "lerntext": "foreign",
              "de": "ausländisch",
              "wieder": true
            },
            {
              "schrift": "full",
              "lerntext": "full",
              "de": "voll",
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
          "schrift": "I find that very [Slot]",
          "lerntext": "I find that very [Slot]"
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "clean",
              "lerntext": "clean",
              "de": "sauber"
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach"
            },
            {
              "schrift": "black",
              "lerntext": "black",
              "de": "schwarz"
            },
            {
              "schrift": "sweet",
              "lerntext": "sweet",
              "de": "süß"
            },
            {
              "schrift": "angry",
              "lerntext": "angry",
              "de": "wütend"
            },
            {
              "schrift": "easy",
              "lerntext": "easy",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "wrong",
              "lerntext": "wrong",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "short",
              "lerntext": "short",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "green",
              "lerntext": "green",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "nice",
              "lerntext": "nice",
              "de": "nett",
              "wieder": true
            },
            {
              "schrift": "red",
              "lerntext": "red",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "light",
              "lerntext": "light",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "busy",
              "lerntext": "busy",
              "de": "beschäftigt",
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
        "task": "Sag deine Meinung zu etwas.",
        "newFrameWords": [],
        "id": "26.5"
      }
    ]
  },
  {
    "number": 27,
    "title": "Was ich vorhabe",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tomorrow I will [Slot]",
          "lerntext": "tomorrow I will [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "look",
              "lerntext": "look",
              "de": "schauen"
            },
            {
              "schrift": "buy",
              "lerntext": "buy",
              "de": "kaufen"
            },
            {
              "schrift": "see",
              "lerntext": "see",
              "de": "sehen"
            },
            {
              "schrift": "make",
              "lerntext": "make",
              "de": "machen"
            },
            {
              "schrift": "find",
              "lerntext": "find",
              "de": "finden"
            },
            {
              "schrift": "take",
              "lerntext": "take",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "write",
              "lerntext": "write",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "to love",
              "lerntext": "to love",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "should",
              "lerntext": "should",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "talk",
              "lerntext": "talk",
              "de": "reden",
              "wieder": true
            },
            {
              "schrift": "run",
              "lerntext": "run",
              "de": "rennen",
              "wieder": true
            },
            {
              "schrift": "be",
              "lerntext": "be",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "to be called",
              "lerntext": "to be called",
              "de": "heißen",
              "wieder": true
            },
            {
              "schrift": "sell",
              "lerntext": "sell",
              "de": "verkaufen",
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
          "schrift": "tomorrow I will [Slot]",
          "lerntext": "tomorrow I will [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "take",
              "lerntext": "take",
              "de": "nehmen"
            },
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen"
            },
            {
              "schrift": "write",
              "lerntext": "write",
              "de": "schreiben"
            },
            {
              "schrift": "make",
              "lerntext": "make",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "look",
              "lerntext": "look",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "see",
              "lerntext": "see",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "buy",
              "lerntext": "buy",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "find",
              "lerntext": "find",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "change",
              "lerntext": "change",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "sing",
              "lerntext": "sing",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "learn",
              "lerntext": "learn",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "become",
              "lerntext": "become",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "continue",
              "lerntext": "continue",
              "de": "fortsetzen",
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
          "schrift": "I want to [Slot] soon",
          "lerntext": "I want to [Slot] soon"
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "work",
              "lerntext": "work",
              "de": "arbeiten"
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen"
            },
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen"
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen"
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten"
            },
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "to answer",
              "lerntext": "to answer",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "stand",
              "lerntext": "stand",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "listen",
              "lerntext": "listen",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "travel",
              "lerntext": "travel",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "send",
              "lerntext": "send",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "get",
              "lerntext": "get",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "begin",
              "lerntext": "begin",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "study",
              "lerntext": "study",
              "de": "studieren",
              "wieder": true
            },
            {
              "schrift": "cost",
              "lerntext": "cost",
              "de": "kosten",
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
          "schrift": "I want to [Slot] soon",
          "lerntext": "I want to [Slot] soon"
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen"
            },
            {
              "schrift": "to answer",
              "lerntext": "to answer",
              "de": "antworten"
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "work",
              "lerntext": "work",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "try",
              "lerntext": "try",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "sit",
              "lerntext": "sit",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "leave",
              "lerntext": "leave",
              "de": "verlassen",
              "wieder": true
            },
            {
              "schrift": "mean",
              "lerntext": "mean",
              "de": "bedeuten",
              "wieder": true
            },
            {
              "schrift": "smile",
              "lerntext": "smile",
              "de": "lächeln",
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
        "task": "Erzähl, was du morgen machst.",
        "newFrameWords": [],
        "id": "27.5"
      }
    ]
  },
  {
    "number": 28,
    "title": "Der Mann, der dort steht",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "that is the man who [Slot]",
          "lerntext": "that is the man who [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lives",
              "lerntext": "lives",
              "de": "leben"
            },
            {
              "schrift": "stays",
              "lerntext": "stays",
              "de": "bleiben"
            },
            {
              "schrift": "laughs",
              "lerntext": "laughs",
              "de": "lachen"
            },
            {
              "schrift": "cries",
              "lerntext": "cries",
              "de": "weinen"
            },
            {
              "schrift": "thinks",
              "lerntext": "thinks",
              "de": "denken"
            },
            {
              "schrift": "believes",
              "lerntext": "believes",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "hopes",
              "lerntext": "hopes",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "needs",
              "lerntext": "needs",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "visits",
              "lerntext": "visits",
              "de": "besuchen",
              "wieder": true
            },
            {
              "schrift": "lets",
              "lerntext": "lets",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "walks",
              "lerntext": "walks",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "teaches",
              "lerntext": "teaches",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "chooses",
              "lerntext": "chooses",
              "de": "wählen",
              "wieder": true
            },
            {
              "schrift": "borrows",
              "lerntext": "borrows",
              "de": "sich leihen",
              "wieder": true
            },
            {
              "schrift": "does",
              "lerntext": "does",
              "de": "tun",
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
          "schrift": "that is the man who [Slot]",
          "lerntext": "that is the man who [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "believes",
              "lerntext": "believes",
              "de": "glauben"
            },
            {
              "schrift": "hopes",
              "lerntext": "hopes",
              "de": "hoffen"
            },
            {
              "schrift": "needs",
              "lerntext": "needs",
              "de": "brauchen"
            },
            {
              "schrift": "lives",
              "lerntext": "lives",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "laughs",
              "lerntext": "laughs",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "cries",
              "lerntext": "cries",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "stays",
              "lerntext": "stays",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "thinks",
              "lerntext": "thinks",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "uses",
              "lerntext": "uses",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "orders",
              "lerntext": "orders",
              "de": "bestellen",
              "wieder": true
            },
            {
              "schrift": "knows",
              "lerntext": "knows",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "marries",
              "lerntext": "marries",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "comes",
              "lerntext": "comes",
              "de": "kommen",
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
          "schrift": "I am looking for a place where you can [Slot]",
          "lerntext": "I am looking for a place where you can [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "work",
              "lerntext": "work",
              "de": "arbeiten"
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen"
            },
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen"
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen"
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten"
            },
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "to answer",
              "lerntext": "to answer",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "rent",
              "lerntext": "rent",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "finish",
              "lerntext": "finish",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "bring",
              "lerntext": "bring",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "watch",
              "lerntext": "watch",
              "de": "ansehen",
              "wieder": true
            },
            {
              "schrift": "drink",
              "lerntext": "drink",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "keep",
              "lerntext": "keep",
              "de": "behalten",
              "wieder": true
            },
            {
              "schrift": "sign",
              "lerntext": "sign",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "start",
              "lerntext": "start",
              "de": "starten",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "where",
            "lerntext": "where",
            "de": "wo"
          }
        ],
        "id": "28.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I am looking for a place where you can [Slot]",
          "lerntext": "I am looking for a place where you can [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen"
            },
            {
              "schrift": "to answer",
              "lerntext": "to answer",
              "de": "antworten"
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "work",
              "lerntext": "work",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "cook",
              "lerntext": "cook",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "put",
              "lerntext": "put",
              "de": "legen",
              "wieder": true
            },
            {
              "schrift": "drive",
              "lerntext": "drive",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "eat",
              "lerntext": "eat",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "call",
              "lerntext": "call",
              "de": "rufen",
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
        "task": "Beschreib jemanden mit einem Nebensatz.",
        "newFrameWords": [],
        "id": "28.5"
      }
    ]
  },
  {
    "number": 29,
    "title": "Alles zusammen",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "yesterday I was at the [Slot]",
          "lerntext": "yesterday I was at the [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "restaurant",
              "lerntext": "restaurant",
              "de": "Restaurant"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel"
            },
            {
              "schrift": "school",
              "lerntext": "school",
              "de": "Schule"
            },
            {
              "schrift": "university",
              "lerntext": "university",
              "de": "Universität"
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus"
            },
            {
              "schrift": "city",
              "lerntext": "city",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "airport",
              "lerntext": "airport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "clothes",
              "lerntext": "clothes",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "bed",
              "lerntext": "bed",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "ticket",
              "lerntext": "ticket",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "people",
              "lerntext": "people",
              "de": "Leute",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "29.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yesterday I was at the [Slot]",
          "lerntext": "yesterday I was at the [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "station",
              "lerntext": "station",
              "de": "Bahnhof"
            },
            {
              "schrift": "airport",
              "lerntext": "airport",
              "de": "Flughafen"
            },
            {
              "schrift": "city",
              "lerntext": "city",
              "de": "Stadt"
            },
            {
              "schrift": "restaurant",
              "lerntext": "restaurant",
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
              "schrift": "school",
              "lerntext": "school",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "university",
              "lerntext": "university",
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
              "schrift": "life",
              "lerntext": "life",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "moment",
              "lerntext": "moment",
              "de": "Moment",
              "wieder": true
            },
            {
              "schrift": "present",
              "lerntext": "present",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "mountain",
              "lerntext": "mountain",
              "de": "Berg",
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
          "schrift": "I want to [Slot] because I have time",
          "lerntext": "I want to [Slot] because I have time"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "win",
              "lerntext": "win",
              "de": "gewinnen"
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen"
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen"
            },
            {
              "schrift": "meet",
              "lerntext": "meet",
              "de": "treffen"
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben"
            },
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "speak",
              "lerntext": "speak",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "open",
              "lerntext": "open",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "thank",
              "lerntext": "thank",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "enjoy",
              "lerntext": "enjoy",
              "de": "genießen",
              "wieder": true
            },
            {
              "schrift": "tidy",
              "lerntext": "tidy",
              "de": "aufräumen",
              "wieder": true
            },
            {
              "schrift": "reserve",
              "lerntext": "reserve",
              "de": "reservieren",
              "wieder": true
            },
            {
              "schrift": "tell",
              "lerntext": "tell",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "arrive",
              "lerntext": "arrive",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "happen",
              "lerntext": "happen",
              "de": "geschehen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "29.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I want to [Slot] because I have time",
          "lerntext": "I want to [Slot] because I have time"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "I",
            "lerntext": "I",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen"
            },
            {
              "schrift": "speak",
              "lerntext": "speak",
              "de": "sprechen"
            },
            {
              "schrift": "open",
              "lerntext": "open",
              "de": "öffnen"
            },
            {
              "schrift": "win",
              "lerntext": "win",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "meet",
              "lerntext": "meet",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "wear",
              "lerntext": "wear",
              "de": "tragen (Kleidung)",
              "wieder": true
            },
            {
              "schrift": "remember",
              "lerntext": "remember",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "move",
              "lerntext": "move",
              "de": "bewegen",
              "wieder": true
            },
            {
              "schrift": "turn",
              "lerntext": "turn",
              "de": "drehen",
              "wieder": true
            },
            {
              "schrift": "to love",
              "lerntext": "to love",
              "de": "lieben",
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
        "id": "29.5"
      }
    ]
  }
];
