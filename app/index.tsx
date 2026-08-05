import { Link } from 'expo-router';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { PathScreenMockup } from '../src/features/home/PathScreenMockup';
import { ColoredSentenceDemo } from '../src/features/home/ColoredSentenceDemo';

// S1 - Startscreen (Pfad). Erster echter Screen unter expo-router (vorher
// nur Mockup-Komponente in App.tsx). Gesperrte Knoten navigieren jetzt
// wirklich zu S3 (Shop), statt nur den Zustand in App.tsx umzuschalten.
export default function StartScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PathScreenMockup onLockedNodePress={() => router.push('/shop')} />

      <Text style={styles.heading}>Wortfarben-Demo</Text>
      <ColoredSentenceDemo />

      <Link href="/dev-tools" style={styles.devLink}>
        Dev-Tools (STT/TTS/Phrasebook-Tests) →
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    gap: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 16,
  },
  devLink: {
    marginTop: 12,
    marginHorizontal: 16,
    color: '#3a7bd5',
  },
});
