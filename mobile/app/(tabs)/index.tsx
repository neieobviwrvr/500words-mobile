import { PathScreen } from '../../src/features/home/PathScreen';

// S1 - Startscreen (Pfad), erster Tab.
//
// Das Auth-/Onboarding-Gate lag bis 2026-08-18 hier und sitzt jetzt eine
// Ebene hoeher in `(tabs)/_layout.tsx` - siehe dort fuer die Begruendung.
export default function StartScreen() {
  return <PathScreen />;
}
