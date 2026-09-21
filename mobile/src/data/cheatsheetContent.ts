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
  // `new Set` als zweite Sicherung (2026-09-21): eine Kategorie darf hier
  // nur EINMAL stehen, sonst entstehen zwei Gruppen mit denselben Saetzen
  // und die Suche liefert jeden davon doppelt. Der Aufrufer sollte schon
  // saubere Listen schicken - diese Zeile kostet nichts und faengt es ab.
  const categoryIds = [
    ...new Set([
      'grundwortschatz',
      ...purchasedCategoryIds,
      ...alleIds.filter((id) => !freigeschaltet.includes(id)),
    ]),
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
/**
 * Ein Treffer im NAMEN der Situation zaehlt nur als Beiwerk.
 *
 * Er zieht alle Saetze seiner Situation gleichzeitig an und sagt ueber den
 * einzelnen nichts: bei "bezahlen" kamen 40 Saetze, weil eine Situation
 * "Versicherung und Bezahlen" heisst - darunter "Reicht das?" und "Hier ist
 * meine Karte". Er entscheidet deshalb nur die RANGFOLGE, nicht die
 * Aufnahme: ob ein Satz ueberhaupt in die Liste kommt, rechnet
 * `abdeckung` ohne diesen Abschlag (siehe Regel 3 unten).
 */
const GEWICHT_LABEL = 0.35;
/** Ein Synonym ist eine Vermutung, kein Wort des Nutzers - es zaehlt weniger. */
const GEWICHT_SYNONYM = 0.6;

/**
 * Wie viel der Anfrage ein Satz mindestens abdecken muss.
 *
 * Gemessen an dem, was die Anfrage HERGIBT, nicht am besten Treffer: die
 * Summe aller Suchbegriff-Gewichte ist die volle Anfrage, die Haelfte davon
 * die Grenze. Bei einem einzelnen Suchwort aendert das nichts (jeder
 * Treffer deckt es ganz ab), bei einem ganzen Satz trennt es Kern von
 * Beiwerk.
 *
 * Der Wert ist gemessen, nicht geraten. "Ich brauche einen Arzt" zerfaellt
 * in `brauche` (haeufig, schwach) und `arzt` (selten, stark): ein Satz mit
 * `arzt` deckt 56% der Anfrage ab, einer mit nur `brauche` 44%. Genau
 * dazwischen liegt die Haelfte - und genau die zweite Sorte ("Ich brauche
 * die Quittung fuer meine Versicherung") hatte Simon beim Test beanstandet.
 */
const MINDESTANTEIL = 0.5;

/** Zerlegt einen Text in kleingeschriebene Woerter (fuer Zaehlung und Abgleich). */
function woerterVon(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);
}

/**
 * Trifft ein Suchwort dieses Wort aus dem Satz?
 *
 * **Kein beliebiger Teilstring mehr** (bis 2026-09-21 war es einer, und
 * zwar auf dem ganzen Satz): "eis" traf damit "Preis", "Reise" und
 * "heiss". Wie weit die Toleranz reicht, haengt jetzt an der LAENGE -
 * kurze Woerter stecken in zu vielen anderen:
 *
 * | Laenge | erlaubt ist | faengt | verhindert |
 * |---|---|---|---|
 * | 1-3 | nur das ganze Wort | "wo" -> "Wo ist ...?" | "wo" -> "Woche", "Woher" |
 * | 4 | zusaetzlich der Wortanfang | "arzt" -> "Arztes" | "arzt" im Wortinneren |
 * | 5+ | zusaetzlich das Wortinnere | "toilette" -> "Herrentoilette" | - |
 *
 * Das Wortinnere erst ab fuenf, weil deutsche Komposita das Grundwort
 * hinten anhaengen ("Hausarzt") - bei vier Zeichen waere dieselbe Regel
 * schon gefaehrlich, "kann" steckt in "bekannt".
 */
function trifft(suchwort: string, wort: string): boolean {
  if (wort === suchwort) return true;
  if (suchwort.length < 4) return false;
  if (wort.startsWith(suchwort)) return true;
  return suchwort.length >= 5 && wort.includes(suchwort);
}

/**
 * Ein Suchbegriff mit allem, was fuer ihn zaehlt.
 *
 * Ein getipptes Wort und seine Synonyme sind EIN Begriff, nicht drei
 * Suchworte: wer "Preis" sucht, sucht einmal nach dem Thema Preis, und ob
 * der Satz "kostet" oder "teuer" sagt, ist dieselbe Frage. Als getrennte
 * Suchworte haette eine Anfrage mit vielen Synonymen von allein mehr
 * Gewicht als eine ohne, und ein Satz mit zwei davon saehe doppelt so
 * passend aus, obwohl er nur einmal vom Preis spricht.
 */
type Suchbegriff = { varianten: { wort: string; faktor: number }[]; gewicht: number };

/**
 * Freitextsuche im Survival (z.B. "Arzt", "Wo ist die Toilette").
 *
 * Kein Server, keine KI - siehe CLAUDE.md "keine Laufzeitkosten". Aber seit
 * 2026-09-21 mit GEWICHTUNG statt bloss "irgendein Wort passt".
 *
 * **Was vorher schieflief** (Simons Fehlerbericht: "es hat einfach
 * schlampig funktioniert und nicht die Situationen/Kategorien und Saetze
 * angezeigt die ich mit meiner Eingabe erwartet habe"): jeder Satz mit
 * EINEM getroffenen Token kam in die Liste, alle Tokens zaehlten gleich
 * viel, und geprueft wurde auf Teilstrings im ganzen Satz. "Ich brauche
 * einen Arzt" lieferte 18 Treffer, darunter "Ich brauche eine Bestaetigung
 * meiner Adresse" - verbunden allein durch "brauche".
 *
 * Drei Regeln ersetzen das, jede gegen den echten Bestand gemessen
 * (`npm run pruefe:suche`):
 *
 * 1. **Seltenheit schlaegt Haeufigkeit.** Das Gewicht eines Suchbegriffs
 *    ergibt sich aus dem durchsuchten Bestand selbst (`log(N / 1+Treffer)`,
 *    die uebliche IDF-Rechnung) - "brauche" faellt damit von allein ab,
 *    ohne dass jemand es in eine Liste eintragen muss. Genau das war die
 *    Schwaeche der FUELLWOERTER-Liste: sie kennt nur, was jemand vorher
 *    hineingeschrieben hat.
 * 2. **Die halbe Anfrage muss abgedeckt sein** (MINDESTANTEIL).
 * 3. **Der Name einer Situation ist der Rueckfall, nicht das Ergebnis.**
 *    Deckt irgendein Satz die Anfrage schon mit seinem eigenen TEXT ab,
 *    zaehlen nur solche Saetze - bei "bezahlen" sind das die acht, die das
 *    Wort wirklich sagen, statt der ganzen Situation "Versicherung und
 *    Bezahlen". Reicht der blosse Text nirgends, uebernehmen die Namen:
 *    wer "jemanden ansprechen" tippt, bekommt diese Situation, obwohl
 *    kein einziger ihrer Saetze das Wort "ansprechen" enthaelt.
 */
export function searchCheatsheetSentences(
  groups: CheatsheetCategoryGroup[],
  query: string,
  durchsuchbareKategorien?: Set<string>,
): ExerciseSentence[] {
  const alleTokens = woerterVon(query);
  if (alleTokens.length === 0) return [];

  // Fuellwoerter raus - bleibt danach nichts uebrig (z.B. eine Suche nur
  // nach "ich du"), lieber mit den Originaltokens weitersuchen als leer
  // zurueckzugeben.
  const inhaltsworte = alleTokens.filter((t) => !FUELLWOERTER.has(t));
  const basisTokens = [...new Set(inhaltsworte.length > 0 ? inhaltsworte : alleTokens)];

  const durchsuchen = durchsuchbareKategorien
    ? groups.filter((g) => durchsuchbareKategorien.has(g.categoryId))
    : groups;

  // Jeden Satz nur EINMAL - dieselbe Kategorie kann in `groups` mehrfach
  // stehen (siehe loadCheatsheetGroups), und bei geliehenen Situationen
  // faende man denselben Satz ohnehin zweimal.
  const kandidaten = new Map<
    number,
    { s: ExerciseSentence; textWoerter: string[]; etikettWoerter: string[] }
  >();
  for (const group of durchsuchen) {
    for (const s of group.allSentences) {
      if (kandidaten.has(s.id)) continue;
      kandidaten.set(s.id, {
        s,
        textWoerter: woerterVon(`${s.text} ${s.germanGloss ?? ''}`),
        // Die "hinterlegten Tags" eines Satzes sind sein Situations- und
        // sein Kategoriename - etwas anderes traegt er nicht. (`wordTags`
        // ist die WORTART je Wort, kein Thema.)
        etikettWoerter: woerterVon(
          `${SCENARIO_LABELS[s.scenario] ?? s.scenario} ${CATEGORY_BY_ID[s.category]?.name ?? s.category}`,
        ),
      });
    }
  }
  if (kandidaten.size === 0) return [];

  const gesamt = kandidaten.size;
  const begriffe: Suchbegriff[] = basisTokens.map((token) => {
    const varianten = [
      { wort: token, faktor: 1 },
      ...(SUCH_SYNONYME[token] ?? []).map((syn) => ({ wort: syn, faktor: GEWICHT_SYNONYM })),
    ];
    // Das Gewicht des Begriffs ist das seiner staerksten Variante. Eine
    // Variante, die GAR NICHT vorkommt, traegt nichts bei - sonst bestimmte
    // ein Tippfehler die ganze Rangfolge.
    let gewicht = 0;
    for (const v of varianten) {
      let treffer = 0;
      for (const k of kandidaten.values()) {
        if (k.textWoerter.some((w) => trifft(v.wort, w)) || k.etikettWoerter.some((w) => trifft(v.wort, w))) {
          treffer += 1;
        }
      }
      if (treffer > 0) gewicht = Math.max(gewicht, v.faktor * Math.log(gesamt / (1 + treffer)));
    }
    return { varianten, gewicht };
  });

  // Was die Anfrage hergibt, wenn ein Satz sie vollstaendig abdeckt.
  const volleAnfrage = begriffe.reduce((n, b) => n + b.gewicht, 0);
  if (volleAnfrage <= 0) return [];

  // Drei Zahlen je Satz, und sie machen Verschiedenes:
  //
  // - `abdeckung`  wie viel der Anfrage der Satz ueberhaupt beantwortet -
  //                entscheidet ueber Aufnahme, ohne Abschlag fuers Etikett.
  //                Sonst kaeme eine Situation, deren NAME die Anfrage
  //                woertlich ist, nie ueber MINDESTANTEIL hinaus.
  // - `textAnteil` dasselbe, aber nur aus dem Satz selbst - entscheidet, ob
  //                die Etiketten ueberhaupt gebraucht werden (Regel 3).
  // - `score`      die Rangfolge, hier zaehlt der Abschlag mit.
  const bewertet: { sentence: ExerciseSentence; abdeckung: number; textAnteil: number; score: number }[] = [];
  for (const k of kandidaten.values()) {
    let abdeckung = 0;
    let textAnteil = 0;
    let score = 0;
    for (const b of begriffe) {
      if (b.gewicht <= 0) continue;
      if (b.varianten.some((v) => k.textWoerter.some((w) => trifft(v.wort, w)))) {
        abdeckung += b.gewicht;
        textAnteil += b.gewicht;
        score += b.gewicht;
      } else if (b.varianten.some((v) => k.etikettWoerter.some((w) => trifft(v.wort, w)))) {
        abdeckung += b.gewicht;
        score += b.gewicht * GEWICHT_LABEL;
      }
    }
    if (abdeckung > 0) bewertet.push({ sentence: k.s, abdeckung, textAnteil, score });
  }

  const grenze = volleAnfrage * MINDESTANTEIL;
  // Regel 3: nur wenn der blosse Satztext die Anfrage nirgends traegt,
  // duerfen die Situations- und Kategorienamen einspringen.
  const textReicht = bewertet.some((b) => b.textAnteil >= grenze);
  return bewertet
    .filter((b) => (textReicht ? b.textAnteil : b.abdeckung) >= grenze)
    .sort((a, b) => b.score - a.score)
    .map((b) => b.sentence);
}
