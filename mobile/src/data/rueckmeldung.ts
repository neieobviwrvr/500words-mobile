import { supabase } from '../lib/supabase';

// Rueckmeldungen aus den Uebungen: "Satz melden", "Wort melden" und Feedback
// (2026-09-13). Ziel ist die Tabelle `rueckmeldung`
// (Migration 20260913120000) - die App darf dort nur EINREICHEN, nicht lesen.

export type RueckmeldungArt = 'satz_melden' | 'wort_melden' | 'feedback';

/**
 * Wo die Rueckmeldung herkommt - damit eine Meldung ohne Rueckfrage
 * nachvollziehbar ist ("welcher Satz war gemeint?").
 */
export type RueckmeldungKontext = {
  /** Kurzer Name des Screens, z.B. "saetze-wiederholung:stufe2". */
  screen: string;
  /** Zielsprache (id aus languages.ts). */
  sprache?: string;
  /** Tabelle, aus der der Inhalt stammt, bzw. "kurs". */
  quelle?: string;
  inhaltId?: string | number;
  /** Was auf dem Schirm stand - der Satz oder das Wort. */
  inhaltText?: string;
};

// Dieselben Grenzen wie in der Datenbank. Gekuerzt wird hier, damit ein
// ueberlanger Text nicht die ganze Rueckmeldung scheitern laesst.
const kuerze = (s: string | undefined | null, max: number) =>
  s == null ? null : s.length > max ? s.slice(0, max) : s;

export async function sendeRueckmeldung(
  art: RueckmeldungArt,
  eingabe: { grund?: string; text?: string },
  kontext: RueckmeldungKontext
): Promise<void> {
  const text = eingabe.text?.trim() || null;
  // KEIN `.select()` dahinter: die App hat auf diese Tabelle kein Leserecht,
  // und ein Insert mit Rueckgabe braeuchte eines.
  const { error } = await supabase.from('rueckmeldung').insert({
    art,
    grund: kuerze(eingabe.grund, 80),
    text: kuerze(text, 2000),
    sprache: kuerze(kontext.sprache, 10),
    quelle: kuerze(kontext.quelle, 60),
    inhalt_id: kontext.inhaltId == null ? null : kuerze(String(kontext.inhaltId), 80),
    inhalt_text: kuerze(kontext.inhaltText, 500),
    screen: kuerze(kontext.screen, 60),
  });
  if (error) throw new Error(error.message);
}

/**
 * Belohnung fuers Feedback (2026-09-13, Simon: "zusaetzlich mit Belohnung").
 *
 * EIN Coin, und das genau EINMAL je Konto (Simon: "Pro Account/Email gibt es
 * eine einzige Coinauszahlung fuer ein Feedback - man kann auch oefter
 * Feedback geben, aber Coinauszahlung nur einmal"). Zuerst war es einmal am
 * Tag. Der Schluessel ist deshalb fest; `grantCoins` vergibt je Schluessel
 * genau einmal, und der Abgleich vereinigt die Geschenke - ein zweites Geraet
 * mit demselben Konto zahlt nicht noch einmal aus. Ohne Konto gibt es keinen
 * Abgleich, dort gilt die Grenze je Geraet.
 *
 * Nur Feedback wird belohnt, Melden nicht: eine Meldung ist schnell
 * getippt, und sie soll aus dem Anlass kommen, nicht aus dem Coin.
 */
export const FEEDBACK_BELOHNUNG = 1;

export const FEEDBACK_BELOHNUNG_SCHLUESSEL = 'feedback_erstes';
