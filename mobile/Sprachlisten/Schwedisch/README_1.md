# Schwedisch-Import: Setup & Batch-Plan

## Einmaliges Setup

1. `schwedisch_vocab_schema.sql` im Supabase SQL-Editor ausführen (legt die Tabelle an).
2. Python-Pakete installieren:
   ```bash
   pip install supabase python-dotenv --break-system-packages
   ```
   (auf manchen Systemen reicht `pip install supabase python-dotenv`)
3. `.env.example` zu `.env` kopieren, echte Werte eintragen (SUPABASE_URL,
   SUPABASE_SERVICE_ROLE_KEY - der service_role-Key aus Project Settings → API).

## Batch importieren

```bash
python import_to_supabase.py batch1_funktionswoerter
```

Das Skript prüft pro Wort, ob es (nach `swedish`-Text) schon existiert, und
überspringt Duplikate - du kannst es also gefahrlos mehrfach laufen lassen.

## Geplante Batches (Top 500, ~80% Alltagskommunikation)

| Batch | Inhalt | Umfang | Status |
|---|---|---|---|
| 1 | Pronomen, Zahlwörter, Fragewörter, Präpositionen, Konjunktionen, Adverbien | ~105 Wörter | ✅ fertig (`batch1_funktionswoerter.py`) |
| 2 | Top-Verben mit voller Konjugation (Präsens, Preteritum, Supinum, Futur-Hinweis) | ~90 Wörter | folgt |
| 3 | Nomen Teil 1 (Alltag, Familie, Zuhause) mit Genus/Definitform/Plural | ~100 Wörter | folgt |
| 4 | Nomen Teil 2 (Zeit, Arbeit, Essen, Stadt) mit Genus/Definitform/Plural | ~100 Wörter | folgt |
| 5 | Adjektive mit Formen (en-Form, ett-Form, Plural/best. Form) | ~80 Wörter | folgt |

Jeder Batch kommt als eigene `batchX_thema.py`-Datei im gleichen Format wie
`batch1_funktionswoerter.py` - einfach mit demselben `import_to_supabase.py`
importieren.

## Warum in Batches statt alles auf einmal?

Bei ~500 Wörtern mit mehreren Grammatikformen pro Wort ist Sorgfalt wichtiger
als Tempo - kleinere, thematisch sortierte Batches lassen sich leichter
stichprobenartig gegenprüfen (z.B. in einem Wörterbuch oder mit einem
Muttersprachler), bevor sie in die App wandern.
