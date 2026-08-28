# -*- coding: utf-8 -*-
"""Baut den Grundwortschatz um: zusammenlegen, zurueckholen, einspielen.

Drei Schritte, alle idempotent:

  1. "Verabschieden" (3 Saetze) geht in "Begruessen" auf. Drei Saetze sind
     kein Thema, sondern das andere Ende desselben Gespraechs - als eigene
     Box wirkt das wie ein Rest (Nutzer-Entscheidung nach dem Screenshot:
     alles unter fuenf Saetzen traegt keine Karte).

  2. Zwei Saetze kommen aus Kaufkategorien zurueck in den freien Teil:
     "Hilfe!" lag in health_emergency, "Wo ist die Toilette?" in
     drinking_dining. Ein Notruf hinter der Bezahlschranke ist der Fall, den
     man am wenigsten will.

  3. Die neuen Saetze aus welle1.py werden eingespielt - deutsch in
     phrasebook_master, chinesisch in chinesisch_phrasebook.

Schwedisch und Spanisch bekommen die neuen Saetze NICHT: die muessen erst
uebersetzt werden. Die Verschiebungen aus Schritt 1 und 2 gelten dort aber
mit, weil es dieselben Saetze sind.
"""
import importlib.util
import io
import json
import os
import subprocess
import urllib.parse
import urllib.request

PROJEKT = "xculnaxfdtwzpdplvedc"
HIER = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(os.path.dirname(HIER))

ALLE = ["phrasebook_master", "schwedisch_phrasebook", "spanisch_phrasebook", "chinesisch_phrasebook"]

# Schritt 1: Verabschieden geht in Begruessen auf
ZUSAMMENLEGEN = [
    ("Bis später!", "begruessung"),
    ("Tschüss!", "begruessung"),
    ("Auf Wiedersehen!", "begruessung"),
]

# Schritt 2: (deutscher Satz, alte Kategorie) -> in den Grundwortschatz
ZURUECKHOLEN = [
    ("Hilfe!", "health_emergency", "notlage"),
    ("Wo ist die Toilette?", "drinking_dining", "notlage"),
]


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


def main():
    url, key = lies_env("EXPO_PUBLIC_SUPABASE_URL"), dienst_schluessel()
    minimal = {"Prefer": "return=minimal"}

    print("1. Verabschieden geht in Begruessen auf")
    for satz, ziel in ZUSAMMENLEGEN:
        q = urllib.parse.quote(satz, safe="")
        for tab in ALLE:
            rest(url, key, f"{tab}?german=eq.{q}&category=eq.grundwortschatz", "PATCH",
                 {"scenario": ziel}, minimal)
        print(f"   {satz}")

    print("\n2. Zurueck in den freien Teil")
    for satz, alt_kat, ziel in ZURUECKHOLEN:
        q = urllib.parse.quote(satz, safe="")
        n = 0
        for tab in ALLE:
            treffer = rest(url, key, f"{tab}?select=id&german=eq.{q}&category=eq.{alt_kat}")
            if treffer:
                rest(url, key, f"{tab}?german=eq.{q}&category=eq.{alt_kat}", "PATCH",
                     {"category": "grundwortschatz", "scenario": ziel}, minimal)
                n += len(treffer)
        print(f"   {satz}  ({alt_kat} -> grundwortschatz, {n} Zeilen)")

    print("\n3. Neue Saetze einspielen")
    schon_de = {z["german"] for z in
                rest(url, key, "phrasebook_master?select=german&category=eq.grundwortschatz")}
    schon_zh = {z["german"] for z in
                rest(url, key, "chinesisch_phrasebook?select=german&category=eq.grundwortschatz")}

    de_neu, zh_neu = [], []
    for datei in ("welle1.py", "welle2.py"):
        spec = importlib.util.spec_from_file_location(datei[:-3], os.path.join(HIER, datei))
        modul = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(modul)
        for s in modul.SAETZE:
            gemeinsam = dict(scenario=s["sz"], tense="present", difficulty="A1",
                             category="grundwortschatz", status="Neu",
                             lookup_only=s["lookup"], addressing=s["ansprache"])
            # Nur Wellen mit `de_konzepte` legen auch eine deutsche Zeile an.
            # Welle 2 uebersetzt bestehende Saetze - die deutsche Seite steht
            # schon, dort entsteht ausschliesslich die chinesische Zeile.
            if "de_konzepte" in s and s["de"] not in schon_de:
                de_neu.append(dict(german=s["de"],
                                   accepted_concepts=konzepte(s["de_konzepte"]), **gemeinsam))
                schon_de.add(s["de"])
            if s["de"] not in schon_zh:
                zh_neu.append(dict(target_text=s["zh"], pinyin=s["py"], german=s["de"],
                                   culture_note=s.get("hinweis"),
                                   accepted_concepts=konzepte(s["konzepte"]), **gemeinsam))
                schon_zh.add(s["de"])

    if de_neu:
        rest(url, key, "phrasebook_master", "POST", de_neu, minimal)
    if zh_neu:
        rest(url, key, "chinesisch_phrasebook", "POST", zh_neu, minimal)
    print(f"   phrasebook_master:     {len(de_neu)} neu")
    print(f"   chinesisch_phrasebook: {len(zh_neu)} neu")

    print("\nGrundwortschatz jetzt:")
    for tab in ALLE:
        zeilen = rest(url, key, f"{tab}?select=scenario&category=eq.grundwortschatz")
        nach = {}
        for z in zeilen:
            nach[z["scenario"]] = nach.get(z["scenario"], 0) + 1
        teile = " ".join(f"{k}:{v}" for k, v in sorted(nach.items(), key=lambda x: -x[1]))
        print(f"   {tab:24} {len(zeilen):3}  {teile}")


if __name__ == "__main__":
    main()
