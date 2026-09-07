// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_en.py
// Neu bauen: python bauplan.py en --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 15 Module, 96 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const ENGLISH_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "I am, you are",
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
            "de": "mir, mich"
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
            "de": "mir, mich"
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
              "de": "beschäftigt, besetzt"
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
            "de": "du, ihr, Sie"
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
            "de": "dein, euer"
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
            "de": "du, ihr, Sie"
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
            "de": "dein, euer"
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
            "de": "ihr, sie"
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
            "de": "ihr, sie"
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
        "id": "1.7"
      }
    ]
  },
  {
    "number": 2,
    "title": "This is, I have",
    "lessons": [
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
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch"
            },
            {
              "schrift": "bed",
              "lerntext": "bed",
              "de": "Bett"
            },
            {
              "schrift": "door",
              "lerntext": "door",
              "de": "Tür"
            },
            {
              "schrift": "window",
              "lerntext": "window",
              "de": "Fenster"
            },
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mir, mich"
            },
            {
              "schrift": "it",
              "lerntext": "it",
              "de": "es"
            },
            {
              "schrift": "your",
              "lerntext": "your",
              "de": "dein, euer"
            },
            {
              "schrift": "she",
              "lerntext": "she",
              "de": "sie"
            },
            {
              "schrift": "these",
              "lerntext": "these",
              "de": "diese (Mehrzahl)"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "ein, eine"
          },
          {
            "schrift": "the",
            "lerntext": "the",
            "de": "der, die, das"
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
              "schrift": "phone",
              "lerntext": "phone",
              "de": "Handy"
            },
            {
              "schrift": "bag",
              "lerntext": "bag",
              "de": "Tasche"
            },
            {
              "schrift": "key",
              "lerntext": "key",
              "de": "Schlüssel"
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
              "schrift": "we",
              "lerntext": "we",
              "de": "wir"
            },
            {
              "schrift": "my",
              "lerntext": "my",
              "de": "mein"
            },
            {
              "schrift": "her",
              "lerntext": "her",
              "de": "ihr, sie"
            },
            {
              "schrift": "they",
              "lerntext": "they",
              "de": "sie (Mehrzahl)"
            },
            {
              "schrift": "his",
              "lerntext": "his",
              "de": "sein"
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
              "schrift": "example",
              "lerntext": "example",
              "de": "Beispiel"
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee"
            },
            {
              "schrift": "eye",
              "lerntext": "eye",
              "de": "Auge"
            },
            {
              "schrift": "those",
              "lerntext": "those",
              "de": "jene"
            },
            {
              "schrift": "old",
              "lerntext": "old",
              "de": "alt"
            },
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mir, mich"
            },
            {
              "schrift": "happy",
              "lerntext": "happy",
              "de": "glücklich"
            },
            {
              "schrift": "strong",
              "lerntext": "strong",
              "de": "stark"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "an",
            "lerntext": "an",
            "de": "ein (vor Vokal)"
          }
        ],
        "id": "2.3"
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
              "schrift": "family",
              "lerntext": "family",
              "de": "Familie"
            },
            {
              "schrift": "house",
              "lerntext": "house",
              "de": "Haus"
            },
            {
              "schrift": "flat",
              "lerntext": "flat",
              "de": "Wohnung"
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
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee"
            },
            {
              "schrift": "woman",
              "lerntext": "woman",
              "de": "Frau"
            },
            {
              "schrift": "door",
              "lerntext": "door",
              "de": "Tür"
            },
            {
              "schrift": "tired",
              "lerntext": "tired",
              "de": "müde"
            },
            {
              "schrift": "your",
              "lerntext": "your",
              "de": "dein, euer"
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
        "id": "2.4"
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
              "schrift": "job",
              "lerntext": "job",
              "de": "Arbeit, Stelle"
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem"
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
              "schrift": "passport",
              "lerntext": "passport",
              "de": "Pass"
            },
            {
              "schrift": "healthy",
              "lerntext": "healthy",
              "de": "gesund"
            },
            {
              "schrift": "young",
              "lerntext": "young",
              "de": "jung"
            },
            {
              "schrift": "answer",
              "lerntext": "answer",
              "de": "Antwort"
            },
            {
              "schrift": "house",
              "lerntext": "house",
              "de": "Haus"
            },
            {
              "schrift": "bed",
              "lerntext": "bed",
              "de": "Bett"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.5"
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
              "schrift": "mother",
              "lerntext": "mother",
              "de": "Mutter"
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder"
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester"
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn"
            },
            {
              "schrift": "doctor",
              "lerntext": "doctor",
              "de": "Arzt"
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "Auto"
            },
            {
              "schrift": "funny",
              "lerntext": "funny",
              "de": "lustig"
            },
            {
              "schrift": "boy",
              "lerntext": "boy",
              "de": "Junge"
            },
            {
              "schrift": "ticket",
              "lerntext": "ticket",
              "de": "Fahrkarte"
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
              "schrift": "daughter",
              "lerntext": "daughter",
              "de": "Tochter"
            },
            {
              "schrift": "husband",
              "lerntext": "husband",
              "de": "Ehemann"
            },
            {
              "schrift": "wife",
              "lerntext": "wife",
              "de": "Ehefrau"
            },
            {
              "schrift": "dog",
              "lerntext": "dog",
              "de": "Hund"
            },
            {
              "schrift": "cat",
              "lerntext": "cat",
              "de": "Katze"
            },
            {
              "schrift": "sister",
              "lerntext": "sister",
              "de": "Schwester"
            },
            {
              "schrift": "room",
              "lerntext": "room",
              "de": "Zimmer"
            },
            {
              "schrift": "beautiful",
              "lerntext": "beautiful",
              "de": "schön"
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem"
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
        "id": "2.7"
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
            "de": "dein, euer"
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
              "de": "Ort, Platz"
            },
            {
              "schrift": "its",
              "lerntext": "its",
              "de": "sein (sächlich)"
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
              "schrift": "busy",
              "lerntext": "busy",
              "de": "beschäftigt, besetzt"
            },
            {
              "schrift": "friend",
              "lerntext": "friend",
              "de": "Freund"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.8"
      },
      {
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
        "id": "2.9"
      }
    ]
  },
  {
    "number": 3,
    "title": "I want, I need",
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
              "schrift": "its",
              "lerntext": "its",
              "de": "sein (sächlich)"
            },
            {
              "schrift": "card",
              "lerntext": "card",
              "de": "Karte"
            },
            {
              "schrift": "brother",
              "lerntext": "brother",
              "de": "Bruder"
            },
            {
              "schrift": "money",
              "lerntext": "money",
              "de": "Geld"
            },
            {
              "schrift": "wife",
              "lerntext": "wife",
              "de": "Ehefrau"
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
              "schrift": "his",
              "lerntext": "his",
              "de": "sein"
            },
            {
              "schrift": "job",
              "lerntext": "job",
              "de": "Arbeit, Stelle"
            },
            {
              "schrift": "those",
              "lerntext": "those",
              "de": "jene"
            },
            {
              "schrift": "weak",
              "lerntext": "weak",
              "de": "schwach"
            },
            {
              "schrift": "flat",
              "lerntext": "flat",
              "de": "Wohnung"
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
              "schrift": "milk",
              "lerntext": "milk",
              "de": "Milch"
            },
            {
              "schrift": "example",
              "lerntext": "example",
              "de": "Beispiel"
            },
            {
              "schrift": "girl",
              "lerntext": "girl",
              "de": "Mädchen"
            },
            {
              "schrift": "passport",
              "lerntext": "passport",
              "de": "Pass"
            },
            {
              "schrift": "coffee",
              "lerntext": "coffee",
              "de": "Kaffee"
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
            "de": "du, ihr, Sie"
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
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Glas"
            },
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
              "schrift": "doctor",
              "lerntext": "doctor",
              "de": "Arzt"
            },
            {
              "schrift": "salt",
              "lerntext": "salt",
              "de": "Salz"
            },
            {
              "schrift": "tea",
              "lerntext": "tea",
              "de": "Tee"
            },
            {
              "schrift": "water",
              "lerntext": "water",
              "de": "Wasser"
            },
            {
              "schrift": "thirsty",
              "lerntext": "thirsty",
              "de": "durstig"
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student"
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
              "schrift": "bill",
              "lerntext": "bill",
              "de": "Rechnung"
            },
            {
              "schrift": "fish",
              "lerntext": "fish",
              "de": "Fisch"
            },
            {
              "schrift": "book",
              "lerntext": "book",
              "de": "Buch"
            },
            {
              "schrift": "these",
              "lerntext": "these",
              "de": "diese (Mehrzahl)"
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage"
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
        "task": "Order something to eat and to drink.",
        "newFrameWords": [],
        "id": "3.6"
      }
    ]
  },
  {
    "number": 4,
    "title": "Not and questions",
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
              "de": "frei, kostenlos"
            },
            {
              "schrift": "full",
              "lerntext": "full",
              "de": "voll, satt"
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
              "schrift": "breakfast",
              "lerntext": "breakfast",
              "de": "Frühstück"
            },
            {
              "schrift": "part",
              "lerntext": "part",
              "de": "Teil"
            },
            {
              "schrift": "colleague",
              "lerntext": "colleague",
              "de": "Kollege"
            },
            {
              "schrift": "hungry",
              "lerntext": "hungry",
              "de": "hungrig"
            },
            {
              "schrift": "wine",
              "lerntext": "wine",
              "de": "Wein"
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
            "de": "du, ihr, Sie"
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
              "de": "wissen, kennen"
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
              "schrift": "full",
              "lerntext": "full",
              "de": "voll, satt"
            },
            {
              "schrift": "free",
              "lerntext": "free",
              "de": "frei, kostenlos"
            },
            {
              "schrift": "her",
              "lerntext": "her",
              "de": "ihr, sie"
            },
            {
              "schrift": "medicine",
              "lerntext": "medicine",
              "de": "Medizin"
            },
            {
              "schrift": "pretty",
              "lerntext": "pretty",
              "de": "hübsch"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "do",
            "lerntext": "do",
            "de": "tun, machen"
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
            "de": "wer, der"
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
              "schrift": "know",
              "lerntext": "know",
              "de": "wissen, kennen"
            },
            {
              "schrift": "safe",
              "lerntext": "safe",
              "de": "sicher"
            },
            {
              "schrift": "see",
              "lerntext": "see",
              "de": "sehen"
            },
            {
              "schrift": "cat",
              "lerntext": "cat",
              "de": "Katze"
            },
            {
              "schrift": "lunch",
              "lerntext": "lunch",
              "de": "Mittagessen"
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
            "de": "wer, der"
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
              "de": "bedeuten, meinen"
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
              "schrift": "everything",
              "lerntext": "everything",
              "de": "alles"
            },
            {
              "schrift": "nothing",
              "lerntext": "nothing",
              "de": "nichts"
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "Sohn"
            },
            {
              "schrift": "dinner",
              "lerntext": "dinner",
              "de": "Abendessen"
            },
            {
              "schrift": "empty",
              "lerntext": "empty",
              "de": "leer"
            }
          ]
        ],
        "newCount": 4,
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
        "task": "Ask someone a question and say something is not true.",
        "newFrameWords": [],
        "id": "4.5"
      }
    ]
  },
  {
    "number": 5,
    "title": "Where is it?",
    "lessons": [
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
              "schrift": "pharmacy",
              "lerntext": "pharmacy",
              "de": "Apotheke"
            },
            {
              "schrift": "mean",
              "lerntext": "mean",
              "de": "bedeuten, meinen"
            },
            {
              "schrift": "think",
              "lerntext": "think",
              "de": "denken"
            },
            {
              "schrift": "plate",
              "lerntext": "plate",
              "de": "Teller"
            },
            {
              "schrift": "dog",
              "lerntext": "dog",
              "de": "Hund"
            },
            {
              "schrift": "father",
              "lerntext": "father",
              "de": "Vater"
            }
          ]
        ],
        "newCount": 5,
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
              "schrift": "restaurant",
              "lerntext": "restaurant",
              "de": "Restaurant"
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
              "schrift": "airport",
              "lerntext": "airport",
              "de": "Flughafen"
            },
            {
              "schrift": "pharmacy",
              "lerntext": "pharmacy",
              "de": "Apotheke"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel"
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte"
            },
            {
              "schrift": "key",
              "lerntext": "key",
              "de": "Schlüssel"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "5.2"
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
            "de": "an, bei"
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
              "schrift": "country",
              "lerntext": "country",
              "de": "Land"
            },
            {
              "schrift": "street",
              "lerntext": "street",
              "de": "Straße"
            },
            {
              "schrift": "way",
              "lerntext": "way",
              "de": "Weg"
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Ort, Platz"
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
              "schrift": "to",
              "lerntext": "to",
              "de": "zu, nach"
            },
            {
              "schrift": "from",
              "lerntext": "from",
              "de": "von, aus"
            },
            {
              "schrift": "toilet",
              "lerntext": "toilet",
              "de": "Toilette"
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
            "schrift": "on",
            "lerntext": "on",
            "de": "auf"
          },
          {
            "schrift": "at",
            "lerntext": "at",
            "de": "an, bei"
          },
          {
            "schrift": "to",
            "lerntext": "to",
            "de": "zu, nach"
          },
          {
            "schrift": "from",
            "lerntext": "from",
            "de": "von, aus"
          }
        ],
        "id": "5.3"
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
            "de": "an, bei"
          }
        ],
        "slotGroups": [
          [
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
              "schrift": "country",
              "lerntext": "country",
              "de": "Land"
            },
            {
              "schrift": "way",
              "lerntext": "way",
              "de": "Weg"
            },
            {
              "schrift": "street",
              "lerntext": "street",
              "de": "Straße"
            },
            {
              "schrift": "city",
              "lerntext": "city",
              "de": "Stadt"
            },
            {
              "schrift": "restaurant",
              "lerntext": "restaurant",
              "de": "Restaurant"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "5.4"
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
              "de": "über, mehr als"
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
              "schrift": "pub",
              "lerntext": "pub",
              "de": "Kneipe"
            },
            {
              "schrift": "school",
              "lerntext": "school",
              "de": "Schule"
            },
            {
              "schrift": "with",
              "lerntext": "with",
              "de": "mit"
            },
            {
              "schrift": "world",
              "lerntext": "world",
              "de": "Welt"
            },
            {
              "schrift": "university",
              "lerntext": "university",
              "de": "Universität"
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
            "de": "von, per"
          },
          {
            "schrift": "about",
            "lerntext": "about",
            "de": "über"
          }
        ],
        "id": "5.5"
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
              "schrift": "over",
              "lerntext": "over",
              "de": "über, mehr als"
            },
            {
              "schrift": "behind",
              "lerntext": "behind",
              "de": "hinter"
            },
            {
              "schrift": "near",
              "lerntext": "near",
              "de": "nahe"
            },
            {
              "schrift": "under",
              "lerntext": "under",
              "de": "unter"
            },
            {
              "schrift": "about",
              "lerntext": "about",
              "de": "über"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "5.6"
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
              "schrift": "around",
              "lerntext": "around",
              "de": "um herum"
            },
            {
              "schrift": "next to",
              "lerntext": "next to",
              "de": "neben"
            },
            {
              "schrift": "through",
              "lerntext": "through",
              "de": "durch"
            },
            {
              "schrift": "phone",
              "lerntext": "phone",
              "de": "Handy"
            },
            {
              "schrift": "dangerous",
              "lerntext": "dangerous",
              "de": "gefährlich"
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
        "task": "Ask the way to three places.",
        "newFrameWords": [],
        "id": "5.8"
      }
    ]
  },
  {
    "number": 6,
    "title": "Numbers and prices",
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
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende"
            },
            {
              "schrift": "eleven",
              "lerntext": "eleven",
              "de": "elf"
            },
            {
              "schrift": "ninety",
              "lerntext": "ninety",
              "de": "neunzig"
            },
            {
              "schrift": "eighteen",
              "lerntext": "eighteen",
              "de": "achtzehn"
            },
            {
              "schrift": "sixty",
              "lerntext": "sixty",
              "de": "sechzig"
            },
            {
              "schrift": "five",
              "lerntext": "five",
              "de": "fünf"
            }
          ]
        ],
        "newCount": 5,
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
          "schrift": "it is too [Slot]",
          "lerntext": "it is too [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [
          {
            "schrift": "too",
            "lerntext": "too",
            "de": "zu, auch"
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
              "schrift": "price",
              "lerntext": "price",
              "de": "Preis"
            },
            {
              "schrift": "hundred",
              "lerntext": "hundred",
              "de": "hundert"
            },
            {
              "schrift": "inside",
              "lerntext": "inside",
              "de": "drinnen"
            },
            {
              "schrift": "zero",
              "lerntext": "zero",
              "de": "null"
            },
            {
              "schrift": "thousand",
              "lerntext": "thousand",
              "de": "tausend"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "too",
            "lerntext": "too",
            "de": "zu, auch"
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
        "id": "6.5"
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
            "de": "zu, auch"
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
              "de": "leicht, hell"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang"
            },
            {
              "schrift": "cheap",
              "lerntext": "cheap",
              "de": "billig"
            },
            {
              "schrift": "number",
              "lerntext": "number",
              "de": "Nummer"
            },
            {
              "schrift": "twenty",
              "lerntext": "twenty",
              "de": "zwanzig"
            },
            {
              "schrift": "little",
              "lerntext": "little",
              "de": "wenig"
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
              "schrift": "next",
              "lerntext": "next",
              "de": "nächster"
            },
            {
              "schrift": "heavy",
              "lerntext": "heavy",
              "de": "schwer"
            },
            {
              "schrift": "nine",
              "lerntext": "nine",
              "de": "neun"
            },
            {
              "schrift": "thirty",
              "lerntext": "thirty",
              "de": "dreissig"
            },
            {
              "schrift": "big",
              "lerntext": "big",
              "de": "groß"
            },
            {
              "schrift": "high",
              "lerntext": "high",
              "de": "hoch"
            }
          ]
        ],
        "newCount": 5,
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
        "task": "Ask what something costs and say a number.",
        "newFrameWords": [],
        "id": "6.8"
      }
    ]
  },
  {
    "number": 7,
    "title": "I can, I must",
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
            "de": "du, ihr, Sie"
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
              "de": "gehen, laufen"
            },
            {
              "schrift": "wash",
              "lerntext": "wash",
              "de": "waschen"
            },
            {
              "schrift": "last",
              "lerntext": "last",
              "de": "letzter"
            },
            {
              "schrift": "more",
              "lerntext": "more",
              "de": "mehr"
            },
            {
              "schrift": "fifteen",
              "lerntext": "fifteen",
              "de": "fünfzehn"
            },
            {
              "schrift": "first",
              "lerntext": "first",
              "de": "erster"
            },
            {
              "schrift": "home",
              "lerntext": "home",
              "de": "nach Hause"
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
            "de": "du, ihr, Sie"
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
              "schrift": "walk",
              "lerntext": "walk",
              "de": "gehen, laufen"
            },
            {
              "schrift": "dance",
              "lerntext": "dance",
              "de": "tanzen"
            },
            {
              "schrift": "four",
              "lerntext": "four",
              "de": "vier"
            },
            {
              "schrift": "eighty",
              "lerntext": "eighty",
              "de": "achtzig"
            },
            {
              "schrift": "shift",
              "lerntext": "shift",
              "de": "Schicht"
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
              "de": "arbeiten, funktionieren"
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
              "de": "gehen, laufen"
            },
            {
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten"
            },
            {
              "schrift": "write",
              "lerntext": "write",
              "de": "schreiben"
            },
            {
              "schrift": "speak",
              "lerntext": "speak",
              "de": "sprechen"
            },
            {
              "schrift": "read",
              "lerntext": "read",
              "de": "lesen"
            },
            {
              "schrift": "help",
              "lerntext": "help",
              "de": "helfen"
            },
            {
              "schrift": "expensive",
              "lerntext": "expensive",
              "de": "teuer"
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
              "schrift": "wait",
              "lerntext": "wait",
              "de": "warten"
            },
            {
              "schrift": "work",
              "lerntext": "work",
              "de": "arbeiten, funktionieren"
            },
            {
              "schrift": "again",
              "lerntext": "again",
              "de": "wieder"
            },
            {
              "schrift": "nineteen",
              "lerntext": "nineteen",
              "de": "neunzehn"
            },
            {
              "schrift": "two",
              "lerntext": "two",
              "de": "zwei"
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
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen"
            },
            {
              "schrift": "answer",
              "lerntext": "answer",
              "de": "Antwort"
            },
            {
              "schrift": "try",
              "lerntext": "try",
              "de": "versuchen"
            },
            {
              "schrift": "call",
              "lerntext": "call",
              "de": "rufen, anrufen"
            },
            {
              "schrift": "look",
              "lerntext": "look",
              "de": "schauen"
            },
            {
              "schrift": "seventy",
              "lerntext": "seventy",
              "de": "siebzig"
            },
            {
              "schrift": "next",
              "lerntext": "next",
              "de": "nächster"
            },
            {
              "schrift": "low",
              "lerntext": "low",
              "de": "niedrig"
            },
            {
              "schrift": "second",
              "lerntext": "second",
              "de": "zweiter"
            },
            {
              "schrift": "six",
              "lerntext": "six",
              "de": "sechs"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "7.5"
      },
      {
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
        "id": "7.6"
      }
    ]
  },
  {
    "number": 8,
    "title": "I go, I come",
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
              "schrift": "try",
              "lerntext": "try",
              "de": "versuchen"
            },
            {
              "schrift": "sixteen",
              "lerntext": "sixteen",
              "de": "sechzehn"
            },
            {
              "schrift": "ten",
              "lerntext": "ten",
              "de": "zehn"
            },
            {
              "schrift": "fourteen",
              "lerntext": "fourteen",
              "de": "vierzehn"
            },
            {
              "schrift": "start",
              "lerntext": "start",
              "de": "starten"
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
          "schrift": "he goes [Slot]",
          "lerntext": "he goes [Slot]"
        },
        "frameDe": "Er geht [Slot].",
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
              "de": "bewegen, umziehen"
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
              "schrift": "bring",
              "lerntext": "bring",
              "de": "bringen"
            },
            {
              "schrift": "happen",
              "lerntext": "happen",
              "de": "geschehen"
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug"
            },
            {
              "schrift": "seven",
              "lerntext": "seven",
              "de": "sieben"
            },
            {
              "schrift": "sleep",
              "lerntext": "sleep",
              "de": "schlafen"
            },
            {
              "schrift": "call",
              "lerntext": "call",
              "de": "rufen, anrufen"
            },
            {
              "schrift": "run",
              "lerntext": "run",
              "de": "rennen"
            }
          ]
        ],
        "newCount": 5,
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
              "de": "bekommen, werden"
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
              "de": "legen, stellen"
            },
            {
              "schrift": "keep",
              "lerntext": "keep",
              "de": "behalten"
            },
            {
              "schrift": "bring",
              "lerntext": "bring",
              "de": "bringen"
            },
            {
              "schrift": "happen",
              "lerntext": "happen",
              "de": "geschehen"
            },
            {
              "schrift": "cheese",
              "lerntext": "cheese",
              "de": "Käse"
            },
            {
              "schrift": "forget",
              "lerntext": "forget",
              "de": "vergessen"
            },
            {
              "schrift": "against",
              "lerntext": "against",
              "de": "gegen"
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
              "de": "verlassen, abfahren"
            },
            {
              "schrift": "turn",
              "lerntext": "turn",
              "de": "drehen, abbiegen"
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
              "schrift": "put",
              "lerntext": "put",
              "de": "legen, stellen"
            },
            {
              "schrift": "take",
              "lerntext": "take",
              "de": "nehmen"
            },
            {
              "schrift": "keep",
              "lerntext": "keep",
              "de": "behalten"
            },
            {
              "schrift": "get",
              "lerntext": "get",
              "de": "bekommen, werden"
            },
            {
              "schrift": "three",
              "lerntext": "three",
              "de": "drei"
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
            "de": "gerade, nur"
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
              "de": "leben, wohnen"
            },
            {
              "schrift": "sit",
              "lerntext": "sit",
              "de": "sitzen"
            },
            {
              "schrift": "understand",
              "lerntext": "understand",
              "de": "verstehen"
            },
            {
              "schrift": "ask",
              "lerntext": "ask",
              "de": "fragen"
            },
            {
              "schrift": "teacher",
              "lerntext": "teacher",
              "de": "Lehrer"
            },
            {
              "schrift": "name",
              "lerntext": "name",
              "de": "Name"
            },
            {
              "schrift": "anything",
              "lerntext": "anything",
              "de": "irgendetwas"
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
            "de": "gerade, nur"
          },
          {
            "schrift": "only",
            "lerntext": "only",
            "de": "nur"
          }
        ],
        "id": "8.5"
      },
      {
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
        "id": "8.6"
      }
    ]
  },
  {
    "number": 9,
    "title": "Time",
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
              "de": "noch nicht, schon"
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
              "schrift": "already",
              "lerntext": "already",
              "de": "schon"
            },
            {
              "schrift": "yet",
              "lerntext": "yet",
              "de": "noch nicht, schon"
            },
            {
              "schrift": "visit",
              "lerntext": "visit",
              "de": "besuchen"
            },
            {
              "schrift": "arrive",
              "lerntext": "arrive",
              "de": "ankommen"
            },
            {
              "schrift": "soon",
              "lerntext": "soon",
              "de": "bald"
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
              "schrift": "day",
              "lerntext": "day",
              "de": "Tag"
            },
            {
              "schrift": "week",
              "lerntext": "week",
              "de": "Woche"
            },
            {
              "schrift": "month",
              "lerntext": "month",
              "de": "Monat"
            },
            {
              "schrift": "morning",
              "lerntext": "morning",
              "de": "Morgen"
            },
            {
              "schrift": "meat",
              "lerntext": "meat",
              "de": "Fleisch"
            },
            {
              "schrift": "give",
              "lerntext": "give",
              "de": "geben"
            },
            {
              "schrift": "for",
              "lerntext": "for",
              "de": "für"
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch"
            }
          ]
        ],
        "newCount": 5,
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
        "frameDe": "Es dauert eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "year",
              "lerntext": "year",
              "de": "Jahr"
            },
            {
              "schrift": "time",
              "lerntext": "time",
              "de": "Zeit"
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
              "schrift": "beginning",
              "lerntext": "beginning",
              "de": "Anfang"
            },
            {
              "schrift": "drive",
              "lerntext": "drive",
              "de": "fahren"
            },
            {
              "schrift": "play",
              "lerntext": "play",
              "de": "spielen"
            },
            {
              "schrift": "rarely",
              "lerntext": "rarely",
              "de": "selten"
            },
            {
              "schrift": "eight",
              "lerntext": "eight",
              "de": "acht"
            },
            {
              "schrift": "bus",
              "lerntext": "bus",
              "de": "Bus"
            }
          ]
        ],
        "newCount": 5,
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
        "task": "Make a plan for tomorrow.",
        "newFrameWords": [],
        "id": "9.5"
      }
    ]
  },
  {
    "number": 10,
    "title": "I like, I love",
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
              "schrift": "day",
              "lerntext": "day",
              "de": "Tag"
            },
            {
              "schrift": "sing",
              "lerntext": "sing",
              "de": "singen"
            },
            {
              "schrift": "of",
              "lerntext": "of",
              "de": "von"
            },
            {
              "schrift": "by",
              "lerntext": "by",
              "de": "von, per"
            },
            {
              "schrift": "someone",
              "lerntext": "someone",
              "de": "jemand"
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
              "schrift": "rain",
              "lerntext": "rain",
              "de": "Regen"
            },
            {
              "schrift": "something",
              "lerntext": "something",
              "de": "etwas"
            },
            {
              "schrift": "show",
              "lerntext": "show",
              "de": "zeigen"
            },
            {
              "schrift": "week",
              "lerntext": "week",
              "de": "Woche"
            },
            {
              "schrift": "still",
              "lerntext": "still",
              "de": "noch"
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
            "de": "ihm, ihn"
          },
          {
            "schrift": "her",
            "lerntext": "her",
            "de": "ihr, sie"
          },
          {
            "schrift": "us",
            "lerntext": "us",
            "de": "uns"
          },
          {
            "schrift": "them",
            "lerntext": "them",
            "de": "ihnen, sie"
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
              "de": "Ding, Sache"
            },
            {
              "schrift": "reason",
              "lerntext": "reason",
              "de": "Grund"
            },
            {
              "schrift": "him",
              "lerntext": "him",
              "de": "ihm, ihn"
            },
            {
              "schrift": "them",
              "lerntext": "them",
              "de": "ihnen, sie"
            },
            {
              "schrift": "us",
              "lerntext": "us",
              "de": "uns"
            },
            {
              "schrift": "mountain",
              "lerntext": "mountain",
              "de": "Berg"
            },
            {
              "schrift": "month",
              "lerntext": "month",
              "de": "Monat"
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
              "schrift": "person",
              "lerntext": "person",
              "de": "Person"
            },
            {
              "schrift": "thing",
              "lerntext": "thing",
              "de": "Ding, Sache"
            },
            {
              "schrift": "turn",
              "lerntext": "turn",
              "de": "drehen, abbiegen"
            },
            {
              "schrift": "tell",
              "lerntext": "tell",
              "de": "erzählen"
            },
            {
              "schrift": "love",
              "lerntext": "love",
              "de": "Liebe"
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
              "schrift": "white",
              "lerntext": "white",
              "de": "weiß"
            },
            {
              "schrift": "green",
              "lerntext": "green",
              "de": "grün"
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film"
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
              "schrift": "clean",
              "lerntext": "clean",
              "de": "sauber"
            },
            {
              "schrift": "beginning",
              "lerntext": "beginning",
              "de": "Anfang"
            },
            {
              "schrift": "third",
              "lerntext": "third",
              "de": "dritter"
            },
            {
              "schrift": "seventeen",
              "lerntext": "seventeen",
              "de": "siebzehn"
            },
            {
              "schrift": "man",
              "lerntext": "man",
              "de": "Mann"
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
              "de": "heiß, scharf"
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
              "de": "süß"
            },
            {
              "schrift": "delicious",
              "lerntext": "delicious",
              "de": "lecker"
            },
            {
              "schrift": "spicy",
              "lerntext": "spicy",
              "de": "scharf"
            },
            {
              "schrift": "fresh",
              "lerntext": "fresh",
              "de": "frisch"
            },
            {
              "schrift": "glass",
              "lerntext": "glass",
              "de": "Glas"
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
              "schrift": "good",
              "lerntext": "good",
              "de": "gut"
            },
            {
              "schrift": "almost",
              "lerntext": "almost",
              "de": "fast"
            },
            {
              "schrift": "bad",
              "lerntext": "bad",
              "de": "schlecht"
            },
            {
              "schrift": "sad",
              "lerntext": "sad",
              "de": "traurig"
            },
            {
              "schrift": "move",
              "lerntext": "move",
              "de": "bewegen, umziehen"
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
              "de": "richtig, rechts"
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
              "de": "interessant"
            },
            {
              "schrift": "bank",
              "lerntext": "bank",
              "de": "Bank (Geldinstitut)"
            },
            {
              "schrift": "into",
              "lerntext": "into",
              "de": "hinein"
            },
            {
              "schrift": "short",
              "lerntext": "short",
              "de": "kurz"
            },
            {
              "schrift": "leave",
              "lerntext": "leave",
              "de": "verlassen, abfahren"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.9"
      },
      {
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
        "id": "10.10"
      }
    ]
  },
  {
    "number": 11,
    "title": "Yesterday and tomorrow",
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
              "schrift": "usual",
              "lerntext": "usual",
              "de": "üblich"
            },
            {
              "schrift": "until",
              "lerntext": "until",
              "de": "bis"
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig"
            },
            {
              "schrift": "dirty",
              "lerntext": "dirty",
              "de": "schmutzig"
            },
            {
              "schrift": "kind",
              "lerntext": "kind",
              "de": "freundlich"
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
              "schrift": "late",
              "lerntext": "late",
              "de": "spät"
            },
            {
              "schrift": "warm",
              "lerntext": "warm",
              "de": "warm"
            },
            {
              "schrift": "be",
              "lerntext": "be",
              "de": "sein"
            },
            {
              "schrift": "daughter",
              "lerntext": "daughter",
              "de": "Tochter"
            },
            {
              "schrift": "year",
              "lerntext": "year",
              "de": "Jahr"
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
              "schrift": "finish",
              "lerntext": "finish",
              "de": "beenden"
            },
            {
              "schrift": "win",
              "lerntext": "win",
              "de": "gewinnen"
            },
            {
              "schrift": "lose",
              "lerntext": "lose",
              "de": "verlieren"
            },
            {
              "schrift": "order",
              "lerntext": "order",
              "de": "bestellen"
            },
            {
              "schrift": "reserve",
              "lerntext": "reserve",
              "de": "reservieren"
            },
            {
              "schrift": "buy",
              "lerntext": "buy",
              "de": "kaufen"
            },
            {
              "schrift": "never",
              "lerntext": "never",
              "de": "nie"
            },
            {
              "schrift": "let",
              "lerntext": "let",
              "de": "lassen"
            },
            {
              "schrift": "ill",
              "lerntext": "ill",
              "de": "krank"
            },
            {
              "schrift": "bag",
              "lerntext": "bag",
              "de": "Tasche"
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
              "schrift": "reserve",
              "lerntext": "reserve",
              "de": "reservieren"
            },
            {
              "schrift": "win",
              "lerntext": "win",
              "de": "gewinnen"
            },
            {
              "schrift": "lose",
              "lerntext": "lose",
              "de": "verlieren"
            },
            {
              "schrift": "story",
              "lerntext": "story",
              "de": "Geschichte"
            },
            {
              "schrift": "slowly",
              "lerntext": "slowly",
              "de": "langsam"
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
        "id": "11.5"
      }
    ]
  },
  {
    "number": 12,
    "title": "Putting sentences together",
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
              "de": "wenn, falls"
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
              "de": "seit, da"
            },
            {
              "schrift": "quickly",
              "lerntext": "quickly",
              "de": "schnell"
            },
            {
              "schrift": "end",
              "lerntext": "end",
              "de": "Ende"
            },
            {
              "schrift": "luggage",
              "lerntext": "luggage",
              "de": "Gepäck"
            },
            {
              "schrift": "hear",
              "lerntext": "hear",
              "de": "hören"
            },
            {
              "schrift": "between",
              "lerntext": "between",
              "de": "zwischen"
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
              "de": "studieren, lernen"
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
              "schrift": "husband",
              "lerntext": "husband",
              "de": "Ehemann"
            },
            {
              "schrift": "find",
              "lerntext": "find",
              "de": "finden"
            },
            {
              "schrift": "weather",
              "lerntext": "weather",
              "de": "Wetter"
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
          "schrift": "it is [Slot] than that",
          "lerntext": "it is [Slot] than that"
        },
        "frameDe": "Es ist [Slot] als das.",
        "pronouns": [
          {
            "schrift": "than",
            "lerntext": "than",
            "de": "als (Vergleich)"
          },
          {
            "schrift": "as",
            "lerntext": "as",
            "de": "als, wie"
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
              "schrift": "continue",
              "lerntext": "continue",
              "de": "fortsetzen"
            },
            {
              "schrift": "therefore",
              "lerntext": "therefore",
              "de": "deshalb"
            },
            {
              "schrift": "change",
              "lerntext": "change",
              "de": "ändern"
            },
            {
              "schrift": "sea",
              "lerntext": "sea",
              "de": "Meer"
            },
            {
              "schrift": "well",
              "lerntext": "well",
              "de": "gut"
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
            "de": "als, wie"
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
              "schrift": "tall",
              "lerntext": "tall",
              "de": "groß (Person)"
            },
            {
              "schrift": "always",
              "lerntext": "always",
              "de": "immer"
            },
            {
              "schrift": "blue",
              "lerntext": "blue",
              "de": "blau"
            },
            {
              "schrift": "sun",
              "lerntext": "sun",
              "de": "Sonne"
            },
            {
              "schrift": "travel",
              "lerntext": "travel",
              "de": "reisen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "12.4"
      },
      {
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
        "id": "12.5"
      }
    ]
  },
  {
    "number": 13,
    "title": "Body and health",
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
              "schrift": "nobody",
              "lerntext": "nobody",
              "de": "niemand"
            },
            {
              "schrift": "few",
              "lerntext": "few",
              "de": "wenige"
            },
            {
              "schrift": "life",
              "lerntext": "life",
              "de": "Leben"
            },
            {
              "schrift": "easy",
              "lerntext": "easy",
              "de": "einfach"
            },
            {
              "schrift": "even",
              "lerntext": "even",
              "de": "sogar"
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
              "de": "Kopf"
            },
            {
              "schrift": "hand",
              "lerntext": "hand",
              "de": "Hand"
            },
            {
              "schrift": "mouth",
              "lerntext": "mouth",
              "de": "Mund"
            },
            {
              "schrift": "foot",
              "lerntext": "foot",
              "de": "Fuß"
            },
            {
              "schrift": "true",
              "lerntext": "true",
              "de": "wahr"
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
          "schrift": "I feel [Slot]",
          "lerntext": "I feel [Slot]"
        },
        "frameDe": "Ich fühle mich [Slot].",
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
              "schrift": "arm",
              "lerntext": "arm",
              "de": "Arm"
            },
            {
              "schrift": "hair",
              "lerntext": "hair",
              "de": "Haare"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Schmerz"
            },
            {
              "schrift": "body",
              "lerntext": "body",
              "de": "Körper"
            },
            {
              "schrift": "evening",
              "lerntext": "evening",
              "de": "Abend"
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
        "id": "13.4"
      }
    ]
  },
  {
    "number": 14,
    "title": "Clothes, work and people",
    "lessons": [
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
              "schrift": "clothes",
              "lerntext": "clothes",
              "de": "Kleidung"
            },
            {
              "schrift": "word",
              "lerntext": "word",
              "de": "Wort"
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
              "schrift": "so",
              "lerntext": "so",
              "de": "also"
            },
            {
              "schrift": "study",
              "lerntext": "study",
              "de": "studieren, lernen"
            },
            {
              "schrift": "different",
              "lerntext": "different",
              "de": "verschieden"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "14.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I work with a [Slot]",
          "lerntext": "I work with a [Slot]"
        },
        "frameDe": "Ich arbeite mit einem [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "customer",
              "lerntext": "customer",
              "de": "Kunde"
            },
            {
              "schrift": "kitchen",
              "lerntext": "kitchen",
              "de": "Küche"
            },
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
              "schrift": "language",
              "lerntext": "language",
              "de": "Sprache"
            },
            {
              "schrift": "clothes",
              "lerntext": "clothes",
              "de": "Kleidung"
            },
            {
              "schrift": "learn",
              "lerntext": "learn",
              "de": "lernen"
            },
            {
              "schrift": "police",
              "lerntext": "police",
              "de": "Polizei"
            },
            {
              "schrift": "mother",
              "lerntext": "mother",
              "de": "Mutter"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "14.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "I work with a [Slot]",
          "lerntext": "I work with a [Slot]"
        },
        "frameDe": "Ich arbeite mit einem [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "colleague",
              "lerntext": "colleague",
              "de": "Kollege"
            },
            {
              "schrift": "wear",
              "lerntext": "wear",
              "de": "tragen (Kleidung)"
            },
            {
              "schrift": "teach",
              "lerntext": "teach",
              "de": "unterrichten"
            },
            {
              "schrift": "kitchen",
              "lerntext": "kitchen",
              "de": "Küche"
            },
            {
              "schrift": "customer",
              "lerntext": "customer",
              "de": "Kunde"
            },
            {
              "schrift": "whose",
              "lerntext": "whose",
              "de": "wessen"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.3"
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
              "schrift": "half",
              "lerntext": "half",
              "de": "halb"
            },
            {
              "schrift": "him",
              "lerntext": "him",
              "de": "ihm, ihn"
            },
            {
              "schrift": "badly",
              "lerntext": "badly",
              "de": "schlecht"
            },
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende"
            },
            {
              "schrift": "lecture",
              "lerntext": "lecture",
              "de": "Vorlesung"
            },
            {
              "schrift": "each",
              "lerntext": "each",
              "de": "jeder einzelne"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "14.4"
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
            },
            {
              "schrift": "double",
              "lerntext": "double",
              "de": "doppelt"
            },
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
              "schrift": "half",
              "lerntext": "half",
              "de": "halb"
            },
            {
              "schrift": "English",
              "lerntext": "English",
              "de": "englisch"
            },
            {
              "schrift": "often",
              "lerntext": "often",
              "de": "oft"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "14.5"
      },
      {
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
        "id": "14.6"
      }
    ]
  },
  {
    "number": 15,
    "title": "Everyday actions",
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
              "schrift": "mine",
              "lerntext": "mine",
              "de": "meiner"
            },
            {
              "schrift": "yours",
              "lerntext": "yours",
              "de": "deiner"
            },
            {
              "schrift": "double",
              "lerntext": "double",
              "de": "doppelt"
            },
            {
              "schrift": "sign",
              "lerntext": "sign",
              "de": "unterschreiben"
            },
            {
              "schrift": "borrow",
              "lerntext": "borrow",
              "de": "sich leihen"
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
              "de": "machen, herstellen"
            },
            {
              "schrift": "choose",
              "lerntext": "choose",
              "de": "wählen"
            },
            {
              "schrift": "smile",
              "lerntext": "smile",
              "de": "lächeln"
            },
            {
              "schrift": "say",
              "lerntext": "say",
              "de": "sagen"
            },
            {
              "schrift": "mine",
              "lerntext": "mine",
              "de": "meiner"
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
              "schrift": "make",
              "lerntext": "make",
              "de": "machen, herstellen"
            },
            {
              "schrift": "use",
              "lerntext": "use",
              "de": "benutzen"
            },
            {
              "schrift": "yours",
              "lerntext": "yours",
              "de": "deiner"
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
          "schrift": "[Slot] do you ask?",
          "lerntext": "[Slot] do you ask?"
        },
        "frameDe": "[Slot] fragst du?",
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
              "schrift": "cost",
              "lerntext": "cost",
              "de": "kosten"
            },
            {
              "schrift": "stand",
              "lerntext": "stand",
              "de": "stehen"
            },
            {
              "schrift": "without",
              "lerntext": "without",
              "de": "ohne"
            },
            {
              "schrift": "watch",
              "lerntext": "watch",
              "de": "ansehen"
            },
            {
              "schrift": "cry",
              "lerntext": "cry",
              "de": "weinen"
            },
            {
              "schrift": "enjoy",
              "lerntext": "enjoy",
              "de": "genießen"
            }
          ]
        ],
        "newCount": 5,
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
              "schrift": "to be called",
              "lerntext": "to be called",
              "de": "heißen"
            },
            {
              "schrift": "marry",
              "lerntext": "marry",
              "de": "heiraten"
            },
            {
              "schrift": "cost",
              "lerntext": "cost",
              "de": "kosten"
            },
            {
              "schrift": "people",
              "lerntext": "people",
              "de": "Leute"
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "15.5"
      },
      {
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
        "id": "15.6"
      }
    ]
  }
];
