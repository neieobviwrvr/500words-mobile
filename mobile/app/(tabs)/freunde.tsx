import { router } from 'expo-router';
import { PlaceholderScreen } from '../../src/features/placeholder/PlaceholderScreen';
import { FreundeScreen } from '../../src/features/freunde/FreundeScreen';
import { useAuthState } from '../../src/state/AuthState';
import { KONTO_NOETIG } from '../../src/data/demo';

// Freunde: eigener Code, fremden Code eingeben, Liste (2026-09-14, siehe
// FreundeScreen.tsx). Bis dahin stand hier der Holo-Karten-Testscreen - der
// war inzwischen dieselbe Seite wie Start und ist mit diesem Umbau entfernt.
//
// Ohne Konto steht hier seit dem 2026-08-22 die Bedingung statt eines
// Versprechens: "Man muss sich anmelden und registriert haben um mit
// Freunden in Gruppen zu kommen, deren Fortschritt zu sehen" (Simon).
export default function Freunde() {
  const { hatKonto } = useAuthState();

  if (!hatKonto) {
    return (
      <PlaceholderScreen
        icon="user-plus"
        title={KONTO_NOETIG.freunde.titel}
        description={KONTO_NOETIG.freunde.text}
        actionLabel="Konto anlegen"
        onAction={() => router.push({ pathname: '/konto', params: { grund: 'freunde' } })}
      />
    );
  }

  return <FreundeScreen />;
}
