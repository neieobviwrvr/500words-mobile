// Wie eine Aeusserung je Sprache verglichen wird (2026-09-04).
//
// Bis dahin war die Bewertung fuer Chinesisch geschrieben und wurde auf
// alle Sprachen angewendet. Das ging an drei Stellen schief:
//
//   * `[^a-z]` filtern loeschte KYRILLISCH restlos - jede getippte
//     russische Antwort war leer und damit "nicht verstanden".
//   * Diakritika abstreifen machte aus schwedisch `här` ein `har`,
//     aus vietnamesisch `mà` ein `ma`. Das sind keine Schmuckzeichen,
//     sondern eigene Buchstaben bzw. eigene Woerter.
//   * Zeichenweiser Vergleich passt zu Chinesisch (keine Leerzeichen),
//     zerlegt aber jedes lateinische Wort in Buchstaben - die
//     Reihenfolge- und Fremdmaterial-Pruefung urteilte dadurch ueber
//     Buchstabensalat statt ueber Woerter.
//
// Ein Profil je Sprache statt Sonderfaellen im Code.

export type SprachProfil = {
  /**
   * Womit verglichen wird.
   *
   * `zeichen` nur fuer Sprachen ohne Wortgrenzen (Chinesisch). Ueberall
   * sonst `wort` - sonst prueft die Reihenfolge Buchstaben, nicht Woerter.
   */
  einheit: 'zeichen' | 'wort';
  /**
   * Duerfen beim TIPPEN die Diakritika fehlen?
   *
   * Getippt ist ohnehin nur die Rueckfallebene und zaehlt hoechstens als
   * "ueberlebt" - dort grosszuegig zu sein, kostet nichts und erspart dem
   * Nutzer die Suche nach `ñ` auf einer deutschen Tastatur.
   *
   * `false` steht dort, wo das Zeichen den Sinn traegt:
   *   vi  ma / má / mà / mả / mã / mạ sind SECHS verschiedene Woerter.
   *       Ohne Toene ist die Pruefung wertlos.
   *   sv  å ä ö sind eigene Buchstaben, nicht a und o mit Haube -
   *       `har` (habe) gegen `här` (hier) ist ein Bedeutungsunterschied.
   *   no  dasselbe mit æ ø å.
   *   pl  ą ę ł ż ź ć ś ń stehen im Alphabet.
   *
   * BEIM SPRECHEN wird nie abgestreift: die Erkennung liefert richtige
   * Rechtschreibung, und das ist der Weg, auf den es ankommt.
   */
  diakritikaBeimTippenEgal: boolean;
  /**
   * Zeichen, die gleich klingen und deshalb beide gelten sollen.
   *
   * Nur Chinesisch: gleiches Pinyin INKLUSIVE Ton. Gibt die Erkennung 做
   * zurueck, wo 坐 erwartet war, war die Aussprache richtig - nur der
   * Kontext hat anders entschieden.
   */
  homophone: readonly (readonly string[])[];
  /**
   * Ist die Wortstellung unverhandelbar?
   *
   * `false` bei Sprachen, die ihre Satzglieder ueber FAELLE markieren und
   * deshalb umstellen duerfen: Russisch und Polnisch. `я тебя люблю` und
   * `я люблю тебя` sind beide richtig - wer das anstreicht, bestraft
   * korrektes Russisch.
   */
  reihenfolgeStreng: boolean;
};

const LATEIN_STRENG: SprachProfil = {
  einheit: 'wort',
  diakritikaBeimTippenEgal: false,
  homophone: [],
  reihenfolgeStreng: true,
};

const LATEIN_LOCKER: SprachProfil = {
  einheit: 'wort',
  diakritikaBeimTippenEgal: true,
  homophone: [],
  reihenfolgeStreng: true,
};

export const SPRACH_PROFIL: Record<string, SprachProfil> = {
  // Keine Wortgrenzen, dafuer acht echte Homophonpaare.
  zh: {
    einheit: 'zeichen',
    diakritikaBeimTippenEgal: true, // Pinyin ohne Toene tippen ist normal
    homophone: [
      ['他', '她'], // tā   er / sie
      ['要', '药'], // yào  wollen / Medizin
      ['在', '再'], // zài  in / nochmal
      ['坐', '做'], // zuò  sitzen / machen
      ['玩', '完'], // wán  spielen / fertig
      ['快', '块'], // kuài schnell / Yuan
      ['进', '近'], // jìn  eintreten / nah
      ['加', '家'], // jiā  hinzufuegen / Zuhause
    ],
    reihenfolgeStreng: true,
  },

  // Toene tragen die Bedeutung - nichts abstreifen.
  vi: LATEIN_STRENG,

  // Eigene Buchstaben im Alphabet.
  sv: LATEIN_STRENG,
  no: LATEIN_STRENG,
  pl: { ...LATEIN_STRENG, reihenfolgeStreng: false },

  // Faelle statt Wortstellung: umstellen ist erlaubt. Getippt wird die
  // Umschrift, deren Betonungszeichen (á é í ó ú) reine Lesehilfe sind.
  ru: { ...LATEIN_LOCKER, reihenfolgeStreng: false },

  // Akzente unterscheiden zwar Woerter (fr `ou`/`où`, es `si`/`sí`), aber
  // sie stehen auf keiner deutschen Tastatur. Beim Tippen deshalb
  // nachsichtig - beim Sprechen zaehlt ohnehin die Erkennung.
  es: LATEIN_LOCKER,
  fr: LATEIN_LOCKER,
  it: LATEIN_LOCKER,
  en: LATEIN_LOCKER,
};

export function profilFuer(sprache: string): SprachProfil {
  return SPRACH_PROFIL[sprache] ?? LATEIN_LOCKER;
}

/**
 * Was ueber dem Tippfeld steht.
 *
 * Der Hinweis muss sagen, WAS getippt werden darf - und das ist je Sprache
 * etwas anderes. Bis 2026-09-04 stand dort fest "TIPPEN (PINYIN, OHNE
 * TÖNE)", auch bei Schwedisch.
 *
 *   Chinesisch  Pinyin, Toene duerfen fehlen
 *   Russisch    die Umschrift, nicht das Kyrillische
 *   sv/no/pl/vi die Sonderzeichen zaehlen (sie sind eigene Buchstaben
 *               bzw. bedeutungstragende Toene) - das muss dastehen, sonst
 *               wundert sich der Nutzer ueber ein "nicht verstanden"
 *   sonst       schlicht TIPPEN
 */
export function tippHinweis(sprache: string, hatLautschrift: boolean): string {
  if (sprache === 'zh') return 'TIPPEN (PINYIN, OHNE TÖNE)';
  if (hatLautschrift) return 'TIPPEN (UMSCHRIFT)';
  return profilFuer(sprache).diakritikaBeimTippenEgal
    ? 'TIPPEN'
    : 'TIPPEN (MIT SONDERZEICHEN)';
}

/**
 * Der Platzhalter im Tippfeld - eine blasse Vorschau der erwarteten Form.
 *
 * Frueher `text.replace(/[^a-zA-Z ]/g, '')`: das strich die Pinyin-Toene
 * weg (richtig fuer Chinesisch) und mit ihnen alles andere - aus
 * schwedisch `trött` wurde `trtt`, Kyrillisch verschwand ganz.
 */
export function tippPlatzhalter(text: string, sprache: string): string {
  const profil = profilFuer(sprache);
  if (!profil.diakritikaBeimTippenEgal) return text;
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '');
}
