"""
Importiert phrasebook_master.py in die Supabase-Tabelle "phrasebook_master".

Nutzung:
    python import_phrasebook_master.py

Voraussetzungen:
    pip install supabase python-dotenv
    .env Datei mit SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY

Idempotent: prueft vor dem Einfuegen, ob ein Satz mit gleichem "german"-Text
schon existiert, und ueberspringt ihn dann.
"""

import os
from dotenv import load_dotenv
from supabase import create_client

import phrasebook_master as pm

load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
TABLE_NAME = os.environ.get("TABLE_NAME", "phrasebook_master")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise SystemExit("Fehler: SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY muessen in .env stehen.")

sentences = pm.SENTENCES
print(f"{len(sentences)} Saetze in phrasebook_master.py gefunden.")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

inserted = 0
skipped = 0
failed = 0

for entry in sentences:
    german_text = entry.get("german")
    if not german_text:
        print("Eintrag ohne 'german'-Feld uebersprungen:", entry)
        continue

    existing = (
        supabase.table(TABLE_NAME)
        .select("id")
        .eq("german", german_text)
        .execute()
    )
    if existing.data:
        print(f"uebersprungen (existiert schon): {german_text}")
        skipped += 1
        continue

    try:
        supabase.table(TABLE_NAME).insert(entry).execute()
        print(f"eingefuegt: {german_text}")
        inserted += 1
    except Exception as e:
        print(f"Fehler bei '{german_text}': {e}")
        failed += 1

print(f"\nFertig! Eingefuegt: {inserted}, uebersprungen: {skipped}, Fehler: {failed}")
