import { PathScreen } from '../src/features/home/PathScreen';

// S1 - Startscreen (Pfad). Ersetzt die bisherige PathScreenMockup-Nutzung
// durch den echten Screen aus dem Claude-Design-Prototyp-Import
// (2026-08-05, Projekt "Speech app mobile prototype").
// Dev-Tools (STT/TTS/Phrasebook-Tests) bleiben unter /dev-tools erreichbar,
// sind aber bewusst nicht mehr auf dem echten Startscreen verlinkt.
export default function StartScreen() {
  return <PathScreen />;
}
