# -*- coding: utf-8 -*-
"""Spielt die chinesischen Fassungen der sechs Kategorien ein (2026-08-22).

Drinking, Hotel, Moving, Shopping, Travel, University hatten auf Deutsch
laengst Saetze und auf Chinesisch NULL. Hier entstehen ausschliesslich
chinesische Zeilen - die deutsche Seite steht schon.

IDEMPOTENT: Abgleich ueber (`category`, `german`) in chinesisch_phrasebook.

**`de_alt`**: wo der deutsche Satz eine europaeische Stadt, eine Waehrung
oder eine hiesige Gepflogenheit nennt, traegt die chinesische Zeile einen
angepassten Gloss ("nach Peking" statt "nach Muenchen"). `de_alt` haelt
fest, aus welchem deutschen Satz sie hervorgeht - damit der Abgleich nicht
doppelt anlegt und spaeter nachvollziehbar bleibt, warum die beiden Zeilen
verschieden heissen.

**Situation und `lookup_only` kommen aus der deutschen Zeile**, nicht aus der
Uebersetzungsdatei - so koennen sie gar nicht auseinanderlaufen. Ausnahme:
wo die Datei `lookup=True` setzt, gewinnt sie; ein Satz kann auf Chinesisch
zum Nachschlagesatz werden, weil er dort Vokabeln braucht, die der Kurs
nicht lehrt.
"""
import importlib.util
import io
import json
import os
import subprocess
import urllib.request

PROJEKT = "xculnaxfdtwzpdplvedc"
HIER = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(os.path.dirname(HIER))

# Uebersetzungen: nur die chinesische Zeile entsteht, die deutsche steht schon.
DATEIEN = {
    "drinking_dining": "drinking_dining.py",
    "hotel_accommodation": "hotel_accommodation.py",
    "moving_settling": "moving_settling.py",
    "shopping_haggling": "shopping_haggling.py",
    "travel_transportation": "travel_transportation.py",
    "university_studying": "university_studying.py",
}

# Ausbau-Wellen: NEUE Saetze, es entstehen BEIDE Zeilen. Erkennbar am Feld
# `de_konzepte` - eine Uebersetzung hat es nicht, weil die deutsche Seite
# schon steht.
NEUE = {
    "drinking_dining": ["drinking_welle2.py"],
}


def lies_env(name):
    for zeile in io.open(os.path.join(APP, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def dienst_schluessel():
    roh = subprocess.run(
        ["supabase", "projects", "api-keys", "--project-ref", PROJEKT, "-o", "json"],
        capture_output=True, text=True, shell=True)
    for e in json.loads(roh.stdout):
        if e.get("name") == "service_role" or e.get("id") == "service_role":
            return e["api_key"]
    raise SystemExit("service_role-Schluessel nicht gefunden")


def rest(url, key, pfad, methode="GET", koerper=None, extra=None):
    kopf = {"apikey": key, "Authorization": "Bearer " + key, "Content-Type": "application/json"}
    if extra:
        kopf.update(extra)
    d = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper is not None else None
    r = urllib.request.Request(url + "/rest/v1/" + pfad, data=d, headers=kopf, method=methode)
    with urllib.request.urlopen(r) as a:
        t = a.read().decode("utf-8")
        return json.loads(t) if t.strip() else []


def konzepte(paare):
    return {"required": [{"concept": c, "synonyms": s} for c, s in paare], "optional": []}


def lade(datei):
    spec = importlib.util.spec_from_file_location(datei[:-3], os.path.join(HIER, datei))
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m.SAETZE


def main():
    url, key = lies_env("EXPO_PUBLIC_SUPABASE_URL"), dienst_schluessel()
    minimal = {"Prefer": "return=minimal"}

    neu, fehlend = [], []
    for kategorie, datei in DATEIEN.items():
        deutsch = {z["german"]: z for z in rest(
            url, key,
            f"phrasebook_master?select=german,scenario,lookup_only&category=eq.{kategorie}")}
        schon = {z["german"] for z in rest(
            url, key, f"chinesisch_phrasebook?select=german&category=eq.{kategorie}")}

        for s in lade(datei):
            # Welcher deutsche Satz ist gemeint? Bei angepasstem Gloss der
            # urspruengliche.
            quelle = s.get("de_alt", s["de"])
            d = deutsch.get(quelle)
            if not d:
                fehlend.append((kategorie, quelle))
                continue
            if s["de"] in schon:
                continue
            neu.append(dict(
                target_text=s["zh"], pinyin=s["py"], german=s["de"],
                scenario=s["sz"], tense="present", difficulty="A1",
                category=kategorie, status="Neu",
                # `lookup=True` in der Datei gewinnt - siehe Kopf.
                lookup_only=s["lookup"] or bool(d["lookup_only"]),
                addressing=None, culture_note=s.get("hinweis"),
                accepted_concepts=konzepte(s["konzepte"])))

    # --- Ausbau-Wellen: deutsche UND chinesische Zeile ---------------------
    de_neu = []
    for kategorie, dateien in NEUE.items():
        schon_de = {z["german"] for z in rest(
            url, key, f"phrasebook_master?select=german&category=eq.{kategorie}")}
        schon_zh = {z["german"] for z in rest(
            url, key, f"chinesisch_phrasebook?select=german&category=eq.{kategorie}")}
        for datei in dateien:
            for s in lade(datei):
                gemeinsam = dict(scenario=s["sz"], tense="present", difficulty="A1",
                                 category=kategorie, status="Neu",
                                 lookup_only=s["lookup"], addressing=s["ansprache"])
                if s["de"] not in schon_de:
                    de_neu.append(dict(german=s["de"],
                                       accepted_concepts=konzepte(s["de_konzepte"]),
                                       **gemeinsam))
                    schon_de.add(s["de"])
                if s["de"] not in schon_zh:
                    neu.append(dict(target_text=s["zh"], pinyin=s["py"], german=s["de"],
                                    culture_note=s.get("hinweis"),
                                    accepted_concepts=konzepte(s["konzepte"]),
                                    **gemeinsam))
                    schon_zh.add(s["de"])

    if de_neu:
        for i in range(0, len(de_neu), 50):
            rest(url, key, "phrasebook_master", "POST", de_neu[i:i + 50], minimal)
    print(f"{len(de_neu)} deutsche Saetze eingespielt")

    if fehlend:
        print("Diese deutschen Schluessel gibt es nicht in phrasebook_master:")
        for kat, g in fehlend:
            print(f"   [{kat}] {g}")
        raise SystemExit("Abbruch - erst die Schreibweise angleichen.")

    if neu:
        # In Haeppchen, damit ein einzelner Fehlschlag nicht den ganzen
        # Stapel mitnimmt.
        for i in range(0, len(neu), 50):
            rest(url, key, "chinesisch_phrasebook", "POST", neu[i:i + 50], minimal)
    print(f"{len(neu)} chinesische Saetze eingespielt")

    print("\nStand je Kategorie (deutsch / chinesisch):")
    for kategorie in DATEIEN:
        de = len(rest(url, key, f"phrasebook_master?select=german&category=eq.{kategorie}"))
        zh = len(rest(url, key, f"chinesisch_phrasebook?select=german&category=eq.{kategorie}"))
        print(f"   {kategorie:24} {de:3} / {zh:3}")


if __name__ == "__main__":
    main()
