import { SwipeBackScreen } from '../../../src/components';
import { HerausforderungenScreen } from '../../../src/features/profile/HerausforderungenScreen';

// Detailansicht des Profils (2026-09-11) - siehe einstellungen/sperrbildschirm.tsx
// fuer den Ordnernamen.
export default function Herausforderungen() {
  return (
    <SwipeBackScreen fallback="/profil">
      <HerausforderungenScreen />
    </SwipeBackScreen>
  );
}
