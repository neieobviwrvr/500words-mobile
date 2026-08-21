// Bewertung einer Aeusserung im gefuehrten Kurs (2026-08-20).
//
// Zwei Eingabewege, ein Ergebnis:
//   * Spracherkennung liefert fuer Mandarin ZEICHEN (我是学生) - dann wird
//     gegen das hinterlegte Hanzi verglichen.
//   * Texteingabe liefert Pinyin - dann wird gegen das Pinyin verglichen,
//     ohne Toene, weil niemand Tonzeichen tippt.
//
// KEINE Toleranzschraube (siehe CLAUDE.md, Aussprache-Bewertung): verglichen
// wird exakt. Die Nachsicht bei falschen Toenen entsteht eine Ebene hoeher -
// die Spracherkennung korrigiert im Satzkontext still mit, weil sie weiss,
// welcher Satz plausibel ist. Genau wie ein Kellner, der "shui" versteht,
// egal wie der Ton lag.
//
// Ergebnis sind dieselben drei Stufen wie ueberall in der App, damit der
// Kurs spaeter ohne Uebersetzungsschicht an FSRS haengt.

export type Tier = 'richtig' | 'ueberlebt' | 'nicht_verstanden';

/**
 * Acht Paare mit gleichem Pinyin INKLUSIVE Ton. Da hilft auch perfekte
 * Aussprache nicht - gesprochenes Chinesisch unterscheidet sie schlicht
 * nicht, nur die Schrift tut es, und die lehren wir nicht.
 *
 * Gibt die Erkennung 做 zurueck, wo 坐 erwartet war, war die AUSSPRACHE
 * richtig - nur der Kontext hat anders entschieden. Beide gelten deshalb.
 */
const HOMOPHONE: readonly (readonly string[])[] = [
  ['他', '她'], // tā   er / sie
  ['要', '药'], // yào  wollen / Medizin
  ['在', '再'], // zài  in / nochmal
  ['坐', '做'], // zuò  sitzen / machen
  ['玩', '完'], // wán  spielen / fertig
  ['快', '块'], // kuài schnell / Yuan
  ['进', '近'], // jìn  eintreten / nah
  ['加', '家'], // jiā  hinzufuegen / Zuhause
];

// Jedes Zeichen auf einen gemeinsamen Vertreter seiner Gruppe abbilden.
const VERTRETER: Record<string, string> = {};
for (const gruppe of HOMOPHONE) {
  for (const zeichen of gruppe) VERTRETER[zeichen] = gruppe[0];
}

/** Satzzeichen und Leerraum weg - die traegt keine Bedeutung fuers Sprechen. */
function nurInhalt(text: string): string {
  return text.replace(/[\s，。？！、,.?!·]/g, '');
}

/** Homophone vereinheitlichen, damit 做 und 坐 gleich zaehlen. */
export function normalisiereHanzi(text: string): string {
  return [...nurInhalt(text)].map((z) => VERTRETER[z] ?? z).join('');
}

/**
 * Tonzeichen entfernen: "wǒ shì xuésheng" -> "woshixuesheng".
 *
 * Niemand tippt Tonzeichen, und die Tastatur bietet sie nicht an. Beim
 * Sprechen prueft die Erkennung die Toene ohnehin ueber die Zeichen - dieser
 * Weg ist die Rueckfallebene, solange Mandarin-Spracherkennung nicht
 * bestaetigt ist.
 */
export function ohneToene(pinyin: string): string {
  return pinyin
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // kombinierende Tonzeichen
    .toLowerCase()
    .replace(/[^a-z]/g, '');
}

type Eingabe = {
  /** Was gesagt bzw. getippt wurde. */
  antwort: string;
  /** Der erwartete Satz in Zeichen. */
  erwartetHanzi: string;
  /** Der erwartete Satz in Pinyin. */
  erwartetPinyin: string;
  /** Das Wort, um das es in dieser Wiederholung geht - in Zeichen. */
  slotHanzi: string;
  /** Dasselbe Wort in Pinyin. */
  slotPinyin: string;
  /** Kam die Antwort aus der Spracherkennung (Zeichen) oder der Tastatur? */
  quelle: 'sprache' | 'text';
};

/**
 * Drei Stufen, wie im Rest der App:
 *
 *   richtig            der ganze Satz stimmt
 *   ueberlebt          das Slot-Wort stimmt, der Rahmen holpert - die
 *                      Kernbotschaft kam an, und das ist der Massstab
 *                      (siehe "SRS soll nicht schlecht gelaunt machen")
 *   nicht_verstanden   das Slot-Wort fehlt
 */
export type Bewertung = {
  tier: Tier;
  /**
   * Was genau schiefging - im Klartext fuer den Nutzer.
   *
   * Ein blosses "nicht verstanden" lehrt nichts. Die Bewertung WEISS, ob das
   * Wort fehlte, der Rahmen holperte oder ein anderes Wort eingesetzt wurde -
   * das auszusprechen ist selbst Unterricht.
   */
  grund: string | null;
};

export function bewerteAntwort(e: Eingabe): Bewertung {
  const gesprochen = e.quelle === 'sprache';
  const anpassen = gesprochen ? normalisiereHanzi : ohneToene;

  const antwort = anpassen(e.antwort);
  if (!antwort) return { tier: 'nicht_verstanden', grund: 'Da kam nichts an.' };

  const ziel = anpassen(gesprochen ? e.erwartetHanzi : e.erwartetPinyin);
  const slot = anpassen(gesprochen ? e.slotHanzi : e.slotPinyin);

  if (antwort === ziel) {
    // Getippt zaehlt bewusst NICHT als voller Erfolg: wer die Woerter tippt,
    // hat gezeigt, dass er sie kennt - ueber seine Aussprache sagt das
    // nichts. Der Vollerfolg bleibt dem Sprechen vorbehalten, sonst
    // untergraebt die Rueckfallebene das Kernprinzip der App.
    if (!gesprochen) {
      return { tier: 'ueberlebt', grund: 'Richtig getippt — gesprochen zählt es voll.' };
    }
    return { tier: 'richtig', grund: null };
  }

  if (!slot || !antwort.includes(slot)) {
    return {
      tier: 'nicht_verstanden',
      grund: `„${e.slotPinyin}" kam nicht vor.`,
    };
  }

  if (enthaeltFremdes(e, gesprochen)) {
    return {
      tier: 'nicht_verstanden',
      grund: 'Das Wort stimmt, aber im Satz stand etwas, das nicht dazugehört.',
    };
  }

  if (!inRichtigerReihenfolge(e, gesprochen)) {
    // Chinesisch hat feste Wortstellung - "xuésheng shì wǒ" ist kein
    // holpriger Satz, sondern ein falscher.
    return { tier: 'nicht_verstanden', grund: 'Die Wörter standen in der falschen Reihenfolge.' };
  }

  return { tier: 'ueberlebt', grund: 'Das Wort stimmt — der Satz drumherum fehlte noch.' };
}

/**
 * Steht in der Antwort Material, das im Zielsatz gar nicht vorkommt?
 *
 * Gesprochen wird zeichenweise verglichen, getippt silbenweise entlang der
 * Leerzeichen. Fehlen die Leerzeichen ("woshixuesheng"), laesst sich nicht
 * zerlegen - dann wird nachsichtig geurteilt, statt zu raten.
 */
function enthaeltFremdes(e: Eingabe, gesprochen: boolean): boolean {
  if (gesprochen) {
    const erlaubt = new Set(normalisiereHanzi(e.erwartetHanzi));
    return [...normalisiereHanzi(e.antwort)].some((z) => !erlaubt.has(z));
  }
  const gesagt = silben(e.antwort);
  if (gesagt.length < 2) return false; // nicht zerlegbar - nicht raten
  const erlaubt = new Set(silben(e.erwartetPinyin));
  return gesagt.some((s) => !erlaubt.has(s));
}

/**
 * Kommen die gesagten Teile in derselben Ordnung wie im Zielsatz?
 *
 * Ohne diese Pruefung kaeme "xuésheng shì wǒ" durch - es enthaelt nur
 * erlaubte Teile und das Slot-Wort. Im Chinesischen ist die Wortstellung
 * aber nicht verhandelbar.
 *
 * Teilfolge-Pruefung: WENIGER sagen ist erlaubt (das ist "ueberlebt"),
 * umsortieren nicht.
 */
function inRichtigerReihenfolge(e: Eingabe, gesprochen: boolean): boolean {
  const gesagt = gesprochen ? [...normalisiereHanzi(e.antwort)] : silben(e.antwort);
  const ziel = gesprochen ? [...normalisiereHanzi(e.erwartetHanzi)] : silben(e.erwartetPinyin);
  if (gesagt.length < 2) return true;

  let i = 0;
  for (const teil of ziel) {
    if (i < gesagt.length && gesagt[i] === teil) i += 1;
  }
  return i === gesagt.length;
}

function silben(text: string): string[] {
  return text.trim().split(/\s+/).map(ohneToene).filter(Boolean);
}

/**
 * Aus einem Rahmen mit Alternativen einen sprechbaren Satz machen.
 *
 * Die Rahmen tragen Varianten als "我 / 他 / 她 是 [Slot]" - gedacht als
 * Uebersicht, nicht als Sprechvorlage. Fuer die Uebung wird die erste
 * Variante genommen; alles andere waere nicht sprechbar.
 */
export function ersteVariante(rahmen: string): string {
  return rahmen.replace(/(\S+)(?:\s*\/\s*\S+)+/g, '$1');
}

/** Platzhalter durch das Slot-Wort ersetzen. */
export function fuelleRahmen(rahmen: string, wort: string): string {
  return ersteVariante(rahmen).replace(/\[[^\]]*\]/, wort);
}

/**
 * Bewertung eines Finishers - der Lektion ohne jede Hilfe auf dem Schirm.
 *
 * Anders als im Drill gibt es hier NICHT die eine richtige Antwort: der
 * Rahmen laesst sich mit jedem Wort des Moduls fuellen, und alle diese Saetze
 * sind gleich richtig. Geprueft wird deshalb gegen alle moeglichen Fuellungen
 * und die beste Bewertung gewinnt.
 *
 * Das ist Absicht und keine Nachsicht: die Aufgabe lautet "stell dich vor",
 * nicht "sage diesen einen Satz". Wer sich mit einem anderen Wort vorstellt,
 * hat die Aufgabe geloest.
 */
export function bewerteFinisher(
  antwort: string,
  moeglichkeiten: { hanzi: string; pinyin: string; slotHanzi: string; slotPinyin: string }[],
  quelle: 'sprache' | 'text'
): Bewertung {
  if (moeglichkeiten.length === 0) {
    return { tier: 'nicht_verstanden', grund: 'Für diese Lektion fehlen noch Beispielsätze.' };
  }

  const rang: Record<Tier, number> = { nicht_verstanden: 0, ueberlebt: 1, richtig: 2 };
  let beste: Bewertung = { tier: 'nicht_verstanden', grund: null };

  for (const m of moeglichkeiten) {
    const b = bewerteAntwort({
      antwort,
      erwartetHanzi: m.hanzi,
      erwartetPinyin: m.pinyin,
      slotHanzi: m.slotHanzi,
      slotPinyin: m.slotPinyin,
      quelle,
    });
    if (rang[b.tier] > rang[beste.tier]) beste = b;
    if (beste.tier === 'richtig') break;
  }

  if (beste.tier === 'nicht_verstanden' && !beste.grund) {
    beste = { tier: 'nicht_verstanden', grund: 'Das passte noch zu keinem Satz aus diesem Modul.' };
  }
  return beste;
}
