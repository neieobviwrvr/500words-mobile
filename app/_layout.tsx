import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ title: 'Start' }} />
        <Stack.Screen name="shop" options={{ title: 'Pakete + Shop' }} />
        <Stack.Screen name="dev-tools" options={{ title: 'Dev-Tools (Testscreens)' }} />
      </Stack>
    </>
  );
}
