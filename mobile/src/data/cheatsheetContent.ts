import { CATEGORIES, CATEGORY_BY_ID } from './categories';
import { SCENARIO_LABELS } from './scenarios';
import { ExerciseSentence, loadExerciseSentences, WordTag } from './phrasebookContent';

// S6 Cheat-Sheet-Survival - seit 2026-08-07 auf echtem Supabase-Content
// statt der fruehren Platzhalter-Struktur (1 Beispielsatz + 5 Fake-Karten
// pro Thema). Nutzer-Anforderung: Saetze aus allen gekauften Kategorien
// sollen dauerhaft offline einsehbar sein UND per Freitextsuche
// (z.B. "Arzt suchen") auffindbar sein - beides jetzt umgesetzt.

export type Phrase = {
  id: string; // eindeutiger Schluessel: sprache:tabelle:satzId (kollisionsfrei ueber Sprachen hinweg)
  context: string; // Kategorie- oder Szenario-Label fuer die Anzeige
  text: string; // Zielsprachen-Satz
  gloss: string | null; // deutsche Uebersetzung, nur gesetzt wenn Zielsprache != Deutsch
  placeholder: boolean; // true nur bei den (noch) leeren Kategorien (siehe unten)
  /** Vorgerenderte Aufnahme, falls vorhanden - heute ueberall leer. */
  audioUrl?: string | null;
  /**
   * Lautschrift unter dem Satz - fuer Chinesisch das Pinyin.
   *
   * Seit 2026-08-21 gefuellt: `chinesisch_phrasebook` hat eine
   * Pinyin-Spalte. Die anderen Sprachen haben weiterhin keine Umschrift,
   * dort bleibt die Zeile leer und erscheint gar nicht.
   *
   * Reihenfolge auf der Karte: Zeichen, Pinyin, Deutsch. Die Zeichen stehen
   * oben, weil man im Notfall jemandem den Bildschirm hinhaelt - lesen tut
   * sie der Nutzer nie selbst, dafuer ist das Pinyin da.
   */
  phonetic?: string | null;
  /** Kulturhinweis, siehe ExerciseSentence.cultureNote. */
  cultureNote?: string | null;
  /**
   * Situation und Kategorie als Merkmale am Satz selbst (2026-08-21).
   *
   * Gebraucht, sobald ein Satz WAEHREND einer Lektion gemerkt wird: die
   * Favoriten leben allein aus `savedMeta` und werden nie neu geladen. Ohne
   * diese beiden Angaben waere ein so gemerkter Satz spaeter nicht mehr
   * ueber seine Situation auffindbar - die Suche gleicht genau darauf ab
   * (siehe searchCheatsheetSentences).
   */
  scenario?: string;
  category?: string;
  /** Wort-fuer-Wort-Wortart, siehe ExerciseSentence.wordTags. */
  wordTags?: WordTag[] | null;
};

/**
 * Aus welcher Sprache stammt ein gespeicherter Satz?
 *
 * Die ID ist `sprache:tabelle:satzId` - die Sprache laesst sich also
 * zurueckgewinnen. Gebraucht bei den Favoriten: die zeigen Saetze aus ALLEN
 * Sprachen, in denen der Nutzer je etwas gemerkt hat. Ohne diese Angabe
 * bekaeme ein schwedischer Satz die deutsche Stimme vorgelesen (echter
 * Fehler, gefunden 2026-08-21).
 */
export function phraseLanguageId(phraseIdValue: string): string {
  return phraseIdValue.split(':')[0] || 'de';
}

export function phraseId(languageId: string, table: string, sentenceId: number): string {
  return `${languageId}:${table}:${sentenceId}`;
}

export function toPhrase(languageId: string, table: string, context: string, s: ExerciseSentence): Phrase {
  return {
    id: phraseId(languageId, table, s.id),
    context,
    text: s.text,
    gloss: s.germanGloss,
    placeholder: false,
    audioUrl: s.audioUrl,
    phonetic: s.pinyin,
    cultureNote: s.cultureNote,
    scenario: s.scenario,
    category: s.category,
    wordTags: s.wordTags,
  };
}

// Anzeigenamen kommen aus data/scenarios.ts - EINE Quelle fuer alle
// Screens. Hier stand bis 2026-08-21 eine zweite, eigene Liste; sie kannte
// die neuen Club-Situationen nicht und widersprach der anderen bei zwoelf
// Eintraegen ("Wegbeschreibung" gegen "Nach dem Weg fragen") - Survival
// und Lektionen-Screen nannten dieselbe Situation verschieden.

export type CheatsheetScenarioGroup = { key: string; label: string; sentences: ExerciseSentence[] };

export type CheatsheetCategoryGroup = {
  categoryId: string;
  title: string;
  // Alle Situationen der Kategorie, auch wenn es nur eine ist - sie sind die
  // waehlbaren Marken fuer die Suche. Leer heisst: die Kategorie hat
  // ueberhaupt keine Saetze.
  scenarios: CheatsheetScenarioGroup[];
  allSentences: ExerciseSentence[];
};

export async function loadCheatsheetGroups(
  languageId: string,
  purchasedCategoryIds: string[]
): Promise<{ groups: CheatsheetCategoryGroup[]; fromCache: boolean }> {
  // Grundwortschatz ZUERST (Nutzer-Entscheidung 2026-08-21): er ist die
  // Grundlage und fuer jeden freigeschaltet, gehoert also nach oben und
  // nicht ans Ende hinter die gekauften Kategorien.
  const freigeschaltet = ['grundwortschatz', ...purchasedCategoryIds];

  // ALLE Kategorien laden, auch die gesperrten - und zwar einschliesslich
  // der Nachschlage-Saetze (2026-08-21, Nutzer-Entscheidung "Survival
  // immer").
  //
  // Grund: die Sicherheitssaetze ("Bitte rufen Sie die Polizei", "Tu so, als
  // wuerden wir uns kennen") liegen in Kaufkategorien. Waeren sie erst nach
  // dem Kauf sichtbar, fehlten sie genau in dem Moment, fuer den sie
  // gedacht sind. Aus einer GESPERRTEN Kategorie kommen deshalb nur die
  // Nachschlage-Saetze durch, der Rest bleibt hinter dem Kauf - nebenbei
  // ein ehrlicher Werbeeffekt: man sieht, was die Kategorie kann.
  const alleIds = CATEGORIES.map((c) => c.id);
  const categoryIds = [
    'grundwortschatz',
    ...purchasedCategoryIds,
    ...alleIds.filter((id) => !freigeschaltet.includes(id)),
  ];
  const { sentences, fromCache } = await loadExerciseSentences(languageId, categoryIds);

  const byCategory = new Map<string, ExerciseSentence[]>();
  for (const s of sentences) {
    const offen = freigeschaltet.includes(s.category);
    if (!offen && !s.lookupOnly) continue;
    if (!byCategory.has(s.category)) byCategory.set(s.category, []);
    byCategory.get(s.category)!.push(s);
  }

  // Gesperrte Kategorien ohne einen einzigen Nachschlage-Satz tauchen gar
  // nicht auf - eine leere Ueberschrift waere nur Rauschen.
  const sichtbar = categoryIds.filter(
    (id) => freigeschaltet.includes(id) || (byCategory.get(id)?.length ?? 0) > 0,
  );

  const groups: CheatsheetCategoryGroup[] = sichtbar.map((catId) => {
    const catSentences = byCategory.get(catId) ?? [];
    const title = catId === 'grundwortschatz' ? 'Grundwortschatz' : (CATEGORY_BY_ID[catId]?.name ?? catId);
    const distinctScenarios = Array.from(new Set(catSentences.map((s) => s.scenario)));
    // ALLE Situationen auflisten, auch wenn es nur eine gibt
    // (Nutzer-Entscheidung 2026-08-21). Frueher wurden einzelne Situationen
    // unterdrueckt, um keine redundante Box zu erzeugen - dadurch hatten
    // diese Kategorien aber gar nichts zum Auswaehlen und die Suche kam nie
    // an ihre Saetze heran.
    const scenarios: CheatsheetScenarioGroup[] = distinctScenarios.map((sc) => ({
      key: sc,
      label: SCENARIO_LABELS[sc] ?? sc,
      sentences: catSentences.filter((s) => s.scenario === sc),
    }));
    return { categoryId: catId, title, scenarios, allSentences: catSentences };
  });

  return { groups, fromCache };
}

// Deutsche Fuellwoerter, die praktisch JEDEN Satz treffen und deshalb aus
// der Bewertung fallen - sonst reisst ein einzelnes "ich" oder "einen" die
// Trefferliste in die Breite, ohne dass die Saetze thematisch etwas
// gemeinsam haben.
//
// Ausloeser (Fehlerbericht 2026-08-23): "Ich brauche einen Arzt" lieferte
// 121 Treffer, darunter "Ich habe meinen Schlüssel verloren" - beide Saetze
// teilen sich nur das Wort "ich", sonst nichts. Ohne Fuellwoerter zaehlte
// das schon als Treffer.
const FUELLWOERTER = new Set([
  'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'man',
  'mein', 'meine', 'meinen', 'meiner', 'meinem',
  'dein', 'deine', 'deinen', 'deiner', 'deinem',
  'ein', 'eine', 'einen', 'einer', 'einem',
  'der', 'die', 'das', 'den', 'dem', 'des',
  'habe', 'hast', 'hat', 'haben', 'habt',
  'bin', 'bist', 'ist', 'sind', 'seid', 'war', 'wäre',
  'und', 'oder', 'auch', 'noch', 'nicht', 'kein', 'keine',
  'zu', 'zum', 'zur', 'für', 'von', 'mit', 'bei', 'auf', 'an', 'in',
]);

// Themen-Synonyme (2026-08-24, Antwort auf Simons Frage "bekommen wir das so
// einfach hin oder brauchen wir GPT?"): eine kleine, von Hand gepflegte
// Liste, die eine Anfrage auf zusaetzliche Suchworte erweitert, BEVOR
// gescored wird - kein Laufzeit-KI-Aufruf, exakt das Prinzip aus
// CLAUDE.md ("Uebersetzungsuebungen ohne laufende KI-Kosten") auf die Suche
// uebertragen. Grund, warum reines Substring-Matching allein zu eng war:
// "Preis" matcht keinen Satz, weil die Saetze "kostet"/"teuer" sagen; "Nach
// Alter fragen" matcht nicht, weil kein Satz "Alter" enthaelt, nur "alt".
// Jeder Eintrag ist gegen den echten Satzbestand geprueft (nicht geraten) -
// z.B. "notfall" deckt "Hilfe!", "Bitte rufen Sie die Polizei" und die
// Arzt-Saetze ab, ohne dass "Notfall" selbst irgendwo im Text steht.
// Bewusst NICHT vollstaendig: "Hunger"/"Durst" fehlen absichtlich - dazu
// gibt es aktuell KEINEN Satz in keiner Kategorie (geprueft), das waere ein
// Content-Fehlbestand, keine Suchschwaeche, und eine Synonym-Zeile wuerde
// nur Treffer vortaeuschen, die es nicht gibt.
const SUCH_SYNONYME: Record<string, string[]> = {
  preis: ['teuer', 'kosten', 'kostet'],
  kosten: ['teuer', 'preis'],
  geld: ['bezahl', 'bargeld', 'rabatt'],
  alter: ['alt'],
  jahre: ['alt'],
  internet: ['wlan', 'passwort'],
  wifi: ['wlan', 'passwort'],
  telefon: ['handy'],
  nummer: ['handy'],
  wegbeschreibung: ['geradeaus', 'links', 'rechts'],
  weg: ['geradeaus', 'links', 'rechts'],
  notfall: ['hilfe', 'polizei', 'arzt'],
  unfall: ['hilfe', 'arzt', 'polizei'],
  feuer: ['hilfe', 'polizei'],
  dieb: ['polizei', 'verloren'],
  stehlen: ['polizei', 'verloren'],
  krankenhaus: ['arzt', 'krank'],
  uni: ['vorlesung', 'bibliothek', 'hausaufgabe'],
  universität: ['vorlesung', 'bibliothek', 'hausaufgabe'],
  job: ['arbeiten'],
};

// Freitextsuche (z.B. "Arzt suchen", "Leute ansprechen") - kein Server/KI
// noetig (siehe CLAUDE.md "keine Laufzeitkosten"), reines Token-Matching:
// JEDES INHALTLICHE Token des Suchbegriffs wird einzeln gegen Satztext/
// Uebersetzung/Szenario/Kategorie geprueft (ODER-Verknuepfung zwischen
// Treffern, sortiert nach Anzahl passender Tokens) - bewusst grosszuegig
// statt strikt, weil es dafuer noch keine dedizierten Such-Tags pro Satz
// gibt (siehe CLAUDE.md-Backlog "S6-Suchfeld: braucht eigentlich einen
// abgleichbaren Such-/Tag-Text pro Satz" - das hier ist die MVP-Variante
// ohne neue Datenbank-Spalte). "Grosszuegig" gilt aber nur noch fuer
// INHALTSWORTE - Fuellwoerter zaehlen seit dem 2026-08-23 nicht mehr mit,
// siehe FUELLWOERTER oben.
//
// `durchsuchbareKategorien`: ohne Angabe wird ueber ALLE uebergebenen
// Gruppen gesucht (z.B. die Themenauswahl, die ohnehin nur gekaufte/
// beworbene Kategorien enthaelt). Mit Angabe (Nutzer-Wunsch 2026-08-23,
// gilt fuer die FREITEXTSUCHE) werden nur diese Kategorien durchsucht -
// `loadCheatsheetGroups` liefert sonst auch gesperrte Kategorien mit ihren
// Nachschlage-Saetzen zurueck (Werbeeffekt), die hier nicht auftauchen
// sollen.
export function searchCheatsheetSentences(
  groups: CheatsheetCategoryGroup[],
  query: string,
  durchsuchbareKategorien?: Set<string>,
): ExerciseSentence[] {
  const alleTokens = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  if (alleTokens.length === 0) return [];

  // Fuellwoerter raus - bleibt danach nichts uebrig (z.B. eine Suche nur
  // nach "ich du"), lieber mit den Originaltokens weitersuchen als leer
  // zurueckzugeben.
  const inhaltsworte = alleTokens.filter((t) => !FUELLWOERTER.has(t));
  const basisTokens = inhaltsworte.length > 0 ? inhaltsworte : alleTokens;

  // Jedes Basis-Token um seine Themen-Synonyme erweitern (siehe
  // SUCH_SYNONYME oben) - ODER-verknuepft wie alle anderen Tokens, erhoeht
  // also nur die Trefferchance, verengt sie nie.
  const tokens = Array.from(
    new Set(basisTokens.flatMap((t) => [t, ...(SUCH_SYNONYME[t] ?? [])])),
  );

  const durchsuchen = durchsuchbareKategorien
    ? groups.filter((g) => durchsuchbareKategorien.has(g.categoryId))
    : groups;

  const scored: { sentence: ExerciseSentence; score: number }[] = [];
  for (const group of durchsuchen) {
    for (const s of group.allSentences) {
      // Satztext bleibt Teilstring-Suche (bewusst grosszuegig, siehe oben).
      const textHaystack = [s.text, s.germanGloss ?? ''].join(' ').toLowerCase();

      // Situations-/Kategorie-Name dagegen nur GANZES WORT, nicht Teilstring
      // (Fehlerbericht 2026-08-24): die Kategorienamen sind teils englisch
      // ("Health + Emergency", "Hotel + Accommodation") - "Health" enthaelt
      // zufaellig "alt" als Teilstring ("he-alt-h") und liess "Alter" jeden
      // einzelnen Satz der Kategorie Health + Emergency treffen, egal welche
      // Situation. Ganze-Wort-Abgleich lässt "Notfall" weiterhin die
      // gleichnamige Situation finden, ohne dass kurze Tokens (v.a. die
      // Themen-Synonyme oben, oft 3-4 Zeichen) in fremden Woertern
      // untertauchen koennen.
      const labelWoerter = new Set(
        `${SCENARIO_LABELS[s.scenario] ?? s.scenario} ${CATEGORY_BY_ID[s.category]?.name ?? s.category}`
          .toLowerCase()
          .split(/[^a-zà-öø-ÿ]+/)
          .filter(Boolean),
      );

      const score = tokens.filter((t) => textHaystack.includes(t) || labelWoerter.has(t)).length;
      if (score > 0) scored.push({ sentence: s, score });
    }
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.map((s) => s.sentence);
}
