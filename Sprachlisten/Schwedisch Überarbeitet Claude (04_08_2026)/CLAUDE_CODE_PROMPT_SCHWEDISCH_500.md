# Prompt für Claude Code – Schwedischen 500-Wörter-Grundwortschatz vervollständigen

Vorher: gib Claude Code Zugriff auf den Projektordner mit ALLEN bisherigen
Dateien (swedish_top500.py, import_to_supabase.py, SCHWEDISCH_FINAL_SCHEMA.sql,
SPRACHTEMPLATE_MASTER.md, generate-audio.js, generate-forms-audio.js).

---

## PROMPT (ab hier kopieren)

Ich brauche den vollständigen schwedischen Grundwortschatz (die ~500
meistbenutzten Wörter, die zusammen ca. 70-80% der alltäglichen
Kommunikation abdecken) für meine Sprachlern-App, angebunden an Supabase.

**Lies zuerst diese Dateien, bevor du irgendetwas veränderst:**
1. `SPRACHTEMPLATE_MASTER.md` - das universelle Datenmodell (gilt für jede Sprache)
2. `SCHWEDISCH_FINAL_SCHEMA.sql` - die verbindliche Tabellenstruktur für Schwedisch
3. `swedish_top500.py` - bereits vorhandene Daten (aktuell 229 Wörter: alle
   Funktionswörter + 88 Verben mit Konjugation). Erweitere GENAU DIESE Datei,
   überschreibe nichts davon, sondern ergänze die `WORDS`-Liste.

**Deine Aufgabe:**

1. Führe `SCHWEDISCH_FINAL_SCHEMA.sql` gegen meine Supabase-Datenbank aus
   (frag vorher nach Bestätigung).

2. Recherchiere/generiere die fehlenden ~270 Wörter, um auf ~500 Gesamt-
   wörter zu kommen: primär **Nomen** (~150-180 Wörter: Alltag, Familie,
   Zuhause, Essen, Körper, Zeit, Arbeit, Stadt) und **Adjektive** (~80
   Wörter: Größe, Farbe, Gefühl, Eigenschaften). Nutze eine anerkannte
   Schwedisch-Frequenzliste (z.B. "Svensk frekvensordlista" / gängige
   A1/A2-Wortschatzlisten) als Grundlage für die Auswahl.

3. **Für jedes Nomen fülle `genus` und `forms` korrekt aus**, nach diesem
   Schema (steht auch in SCHWEDISCH_FINAL_SCHEMA.sql dokumentiert):
   ```json
   {"indef_sg": "bil", "def_sg": "bilen", "indef_pl": "bilar", "def_pl": "bilarna"}
   ```
   Die bestimmte Form wird im Schwedischen als Endung ans Wort angehängt
   (nicht als eigenes Artikel-Wort wie im Deutschen/Französischen) - das ist
   KEIN Sonderfall, sondern die reguläre schwedische Grammatik. Beachte die
   5 Deklinationsklassen (u.a. -or/-ar/-er/-n/unveränderlich im Plural) und
   Unregelmäßigkeiten korrekt, nicht nur eine pauschale Endung anhängen.

4. **Für jedes Adjektiv fülle `forms`** nach diesem Schema:
   ```json
   {"en_form": "stor", "ett_form": "stort", "plural_bestimmt": "stora"}
   ```

5. **Verben**: falls beim Nomen/Adjektiv-Ausbau noch zusätzliche häufige
   Verben auffallen, die in den bisherigen 88 fehlen, ergänze sie im selben
   Format wie die bestehenden (`present`/`preteritum`/`supinum`).

6. Achte auf schwedische Besonderheiten, die über die reine Wortliste
   hinausgehen und ggf. eine `grammar_note` verdienen: z.B. Wörter mit
   unregelmäßigem Plural, "en"-Wörter, die wie "ett"-Wörter aussehen (und
   umgekehrt), oder Homonyme mit unterschiedlichem Genus je nach Bedeutung.

7. Importiere die erweiterte `swedish_top500.py` über `import_to_supabase.py`
   in die Tabelle `schwedisch_vocab` (duplikatsicher, wie gehabt).

8. Gib mir am Ende eine Übersicht: Gesamtanzahl Wörter, Aufteilung nach
   Kategorie, und eine Stichprobe von 10 zufälligen Nomen mit ihren `forms`,
   damit ich das inhaltlich gegenchecken kann.

**Zur Audio-Spalte (`audio_urls` / `forms_audio`) - WICHTIG:**
- Rufe für diesen Schritt **noch NICHT** `generate-audio.js` oder
  `generate-forms-audio.js` auf (kostet ElevenLabs-Kontingent, das heben wir
  uns auf, bis die Wortliste inhaltlich geprüft ist).
- Die Spalten bleiben also erstmal `null` - das ist beabsichtigt.
- Für's Testen in der App: wenn `audio_urls`/`forms_audio` `null` ist, soll
  die App ersatzweise die **Geräte-TTS des iOS-Endgeräts** nutzen (z.B.
  `AVSpeechSynthesizer` mit Sprachcode "sv-SE", bzw. bei Expo `expo-speech`).
  Das ist ein reiner Fallback für die Entwicklungsphase.
- **Sobald ich dir sage, dass ich bereit bin**, rufen wir `generate-audio.js`
  und `generate-forms-audio.js` mit einer schwedischen ElevenLabs-Voice auf,
  füllen `audio_urls`/`forms_audio`, und die App soll dann primär diese
  gecachten URLs verwenden, Geräte-TTS nur noch als Fallback, falls für ein
  einzelnes Wort mal keine URL vorhanden ist.

Frag mich nach jedem größeren Abschnitt (Schema-Migration, Nomen-Batch,
Adjektiv-Batch, Import) kurz nach Bestätigung, bevor du weitermachst.

---

## Danach

Sag mir Bescheid, wenn die Stichprobe aus Schritt 8 vorliegt - dann schauen
wir zusammen drüber, bevor wir zur Audio-Generierung übergehen.
