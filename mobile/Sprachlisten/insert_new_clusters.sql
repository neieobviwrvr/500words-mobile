-- Neue zusammengesetzte Cluster (2026-08-08, satzspezifisch statt pauschale
-- "Bewegungsverben"-Gruppe - siehe Begruendung im Chat/CLAUDE.md):
-- fahren_reisen: "Ich fahre/reise nach Italien" - echte Synonyme fuer eine
--   Auslandsreise-Ankuendigung.
-- gehen_wegbeschreibung: "Gehen/Fahren/Laufen Sie geradeaus" - Nutzer-
--   Entscheidung, dass bei einer Richtungsangabe auch "fahren" durchgehen
--   soll, obwohl nicht 100% deckungsgleich.
-- gehen_freizeitweg: "Ich gehe/fahre gerne ins Kino" - Fortbewegungsmittel
--   ist hier egal, beides ist im Alltag gleich richtig.
insert into answer_clusters (cluster_id, forms) values ('fahren_reisen', '["fahre", "fährst", "fährt", "fahren", "fuhr", "gefahren", "reise", "reist", "reisen", "reiste", "gereist"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('gehen_wegbeschreibung', '["gehe", "gehst", "geht", "gehen", "ging", "gegangen", "fahre", "fährst", "fährt", "fahren", "fuhr", "gefahren", "laufe", "läufst", "läuft", "laufen", "lief", "gelaufen"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('gehen_freizeitweg', '["gehe", "gehst", "geht", "gehen", "ging", "gegangen", "fahre", "fährst", "fährt", "fahren", "fuhr", "gefahren"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
