# -*- coding: utf-8 -*-
"""Spielt spanisch_top500.py nach Supabase (Tabelle spanisch_vocab).

Nach dem Muster der Uebersetzungs-Werkzeuge in diesem Repo: Probelauf per
Default, Idempotenz ueber den eindeutigen Index auf `spanish` (Upsert statt
Insert - ein zweiter Lauf ueberschreibt nur, dupliziert nicht).

Nutzung:  python import_spanisch_vocab.py          (Probelauf)
          python import_spanisch_vocab.py --echt
"""
import importlib.util
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
TABELLE = "spanisch_vocab"


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def rest(url, key, pfad, methode="GET", koerper=None, extra_kopf=None):
    kopf = {"apikey": key, "Authorization": "Bearer " + key,
            "Content-Type": "application/json", "Prefer": "return=representation"}
    if extra_kopf:
        kopf.update(extra_kopf)
    d = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper is not None else None
    r = urllib.request.Request(url + "/rest/v1/" + pfad, data=d, headers=kopf, method=methode)
    with urllib.request.urlopen(r) as a:
        t = a.read().decode("utf-8")
        return json.loads(t) if t.strip() else []


def main():
    echt = "--echt" in sys.argv
    spec = importlib.util.spec_from_file_location("s", os.path.join(HIER, "spanisch_top500.py"))
    M = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(M)

    schluessel = [w[0] for w in M.WOERTER]
    doppelt = {x for x in schluessel if schluessel.count(x) > 1}
    if doppelt:
        raise SystemExit(f"Doppelte Woerter in spanisch_top500.py: {sorted(doppelt)}")

    zeilen = []
    for i, (spanish, german, kategorie, genus) in enumerate(M.WOERTER, start=1):
        zeilen.append({
            "spanish": spanish,
            "german": german,
            "category": kategorie,
            "genus": genus,
            "frequency_rank": i,
            "status": "Neu",
        })

    print(f"spanisch_top500.py: {len(zeilen)} Woerter")
    if not echt:
        print("PROBELAUF - nichts geschrieben. Mit --echt einspielen.")
        for z in zeilen[:5]:
            print(f"  {z['frequency_rank']:3}  {z['spanish']:20} {z['category']:10} {z['german']}")
        print("  ...")
        return

    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    for i in range(0, len(zeilen), 40):
        rest(url, key, f"{TABELLE}?on_conflict=spanish", "POST", zeilen[i:i + 40],
             extra_kopf={"Prefer": "resolution=merge-duplicates,return=representation"})
        print(f"  {min(i + 40, len(zeilen))}/{len(zeilen)}")

    endstand = rest(url, key, f"{TABELLE}?select=id")
    print(f"Fertig. {TABELLE} steht jetzt bei {len(endstand)} Woertern.")


if __name__ == "__main__":
    main()
