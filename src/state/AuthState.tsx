import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

// Auth-Zustand (2026-08-07) - getrennt von AppState.tsx, weil Auth ein
// eigener Lebenszyklus ist (Session laden/erneuern/abmelden), nicht
// App-Feature-Zustand wie Warenkorb/Favoriten. Deckt zwei Wege ab (siehe
// CLAUDE.md-Architekturentscheidung "Gast-Modus = lokale Speicherung,
// registrierte Nutzer = Supabase Auth"):
// - Gast-Modus: reine lokale Markierung (AsyncStorage-Flag), keine echte
//   Anmeldung, App bleibt voll nutzbar
// - Google-Login: Supabase Auth OAuth-Flow ueber expo-web-browser (E-Mail-
//   Login und Apple-Login sind serverseitig vorbereitet, hier aber noch
//   NICHT verdrahtet - Apple braucht ein bezahltes Developer-Konto, siehe
//   CLAUDE.md)
//
// WICHTIG fuer die Einrichtung: der Google-OAuth-Client muss in der Google
// Cloud Console angelegt und die Client-ID/-Secret in Supabase (Dashboard
// -> Authentication -> Providers -> Google) eingetragen werden, bevor
// signInWithGoogle() wirklich funktioniert - beides Schritte, die an einen
// Account gebunden sind und daher vom Nutzer selbst gemacht werden muessen.

WebBrowser.maybeCompleteAuthSession();

const GUEST_FLAG_KEY = 'auth_guest_mode_v1';

type AuthStateValue = {
  session: Session | null;
  isGuest: boolean;
  loading: boolean; // true waehrend die erste Session/Gast-Pruefung laeuft
  continueAsGuest: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthStateContext = createContext<AuthStateValue | null>(null);

export function AuthStateProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [{ data }, guestFlag] = await Promise.all([
        supabase.auth.getSession(),
        AsyncStorage.getItem(GUEST_FLAG_KEY),
      ]);
      setSession(data.session);
      setIsGuest(guestFlag === 'true');
      setLoading(false);
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const continueAsGuest = useCallback(async () => {
    await AsyncStorage.setItem(GUEST_FLAG_KEY, 'true');
    setIsGuest(true);
  }, []);

  const signInWithGoogle = useCallback(async () => {
    // words500://auth-callback (siehe app.json "scheme") - Supabase leitet
    // nach dem Google-Login-Flow im Browser hierher zurueck.
    const redirectTo = Linking.createURL('/auth-callback');
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo, skipBrowserRedirect: true },
    });
    if (error) throw error;
    if (!data?.url) throw new Error('Keine OAuth-URL von Supabase erhalten.');

    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);
    if (result.type !== 'success' || !('url' in result) || !result.url) {
      throw new Error('Anmeldung abgebrochen.');
    }

    // Supabase haengt die Tokens als URL-Fragment an (#access_token=...),
    // nicht als Query-String - fuer URLSearchParams das # durch ? ersetzen.
    const fragment = result.url.split('#')[1] ?? '';
    const params = new URLSearchParams(fragment);
    const access_token = params.get('access_token');
    const refresh_token = params.get('refresh_token');
    if (!access_token || !refresh_token) {
      throw new Error('Keine Tokens in der Google-Antwort gefunden.');
    }

    const { error: sessionError } = await supabase.auth.setSession({ access_token, refresh_token });
    if (sessionError) throw sessionError;

    // Ab jetzt echt angemeldet statt Gast - Flag zuruecksetzen, falls vorher gesetzt.
    await AsyncStorage.removeItem(GUEST_FLAG_KEY);
    setIsGuest(false);
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    await AsyncStorage.removeItem(GUEST_FLAG_KEY);
    setIsGuest(false);
  }, []);

  const value: AuthStateValue = { session, isGuest, loading, continueAsGuest, signInWithGoogle, signOut };
  return <AuthStateContext.Provider value={value}>{children}</AuthStateContext.Provider>;
}

export function useAuthState(): AuthStateValue {
  const ctx = useContext(AuthStateContext);
  if (!ctx) throw new Error('useAuthState() muss innerhalb von <AuthStateProvider> aufgerufen werden');
  return ctx;
}
