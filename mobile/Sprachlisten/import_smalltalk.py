# -*- coding: utf-8 -*-
"""Spielt die chinesische Spalte fuer Smalltalk und Umfeld ein.

Anders als bei Club und Health gibt es diese Saetze auf Deutsch, Schwedisch
und Spanisch bereits - hier kommt NUR `chinesisch_phrasebook` dazu.
phrasebook_master wird nicht angefasst.

Und anders als dort stammen die Saetze aus DREI Kategorien
(grundwortschatz, smalltalk_socialising, culture_immersion), deshalb traegt
jeder Eintrag seine eigene in `kat`.

Abgleich ueber (Kategorie, deutscher Satz): idempotent, ein zweiter Lauf
aendert nichts.
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
TABELLE = "chinesisch_phrasebook"


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


def main():
    spec = importlib.util.spec_from_file_location(
        "sm", os.path.join(HIER, "smalltalk", "welle1.py"))
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)

    url, key = lies_env("EXPO_PUBLIC_SUPABASE_URL"), dienst_schluessel()

    schon = {(z["category"], z["german"]) for z in
             rest(url, key, f"{TABELLE}?select=category,german")}

    zeilen = []
    for s in modul.SAETZE:
        if (s["kat"], s["de"]) in schon:
            continue
        zeilen.append(dict(
            target_text=s["zh"],
            pinyin=s["py"],
            german=s["de"],
            scenario=s["sz"],
            tense="present",
            difficulty="A1",
            category=s["kat"],
            status="Neu",
            lookup_only=s["lookup"],
            addressing=s["ansprache"],
            culture_note=s.get("hinweis"),
            accepted_concepts={
                "required": [{"concept": c, "synonyms": syn} for c, syn in s["konzepte"]],
                "optional": [],
            },
        ))

    if not zeilen:
        print("Nichts zu tun.")
        return

    rest(url, key, TABELLE, "POST", zeilen, {"Prefer": "return=minimal"})
    print(f"{len(zeilen)} chinesische Saetze eingespielt")

    # Gegenzaehlen statt dem POST zu glauben
    alle = rest(url, key, f"{TABELLE}?select=category,scenario")
    nach = {}
    for z in alle:
        nach.setdefault(z["category"], set()).add(z["scenario"])
    print()
    print(f"{TABELLE}: {len(alle)} Saetze")
    for kat in sorted(nach):
        n = sum(1 for z in alle if z["category"] == kat)
        print(f"   {kat:24} {n:4} Saetze, {len(nach[kat])} Situationen")


if __name__ == "__main__":
    main()
