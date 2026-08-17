import { Stack } from 'expo-router';

// Die Onboarding-Strecke O1-O12. Eigener Stack, damit der Zurueck-Pfeil in
// OnboardingScaffold Schritt fuer Schritt zurueckgeht, ohne die restliche
// App zu beruehren. Header ist aus - jeder Screen zeichnet seine Kopfzeile
// (Zurueck + Fortschrittsbalken) selbst, wie im Rest der App auch.
export default function OnboardingLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
