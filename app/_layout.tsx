import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AppStateProvider } from '../src/state/AppState';
import { AuthStateProvider } from '../src/state/AuthState';

// Alle echten Screens (S1-S6) zeichnen ihren eigenen Header (Zurueck-Pfeil,
// Titel) passend zum Claude-Design-Prototyp - der native expo-router-Header
// ist deshalb global aus. dev-tools kommt unveraendert aus der alten
// App.tsx und hat keinen eigenen Header, bekommt den nativen Header daher
// weiterhin gezeigt.
//
// AuthStateProvider aussen um AppStateProvider (2026-08-07) - Auth ist die
// grundlegendere Ebene (wer bin ich), App-Zustand (Warenkorb etc.) haengt
// nicht von Auth ab und bleibt bewusst unabhaengig lesbar/schreibbar.
export default function RootLayout() {
  return (
    <AuthStateProvider>
      <AppStateProvider>
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="index" />
          <Stack.Screen name="shop" />
          <Stack.Screen name="srs" />
          <Stack.Screen name="category/[id]" />
          <Stack.Screen name="exercise" />
          <Stack.Screen name="cheatsheet/index" />
          <Stack.Screen name="cheatsheet/[groupId]" />
          <Stack.Screen name="cheatsheet/search-results" />
          <Stack.Screen name="cheatsheet/favorites" />
          <Stack.Screen name="rewards" />
          <Stack.Screen name="dev-tools" options={{ headerShown: true, title: 'Dev-Tools (Testscreens)' }} />
        </Stack>
      </AppStateProvider>
    </AuthStateProvider>
  );
}
