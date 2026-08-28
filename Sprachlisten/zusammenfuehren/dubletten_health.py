# -*- coding: utf-8 -*-
"""Legt vier doppelt gefuehrte Health-Saetze auf je EINE Fassung zusammen.

Gefunden am 2026-08-27, als Simon fragte, was die "16 fehlenden chinesischen
Saetze" eigentlich sind. Antwort: ein Teil davon fehlte gar nicht - der
MASTER fuehrt denselben Satz zweimal, in zwei deutschen Fassungen:

  id 144 "Es tut hier weh."                    id 326 "Hier tut es weh."
  id 135 "Rufen Sie bitte einen Krankenwagen!" id 347 "Bitte rufen Sie einen Krankenwagen!"
  id 143 "Ich habe mich erkältet."             id 323 "Ich bin erkältet."
  id 142 "Können Sie mir einen Termin geben?"  id 337 "Kann ich einen Termin bekommen?"

Die niedrigen IDs stammen aus den urspruenglichen 189 Saetzen, die hohen aus
der Chinesisch-Welle - beim Anlegen fiel niemandem auf, dass es den Satz schon
gab. Drei der vier Paare haben WORTGLEICHEN spanischen Text
("Me duele aquí." steht zweimal drin): der Lernende bekommt dieselbe Karte
zweimal unter zwei deutschen Aufgaben.

**Simons Entscheidung: nur eine Fassung.**

Behalten wird jeweils die HOHE ID, also die Fassung, die Chinesisch schon
benutzt - dann muss dort nichts umgeschluesselt werden, und die deutschen
Fassungen sind ohnehin die natuerlicheren ("Ich bin erkältet" statt "Ich habe
mich erkältet").

Was passiert:
  phrasebook_master        die vier niedrigen IDs werden geloescht
  spanisch_phrasebook      die Zeilen unter der alten Fassung werden geloescht
                           (bei drei Paaren ist der Text identisch, beim
                           Termin-Paar geht eine gueltige Variante verloren -
                           das ist der Preis von "nur eine Fassung")
  schwedisch_phrasebook    wird UMGESCHLUESSELT statt geloescht: Schwedisch hat
                           nur die alte Fassung, ohne Umschluesselung verloere
                           es den Satz ganz
  chinesisch_phrasebook    unveraendert - hat schon die behaltene Fassung

NICHT angefasst (bewusst, obwohl aehnlich):
  "Ich bin allergisch gegen Erdnüsse." / "Ich habe eine Allergie gegen Nüsse."
      Erdnuesse und Baumnuesse sind VERSCHIEDENE Allergene - medizinisch ein
      Unterschied, der Leben kosten kann. Ausserdem in zwei verschiedenen
      Kategorien (health_allergie / essen_unvertraeglich).
  "Was gibt es gutes zu Essen?" / "Was empfehlen Sie?"
      Gehoert zu drinking_dining, ausserhalb dieses Auftrags.

Nutzung:  python dubletten_health.py          (Probelauf)
          python dubletten_health.py --echt
"""
import json
import os
import sys
import urllib.parse
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)

# (Master-ID die WEGFAELLT, Master-ID die BLEIBT)
PAARE = [
    (144, 326),   # Es tut hier weh.                    -> Hier tut es weh.
    (135, 347),   # Rufen Sie bitte einen Krankenwagen! -> Bitte rufen Sie einen Krankenwagen!
    (143, 323),   # Ich habe mich erkältet.             -> Ich bin erkältet.
    (142, 337),   # Können Sie mir einen Termin geben?  -> Kann ich einen Termin bekommen?
]

SPRACHTABELLEN = {
    "es": "spanisch_phrasebook",
    "sv": "schwedisch_phrasebook",
    "zh": "chinesisch_phrasebook",
    "fr": "franz_phrasebook",
}


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def rest(url, key, pfad, methode="GET", koerper=None):
    kopf = {"apikey": key, "Authorization": "Bearer " + key,
            "Content-Type": "application/json", "Prefer": "return=representation"}
    d = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper is not None else None
    r = urllib.request.Request(url + "/rest/v1/" + pfad, data=d, headers=kopf, method=methode)
    with urllib.request.urlopen(r) as a:
        t = a.read().decode("utf-8")
        return json.loads(t) if t.strip() else []


def q(s):
    return urllib.parse.quote(s, safe="")


def main():
    echt = "--echt" in sys.argv
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")

    ids = [i for p in PAARE for i in p]
    master = {r["id"]: r for r in rest(
        url, key, "phrasebook_master?select=id,german,category,scenario&id=in.("
                  + ",".join(map(str, ids)) + ")")}

    fehler, plan = [], []
    for weg_id, bleibt_id in PAARE:
        weg, bleibt = master.get(weg_id), master.get(bleibt_id)
        if weg is None and bleibt is not None:
            print(f"  schon zusammengelegt: {bleibt['german']!r}")
            continue
        if weg is None or bleibt is None:
            fehler.append(f"id {weg_id} oder {bleibt_id} nicht gefunden")
            continue
        if weg["category"] != bleibt["category"]:
            fehler.append(f"{weg_id}/{bleibt_id} liegen in verschiedenen Kategorien "
                          f"({weg['category']} vs {bleibt['category']}) - kein Paar")
            continue
        plan.append((weg, bleibt))

    if fehler:
        print(f"{len(fehler)} FEHLER - nichts geschrieben:")
        for f in fehler:
            print("  X " + f)
        sys.exit(1)
    if not plan:
        print("Nichts zu tun.")
        return

    # Was in den Sprachtabellen zu tun ist, VOR dem Schreiben ermitteln.
    aktionen = []
    for weg, bleibt in plan:
        kat = weg["category"]
        for sp, tab in SPRACHTABELLEN.items():
            hat_alt = rest(url, key, f"{tab}?select=id,target_text&german=eq.{q(weg['german'])}"
                                     f"&category=eq.{kat}")
            hat_neu = rest(url, key, f"{tab}?select=id&german=eq.{q(bleibt['german'])}"
                                     f"&category=eq.{kat}")
            if not hat_alt:
                continue
            if hat_neu:
                aktionen.append(("loeschen", tab, hat_alt[0]["id"], weg["german"],
                                 hat_alt[0]["target_text"]))
            else:
                aktionen.append(("umschluesseln", tab, hat_alt[0]["id"], weg["german"],
                                 bleibt["german"]))

    print(f"Paare zum Zusammenlegen: {len(plan)}")
    for weg, bleibt in plan:
        print(f"  WEG:    [{weg['id']}] {weg['german']!r}")
        print(f"  BLEIBT: [{bleibt['id']}] {bleibt['german']!r}")
    print()
    print("In den Sprachtabellen:")
    for art, tab, zid, a, b in aktionen:
        if art == "loeschen":
            print(f"  loeschen       {tab:22} id={zid}  (Text war: {b!r})")
        else:
            print(f"  umschluesseln  {tab:22} id={zid}  {a!r} -> {b!r}")

    if not echt:
        print("\nPROBELAUF - nichts geschrieben. Mit --echt anwenden.")
        return

    for art, tab, zid, a, b in aktionen:
        if art == "loeschen":
            rest(url, key, f"{tab}?id=eq.{zid}", "DELETE")
        else:
            rest(url, key, f"{tab}?id=eq.{zid}", "PATCH", {"german": b})
    for weg, _ in plan:
        rest(url, key, f"phrasebook_master?id=eq.{weg['id']}", "DELETE")

    print(f"\nFertig. {len(plan)} Dubletten aufgeloest, "
          f"{sum(1 for a in aktionen if a[0]=='loeschen')} Sprachzeilen geloescht, "
          f"{sum(1 for a in aktionen if a[0]=='umschluesseln')} umgeschluesselt.")


if __name__ == "__main__":
    main()
