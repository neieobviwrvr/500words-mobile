import { SentenceReviewScreen } from '../../../src/features/training/SentenceReviewScreen';
import { SwipeBackScreen } from '../../../src/components';

// Eigene Datei statt `[mode].tsx` (2026-08-26) - derselbe Fall, den
// `training/woerter.tsx` schon vorgemacht hat: sobald ein Modus einen
// echten Screen bekommt, faellt er aus dem generischen Platzhalter heraus.
// `[mode].tsx` bleibt fuer 'konversation' zustaendig.
export default function SaetzeTrainingScreen() {
  return (
    <SwipeBackScreen fallback="/lektionen">
      <SentenceReviewScreen />
    </SwipeBackScreen>
  );
}
