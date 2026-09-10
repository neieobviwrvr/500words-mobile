"""
Importiert eine Batch-Datei (z.B. batch1_funktionswoerter.py) in die
Supabase-Tabelle "schwedisch_vocab".

Nutzung:
    python import_to_supabase.py batch1_funktionswoerter

Voraussetzungen:
    pip install supabase python-dotenv
    .env Datei mit SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY (siehe .env.example)

Das Skript ist idempotent bzgl. Duplikaten: es prüft vor dem Einfügen, ob ein
Wort mit gleichem "swedish"-Text schon existiert, und überspringt es dann.
"""

import sys
import importlib
import os
from dotenv import load_dotenv
from supabase import create_client

load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
TABLE_NAME = os.environ.get("TABLE_NAME", "schwedisch_vocab")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("Fehler: SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY müssen in .env stehen.")
    sys.exit(1)

if len(sys.argv) < 2:
    print("Nutzung: python import_to_supabase.py <batch_modulname_ohne_.py>")
    print("Beispiel: python import_to_supabase.py batch1_funktionswoerter")
    sys.exit(1)

module_name = sys.argv[1]
try:
    batch_module = importlib.import_module(module_name)
except ImportError as e:
    print(f"Konnte Batch-Datei '{module_name}.py' nicht laden: {e}")
    sys.exit(1)

words = batch_module.WORDS
print(f"{len(words)} Wörter in '{module_name}.py' gefunden.")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

inserted = 0
skipped = 0
failed = 0

for entry in words:
    swedish_text = entry.get("swedish")
    if not swedish_text:
        print("⚠️  Eintrag ohne 'swedish'-Feld übersprungen:", entry)
        continue

    # Prüfen, ob das Wort schon existiert (Duplikat-Schutz)
    existing = (
        supabase.table(TABLE_NAME)
        .select("id")
        .eq("swedish", swedish_text)
        .execute()
    )
    if existing.data:
        print(f"⏭  '{swedish_text}' existiert schon, übersprungen.")
        skipped += 1
        continue

    try:
        supabase.table(TABLE_NAME).insert(entry).execute()
        print(f"✅ '{swedish_text}' eingefügt.")
        inserted += 1
    except Exception as e:
        print(f"❌ Fehler bei '{swedish_text}': {e}")
        failed += 1

print(f"\nFertig! Eingefügt: {inserted}, übersprungen (Duplikate): {skipped}, Fehler: {failed}")