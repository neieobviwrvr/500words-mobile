# -*- coding: utf-8 -*-
"""Spielt die schwedische und spanische Fassung der neuen Grundwortschatz-Saetze ein.

IDEMPOTENT: Abgleich ueber (`category`, `german`) je Tabelle - genau der
Fehler, der beim Health-Import zuschlug, als nur EINE Tabelle geprueft wurde
und dadurch acht chinesische Saetze still uebersprungen wurden.

Prueft vor dem Schreiben, dass jeder deutsche Schluessel wirklich in
phrasebook_master steht. Ein Tippfehler dort legte sonst eine Waisenzeile an,
die zu keinem deutschen Satz gehoert und in keiner Uebersicht auffaellt.
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

    spec = importlib.util.spec_from_file_location("uebs", os.path.join(HIER, "uebersetzung_sv_es.py"))
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)

    # Die deutschen Zeilen tragen Situation und lookup_only - beides wird
    # uebernommen, statt es in der Uebersetzungsdatei zu wiederholen. So kann
    # es gar nicht auseinanderlaufen.
    deutsch = {z["german"]: z for z in rest(
        url, key,
        "phrasebook_master?select=german,scenario,lookup_only&category=eq.grundwortschatz")}

    fehlend = [s["de"] for s in modul.SAETZE if s["de"] not in deutsch]
    if fehlend:
        print("Diese deutschen Schluessel gibt es nicht in phrasebook_master:")
        for f in fehlend:
            print("   " + f)
        raise SystemExit("Abbruch - erst die Schreibweise angleichen.")

    for tab, feld_text, feld_k, feld_h, feld_c in [
        ("schwedisch_phrasebook", "sv", "sv_k", "sv_h", "sv_c"),
        ("spanisch_phrasebook", "es", "es_k", "es_h", None),
    ]:
        schon = {z["german"] for z in rest(
            url, key, f"{tab}?select=german&category=eq.grundwortschatz")}
        neu = []
        for s in modul.SAETZE:
            if s["de"] in schon:
                continue
            d = deutsch[s["de"]]
            neu.append(dict(
                target_text=s[feld_text], german=s["de"],
                scenario=d["scenario"], tense="present", difficulty="A1",
                category="grundwortschatz", status="Neu",
                lookup_only=d["lookup_only"], addressing=None,
                culture_note=s.get(feld_h),
                verb_cluster=s.get(feld_c) if feld_c else None,
                accepted_concepts=konzepte(s[feld_k])))
        if neu:
            rest(url, key, tab, "POST", neu, minimal)
        print(f"{tab:24} {len(neu)} neu, {len(schon)} standen schon drin")

    print("\nGrundwortschatz jetzt:")
    for tab in ["phrasebook_master", "schwedisch_phrasebook",
                "spanisch_phrasebook", "chinesisch_phrasebook"]:
        zeilen = rest(url, key, f"{tab}?select=scenario&category=eq.grundwortschatz")
        nach = {}
        for z in zeilen:
            nach[z["scenario"]] = nach.get(z["scenario"], 0) + 1
        teile = " ".join(f"{k}:{v}" for k, v in sorted(nach.items(), key=lambda x: -x[1]))
        print(f"   {tab:24} {len(zeilen):3}  {teile}")


if __name__ == "__main__":
    main()
