# -*- coding: utf-8 -*-
"""Einmal-Helfer: erzeugt wortarten_grundwortschatz_sv.py aus den echten
Live-Saetzen + Tag-Codes (Nomen/Verb/Adjektiv/Konjunktion, Simons Auftrag
2026-08-30), analog zu _erzeuge_grundwortschatz_de.py."""
import json

data = json.load(open("_grundwortschatz_sv_dump.json", encoding="utf-8"))
nach_id = {d["id"]: d["target_text"] for d in data}

CODES = {
    1: ".",  # Hej!
    2: "a n",  # God morgon!
    3: "a n",  # God dag!
    4: "a n",  # God kväll!
    5: ". v .",  # Hur mår du?
    6: ". v a .",  # Jag mår bra, tack.
    7: ". v .",  # Vad heter du?
    8: ". v n",  # Jag heter Anna.
    9: ". v .",  # Varifrån kommer du?
    10: ". v . n",  # Jag kommer från Tyskland.
    11: ". a v .",  # Hur gammal är du?
    12: ". v . n a",  # Jag är 25 år gammal.
    13: "a . v",  # Trevligt att träffas.
    14: ".",  # Adjö!
    15: ". v .",  # Vi ses senare!
    16: ". .",  # Hej då!
    20: "v . n",  # Talar du engelska?
    21: ". v . n",  # Jag talar lite svenska.
    22: "v . v a",  # Kan du prata långsammare?
    23: ". v .",  # Jag förstår inte.
    24: "v . v .",  # Kan du upprepa det?
    25: ". v . . . n",  # Hur säger man det på svenska?
    32: ". v n",  # Vad är klockan?
    33: "n v .",  # Klockan är tre.
    34: ". . v n",  # Hur dags börjar filmen?
    35: ". v . n",  # När har du tid?
    36: ". v . n .",  # Jag har inte tid imorgon.
    37: "v . v a n",  # Kan vi träffas nästa vecka?
    38: ". v . n n .",  # Jag har en tid klockan 10.
    39: ". n v . .",  # Vilken dag är det idag?
    40: ". v . n",  # Idag är det måndag.
    41: ". v . n",  # När har du födelsedag?
    42: ". n v . n",  # Min födelsedag är i mars.
    43: ". . v .",  # Hur mycket kostar det?
    44: ". v . n",  # Det kostar tio euro.
    45: ". v v v n",  # Jag skulle vilja ha notan.
    91: ". v n",  # Var är toaletten?
    135: "n",  # Hjälp!
    299: "n",  # Tack!
    300: "n . .",  # Tack så mycket!
    301: ".",  # Varsågod.
    302: "v",  # Ursäkta!
    303: "v",  # Förlåt.
    304: ". n",  # Inga problem.
    305: ".",  # Ja.
    306: ".",  # Nej.
    307: ". v .",  # Jag vet inte.
    308: ". . .",  # Ett, två, tre.
    309: ". .",  # Hur många?
    310: ". n n",  # Två stycken, tack.
    311: ". . n",  # Bara en, tack.
    312: ". v",  # Det räcker.
    313: ". . v . .",  # Hur mycket blir det totalt?
    314: ". v . n",  # Vi är fyra personer.
    315: ". v n",  # Jag behöver hjälp.
    316: ". v n",  # Var är utgången?
    317: ". v v . n",  # Jag har tappat min mobil.
    318: ". v v . n",  # Jag har tappat mitt pass.
    319: ". . v . n",  # Det här är min vän.
    320: ". v . n . v .",  # Det är första gången jag är här.
    321: ". v .",  # Vad betyder det?
    322: "v . v . .",  # Kan du skriva ner det?
    475: "v . v n",  # Ursäkta, var är toaletten?
    476: ". v . n",  # Vi stannar fem minuter.
    477: "v . . n .",  # Säg det en gång till.
    478: "v . n",  # Är ni studenter?
    479: ". v . .",  # Jag har bara en.
}

zeilen = []
fehler = []
for zid, code_str in CODES.items():
    text = nach_id.get(zid)
    if text is None:
        fehler.append(f"id={zid} nicht im Dump")
        continue
    woerter = text.split(" ")
    codes = code_str.split(" ")
    if len(woerter) != len(codes):
        fehler.append(f"id={zid}: {len(woerter)} Woerter, aber {len(codes)} Codes "
                      f"({text!r})")
        continue
    tags = [{"w": w, "c": (None if c == "." else c)} for w, c in zip(woerter, codes)]
    zeilen.append((zid, tags, text))

if fehler:
    print(f"{len(fehler)} FEHLER:")
    for f in fehler:
        print("  X " + f)
    raise SystemExit(1)

fehlende_ids = set(nach_id) - set(CODES)
if fehlende_ids:
    print(f"WARNUNG: {len(fehlende_ids)} Saetze ohne Codes: {sorted(fehlende_ids)}")

with open("wortarten_grundwortschatz_sv.py", "w", encoding="utf-8") as f:
    f.write('# -*- coding: utf-8 -*-\n')
    f.write('"""Wort-fuer-Wort-Tagging fuer schwedisch_phrasebook/grundwortschatz.\n\n')
    f.write('Simons Auftrag (2026-08-30): Nomen/Verb/Adjektiv/Konjunktion taggen,\n')
    f.write('alles andere bleibt ungefaerbt. Erzeugt aus _erzeuge_grundwortschatz_sv.py\n')
    f.write('(Einmal-Helfer) - die Woerter kommen direkt aus den Live-Saetzen, nur die\n')
    f.write('Tag-Codes sind von Hand klassifiziert.\n\n')
    f.write('**Keine Konjunktion im Bestand** - wie schon im deutschen Grundwortschatz:\n')
    f.write('die Saetze sind zu kurz/einfach fuer echte Satzverbindungen (und/aber/weil),\n')
    f.write('kein erzwungener Fehltreffer. Erste Konjunktionen sind eher in laengeren\n')
    f.write('Kategorien (Club, Job, Hotel) zu erwarten.\n"""\n\n')
    f.write("TAGS = [\n")
    for zid, tags, text in zeilen:
        tags_py = "[" + ", ".join(
            "{\"w\": " + repr(t["w"]) + ", \"c\": " + (repr(t["c"]) if t["c"] else "None") + "}"
            for t in tags
        ) + "]"
        f.write(f"    {{\"id\": {zid}, \"tags\": {tags_py}}},  # {text}\n")
    f.write("]\n")

print(f"Geschrieben: {len(zeilen)} Saetze.")
