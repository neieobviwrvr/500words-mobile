import { useState } from 'react';
import { File } from 'expo-file-system';
import { supabase } from '../../lib/supabase';

// Speechmatics-STT ueber eine sichere Supabase Edge Function (2026-08-12,
// echter Nutzerfall: On-Device Whisper/Wav2Vec2 lag bei akzentbehaftetem
// Schwedisch bei ~40-45% Abweichung, Speechmatics traf im ersten echten
// Test exakt "Mitt rum är inte rent." - deutlich robuster gegen Akzente,
// laut eigenen Angaben explizit darauf trainiert). Braucht Internet (kein
// Offline-Betrieb mehr fuer STT) - bewusste Architektur-Entscheidung, siehe
// CLAUDE.md: "alles was offline ist soll nur gedownloadetes Audio sein,
// alles andere ist mit Internet" ok.
//
// Gleiche grobe Form wie useWhisper() (status, transcribe()), damit
// ExerciseScreen.tsx den STT-Anbieter ohne grosse Umbauten wechseln kann.
// Kein Modell-Download noetig - "ready" quasi sofort.
//
// detectedLanguage wird hier IMMER als die angeforderte Sprache
// zurueckgegeben (nicht wie bei Whisper unabhaengig erkannt) - der reine
// Text-Endpunkt liefert kein separates Sprach-Erkennungsfeld. Der Sprach-
// Mismatch-Schutz in ExerciseScreen.tsx greift dadurch hier praktisch nie,
// was nach dem bisherigen Testergebnis (deutlich weniger Sprachabdrift als
// Whisper) eine vertretbare Vereinfachung ist, kein Blocker.

export type SpeechmaticsStatus = 'idle' | 'ready' | 'error';

export function useSpeechmatics() {
  const [status] = useState<SpeechmaticsStatus>('ready');
  const [error] = useState<string | null>(null);

  async function transcribe(wavFileUri: string, language: string, _prompt?: string) {
    const file = new File(wavFileUri);
    const blob = await (await fetch(file.uri)).blob();

    const form = new FormData();
    // @ts-expect-error - React Native FormData akzeptiert dieses Blob-Format,
    // die DOM-Typen von TypeScript kennen die RN-spezifische Form nicht.
    form.append('audio', { uri: wavFileUri, name: 'audio.wav', type: 'audio/wav' });
    form.append('language', language);

    const { data: sessionData } = await supabase.auth.getSession();
    const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
    const token = sessionData?.session?.access_token ?? anonKey;

    const res = await fetch(
      `${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/speechmatics-transcribe`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      },
    );

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Speechmatics-Anfrage fehlgeschlagen: ${errText}`);
    }

    const json = await res.json();
    return { text: json.text as string, detectedLanguage: language };
  }

  return { status, error, transcribe };
}
