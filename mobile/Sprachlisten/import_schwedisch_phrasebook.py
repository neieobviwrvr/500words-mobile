"""
Importiert schwedisch_phrasebook.py nach Supabase (Tabelle schwedisch_phrasebook).
Nutzung: python import_schwedisch_phrasebook.py
Voraussetzungen: pip install supabase python-dotenv, .env mit SUPABASE_URL
und SUPABASE_SERVICE_ROLE_KEY (siehe .env in diesem Ordner).
Duplikatsicher ueber target_text (wie beim Vokabular-Import).
"""
import os
from dotenv import load_dotenv
from supabase import create_client
import schwedisch_phrasebook as sp

load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

inserted = skipped = failed = 0
for entry in sp.SENTENCES:
    existing = (
        supabase.table("schwedisch_phrasebook")
        .select("id")
        .eq("target_text", entry["target_text"])
        .execute()
    )
    if existing.data:
        skipped += 1
        continue
    try:
        supabase.table("schwedisch_phrasebook").insert(entry).execute()
        inserted += 1
    except Exception as e:
        print("Fehler bei", entry["target_text"], ":", e)
        failed += 1

print(f"Fertig! Eingefuegt: {inserted}, uebersprungen: {skipped}, Fehler: {failed}")
