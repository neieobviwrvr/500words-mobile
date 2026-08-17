import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

type PersistedState = {
  darkMode: boolean;
  targetLanguageId: string;
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
};

type AppStateValue = {
  darkMode: boolean;
  toggleDark: () => void;

  targetLanguageId: string;
  setTargetLanguageId: (id: string) => void;

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

  /** true, sobald der gespeicherte Zustand geladen ist. */
  hydrated: boolean;
};

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [targetLanguageId, setTargetLanguageId] = useState(DEFAULT_LANGUAGE_ID);
  const [purchased, setPurchased] = useState<Record<string, boolean>>({});
  const [cart, setCart] = useState<string[]>([]);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [savedMeta, setSavedMeta] = useState<Record<string, Phrase>>({});
  const [selectedThemes, setSelectedThemes] = useState<Record<string, ThemeSelection>>({});
  const [coins, setCoins] = useState(0);
  const [coinGrants, setCoinGrants] = useState<Record<string, boolean>>({});
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

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed: Partial<PersistedState> = JSON.parse(raw);
          if (parsed.darkMode !== undefined) setDarkMode(parsed.darkMode);
          if (parsed.targetLanguageId) setTargetLanguageId(parsed.targetLanguageId);
          if (parsed.purchased) setPurchased(parsed.purchased);
          if (parsed.saved) setSaved(parsed.saved);
          if (parsed.savedMeta) setSavedMeta(parsed.savedMeta);
          if (parsed.coins !== undefined) setCoins(parsed.coins);
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

  useEffect(() => {
    if (!hydrated.current) return;
    const toPersist: PersistedState = { darkMode, targetLanguageId, purchased, saved, savedMeta, coins, coinGrants };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toPersist)).catch(() => {
      // Best-effort - ein Speicherfehler soll die laufende Session nicht stoeren.
    });
  }, [darkMode, targetLanguageId, purchased, saved, savedMeta, coins, coinGrants]);

  const toggleDark = useCallback(() => setDarkMode((d) => !d), []);

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

  const value = useMemo<AppStateValue>(
    () => ({
      darkMode,
      toggleDark,
      targetLanguageId,
      setTargetLanguageId,
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
      hydrated: isHydrated,
    }),
    [darkMode, toggleDark, targetLanguageId, purchased, cart, toggleCartItem, buyCart, saved, savedMeta, toggleSaved, selectedThemes, toggleThemeSelect, clearSelectedThemes, coins, grantCoins, isHydrated]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState() muss innerhalb von <AppStateProvider> aufgerufen werden');
  return ctx;
}
