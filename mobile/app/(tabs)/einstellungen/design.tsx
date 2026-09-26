import { SwipeBackScreen } from '../../../src/components';
import { DesignLaborScreen } from '../../../src/features/design/DesignLaborScreen';

// Design-Labor (2026-09-23) - Werkzeug zum Vergleichen mehrerer Looks,
// siehe src/theme/designs.ts. Liegt bei den Profil-Unterseiten, weil es von
// dort aus erreichbar ist; VOR DEM LAUNCH gehoert der Einstieg weg.
export default function Design() {
  return (
    <SwipeBackScreen fallback="/profil">
      <DesignLaborScreen />
    </SwipeBackScreen>
  );
}
