import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Antworten aus der Onboarding-Strecke O1-O12.
//
// Bewusst ein eigener Context neben AppState: Das hier sind einmalige
// Angaben ueber die Person (Name, Alter, Ziele), waehrend AppState den
// laufenden App-Zustand haelt (Warenkorb, Favoriten, Darkmode). Gleiches
// Speichermuster wie dort - einmal beim Start laden, bei jeder Aenderung
// zurueckschreiben.
//
// Die ZIELSPRACHE liegt absichtlich NICHT hier, sondern bleibt in AppState
// (`targetLanguageId`). Sie ist nach dem Onboarding weiter aenderbar (Dropdown
// auf dem Homescreen) und haette sonst zwei Quellen.

const STORAGE_KEY = 'onboarding_state_v1';

/** Ausgangssprache: die Sprache, in der die App mit dem Nutzer spricht. */
export type SourceLanguageId = 'de' | 'en';

export type AgeBracket = 'unter18' | '18-24' | '25-29' | '30-39' | '40plus';

export type Gender = 'weiblich' | 'maennlich' | 'divers' | 'keine_angabe';

/** Wen der Nutzer ansprechen koennen will - steuert die Satzvarianten. */
export type Addressing = 'frauen' | 'maenner' | 'alle' | 'spaeter';

type PersistedState = {
  sourceLanguageId: SourceLanguageId;
  // Mehrfachauswahl mit Obergrenze (siehe MAX_OCCASIONS) - jemand kann
  // gleichzeitig ein Auslandssemester machen UND jemanden kennengelernt
  // haben. Die Obergrenze haelt die Auswahl trotzdem aussagekraeftig.
  occasions: string[];
  goals: string[];
  name: string;
  gender: Gender | null;
  addressing: Addressing | null;
  ageBracket: AgeBracket | null;
  referralSource: string | null;
  /**
   * Gewaehlte Begleitfigur (siehe data/mascots.ts). `null` heisst „nicht
   * gewaehlt" und ist ein gueltiger Zustand - die Figur bleibt dann ueberall
   * unsichtbar, ohne dass irgendwo eine Luecke entsteht.
   */
  mascotId: string | null;
  /**
   * Zeitpunkt des letzten Besuchs, fuer die Begruessung nach einer Pause.
   */
  lastActiveAt: number | null;
  completed: boolean;
};

/** Wie viele Anlaesse gleichzeitig gewaehlt werden duerfen (O2, Stufe 1). */
export const MAX_OCCASIONS = 3;

const DEFAULTS: PersistedState = {
  sourceLanguageId: 'de',
  occasions: [],
  goals: [],
  name: '',
  gender: null,
  addressing: null,
  ageBracket: null,
  referralSource: null,
  mascotId: null,
  lastActiveAt: null,
  completed: false,
};

type OnboardingStateValue = PersistedState & {
  /** Solange true, ist der gespeicherte Stand noch nicht geladen. */
  loading: boolean;

  setSourceLanguageId: (id: SourceLanguageId) => void;
  /**
   * Waehlt einen Anlass an oder ab. Ist die Obergrenze erreicht, bleibt ein
   * weiterer Anwahl-Versuch wirkungslos - Abwaehlen geht immer.
   */
  toggleOccasion: (id: string) => void;
  toggleGoal: (id: string) => void;
  setName: (name: string) => void;
  setGender: (g: Gender) => void;
  setAddressing: (a: Addressing) => void;
  setAgeBracket: (a: AgeBracket) => void;
  setReferralSource: (s: string) => void;
  setMascotId: (id: string) => void;
  /** Merkt den aktuellen Besuch und liefert die Tage seit dem letzten. */
  markActive: () => number | null;

  /** Markiert die Strecke als erledigt - danach faellt das Auth-Gate weg. */
  completeOnboarding: () => void;
  /** Setzt alles zurueck, damit die Strecke erneut durchlaufen werden kann. */
  resetOnboarding: () => void;
};

const OnboardingStateContext = createContext<OnboardingStateValue | null>(null);

export function OnboardingStateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PersistedState>(DEFAULTS);
  const [loading, setLoading] = useState(true);

  // Gleiche Absicherung wie in AppState: der Ladevorgang selbst darf nicht
  // sofort als Aenderung zurueckgeschrieben werden.
  const hydrated = useRef(false);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed: Partial<PersistedState> = JSON.parse(raw);
          setState((s) => ({ ...s, ...parsed }));
        }
      } catch {
        // Kaputter/kein gespeicherter Stand - mit den Defaults weitermachen.
      } finally {
        hydrated.current = true;
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state)).catch(() => {
      // Best-effort - ein Speicherfehler soll die laufende Session nicht stoeren.
    });
  }, [state]);

  const patch = useCallback((p: Partial<PersistedState>) => {
    setState((s) => ({ ...s, ...p }));
  }, []);

  const toggleOccasion = useCallback((id: string) => {
    setState((s) => {
      if (s.occasions.includes(id)) {
        return { ...s, occasions: s.occasions.filter((o) => o !== id) };
      }
      // Obergrenze erreicht: Auswahl unveraendert lassen, statt still die
      // aelteste zu verdraengen - sonst verschwindet fuer den Nutzer
      // unerklaerlich ein Haken an anderer Stelle.
      if (s.occasions.length >= MAX_OCCASIONS) return s;
      return { ...s, occasions: [...s.occasions, id] };
    });
  }, []);

  const toggleGoal = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      goals: s.goals.includes(id) ? s.goals.filter((g) => g !== id) : [...s.goals, id],
    }));
  }, []);

  // Merkt den aktuellen Besuch und meldet zurueck, wie viele ganze Tage
  // seit dem letzten vergangen sind (null beim allerersten Mal). Der
  // Rueckgabewert dient nur der Begruessung - bewusst KEIN Zaehler fuer
  // verpasste Tage, es soll niemand ein schlechtes Gewissen bekommen.
  const markActive = useCallback(() => {
    const now = Date.now();
    const previous = state.lastActiveAt;
    patch({ lastActiveAt: now });
    if (previous === null) return null;
    return Math.floor((now - previous) / (1000 * 60 * 60 * 24));
  }, [state.lastActiveAt, patch]);

  const resetOnboarding = useCallback(() => {
    hydrated.current = true;
    setState(DEFAULTS);
  }, []);

  const value = useMemo<OnboardingStateValue>(
    () => ({
      ...state,
      loading,
      setSourceLanguageId: (sourceLanguageId) => patch({ sourceLanguageId }),
      toggleOccasion,
      toggleGoal,
      setName: (name) => patch({ name }),
      setGender: (gender) => patch({ gender }),
      setAddressing: (addressing) => patch({ addressing }),
      setAgeBracket: (ageBracket) => patch({ ageBracket }),
      setReferralSource: (referralSource) => patch({ referralSource }),
      setMascotId: (mascotId) => patch({ mascotId }),
      markActive,
      completeOnboarding: () => patch({ completed: true }),
      resetOnboarding,
    }),
    [state, loading, patch, toggleOccasion, toggleGoal, markActive, resetOnboarding]
  );

  return <OnboardingStateContext.Provider value={value}>{children}</OnboardingStateContext.Provider>;
}

export function useOnboardingState(): OnboardingStateValue {
  const ctx = useContext(OnboardingStateContext);
  if (!ctx) throw new Error('useOnboardingState() muss innerhalb von <OnboardingStateProvider> aufgerufen werden');
  return ctx;
}
