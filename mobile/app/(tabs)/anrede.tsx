import { useLocalSearchParams } from 'expo-router';
import { AnredeScreen } from '../../src/features/anrede/AnredeScreen';
import { SwipeBackScreen } from '../../src/components';

// Geschlecht + Ansprache, gefragt an der Stelle, an der es darauf ankommt -
// nicht mehr im Onboarding (siehe src/data/anrede.ts).
//
// `categoryId` ist optional und dient nur der Begruendung im Text ("In
// 'Club + Nightlife' gibt es Saetze, die je nach Gegenueber anders lauten").
export default function Anrede() {
  const { categoryId } = useLocalSearchParams<{ categoryId?: string }>();
  return (
    <SwipeBackScreen>
      <AnredeScreen categoryId={categoryId} />
    </SwipeBackScreen>
  );
}
