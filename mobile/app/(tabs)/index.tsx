import { StartScreen } from '../../src/features/home/StartScreen';

// S1 - Startscreen.
//
// Seit dem 2026-09-26 der neue Aufbau (Simon: "wir bauen S1 um wie es auf
// unserem Testscreen ist"): Karte mit Maskottchen oben, darunter je
// Kategorie ein Abschnitt mit seinen Situationen.
//
// **Der alte Screen liegt unberuehrt daneben** (`features/home/PathScreen`).
// Zurueckdrehen heisst: hier wieder `<PathScreen />` einsetzen. Erst wenn der
// neue Aufbau steht, faellt die alte Datei weg.
//
// Das Auth-/Onboarding-Gate liegt eine Ebene hoeher in `(tabs)/_layout.tsx`.
export default function Start() {
  return <StartScreen />;
}
