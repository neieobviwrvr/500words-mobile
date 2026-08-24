import { RewardsScreen } from '../../src/features/rewards/RewardsScreen';
import { SwipeBackScreen } from '../../src/components';

// Referral-/Bewertungs-/Feedback-Programm - siehe RewardsScreen.tsx.
export default function Rewards() {
  return (
    <SwipeBackScreen>
      <RewardsScreen />
    </SwipeBackScreen>
  );
}
