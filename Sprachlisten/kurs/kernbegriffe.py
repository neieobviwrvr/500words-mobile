# -*- coding: utf-8 -*-
"""Der Kernwortschatz, den JEDE Sprache fuer den gefuehrten Kurs braucht.

Warum das ueberhaupt noetig ist: die elf Vokabellisten sind unabhaengig
voneinander nach Haeufigkeit der jeweiligen Sprache zusammengestellt worden.
Das ist fuer sich richtig - Haeufigkeit ist sprachgebunden - fuehrt aber
dazu, dass sie sich im deutschen Feld nur teilweise ueberschneiden. Fuer
einen KURS ist das ein Problem: der Lehrplan ist derselbe fuer alle
Sprachen, also muss jede Sprache dieselben Grundbegriffe anbieten.

Beim ersten Durchlauf fehlten in `schwedisch_vocab` unter anderem
hungrig, durstig, krank, Zeit, Geld, Freund, jung, Hilfe, Musik - alles
Woerter, ohne die man keinen Anfaengerkurs bauen kann.

Die Liste unten ist nach dem gebaut, was die zwoelf Module brauchen, nicht
nach einer Frequenzliste. Sie ist bewusst klein gehalten (Kern, nicht
Vollstaendigkeit): was darueber hinaus in einer Sprachliste steht, ist
willkommen und wird im Kurs verwendet, aber nicht vorausgesetzt.

Schreibweise: der Schluessel ist die deutsche Bedeutung in der Form, die
auch in den Vokabeltabellen steht. `alt=` nennt Schreibweisen, unter denen
dasselbe Wort dort ebenfalls auftauchen darf.
"""

def B(de, rolle, alt=None):
    return {"de": de, "rolle": rolle, "alt": alt or []}


KERN = [
    # --- Pronomen -----------------------------------------------------
    B("ich", "pron"), B("du", "pron"), B("er", "pron"),
    B("sie", "pron", ["sie (Sg.)", "sie (Singular)"]),
    B("wir", "pron"), B("ihr", "pron"),
    B("sie (Pl.)", "pron", ["sie (Mehrzahl)", "sie (Plural)"]),
    B("mich", "pron", ["mich, mir", "mir, mich"]),
    B("dich", "pron", ["dich, dir", "dir, dich"]),
    B("mein", "poss", ["mein (Utrum)", "meine"]),
    B("dein", "poss", ["dein, euer", "dein (Utrum)"]),

    # --- Grundverben ---------------------------------------------------
    B("sein", "verb"), B("haben", "verb"), B("machen", "verb", ["machen, tun", "tun, machen"]),
    B("wollen", "verb", ["möchten / wollen", "wollen / brauchen"]),
    B("brauchen", "verb"), B("können", "verb", ["können / dürfen"]),
    B("müssen", "verb"), B("gehen", "verb", ["gehen / fahren"]),
    B("kommen", "verb"), B("sehen", "verb"), B("sagen", "verb"),
    B("essen", "verb"), B("trinken", "verb"), B("schlafen", "verb"),
    B("wohnen", "verb"), B("arbeiten", "verb", ["arbeiten / Arbeit"]),
    B("sprechen", "verb"), B("verstehen", "verb"), B("helfen", "verb"),
    B("kaufen", "verb"), B("bezahlen", "verb"), B("warten", "verb"),
    B("finden", "verb"), B("geben", "verb"), B("nehmen", "verb"),
    B("mögen", "verb", ["mögen, gernhaben", "gern haben"]),
    B("lieben", "verb"), B("wissen", "verb"), B("denken", "verb"),
    B("lernen", "verb", ["lehren, lernen"]), B("fahren", "verb", ["fahren (Fahrzeug)"]),
    B("heißen", "verb"), B("fragen", "verb"), B("antworten", "verb"),

    # --- Fragewoerter --------------------------------------------------
    B("was", "frage"), B("wer", "frage"), B("wo", "frage"), B("wann", "frage"),
    B("wie", "frage"), B("warum", "frage"), B("wie viel", "frage"),

    # --- Funktionswoerter ----------------------------------------------
    B("nicht", "funktion"), B("ja", "funktion"), B("nein", "funktion"),
    B("und", "funktion"), B("aber", "funktion"), B("oder", "funktion"),
    B("weil", "funktion", ["weil, da"]), B("sehr", "funktion", ["sehr, viel"]),
    B("auch", "funktion"), B("nur", "funktion"), B("hier", "funktion"),
    B("dort", "funktion"), B("jetzt", "funktion"), B("heute", "funktion"),
    B("morgen", "funktion"), B("gestern", "funktion"),
    B("immer", "funktion"), B("nie", "funktion"), B("oft", "funktion"),
    B("in", "praep"), B("auf", "praep", ["auf, an"]), B("zu", "praep", ["zu, nach"]),
    B("mit", "praep"), B("für", "praep"), B("von", "praep", ["von, aus"]),
    B("ohne", "praep"),

    # --- Zahlen --------------------------------------------------------
    B("eins", "zahl"), B("zwei", "zahl"), B("drei", "zahl"), B("vier", "zahl"),
    B("fünf", "zahl"), B("sechs", "zahl"), B("sieben", "zahl"), B("acht", "zahl"),
    B("neun", "zahl"), B("zehn", "zahl"), B("hundert", "zahl"),

    # --- Zustand (Adjektive) -------------------------------------------
    B("müde", "zustand"), B("hungrig", "zustand"), B("durstig", "zustand"),
    B("krank", "zustand"), B("glücklich", "zustand", ["froh, glücklich", "glücklich"]),
    B("traurig", "zustand"), B("wütend", "zustand"), B("fertig", "zustand"),
    B("bereit", "zustand"),

    # --- Eigenschaft ---------------------------------------------------
    B("gut", "eigenschaft"), B("schlecht", "eigenschaft"),
    B("groß", "eigenschaft"), B("klein", "eigenschaft"),
    B("neu", "eigenschaft"), B("alt", "eigenschaft"),
    B("teuer", "eigenschaft"), B("billig", "eigenschaft", ["billig, günstig", "günstig"]),
    B("schön", "eigenschaft"), B("schnell", "eigenschaft"), B("langsam", "eigenschaft"),
    B("warm", "eigenschaft"), B("kalt", "eigenschaft"),
    B("jung", "eigenschaft"), B("schwierig", "eigenschaft"), B("einfach", "eigenschaft"),
    B("richtig", "eigenschaft", ["richtig, korrekt"]), B("falsch", "eigenschaft"),
    B("nett", "eigenschaft", ["nett, lieb", "nett, angenehm"]),

    # --- Personen ------------------------------------------------------
    B("Mann", "person", ["Mann, Ehemann"]), B("Frau", "person", ["Frau, Ehefrau"]),
    B("Kind", "person"), B("Mutter", "person"), B("Vater", "person"),
    B("Freund", "person"), B("Student", "person"), B("Lehrer", "person"),
    B("Familie", "person"), B("Name", "person"),

    # --- Dinge ---------------------------------------------------------
    B("Wasser", "ding"), B("Essen", "ding", ["Essen (allgemein)", "Gericht / Essen"]),
    B("Kaffee", "ding"), B("Tee", "ding"), B("Bier", "ding"), B("Brot", "ding"),
    B("Geld", "ding"), B("Zeit", "ding"), B("Handy", "ding", ["Telefon"]),
    B("Buch", "ding"), B("Auto", "ding"), B("Schlüssel", "ding"),
    B("Ticket", "ding", ["Ticket / Karte", "Fahrkarte"]), B("Tasche", "ding"),
    B("Hilfe", "ding"), B("Zimmer", "ding"), B("Haus", "ding"),
    B("Arbeit", "ding", ["Arbeit", "Job, Arbeitsstelle"]),

    # --- Orte ----------------------------------------------------------
    B("Hotel", "ort"), B("Bahnhof", "ort", ["Bahnhof, Station"]),
    B("Flughafen", "ort"), B("Restaurant", "ort"),
    B("Toilette", "ort"), B("Krankenhaus", "ort"),
    B("Geschäft", "ort", ["Geschäft, Laden", "Laden, Geschäft", "Geschäft / Laden"]),
    B("Stadt", "ort"), B("Schule", "ort"), B("Bank", "ort", ["Bank (Institut)"]),

    # --- Zeit ----------------------------------------------------------
    B("Tag", "zeit"), B("Woche", "zeit"), B("Stunde", "zeit"), B("Minute", "zeit"),
    B("Morgen", "zeit"), B("Abend", "zeit", ["Abend", "abends"]), B("Nacht", "zeit"),
]

ROLLEN = sorted({b["rolle"] for b in KERN})
