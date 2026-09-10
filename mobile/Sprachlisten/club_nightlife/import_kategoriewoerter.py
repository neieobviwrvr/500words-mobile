# -*- coding: utf-8 -*-
"""Spielt die Kategorie-Vokabeln nach chinesisch_vocab ein.

Die 350 Woerter des gefuehrten Kurses liegen dort schon (category = null).
Diese hier bringt die Kaufkategorie selbst mit und bekommt entsprechend
`category = 'club_nightlife'`.

Warum ueberhaupt in die Datenbank, wo die App sie aus der erzeugten
TS-Datei liest? Weil die Vertonung spaeter von dort arbeitet: sie muss
wissen, welche Woerter zu welchem Paket gehoeren, um sie gebuendelt
aufnehmen zu koennen. Und weil das Sperrbildschirm-Widget seine Woerter aus
Supabase holt, nicht aus dem Bundle.

IDEMPOTENT: abgeglichen wird ueber `hanzi`, gleiches Verfahren wie bei
import_chinesisch_vocab.py.
"""
import io
import json
import os
import subprocess
import urllib.request
import importlib.util

PROJEKT = "xculnaxfdtwzpdplvedc"
HIER = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(os.path.dirname(HIER))
KATEGORIE = "club_nightlife"


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
    spec = importlib.util.spec_from_file_location("kw", os.path.join(HIER, "kategoriewoerter.py"))
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)

    url, key = lies_env("EXPO_PUBLIC_SUPABASE_URL"), dienst_schluessel()

    vorhanden = {z["hanzi"] for z in rest(url, key, "chinesisch_vocab?select=hanzi")}
    neu = [w for w in modul.WOERTER if w["hanzi"] not in vorhanden]
    schon = [w for w in modul.WOERTER if w["hanzi"] in vorhanden]

    if schon:
        # Kommt vor: ein paar Kategoriewoerter stehen auch im Kurs (z.B. 要).
        # Die bekommen KEINE Kategorie zugewiesen - sie gehoeren dem Kurs.
        print(f"{len(schon)} schon in der Tabelle (gehoeren zum Kurs): "
              + " ".join(w["hanzi"] for w in schon))

    if not neu:
        print("Nichts einzuspielen.")
        return

    zeilen = [dict(hanzi=w["hanzi"], pinyin=w["pinyin"], german=w["de"],
                   category=KATEGORIE, source="kategorie", status="Neu")
              for w in neu]
    rest(url, key, "chinesisch_vocab", "POST", zeilen, {"Prefer": "return=minimal"})
    print(f"{len(neu)} Kategorie-Vokabeln eingespielt")

    # Gegenzaehlen statt dem POST zu glauben
    drin = rest(url, key, f"chinesisch_vocab?select=hanzi&category=eq.{KATEGORIE}")
    gesamt = rest(url, key, "chinesisch_vocab?select=hanzi")
    print(f"chinesisch_vocab: {len(gesamt)} Woerter gesamt, davon {len(drin)} fuer {KATEGORIE}")


if __name__ == "__main__":
    main()
