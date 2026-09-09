# Der geführte Pfad — Entwurf

Unabhängige Neuplanung vom 2026-09-04, auf Simons Auftrag: „prüfe VOLLKOMMEN
UNABHÄNGIG von irgendwelchen Notizen oder meinen Anordnungen". Was hier steht,
ist aus den Wortlisten und der Fachliteratur abgeleitet, nicht aus dem
bestehenden Chinesisch-Kurs.

---

## 1. Was in den Wortlisten wirklich steht

Zuerst geprüft, bevor irgendetwas geplant wurde.

| | Einträge | Wortart | Frequenz | Formen | Besonderheit |
|---|---|---|---|---|---|
| `schwedisch_vocab` | 501 | ja | nein | **Präsens/Präteritum/Supinum** | Nomen mit Genus + Plural |
| `englisch_vocab` | 500 | ja | `frequency_rank` | nein | — |
| `chinesisch_vocab` | 530 | nein | `hsk_level` | entfällt | Pinyin + Hanzi |

**Befund 1 — der englische `frequency_rank` ist keine Frequenzliste.**
Er nummeriert nach Wortart durch: Artikel 1–3, Pronomen 4–43, Fragewörter
44–53, Konjunktionen 54–68, Präpositionen 69–93, Adverbien 94–143, Zahlwörter
144–181, Verben 182–281, Adjektive 282–356, Nomen 357–500. Eine echte
Frequenzliste beginnt mit *the, be, to, of, and*. **Innerhalb** jedes Blocks
ist aber sauber nach Frequenz sortiert (*be, have, do, say, go, get, make…*
ist exakt die reale englische Verbreihenfolge). Die Liste ist also brauchbar —
nur darf man Rang 182 nicht als „das 182.-häufigste Wort" lesen.

**Befund 2 — Schwedisch nennt Verben im Infinitiv, gesprochen wird Präsens.**
In der Spalte steht `vara`, gesagt wird `är`. Ein Kurs, der die Spalte direkt
einsetzt, bringt Anfängern „jag vara" bei. Der Generator muss `forms.present`
nehmen. Betrifft alle 96 Verben.

**Befund 3 — Chinesisch hat keine Wortart-Spalte** (`wortart` ist durchgängig
leer). Für die Rollenzuordnung muss sie abgeleitet werden.

---

## 2. Die vier Zahlen, an denen der Kurs hängt

Aus der Fachliteratur, nicht aus dem Bauchgefühl.

**a) 6–10 neue Einheiten pro Lektion.** Cognitive-Load-Grenze für
Sekundarstufen-Lernende. Wir nehmen **5 neue Wörter je Lektion** — am unteren
Rand, weil unsere Einheiten *produktiv* geübt werden (laut aussprechen), nicht
nur wiedererkannt.

**b) ~18 Begegnungen für produktives Können**, ~14 für Wiedererkennen
(Laufer & Rozovski-Roitblat 2015). **Das ist die Zahl, die der bisherige
Aufbau verfehlt:** ein Wort erscheint in seiner Lektion dreimal
(nachsprechen → abrufen → Satz) und danach nur noch, wenn FSRS es zufällig
hochspült. Drei Begegnungen sind keine 18.

**c) Verteiltes Üben schlägt geballtes Üben** — durchgängiger Befund.
FSRS erledigt das nach der Einführung. Davor nicht.

**d) Was man mit dem Wort tut, zählt mehr als wie oft man es sieht.**
Abrufen aus dem Gedächtnis schlägt Wiederlesen deutlich.

---

## 3. Die sieben Entwurfsregeln

**R1 — Die Lerneinheit ist der Satzrahmen, nicht das Wort.**
Formelhafte Sequenzen werden schneller verarbeitet, verbessern die
Sprechflüssigkeit messbar und erlauben mehr Sprachkontakt bei *gleicher*
kognitiver Last. Für eine Sprech-App ist das die wichtigste Einzelentscheidung.
→ Satz zuerst, dann die Wörter einzeln. Das bestätigt den bisherigen Aufbau.

**R2 — Höchstens 5 neue Wörter je Lektion.**
Ausnahme: geschlossene Reihen (Zahlen 1–10), die als Abfolge gelernt werden.

**R3 — Wiederverwendung ist Pflicht, nicht Zierde.**
Ab Modul 2 füllt jede Lektion bis zu 10 ihrer Slots mit **bereits gelernten**
Wörtern. Die kosten kein Neu-Budget, liefern aber Begegnung 5, 6, 7 …
**Das ist die zentrale Änderung gegenüber dem bisherigen Kurs.**

*Nachgeschärft am 07.09.2026.* Ursprünglich standen hier 2 wiederverwendete
Slots, und die Rechnung ging trotzdem nicht auf: gemessen blieb je nach
Sprache fast die Hälfte der Wörter unter 6 Kurs-Begegnungen, 9–15 % wurden
nach ihrer Einführung **nie wieder** angefasst. Drei Dinge waren schuld, und
alle drei sind behoben:

1. **Eine Wiederholung kostete so viel wie eine Einführung.** Der
   Übungs-Screen spielte für *jedes* Slot-Wort Teaser, Nachsprechen,
   Abrufen und Satz — auch für bekannte. Wiederholung war dadurch so teuer,
   dass kaum welche hineinpasste, und die Lektionen waren mit 33–41
   Schritten doppelt so lang wie unten geplant. Ein wiederholtes Wort trägt
   jetzt `wieder: true` (siehe `courseTypes.ts`) und bekommt nur noch den
   Satz-Schritt: es im neuen Rahmen selbst produzieren. Genau das ist der
   zweite Zusammenhang, um den es geht.
2. **Der Rand ließ sich nicht durch mehr Plätze erreichen.** Ein Wort aus
   den letzten Lektionen eines Moduls hat keine spätere Lektion mehr. Egal
   wie hoch die Zahl stand, 4–15 % blieben ohne Wiederholung. Deshalb endet
   jedes Modul jetzt mit bis zu vier **Wiederholungs-Lektionen** (`newCount:
   0`), die gezielt die schwächsten Wörter in einen Rahmen setzen, in dem
   sie schon einmal standen — der Satz bleibt dadurch grammatisch. Sie
   zählen gegen die 20-Lektionen-Grenze je Modul, damit die Pille im Pfad
   scrollbar bleibt.
3. **Rahmenwörter wurden einmal gezählt.** Ein Wort, das fest im Satzmuster
   steht, wird in *jeder* Lektion dieses Rahmens mitgesprochen. Gebucht wird
   deshalb erst nach den Lektionen des Rahmens, mit ihrer Anzahl.

Ergebnis über alle zehn Sprachen: Schnitt **6,1–7,4** Kurs-Begegnungen je
Wort, **1–3 %** ohne jede Wiederholung, Median **16–20 Schritte** je Lektion.

**R4 — Reihenfolge nach kombinatorischer Kraft, nicht nach Frequenz.**
Die 100 häufigsten Wörter decken ~50 % aller Vorkommen ab und sind fast alle
Funktionswörter — die allein sagen aber nichts. Zuerst kommt, was die meisten
*sagbaren Sätze* freischaltet: Personalpronomen → Kopula → haben/wollen/
brauchen → Verneinung → Frage. Nach Modul 4 kann der Nutzer bejahen,
verneinen und fragen; das vervierfacht den Satzraum, bevor ein einziges
Themenwort gelernt ist.

**R5 — Kein unbekanntes Wort an fester Rahmenstelle.**
Der Rahmen ist der Halt. Steht dort etwas Ungelerntes, ist die Lektion ein
Ratespiel. Der Generator bricht ab, statt zu warnen.

**R6 — Rezeption vor Produktion, aber immer beide.**
Je Wort: hören → nachsprechen → aus dem Gedächtnis abrufen → im Satz
einsetzen. Bewertet (FSRS-Karte) wird nur das Abrufen — der einzige Schritt,
bei dem das Wort nicht sichtbar ist.

**R7 — Jedes Modul endet mit einer freien Aufgabe ohne neue Wörter.**
Der Moment, in dem sich zeigt, ob etwas hängengeblieben ist.

---

## 4. Das Modul-Gerüst (für alle drei Sprachen gleich)

Kommunikativ begründet, nicht grammatisch. Nach jedem Modul kann der Nutzer
etwas Neues *tun*.

| # | Modul | Was der Nutzer danach kann |
|---|---|---|
| 1 | Ich bin, du bist | sich vorstellen, jemanden benennen |
| 2 | Das ist, ich habe | zeigen und besitzen |
| 3 | Ich will, ich brauche | etwas verlangen — der erste echte Nutzen |
| 4 | Nicht und Frage | verneinen und fragen → vervierfacht alles Bisherige |
| 5 | Wo ist …? | sich orientieren |
| 6 | Zahlen und Preise | einkaufen, bezahlen |
| 7 | Ich kann, ich muss | Fähigkeit und Zwang ausdrücken |
| 8 | Ich gehe, ich komme | Bewegung und Ziel |
| 9 | Zeit | verabreden |
| 10 | Ich mag, mir gefällt | bewerten, Vorlieben äußern |
| 11 | Gestern und morgen | die eine Zeitform, die man braucht |
| 12 | Sätze verbinden | und/aber/weil — vom Satz zum Gespräch |

Module 1–4 sind das Fundament: danach steht der Satzbau, und alles Weitere ist
Wortschatz in bekannten Rahmen.

---

## 5. Aufbau einer Lektion

```
Teaser-Satz        ganzer Satz hören und nachsprechen   (Chunk zuerst, R1)
Auszeichnung       "du lernst jetzt 5 neue Wörter"
je neues Wort:
    nachsprechen   Wort hören, nachsprechen             (Rezeption)
    abrufen        Deutsch → Zielsprache aus dem Kopf   (Produktion, FSRS)
je wiederholtem Wort:
    Satz-Slot      nur den Rahmen füllen                (R3, kein Neu-Budget)
Satz-Slots         Rahmen mit je einem Wort füllen
Wiederholung       ganze Lektion ohne neue Wörter       (am Modulende, R3)
Finisher           nur am Modulende, freie Aufgabe      (R7)
```

Rechnerisch je Lektion: 2 + (5 × 4) + (10 × 1) ≈ 30 Schritte bei voller
Ladung; **gemessen liegt der Median bei 16–20 Schritten**, gut 3 Minuten,
weil die meisten Lektionen weniger als fünf neue Wörter tragen. Ein ganzer
Kurs kommt damit auf 8,7–10,9 Stunden.

---

## 6. Was der Generator prüft (Abbruch, keine Warnung)

1. Neue Wörter je Lektion ≤ 5 (außer `series`)
2. Jedes Wort im festen Rahmenteil ist vorher eingeführt
3. Ab Modul 2: ≥ 2 wiederverwendete Wörter je Lektion
4. Jedes eingeführte Wort erreicht ≥ 6 Kurs-Begegnungen (`MIN_BEGEGNUNGEN`);
   den Weg zu den ~18 macht FSRS über Tage, nicht der Kurs an einem Tag
5. Kein Wort der Liste bleibt ohne Lektion
6. Chinesisch: keine zwei Wörter mit gleichem Pinyin-Grundgerüst in einer Lektion
7. Schwedisch: Verben stehen als Präsensform im Satz, nicht als Infinitiv
