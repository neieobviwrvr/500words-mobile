# 500 Woerter - Mobile App

Expo (React Native, TypeScript) App fuers Sprachenlernen. Siehe die
`CLAUDE.md` im Projekt-Root (eine Ebene ueber diesem Ordner) fuer Konzept,
Screen-Inventar und Preismodell.

## Stand (2026-08-03)

Proof-of-Concept auf echtem iPhone 12 bestaetigt:
- **STT**: `whisper.rn` (on-device Whisper, Modell `tiny`, wird beim ersten
  App-Start heruntergeladen und lokal gecacht) - 6,7s franzoesisches Audio in
  0,6s transkribiert, ohne CoreML-Beschleunigung.
- **TTS**: `expo-audio` spielt vorgerenderte Audiodateien aus dem Supabase-
  Storage-Bucket `vocab_audio` ab (kein Live-TTS, keine laufenden Kosten).
- Beides zusammen: keine laufenden API-Kosten fuer Sprachein-/ausgabe.

Offener Punkt: Android hat keine native WAV-Aufnahme (`MediaRecorder`
unterstuetzt nur AAC/3GP-Container) - die aktuelle datei-basierte
Aufnahme+Transkription ist nur auf iOS verifiziert. Falls das auf Android
nicht sauber funktioniert, ist der naechste Schritt der von `whisper.rn`
dokumentierte Realtime-PCM-Stream-Adapter (`@fugood/react-native-audio-pcm-stream`)
statt der aktuellen `useWhisperRecorder`-Implementierung.

`App.tsx` ist aktuell ein reiner Testscreen (TTS-Button + Aufnahme-Button mit
Diagnose-Anzeigen), noch nicht einer der eigentlichen App-Screens (S1-S5).

## iOS auf dem eigenen Geraet testen (ohne Mac, ohne Apple Developer Program)

1. GitHub Actions manuell auslösen: Tab "Actions" -> Workflow "iOS unsigned
   build (for Sideloadly)" -> "Run workflow". Baut auf einem `macos-latest`
   Runner unsigniert (kein Apple-Zertifikat/Secret noetig), Dauer ca. 5-10 Min.
2. Fertiges Artifact `mobile-unsigned-ipa` herunterladen und entpacken.
3. Mit [Sideloadly](https://sideloadly.io) (Windows/Mac) die `.ipa` mit der
   eigenen (kostenlosen) Apple-Account-E-Mail+Passwort signieren und per USB
   aufs iPhone installieren. Signatur laeuft nach 7 Tagen ab, dann erneut
   sideloaden (kein Neu-Build noetig, falls sich der Code nicht geaendert hat).
4. Auf dem iPhone einmalig: Einstellungen -> Allgemein -> VPN & Geraeteverwaltung
   -> eigenem Account vertrauen; UND Einstellungen -> Datenschutz & Sicherheit
   -> Entwicklermodus aktivieren (inkl. Neustart).

Voraussetzung auf dem Windows-PC fuer Sideloadly: klassisches iTunes von
`https://www.apple.com/itunes/download/win64` (NICHT die Microsoft-Store-
Version - die installiert den noetigen "Apple Mobile Device Service" nicht).

## Bekannte Stolpersteine (falls das Setup wiederholt/erweitert wird)

- `whisper.rn`s `package.json` hat keinen `"."`-Eintrag im `exports`-Feld ->
  TypeScript findet den bloßen Import `whisper.rn` sonst nicht (siehe
  `tsconfig.json` `paths`-Override) und Metro braucht zusaetzlich das
  `buffer`-Polyfill-Package (`npm install buffer`) fuer `whisper.rn`s
  `safe-buffer`-Abhaengigkeit.
- Ein neuer/geaenderter Workflow unter `.github/workflows/` wird von GitHub
  erst nach einem Push erkannt, der die Datei selbst inhaltlich veraendert -
  ein Commit, der nur andere Dateien anfasst, reicht nicht zum Neu-Indexieren.
- `.env` (Supabase Anon-Key) ist gitignored, siehe `.env.example`. Niemals den
  Supabase Service/Secret-Key (liegt in `../Notizen.txt`) in die Mobile-App
  einbauen - der ist nur fuer serverseitige Content-Skripte gedacht.
