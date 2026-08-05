import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Phrase } from '../data/cheatsheetContent';

// Globaler App-Zustand - Entsprechung zum "state"-Objekt der einen grossen
// Klassenkomponente im Claude-Design-Prototyp. Dort lief alles ueber
// internes setState() + eine screen/history-Stack-Simulation; hier laeuft
// die eigentliche Navigation echt ueber expo-router (siehe app/), dieser
// Context haelt nur noch die App-weiten Daten, die screenuebergreifend
// gebraucht werden (Warenkorb, freigeschaltete Kategorien, Favoriten,
// Cheat-Sheet-Auswahl, Darkmode-Override).
//
// Bewusst noch ohne Persistenz (AsyncStorage/Supabase) - das ist der
// naechste Ausbauschritt, siehe CLAUDE.md-Backlog "Gast-Modus lokale
// Speicherung / Supabase Auth".

export type ThemeSelection = { groupId: string; groupTitle: string; themeLabel: string; key: string };

type AppStateValue = {
  darkMode: boolean;
  toggleDark: () => void;

  targetLanguage: string;

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

  srsSelected: string;
  setSrsSelected: (id: string) => void;
};

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [purchased, setPurchased] = useState<Record<string, boolean>>({});
  const [cart, setCart] = useState<string[]>([]);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [savedMeta, setSavedMeta] = useState<Record<string, Phrase>>({});
  const [selectedThemes, setSelectedThemes] = useState<Record<string, ThemeSelection>>({});
  const [srsSelected, setSrsSelected] = useState('alle');

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

  const value = useMemo<AppStateValue>(
    () => ({
      darkMode,
      toggleDark,
      targetLanguage: 'Spanisch',
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
      srsSelected,
      setSrsSelected,
    }),
    [darkMode, toggleDark, purchased, cart, toggleCartItem, buyCart, saved, savedMeta, toggleSaved, selectedThemes, toggleThemeSelect, clearSelectedThemes, srsSelected]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState() muss innerhalb von <AppStateProvider> aufgerufen werden');
  return ctx;
}
