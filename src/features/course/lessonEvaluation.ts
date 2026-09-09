// Bewertung einer Aeusserung im gefuehrten Kurs (2026-08-20).
//
// **Sprachabhaengig seit 2026-09-04.** Was hier passiert, haengt am
// `SprachProfil` der Zielsprache (siehe sprachProfil.ts): ob zeichen- oder
// wortweise verglichen wird, ob Diakritika beim Tippen fehlen duerfen,
// welche Zeichen als gleichklingend gelten und ob die Wortstellung
// verhandelbar ist. Ohne das war die Bewertung fuer Chinesisch geschrieben
// und loeschte zum Beispiel jede kyrillische Eingabe restlos.
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

import { profilFuer, SprachProfil } from './sprachProfil';

export type Tier = 'richtig' | 'ueberlebt' | 'nicht_verstanden';

/** Satzzeichen und Leerraum weg - die tragen keine Bedeutung fuers Sprechen. */
function nurInhalt(text: string): string {
  return text.replace(/[\s，。？！、,.?!·¿¡;:]/g, '');
}

/**
 * Chinesische Homophone vereinheitlichen: 做 und 坐 zaehlen als gleich.
 *
 * Bleibt als eigene Funktion erhalten, weil die Woerter-Wiederholung sie
 * direkt benutzt (WordReviewScreen) - dort geht es um EIN Wort, nicht um
 * eine Satzstruktur, und die volle Bewertung waere ueberdimensioniert.
 */
export function normalisiereHanzi(text: string): string {
  const vertreter = vertreterTabelle(profilFuer('zh'));
  return [...nurInhalt(text)].map((z) => vertreter[z] ?? z).join('');
}

/** Homophone der Sprache auf einen gemeinsamen Vertreter abbilden. */
function vertreterTabelle(profil: SprachProfil): Record<string, string> {
  const tabelle: Record<string, string> = {};
  for (const gruppe of profil.homophone) {
    for (const zeichen of gruppe) tabelle[zeichen] = gruppe[0];
  }
  return tabelle;
}

/**
 * Diakritika abstreifen: "wǒ shì" -> "wo shi", "está" -> "esta".
 *
 * NUR beim Tippen, und nur wo das Profil es erlaubt. Fuer Schwedisch,
 * Norwegisch, Polnisch und Vietnamesisch ist es ausdruecklich verboten -
 * dort sind das eigene Buchstaben bzw. bedeutungstragende Toene, und
 * `här` zu `har` zu machen hiesse, einen Fehler durchgehen zu lassen.
 */
export function ohneDiakritika(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

/**
 * Bringt eine Aeusserung in die Form, in der verglichen wird.
 *
 * `gesprochen` entscheidet ueber die Strenge: die Erkennung liefert
 * richtige Rechtschreibung, dort wird nichts abgestreift. Getippt ist die
 * Rueckfallebene und zaehlt hoechstens als "ueberlebt" - da darf die
 * Tastatur fehlen, was sie nicht hergibt.
 */
function teile(text: string, profil: SprachProfil, gesprochen: boolean): string[] {
  let roh = text.toLowerCase().trim();
  if (!gesprochen && profil.diakritikaBeimTippenEgal) {
    roh = ohneDiakritika(roh);
  }
  if (profil.einheit === 'zeichen') {
    const vertreter = vertreterTabelle(profil);
    return [...nurInhalt(roh)].map((z) => vertreter[z] ?? z);
  }
  return roh
    .split(/[\s，。？！、,.?!·¿¡;:]+/)
    .map((w) => w.trim())
    .filter(Boolean);
}

/** Dieselben Teile, aber als eine Zeichenkette - fuer den Gesamtvergleich. */
function ganz(text: string, profil: SprachProfil, gesprochen: boolean): string {
  return teile(text, profil, gesprochen).join(profil.einheit === 'zeichen' ? '' : ' ');
}

type Eingabe = {
  /** Was gesagt bzw. getippt wurde. */
  antwort: string;
  /** Der erwartete Satz in Zeichen. */
  erwartetSchrift: string;
  /** Der erwartete Satz in Pinyin. */
  erwartetLerntext: string;
  /** Das Wort, um das es in dieser Wiederholung geht - in Zeichen. */
  slotSchrift: string;
  /** Dasselbe Wort in Pinyin. */
  slotLerntext: string;
  /** Kam die Antwort aus der Spracherkennung oder der Tastatur? */
  quelle: 'sprache' | 'text';
  /**
   * Zielsprache - entscheidet, WIE verglichen wird (sprachProfil.ts).
   * Fehlt sie, gilt das nachsichtige Latein-Profil; das ist der richtige
   * Rueckfall, weil zu strenges Urteilen den Nutzer bestraft, zu mildes
   * nur die Karte etwas zu frueh reifen laesst.
   */
  sprache?: string;
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

/** "cansado / cansada" -> ["cansado", "cansada"];  ohne Schraegstrich leer. */
function variantenVon(text: string): string[] {
  if (!text.includes('/')) return [];
  return text.split('/').map((t) => t.trim()).filter(Boolean);
}

/**
 * Ein Slot-Wort darf mehrere Formen tragen - jede davon zaehlt (2026-09-07).
 *
 * Spanisch fuehrt Genus-Paare als EIN Vokabeleintrag: "cansado / cansada",
 * "jefe / jefa", "amigo / amiga". Das ist paedagogisch richtig - man lernt
 * das Paar - aber der Bewerter verglich gegen die ganze Zeichenkette. Wer
 * "yo estoy cansado" sagte, also richtiges Spanisch, bekam "cansado /
 * cansada kam nicht vor".
 *
 * Betrifft 151 der 822 spanischen Slots (18%), also fast jede fuenfte
 * Aufgabe, und ausserdem zwei schwedische Artikelpaare ("en/ett"). Gefunden
 * beim ersten Durchspielen einer spanischen Lektion.
 *
 * Geprueft wird deshalb gegen JEDE Variante, und die beste Bewertung
 * gewinnt - dasselbe Vorgehen wie bei `bewerteFinisher`, wo es ebenfalls
 * mehrere gleich richtige Antworten gibt. Der erwartete Satz wird
 * mitgezogen, sonst passte die Variante zwar zum Slot, aber nicht mehr zum
 * Satz drumherum.
 */
export function bewerteAntwort(e: Eingabe): Bewertung {
  const lerntextVarianten = variantenVon(e.slotLerntext);
  const schriftVarianten = variantenVon(e.slotSchrift);
  // Nur wenn beide Seiten gleich viele Varianten haben, laesst sich Paar fuer
  // Paar zuordnen. Sonst lieber unveraendert bewerten als falsch raten.
  if (lerntextVarianten.length > 1 && lerntextVarianten.length === schriftVarianten.length) {
    const rang: Record<Tier, number> = { nicht_verstanden: 0, ueberlebt: 1, richtig: 2 };
    let beste: Bewertung = { tier: 'nicht_verstanden', grund: null };
    lerntextVarianten.forEach((lerntext, i) => {
      const schrift = schriftVarianten[i];
      const b = bewerteEineForm({
        ...e,
        slotLerntext: lerntext,
        slotSchrift: schrift,
        erwartetLerntext: e.erwartetLerntext.split(e.slotLerntext).join(lerntext),
        erwartetSchrift: e.erwartetSchrift.split(e.slotSchrift).join(schrift),
      });
      if (rang[b.tier] > rang[beste.tier]) beste = b;
    });
    return beste;
  }
  return bewerteEineForm(e);
}

function bewerteEineForm(e: Eingabe): Bewertung {
  const gesprochen = e.quelle === 'sprache';
  const profil = profilFuer(e.sprache ?? '');

  const antwort = ganz(e.antwort, profil, gesprochen);
  if (!antwort) return { tier: 'nicht_verstanden', grund: 'Da kam nichts an.' };

  // Gesprochen wird gegen die SCHRIFT verglichen (die Erkennung liefert
  // sie: Hanzi, Kyrillisch, lateinische Rechtschreibung), getippt gegen
  // den LERNTEXT - bei Chinesisch das Pinyin, bei Russisch die Umschrift.
  const ziel = ganz(gesprochen ? e.erwartetSchrift : e.erwartetLerntext, profil, gesprochen);
  const slot = ganz(gesprochen ? e.slotSchrift : e.slotLerntext, profil, gesprochen);

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
      grund: `„${e.slotLerntext}" kam nicht vor.`,
    };
  }

  if (enthaeltFremdes(e, profil, gesprochen)) {
    return {
      tier: 'nicht_verstanden',
      grund: 'Das Wort stimmt, aber im Satz stand etwas, das nicht dazugehört.',
    };
  }

  if (profil.reihenfolgeStreng && !inRichtigerReihenfolge(e, profil, gesprochen)) {
    return { tier: 'nicht_verstanden', grund: 'Die Wörter standen in der falschen Reihenfolge.' };
  }

  return { tier: 'ueberlebt', grund: 'Das Wort stimmt — der Satz drumherum fehlte noch.' };
}

/**
 * Steht in der Antwort Material, das im Zielsatz gar nicht vorkommt?
 *
 * Faengt den Fall ab, in dem das Slot-Wort zwar faellt, aber in einem
 * ganz anderen Satz - "wo jiao xuesheng" galt frueher als richtig, weil
 * die erwarteten Zeichen enthalten waren.
 */
function enthaeltFremdes(e: Eingabe, profil: SprachProfil, gesprochen: boolean): boolean {
  const gesagt = teile(e.antwort, profil, gesprochen);
  if (gesagt.length < 2) return false; // nicht zerlegbar - nicht raten
  const quelle = gesprochen ? e.erwartetSchrift : e.erwartetLerntext;
  const erlaubt = new Set(teile(quelle, profil, gesprochen));
  return gesagt.some((t) => !erlaubt.has(t));
}

/**
 * Kommen die gesagten Teile in derselben Ordnung wie im Zielsatz?
 *
 * Nur bei Sprachen mit fester Wortstellung (`reihenfolgeStreng`). Im
 * Chinesischen ist "xuésheng shì wǒ" kein holpriger, sondern ein falscher
 * Satz. Russisch und Polnisch markieren ihre Satzglieder dagegen ueber
 * Faelle und duerfen umstellen - dort wird gar nicht erst geprueft.
 *
 * Teilfolge-Pruefung: WENIGER sagen ist erlaubt (das ist "ueberlebt"),
 * umsortieren nicht.
 */
function inRichtigerReihenfolge(e: Eingabe, profil: SprachProfil, gesprochen: boolean): boolean {
  const gesagt = teile(e.antwort, profil, gesprochen);
  const quelle = gesprochen ? e.erwartetSchrift : e.erwartetLerntext;
  const ziel = teile(quelle, profil, gesprochen);
  if (gesagt.length < 2) return true;

  let i = 0;
  for (const teil of ziel) {
    if (i < gesagt.length && gesagt[i] === teil) i += 1;
  }
  return i === gesagt.length;
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
  moeglichkeiten: { schrift: string; lerntext: string; slotSchrift: string; slotLerntext: string }[],
  quelle: 'sprache' | 'text',
  sprache?: string
): Bewertung {
  if (moeglichkeiten.length === 0) {
    return { tier: 'nicht_verstanden', grund: 'Für diese Lektion fehlen noch Beispielsätze.' };
  }

  const rang: Record<Tier, number> = { nicht_verstanden: 0, ueberlebt: 1, richtig: 2 };
  let beste: Bewertung = { tier: 'nicht_verstanden', grund: null };

  for (const m of moeglichkeiten) {
    const b = bewerteAntwort({
      antwort,
      erwartetSchrift: m.schrift,
      erwartetLerntext: m.lerntext,
      slotSchrift: m.slotSchrift,
      slotLerntext: m.slotLerntext,
      quelle,
      sprache,
    });
    if (rang[b.tier] > rang[beste.tier]) beste = b;
    if (beste.tier === 'richtig') break;
  }

  if (beste.tier === 'nicht_verstanden' && !beste.grund) {
    beste = { tier: 'nicht_verstanden', grund: 'Das passte noch zu keinem Satz aus diesem Modul.' };
  }
  return beste;
}
