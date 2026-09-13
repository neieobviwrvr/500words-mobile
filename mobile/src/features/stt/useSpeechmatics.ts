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

  /**
   * `erwartet`: was an dieser Stelle gesagt werden soll - der Zielsatz, das
   * Zielwort oder bei einer Auswahl alle Optionen (2026-09-13, Simons
   * Vorgabe: "fuer JEDE Eingabe in JEDER Sprache").
   *
   * Die Edge Function macht daraus Speechmatics' `additional_vocab`: die
   * Erkennung haelt diese Woerter fuer wahrscheinlich und erkennt ein mit
   * Akzent gesprochenes "Jeg vet ikke" dadurch eher richtig. Vorher hiess der
   * Parameter `_prompt` und wurde verworfen - das Lenken auf den Zielsatz,
   * das es mit Whisper gab, war beim Anbieterwechsel stillschweigend
   * weggefallen.
   *
   * **Immer in der Schrift, die die Erkennung zurueckgibt** (Hanzi,
   * Kyrillisch), nie Pinyin oder Umschrift - sonst lenkt der Hinweis auf
   * Woerter, die Speechmatics gar nicht ausgibt.
   *
   * Bewusste Folge, von Simon so entschieden: auch die Aussprache-Pruefung
   * einzelner Woerter (gefuehrter Kurs) bekommt den Hinweis und wird dadurch
   * nachsichtiger - ein knapp danebenliegender Ton wird eher als das
   * erwartete Zeichen erkannt.
   */
  async function transcribe(wavFileUri: string, language: string, erwartet?: string | string[]) {
    // Korrektur (2026-08-12, echter Nutzerfall: "Unsupported FormDataPart
    // Implementation" auf dem Geraet): das klassische RN-FormData-Muster
    // (Objekt-Literal {uri, name, type} statt echtem Blob) wird von der
    // hier verwendeten fetch-Implementierung nicht akzeptiert. Fix: die
    // neuere expo-file-system-`File`-Klasse IMPLEMENTIERT das Blob-Interface
    // selbst (`class File ... implements Blob`, siehe File.d.ts) - keine
    // separate .blob()-Methode noetig, die Instanz direkt an
    // FormData.append() uebergeben, Standard-konform statt des aelteren
    // RN-spezifischen Objekt-Formats.
    const file = new File(wavFileUri);

    const form = new FormData();
    form.append('audio', file, 'audio.wav');
    form.append('language', language);
    const liste = (Array.isArray(erwartet) ? erwartet : erwartet ? [erwartet] : []).filter((t) => t.trim());
    if (liste.length > 0) form.append('erwartet', JSON.stringify(liste));

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
