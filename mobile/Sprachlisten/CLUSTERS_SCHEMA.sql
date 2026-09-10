-- Sprachneutrale Verb-/Konzept-Cluster (das lange referenzierte clusters.json).
-- Wird von phrasebook_master.accepted_concepts.verb_cluster referenziert.
-- Kann gefahrlos mehrfach ausgefuehrt werden.

create table if not exists answer_clusters (
  cluster_id text primary key,
  forms jsonb not null
);
