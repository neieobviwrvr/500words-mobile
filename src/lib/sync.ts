import type { Card } from 'ts-fsrs';
import { supabase } from './supabase';
import { mergeZaehler, mergeMarken, mergeJuengeres, mergeKarten, zuSchicken, type KartenStand } from './merge';

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

/** Der lokale Stand, wie ihn AppState haelt. */
export type LokalerStand = {
  coins: number;
  coinGrants: Record<string, boolean>;
  fortschritt: Record<string, number>;
  einstellungen: Record<string, unknown>;
  gemerkt: { saved: Record<string, boolean>; savedMeta: Record<string, unknown> };
  purchased: Record<string, boolean>;
  /** Wann dieses Geraet zuletzt etwas geaendert hat (ms seit Epoche). */
  geaendertAm: number;
};

export type AbgleichErgebnis = {
  stand: LokalerStand;
  karten: Record<string, Card>;
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

    const fern = zustandRes.data;
    const fernAm = alsZeit(fern?.aktualisiert_am);

    // --- 2. VERSCHMELZEN --------------------------------------------------
    const verschmolzen: LokalerStand = {
      // Coins sind ERSETZBAR, nicht monoton: sobald man sie ausgeben kann,
      // waere "das Groessere gewinnt" ein Weg, jede Ausgabe rueckgaengig zu
      // machen. Heute gibt es noch nichts zu kaufen, aber die Regel jetzt
      // richtig zu haben kostet nichts.
      coins: mergeJuengeres(lokal.coins, lokal.geaendertAm, fern?.coins ?? 0, fernAm),
      coinGrants: mergeMarken(lokal.coinGrants, fern?.coin_grants ?? {}),
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
    };

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
    await supabase.from('nutzer_zustand').upsert(
      {
        nutzer_id: nutzerId,
        coins: verschmolzen.coins,
        coin_grants: verschmolzen.coinGrants,
        fortschritt: verschmolzen.fortschritt,
        einstellungen: verschmolzen.einstellungen,
        gemerkt: verschmolzen.gemerkt,
        aktualisiert_am: new Date().toISOString(),
      },
      { onConflict: 'nutzer_id' },
    );

    const neueFreischaltungen = Object.keys(verschmolzen.purchased)
      .filter((k) => verschmolzen.purchased[k])
      .filter((k) => !(freiRes.data ?? []).some((z) => z.kategorie === k))
      .map((kategorie) => ({ nutzer_id: nutzerId, kategorie, quelle: 'abo' }));
    if (neueFreischaltungen.length > 0) {
      await supabase.from('freischaltung').upsert(neueFreischaltungen, {
        onConflict: 'nutzer_id,kategorie',
      });
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
        await supabase.from('lernkarte').upsert(teil, {
          onConflict: 'nutzer_id,karten_schluessel',
        });
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
