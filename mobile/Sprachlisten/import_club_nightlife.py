# -*- coding: utf-8 -*-
"""Importiert Welle 1 von Club + Nightlife nach Supabase.

Zwei Ziele je Satz:
  phrasebook_master       der deutsche Satz (die Quelle, wie bei allen Kategorien)
  chinesisch_phrasebook   Zeichen + Pinyin + deutsche Bedeutung

Geschrieben wird mit dem service_role-Schluessel, den dieses Skript zur
Laufzeit ueber die Supabase-CLI holt - er wird nirgends gespeichert und
nirgends ausgegeben. Gleiches Vorgehen wie import_chinesisch_vocab.py.

IDEMPOTENT: laeuft das Skript zweimal, entstehen keine Doppel. Abgeglichen
wird ueber (category, scenario, german) - der deutsche Satz ist innerhalb
einer Situation eindeutig.
"""
import io
import json
import os
import subprocess
import sys
import urllib.request

PROJEKT = "xculnaxfdtwzpdplvedc"
BASIS = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(BASIS)

KATEGORIE = "club_nightlife"


def lies_env(name):
    for zeile in io.open(os.path.join(APP, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(f"{name} nicht in mobile/.env gefunden")


def dienst_schluessel():
    roh = subprocess.run(
        ["supabase", "projects", "api-keys", "--project-ref", PROJEKT, "-o", "json"],
        capture_output=True, text=True, shell=True,
    )
    if roh.returncode != 0:
        raise SystemExit("supabase-CLI nicht erreichbar - bist du eingeloggt?")
    for eintrag in json.loads(roh.stdout):
        if eintrag.get("name") == "service_role" or eintrag.get("id") == "service_role":
            return eintrag["api_key"]
    raise SystemExit("service_role-Schluessel nicht gefunden")


def rest(url, key, pfad, methode="GET", koerper=None, extra=None):
    kopf = {
        "apikey": key,
        "Authorization": "Bearer " + key,
        "Content-Type": "application/json",
    }
    if extra:
        kopf.update(extra)
    daten = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper is not None else None
    anfrage = urllib.request.Request(url + "/rest/v1/" + pfad, data=daten, headers=kopf, method=methode)
    with urllib.request.urlopen(anfrage) as antwort:
        text = antwort.read().decode("utf-8")
        return json.loads(text) if text.strip() else []


def konzepte(paare):
    """Unser kompaktes Entwurfsformat in das DB-Format uebersetzen."""
    return {
        "required": [{"concept": c, "synonyms": s} for c, s in paare],
        "optional": [],
    }


def wellen():
    """Alle Entwurfsdateien der Kategorie, in Reihenfolge."""
    import importlib.util
    ordner = os.path.join(BASIS, "club_nightlife")
    saetze = []
    for name in sorted(f for f in os.listdir(ordner) if f.startswith("welle")):
        spec = importlib.util.spec_from_file_location(name[:-3], os.path.join(ordner, name))
        modul = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(modul)
        saetze += modul.SAETZE
        print(f"  {name}: {len(modul.SAETZE)} Saetze")
    return saetze


def main():

    url = lies_env("EXPO_PUBLIC_SUPABASE_URL")
    key = dienst_schluessel()

    # Was schon drin ist - damit ein zweiter Lauf nichts verdoppelt.
    #
    # JE TABELLE pruefen, nicht nur einmal (berichtigt 2026-08-21). Vorher
    # entschied allein phrasebook_master: stand der deutsche Satz schon da,
    # wurde der ganze Eintrag uebersprungen - auch die chinesische Zeile, die
    # es gar nicht gab. Bei Health fehlten dadurch acht Saetze auf
    # Chinesisch, darunter 救命 ("Hilfe!").
    schon_de = {z["german"] for z in
                rest(url, key, f"phrasebook_master?select=german&category=eq.{KATEGORIE}")}
    schon_zh = {z["german"] for z in
                rest(url, key, f"chinesisch_phrasebook?select=german&category=eq.{KATEGORIE}")}
    if schon_de or schon_zh:
        print(f"schon vorhanden: {len(schon_de)} deutsch, {len(schon_zh)} chinesisch")

    print("Entwurfsdateien:")
    alle = wellen()

    de_neu, zh_neu = [], []
    for s in alle:
        if s["de"] in schon_de and s["de"] in schon_zh:
            continue
        gemeinsam = dict(
            scenario=s["sz"],
            tense="present",
            difficulty="A2",
            category=KATEGORIE,
            status="Neu",
            lookup_only=s["lookup"],
            addressing=s["ansprache"],
            culture_note=s.get("hinweis"),
        )
        if s["de"] not in schon_de:
            de_neu.append(dict(german=s["de"], accepted_concepts=konzepte([]), **gemeinsam))
        if s["de"] in schon_zh:
            continue
        zh_neu.append(dict(
            target_text=s["zh"],
            pinyin=s["py"],
            german=s["de"],
            accepted_concepts=konzepte(s["konzepte"]),
            **gemeinsam,
        ))

    if not de_neu and not zh_neu:
        print("Nichts zu tun.")
        return

    if de_neu:
        rest(url, key, "phrasebook_master", "POST", de_neu, {"Prefer": "return=minimal"})
    print(f"phrasebook_master:     {len(de_neu)} deutsche Saetze eingespielt")

    if zh_neu:
        rest(url, key, "chinesisch_phrasebook", "POST", zh_neu, {"Prefer": "return=minimal"})
    print(f"chinesisch_phrasebook: {len(zh_neu)} chinesische Saetze eingespielt")

    # Gegenzaehlen, statt dem POST zu glauben.
    for tabelle in ("phrasebook_master", "chinesisch_phrasebook"):
        zeilen = rest(url, key, f"{tabelle}?select=scenario&category=eq.{KATEGORIE}")
        nach_situation = {}
        for z in zeilen:
            nach_situation[z["scenario"]] = nach_situation.get(z["scenario"], 0) + 1
        teile = ", ".join(f"{k} {v}" for k, v in sorted(nach_situation.items()))
        print(f"  {tabelle:24} jetzt {len(zeilen):3} Saetze  ({teile})")


if __name__ == "__main__":
    main()
