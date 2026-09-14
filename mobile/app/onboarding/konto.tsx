import { router, useLocalSearchParams } from 'expo-router';
import { KontoScreen } from '../../src/features/auth/KontoScreen';
import { supabase } from '../../src/lib/supabase';
import { useAppState } from '../../src/state/AppState';

// Konto im Onboarding (2026-09-14). Zwei Einstiege:
//
//   weiter=start  "Ich habe schon ein Konto" auf der ersten Seite. Nach der
//                 Anmeldung wird sofort abgeglichen; hat das Konto das
//                 Onboarding schon hinter sich, geht es direkt in die App,
//                 mit Profil, Lernstand und Einstellungen.
//   (sonst)       "Mit E-Mail anmelden" auf der Konto-Seite der Strecke - ein
//                 neues Konto, danach weiter mit den Benachrichtigungen.
//
// Eigene Route statt /konto: die liegt in der Tab-Gruppe, und deren
// Onboarding-Sperre wuerde hierher zurueckleiten.
export default function OnboardingKonto() {
  const { weiter } = useLocalSearchParams<{ weiter?: string }>();
  const { abgleichen } = useAppState();
  const vomStart = weiter === 'start';

  return (
    <KontoScreen
      imOnboarding
      startModus={vomStart ? 'anmelden' : 'registrieren'}
      nachErfolg={async () => {
        const { data } = await supabase.auth.getSession();
        const nutzerId = data.session?.user.id;
        const ausgang = nutzerId ? await abgleichen(nutzerId) : null;
        if (ausgang?.onboardingErledigt) {
          router.replace('/');
        } else if (vomStart) {
          // Neues oder unfertiges Konto: die Strecke von vorn, jetzt angemeldet.
          router.back();
        } else {
          router.replace('/onboarding/o11-benachrichtigungen');
        }
      }}
    />
  );
}
