# -*- coding: utf-8 -*-
"""
Schreibt die chinesische Wortliste nach Supabase (Tabelle chinesisch_vocab).

Aufruf:  python import_chinesisch_vocab.py

Dritte Ausgabe derselben Quelle: build_chinesisch_kurs.py erzeugt die
TS-Datei fuer die App, merge_wortliste.py die geprueft Excel, und dieses
Skript befuellt die Datenbank. Simons Excel bleibt dadurch die EINZIGE
Stelle, an der Pinyin und Bedeutung gepflegt werden - ein erneuter Lauf
zieht alle drei nach.

SCHREIBZUGRIFF: die Tabelle laesst per RLS nur Lesen mit dem anon-Key zu.
Geschrieben wird mit dem service_role-Schluessel, den dieses Skript zur
Laufzeit ueber die Supabase-CLI holt - er steht bewusst NICHT in der Datei
und wird auch nicht ausgegeben.

IDEMPOTENT: `hanzi` ist eindeutig, der Import laeuft als Upsert. Mehrfaches
Ausfuehren erzeugt keine Dubletten, sondern aktualisiert.
"""

import json
import os
import subprocess
import sys
import urllib.request
from pathlib import Path

import build_chinesisch_kurs as bk
import chinesisch_erweiterung as erw

HIER = Path(__file__).parent
TABELLE = "chinesisch_vocab"
PROJEKT = "xculnaxfdtwzpdplvedc"


def lies_env(schluessel: str) -> str:
    """EXPO_PUBLIC_SUPABASE_URL aus der .env der App holen."""
    env = HIER.parents[1] / ".env"
    for zeile in env.read_text(encoding="utf-8").splitlines():
        if zeile.startswith(schluessel + "="):
            return zeile.split("=", 1)[1].strip().strip('"').strip("'")
    raise SystemExit(f"{schluessel} fehlt in mobile/.env")


def service_key() -> str:
    """
    Dienstschluessel ueber die CLI besorgen. Die ist bereits angemeldet;
    der Schluessel bleibt dadurch aus Dateien und Ausgaben heraus.
    """
    roh = subprocess.run(
        ["supabase", "projects", "api-keys", "--project-ref", PROJEKT, "-o", "json"],
        capture_output=True, text=True, shell=True,
    )
    if roh.returncode != 0:
        raise SystemExit("supabase CLI nicht angemeldet? " + roh.stderr[:200])
    # Je nach CLI-Version kommt eine Liste oder ein Objekt mit "keys".
    antwort = json.loads(roh.stdout)
    eintraege = antwort if isinstance(antwort, list) else antwort.get("keys", [])
    for eintrag in eintraege:
        if eintrag.get("id") == "service_role":
            return eintrag["api_key"]
    raise SystemExit("service_role-Schluessel nicht gefunden")


def zeilen():
    """Alle Woerter mit Herkunft und Lektionszuordnung."""
    lex, _ = bk.lade_wortliste()
    aus_erweiterung = set(erw.ZUSATZ_WORTLISTE) | set(bk.ERGAENZUNGEN)

    lektion_von = {}
    for _, _, lektionen in bk.module_mit_erweiterung():
        for lid, _art, _rahmen, _pron, gruppen in lektionen:
            for h in [x for g in gruppen for x in g]:
                lektion_von.setdefault(h, []).append(lid)

    return [
        {
            "hanzi": hanzi,
            "pinyin": e["pinyin"],
            "german": e["de"],
            "hsk_level": e["hsk"],
            "lesson": ", ".join(lektion_von.get(hanzi, [])) or None,
            "source": "erweiterung" if hanzi in aus_erweiterung else "excel",
            "status": "Neu",
        }
        for hanzi, e in lex.items()
    ]


def main():
    url = lies_env("EXPO_PUBLIC_SUPABASE_URL")
    key = service_key()
    daten = zeilen()

    kopf = {
        "apikey": key,
        "Authorization": f"Bearer {key}",
        "Content-Type": "application/json",
        # Upsert ueber den eindeutigen `hanzi` - mehrfach ausfuehrbar.
        "Prefer": "resolution=merge-duplicates,return=minimal",
    }

    # In Bloecken schicken: ein einzelner Riesen-Request ist unnoetig
    # fehleranfaellig, und bei einem Abbruch sieht man, wo es hakte.
    block = 100
    geschrieben = 0
    for i in range(0, len(daten), block):
        teil = daten[i:i + block]
        anfrage = urllib.request.Request(
            f"{url}/rest/v1/{TABELLE}?on_conflict=hanzi",
            data=json.dumps(teil, ensure_ascii=False).encode("utf-8"),
            headers=kopf, method="POST",
        )
        try:
            with urllib.request.urlopen(anfrage) as antwort:
                if antwort.status not in (200, 201, 204):
                    raise SystemExit(f"HTTP {antwort.status} bei Block {i // block + 1}")
        except urllib.error.HTTPError as fehler:
            raise SystemExit(
                f"Block {i // block + 1} abgelehnt: HTTP {fehler.code}\n"
                + fehler.read().decode("utf-8", "replace")[:400]
            )
        geschrieben += len(teil)
        print(f"  Block {i // block + 1}: {geschrieben}/{len(daten)}")

    print(f"\nFertig: {geschrieben} Woerter in {TABELLE}.")


if __name__ == "__main__":
    main()
