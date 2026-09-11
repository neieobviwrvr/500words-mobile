import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { HeaderMenu, Screen } from '../../components';
import { useOnboardingState } from '../../state/OnboardingState';
import { ADDRESSING_OPTIONS, GENDERS } from '../../data/onboardingOptions';
import { HERAUSFORDERUNGEN, sortiere, standVon } from '../../data/herausforderungen';
import { useAppState } from '../../state/AppState';
import { useLockscreenPick } from '../widget/useLockscreenPick';
import { SLOT_HOURS } from '../widget/lockscreenRotation';
import {
  ACCENT_ORANGE,
  FONT_SIZE,
  getTheme,
  LINE_HEIGHT,
  SPACING,
  schrift,
} from '../../theme/tokens';
import { AuswahlZeile, Gruppe, gruppenGrund, SchalterZeile, Zeile } from './ListenBausteine';
import { SPERR_OPTIONEN } from './SperrbildschirmScreen';

// Profil im Stil der iOS-Einstellungen (neu aufgebaut 2026-09-11, Simons
// Wunsch: "mehr wie ein Apple-Profil mit Dropdowns und anderen Ansichten").
//
// Vorher: sechs Karten untereinander, jede mit Titel, Fliesstext und eigenen
// Bedienelementen - Radio-Karten fuer das Widget, eine Checkbox-Karte, eine
// Liste mit Balken, eine Vorschau ganz unten, getrennt von ihrer Auswahl
// ganz oben. Man musste lesen, um zu finden.
//
// Jetzt: eine Zeile je Einstellung, der aktuelle Wert steht rechts daneben.
// Man sieht den Stand der ganzen Seite, ohne etwas zu oeffnen, und oeffnet
// nur, was man aendern will:
//   * kurze Auswahl (Wort/Satz) -> Pull-down-Menue direkt an der Zeile
//   * Ein/Aus (Wortarten-Farben) -> iOS-Schalter
//   * alles mit mehr Inhalt (Sperrbildschirm-Vorschau, Herausforderungen,
//     Anrede) -> eigene Detailseite
//
// Die Bausteine liegen in ListenBausteine.tsx, damit spaetere Einstellungen
// (Konto, Darkmode, Sprache, Erinnerungen - die sollen laut CLAUDE.md
// hierher) keine eigene Optik erfinden muessen.

// Beschriftungen aus derselben Quelle wie der Anrede-Screen, damit Profil und
// Auswahl nie verschiedene Woerter fuer dieselbe Antwort zeigen.
const ANSPRACHE_LABEL: Record<string, string> = Object.fromEntries(
  ADDRESSING_OPTIONS.map((a) => [a.id, a.label]),
);
const GESCHLECHT_LABEL: Record<string, string> = Object.fromEntries(
  GENDERS.map((g) => [g.id, g.label]),
);

export function ProfileScreen() {
  const { name, gender: geschlecht, addressing: ansprache } = useOnboardingState();
  const {
    uebersprungen,
    ueberspringenZuruecknehmen,
    darkMode,
    lockscreenContent,
    setLockscreenContent,
    wortartenFarben,
    toggleWortartenFarben,
    fortschritt,
    coinGrants,
  } = useAppState();
  const theme = getTheme(darkMode);
  const pick = useLockscreenPick();

  const anzahlUebersprungen = Object.values(uebersprungen).filter(Boolean).length;

  // Dieselbe Rechnung wie in Herausforderungen.tsx - dort fuer die Liste, hier
  // fuer den Wert rechts und das Abzeichen.
  const liste = sortiere(HERAUSFORDERUNGEN, fortschritt, coinGrants);
  const offen = liste.filter((h) => h.quelle && standVon(h, fortschritt) < h.ziel).length;
  const abholbar = liste.filter(
    (h) => h.quelle !== null && standVon(h, fortschritt) >= h.ziel && !coinGrants[h.id],
  ).length;

  const anzeigeName = name?.trim() || 'Dein Profil';
  const initiale = name?.trim() ? name.trim()[0].toUpperCase() : null;

  return (
    <Screen dark={darkMode} padHorizontal={false} style={{ backgroundColor: gruppenGrund(darkMode) }}>
      <View style={styles.menuSlot}>
        <HeaderMenu dark={darkMode} overlay />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.seite}>
        <Text style={[styles.titel, { color: theme.text }]} accessibilityRole="header">
          Profil
        </Text>

        {/* Kopf wie Apples Account-Zeile ganz oben in den Einstellungen:
            wer man ist, und der Weg zum Konto. */}
        <Gruppe dark={darkMode}>
          <Pressable
            onPress={() => router.push('/konto')}
            accessibilityRole="button"
            accessibilityLabel={`${anzeigeName}. Konto, Anmeldung und Abgleich`}
            style={({ pressed }) => [styles.konto, pressed && styles.gedrueckt]}
          >
            <LinearGradient
              colors={['#FFB36B', ACCENT_ORANGE]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatar}
            >
              {initiale ? (
                <Text style={styles.avatarText}>{initiale}</Text>
              ) : (
                <Feather name="user" size={26} color="#FFFFFF" />
              )}
            </LinearGradient>
            <View style={styles.kontoText}>
              <Text style={[styles.kontoName, { color: theme.text }]} numberOfLines={1}>
                {anzeigeName}
              </Text>
              <Text style={[styles.kontoUnter, { color: theme.sub }]} numberOfLines={1}>
                Konto, Anmeldung und Abgleich
              </Text>
            </View>
            <Feather name="chevron-right" size={18} color={theme.dividerColor} />
          </Pressable>
        </Gruppe>

        <Gruppe
          dark={darkMode}
          titel="Sperrbildschirm"
          fuss={`Alle ${SLOT_HOURS} Stunden erscheint ein neuer Eintrag auf deinem Sperrbildschirm.`}
        >
          <AuswahlZeile
            dark={darkMode}
            icon="lock"
            farbe="blau"
            titel="Anzeige"
            optionen={SPERR_OPTIONEN}
            wert={lockscreenContent}
            onWahl={setLockscreenContent}
          />
          <Zeile
            dark={darkMode}
            icon="smartphone"
            farbe="indigo"
            titel="Vorschau"
            // Der Eintrag, der gerade dran ist - Apple zeigt rechts immer den
            // aktuellen Wert, nicht nur einen Pfeil.
            wert={pick.item?.primary}
            onPress={() => router.push('/einstellungen/sperrbildschirm')}
          />
        </Gruppe>

        <Gruppe
          dark={darkMode}
          titel="Satz-Anzeige"
          fuss="Nomen, Verben, Adjektive und Verbindungswörter farbig hervorheben, in Satz-Wiederholung und Cheat-Sheet. Der Hilfe-Knopf neben einem Satz zeigt die Farben auch dann einmalig, wenn der Schalter aus ist."
        >
          <SchalterZeile
            dark={darkMode}
            icon="type"
            farbe="lila"
            titel="Wortarten-Farben"
            wert={wortartenFarben}
            onWechsel={(an) => {
              if (an !== wortartenFarben) toggleWortartenFarben();
            }}
          />
        </Gruppe>

        {/* "Brauch ich nicht" wirkt dauerhaft - ohne diese Stelle waere es
            eine Einbahnstrasse. Nur sichtbar, wenn es etwas zurueckzuholen
            gibt. */}
        {anzahlUebersprungen > 0 ? (
          <Gruppe
            dark={darkMode}
            titel="Übersprungene Sätze"
            fuss="Diese Sätze tauchen nicht mehr in deinen Übungen auf."
          >
            <Zeile
              dark={darkMode}
              icon="eye-off"
              farbe="grau"
              titel="Ausgeblendet"
              wert={String(anzahlUebersprungen)}
            />
            <Zeile
              dark={darkMode}
              titel="Alle zurückholen"
              tint
              chevron={false}
              onPress={ueberspringenZuruecknehmen}
            />
          </Gruppe>
        ) : null}

        <Gruppe dark={darkMode} titel="Fortschritt">
          <Zeile
            dark={darkMode}
            icon="award"
            farbe="orange"
            titel="Herausforderungen"
            wert={offen ? `${offen} offen` : 'alle geschafft'}
            // Rotes Abzeichen wie bei iOS, sobald Coins abzuholen sind - sonst
            // merkt man es nur, wenn man zufaellig hineinschaut.
            abzeichen={abholbar}
            onPress={() => router.push('/einstellungen/herausforderungen')}
          />
        </Gruppe>

        <Gruppe
          dark={darkMode}
          titel="Sätze fürs Kennenlernen"
          fuss={
            ansprache && ansprache !== 'alle'
              ? 'Danach richten sich Komplimente und Anmachsätze – im Chinesischen etwa 漂亮 an Frauen und 帅 an Männer.'
              : 'Solange nichts festgelegt ist, zeigen wir dir beide Varianten.'
          }
        >
          <Zeile
            dark={darkMode}
            icon="user"
            farbe="pink"
            titel="Du bist"
            wert={geschlecht ? GESCHLECHT_LABEL[geschlecht] ?? geschlecht : 'noch offen'}
            onPress={() => router.push('/anrede')}
          />
          <Zeile
            dark={darkMode}
            icon="heart"
            farbe="rot"
            titel="Du sprichst an"
            wert={ansprache ? ANSPRACHE_LABEL[ansprache] ?? ansprache : 'noch offen'}
            onPress={() => router.push('/anrede')}
          />
        </Gruppe>

        <Text style={[styles.ausblick, { color: theme.sub }]}>
          Konto, Darkmode, Sprache und Erinnerungen kommen später ebenfalls hierher.
        </Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  menuSlot: {
    position: 'relative',
    zIndex: 10,
  },
  seite: {
    paddingBottom: SPACING.xxxl,
  },
  titel: {
    ...schrift('800'),
    fontSize: FONT_SIZE.h1,
    lineHeight: LINE_HEIGHT.h1,
    paddingHorizontal: SPACING.lg,
  },
  konto: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    padding: SPACING.lg,
  },
  gedrueckt: {
    opacity: 0.55,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: FONT_SIZE.title,
    ...schrift('800'),
  },
  kontoText: {
    flex: 1,
    gap: 2,
  },
  kontoName: {
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    ...schrift('800'),
  },
  kontoUnter: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
  },
  ausblick: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    marginHorizontal: SPACING.xl,
    marginTop: SPACING.xl,
  },
});
