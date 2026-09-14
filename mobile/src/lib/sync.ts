import type { Card } from 'ts-fsrs';
import { supabase } from './supabase';
import {
  mergeZaehler,
  mergeMarken,
  mergeJuengeres,
  mergeKarten,
  mergeProfil,
  mergeTraining,
  tagebuchZuSchicken,
  trainingGleich,
  zuSchicken,
  type KartenStand,
} from './merge';
import type { ProfilAngaben } from '../state/OnboardingState';
import type { Trainingsstand } from '../features/training/batchLeiter';
import {
  eintragSchluessel,
  ladeTagebuch,
  tagSchluessel,
  uebernehmeFern,
  type Lernweg,
  type Tagebuch,
} from '../features/srs/lerntagebuch';

/**
 * Abgleich zwischen Geraet und Server (2026-08-22).
 *
 * Nutzer-Vorgabe (Simon): der Nutzer soll auf einem anderen Geraet sehen,
 * welche Achievements er hat, wie viele Coins, welche Kategorien er gekauft
 * hat, auf welchem Lernstand er ist ("Spaced Repetition soll auch auf anderen
 * Geraeten perfekt funktionieren"), was er gemerkt hat.
 *
 * ============================================================ Grundsaetze
 *
 * **LOKAL BLEIBT DIE WAHRHEIT WAEHREND DES LERNENS.** Die App laeuft offline
 * weiter - Backpacker mit wackeligem Auslandstarif sind die Zielgruppe. Diese
 * Schicht gleicht ab, sie ist nicht der Arbeitsspeicher der App. Faellt der
 * Abgleich aus, merkt der Nutzer nichts ausser dem fehlenden Abgleich.
 *
 * **EIN DURCHGANG IST: ZIEHEN, VERSCHMELZEN, SCHIEBEN.** Nie nur schieben -
 * das ueberschriebe stillschweigend, was auf dem anderen Geraet passiert ist.
 * Nie nur ziehen - das verwuerfe, was hier passiert ist. Die Regeln, nach
 * denen verschmolzen wird, stehen in merge.ts und sind einzeln geprueft
 * (`npm run pruefe:merge`).
 *
 * **NIEMAND VERLIERT ETWAS.** Jede Regel ist so gewaehlt, dass ein Geraet,
 * das zwei Wochen aus war, beim Anmelden nichts loescht: Zaehler nehmen das
 * Maximum, Marken werden vereinigt, Karten gehen nach der juengeren
 * Bewertung. Der einzige Wert, bei dem der spaetere Schreibvorgang gewinnt,
 * sind die Einstellungen - und dort ist es richtig so.
 */

/**
 * Der lokale Stand, wie ihn AppState haelt.
 *
 * Coins fehlen hier seit 2026-09-13 mit Absicht: die gehen nicht mehr ueber
 * `nutzer_zustand`, das die App selbst beschreibt, sondern ueber
 * `coin_buchung`, das sie nur lesen darf (siehe lib/coins.ts).
 */
export type LokalerStand = {
  fortschritt: Record<string, number>;
  einstellungen: Record<string, unknown>;
  gemerkt: { saved: Record<string, boolean>; savedMeta: Record<string, unknown> };
  purchased: Record<string, boolean>;
  /** Wann dieses Geraet zuletzt etwas geaendert hat (ms seit Epoche). */
  geaendertAm: number;
  /** Angaben aus dem Onboarding (seit 2026-09-14), Regel siehe `mergeProfil`. */
  profil: ProfilAngaben;
  /** Stufen-Zaehler der Woerter- und Saetze-Wiederholung (seit 2026-09-14). */
  training: Trainingsstand;
};

export type AbgleichErgebnis = {
  stand: LokalerStand;
  karten: Record<string, Card>;
  /**
   * Ob JEDER Schreibvorgang durchging (2026-09-14). Supabase meldet Fehler als
   * Rueckgabewert, nicht als Ausnahme - bis dahin ging ein abgelehnter
   * Schreibvorgang still unter. Wer lokal etwas loescht (Abmelden), darf das
   * nur, wenn hier `true` steht.
   */
  gesichert: boolean;
  /** Was der Aufrufer lokal nachziehen muss - leer, wenn nichts vom Server kam. */
  veraendert: boolean;
};

function alsZeit(wert: unknown): number {
  if (!wert) return 0;
  const t = new Date(wert as string).getTime();
  return Number.isFinite(t) ? t : 0;
}

/** Karte -> Vergleichsform fuer merge.ts. */
function zuStand(karte: Card): KartenStand {
  return {
    zustand: karte,
    // Karten ohne `last_review` wurden angelegt, aber nie beantwortet. Sie
    // bekommen 0 und verlieren damit gegen jede echte Bewertung - genau
    // richtig, denn sie tragen keine Information.
    zuletztBewertet: karte.last_review ? new Date(karte.last_review).getTime() : 0,
  };
}

/**
 * Ein vollstaendiger Durchgang. Wirft nicht - ein misslungener Abgleich darf
 * die App nicht anhalten.
 */
export async function abgleichen(
  nutzerId: string,
  lokal: LokalerStand,
  lokaleKarten: Record<string, Card>,
): Promise<AbgleichErgebnis | null> {
  try {
    // --- Profil anlegen, falls es das erste Mal ist -----------------------
    await supabase
      .from('profil')
      .upsert({ id: nutzerId, zuletzt_aktiv: new Date().toISOString() }, { onConflict: 'id' });

    // --- 1. ZIEHEN --------------------------------------------------------
    const [zustandRes, freiRes, kartenRes] = await Promise.all([
      supabase.from('nutzer_zustand').select('*').eq('nutzer_id', nutzerId).maybeSingle(),
      supabase.from('freischaltung').select('kategorie').eq('nutzer_id', nutzerId),
      supabase
        .from('lernkarte')
        .select('karten_schluessel, zustand, zuletzt_bewertet')
        .eq('nutzer_id', nutzerId),
    ]);

    // Ohne vollstaendigen Serverstand wird NICHTS geschoben (2026-09-14).
    // Vorher lief der Abgleich bei einem stillen Lesefehler mit "Server leer"
    // weiter - ein frisches Geraet haette dann seine leeren Vorgaben ueber das
    // echte Profil geschrieben. Lieber einmal gar nicht abgleichen.
    if (zustandRes.error || freiRes.error || kartenRes.error) return null;

    const fern = zustandRes.data;
    const fernAm = alsZeit(fern?.aktualisiert_am);

    // --- 2. VERSCHMELZEN --------------------------------------------------
    const verschmolzen: LokalerStand = {
      fortschritt: mergeZaehler(lokal.fortschritt, fern?.fortschritt ?? {}),
      einstellungen: mergeJuengeres(
        lokal.einstellungen,
        lokal.geaendertAm,
        fern?.einstellungen ?? {},
        fernAm,
      ),
      gemerkt: {
        // Gemerkte Saetze werden VEREINIGT, nicht ersetzt: was auf einem
        // Geraet gemerkt wurde, soll auf dem anderen auftauchen. Der Preis
        // ist, dass Entfernen sich nicht ueber Geraete hinweg durchsetzt -
        // das braucht spaeter Grabsteine, aber lieber ein Satz zu viel in der
        // Liste als ein verlorener.
        saved: mergeMarken(lokal.gemerkt.saved, fern?.gemerkt?.saved ?? {}),
        savedMeta: { ...(fern?.gemerkt?.savedMeta ?? {}), ...lokal.gemerkt.savedMeta },
      },
      purchased: { ...lokal.purchased },
      geaendertAm: Date.now(),
      profil: mergeProfil(lokal.profil, fern?.profil as Partial<ProfilAngaben> | null | undefined),
      training: mergeTraining(lokal.training, (fern?.training ?? {}) as Trainingsstand),
    };
    const fernTraining = (fern?.training ?? {}) as Trainingsstand;
    let gesichert = true;

    // Freischaltungen kommen aus einer eigenen Tabelle und nur DAZU. Wegnehmen
    // darf der Abgleich nie - ein abgelaufenes Abo entfernt die Zeile
    // serverseitig, das ist ein anderer Vorgang.
    for (const zeile of freiRes.data ?? []) {
      verschmolzen.purchased[zeile.kategorie as string] = true;
    }

    const fernKarten: Record<string, KartenStand> = {};
    for (const z of kartenRes.data ?? []) {
      fernKarten[z.karten_schluessel as string] = {
        zustand: z.zustand as Card,
        zuletztBewertet: alsZeit(z.zuletzt_bewertet),
      };
    }
    const lokaleStaende: Record<string, KartenStand> = {};
    for (const [k, karte] of Object.entries(lokaleKarten)) lokaleStaende[k] = zuStand(karte);

    const kartenVerschmolzen = mergeKarten(lokaleStaende, fernKarten);
    const zuSenden = zuSchicken(lokaleStaende, fernKarten);

    // --- 3. SCHIEBEN ------------------------------------------------------
    const zustandGeschrieben = await supabase.from('nutzer_zustand').upsert(
      {
        nutzer_id: nutzerId,
        fortschritt: verschmolzen.fortschritt,
        einstellungen: verschmolzen.einstellungen,
        gemerkt: verschmolzen.gemerkt,
        profil: verschmolzen.profil,
        // Der Trainingsstand kann einige hundert KB haben - nur mitschicken,
        // wenn sich gegenueber dem Server etwas geaendert hat. Fehlt die
        // Spalte im Upsert, bleibt der Serverwert stehen.
        ...(trainingGleich(verschmolzen.training, fernTraining) ? {} : { training: verschmolzen.training }),
        aktualisiert_am: new Date().toISOString(),
      },
      { onConflict: 'nutzer_id' },
    );
    if (zustandGeschrieben.error) gesichert = false;

    const neueFreischaltungen = Object.keys(verschmolzen.purchased)
      .filter((k) => verschmolzen.purchased[k])
      .filter((k) => !(freiRes.data ?? []).some((z) => z.kategorie === k))
      .map((kategorie) => ({ nutzer_id: nutzerId, kategorie, quelle: 'abo' }));
    if (neueFreischaltungen.length > 0) {
      const frei = await supabase.from('freischaltung').upsert(neueFreischaltungen, {
        onConflict: 'nutzer_id,kategorie',
      });
      if (frei.error) gesichert = false;
    }

    if (zuSenden.length > 0) {
      // In Haeppchen: bei mehreren hundert Karten laeuft sonst die
      // URL-/Body-Grenze voll, und ein einzelner Fehlschlag verlaere den
      // ganzen Stapel.
      const GROESSE = 200;
      for (let i = 0; i < zuSenden.length; i += GROESSE) {
        const teil = zuSenden.slice(i, i + GROESSE).map((schluessel) => {
          const k = kartenVerschmolzen[schluessel];
          return {
            nutzer_id: nutzerId,
            karten_schluessel: schluessel,
            zustand: k.zustand,
            faellig_am: new Date(k.zustand.due).toISOString(),
            zuletzt_bewertet: k.zuletztBewertet ? new Date(k.zuletztBewertet).toISOString() : null,
          };
        });
        const kartenGeschrieben = await supabase.from('lernkarte').upsert(teil, {
          onConflict: 'nutzer_id,karten_schluessel',
        });
        if (kartenGeschrieben.error) gesichert = false;
      }
    }

    const karten: Record<string, Card> = {};
    for (const [k, stand] of Object.entries(kartenVerschmolzen)) {
      karten[k] = {
        ...stand.zustand,
        due: new Date(stand.zustand.due),
        last_review: stand.zustand.last_review ? new Date(stand.zustand.last_review) : undefined,
      } as Card;
    }

    return {
      stand: verschmolzen,
      karten,
      gesichert,
      // Nur wenn wirklich etwas vom Server kam, muss der Aufrufer lokal
      // nachziehen - sonst zeichnet die App bei jedem Start ohne Not neu.
      veraendert:
        !!fern ||
        (freiRes.data?.length ?? 0) > 0 ||
        Object.keys(fernKarten).length > 0,
    };
  } catch {
    // Kein Netz, abgelaufene Sitzung, Serverfehler - alles kein Grund, die
    // App anzuhalten. Beim naechsten Start wird es erneut versucht.
    return null;
  }
}

/**
 * Wie weit der Tagebuch-Abgleich zurueckreicht, in Tagen.
 *
 * Holen und Schicken benutzen DASSELBE Fenster: was aelter ist, kennt die
 * geholte Liste nicht - schickte man es trotzdem, ginge es bei jedem Abgleich
 * erneut hinaus. Gut ein Jahr reicht fuer Verlauf, Tempo und eine Streak; die
 * Anfrage bleibt unter PostgRESTs 1000-Zeilen-Grenze, solange jemand nicht
 * mehr als eine Sprache in beiden Lernwegen jeden Tag lernt.
 */
const TAGEBUCH_FENSTER_TAGE = 400;
/** Hoechstens so viele Zeilen je Aufruf - dieselbe Grenze prueft die Funktion. */
const TAGEBUCH_JE_AUFRUF = 500;

/**
 * Das Lern-Tagebuch mit dem Server abgleichen (2026-09-14).
 *
 * Ziehen, verschmelzen, schieben - wie der Rest des Abgleichs, nur mit
 * eigener Tabelle (`lernaktivitaet`) und eigenem Schreibweg: die App darf die
 * Tabelle nur LESEN, geschrieben wird ueber `tagebuch_abgleichen`, das je
 * Zaehler das Groessere behaelt. Ein Geraet mit altem Stand kann auf dem
 * Server also nichts verkleinern, auch wenn es sich hier verrechnen sollte.
 *
 * Eigene Funktion statt Teil von `abgleichen`: das Tagebuch hat seinen eigenen
 * Speicher mit eigener Schreibkette (lerntagebuch.ts), und ein Fehler hier
 * soll den Abgleich von Karten und Einstellungen nicht mitreissen. Wirft nie;
 * `false` heisst, der naechste Abgleich versucht es wieder.
 */
export async function tagebuchAbgleichen(nutzerId: string): Promise<boolean> {
  try {
    const seit = tagSchluessel(new Date(Date.now() - TAGEBUCH_FENSTER_TAGE * 24 * 60 * 60 * 1000));
    const { data, error } = await supabase
      .from('lernaktivitaet')
      .select('tag, sprache, weg, richtig, ueberlebt, nicht_verstanden, lektionen')
      .eq('nutzer_id', nutzerId)
      .gte('tag', seit)
      .limit(1000);
    if (error) return false;

    const fern: Tagebuch = {};
    for (const z of data ?? []) {
      const tag = z.tag as string;
      (fern[tag] ??= {})[eintragSchluessel(z.sprache as string, z.weg as Lernweg)] = {
        richtig: Number(z.richtig) || 0,
        ueberlebt: Number(z.ueberlebt) || 0,
        nichtVerstanden: Number(z.nicht_verstanden) || 0,
        lektionen: Number(z.lektionen) || 0,
      };
    }

    // Erst lesen, was zu schicken ist, dann den Serverstand hineinnehmen - in
    // dieser Reihenfolge, weil danach lokal schon alles "gleich" aussaehe.
    const lokal = await ladeTagebuch();
    const zuSenden = tagebuchZuSchicken(lokal, fern, seit);
    await uebernehmeFern(fern);

    for (let i = 0; i < zuSenden.length; i += TAGEBUCH_JE_AUFRUF) {
      const teil = zuSenden.slice(i, i + TAGEBUCH_JE_AUFRUF).map((z) => ({
        tag: z.tag,
        sprache: z.sprache,
        weg: z.weg,
        richtig: z.richtig,
        ueberlebt: z.ueberlebt,
        nicht_verstanden: z.nichtVerstanden,
        lektionen: z.lektionen,
      }));
      const { error: fehler } = await supabase.rpc('tagebuch_abgleichen', { p_zeilen: teil });
      if (fehler) return false;
    }
    return true;
  } catch {
    return false;
  }
}
