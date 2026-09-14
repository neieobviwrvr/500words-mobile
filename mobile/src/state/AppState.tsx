import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { abgleichen as syncAbgleichen, tagebuchAbgleichen } from '../lib/sync';
import { supabase } from '../lib/supabase';
import { COIN_BETRAEGE, coinAbholen, ladeCoinBuchungen, lokalErfuellt } from '../lib/coins';
import { loadAllCards, loescheAlleKarten, saveCards } from '../features/srs/srsStorage';
import { ladeTrainingsstand, loescheTrainingsstand, schreibeTrainingsstand } from '../features/training/batchLeiter';
import { vergissTagebuch } from '../features/srs/lerntagebuch';
import { vergissBesuch } from '../features/home/zuletztBesucht';
import { useOnboardingState } from './OnboardingState';
import { useAuthState } from './AuthState';

/** Wo der Geraeteabgleich gerade steht. */
export type AbgleichStand = 'aus' | 'laeuft' | 'fertig' | 'fehlgeschlagen';

/**
 * Was ein Abgleich ergeben hat (2026-09-14).
 *
 * `gesichert`: JEDER Schreibvorgang ging durch - Einstellungen, Profil,
 * Trainingsstand, Karten, Freischaltungen, Tagebuch. Nur dann darf lokal
 * etwas geloescht werden.
 * `onboardingErledigt`: das Profil (lokal oder vom Konto) hat das Onboarding
 * hinter sich - wer sich auf einem neuen Geraet anmeldet, ueberspringt es.
 */
export type AbgleichAusgang = { gesichert: boolean; onboardingErledigt: boolean };
import { Phrase } from '../data/cheatsheetContent';
import { DEFAULT_LANGUAGE_ID } from '../data/languages';

// Globaler App-Zustand - Entsprechung zum "state"-Objekt der einen grossen
// Klassenkomponente im Claude-Design-Prototyp. Dort lief alles ueber
// internes setState() + eine screen/history-Stack-Simulation; hier laeuft
// die eigentliche Navigation echt ueber expo-router (siehe app/), dieser
// Context haelt nur noch die App-weiten Daten, die screenuebergreifend
// gebraucht werden (Warenkorb, freigeschaltete Kategorien, Favoriten,
// Cheat-Sheet-Auswahl, Darkmode-Override).
//
// Persistenz (2026-08-07, um Coins erweitert 2026-08-18):
// darkMode/targetLanguageId/purchased/saved/savedMeta/coins/coinGrants
// ueberleben einen App-Neustart via AsyncStorage - passt
// zur bereits entschiedenen "Gast-Modus = lokale Speicherung"-Architektur
// (siehe CLAUDE.md), unabhaengig vom noch nicht gebauten Supabase Auth.
// `cart` und `selectedThemes` bleiben bewusst NICHT persistiert - das sind
// transiente "gerade dabei"-Zustaende (Warenkorb vor dem Kauf, Cheat-Sheet-
// Suchauswahl), kein sinnvoller Grund, die ueber einen Neustart zu retten.

const STORAGE_KEY = 'app_state_v1';
// Coins liegen seit 2026-09-13 unter eigenem Schluessel: sie folgen nicht mehr
// dem Abgleich ueber `geaendertAm`, und eine bestaetigte Gutschrift soll die
// Einstellungen beim naechsten Abgleich nicht "juenger" machen.
const COINS_KEY = 'coins_v1';

/**
 * Coins auf dem Geraet (2026-09-13).
 *
 * Die Wahrheit liegt auf dem Server (`coin_buchung`, lib/coins.ts) - hier
 * steht nur, was die Anzeige braucht, auch offline:
 *
 * - `bestaetigt`: die zuletzt vom Server geladenen Buchungen des Kontos.
 * - `ausstehend`: Gutschriften, die das Geraet angefordert hat, deren Antwort
 *   aber noch fehlt - kein Netz, noch kein Konto (Gast, Onboarding vor der
 *   Kontofrage) oder ein Zaehler, der erst beim naechsten Abgleich hochgeht.
 *   Sie zaehlen in der Anzeige mit, damit ein Coin nicht erst Minuten spaeter
 *   erscheint. Der Server kann sie noch ablehnen, dann fallen sie weg.
 *
 * Wer spaeter Coins AUSGIBT, darf nur gegen den Serverstand pruefen - die
 * Anzeige hier ist dafuer kein Beleg.
 */
type CoinSpeicher = {
  bestaetigt: Record<string, number>;
  ausstehend: Record<string, number>;
};

export type ThemeSelection = { groupId: string; groupTitle: string; themeLabel: string; key: string };

/**
 * Was das Sperrbildschirm-Widget zeigt (Nutzer-Wunsch 2026-08-20) - alle 2
 * Stunden ein neues Wort ODER ein neuer Satz, einstellbar im Profil.
 *
 * Kein "aus": ob das Widget ueberhaupt erscheint, entscheidet der Nutzer in
 * iOS selbst, indem er es auf den Sperrbildschirm legt oder herunternimmt.
 * Ein zweiter Schalter in der App koennte dem nur widersprechen.
 */
export type LockscreenContent = 'woerter' | 'saetze';

/**
 * Die zwei Lernwege auf S1 (Nutzer-Wunsch 2026-08-20). Der Knopf im Kopf der
 * Pfad-Box schaltet zwischen ihnen um.
 *
 * - `speedrun`: Sprach-Pille und Satz-Kategorien mit ihren Situationen, in
 *   denen fertige Saetze liegen. Der Weg, den es heute gibt.
 * - `gefuehrt`: ein gefuehrter Kurs durch die Grundwoerter, in eigene
 *   Lektionen und Themen gegliedert, mit Satzmustern und Nachsprechen.
 *   Inhalt steht noch aus - siehe features/home/useGuidedCourse.ts.
 */
export type LearningMode = 'speedrun' | 'gefuehrt';

/** Beschriftungen an EINER Stelle, damit Knopf-Ansage und der Kasten
 *  "Du bist hier" nie auseinanderlaufen. */
export const LEARNING_MODE_LABEL: Record<LearningMode, string> = {
  speedrun: 'Speed-Run',
  gefuehrt: 'Geführtes Lernen',
};

type PersistedState = {
  darkMode: boolean;
  targetLanguageId: string;
  /**
   * Die O1-Auswahl "Ich spreche..." (2026-08-24 hier verankert).
   *
   * Vorher lebte dieser Wert nur kurz in OnboardingState und verschwand nach
   * dem Verlassen der Onboarding-Strecke - kein anderer Screen konnte ihn
   * je lesen. Jetzt ueberlebt er wie targetLanguageId einen Neustart.
   * Aendert (noch) NICHTS an der Oberflaeche: die ist komplett Deutsch,
   * unabhaengig von diesem Wert, und `en` ist bei O1 ohnehin deaktiviert
   * ("bald verfuegbar") - siehe CLAUDE.md. Der Wert liegt nur schon bereit,
   * falls/wenn echte Mehrsprachigkeit kommt (siehe PERSONALPRONOMEN_TEMPLATE
   * in data/personalpronomenTemplate.ts fuer ein Beispiel, das darauf wartet).
   */
  sourceLanguageId: string;
  purchased: Record<string, boolean>;
  saved: Record<string, boolean>;
  savedMeta: Record<string, Phrase>;
  /**
   * VERALTET seit 2026-09-13 - Coins stehen unter `COINS_KEY`. Beide Felder
   * werden nur noch EINMAL gelesen, um einen alten Stand zu uebernehmen:
   * die vergebenen Geschenke gehen als ausstehende Gutschriften an den
   * Server, der sie noch einmal prueft. Die alte Zahl `coins` wird verworfen,
   * sie ergibt sich jetzt aus den Buchungen.
   */
  coins?: number;
  coinGrants?: Record<string, boolean>;
  lockscreenContent: LockscreenContent;
  learningMode: LearningMode;
  /**
   * Zaehler fuer die Herausforderungen auf dem Profil (2026-08-22).
   *
   * Bewusst schlichte Summen und keine Ereignisliste: die Herausforderungen
   * fragen nur "wie viele bisher", niemand will wissen, wann. Eine Liste
   * waechst ausserdem unbegrenzt in AsyncStorage.
   *
   * `perfekteSaetze` zaehlt Antworten der Stufe "richtig" - der
   * "Ueberlebensmodus" zaehlt bewusst NICHT mit, sonst waere "perfekt"
   * dasselbe wie "irgendwie verstanden".
   *
   * `perfekteLektionen` zaehlt Kurs-Lektionen, in denen JEDE bewertete
   * Aufgabe "richtig" war. Damit umgeht die App die Luecke aus CLAUDE.md
   * (die Bewertung liefert drei Stufen, keinen Prozentwert): "ohne Fehler"
   * ist ohne Punktzahl bestimmbar, "98 Prozent" waere es nicht.
   */
  fortschritt: Fortschritt;
  /**
   * Saetze, die der Nutzer nicht lernen will (2026-08-22).
   *
   * Nutzer-Wunsch (Simon): "dass wir Saetze skippen koennen falls der Satz
   * 'Wie alt bist du' den User nicht interessiert".
   *
   * Bewusst DAUERHAFT und nicht nur fuer diese Sitzung: das Anliegen ist
   * nicht "gerade keine Lust", sondern "dieser Satz betrifft mich nicht".
   * Einer, der jedes Mal wiederkommt, waere keine Antwort darauf.
   *
   * Schluessel ist die Satz-ID in derselben Form wie ueberall sonst
   * (`sprache:tabelle:id`) - damit gilt das Ueberspringen je Sprache, was
   * richtig ist: wer "Wie alt bist du" auf Chinesisch nicht braucht, kann
   * ihn auf Schwedisch trotzdem wollen.
   */
  uebersprungen: Record<string, boolean>;
  /**
   * Wortarten-Farben in der Satz-Anzeige (Satz-Wiederholung, Cheat-Sheet) an
   * oder aus - Vorgabe `false` (2026-08-30, Simons Wunsch: "erst sehen wenn
   * man sie einschaltet"). Betrifft NUR die Satz-Anzeige, nicht die
   * Woerter-Wiederholung (dort ist die Farbe Teil der Zuordnungs-Mechanik,
   * kein reines Deko-Element, siehe WordReviewScreen.tsx - bewusst
   * unveraendert immer eingefaerbt). Unabhaengig von diesem Schalter zeigt
   * ein Hilfe-Knopf pro Satz die Farben einmalig als Tipp, siehe
   * `zeigeWortartenFarbenEinmalig` in SentenceReviewScreen.tsx/PhraseCard.tsx
   * (rein lokaler Komponenten-State, nicht hier - eine "nur diesmal"-
   * Ausnahme gehoert nicht in den persistierten Zustand).
   */
  wortartenFarben: boolean;
  /**
   * Wann dieses Geraet zuletzt etwas geaendert hat (ms seit Epoche).
   *
   * Der Schiedsrichter beim Abgleich fuer ERSETZBARE Werte - Coins,
   * Einstellungen (siehe lib/merge.ts). Muss mitgespeichert werden, sonst
   * steht er auf einem frisch eingerichteten Geraet auf "jetzt" und schlaegt
   * damit jeden Serverwert: die App holt sich ihre Daten, ueberschreibt sie
   * aber im selben Atemzug mit den leeren Vorgaben. Genau dieser Fehler ist
   * beim ersten Test aufgetreten - Coins kamen als 0 zurueck, die Zielsprache
   * als Deutsch.
   *
   * Fehlt der Wert (frische Installation), gilt 0: dann verliert das Geraet
   * jeden Vergleich, was richtig ist - es hat nichts beizutragen.
   */
  geaendertAm: number;
};

export type Fortschritt = {
  perfekteSaetze: number;
  perfekteLektionen: number;
};

const FORTSCHRITT_LEER: Fortschritt = { perfekteSaetze: 0, perfekteLektionen: 0 };

type AppStateValue = {
  darkMode: boolean;
  toggleDark: () => void;

  targetLanguageId: string;
  setTargetLanguageId: (id: string) => void;

  sourceLanguageId: string;
  setSourceLanguageId: (id: string) => void;

  purchased: Record<string, boolean>;
  cart: string[];
  toggleCartItem: (id: string) => void;
  buyCart: () => void;

  saved: Record<string, boolean>;
  savedMeta: Record<string, Phrase>;
  toggleSaved: (id: string, meta: Phrase) => void;

  selectedThemes: Record<string, ThemeSelection>;
  toggleThemeSelect: (key: string, meta: ThemeSelection) => void;
  clearSelectedThemes: () => void;

  /** Bestaetigte plus noch ausstehende Coins - zur ANZEIGE (siehe CoinSpeicher). */
  coins: number;
  /**
   * Fordert eine Gutschrift an, genau einmal pro `grantId`. Gibt zurueck, ob
   * dieser Aufruf sie ausgeloest hat - der Geschenk-Screen zeigt danach je
   * nachdem "Du bekommst einen Coin" oder nur noch den Kontostand.
   *
   * Zaehlt sofort in der Anzeige mit; gebucht wird auf dem Server, sobald ein
   * Konto und Netz da sind, und nur, wenn der Server die Bedingung selbst
   * bestaetigt. `amount` ist nur fuer die Anzeige - den Betrag legt der
   * Server fest.
   *
   * Erst aufrufen, wenn `hydrated` true ist, sonst wird gegen den leeren
   * Default-Zustand geprueft statt gegen den gespeicherten.
   */
  grantCoins: (grantId: string, amount: number) => boolean;
  /**
   * Welche Geschenke schon vergeben oder angefordert sind. Die
   * Herausforderungen lesen das, um "abholen" von "abgeholt" zu
   * unterscheiden - `grantCoins` selbst gibt das nur beim Aufruf zurueck.
   */
  coinGrants: Record<string, boolean>;

  /** Zaehlerstaende fuer die Herausforderungen. */
  fortschritt: Fortschritt;
  /** Erhoeht einen Zaehler. Erst aufrufen, wenn `hydrated` true ist. */
  zaehle: (was: keyof Fortschritt, um?: number) => void;

  /** Saetze, die der Nutzer nicht mehr sehen will. */
  uebersprungen: Record<string, boolean>;
  /** Diesen Satz nicht mehr zeigen. */
  ueberspringen: (satzId: string) => void;
  /** Alle uebersprungenen Saetze wieder zulassen. */
  ueberspringenZuruecknehmen: () => void;

  /**
   * Geraeteabgleich (2026-08-22). Nur mit Konto - Gaeste lernen rein lokal.
   * Wird vom Tab-Layout angestossen, sobald Sitzung UND lokaler Stand da
   * sind.
   */
  abgleichen: (nutzerId: string) => Promise<AbgleichAusgang>;
  abgleichStand: AbgleichStand;
  /** Wann zuletzt ALLES gesichert wurde, seit die App laeuft. `null` = noch nicht. */
  zuletztGesichert: number | null;
  /**
   * Abmelden (2026-09-14): erst sichern, dann abmelden, dann alles Lokale
   * loeschen - der Lernstand gehoert dem Konto, nicht dem Geraet. Laesst sich
   * nicht sichern, bleibt alles, wie es ist.
   */
  abmelden: () => Promise<'abgemeldet' | 'nicht_gesichert'>;

  lockscreenContent: LockscreenContent;
  setLockscreenContent: (value: LockscreenContent) => void;

  learningMode: LearningMode;
  toggleLearningMode: () => void;

  wortartenFarben: boolean;
  toggleWortartenFarben: () => void;

  /** true, sobald der gespeicherte Zustand geladen ist. */
  hydrated: boolean;
};

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [targetLanguageId, setTargetLanguageId] = useState(DEFAULT_LANGUAGE_ID);
  // 'de' als Vorgabe, dieselbe wie SourceLanguageId's Default in
  // OnboardingState.tsx - Deutsch ist die einzige heute waehlbare Option.
  const [sourceLanguageId, setSourceLanguageId] = useState('de');
  const [purchased, setPurchased] = useState<Record<string, boolean>>({});
  const [cart, setCart] = useState<string[]>([]);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [savedMeta, setSavedMeta] = useState<Record<string, Phrase>>({});
  const [selectedThemes, setSelectedThemes] = useState<Record<string, ThemeSelection>>({});
  const [fortschritt, setFortschritt] = useState<Fortschritt>(FORTSCHRITT_LEER);
  const [uebersprungen, setUebersprungen] = useState<Record<string, boolean>>({});
  const [coinSpeicher, setCoinSpeicher] = useState<CoinSpeicher>({ bestaetigt: {}, ausstehend: {} });
  // Saetze als Vorgabe, nicht Woerter: Saetze gibt es in jeder Sprache mit
  // Inhalt, eine Wortliste bisher nur fuer Schwedisch und Franzoesisch
  // (siehe data/vocabContent.ts). Die Vorgabe soll ueberall etwas anzeigen.
  const [lockscreenContent, setLockscreenContent] = useState<LockscreenContent>('saetze');
  // Speed-Run als Vorgabe: das ist der Weg, der heute echten Inhalt hat.
  const [learningMode, setLearningMode] = useState<LearningMode>('speedrun');
  // Aus als Vorgabe (2026-08-30, siehe PersistedState-Kommentar).
  const [wortartenFarben, setWortartenFarben] = useState(false);
  // Spiegel des Coin-Stands. `grantCoins` muss SOFORT wissen, ob ein
  // Geschenk schon angefordert wurde, und darf nicht auf den naechsten Render
  // warten - sonst zeigten zwei schnelle Aufrufe beide einen Coin an. (Buchen
  // koennte der Server ohnehin nur einen.)
  const coinRef = useRef<CoinSpeicher>({ bestaetigt: {}, ausstehend: {} });
  const setzeCoins = useCallback((neu: CoinSpeicher) => {
    coinRef.current = neu;
    setCoinSpeicher(neu);
  }, []);

  // Verhindert, dass der Hydrations-Ladevorgang selbst als "Aenderung"
  // sofort wieder in den Speicher zurueckgeschrieben wird, und dass vor dem
  // Laden kurz der Default-Zustand ueberschreibend gespeichert wird.
  const hydrated = useRef(false);
  // Zusaetzlich als State, weil Screens darauf REAGIEREN muessen: der
  // Coin-Screen darf sein Geschenk erst pruefen, wenn der gespeicherte Stand
  // da ist - ein Ref loest dafuer kein Neu-Rendern aus.
  const [isHydrated, setIsHydrated] = useState(false);
  // Abgleich mit dem Server (2026-08-22). `null` heisst: noch nie versucht.
  const [abgleichStand, setAbgleichStand] = useState<AbgleichStand>('aus');
  const [zuletztGesichert, setZuletztGesichert] = useState<number | null>(null);
  const { profil: onboardingProfil, uebernehmeProfil, resetOnboarding } = useOnboardingState();
  const { session, signOut } = useAuthState();
  // Zeitpunkt der letzten lokalen Aenderung - der Schiedsrichter fuer
  // ersetzbare Werte beim Verschmelzen (siehe lib/merge.ts).
  const geaendertAmRef = useRef(0);

  useEffect(() => {
    (async () => {
      try {
        const [raw, coinRaw] = await Promise.all([
          AsyncStorage.getItem(STORAGE_KEY),
          AsyncStorage.getItem(COINS_KEY),
        ]);
        if (coinRaw) {
          const c: Partial<CoinSpeicher> = JSON.parse(coinRaw);
          setzeCoins({ bestaetigt: c.bestaetigt ?? {}, ausstehend: c.ausstehend ?? {} });
        }
        if (raw) {
          const parsed: Partial<PersistedState> = JSON.parse(raw);
          if (parsed.darkMode !== undefined) setDarkMode(parsed.darkMode);
          if (parsed.targetLanguageId) setTargetLanguageId(parsed.targetLanguageId);
          if (parsed.sourceLanguageId) setSourceLanguageId(parsed.sourceLanguageId);
          if (parsed.purchased) setPurchased(parsed.purchased);
          if (parsed.saved) setSaved(parsed.saved);
          if (parsed.savedMeta) setSavedMeta(parsed.savedMeta);
          if (parsed.fortschritt) setFortschritt({ ...FORTSCHRITT_LEER, ...parsed.fortschritt });
          if (parsed.uebersprungen) setUebersprungen(parsed.uebersprungen);
          if (parsed.geaendertAm) geaendertAmRef.current = parsed.geaendertAm;
          if (parsed.lockscreenContent) setLockscreenContent(parsed.lockscreenContent);
          if (parsed.learningMode) setLearningMode(parsed.learningMode);
          if (parsed.wortartenFarben !== undefined) setWortartenFarben(parsed.wortartenFarben);
          if (!coinRaw && parsed.coinGrants) {
            // Alter Stand (vor 2026-09-13): die vergebenen Geschenke gehen
            // als Anforderung an den Server, der sie noch einmal prueft.
            // Unbekannte Schluessel (die fruehere Tagesgrenze beim Feedback,
            // Reste aus Tests) fallen weg - der Server kennt sie nicht.
            const ausstehend: Record<string, number> = {};
            for (const [grund, vergeben] of Object.entries(parsed.coinGrants)) {
              if (vergeben && COIN_BETRAEGE[grund]) ausstehend[grund] = COIN_BETRAEGE[grund];
            }
            setzeCoins({ bestaetigt: {}, ausstehend });
          }
        }
      } catch {
        // Kaputter/kein gespeicherter Zustand - einfach mit den Defaults weitermachen.
      } finally {
        hydrated.current = true;
        setIsHydrated(true);
      }
    })();
  }, []);

  // Der erste Durchlauf nach dem Laden ist KEINE Aenderung: der Effekt haengt
  // an allen Werten, die das Laden gerade gesetzt hat, und laeuft deshalb
  // einmal von selbst. Wuerde er dabei den Zeitstempel hochziehen, waere der
  // gerade geladene Stand "eben erst geaendert" - und ein frisches Geraet
  // gaebe seinen leeren Vorgabezustand als den juengeren aus.
  const ersterSchreibvorgang = useRef(true);

  useEffect(() => {
    if (!hydrated.current) return;
    if (ersterSchreibvorgang.current) ersterSchreibvorgang.current = false;
    else geaendertAmRef.current = Date.now();
    const toPersist: PersistedState = { darkMode, targetLanguageId, sourceLanguageId, purchased, saved, savedMeta, lockscreenContent, learningMode, wortartenFarben, fortschritt, uebersprungen, geaendertAm: geaendertAmRef.current };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toPersist)).catch(() => {
      // Best-effort - ein Speicherfehler soll die laufende Session nicht stoeren.
    });
  }, [darkMode, targetLanguageId, sourceLanguageId, purchased, saved, savedMeta, lockscreenContent, learningMode, wortartenFarben, fortschritt, uebersprungen]);

  // Coins getrennt speichern - ohne `geaendertAm` anzufassen (siehe COINS_KEY).
  useEffect(() => {
    if (!hydrated.current) return;
    AsyncStorage.setItem(COINS_KEY, JSON.stringify(coinSpeicher)).catch(() => {});
  }, [coinSpeicher]);

  const toggleDark = useCallback(() => setDarkMode((d) => !d), []);
  const toggleWortartenFarben = useCallback(() => setWortartenFarben((w) => !w), []);

  const toggleLearningMode = useCallback(
    () => setLearningMode((m) => (m === 'speedrun' ? 'gefuehrt' : 'speedrun')),
    []
  );

  const toggleCartItem = useCallback(
    (id: string) => {
      if (purchased[id]) return; // bereits gekauft, kein Warenkorb-Effekt
      setCart((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));
    },
    [purchased]
  );

  const buyCart = useCallback(() => {
    setPurchased((p) => {
      const next = { ...p };
      cart.forEach((id) => (next[id] = true));
      return next;
    });
    setCart([]);
  }, [cart]);

  const toggleSaved = useCallback((id: string, meta: Phrase) => {
    setSaved((s) => ({ ...s, [id]: !s[id] }));
    setSavedMeta((m) => ({ ...m, [id]: meta }));
  }, []);

  const toggleThemeSelect = useCallback((key: string, meta: ThemeSelection) => {
    setSelectedThemes((sel) => {
      const next = { ...sel };
      if (next[key]) delete next[key];
      else next[key] = meta;
      return next;
    });
  }, []);

  const clearSelectedThemes = useCallback(() => setSelectedThemes({}), []);

  // Aktueller Fortschritt fuer die Coin-Pruefung, die ausserhalb eines
  // Renders laeuft (siehe `coinsNachreichen`).
  const fortschrittRef = useRef<Fortschritt>(FORTSCHRITT_LEER);
  fortschrittRef.current = fortschritt;

  /**
   * Ausstehende Gutschriften beim Server einreichen und den Serverstand holen.
   *
   * Ohne Sitzung passiert nichts - Gaeste behalten ihre Anforderungen, bis sie
   * ein Konto haben. Wirft nie; was scheitert, wird beim naechsten Mal erneut
   * versucht.
   */
  const coinsLaeuftRef = useRef(false);
  const coinsNachreichen = useCallback(async () => {
    if (coinsLaeuftRef.current) return;
    coinsLaeuftRef.current = true;
    try {
      const { data } = await supabase.auth.getSession();
      const nutzerId = data.session?.user?.id;
      if (!nutzerId) return;

      const erledigt: string[] = [];
      for (const grund of Object.keys(coinRef.current.ausstehend)) {
        const ergebnis = await coinAbholen(grund);
        // Kein Netz oder Sitzung abgelaufen: stehen lassen.
        if (ergebnis === null || ergebnis === 'kein_konto') continue;
        // Herausforderung abgelehnt, obwohl der Zaehler hier reicht: der
        // Server hat den Zaehler noch nicht, der naechste Abgleich bringt ihn.
        if (ergebnis === 'bedingung_fehlt' && lokalErfuellt(grund, fortschrittRef.current)) continue;
        erledigt.push(grund);
      }

      const buchungen = await ladeCoinBuchungen(nutzerId);
      const ausstehend = { ...coinRef.current.ausstehend };
      for (const grund of erledigt) delete ausstehend[grund];
      if (buchungen) {
        for (const grund of Object.keys(buchungen)) delete ausstehend[grund];
      }
      setzeCoins({ bestaetigt: buchungen ?? coinRef.current.bestaetigt, ausstehend });
    } catch {
      // Beim naechsten Anlass erneut.
    } finally {
      coinsLaeuftRef.current = false;
    }
  }, [setzeCoins]);

  const grantCoins = useCallback((grantId: string, amount: number) => {
    const { bestaetigt, ausstehend } = coinRef.current;
    if (grantId in bestaetigt || grantId in ausstehend) return false;
    setzeCoins({ bestaetigt, ausstehend: { ...ausstehend, [grantId]: amount } });
    void coinsNachreichen();
    return true;
  }, [setzeCoins, coinsNachreichen]);

  // Abmelden: die Buchungen gehoeren dem Konto, nicht dem Geraet.
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((ereignis) => {
      if (ereignis === 'SIGNED_OUT') setzeCoins({ bestaetigt: {}, ausstehend: coinRef.current.ausstehend });
    });
    return () => data.subscription.unsubscribe();
  }, [setzeCoins]);

  const zaehle = useCallback((was: keyof Fortschritt, um = 1) => {
    setFortschritt((f) => ({ ...f, [was]: f[was] + um }));
  }, []);

  /**
   * Einen Abgleich anstossen.
   *
   * Bewusst hier in AppState und nicht in einem eigenen Hook: der Abgleich
   * muss den lokalen Stand LESEN und das Ergebnis wieder HINEINSCHREIBEN -
   * beides geht nur von innen. Ein Hook daneben muesste jeden Setter
   * doppeln.
   *
   * Erst wenn `hydrated` steht, sonst liefe der Abgleich gegen den leeren
   * Vorgabezustand und schriebe ihn als "lokalen Stand" hoch.
   */
  const laufenderAbgleich = useRef<Promise<AbgleichAusgang> | null>(null);
  const abgleichen = useCallback((nutzerId: string): Promise<AbgleichAusgang> => {
    if (!hydrated.current) {
      return Promise.resolve({ gesichert: false, onboardingErledigt: onboardingProfil.completed });
    }
    // Zwei gleichzeitige Durchgaenge wuerden gegeneinander schreiben: beide
    // lesen denselben Serverstand, beide verschmelzen dagegen, der zweite
    // ueberschreibt das Ergebnis des ersten. Beim Wegschalten und
    // Zurueckkehren kurz hintereinander ist das kein theoretischer Fall.
    //
    // Seit 2026-09-14 bekommt ein zweiter Aufruf den LAUFENDEN Durchgang
    // zurueck statt nichts: "Jetzt sichern" und "Abmelden" muessen wissen, ob
    // gesichert wurde, auch wenn gerade ein Abgleich im Hintergrund lief.
    if (laufenderAbgleich.current) return laufenderAbgleich.current;

    const lauf = (async (): Promise<AbgleichAusgang> => {
      setAbgleichStand('laeuft');
      const [karten, training] = await Promise.all([loadAllCards(), ladeTrainingsstand()]);
      const ergebnis = await syncAbgleichen(
        nutzerId,
        {
          fortschritt,
          einstellungen: { darkMode, targetLanguageId, sourceLanguageId, lockscreenContent, learningMode, wortartenFarben, uebersprungen },
          gemerkt: { saved, savedMeta },
          purchased,
          geaendertAm: geaendertAmRef.current,
          profil: onboardingProfil,
          training,
        },
        karten,
      );
      if (!ergebnis) {
        setAbgleichStand('fehlgeschlagen');
        return { gesichert: false, onboardingErledigt: onboardingProfil.completed };
      }

      // Ergebnis lokal nachziehen. Die Setter loesen die Speicher-Wirkung aus,
      // der Stand landet also von selbst wieder in AsyncStorage.
      //
      // Die zwei Marker MUESSEN vor den Settern stehen: React kann den
      // Speicher-Effekt schon ausgefuehrt haben, bevor das `await` darunter
      // zurueckkommt. Stuenden sie danach, haette dieser Schreibvorgang
      // `geaendertAm` bereits hochgezogen - und der gerade vom Server geholte
      // Stand gaelte als "eben hier geaendert".
      const s = ergebnis.stand;
      geaendertAmRef.current = s.geaendertAm;
      ersterSchreibvorgang.current = true;
      setFortschritt({ ...FORTSCHRITT_LEER, ...s.fortschritt } as Fortschritt);
      setPurchased(s.purchased);
      setSaved(s.gemerkt.saved);
      setSavedMeta(s.gemerkt.savedMeta as Record<string, Phrase>);
      const e = s.einstellungen as Partial<PersistedState>;
      if (e.darkMode !== undefined) setDarkMode(e.darkMode);
      if (e.targetLanguageId) setTargetLanguageId(e.targetLanguageId);
      if (e.sourceLanguageId) setSourceLanguageId(e.sourceLanguageId);
      if (e.lockscreenContent) setLockscreenContent(e.lockscreenContent);
      if (e.learningMode) setLearningMode(e.learningMode);
      if (e.wortartenFarben !== undefined) setWortartenFarben(e.wortartenFarben);
      if (e.uebersprungen) setUebersprungen(e.uebersprungen);
      // Profil aus dem Onboarding und Stufen-Zaehler (2026-09-14).
      uebernehmeProfil(s.profil);
      await schreibeTrainingsstand(s.training);
      await saveCards(ergebnis.karten);
      // Lern-Tagebuch (2026-09-14) - eigener Speicher, eigener Schreibweg,
      // siehe lib/sync.ts. Scheitert es, bleibt der uebrige Abgleich gueltig;
      // der naechste Durchgang holt es nach.
      const tagebuchGesichert = await tagebuchAbgleichen(nutzerId);
      // Coins NACH dem Abgleich: der hat gerade den Fortschritt hochgeschoben,
      // gegen den der Server Herausforderungen prueft.
      fortschrittRef.current = { ...FORTSCHRITT_LEER, ...s.fortschritt } as Fortschritt;
      await coinsNachreichen();
      const gesichert = ergebnis.gesichert && tagebuchGesichert;
      setAbgleichStand(gesichert ? 'fertig' : 'fehlgeschlagen');
      if (gesichert) setZuletztGesichert(Date.now());
      return { gesichert, onboardingErledigt: s.profil.completed || onboardingProfil.completed };
    })().catch((): AbgleichAusgang => {
      setAbgleichStand('fehlgeschlagen');
      return { gesichert: false, onboardingErledigt: onboardingProfil.completed };
    });

    laufenderAbgleich.current = lauf;
    void lauf.finally(() => {
      laufenderAbgleich.current = null;
    });
    return lauf;
  }, [coinsNachreichen, fortschritt, darkMode, targetLanguageId, sourceLanguageId, lockscreenContent, learningMode, wortartenFarben, uebersprungen, saved, savedMeta, purchased, onboardingProfil, uebernehmeProfil]);

  const abmelden = useCallback(async (): Promise<'abgemeldet' | 'nicht_gesichert'> => {
    const nutzerId = session?.user?.id;
    if (nutzerId) {
      const ausgang = await abgleichen(nutzerId);
      if (!ausgang.gesichert) return 'nicht_gesichert';
    }

    // Erst abmelden, DANN loeschen. Solange die Sitzung besteht, koennte ein
    // Abgleich im Hintergrund anlaufen und den gerade geleerten Stand mit dem
    // Server verschmelzen.
    await signOut();

    await Promise.all([
      AsyncStorage.removeItem(COINS_KEY),
      loescheAlleKarten(),
      loescheTrainingsstand(),
      vergissTagebuch(),
      vergissBesuch(),
    ]).catch(() => undefined);

    // Zurueck auf die Vorgaben eines frischen Geraets. `geaendertAm` auf 0
    // und der naechste Schreibvorgang zaehlt nicht als Aenderung - sonst
    // gaelte der leere Stand bei der naechsten Anmeldung als der juengere.
    geaendertAmRef.current = 0;
    ersterSchreibvorgang.current = true;
    setDarkMode(false);
    setTargetLanguageId(DEFAULT_LANGUAGE_ID);
    setSourceLanguageId('de');
    setPurchased({});
    setCart([]);
    setSaved({});
    setSavedMeta({});
    setSelectedThemes({});
    setFortschritt(FORTSCHRITT_LEER);
    setUebersprungen({});
    setzeCoins({ bestaetigt: {}, ausstehend: {} });
    setLockscreenContent('saetze');
    setLearningMode('speedrun');
    setWortartenFarben(false);
    setZuletztGesichert(null);
    setAbgleichStand('aus');
    // Das Onboarding auch: das Profil gehoert ebenfalls dem Konto. Danach
    // fuehrt das Tab-Layout von selbst zurueck an den Anfang.
    resetOnboarding();
    return 'abgemeldet';
  }, [session, abgleichen, signOut, setzeCoins, resetOnboarding]);

  const ueberspringen = useCallback((satzId: string) => {
    setUebersprungen((u) => ({ ...u, [satzId]: true }));
  }, []);
  const ueberspringenZuruecknehmen = useCallback(() => setUebersprungen({}), []);

  const coins = useMemo(() => {
    const { bestaetigt, ausstehend } = coinSpeicher;
    let summe = 0;
    for (const betrag of Object.values(bestaetigt)) summe += betrag;
    for (const [grund, betrag] of Object.entries(ausstehend)) if (!(grund in bestaetigt)) summe += betrag;
    return summe;
  }, [coinSpeicher]);

  const coinGrants = useMemo(() => {
    const vergeben: Record<string, boolean> = {};
    for (const grund of Object.keys(coinSpeicher.bestaetigt)) vergeben[grund] = true;
    for (const grund of Object.keys(coinSpeicher.ausstehend)) vergeben[grund] = true;
    return vergeben;
  }, [coinSpeicher]);

  const value = useMemo<AppStateValue>(
    () => ({
      darkMode,
      toggleDark,
      targetLanguageId,
      setTargetLanguageId,
      sourceLanguageId,
      setSourceLanguageId,
      purchased,
      cart,
      toggleCartItem,
      buyCart,
      saved,
      savedMeta,
      toggleSaved,
      selectedThemes,
      toggleThemeSelect,
      clearSelectedThemes,
      coins,
      grantCoins,
      coinGrants,
      fortschritt,
      zaehle,
      uebersprungen,
      ueberspringen,
      ueberspringenZuruecknehmen,
      abgleichen,
      abgleichStand,
      zuletztGesichert,
      abmelden,
      lockscreenContent,
      setLockscreenContent,
      learningMode,
      toggleLearningMode,
      wortartenFarben,
      toggleWortartenFarben,
      hydrated: isHydrated,
    }),
    [darkMode, toggleDark, targetLanguageId, sourceLanguageId, purchased, cart, toggleCartItem, buyCart, saved, savedMeta, toggleSaved, selectedThemes, toggleThemeSelect, clearSelectedThemes, coins, grantCoins, coinGrants, fortschritt, zaehle, uebersprungen, ueberspringen, ueberspringenZuruecknehmen, abgleichen, abgleichStand, zuletztGesichert, abmelden, lockscreenContent, learningMode, toggleLearningMode, wortartenFarben, toggleWortartenFarben, isHydrated]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState() muss innerhalb von <AppStateProvider> aufgerufen werden');
  return ctx;
}
