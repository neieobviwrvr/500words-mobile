import { router } from 'expo-router';
import { PlaceholderScreen } from '../../src/features/placeholder/PlaceholderScreen';
import { useAuthState } from '../../src/state/AuthState';
import { KONTO_NOETIG } from '../../src/data/demo';

// Inhalt noch offen - Gruppen und Ranglisten sind auf Nutzer-Entscheidung
// zurueckgestellt (2026-08-20).
//
// Ohne Konto steht hier seit dem 2026-08-22 aber schon die Bedingung, statt
// eines Versprechens: "Man muss sich anmelden und registriert haben um mit
// Freunden in Gruppen zu kommen, deren Fortschritt zu sehen" (Simon). Wer
// als Gast hier landet, soll nicht auf etwas warten, das ihn ohnehin nicht
// erreicht.
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

  return (
    <PlaceholderScreen
      icon="message-circle"
      title="Freunde"
      description="Hier lädst du bald Freunde ein. Gemeinsame Gruppen für einen Trip, Gruppen-Streak und Rangliste sind geplant, aber zurückgestellt."
    />
  );
}
