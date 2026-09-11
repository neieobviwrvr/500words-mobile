import { SwipeBackScreen } from '../../../src/components';
import { SperrbildschirmScreen } from '../../../src/features/profile/SperrbildschirmScreen';

// Detailansicht des Profils (2026-09-11). Eigener Ordnername statt `profil/`,
// weil `profil.tsx` schon die Tab-Wurzel ist - dasselbe Muster wie Survival
// mit `survival.tsx` und den Unterseiten in `cheatsheet/`.
export default function Sperrbildschirm() {
  return (
    <SwipeBackScreen fallback="/profil">
      <SperrbildschirmScreen />
    </SwipeBackScreen>
  );
}
