import { PlaceholderScreen } from '../../src/features/placeholder/PlaceholderScreen';

// Zielbild (noch nicht gebaut): Konto, Darkmode, Sprache, Benachrichtigungen.
// Alle vier Einstellungen existieren heute schon irgendwo im Zustand, haben
// aber keinen Ort, an dem der Nutzer sie nachtraeglich aendern kann.
export default function Profil() {
  return (
    <PlaceholderScreen
      showMenu
      icon="user"
      title="Profil"
      description="Hier verwaltest du später dein Konto, den Darkmode, deine Sprache und die Erinnerungen."
    />
  );
}
