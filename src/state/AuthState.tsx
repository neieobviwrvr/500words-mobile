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
// - Google-Login: Supabase Auth OAuth-Flow ueber expo-web-browser
// - E-Mail + Passwort (2026-08-22): der einzige Weg, der OHNE externe
//   Einrichtung funktioniert. Google braucht einen OAuth-Client in der
//   Google Cloud Console, Apple ein bezahltes Developer-Konto - beides
//   haengt an Simons Konten. Solange keines davon eingerichtet ist, waere
//   ohne E-Mail ueberhaupt kein Konto erreichbar, und damit weder Kauf noch
//   Freunde noch Geraeteabgleich.
//
// Der Gastmodus bedeutet seit dem 2026-08-22 ausdruecklich WENIGER als die
// volle App (Nutzer-Entscheidung): Demo-Umfang im Pfad, kein Kauf, keine
// Freunde, kein Abgleich. Siehe data/demo.ts.
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
  /**
   * Konto anlegen. Gibt zurueck, ob noch eine Bestaetigungs-Mail aussteht.
   *
   * Das Projekt verlangt Bestaetigung (`mailer_autoconfirm` aus), es entsteht
   * also NICHT sofort eine Sitzung - der Aufrufer muss den Nutzer auf sein
   * Postfach verweisen, statt ihn fuer angemeldet zu halten.
   */
  signUpWithEmail: (email: string, passwort: string) => Promise<{ bestaetigungNoetig: boolean }>;
  signInWithEmail: (email: string, passwort: string) => Promise<void>;
  signOut: () => Promise<void>;
  /** Angemeldet mit echtem Konto - NICHT Gast. Die Bedingung fuer alles Serverseitige. */
  hatKonto: boolean;
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

  const signUpWithEmail = useCallback(async (email: string, passwort: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: passwort,
    });
    if (error) throw error;
    // Bei aktivierter Bestaetigung liefert Supabase einen Nutzer, aber KEINE
    // Sitzung. Genau daran ist der Fall zu erkennen - eine eigene Abfrage der
    // Projekteinstellungen braucht es nicht.
    if (data.session) {
      await AsyncStorage.removeItem(GUEST_FLAG_KEY);
      setIsGuest(false);
      return { bestaetigungNoetig: false };
    }
    return { bestaetigungNoetig: true };
  }, []);

  const signInWithEmail = useCallback(async (email: string, passwort: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: passwort,
    });
    if (error) throw error;
    await AsyncStorage.removeItem(GUEST_FLAG_KEY);
    setIsGuest(false);
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    await AsyncStorage.removeItem(GUEST_FLAG_KEY);
    setIsGuest(false);
  }, []);

  const value: AuthStateValue = {
    session,
    isGuest,
    loading,
    continueAsGuest,
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    signOut,
    hatKonto: !!session,
  };
  return <AuthStateContext.Provider value={value}>{children}</AuthStateContext.Provider>;
}

export function useAuthState(): AuthStateValue {
  const ctx = useContext(AuthStateContext);
  if (!ctx) throw new Error('useAuthState() muss innerhalb von <AuthStateProvider> aufgerufen werden');
  return ctx;
}
