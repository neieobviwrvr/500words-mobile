// Reine Text-Heuristiken zur Qualitaetspruefung von Transkripten - bewusst
// OHNE Abhaengigkeit zu einem konkreten STT-Anbieter oder einem nativen
// Modul, damit ExerciseScreen.tsx sie importieren kann, ohne dabei
// den frueheren STT-Hook mitzuziehen (2026-08-16 aus dem inzwischen
// geloeschten useWhisper.ts hierher ausgelagert: dessen Top-Level-Import von
// whisper.rn liess die App im Web-Build abstuerzen. whisper.rn ist mittlerweile
// komplett entfernt, die Heuristik bleibt anbieterunabhaengig nuetzlich).

// Kauderwelsch-Erkennung (2026-08-08, echte Nutzerfaelle): manche
// STT-Ergebnisse sind offensichtlich kein echtes Wort in irgendeiner
// Sprache - entweder eine Wiederholungsschleife ("oooooo...") oder ein
// durchgerutschtes Sonderzeichen/Steuertoken ("]"). Sprachcode-Pruefung
// (detectedLanguage) greift hier NICHT, weil solche Faelle oft trotzdem als
// "richtige" Sprache gemeldet werden - das ist ein eigenstaendiges
// Qualitaetsproblem, keine Sprachverwechslung. Bewusst simple, robuste
// Heuristik statt komplexer Sprach-/Woerterbuch-Pruefung:
// 1. Enthaelt der Text ueberhaupt einen Buchstaben (lateinisch inkl.
//    Umlaute/Akzente)? Wenn nicht (z.B. nur "]"), Kauderwelsch.
// 2. Macht ein einzelnes Zeichen einen unrealistisch hohen Anteil des
//    Textes aus (z.B. "ooooooooo" -> fast 100% "o")? Wenn ja (Schwelle
//    60%, ab einer Mindestlaenge von 6 Zeichen, damit kurze legitime
//    Woerter wie "asas" nicht faelschlich reinfallen), Kauderwelsch.
// Exportiert, damit ExerciseScreen.tsx dieselbe Pruefung auch nach dem
// letzten (evtl. immer noch schlechten) Versuch anwenden kann, um die
// Auswertung zu ueberspringen statt sie regulaer als falsch zu werten.
export function looksLikeGarbageTranscript(text: string): boolean {
  const cleaned = text.trim();
  if (!cleaned) return true;
  if (!/[a-zA-ZÀ-ÿ]/.test(cleaned)) return true;
  const counts: Record<string, number> = {};
  let total = 0;
  for (const ch of cleaned.toLowerCase()) {
    if (/\s/.test(ch)) continue;
    counts[ch] = (counts[ch] ?? 0) + 1;
    total++;
  }
  if (total < 6) return false;
  const maxCount = Math.max(...Object.values(counts));
  return maxCount / total > 0.6;
}
