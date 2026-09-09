# -*- coding: utf-8 -*-
"""Deutsches Geschlecht der Slot-Woerter - fuer die AUFGABENSTELLUNG.

WOZU
----
Die deutschen Rahmen tragen einen festen Artikel: "Hier ist der [Slot].",
"ich habe einen [Slot].". Eingesetzt wird ein beliebiges Wort, und dann steht
dort "Hier ist der Ehefrau" oder "ich habe einen Hotel".

Das Geschlecht steht nirgends in den Daten: die `genus`-Spalte der
Vokabeltabellen meint die ZIELsprache (schwedisch en/ett, spanisch m/f) - fuer
den deutschen Satz sagt sie nichts. Deshalb diese Liste.

WARUM VON HAND UND NICHT NACH REGEL
-----------------------------------
Deutsche Genusregeln tragen etwa zwei Drittel (-ung/-heit/-keit weiblich,
-chen/-lein saechlich, -er maennlich) und versagen genau bei den haeufigsten
Woertern: Haus, Mann, Frau, Buch, Tisch, Wasser. Eine Regel mit einem Drittel
Fehlern waere schlimmer als keine, weil sie den Fehler ueber den ganzen Kurs
verteilt statt ihn sichtbar zu lassen.

Es sind 358 Woerter - die, die tatsaechlich in einem Artikel-Rahmen landen.
Wer den Kurs erweitert, laesst `pruefe_genus()` in bauplan.py laufen; es
meldet jedes Wort, das hier fehlt.

  m   der    f   die    n   das    pl  die (Mehrzahl)

Klammerzusaetze gehoeren zum Schluessel ("Bank (Institut)"), weil die
Vokabelspalte sie mitfuehrt und `kurzbedeutung()` sie stehen laesst.
"""

GENUS = {
    # -- A ------------------------------------------------------------------
    "Abend": "m", "Abendessen": "n", "Alkohol": "m", "Alter": "n",
    "Anfang": "m", "Angestellter": "m", "Angst": "f", "Antwort": "f",
    "Apfel": "m", "Apotheke": "f", "Arbeit": "f", "Arbeiter": "m",
    "Arm": "m", "Art": "f", "Arzt": "m", "Auge": "n", "Ausgang": "m",
    "Auto": "n",
    # -- B ------------------------------------------------------------------
    "Bad": "n", "Badezimmer": "n", "Bahnhof": "m", "Banane": "f",
    "Bank": "f", "Bank (Geldinstitut)": "f", "Bank (Institut)": "f",
    "Bankkarte": "f", "Bar": "f", "Bein": "n", "Beispiel": "n",
    "Bericht": "m", "Besprechung": "f", "Bett": "n", "Bibliothek": "f",
    "Bier": "n", "Blick": "m", "Blut": "n", "Boden": "m", "Brief": "m",
    "Brot": "n", "Bruder": "m", "Brücke": "f", "Buch": "n", "Bus": "m",
    "Butter": "f", "Büro": "n",
    # -- C/D ----------------------------------------------------------------
    "Cafe": "n", "Chef": "m", "Computer": "m",
    "Dach": "n", "Dienst": "m", "Ding": "n", "Dokument": "n", "Dorf": "n",
    "Durst": "m",
    # -- E ------------------------------------------------------------------
    "Ehefrau": "f", "Ehemann": "m", "Ei": "n", "Eingang": "m",
    "Eintritt": "m", "Eis": "n", "Eis (Süßspeise)": "n", "Eltern": "pl",
    "Ende": "n", "Erde": "f", "Essen": "n", "Essstäbchen": "pl",
    # -- F ------------------------------------------------------------------
    "Fahrkarte": "f", "Fahrschein": "m", "Fall": "m", "Familie": "f",
    "Farbe": "f", "Fehler": "m", "Fenster": "n", "Fest": "n", "Feuer": "n",
    "Fieber": "n", "Film": "m", "Finger": "m", "Fisch": "m",
    "Fischsauce": "f", "Flasche": "f", "Fleisch": "n", "Flug": "m",
    "Flughafen": "m", "Flugzeug": "n", "Fluss": "m", "Folge": "f",
    "Form": "f", "Foto": "n", "Frage": "f", "Frau": "f", "Frau (Anrede)": "f",
    "Freude": "f", "Freund": "m", "Freund (enger)": "m", "Freunde": "pl",
    "Frieden": "m", "Frucht": "f", "Frühstück": "n", "Fuß": "m",
    # -- G ------------------------------------------------------------------
    "Gabel": "f", "Garküche": "f", "Garten": "m", "Geburtstag": "m",
    "Geheimnis": "n", "Geist": "m", "Geld": "n", "Gemüse": "n",
    "Gemüse (einzelnes)": "n", "Gepäck": "n", "Geschenk": "n",
    "Geschichte": "f", "Geschwister": "pl", "Geschäft": "n", "Gesetz": "n",
    "Gesicht": "n", "Gesundheit": "f", "Glas": "n", "Glas (Trinkgefäß)": "n",
    "Glück (Zufall)": "n", "Gott": "m", "Grenze": "f", "Grund": "m",
    "Gruppe": "f", "Grösse": "f",
    # -- H ------------------------------------------------------------------
    "Haar": "n", "Haare": "pl", "Hand": "f", "Handschuh": "m", "Handy": "n",
    "Haus": "n", "Haut": "f", "Hemd": "n", "Herr": "m", "Herz": "n",
    "Hilfe": "f", "Hobby": "n", "Hotel": "n", "Hund": "m", "Hunger": "m",
    # -- I/J ----------------------------------------------------------------
    "Idee": "f", "Internet": "n",
    "Jacke": "f", "Jahr": "n", "Jahr (Verlauf)": "n", "Jahr (Zählwort)": "n",
    "Job": "m", "Junge": "m",
    # -- K ------------------------------------------------------------------
    "Kaffee": "m", "Karte": "f", "Kartoffel": "f", "Katze": "f", "Kind": "n",
    "Kirche": "f", "Klasse": "f", "Kleid": "n", "Kleidergrösse": "f",
    "Kleidung": "f", "Kleidungsstück": "n", "Kneipe": "f", "Koffer": "m",
    "Kollege": "m", "Kopf": "m", "Kraft": "f", "Krankenhaus": "n",
    "Krankheit": "f", "Kreuzung": "f", "Krieg": "m", "Kuchen": "m",
    "Kumpel": "m", "Kunde": "m", "Kunst": "f", "Kurs": "m", "Käse": "m",
    "Körper": "m", "Küche": "f",
    # -- L ------------------------------------------------------------------
    "Laden": "m", "Lampe": "f", "Land": "n", "Land (Staat)": "n",
    "Landkarte": "f", "Leben": "n", "Lehrer": "m", "Leute": "pl",
    "Licht": "n", "Liebe": "f", "Lied": "n", "Linie": "f", "Lohn": "m",
    "Luft": "f", "Lärm": "m", "Löffel": "m",
    # -- M ------------------------------------------------------------------
    "Macht": "f", "Mann": "m", "Markt": "m", "Marktplatz": "m",
    "Medikament": "n", "Medizin": "f", "Meinung": "f", "Mensch": "m",
    "Messer": "n", "Milch": "f", "Minute": "f", "Mittag": "m",
    "Mittagessen": "n", "Mittel": "n", "Moment": "m", "Monat": "m",
    "Mond": "m", "Morgen": "m", "Motorradtaxi": "n", "Motorroller": "m",
    "Mund": "m", "Museum": "n", "Musik": "f", "Mutter": "f", "Mädchen": "n",
    "Mütze": "f",
    # -- N/O ----------------------------------------------------------------
    "Nachbar": "m", "Nachmittag": "m", "Nachricht": "f", "Nacht": "f",
    "Nase": "f", "Natur": "f", "Nudeln": "pl", "Nudelsuppe": "f",
    "Nummer": "f",
    "Oberteil": "n", "Obst": "n", "Ort": "m",
    # -- P ------------------------------------------------------------------
    "Paar": "n", "Papier": "n", "Park": "m", "Party": "f", "Pass": "m",
    "Patient": "m", "Pause": "f", "Person": "f", "Pizza": "f", "Plan": "m",
    "Platz": "m", "Platz (Ort)": "m", "Polizei": "f", "Post": "f",
    "Preis": "m", "Problem": "n", "Prüfung": "f", "Pullover": "m",
    "Punkt": "m",
    # -- R ------------------------------------------------------------------
    "Rabatt": "m", "Rechnung": "f", "Recht": "n", "Regierung": "f",
    "Reis (gekocht)": "m", "Reise": "f", "Restaurant": "n", "Rock": "m",
    # -- S ------------------------------------------------------------------
    "Sache": "f", "Salat": "m", "Salz": "n", "Satz": "m", "Schicht": "f",
    "Schlaf": "m", "Schlafzimmer": "n", "Schlag": "m", "Schlüssel": "m",
    "Schmerz": "m", "Schuh": "m", "Schuhe": "pl", "Schule": "f",
    "Schulter": "f", "Schwester": "f", "Schüssel": "f",
    "See (Gewässer)": "m", "Seite": "f", "Sekunde": "f", "Sicht": "f",
    "Sinn": "m", "Socke": "f", "Sofa": "n", "Sohn": "m", "Speisekarte": "f",
    "Spiel": "n", "Sport": "m", "Sprache": "f", "Stadt": "f",
    "Stadtviertel": "n", "Stern": "m", "Stift": "m", "Stimme": "f",
    "Strand": "m", "Straße": "f", "Student": "m", "Stufe": "f", "Stuhl": "m",
    "Stunde": "f", "Stunde (Dauer)": "f", "Suppe": "f",
    # -- T ------------------------------------------------------------------
    "Tag": "m", "Tasche": "f", "Taxi": "n", "Team": "n", "Tee": "m",
    "Teil": "m", "Telefon": "n", "Teller": "m", "Termin": "m", "Thema": "n",
    "Ticket": "n", "Tisch": "m", "Tochter": "f", "Tod": "m", "Toilette": "f",
    "Tourist": "m", "Traum": "m", "Treffen": "n", "Typ": "m", "Tür": "f",
    # -- U/V ----------------------------------------------------------------
    "U-Bahn": "f", "Universität": "f", "Unternehmen": "n",
    "Unterrichtsstunde": "f", "Unterschied": "m", "Urlaub": "m",
    "Vater": "m", "Verabredung": "f", "Vereinbarung": "f", "Vernunft": "f",
    "Vertrag": "m", "Vietnamese": "m", "Vogel": "m", "Volk": "n",
    "Vorlesung": "f", "Vorname": "m", "Vorstellungsgespräch": "n",
    # -- W ------------------------------------------------------------------
    "Wache": "f", "Wahrheit": "f", "Wald": "m", "Wand": "f", "Wanderung": "f",
    "Wasser": "n", "Wechsel": "m", "Weg": "m", "Wein": "m", "Welt": "f",
    "Wetter": "n", "Wind": "m", "Woche": "f", "Wochenende": "n",
    "Wohnung": "f", "Wohnzimmer": "n", "Wort": "n",
    # -- Z ------------------------------------------------------------------
    "Zeit": "f", "Zimmer": "n", "Zucker": "m", "Zug": "m", "Zukunft": "f",
    "Zustand": "m",
}

# Artikel nach Geschlecht und Fall.
#
# Nur die drei Faelle, die in den Rahmen vorkommen. Genitiv gibt es dort
# nicht, und das ist gut so - er waere fuer A1 auch der falsche Stoff.
ARTIKEL = {
    "bestimmt": {
        "nom": {"m": "der", "f": "die", "n": "das", "pl": "die"},
        "akk": {"m": "den", "f": "die", "n": "das", "pl": "die"},
        "dat": {"m": "dem", "f": "der", "n": "dem", "pl": "den"},
    },
    "unbestimmt": {
        "nom": {"m": "ein", "f": "eine", "n": "ein", "pl": ""},
        "akk": {"m": "einen", "f": "eine", "n": "ein", "pl": ""},
        "dat": {"m": "einem", "f": "einer", "n": "einem", "pl": ""},
    },
}

# Welcher Artikel steht fuer welche Sorte und welchen Fall?
# Rueckwaerts gelesen: aus dem Artikel im Rahmen ergibt sich, was gemeint war.
SORTE = {
    "der": ("bestimmt", "nom"), "die": ("bestimmt", "nom"),
    "das": ("bestimmt", "nom"), "den": ("bestimmt", "akk"),
    "dem": ("bestimmt", "dat"),
    "ein": ("unbestimmt", None), "eine": ("unbestimmt", None),
    "einen": ("unbestimmt", "akk"), "einem": ("unbestimmt", "dat"),
    "einer": ("unbestimmt", "dat"),
}

# "ein"/"eine" sagen den Fall nicht - im Deutschen sind Nominativ und
# Akkusativ dort nur beim Maskulinum verschieden (ein/einen). Diese Woerter
# im Rahmen verlangen einen Akkusativ; steht keines davon da, ist es
# Nominativ. Ueber die 28 vorhandenen Rahmen einzeln nachgeprueft.
AKKUSATIV_ZEICHEN = (
    "gibt es", "kaufe", "kaufen", "habe", "hat", "haben",
    "brauche", "brauchen", "möchte", "möchten", "dauert", "nehme", "nehmen",
    "will", "sehe", "suche", "bestelle",
)
