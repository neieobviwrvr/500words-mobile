import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppStateProvider, useAppState } from '../src/state/AppState';
import { AuthStateProvider } from '../src/state/AuthState';
import { OnboardingStateProvider } from '../src/state/OnboardingState';
import { getTheme, ACCENT_ORANGE } from '../src/theme/tokens';

// Alle echten Screens (S1-S6) zeichnen ihren eigenen Header (Zurueck-Pfeil,
// Titel) passend zum Claude-Design-Prototyp - der native expo-router-Header
// ist deshalb global aus. dev-tools kommt unveraendert aus der alten
// App.tsx und hat keinen eigenen Header, bekommt den nativen Header daher
// weiterhin gezeigt.
//
// Aufbau seit 2026-08-20: FAST ALLES liegt in der Gruppe `(tabs)`, damit die
// Tab-Leiste auf jedem Screen sichtbar bleibt (Nutzer-Wunsch). Bis dahin
// lagen Uebung, Shop, Kategorie-Detail, SRS und die Cheat-Sheet-Unterseiten
// hier als Stack-Screens und verdeckten die Leiste.
//
// Hier bleiben nur die beiden Strecken, die bewusst OHNE Tab-Leiste laufen:
// das Onboarding (dort gibt es noch keine App-Navigation) und die Dev-Tools.
// Der Startscreen liegt unter `(tabs)/index.tsx`, das Auth-Gate in
// `(tabs)/_layout.tsx`.
//
// AuthStateProvider aussen um AppStateProvider (2026-08-07) - Auth ist die
// grundlegendere Ebene (wer bin ich), App-Zustand (Warenkorb etc.) haengt
// nicht von Auth ab und bleibt bewusst unabhaengig lesbar/schreibbar.
// SafeAreaProvider (2026-08-17) fuer die Onboarding-Strecke: deren Kopfzeile
// (Zurueck + Fortschrittsbalken) sitzt direkt unter der Statusleiste und
// braucht die echten Geraete-Raender. OnboardingStateProvider haelt die
// Antworten aus O1-O12 - innerhalb von AppState, weil die Sprachwahl auf O1
// direkt in AppState schreibt.

// Eigene Komponente, weil sie useAppState() braucht und deshalb INNERHALB
// des Providers stehen muss.
function RootStack() {
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);

  // React Navigation bringt ein eigenes Theme mit, dessen Untergrund
  // (#F2F2F2) hinter jedem Screen liegt. Das ist NICHT dasselbe wie
  // `contentStyle` weiter unten: das faerbt den Screen, das Theme faerbt die
  // Flaeche darunter - im Darkmode blitzte sie beim Wechsel hellgrau auf.
  // Statt an drei Stellen dagegenzuhalten, bekommt die Navigation hier
  // einmal unsere Farben.
  const base = darkMode ? DarkTheme : DefaultTheme;
  const navigationTheme = {
    ...base,
    dark: darkMode,
    colors: {
      ...base.colors,
      background: theme.pageBg,
      card: theme.cardBg,
      border: theme.border,
      text: theme.text,
      primary: ACCENT_ORANGE,
    },
  };

  return (
    <ThemeProvider value={navigationTheme}>
      {/* Statusleiste passend zum Untergrund: auf dunklem Grund helle
          Symbole, sonst dunkle. "auto" richtet sich nach dem
          System-Erscheinungsbild und lag damit falsch, sobald der Nutzer
          den Darkmode in der App selbst umschaltet. */}
      <StatusBar style={darkMode ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          // React Navigation faerbt den Screen-Untergrund sonst mit seinem
          // eigenen Standard (#f2f2f2). Im Darkmode blitzt der bei jedem
          // Screenwechsel hellgrau hinter der App auf.
          contentStyle: { backgroundColor: theme.pageBg },
        }}
      >
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="dev-tools" options={{ headerShown: true, title: 'Dev-Tools (Testscreens)' }} />
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthStateProvider>
        <AppStateProvider>
          <OnboardingStateProvider>
            <RootStack />
          </OnboardingStateProvider>
        </AppStateProvider>
      </AuthStateProvider>
    </SafeAreaProvider>
  );
}
