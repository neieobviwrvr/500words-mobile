# -*- coding: utf-8 -*-
"""Spielt Club + Nightlife auf Schwedisch nach schwedisch_phrasebook.

Quelle: schwedisch.py - die 109 uebertragbaren Saetze. Die uebrigen 22
bleiben chinesisch, weil es in Schweden kein Gegenstueck gibt (siehe
Kopfkommentar dort).

Der deutsche Satz aus `de` dient als Gloss UND als Abgleichschluessel: er ist
innerhalb der Kategorie eindeutig, das Skript laesst sich also gefahrlos
mehrfach laufen.

Wichtig: phrasebook_master bekommt hier NICHTS. Die deutschen Saetze der
Kategorie stehen dort schon (aus dem Chinesisch-Import) - eine Sprache
hinzuzufuegen heisst nur, ihre eigene Tabelle zu fuellen.
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
KATEGORIE = "club_nightlife"
TABELLE = "schwedisch_phrasebook"


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
    spec = importlib.util.spec_from_file_location("sv", os.path.join(HIER, "schwedisch.py"))
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)

    url, key = lies_env("EXPO_PUBLIC_SUPABASE_URL"), dienst_schluessel()

    vorhanden = {z["german"] for z in
                 rest(url, key, f"{TABELLE}?select=german&category=eq.{KATEGORIE}")}
    if vorhanden:
        print(f"{len(vorhanden)} Saetze dieser Kategorie sind schon da - werden uebersprungen.")

    zeilen = []
    for s in modul.SAETZE:
        if s["de"] in vorhanden:
            continue
        zeilen.append(dict(
            target_text=s["sv"],
            german=s["de"],
            scenario=s["sz"],
            tense="present",
            difficulty="A2",
            category=KATEGORIE,
            status="Neu",
            lookup_only=s["lookup"],
            addressing=s["ansprache"],
            accepted_concepts={
                "required": [{"concept": c, "synonyms": syn} for c, syn in s["konzepte"]],
                "optional": [],
            },
        ))

    if not zeilen:
        print("Nichts zu tun.")
        return

    rest(url, key, TABELLE, "POST", zeilen, {"Prefer": "return=minimal"})
    print(f"{len(zeilen)} schwedische Saetze eingespielt")

    # Gegenzaehlen statt dem POST zu glauben
    drin = rest(url, key, f"{TABELLE}?select=scenario&category=eq.{KATEGORIE}")
    nach = {}
    for z in drin:
        nach[z["scenario"]] = nach.get(z["scenario"], 0) + 1
    print(f"{TABELLE}: {len(drin)} Saetze in {KATEGORIE}")
    for k, v in sorted(nach.items()):
        print(f"   {k:24} {v}")
    gesamt = rest(url, key, f"{TABELLE}?select=id")
    print(f"Tabelle insgesamt: {len(gesamt)} Saetze")


if __name__ == "__main__":
    main()
