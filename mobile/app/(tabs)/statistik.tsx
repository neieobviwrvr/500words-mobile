import { useLocalSearchParams } from 'expo-router';
import { SwipeBackScreen } from '../../src/components';
import { StatistikScreen } from '../../src/features/statistik/StatistikScreen';

// Statistik (2026-09-14). Kein eigener Tab - die Leiste hat schon fuenf.
// Erreichbar per Tipp auf den Fortschrittsbalken auf Start (`von=start`,
// oeffnet den Lernweg, der dort vorne liegt) und ueber das Profil.
export default function Statistik() {
  const { weg, von } = useLocalSearchParams<{ weg?: string; von?: string }>();
  return (
    <SwipeBackScreen fallback={von === 'profil' ? '/profil' : '/'}>
      <StatistikScreen
        weg={weg === 'speedrun' || weg === 'gefuehrt' ? weg : undefined}
        von={von === 'profil' ? 'profil' : 'start'}
      />
    </SwipeBackScreen>
  );
}
