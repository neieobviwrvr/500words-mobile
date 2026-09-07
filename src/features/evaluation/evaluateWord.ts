// `import type`, nicht `import`: `Tier` ist nur ein Typ, und so verschwindet
// die Zeile beim Uebersetzen restlos. Das ist nicht Kosmetik - der
// Pruefskript-Lauf (`npm run pruefe:konzepte`) laedt diese Datei direkt in
// Node, und Node verlangt bei echten Importen die Dateiendung, die Metro
// wiederum nicht will. Ein reiner Typ-Import stellt die Frage gar nicht.
import type { Tier } from './evaluateConcepts';

// Bewertung einer EINZELNEN Wort-Antwort (2026-09-04).
//
// Gegenstueck zu evaluateConcepts.ts: dort geht es um einen ganzen Satz,
// hier um das eine Wort, das in eine Luecke gehoert (Woerter-Wiederholung,
// Stufe 3 - "sprich das Wort, ohne dass Optionen dastehen").
//
// WARUM EINE EIGENE DATEI UND NICHT evaluateConcepts()
// ----------------------------------------------------
// Der Satz-Bewerter kennt Pflicht-Konzepte, Teilkredit ueber die Haelfte-
// Regel und eine Rausch-Pruefung gegen den Zielsatz. Auf EIN Wort angewandt
// ist davon nichts anwendbar: es gibt nur ein Konzept, keine Haelfte und
// keinen Satz, gegen den sich Rauschen messen liesse.
//
// DIE DREI STUFEN BEDEUTEN HIER GENAU DASSELBE WIE BEIM SATZ
// ----------------------------------------------------------
//   richtig           das gemeinte Wort (Homophone eingeschlossen)
//   ueberlebt         ein anderes Wort aus derselben Familie - richtige
//                     Absicht, anderes Wort. 好看 statt 漂亮.
//   nicht_verstanden  irgendein anderes Wort. Genau der Fall, den Simon
//                     beschrieben hat: "Schwachsinn, weil das
//                     Schluesselwort eigentlich ein anderes sein sollte."
//
// Bis zum 2026-09-04 gab es hier nur `richtig` und `falsch` - eine Antwort
// aus derselben Bedeutungsgruppe fiel genauso hart durch wie eine voellig
// falsche.
//
// DIE FAMILIEN SIND DIESELBEN WIE BEIM SATZ
// ------------------------------------------
// Kein zweiter Datenbestand: `answer_clusters` liegt ohnehin schon geladen
// vor (loadAnswerClusters), und dieselbe Gruppe, die beim Satz sagt "anderes
// Verb, gleiche Botschaft", sagt beim Wort "anderes Wort, gleiche
// Bedeutung". Waeren es zwei Listen, wuerden sie auseinanderlaufen.

export type WortBewertung = {
  tier: Tier;
  /** Das Wort aus der Familie, das erkannt wurde - fuer die Rueckmeldung. */
  familienTreffer: string | null;
};

const CJK = /[一-鿿㐀-䶿]/;

/**
 * Vergleichsform. Zeichensetzung und Leerraum weg, klein geschrieben.
 *
 * `vertreter` faltet zusaetzlich Zeichen zusammen, die gleich KLINGEN -
 * fuer Chinesisch die acht echten Homophon-Paare (他/她, 坐/做, ...). Wer
 * 做 sagt, wo 坐 erwartet war, hat richtig ausgesprochen; nur der Kontext
 * hat anders entschieden. Wird von aussen hereingereicht statt hier
 * eingebaut, damit diese Datei nichts ueber eine einzelne Sprache wissen
 * muss.
 */
function form(text: string, vertreter?: (s: string) => string): string {
  const roh = text
    .normalize('NFC')
    .toLowerCase()
    .replace(/[.,!?;:"'`。，！？；：、“”（）]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return vertreter ? vertreter(roh) : roh;
}

/**
 * Steht `wort` in `antwort`? Bei CJK ohne Wortgrenzen, sonst mit.
 *
 * Bewusst OHNE Rueckwaerts-Blick im regulaeren Ausdruck: die App laeuft auf
 * Hermes, und dessen Unterstuetzung fuer `(?<!...)` ist je nach Version
 * unterschiedlich - ein Absturz erst auf dem Geraet waere teuer erkauft
 * fuer eine Zeile weniger Code. Stattdessen wird zerlegt und verglichen,
 * genau wie in evaluateConcepts.ts.
 *
 * Mehrwortige Eintraege ("see you later") muessen ZUSAMMENHAENGEND und in
 * dieser Reihenfolge vorkommen - "later see you" ist nicht dasselbe.
 */
function kommtVor(antwort: string, wort: string): boolean {
  if (!wort) return false;
  if (CJK.test(wort)) return antwort.replace(/\s+/g, '').includes(wort.replace(/\s+/g, ''));
  const gesagt = antwort.split(' ').filter(Boolean);
  const gesucht = wort.split(' ').filter(Boolean);
  if (gesucht.length === 0) return false;
  for (let i = 0; i + gesucht.length <= gesagt.length; i++) {
    if (gesucht.every((t, k) => gesagt[i + k] === t)) return true;
  }
  return false;
}

/**
 * Alle Woerter, die mit `ziel` in mindestens einer Familie zusammenstehen.
 *
 * Ein Wort darf in mehreren Familien vorkommen - englisch "cheers" steht bei
 * `dank` UND bei `abschied`, weil es beides heisst. Dann zaehlen die
 * Geschwister aus allen diesen Familien.
 *
 * `languageId` grenzt auf die Familien DIESER Sprache ein: die Cluster-IDs
 * sind sprachpraefixt (`sv_wollen`, `zh_wollen`), und `answer_clusters` ist
 * eine gemeinsame Tabelle ueber alle Sprachen. Ohne den Filter koennte ein
 * schwedisches Wort ein chinesisches "bestaetigen".
 */
export function familienGeschwister(
  ziel: string,
  clusters: Record<string, string[]>,
  languageId: string,
  vertreter?: (s: string) => string,
): string[] {
  const zielForm = form(ziel, vertreter);
  if (!zielForm) return [];
  const praefix = `${languageId}_`;
  const geschwister = new Set<string>();
  for (const [id, formen] of Object.entries(clusters)) {
    if (!id.startsWith(praefix)) continue;
    if (!formen.some((f) => form(f, vertreter) === zielForm)) continue;
    for (const f of formen) {
      const kandidat = form(f, vertreter);
      if (kandidat && kandidat !== zielForm) geschwister.add(kandidat);
    }
  }
  return [...geschwister];
}

/**
 * `antwort` ist, was gesagt oder getippt wurde; `ziel` das gemeinte Wort.
 *
 * Gesprochen kann mehr sein als das Wort allein ("ich glaube 漂亮") - deshalb
 * ENTHALTEN statt Gleichheit. Das ist Absicht: gefragt ist, ob das Wort
 * vorkam, nicht ob der Nutzer sonst geschwiegen hat.
 *
 * `zielFormen` sind die gebeugten Formen DESSELBEN Worts - sie zaehlen voll,
 * nicht bloss als Mittelstufe.
 *
 * Das ist keine Nachsicht, sondern die aeltere Regel dieses Projekts: ein
 * Cluster erkennt "das richtige Verb, Konjugation egal" (siehe
 * clusters_master.py). Wer auf "kaufen" mit "kaufte" antwortet, hat das Wort
 * gewusst; nur die Zeitform passt nicht zum Satz - und Zeitformen sind nicht
 * das, was diese Uebung prueft.
 *
 * OHNE `zielFormen` landet eine gebeugte Form in der Mittelstufe, weil sie
 * dann nur als Familienmitglied erkennbar ist. Das ist die milde Richtung
 * und kein Fehler, aber wer eine Sprache mit Formen anbindet, sollte sie
 * mitgeben: fuer Schwedisch stehen sie in `schwedisch_vocab.forms`, fuer
 * Chinesisch gibt es sie nicht (dort ist die Frage gegenstandslos).
 */
export function bewerteWort(
  antwort: string,
  ziel: string,
  clusters: Record<string, string[]>,
  languageId: string,
  vertreter?: (s: string) => string,
  zielFormen?: string[],
): WortBewertung {
  const gesagt = form(antwort, vertreter);
  if (!gesagt) return { tier: 'nicht_verstanden', familienTreffer: null };

  const volltreffer = [ziel, ...(zielFormen ?? [])].map((w) => form(w, vertreter));
  if (volltreffer.some((w) => kommtVor(gesagt, w))) {
    return { tier: 'richtig', familienTreffer: null };
  }

  for (const geschwister of familienGeschwister(ziel, clusters, languageId, vertreter)) {
    if (kommtVor(gesagt, geschwister)) {
      return { tier: 'ueberlebt', familienTreffer: geschwister };
    }
  }

  return { tier: 'nicht_verstanden', familienTreffer: null };
}
