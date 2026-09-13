import { createAudioPlayer, type AudioPlayer } from 'expo-audio';

// Kurze Rueckmelde-Toene der Uebungen (2026-09-13, Simons Vorgabe: nach einer
// richtigen Antwort ein "Ping").
//
// **Getrennt von speak.ts, und das mit Absicht:** dort gilt "nur ein Player
// gleichzeitig", jeder neue Satz bricht den alten ab. Der Ton darf das weder
// tun noch erleiden - er soll den gerade vorgelesenen Satz nicht abwuergen,
// und `stopSpeaking()` beim naechsten Satz soll ihn nicht mitten im
// Ausklingen kappen.
//
// Die Datei ist selbst erzeugt (zwei aufsteigende Glockentoene, A5 -> E6),
// keine fremde Aufnahme - also keine Lizenzfrage. Das Skript dazu liegt
// nicht im Repo; wer den Ton aendern will, ersetzt einfach die WAV.
const RICHTIG_TON = require('../../../assets/sounds/richtig.wav');

// EIN Player fuer die ganze Laufzeit, statt je Antwort einen neuen: der Ton
// kommt dutzendfach pro Sitzung, und ein freigegebener Player spielt auf iOS
// ohnehin weiter (siehe releaseActivePlayer in speak.ts).
let richtigPlayer: AudioPlayer | null = null;

export function spieleRichtigTon() {
  try {
    if (!richtigPlayer) richtigPlayer = createAudioPlayer(RICHTIG_TON);
    // Von vorn, auch wenn der letzte Ton noch ausklingt.
    void richtigPlayer.seekTo(0).catch(() => {});
    richtigPlayer.play();
  } catch {
    // Kein Ton ist kein Grund, die Uebung zu stoeren.
  }
}
