import { useAudioPlayer } from 'expo-audio';
import * as Speech from 'expo-speech';

// audio_urls kommt als jsonb aus Supabase - kann eine reine URL-Zeichenkette
// sein oder ein Objekt wie {"url": "..."}, je nachdem wie generate-audio.js
// es spaeter befuellt. Beides wird hier abgefangen.
function extractUrl(audioUrls: unknown): string | null {
  if (typeof audioUrls === 'string' && audioUrls.length > 0) return audioUrls;
  if (audioUrls && typeof audioUrls === 'object' && 'url' in audioUrls) {
    const url = (audioUrls as { url?: unknown }).url;
    return typeof url === 'string' ? url : null;
  }
  return null;
}

export function useVocabAudio() {
  const player = useAudioPlayer();

  function play(audioUrls: unknown, text: string, languageCode: string) {
    const url = extractUrl(audioUrls);
    if (url) {
      player.replace(url);
      player.play();
    } else {
      Speech.speak(text, { language: languageCode });
    }
  }

  return { play };
}
