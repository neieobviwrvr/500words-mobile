# -*- coding: utf-8 -*-
"""Einmal-Helfer: erzeugt wortarten_grundwortschatz_de.py aus den echten
Live-Saetzen + Tag-Codes, damit die Woerter selbst nie von Hand abgetippt
werden (kein Drift-Risiko zwischen 'w' und dem echten Text)."""
import json

data = json.load(open("_grundwortschatz_dump.json", encoding="utf-8"))
nach_id = {d["id"]: d["german"] for d in data}

# Tag-Codes pro Satz, EIN Buchstabe je Wort (leerzeichen-getrennt wie im
# Original), in derselben Reihenfolge: v n a p k .(=None/ungefaerbt)
CODES = {
    1: "n",  # Hallo!
    2: "a n",  # Guten Morgen!
    3: "a n",  # Guten Tag!
    4: "a n",  # Guten Abend!
    5: ". v p p",  # Wie geht es dir?
    6: "p v p a v",  # Mir geht es gut, danke.
    7: ". v p",  # Wie heißt du?
    8: "p v n",  # Ich heiße Anna.
    9: ". v p",  # Woher kommst du?
    10: "p v . n",  # Ich komme aus Deutschland.
    11: ". a v p",  # Wie alt bist du?
    12: "p v . n a",  # Ich bin 25 Jahre alt.
    13: "v p p v",  # Freut mich, dich kennenzulernen.
    14: ". n",  # Auf Wiedersehen!
    15: ". .",  # Bis später!
    16: ".",  # Tschüss!
    20: "v p n",  # Sprichst du Englisch?
    21: "p v . . n",  # Ich spreche ein bisschen Deutsch.
    22: "v p . a v",  # Kannst du bitte langsamer sprechen?
    23: "p v p .",  # Ich verstehe das nicht.
    24: "v p p . v",  # Kannst du das bitte wiederholen?
    25: ". v p p . n",  # Wie sagt man das auf Deutsch?
    33: ". a v p",  # Wie spät ist es?
    34: "p v . n",  # Es ist drei Uhr.
    35: ". . . n v . n",  # Um wie viel Uhr beginnt der Film?
    36: ". v p n",  # Wann hast du Zeit?
    37: "p v . . n",  # Ich habe morgen keine Zeit.
    38: "v p p a n v",  # Können wir uns nächste Woche treffen?
    39: "p v . n . . n",  # Ich habe einen Termin um 10 Uhr.
    40: "p n v .",  # Welcher Tag ist heute?
    41: ". v n",  # Heute ist Montag.
    42: ". v p n",  # Wann hast du Geburtstag?
    43: ". n v . n",  # Mein Geburtstag ist im März.
    44: ". . v p",  # Wie viel kostet das?
    45: "p v . n",  # Das kostet zehn Euro.
    46: "p v . . n",  # Ich hätte gern die Rechnung.
    92: ". v . n",  # Wo ist die Toilette?
    136: "n",  # Hilfe!
    383: "v",  # Danke!
    384: "a n",  # Vielen Dank!
    385: ". v",  # Gern geschehen.
    386: "n",  # Entschuldigung!
    387: "p v p a",  # Es tut mir leid.
    388: ". n",  # Kein Problem.
    389: ".",  # Ja.
    390: ".",  # Nein.
    391: "p v .",  # Ich weiß nicht.
    392: ". . .",  # Eins, zwei, drei.
    393: ". .",  # Wie viele?
    394: ". n .",  # Zwei Stück, bitte.
    395: ". . .",  # Nur eins, bitte.
    396: "p v a",  # Das ist genug.
    397: ". . v p .",  # Wie viel ist das zusammen?
    398: "p v n",  # Ich brauche Hilfe.
    399: ". v . n",  # Wo ist der Ausgang?
    400: "p v . n v",  # Ich habe mein Handy verloren.
    401: "p v . n",  # Das ist mein Freund.
    402: "p v . a n .",  # Ich bin zum ersten Mal hier.
    403: "p v p",  # Was heißt das?
    404: "v p p . v",  # Können Sie das bitte aufschreiben?
    405: "p v . n",  # Wir sind vier Personen.
    406: "p v . n v",  # Ich habe meinen Pass verloren.
    477: "n . v . n",  # Entschuldigung, wo ist die Toilette?
    478: "p v . n",  # Wir bleiben fünf Minuten.
    479: ". v p . .",  # Bitte sag es noch einmal.
    480: "v p n",  # Seid ihr Studenten?
    481: "p v . .",  # Ich habe nur eins.
}

zeilen = []
fehler = []
for zid, code_str in CODES.items():
    text = nach_id.get(zid)
    if text is None:
        fehler.append(f"id={zid} nicht im Dump")
        continue
    woerter = text.split(" ")
    codes = code_str.split(" ")
    if len(woerter) != len(codes):
        fehler.append(f"id={zid}: {len(woerter)} Woerter, aber {len(codes)} Codes "
                      f"({text!r})")
        continue
    tags = [{"w": w, "c": (None if c == "." else c)} for w, c in zip(woerter, codes)]
    zeilen.append((zid, tags, text))

if fehler:
    print(f"{len(fehler)} FEHLER:")
    for f in fehler:
        print("  X " + f)
    raise SystemExit(1)

fehlende_ids = set(nach_id) - set(CODES)
if fehlende_ids:
    print(f"WARNUNG: {len(fehlende_ids)} Saetze ohne Codes: {sorted(fehlende_ids)}")

with open("wortarten_grundwortschatz_de.py", "w", encoding="utf-8") as f:
    f.write('# -*- coding: utf-8 -*-\n')
    f.write('"""Wort-fuer-Wort-Tagging fuer phrasebook_master/grundwortschatz (Deutsch).\n\n')
    f.write('Erste komplett getaggte Kategorie (2026-08-29) - beweist die Kette\n')
    f.write('Schema->Autoren->Validierung->Render einmal end-to-end, siehe Plan\n')
    f.write('"Wortart-Farbcodierung durchgaengig". Erzeugt aus\n')
    f.write('_erzeuge_grundwortschatz_de.py (Einmal-Helfer, nicht Teil des staendigen\n')
    f.write('Werkzeugs) - die Woerter selbst kommen direkt aus den Live-Saetzen, nur die\n')
    f.write('Tag-Codes sind von Hand klassifiziert. Keine Konjunktion im Bestand -\n')
    f.write('Grundwortschatz-Saetze sind zu kurz fuer echte Verbindungswoerter, kein\n')
    f.write('erzwungener Fehltreffer.\n"""\n\n')
    f.write("TAGS = [\n")
    for zid, tags, text in zeilen:
        tags_py = "[" + ", ".join(
            "{\"w\": " + repr(t["w"]) + ", \"c\": " + (repr(t["c"]) if t["c"] else "None") + "}"
            for t in tags
        ) + "]"
        f.write(f"    {{\"id\": {zid}, \"tags\": {tags_py}}},  # {text}\n")
    f.write("]\n")

print(f"Geschrieben: {len(zeilen)} Saetze.")
