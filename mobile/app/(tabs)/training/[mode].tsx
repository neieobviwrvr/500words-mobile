import { useLocalSearchParams } from 'expo-router';
import { PlaceholderScreen } from '../../../src/features/placeholder/PlaceholderScreen';
import { SwipeBackScreen } from '../../../src/components';
import { TRAINING_MODE_BY_ID } from '../../../src/data/trainingModes';

// Ein Screen fuer alle drei Trainingsarten - noch als Platzhalter.
//
// Bewusst EINE Datei mit `[mode]` statt drei fast gleicher Screens: solange
// keiner der Modi gebaut ist, waeren drei Dateien dreimal derselbe Text. Wenn
// ein Modus echte Inhalte bekommt, bekommt er seine eigene Datei und faellt
// hier heraus.
//
// `SwipeBackScreen` steht hier und NICHT in `PlaceholderScreen.tsx` selbst -
// die Komponente wird auch vom Tab "Freunde" benutzt, und ein Tab-Wurzel
// braucht keine Zurueck-Geste (siehe SwipeBackScreen.tsx).
export default function TrainingModeScreen() {
  const { mode } = useLocalSearchParams<{ mode: string }>();
  const training = TRAINING_MODE_BY_ID[mode ?? ''];

  return (
    <SwipeBackScreen>
      <PlaceholderScreen
        icon="target"
        title={training?.title ?? 'Training'}
        description={
          training
            ? `${training.description} Diesen Übungs-Modus bauen wir noch.`
            : 'Diesen Übungs-Modus gibt es nicht.'
        }
      />
    </SwipeBackScreen>
  );
}
