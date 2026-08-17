import { PlaceholderScreen } from '../../src/features/placeholder/PlaceholderScreen';

// Zielbild (Entscheidung 2026-08-18, noch nicht gebaut): eine Uebersicht
// aller Kategorien - zuerst Grundlagen und freigeschaltete, danach die
// gesperrten. Jede Kategorie ist ein aufklappbarer Knopf, der ihre Themen
// zeigt; von dort aus laesst sich freischalten und gezielt einzeln ueben.
// Inhaltlich die Listen-Fassung derselben Auffaecher-Logik, die im Pfad
// raeumlich passiert.
export default function Lektionen() {
  return (
    <PlaceholderScreen
      icon="star"
      title="Lektionen"
      description="Hier bekommst du alle Kategorien mit ihren Themen auf einen Blick — zum Nachschlagen, gezielt Üben und Freischalten."
    />
  );
}
