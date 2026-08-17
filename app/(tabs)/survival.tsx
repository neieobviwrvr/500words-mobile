import { CheatsheetScreen } from '../../src/features/cheatsheet/CheatsheetScreen';

// S6 - Cheat-Sheet-Survival, jetzt als Tab statt als aufgerufener Screen.
// Die Unterscreens (Kategorie, Suchergebnisse, Favoriten) liegen weiterhin
// unter `/cheatsheet/...` und werden ueber die Leiste gelegt.
export default function Survival() {
  return <CheatsheetScreen />;
}
