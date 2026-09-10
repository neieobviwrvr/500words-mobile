-- Schwedische Verb-Cluster (sv_-praefixt, siehe schwedisch_clusters_master.py).
-- answer_clusters.cluster_id ist sprachneutraler PK ueber die ganze Tabelle -
-- Praefix verhindert Kollision mit den deutschen Cluster-Namen.
-- Kann gefahrlos mehrfach ausgefuehrt werden.

insert into answer_clusters (cluster_id, forms) values ('sv_heissen', '["heter", "hette", "hetat", "heta"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_kommen', '["kommer", "kom", "kommit", "komma"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_sprechen', '["talar", "talade", "talat", "tala", "pratar", "pratade", "pratat", "prata"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_verstehen', '["förstår", "förstod", "förstått", "förstå"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_wiederholen', '["upprepar", "upprepade", "upprepat", "upprepa"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_sagen', '["säger", "sa", "sade", "sagt", "säga"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_wohnen', '["bor", "bodde", "bott", "bo"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_beginnen', '["börjar", "började", "börjat", "börja"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_funktionieren', '["fungerar", "fungerade", "fungerat", "fungera"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_verlieren', '["tappar", "tappade", "tappat", "tappa", "förlorar", "förlorade", "förlorat", "förlora"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_buchen', '["bokar", "bokade", "bokat", "boka"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_empfehlen', '["rekommenderar", "rekommenderade", "rekommenderat", "rekommendera"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_bezahlen', '["betalar", "betalade", "betalat", "betala"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_bestellen', '["beställer", "beställde", "beställt", "beställa"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_reservieren', '["reserverar", "reserverade", "reserverat", "reservera"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_suchen', '["söker", "sökte", "sökt", "söka"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_schliessen', '["stänger", "stängde", "stängt", "stänga"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_helfen', '["hjälper", "hjälpte", "hjälpt", "hjälpa"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_kaufen', '["köper", "köpte", "köpt", "köpa"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_vergessen', '["glömmer", "glömde", "glömt", "glömma"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_finden', '["hittar", "hittade", "hittat", "hitta", "finner", "fann", "funnit", "finna"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_ausleihen', '["lånar", "lånade", "lånat", "låna"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_interessieren', '["intresserar", "intresserade", "intresserat", "intressera"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_oeffnen', '["öppnar", "öppnade", "öppnat", "öppna"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
insert into answer_clusters (cluster_id, forms) values ('sv_spielen', '["spelar", "spelade", "spelat", "spela"]'::jsonb) on conflict (cluster_id) do update set forms = excluded.forms;
