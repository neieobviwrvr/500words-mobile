import { useLocalSearchParams } from 'expo-router';
import { ExerciseScreen } from '../../src/features/exercise/ExerciseScreen';

// S4 - Uebungs-Screen. Ein einziger wiederverwendbarer Screen-Typ (siehe
// CLAUDE.md), Datenquelle/Modus kommen als Query-Parameter von S2 oder S5.
export default function Exercise() {
  const { mode, categoryId, source } = useLocalSearchParams<{ mode?: string; categoryId?: string; source?: 'category' | 'srs' }>();
  return <ExerciseScreen mode={mode ?? 'saetze'} categoryId={categoryId ?? 'grundwortschatz'} source={source ?? 'category'} />;
}
