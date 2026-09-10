import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import { AppStateProvider, useAppState } from '../src/state/AppState';
import { AuthStateProvider } from '../src/state/AuthState';
import { OnboardingStateProvider } from '../src/state/OnboardingState';
import { SplashGate } from '../src/features/splash/SplashGate';
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
  // Marken-Schrift (2026-08-31). Alle Schnitte, die `schrift()` in tokens.ts
  // anbietet - fehlt einer, faellt genau die Stelle stumm auf die
  // Systemschrift zurueck, und das faellt erst spaet auf.
  //
  // Gerendert wird ERST, wenn die Schrift da ist. Sonst zeigt die App einen
  // Sekundenbruchteil lang die Systemschrift und springt dann um; bei
  // unterschiedlichen Laufweiten verschiebt das sichtbar das Layout.
  // Ein eigener Ladebildschirm ist nicht noetig - der SplashGate darunter
  // wartet ohnehin schon auf Sitzung und lokalen Zustand.
  //
  // **Die Symbol-Schriften gehoeren MIT hierher** (2026-08-31, nach Simons
  // Fehlerbericht "alle Icons sind Vierecke"). `@expo/vector-icons` laedt
  // seine Schriften sonst selbst und erst NACHDEM dieser Screen gerendert
  // hat - bis sie ankommen, zeichnet der Renderer Ersatzkaestchen. Vor der
  // Umstellung auf Nunito fiel das nicht auf, weil die App sofort rendern
  // durfte und die Symbole ihre Ladezeit unbemerkt im Hintergrund hatten.
  // Jetzt wartet alles auf denselben Moment, und der muss die Symbole
  // einschliessen.
  const [schriftBereit] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    ...Feather.font,
    ...Ionicons.font,
  });

  if (!schriftBereit) return null;

  return (
    <SafeAreaProvider>
      <AuthStateProvider>
        <AppStateProvider>
          <OnboardingStateProvider>
            {/* Der Startbildschirm liegt UEBER allem und geht von selbst weg,
                sobald Sitzung, Onboarding-Stand und lokaler Zustand geladen
                sind. Innerhalb aller drei Provider, weil er genau deren
                Ladezustaende abfragt. */}
            <SplashGate>
              <RootStack />
            </SplashGate>
          </OnboardingStateProvider>
        </AppStateProvider>
      </AuthStateProvider>
    </SafeAreaProvider>
  );
}
