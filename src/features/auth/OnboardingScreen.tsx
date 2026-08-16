import { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAuthState } from '../../state/AuthState';
import { useAppState } from '../../state/AppState';
import { getTheme, ACCENT_BLUE } from '../../theme/tokens';

// Erster Screen vor S1 (2026-08-07) - bietet beide in CLAUDE.md
// festgelegten Wege an: Gast (rein lokale Speicherung) oder echtes Konto.
// E-Mail-Login ist serverseitig aktiv, hier aber noch ohne eigenes
// Formular (kommt als naechstes) - Apple-Login bewusst nicht gezeigt,
// solange kein bezahltes Apple-Developer-Konto existiert (siehe CLAUDE.md).

export function OnboardingScreen() {
  const { continueAsGuest, signInWithGoogle } = useAuthState();
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);
  const [busy, setBusy] = useState<'guest' | 'google' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGuest = async () => {
    setBusy('guest');
    setError(null);
    try {
      await continueAsGuest();
      router.replace('/');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(null);
    }
  };

  const handleGoogle = async () => {
    setBusy('google');
    setError(null);
    try {
      await signInWithGoogle();
      router.replace('/');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(null);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.top}>
        <Text style={[styles.title, { color: theme.text }]}>500 words</Text>
        <Text style={[styles.subtitle, { color: theme.sub }]}>
          Sprechen lernen für unterwegs - wähle, wie du starten willst.
        </Text>
      </View>

      <View style={styles.buttons}>
        {/* Waehrend busy zeigen beide Knoepfe nur einen Spinner statt Text -
            ohne festes Label haette VoiceOver dann gar nichts vorzulesen.
            Deshalb Label und busy-Zustand explizit setzen. */}
        <Pressable
          onPress={handleGoogle}
          disabled={busy !== null}
          accessibilityRole="button"
          accessibilityLabel="Mit Google anmelden"
          accessibilityState={{ disabled: busy !== null, busy: busy === 'google' }}
          style={[styles.button, styles.googleButton]}
        >
          {busy === 'google' ? <ActivityIndicator color="#fff" /> : <Text style={styles.googleButtonText}>Mit Google anmelden</Text>}
        </Pressable>

        <Pressable
          onPress={handleGuest}
          disabled={busy !== null}
          accessibilityRole="button"
          accessibilityLabel="Als Gast fortfahren"
          accessibilityHint="Fortschritt bleibt nur auf diesem Gerät"
          accessibilityState={{ disabled: busy !== null, busy: busy === 'guest' }}
          style={[styles.button, styles.guestButton, { borderColor: theme.border, backgroundColor: theme.cardBg }]}
        >
          {busy === 'guest' ? (
            <ActivityIndicator color={theme.text} />
          ) : (
            <Text style={[styles.guestButtonText, { color: theme.text }]}>Als Gast fortfahren</Text>
          )}
        </Pressable>

        <Text style={[styles.guestHint, { color: theme.sub }]}>
          Als Gast bleibt dein Fortschritt nur auf diesem Gerät gespeichert (kein Konto nötig).
        </Text>

        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'space-between' },
  top: { marginTop: 80, gap: 10 },
  title: { fontSize: 34, fontWeight: '800' },
  subtitle: { fontSize: 15, lineHeight: 21 },
  buttons: { marginBottom: 40, gap: 12 },
  button: { paddingVertical: 16, borderRadius: 100, alignItems: 'center', justifyContent: 'center' },
  googleButton: { backgroundColor: ACCENT_BLUE },
  googleButtonText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  guestButton: { borderWidth: 1.5 },
  guestButtonText: { fontWeight: '800', fontSize: 16 },
  guestHint: { fontSize: 12, textAlign: 'center', paddingHorizontal: 10 },
  error: { color: '#D9564F', fontSize: 13, textAlign: 'center', marginTop: 4 },
});
