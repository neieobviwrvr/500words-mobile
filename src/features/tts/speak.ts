import * as Speech from 'expo-speech';
import { createAudioPlayer, type AudioPlayer } from 'expo-audio';
import { getLanguage } from '../../data/languages';

// Sprachausgabe der App - eine Fallback-Kette statt einer Entweder-oder-Wahl.
//
// Hintergrund (2026-08-17): Das Projekt ist von ElevenLabs abgekommen und
// nutzt vorerst die SYSTEMSTIMME (auf iOS Apples AVSpeechSynthesizer, auf
// Android die Google-Stimme - beides ueber expo-speech). Das ist
// ausdruecklich ein Lueckenfueller. Ziel bleibt: pro Sprache eine
// einheitliche Stimme als vorgerenderte Datei aus Supabase.
//
// Deshalb entscheidet `speakSentence()` pro Satz neu:
//   1. Gibt es eine vorgerenderte Datei? -> die abspielen (expo-audio)
//   2. Sonst -> Systemstimme (expo-speech)
//
// Damit fuellt sich die Vertonung spaeter Satz fuer Satz von selbst auf,
// ohne dass am Abspiel-Code etwas geaendert werden muss.

// Nur ein Player gleichzeitig. Ein neuer Aufruf loest den alten ab - sonst
// reden zwei Saetze gleichzeitig, wenn jemand schnell zweimal tippt.
let activePlayer: AudioPlayer | null = null;

function releaseActivePlayer() {
  if (!activePlayer) return;
  try {
    activePlayer.remove();
  } catch {
    // Schon freigegeben - egal, wir wollen nur sicher aufraeumen.
  }
  activePlayer = null;
}

/** Bricht alles ab, was gerade gesprochen oder abgespielt wird. */
export function stopSpeaking() {
  Speech.stop().catch(() => {
    // Nichts am Laufen - kein Grund fuer einen Fehler.
  });
  releaseActivePlayer();
}

type SpeakOptions = {
  /** Sprach-ID aus languages.ts ("de", "sv", ...). Ohne Angabe: Deutsch. */
  languageId?: string;
  onDone?: () => void;
  onError?: (e: unknown) => void;
};

/**
 * Spricht freien Text mit der Systemstimme.
 * Fuer feste Ansagen gedacht (Onboarding-Zeilen) - dort gibt es keine
 * vorgerenderte Datei, weil die Saetze nicht aus der Datenbank kommen.
 */
export function speakText(text: string, options: SpeakOptions = {}) {
  const { languageId = 'de', onDone, onError } = options;
  const language = getLanguage(languageId);

  stopSpeaking();

  try {
    Speech.speak(text, {
      language: language.ttsLocale,
      onDone,
      onStopped: onDone,
      onError,
    });
  } catch (e) {
    onError?.(e);
  }
}

type Sentence = {
  text: string;
  /** Vorgerenderte Datei aus Supabase, falls vorhanden. */
  audioUrl?: string | null;
};

/**
 * Spielt einen Lernsatz ab: bevorzugt die vorgerenderte Datei, sonst
 * Systemstimme. Der Rueckgabewert sagt, welcher Weg genommen wurde - der
 * Uebungs-Screen kann damit ehrlich anzeigen, ob gerade eine echte Stimme
 * oder der Lueckenfueller zu hoeren ist.
 */
export function speakSentence(sentence: Sentence, options: SpeakOptions = {}): 'datei' | 'systemstimme' {
  const { onDone, onError } = options;

  if (sentence.audioUrl) {
    stopSpeaking();
    try {
      const player = createAudioPlayer(sentence.audioUrl);
      activePlayer = player;
      player.play();
      return 'datei';
    } catch (e) {
      // Datei kaputt oder nicht erreichbar (z.B. offline) - dann lieber die
      // Systemstimme als gar nichts.
      onError?.(e);
    }
  }

  speakText(sentence.text, options);
  return 'systemstimme';
}
