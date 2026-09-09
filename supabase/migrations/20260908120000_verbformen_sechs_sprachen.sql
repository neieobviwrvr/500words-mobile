-- Sechs Vokabeltabellen bekommen eine forms-Spalte.
--
-- **Warum.** Der gefuehrte Kurs steht bis heute im Praesens, weil die
-- Vokabeltabellen nur die Grundform fuehren. Wo ein Rahmen trotzdem eine
-- andere Form verlangte, hat der Lehrplan sie entweder umgangen (Modalverb
-- plus Infinitiv) - oder es ist niemandem aufgefallen: `kurs_en.py` baute
-- bis zum 2026-09-08 "I have finish it" und "it is easy than that", weil
-- der Rahmen ein Partizip bzw. einen Komparativ verlangte und die Spalte
-- nur "finish" und "easy" hergab. Beide Rahmen sind inzwischen stillgelegt
-- und kehren als A2-Module zurueck, sobald hier Formen stehen.
--
-- Ohne diese Spalte ist "Was hast du gemacht?" nicht baubar - und das ist
-- die haeufigste Frage im Smalltalk.
--
-- **Warum sechs und nicht acht.** schwedisch_vocab und norwegisch_vocab
-- haben die Spalte laengst (siehe 20260904120000). Vietnamesisch und
-- Chinesisch beugen nicht - dort waere sie eine Spalte voller Nullen.
--
-- **Schluesselnamen wie bei schwedisch_vocab**, damit `bauplan.py` alle
-- Sprachen ohne Sonderfall liest:
--
--     present      Praesens. Bei sv/no die einzige Form; im Englischen die
--                  fuer I/you/we/they, in den romanischen und slawischen
--                  Sprachen die 1. Person Singular.
--     preteritum   Vergangenheit.
--     supinum      Partizip. Heisst so, weil sv/no es so nennen - die
--                  Rolle ist dieselbe, und ein gemeinsamer Name wiegt
--                  schwerer als die Terminologie (dieselbe Begruendung
--                  steht in der norwegischen Migration).
--
-- Dazu kommen sprachspezifische Schluessel, die nur setzt, wer sie hat:
-- present_3 / present_pl (Englisch), praesens_1..6 (romanisch, slawisch),
-- verlaufsform (Englisch), preteritum_pl (nur "were").
--
-- **Belegt wird zunaechst nur Englisch.** Fuer es/fr/it ist die Regel aus
-- bewertung/formen.py uebernehmbar, die rund 30 unregelmaessigen Verben je
-- Sprache aber nicht - sie liegen dort als flache, deduplizierte Listen und
-- muessen benannt neu geschrieben werden. Fuer ru/pl ist gar nichts
-- uebernehmbar: der slawische Generator erzeugt absichtlich beide
-- Konjugationen an zwei Stammlaengen ("die falsche Haelfte ergibt
-- Silbenfolgen, die kein Wort sind"). Zum Abgleichen richtig, zum Anzeigen
-- unbrauchbar. Die Spalte entsteht hier trotzdem fuer alle sechs, damit die
-- Sprachen nicht nacheinander je eine eigene Migration brauchen.

alter table public.englisch_vocab   add column if not exists forms jsonb;
alter table public.spanisch_vocab   add column if not exists forms jsonb;
alter table public.franz_vocab      add column if not exists forms jsonb;
alter table public.italienisch_vocab add column if not exists forms jsonb;
alter table public.russisch_vocab   add column if not exists forms jsonb;
alter table public.polnisch_vocab   add column if not exists forms jsonb;

comment on column public.englisch_vocab.forms is
  'Verbformen: {"present": "go", "present_3": "goes", "present_pl": "go", '
  '"preteritum": "went", "supinum": "gone", "verlaufsform": "going"}. '
  'Gleiche Schluessel wie schwedisch_vocab, wo die Rolle dieselbe ist. '
  'Nur bei category = ''Verb'' belegt. Erzeugt von '
  'Sprachlisten/kurs/verbformen.py.';

comment on column public.spanisch_vocab.forms is
  'Verbformen wie englisch_vocab. Noch NICHT belegt - siehe Migration.';
comment on column public.franz_vocab.forms is
  'Verbformen wie englisch_vocab. Noch NICHT belegt - siehe Migration.';
comment on column public.italienisch_vocab.forms is
  'Verbformen wie englisch_vocab. Noch NICHT belegt - siehe Migration.';
comment on column public.russisch_vocab.forms is
  'Verbformen wie englisch_vocab. Noch NICHT belegt - siehe Migration.';
comment on column public.polnisch_vocab.forms is
  'Verbformen wie englisch_vocab. Noch NICHT belegt - siehe Migration.';
