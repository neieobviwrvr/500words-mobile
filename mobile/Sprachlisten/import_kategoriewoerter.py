# -*- coding: utf-8 -*-
"""Spielt die Kategorie-Vokabeln ALLER Wellen nach chinesisch_vocab.

Loest die drei Einzelskripte ab: es sammelt aus jedem Unterordner die
`kategoriewoerter.py` ein und schreibt, was noch fehlt.

`category` sagt, zu welchem Paket ein Wort gehoert - gebraucht fuer die
Wortliste je Kategorie und fuer die spaetere Vertonung, die wissen muss,
welche Woerter gebuendelt aufgenommen werden. Die 350 Kurswoerter behalten
`null`: sie gehoeren dem gefuehrten Kurs, keiner Kaufkategorie.

Ein Eintrag darf seine Kategorie selbst tragen (`kat`) - bei Smalltalk
verteilen sich die Woerter auf drei Kategorien. Ohne Angabe gilt der
Ordnername.

IDEMPOTENT: Abgleich ueber `hanzi`.
"""
import importlib.util
import io
import json
import os
import subprocess
import urllib.request

PROJEKT = "xculnaxfdtwzpdplvedc"
HIER = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(HIER)

# Ordner -> Kategorie, falls der Eintrag keine eigene traegt
ORDNER = {
    "club_nightlife": "club_nightlife",
    "health_emergency": "health_emergency",
    "smalltalk": None,   # jeder Eintrag traegt seine eigene
    "grundwortschatz": "grundwortschatz",
    # Der Chinesisch-Ausbau: jeder Eintrag traegt seine Kategorie selbst,
    # weil eine Datei sechs Kategorien abdeckt.
    "chinesisch_ausbau": None,
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
    if roh.returncode != 0:
        raise SystemExit("supabase-CLI nicht erreichbar")
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


def sammle():
    alle = []
    for ordner, standard in ORDNER.items():
        pfad = os.path.join(HIER, ordner, "kategoriewoerter.py")
        if not os.path.exists(pfad):
            continue
        spec = importlib.util.spec_from_file_location(ordner + "_kw", pfad)
        m = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(m)
        for w in m.WOERTER:
            alle.append(dict(w, kat=w.get("kat", standard)))
        print(f"   {ordner}: {len(m.WOERTER)} Woerter")
    return alle


def main():
    print("Quelldateien:")
    woerter = sammle()

    url, key = lies_env("EXPO_PUBLIC_SUPABASE_URL"), dienst_schluessel()
    vorhanden = {z["hanzi"] for z in rest(url, key, "chinesisch_vocab?select=hanzi")}

    neu = [w for w in woerter if w["hanzi"] not in vorhanden]
    schon = [w for w in woerter if w["hanzi"] in vorhanden]
    if schon:
        print(f"\n{len(schon)} stehen schon drin (meist Kurswoerter): "
              + " ".join(w["hanzi"] for w in schon))

    if not neu:
        print("\nNichts einzuspielen.")
        return

    zeilen = [dict(hanzi=w["hanzi"], pinyin=w["pinyin"], german=w["de"],
                   category=w["kat"], source="kategorie", status="Neu")
              for w in neu]
    rest(url, key, "chinesisch_vocab", "POST", zeilen, {"Prefer": "return=minimal"})
    print(f"\n{len(neu)} Vokabeln eingespielt")

    alle = rest(url, key, "chinesisch_vocab?select=hanzi,category")
    nach = {}
    for z in alle:
        nach[z["category"] or "(Kurs)"] = nach.get(z["category"] or "(Kurs)", 0) + 1
    print(f"chinesisch_vocab: {len(alle)} Woerter")
    for kat, n in sorted(nach.items()):
        print(f"   {kat:24} {n}")


if __name__ == "__main__":
    main()
