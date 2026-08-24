import { SrsScreen } from '../../src/features/srs/SrsScreen';
import { SwipeBackScreen } from '../../src/components';

// S5 - SRS-/Wiederholen-Auswahl-Screen.
export default function Srs() {
  return (
    <SwipeBackScreen>
      <SrsScreen />
    </SwipeBackScreen>
  );
}
