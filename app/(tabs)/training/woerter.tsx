import { WordReviewScreen } from '../../../src/features/training/WordReviewScreen';
import { SwipeBackScreen } from '../../../src/components';

// Eigene Datei statt `[mode].tsx` (2026-08-24) - genau der Fall, den der
// Platzhalter-Kommentar dort ankuendigt: "Wenn ein Modus echte Inhalte
// bekommt, bekommt er seine eigene Datei und faellt hier heraus." Expo
// Router bevorzugt die statische Route vor der dynamischen - `[mode].tsx`
// bleibt fuer 'saetze' und 'konversation' zustaendig, bis auch die eigene
// Screens bekommen.
export default function WoerterTrainingScreen() {
  return (
    <SwipeBackScreen fallback="/lektionen">
      <WordReviewScreen />
    </SwipeBackScreen>
  );
}
