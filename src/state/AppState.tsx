import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { abgleichen as syncAbgleichen } from '../lib/sync';
import { loadAllCards, saveCards } from '../features/srs/srsStorage';

/** Wo der Geraeteabgleich gerade steht. */
export type AbgleichStand = 'aus' | 'laeuft' | 'fertig' | 'fehlgeschlagen';
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
  coins: number;
  /**
   * Welche einmaligen Geschenke schon vergeben wurden - Schluessel wie
   * "onboarding_lektion". Ohne das gaebe es bei jedem Betreten des
   * Geschenk-Screens einen weiteren Coin.
   */
  coinGrants: Record<string, boolean>;
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

  coins: number;
  /**
   * Vergibt Coins genau einmal pro `grantId`. Gibt zurueck, ob dieser Aufruf
   * die Gutschrift ausgeloest hat - der Geschenk-Screen zeigt danach je
   * nachdem "Du bekommst einen Coin" oder nur noch den Kontostand.
   *
   * Erst aufrufen, wenn `hydrated` true ist, sonst wird gegen den leeren
   * Default-Zustand geprueft statt gegen den gespeicherten.
   */
  grantCoins: (grantId: string, amount: number) => boolean;
  /**
   * Welche Geschenke schon vergeben sind. Die Herausforderungen lesen das,
   * um "abholen" von "abgeholt" zu unterscheiden - `grantCoins` selbst gibt
   * das nur beim Aufruf zurueck, nicht beim Zeichnen.
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
  abgleichen: (nutzerId: string) => Promise<void>;
  abgleichStand: AbgleichStand;

  lockscreenContent: LockscreenContent;
  setLockscreenContent: (value: LockscreenContent) => void;

  learningMode: LearningMode;
  toggleLearningMode: () => void;

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
  const [coins, setCoins] = useState(0);
  const [fortschritt, setFortschritt] = useState<Fortschritt>(FORTSCHRITT_LEER);
  const [uebersprungen, setUebersprungen] = useState<Record<string, boolean>>({});
  const [coinGrants, setCoinGrants] = useState<Record<string, boolean>>({});
  // Saetze als Vorgabe, nicht Woerter: Saetze gibt es in jeder Sprache mit
  // Inhalt, eine Wortliste bisher nur fuer Schwedisch und Franzoesisch
  // (siehe data/vocabContent.ts). Die Vorgabe soll ueberall etwas anzeigen.
  const [lockscreenContent, setLockscreenContent] = useState<LockscreenContent>('saetze');
  // Speed-Run als Vorgabe: das ist der Weg, der heute echten Inhalt hat.
  const [learningMode, setLearningMode] = useState<LearningMode>('speedrun');
  // Spiegel der vergebenen Geschenke. `grantCoins` muss SOFORT wissen, ob ein
  // Geschenk schon vergeben wurde, und darf nicht auf den naechsten Render
  // warten - sonst wuerden zwei schnelle Aufrufe beide gutschreiben.
  const coinGrantsRef = useRef<Record<string, boolean>>({});

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
  // Zeitpunkt der letzten lokalen Aenderung - der Schiedsrichter fuer
  // ersetzbare Werte beim Verschmelzen (siehe lib/merge.ts).
  const geaendertAmRef = useRef(0);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed: Partial<PersistedState> = JSON.parse(raw);
          if (parsed.darkMode !== undefined) setDarkMode(parsed.darkMode);
          if (parsed.targetLanguageId) setTargetLanguageId(parsed.targetLanguageId);
          if (parsed.sourceLanguageId) setSourceLanguageId(parsed.sourceLanguageId);
          if (parsed.purchased) setPurchased(parsed.purchased);
          if (parsed.saved) setSaved(parsed.saved);
          if (parsed.savedMeta) setSavedMeta(parsed.savedMeta);
          if (parsed.coins !== undefined) setCoins(parsed.coins);
          if (parsed.fortschritt) setFortschritt({ ...FORTSCHRITT_LEER, ...parsed.fortschritt });
          if (parsed.uebersprungen) setUebersprungen(parsed.uebersprungen);
          if (parsed.geaendertAm) geaendertAmRef.current = parsed.geaendertAm;
          if (parsed.lockscreenContent) setLockscreenContent(parsed.lockscreenContent);
          if (parsed.learningMode) setLearningMode(parsed.learningMode);
          if (parsed.coinGrants) {
            setCoinGrants(parsed.coinGrants);
            // Auch den Spiegel setzen, nicht erst ueber den Render-Umweg -
            // sonst koennte ein frueher Aufruf ein schon vergebenes
            // Geschenk ein zweites Mal gutschreiben.
            coinGrantsRef.current = parsed.coinGrants;
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
    const toPersist: PersistedState = { darkMode, targetLanguageId, sourceLanguageId, purchased, saved, savedMeta, coins, coinGrants, lockscreenContent, learningMode, fortschritt, uebersprungen, geaendertAm: geaendertAmRef.current };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toPersist)).catch(() => {
      // Best-effort - ein Speicherfehler soll die laufende Session nicht stoeren.
    });
  }, [darkMode, targetLanguageId, sourceLanguageId, purchased, saved, savedMeta, coins, coinGrants, lockscreenContent, learningMode, fortschritt, uebersprungen]);

  const toggleDark = useCallback(() => setDarkMode((d) => !d), []);

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

  const grantCoins = useCallback((grantId: string, amount: number) => {
    if (coinGrantsRef.current[grantId]) return false;
    coinGrantsRef.current = { ...coinGrantsRef.current, [grantId]: true };
    setCoinGrants(coinGrantsRef.current);
    setCoins((c) => c + amount);
    return true;
  }, []);

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
  const laeuftRef = useRef(false);
  const abgleichen = useCallback(async (nutzerId: string) => {
    if (!hydrated.current) return;
    // Zwei gleichzeitige Durchgaenge wuerden gegeneinander schreiben: beide
    // lesen denselben Serverstand, beide verschmelzen dagegen, der zweite
    // ueberschreibt das Ergebnis des ersten. Beim Wegschalten und
    // Zurueckkehren kurz hintereinander ist das kein theoretischer Fall.
    if (laeuftRef.current) return;
    laeuftRef.current = true;
    setAbgleichStand('laeuft');
    const karten = await loadAllCards();
    const ergebnis = await syncAbgleichen(
      nutzerId,
      {
        coins,
        coinGrants: coinGrantsRef.current,
        fortschritt,
        einstellungen: { darkMode, targetLanguageId, sourceLanguageId, lockscreenContent, learningMode, uebersprungen },
        gemerkt: { saved, savedMeta },
        purchased,
        geaendertAm: geaendertAmRef.current,
      },
      karten,
    );
    if (!ergebnis) {
      laeuftRef.current = false;
      setAbgleichStand('fehlgeschlagen');
      return;
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
    setCoins(s.coins);
    coinGrantsRef.current = s.coinGrants;
    setCoinGrants(s.coinGrants);
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
    if (e.uebersprungen) setUebersprungen(e.uebersprungen);
    await saveCards(ergebnis.karten);
    laeuftRef.current = false;
    setAbgleichStand('fertig');
  }, [coins, fortschritt, darkMode, targetLanguageId, sourceLanguageId, lockscreenContent, learningMode, uebersprungen, saved, savedMeta, purchased]);

  const ueberspringen = useCallback((satzId: string) => {
    setUebersprungen((u) => ({ ...u, [satzId]: true }));
  }, []);
  const ueberspringenZuruecknehmen = useCallback(() => setUebersprungen({}), []);

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
      lockscreenContent,
      setLockscreenContent,
      learningMode,
      toggleLearningMode,
      hydrated: isHydrated,
    }),
    [darkMode, toggleDark, targetLanguageId, sourceLanguageId, purchased, cart, toggleCartItem, buyCart, saved, savedMeta, toggleSaved, selectedThemes, toggleThemeSelect, clearSelectedThemes, coins, grantCoins, coinGrants, fortschritt, zaehle, uebersprungen, ueberspringen, ueberspringenZuruecknehmen, abgleichen, abgleichStand, lockscreenContent, learningMode, toggleLearningMode, isHydrated]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState() muss innerhalb von <AppStateProvider> aufgerufen werden');
  return ctx;
}
