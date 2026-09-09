-- norwegisch_vocab bekommt eine forms-Spalte, wie schwedisch_vocab sie hat.
--
-- **Warum.** Der gefuehrte Kurs setzt Verben als PRAESENS in den Satz, nicht
-- als Infinitiv: `jeg er` statt `jeg være`. Bei Schwedisch liest der
-- Generator dafuer `forms.present`; bei Norwegisch gab es die Spalte nicht,
-- also stand im Satz die Woerterbuchform. Ein Anfaenger haette "jeg være
-- trøtt" gelernt - falsch, und zwar an der Stelle, die er am haeufigsten
-- benutzt.
--
-- **Warum von Hand und nicht per Regel.** Die naheliegende Regel
-- "Infinitiv + r" trifft die regelmaessigen Verben (snakke -> snakker), aber
-- genau die haeufigsten sind unregelmaessig:
--
--     være  -> er      (nicht "værer")
--     kunne -> kan     (nicht "kunner")
--     ville -> vil
--     skulle-> skal
--     måtte -> må
--     vite  -> vet
--     gjøre -> gjør
--     si    -> sier
--     spørre-> spør
--
-- Das sind die Verben, die in fast jedem Satz vorkommen. Eine Regel, die
-- neun davon falsch macht, ist schlimmer als keine.
--
-- Schluesselnamen wie bei schwedisch_vocab (present / preteritum / supinum),
-- damit der Generator beide Sprachen ohne Sonderfall lesen kann. Die dritte
-- Form heisst im Norwegischen eigentlich Perfektum Partizipp; der
-- gemeinsame Name wiegt hier schwerer als die Terminologie.

alter table public.norwegisch_vocab
  add column if not exists forms jsonb;

comment on column public.norwegisch_vocab.forms is
  'Verbformen: {"present": "er", "preteritum": "var", "supinum": "vært"}. '
  'Gleiche Schluessel wie schwedisch_vocab. Nur bei category = ''Verb'' belegt.';
