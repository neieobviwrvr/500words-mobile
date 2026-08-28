# -*- coding: utf-8 -*-
"""Verteilt die vorhandenen Saetze auf feinere Situationen.

Bis 2026-08-21 lagen neun der zehn befuellten Kategorien unter EINER
Sammel-Situation ("gesundheit", "einkaufen", "restaurant" ...). Das war der
Grund, warum das Coin-Modell keine Ware hatte: ein Thema freikaufen waere
dasselbe gewesen wie die ganze Kategorie freikaufen.

Hier wird nichts geschrieben und nichts uebersetzt - nur zugeordnet. Der
Inhalt existiert seit dem 2026-08-04, er stand nur zu grob sortiert da.

Abgeglichen wird ueber den DEUTSCHEN Satz: er ist in allen drei Tabellen
identisch (in den Uebersetzungen als Gloss). Ein Satz wird also in Deutsch,
Schwedisch und Spanisch gleichzeitig umsortiert.
"""
import io
import json
import os
import subprocess
import urllib.parse
import urllib.request

APP = r"C:\Users\User\Desktop\App\500 words\mobile"
PROJEKT = "xculnaxfdtwzpdplvedc"
TABELLEN = ["phrasebook_master", "schwedisch_phrasebook", "spanisch_phrasebook"]

# scenario -> Liste deutscher Saetze
ZUORDNUNG = {
    # ---------------------------------------------------------- Health
    "health_symptome": [
        "Ich habe Kopfschmerzen.", "Ich habe Fieber.", "Mir geht es nicht gut.",
        "Ich habe mir den Fuß verletzt.", "Ich fühle mich schwindelig.",
        "Ich habe mich erkältet.", "Es tut hier weh.",
    ],
    "health_notfall": [
        "Ich brauche einen Arzt.", "Wo ist die nächste Apotheke?",
        "Rufen Sie bitte einen Krankenwagen!", "Hilfe!", "Ich brauche dringend Hilfe.",
        "Wo ist das nächste Krankenhaus?",
    ],
    "health_krankenhaus": [
        "Ich habe meine Tabletten vergessen.", "Wie oft muss ich das Medikament nehmen?",
        "Können Sie mir einen Termin geben?",
    ],
    "health_allergie": ["Ich bin allergisch gegen Penizillin."],
    "health_bezahlen": ["Ich habe meine Versicherungskarte vergessen."],

    # ---------------------------------------------------------- Shopping
    "shop_suchen": [
        "Ich suche ein Geschenk für meine Mutter.", "Ich schaue mich nur um.",
        "Können Sie mir helfen?", "Wann schließt das Geschäft?",
        "Ich habe gestern ein neues Kleid gekauft.",
    ],
    "shop_anprobieren": [
        "Haben Sie das in einer anderen Farbe?", "Haben Sie das auch in Größe M?",
        "Wo ist die Umkleidekabine?", "Kann ich das anprobieren?",
    ],
    "shop_bezahlen": [
        "Das ist zu teuer.", "Nur Bargeld, bitte.", "Kann ich mit Karte bezahlen?",
        "Gibt es einen Rabatt?", "Haben Sie eine Tüte?",
    ],
    "shop_reklamieren": ["Ich möchte das zurückgeben."],

    # ---------------------------------------------------------- Essen
    "essen_platz": [
        "Ich hätte gern einen Tisch für zwei Personen.", "Haben Sie einen Tisch frei?",
        "Ist dieser Tisch schon reserviert?",
        "Ich möchte einen Tisch für morgen Abend reservieren.", "Wo ist die Toilette?",
    ],
    "essen_bestellen": [
        "Die Speisekarte, bitte.", "Was empfehlen Sie?", "Ich möchte etwas bestellen.",
        "Ich hätte gern ein Wasser, bitte.", "Was möchten Sie trinken?",
    ],
    "essen_unvertraeglich": ["Ich bin Vegetarier.", "Ich habe eine Allergie gegen Nüsse."],
    "essen_bezahlen": [
        "Können wir bitte zahlen?", "Können Sie mir die Rechnung getrennt bringen?",
        "Ist das im Preis inbegriffen?", "Das habe ich nicht bestellt.",
    ],
    "essen_geschmack": [
        "Das war sehr lecker.", "Das Essen schmeckt sehr gut.", "Guten Appetit!",
        "Gestern habe ich in einem Restaurant gegessen.",
    ],

    # ---------------------------------------------------------- Hotel
    "hotel_einchecken": [
        "Ich habe eine Reservierung.", "Haben Sie noch ein Zimmer frei?",
        "Ich möchte ein Einzelzimmer, bitte.", "Wie viel kostet die Nacht?",
        "Wann ist der Check-in?",
    ],
    "hotel_zimmer": [
        "Gibt es hier WLAN?", "Wie ist das Passwort für das WLAN?",
        "Wo ist der Aufzug?", "Ist das Frühstück inklusive?",
    ],
    "hotel_probleme": [
        "Mein Zimmer ist nicht sauber.", "Die Klimaanlage funktioniert nicht.",
        "Ich habe meinen Schlüssel verloren.",
    ],
    "hotel_abreise": ["Ich möchte auschecken.", "Können Sie mir ein Taxi rufen?"],

    # ---------------------------------------------------------- Wohnen
    "wohnen_suchen": [
        "Ich suche eine Wohnung.", "Wie hoch ist die Miete?",
        "Ist die Kaution im Preis enthalten?", "Wann kann ich einziehen?",
        "Gibt es einen Aufzug im Haus?", "Gibt es hier einen Waschraum?",
    ],
    "wohnen_vertrag": [
        "Ich möchte den Mietvertrag unterschreiben.", "Ich bin letzte Woche umgezogen.",
    ],
    "wohnen_behoerden": [
        "Ich muss den Strom anmelden.", "Wie melde ich mich beim Einwohnermeldeamt an?",
        "Ich brauche eine Bestätigung meiner Adresse.",
    ],
    "wohnen_alltag": [
        "Wo finde ich einen Handwerker?", "Die Heizung funktioniert nicht.",
        "Meine Nachbarn sind sehr nett.",
    ],

    # ---------------------------------------------------------- Uni
    "uni_orientierung": [
        "Wo ist der Hörsaal?", "Wo finde ich die Bibliothek?",
        "Wann beginnt die Vorlesung?", "Wer ist der Dozent für diesen Kurs?",
    ],
    "uni_organisation": [
        "Wann ist die Anmeldefrist?", "Wie viele Credits brauche ich?",
        "In welchem Semester bist du?", "Ich studiere Informatik.",
    ],
    "uni_pruefung": [
        "Ich habe morgen eine Prüfung.", "Ich habe die Prüfung bestanden.",
        "Ich habe die Hausaufgabe vergessen.", "Ich brauche mehr Zeit für die Hausarbeit.",
    ],
    "uni_zusammen": ["Können wir zusammen lernen?", "Kann ich dieses Buch ausleihen?"],

    # ---------------------------------------------------------- Kultur
    "kultur_wetter": [
        "Wie ist das Wetter heute?", "Es regnet.", "Die Sonne scheint.",
        "Es ist sehr kalt heute.",
    ],
    "kultur_ausgehen": [
        "Wo findet das Konzert statt?", "Wann öffnet das Museum?",
        "Wie viel kostet der Eintritt?", "Das war ein tolles Konzert.",
    ],
    "kultur_freizeit": [
        "Ich gehe gerne ins Kino.", "Ich interessiere mich für Geschichte.",
        "Treibst du Sport?", "Ich spiele gerne Fußball.",
    ],
    "kultur_wochenende": [
        "Was machst du am Wochenende?", "Möchtest du mitkommen?",
        "Nächstes Wochenende gehe ich wandern.", "Letztes Wochenende war ich am Strand.",
    ],

    # ---------------------------------------------------------- Smalltalk
    "smalltalk_person": [
        "Ich bin Student.", "Was machst du beruflich?", "Ich arbeite als Lehrer.",
        "Wo wohnst du?", "Ich wohne in Berlin.",
    ],
    "smalltalk_familie": [
        "Ich habe eine Schwester.", "Bist du verheiratet?", "Hast du Geschwister?",
    ],
    "smalltalk_hobbys": ["Was sind deine Hobbys?", "Ich lese gerne Bücher."],

    # ---------------------------------------------------------- Travel
    "reise_ticket": [
        "Ich möchte eine Fahrkarte nach München, bitte.",
        "Wie viel kostet die Fahrt zum Flughafen?", "Ich möchte einen Mietwagen buchen.",
    ],
    "reise_zug": [
        "Wo ist der Bahnhof?", "Wann fährt der nächste Zug nach Berlin?",
        "Ist dieser Platz frei?", "Muss ich umsteigen?",
        "Von welchem Gleis fährt der Zug ab?", "Der Zug hat Verspätung.",
    ],
    "reise_bus": ["Wo ist die Bushaltestelle?", "Welcher Bus fährt zum Flughafen?"],
    "reise_flug": [
        "Ich habe meinen Flug verpasst.", "Wo ist der Check-in-Schalter?",
        "Wo kann ich mein Gepäck aufgeben?", "Mein Gepäck ist nicht angekommen.",
    ],
    "reise_plaene": [
        "Nächstes Jahr fahre ich nach Italien.", "Ich war letztes Jahr in Frankreich.",
        "Wie komme ich zum Hafen?",
    ],
    "weg_fragen": [
        "Entschuldigung, wie komme ich zum Bahnhof?", "Ist das weit von hier?",
        "Wie weit ist es zu Fuß?", "Ist das in der Nähe?",
        "Können Sie mir den Weg zeigen?", "Können Sie mir das auf der Karte zeigen?",
        "Ich habe mich verlaufen.", "Wo ist der nächste Supermarkt?",
    ],
    "weg_beschreiben": [
        "Gehen Sie geradeaus.", "Biegen Sie links ab.", "Biegen Sie rechts ab.",
        "Es ist gleich um die Ecke.", "Nehmen Sie die zweite Straße rechts.",
        "Das Museum liegt gegenüber der Kirche.",
    ],
}


# Aus welcher Kategorie stammt eine Situation? Ohne diese Zuordnung gleicht
# das Update nur ueber den deutschen Satz ab - und "Das ist zu teuer" gibt es
# in Club UND im Shopping. Vier Club-Saetze bekamen dadurch fremde
# Situationen (2026-08-21, gefunden beim Gegenzaehlen).
PRAEFIX_KATEGORIE = {
    "health_": "health_emergency",
    "shop_": "shopping_haggling",
    "essen_": "drinking_dining",
    "hotel_": "hotel_accommodation",
    "wohnen_": "moving_settling",
    "uni_": "university_studying",
    "kultur_": "culture_immersion",
    "smalltalk_": "smalltalk_socialising",
    "reise_": "travel_transportation",
    "weg_": "travel_transportation",
}


def kategorie_von(scenario):
    for praefix, kat in PRAEFIX_KATEGORIE.items():
        if scenario.startswith(praefix):
            return kat
    raise SystemExit("keine Kategorie fuer " + scenario)


def lies_env(n):
    for z in io.open(os.path.join(APP, ".env"), encoding="utf-8"):
        if z.startswith(n + "="):
            return z.split("=", 1)[1].strip().strip('"')
    raise SystemExit(n + " fehlt")


def schluessel():
    roh = subprocess.run(["supabase", "projects", "api-keys", "--project-ref", PROJEKT, "-o", "json"],
                         capture_output=True, text=True, shell=True)
    for e in json.loads(roh.stdout):
        if e.get("name") == "service_role" or e.get("id") == "service_role":
            return e["api_key"]
    raise SystemExit("kein service_role-Schluessel")


def rest(url, k, pfad, methode="GET", koerper=None):
    kopf = {"apikey": k, "Authorization": "Bearer " + k,
            "Content-Type": "application/json", "Prefer": "return=minimal"}
    d = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper is not None else None
    r = urllib.request.Request(url + "/rest/v1/" + pfad, data=d, headers=kopf, method=methode)
    with urllib.request.urlopen(r) as a:
        t = a.read().decode("utf-8")
        return json.loads(t) if t.strip() else []


def main():
    url, k = lies_env("EXPO_PUBLIC_SUPABASE_URL"), schluessel()

    # Erst pruefen, ob jeder Satz ueberhaupt existiert - ein Tippfehler in
    # der Zuordnung waere sonst still.
    vorhanden = {z["german"] for z in rest(url, k, "phrasebook_master?select=german")}
    fehlend = [s for liste in ZUORDNUNG.values() for s in liste if s not in vorhanden]
    if fehlend:
        print("NICHT GEFUNDEN - Zuordnung pruefen:")
        for s in fehlend:
            print("   " + s)
        raise SystemExit(1)

    gesamt = sum(len(v) for v in ZUORDNUNG.values())
    print(f"{gesamt} Saetze werden zugeordnet, {len(ZUORDNUNG)} Situationen\n")

    for tab in TABELLEN:
        n = 0
        for scenario, saetze in ZUORDNUNG.items():
            for satz in saetze:
                q = urllib.parse.quote(satz, safe="")
                kat = kategorie_von(scenario)
                # NUR innerhalb der eigenen Kategorie - siehe PRAEFIX_KATEGORIE.
                rest(url, k, f"{tab}?german=eq.{q}&category=eq.{kat}", "PATCH",
                     {"scenario": scenario})
                n += 1
        print(f"{tab}: {n} Saetze umsortiert")

    print()
    zeilen = rest(url, k, "phrasebook_master?select=category,scenario")
    nach = {}
    for z in zeilen:
        nach.setdefault(z["category"], set()).add(z["scenario"])
    for kat in sorted(nach):
        print(f"   {kat:24} {len(nach[kat])} Situationen")


if __name__ == "__main__":
    main()
