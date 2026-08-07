import { ActivityIndicator, View } from 'react-native';
import { Redirect } from 'expo-router';
import { PathScreen } from '../src/features/home/PathScreen';
import { useAuthState } from '../src/state/AuthState';

// S1 - Startscreen (Pfad). Ersetzt die bisherige PathScreenMockup-Nutzung
// durch den echten Screen aus dem Claude-Design-Prototyp-Import
// (2026-08-05, Projekt "Speech app mobile prototype").
// Dev-Tools (STT/TTS/Phrasebook-Tests) bleiben unter /dev-tools erreichbar,
// sind aber bewusst nicht mehr auf dem echten Startscreen verlinkt.
//
// Auth-Gate (2026-08-07): ohne Session UND ohne Gast-Wahl geht's zuerst
// zum Onboarding. Kurzer Ladezustand waehrend AuthState die gespeicherte
// Session/Gast-Markierung prueft, damit man nicht kurz faelschlich zu
// Onboarding springt, bevor der echte Zustand geladen ist.
export default function StartScreen() {
  const { session, isGuest, loading } = useAuthState();

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  if (!session && !isGuest) {
    return <Redirect href="/onboarding" />;
  }
  return <PathScreen />;
}
