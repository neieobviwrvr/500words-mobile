import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AppStateProvider } from '../src/state/AppState';

// Alle echten Screens (S1-S6) zeichnen ihren eigenen Header (Zurueck-Pfeil,
// Titel) passend zum Claude-Design-Prototyp - der native expo-router-Header
// ist deshalb global aus. dev-tools kommt unveraendert aus der alten
// App.tsx und hat keinen eigenen Header, bekommt den nativen Header daher
// weiterhin gezeigt.
export default function RootLayout() {
  return (
    <AppStateProvider>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="shop" />
        <Stack.Screen name="srs" />
        <Stack.Screen name="category/[id]" />
        <Stack.Screen name="exercise" />
        <Stack.Screen name="cheatsheet/index" />
        <Stack.Screen name="cheatsheet/[groupId]" />
        <Stack.Screen name="cheatsheet/search-results" />
        <Stack.Screen name="cheatsheet/favorites" />
        <Stack.Screen name="dev-tools" options={{ headerShown: true, title: 'Dev-Tools (Testscreens)' }} />
      </Stack>
    </AppStateProvider>
  );
}
