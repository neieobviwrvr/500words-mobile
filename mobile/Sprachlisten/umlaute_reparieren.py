# -*- coding: utf-8 -*-
"""Ersetzt ASCII-Behelfsschreibungen in NUTZERTEXTEN durch echte Umlaute.

Gefunden am 2026-08-22 auf der Uebungskarte: "Ich moechte noch ein Bier."
Vier Woerter, 14 Zeilen, alle aus Club + Nightlife.

**Die Regel, die hier verletzt wurde:** in CODE-Kommentaren schreiben wir
bewusst `oe`/`ae`/`ue`/`ss` statt Umlauten (Konsistenz mit der uebrigen
Codebasis). In allem, was der NUTZER liest - Satztexte, Kulturhinweise,
Beschriftungen - gilt das NICHT. Beim Schreiben der Club-Welle ist die
Gewohnheit aus den Kommentaren in die Saetze uebergelaufen.

Betrifft nur `phrasebook_master` und `chinesisch_phrasebook`; die
schwedischen und spanischen Gegenstuecke dieser Saetze sind sauber, weil sie
spaeter aus den korrigierten Quellen uebernommen wurden.

IDEMPOTENT: schreibt nur, wo tatsaechlich eine Ersetzung greift.
"""
import io
import json
import os
import re
import subprocess
import urllib.request

PROJEKT = "xculnaxfdtwzpdplvedc"
HIER = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(HIER)

TABELLEN = ["phrasebook_master", "schwedisch_phrasebook",
            "spanisch_phrasebook", "chinesisch_phrasebook"]
FELDER = ["german", "culture_note"]

# Kleingeschrieben; die Ersetzung erhaelt den ersten Buchstaben in seiner
# urspruenglichen Groesse. Bewusst eine feste Liste statt einer Regel:
# "ss" -> "ß" waere in "wusste", "dass" oder "Adresse" schlicht falsch.
ERSATZ = {
    "draussen": "draußen",
    "gefaellt": "gefällt",
    "heisst": "heißt",
    "huebsch": "hübsch",
    "laesst": "lässt",
    "moechte": "möchte",
    "wuerden": "würden",
}

# So wurde die Liste gefunden - nicht geraten, sondern ausgezaehlt: alle
# Woerter aus `german` und `culture_note`, die ue/oe/ae/ss enthalten und
# keinen Umlaut, ergaben 40 verschiedene. Davon sind 33 korrektes Deutsch
# ("dass", "muss", "wusste", "bisschen", "Adresse", "Wasser", "teuer",
# "zuerst", "Frauen", "Klasse", "Interesse", "Pass", "lassen"), zwei
# spanisch ("puede", "puedes"), sieben falsch - die sieben stehen oben.
# Wer neue Saetze schreibt, laesst dieselbe Auszaehlung nochmal laufen.


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


MUSTER = re.compile("|".join(ERSATZ), re.IGNORECASE)


def berichtige(text):
    def ersetze(m):
        neu = ERSATZ[m.group(0).lower()]
        return neu[0].upper() + neu[1:] if m.group(0)[0].isupper() else neu
    return MUSTER.sub(ersetze, text)


def main():
    url, key = lies_env("EXPO_PUBLIC_SUPABASE_URL"), dienst_schluessel()
    minimal = {"Prefer": "return=minimal"}
    gesamt = 0

    for tab in TABELLEN:
        zeilen = rest(url, key, f"{tab}?select=id,{','.join(FELDER)}")
        for z in zeilen:
            aenderung = {}
            for feld in FELDER:
                alt = z.get(feld)
                if not alt:
                    continue
                neu = berichtige(alt)
                if neu != alt:
                    aenderung[feld] = neu
            if aenderung:
                rest(url, key, f"{tab}?id=eq.{z['id']}", "PATCH", aenderung, minimal)
                gesamt += 1
                for feld, neu in aenderung.items():
                    print(f"   {tab[:12]:12} id={z['id']:4} {feld:12} {neu[:64]}")

    print(f"\n{gesamt} Zeilen berichtigt." if gesamt else "\nNichts zu tun.")


if __name__ == "__main__":
    main()
