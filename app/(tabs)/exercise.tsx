import { useLocalSearchParams } from 'expo-router';
import { ExerciseScreen } from '../../src/features/exercise/ExerciseScreen';
import { SwipeBackScreen } from '../../src/components';

// S4 - Uebungs-Screen. Ein einziger wiederverwendbarer Screen-Typ (siehe
// CLAUDE.md), Datenquelle/Modus kommen als Query-Parameter von S2 oder S5.
//
// `scenario` schraenkt auf EINE Situation ein - so oeffnet ein Tipp auf
// "Naeher kommen" im Pfad oder auf dem Lektionen-Screen genau diese Saetze
// statt der ganzen Kategorie.
//
// `SwipeBackScreen`: Rechts-Swipe verlaesst die Uebung wie der Zurueck-Pfeil
// (Nutzer-Wunsch 2026-08-23) - siehe src/components/SwipeBackScreen.tsx.
export default function Exercise() {
  const { mode, categoryId, source, scenario } = useLocalSearchParams<{
    mode?: string;
    categoryId?: string;
    source?: 'category' | 'srs' | 'srs-kategorie';
    scenario?: string;
  }>();
  return (
    <SwipeBackScreen>
      <ExerciseScreen
        mode={mode ?? 'saetze'}
        categoryId={categoryId ?? 'grundwortschatz'}
        source={source ?? 'category'}
        scenario={scenario}
      />
    </SwipeBackScreen>
  );
}
