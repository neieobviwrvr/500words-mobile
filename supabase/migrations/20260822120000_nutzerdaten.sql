-- Nutzerdaten serverseitig (2026-08-22).
--
-- Bis heute lag JEDER Nutzerzustand ausschliesslich lokal in AsyncStorage:
-- Fortschritt, FSRS-Karten, Kaeufe, Coins, Favoriten. Supabase hielt nur
-- Content (Phrasebooks, Vokabeln, answer_clusters) und wurde nur gelesen.
-- Es gab damit KEINE einzige Tabelle mit Nutzerdaten.
--
-- Nutzer-Vorgabe (Simon, 2026-08-22): der Nutzer soll auf einem anderen
-- Geraet mit seinem Konto sehen, welche Achievements er hat, wie viele Coins,
-- welche Kategorien er gekauft hat, auf welchem Lernstand er ist ("Spaced
-- Repetition soll auch auf anderen Geraeten perfekt funktionieren"), welche
-- Freunde er hat, wie es in der Gruppe aussieht und was er im Monat zahlt.
--
-- ============================================================ Grundsaetze
--
-- 1. LOKAL BLEIBT DIE WAHRHEIT WAEHREND DES LERNENS. Die App laeuft offline
--    weiter (Zielgruppe: Backpacker mit wackeligem Auslandstarif, siehe
--    CLAUDE.md). Diese Tabellen sind der Abgleich zwischen Geraeten, nicht
--    der Arbeitsspeicher der App.
--
-- 2. JEDE TABELLE HAT RLS. Ohne sie waere mit dem anon-Key jede fremde Zeile
--    lesbar - der Schluessel steckt in der App und ist damit oeffentlich.
--
-- 3. `aktualisiert_am` UEBERALL, wo zwei Geraete dasselbe schreiben koennen.
--    Ohne Zeitstempel gibt es keine Regel, welche Fassung gewinnt.
--
-- 4. GASTMODUS BLEIBT. Wer kein Konto will, lernt weiter rein lokal - dann
--    eben ohne Abgleich, Freunde und Gruppen.

-- ============================================================ Profil

create table if not exists profil (
  id uuid primary key references auth.users on delete cascade,
  -- Anzeigename fuer Freundesliste und Rangliste. Getrennt vom
  -- Onboarding-Namen: der ist privat und darf ein Spitzname sein.
  anzeigename text,
  ziel_sprache text,
  erstellt_am timestamptz not null default now(),
  zuletzt_aktiv timestamptz
);

alter table profil enable row level security;

-- Das eigene Profil immer. Fremde nur, wenn man mit ihnen in einer Gruppe
-- ist oder befreundet - sonst waere die Nutzerliste der App abfragbar.
create policy profil_eigenes on profil
  for all using (auth.uid() = id) with check (auth.uid() = id);

-- ============================================================ Zustand

-- Coins, vergebene Geschenke, Zaehler und Einstellungen in EINER Zeile.
--
-- Bewusst `jsonb` statt Spalten: das ist exakt der Inhalt, den AppState
-- ohnehin als ein Objekt in AsyncStorage schreibt. Eine neue Herausforderung
-- oder ein neuer Zaehler kaeme sonst nicht ohne Migration aus - und die App
-- muss ohnehin gegen aeltere Fassungen tolerant sein, weil nicht jedes
-- Geraet gleichzeitig aktualisiert.
create table if not exists nutzer_zustand (
  nutzer_id uuid primary key references auth.users on delete cascade,
  coins integer not null default 0,
  coin_grants jsonb not null default '{}'::jsonb,
  fortschritt jsonb not null default '{}'::jsonb,
  einstellungen jsonb not null default '{}'::jsonb,
  aktualisiert_am timestamptz not null default now()
);

alter table nutzer_zustand enable row level security;
create policy zustand_eigener on nutzer_zustand
  for all using (auth.uid() = nutzer_id) with check (auth.uid() = nutzer_id);

-- ============================================================ Freischaltung

-- Welche Kategorien dem Nutzer offenstehen - und WARUM.
--
-- `quelle` trennt drei Wege, die sich unterschiedlich verhalten:
--   'abo'         faellt weg, wenn das Abo endet (Kategorien sind abwaehlbar)
--   'coins'       eingetauscht, gilt dauerhaft
--   'fruehnutzer' der Launch-Bonus, dauerhaft
-- `gueltig_bis` null heisst dauerhaft.
--
-- WICHTIG: das hier ist die Anzeige-Wahrheit, NICHT der Kaufbeleg. Verbindlich
-- ist immer die Quittung von Apple/Google; diese Tabelle wird daraus
-- abgeleitet. Wer sie zur alleinigen Grundlage macht, baut eine Freischaltung,
-- die sich durch Schreiben in die Datenbank erschleichen laesst.
create table if not exists freischaltung (
  nutzer_id uuid not null references auth.users on delete cascade,
  kategorie text not null,
  quelle text not null check (quelle in ('abo', 'coins', 'fruehnutzer')),
  gueltig_bis timestamptz,
  erstellt_am timestamptz not null default now(),
  primary key (nutzer_id, kategorie)
);

alter table freischaltung enable row level security;
create policy freischaltung_eigene on freischaltung
  for all using (auth.uid() = nutzer_id) with check (auth.uid() = nutzer_id);

-- ============================================================ Abo

-- Was der Nutzer zahlt. Eine Zeile je Nutzer, das laufende Abo.
--
-- `preis_cent` wird mitgeschrieben, weil der Preis von der Zahl der
-- gewaehlten Kategorien abhaengt (Preismodell 2026-08-20) und sich beim
-- Verlaengern aendern kann - ohne den Wert liesse sich "was zahle ich im
-- Monat" nicht beantworten.
create table if not exists abo (
  nutzer_id uuid primary key references auth.users on delete cascade,
  laufzeit_monate integer check (laufzeit_monate in (1, 3, 6, 12)),
  preis_cent integer,
  waehrung text not null default 'EUR',
  store text check (store in ('apple', 'google')),
  -- Produkt-ID aus dem Store, fuer den Abgleich mit der Quittung.
  produkt_id text,
  begonnen_am timestamptz,
  laeuft_bis timestamptz,
  aktualisiert_am timestamptz not null default now()
);

alter table abo enable row level security;
create policy abo_eigenes on abo
  for all using (auth.uid() = nutzer_id) with check (auth.uid() = nutzer_id);

-- ============================================================ Lernkarten

-- Der FSRS-Zustand, eine Zeile je Karte.
--
-- `karten_schluessel` ist genau der lokale Schluessel aus srsStorage.ts:
-- 'sv:schwedisch_phrasebook:47', 'zh:course-wort:学生'. Damit ist die
-- Abbildung zwischen lokal und Server die Identitaet - kein Umrechnen, keine
-- zweite Zaehlung, und der Abgleich ist ein simpler Vergleich je Schluessel.
--
-- `zustand` haelt die ts-fsrs-Karte unveraendert. Ein eigenes Spaltenschema
-- dafuer waere an die Bibliotheksversion gekettet; `faellig_am` steht
-- trotzdem als eigene Spalte da, weil danach sortiert und gefiltert wird.
--
-- `zuletzt_bewertet` ist der Schiedsrichter beim Abgleich: lernt jemand auf
-- zwei Geraeten, gewinnt die juengere Bewertung. Das ist die richtige Regel,
-- weil eine FSRS-Karte ihre gesamte Historie verdichtet - die spaetere
-- Bewertung kennt alles, was die fruehere kannte.
create table if not exists lernkarte (
  nutzer_id uuid not null references auth.users on delete cascade,
  karten_schluessel text not null,
  zustand jsonb not null,
  faellig_am timestamptz not null,
  zuletzt_bewertet timestamptz,
  primary key (nutzer_id, karten_schluessel)
);

create index if not exists idx_lernkarte_faellig on lernkarte(nutzer_id, faellig_am);

alter table lernkarte enable row level security;
create policy lernkarte_eigene on lernkarte
  for all using (auth.uid() = nutzer_id) with check (auth.uid() = nutzer_id);

-- ============================================================ Aktivitaet

-- Eine Zeile je Nutzer und Tag - die Grundlage fuer Rangliste und Streak.
--
-- Bewusst je TAG verdichtet und nicht je Bewertung: die Rangliste braucht
-- eine Zahl, keine Historie, und eine Zeile je Bewertung waeren bei taeglich
-- 100 Karten schnell Zehntausende. Der Tag ist zugleich die Einheit, in der
-- eine Streak gezaehlt wird.
create table if not exists lernaktivitaet (
  nutzer_id uuid not null references auth.users on delete cascade,
  tag date not null,
  karten integer not null default 0,
  richtig integer not null default 0,
  primary key (nutzer_id, tag)
);

alter table lernaktivitaet enable row level security;

-- ============================================================ Freunde

-- Eine Zeile JE RICHTUNG, damit "A hat B angefragt" und "B hat bestaetigt"
-- unterscheidbar bleiben und jede Seite ihre eigene Liste abfragen kann,
-- ohne ein OR ueber zwei Spalten.
create table if not exists freundschaft (
  nutzer_id uuid not null references auth.users on delete cascade,
  freund_id uuid not null references auth.users on delete cascade,
  status text not null check (status in ('angefragt', 'bestaetigt')),
  erstellt_am timestamptz not null default now(),
  primary key (nutzer_id, freund_id),
  -- Ohne das koennte man sich selbst hinzufuegen und in der eigenen
  -- Rangliste zweimal auftauchen.
  constraint freundschaft_nicht_selbst check (nutzer_id <> freund_id)
);

alter table freundschaft enable row level security;
create policy freundschaft_eigene on freundschaft
  for all using (auth.uid() = nutzer_id) with check (auth.uid() = nutzer_id);

-- Die Gegenrichtung muss lesbar sein, sonst sieht niemand seine Anfragen.
create policy freundschaft_an_mich on freundschaft
  for select using (auth.uid() = freund_id);

-- ============================================================ Gruppen

-- Eine Gruppe hat ein ZIEL und ein DATUM - das unterscheidet sie von einer
-- nackten Bestenliste und passt zu den beiden Personas, die ohnehin zu
-- mehreren reisen (CLAUDE.md, Freunde-Bereich).
create table if not exists gruppe (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  ziel_ort text,
  ziel_datum date,
  sprache text,
  -- Beitrittscode. Kurz und teilbar; `unique`, damit er eindeutig aufloest.
  code text not null unique,
  erstellt_von uuid references auth.users on delete set null,
  erstellt_am timestamptz not null default now()
);

create table if not exists gruppen_mitglied (
  gruppe_id uuid not null references gruppe on delete cascade,
  nutzer_id uuid not null references auth.users on delete cascade,
  beigetreten_am timestamptz not null default now(),
  primary key (gruppe_id, nutzer_id)
);

alter table gruppe enable row level security;
alter table gruppen_mitglied enable row level security;

-- Hilfsfunktion statt einer Unterabfrage in jeder Policy.
--
-- `security definer` ist hier NOETIG und kein Versehen: eine Policy auf
-- gruppen_mitglied, die selbst gruppen_mitglied abfragt, ruft sich sonst
-- rekursiv auf und Postgres bricht mit "infinite recursion" ab. Die Funktion
-- umgeht RLS bewusst und prueft genau eine Frage, die der Aufrufer ohnehin
-- ueber sich selbst stellen darf.
create or replace function ist_in_gruppe(g uuid, u uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from gruppen_mitglied m where m.gruppe_id = g and m.nutzer_id = u
  );
$$;

create policy gruppe_sichtbar on gruppe
  for select using (ist_in_gruppe(id, auth.uid()));

-- Anlegen darf jeder Angemeldete; er traegt sich anschliessend selbst ein.
create policy gruppe_anlegen on gruppe
  for insert with check (auth.uid() = erstellt_von);

create policy gruppe_aendern on gruppe
  for update using (auth.uid() = erstellt_von) with check (auth.uid() = erstellt_von);

-- Mitglieder derselben Gruppe sehen einander - genau das ist die Rangliste.
create policy mitglied_sichtbar on gruppen_mitglied
  for select using (ist_in_gruppe(gruppe_id, auth.uid()));

-- Beitreten und Austreten nur fuer sich selbst.
create policy mitglied_beitreten on gruppen_mitglied
  for insert with check (auth.uid() = nutzer_id);
create policy mitglied_austreten on gruppen_mitglied
  for delete using (auth.uid() = nutzer_id);

-- ============================================================ Sichtbarkeit

-- Erst JETZT, wo `ist_in_gruppe` existiert, lassen sich die beiden Policies
-- setzen, die Gruppenmitglieder aufeinander sehen lassen.

create policy aktivitaet_eigene on lernaktivitaet
  for all using (auth.uid() = nutzer_id) with check (auth.uid() = nutzer_id);

-- Fremde Aktivitaet nur lesend, und nur von Leuten aus einer gemeinsamen
-- Gruppe. Ohne diese Policy gaebe es keine Rangliste; mit einer weiteren
-- gaebe es eine App-weite Bestenliste, die niemand wollte.
create policy aktivitaet_gruppe on lernaktivitaet
  for select using (
    exists (
      select 1
      from gruppen_mitglied meine
      join gruppen_mitglied fremde on fremde.gruppe_id = meine.gruppe_id
      where meine.nutzer_id = auth.uid()
        and fremde.nutzer_id = lernaktivitaet.nutzer_id
    )
  );

-- Dasselbe fuers Profil: den Namen der Mitspieler muss man sehen duerfen,
-- sonst zeigt die Rangliste UUIDs.
create policy profil_gruppe on profil
  for select using (
    exists (
      select 1
      from gruppen_mitglied meine
      join gruppen_mitglied fremde on fremde.gruppe_id = meine.gruppe_id
      where meine.nutzer_id = auth.uid()
        and fremde.nutzer_id = profil.id
    )
  );

-- Und fuer bestaetigte Freunde, auch ohne gemeinsame Gruppe.
create policy profil_freund on profil
  for select using (
    exists (
      select 1 from freundschaft f
      where f.nutzer_id = auth.uid()
        and f.freund_id = profil.id
        and f.status = 'bestaetigt'
    )
  );
