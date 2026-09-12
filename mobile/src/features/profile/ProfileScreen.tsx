import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { HeaderMenu, Screen } from '../../components';
import { useOnboardingState } from '../../state/OnboardingState';
import { useAuthState } from '../../state/AuthState';
import { ADDRESSING_OPTIONS, GENDERS } from '../../data/onboardingOptions';
import { getLanguage } from '../../data/languages';
import { HERAUSFORDERUNGEN, sortiere, standVon } from '../../data/herausforderungen';
import { useAppState } from '../../state/AppState';
import { useLockscreenPick } from '../widget/useLockscreenPick';
import { SLOT_HOURS } from '../widget/lockscreenRotation';
import {
  ACCENT_AMBER_BG,
  ACCENT_AMBER_TEXT,
  ACCENT_ORANGE,
  FONT_SIZE,
  getTheme,
  LINE_HEIGHT,
  SPACING,
  schrift,
} from '../../theme/tokens';
import {
  aktionsFarbe,
  AuswahlZeile,
  Gruppe,
  gruppenGrund,
  SchalterZeile,
  Zeile,
} from './ListenBausteine';
import { SPERR_OPTIONEN } from './SperrbildschirmScreen';

// Profil im Stil der iOS-Einstellungen (2026-09-11).
//
// Erster Durchgang (Simons Wunsch: "mehr wie ein Apple-Profil mit Dropdowns
// und anderen Ansichten"): eine Zeile je Einstellung, der aktuelle Wert
// rechts daneben, kurze Auswahl als Pull-down, Ein/Aus als Schalter, alles
// mit mehr Inhalt als eigene Detailseite. Das Muster bleibt.
//
// Zweiter Durchgang am selben Tag (Simon: "viel zu gevibecoded"). Gemessen
// an den Design-Skills (ios-hig-design, frontend-design, ui-ux-pro-max)
// war das Muster zwar richtig, die Ausfuehrung aber ein Nachbau:
//   * Sechs Gruppen fuer acht Zeilen - jede Einstellung ihre eigene Karte.
//     Jetzt drei nach dem, worum es geht: Lernen, Sperrbildschirm, ueber
//     dich. Dazu die Konto-Zeile ohne Ueberschrift.
//   * Absaetze unter den Gruppen, die erklaerten, wie die App gebaut ist
//     ("Der Hilfe-Knopf neben einem Satz zeigt die Farben auch dann
//     einmalig ..."). Jetzt steht in einer Zeile, was ein Schalter bewirkt;
//     der Rest gehoert in die Stelle, an der er passiert.
//   * "Konto, Darkmode, Sprache und Erinnerungen kommen später ebenfalls
//     hierher" - eine Notiz an uns, nicht an den Nutzer. Raus.
//   * "Konto, Anmeldung und Abgleich" unter dem Namen beschrieb die
//     Zielseite. Unter dem Namen steht jetzt, was ihn in DIESER App
//     ausmacht: welche Sprache er lernt.
//   * Der Avatar mit Farbverlauf - jetzt eine ruhige Flaeche in Markenfarbe.
//     Weiss auf dem vollen Orange erreichte nur rund 2,9:1.
//   * "Ausgeblendet 5" plus eine eigene Zeile "Alle zurückholen" sind eine
//     Zeile mit einem Textknopf geworden.

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
  const { hatKonto, isGuest } = useAuthState();
  const {
    uebersprungen,
    ueberspringenZuruecknehmen,
    darkMode,
    targetLanguageId,
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
  const sprache = getLanguage(targetLanguageId).label;
  const kontoStand = hatKonto ? 'Angemeldet' : isGuest ? 'Gast' : 'Nicht angemeldet';

  // Ruhige Flaeche statt Verlauf: helles Orange mit dunklem Buchstaben (rund
  // 5:1), im Darkmode umgekehrt - der Buchstabe traegt die Farbe.
  const avatarGrund = darkMode ? theme.subtleFill : ACCENT_AMBER_BG;
  const avatarSchrift = darkMode ? ACCENT_ORANGE : ACCENT_AMBER_TEXT;

  return (
    <Screen dark={darkMode} padHorizontal={false} style={{ backgroundColor: gruppenGrund(darkMode) }}>
      <View style={styles.menuSlot}>
        <HeaderMenu dark={darkMode} overlay />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.seite}>
        <Text style={[styles.titel, { color: theme.text }]} accessibilityRole="header">
          Profil
        </Text>

        {/* Wer man ist, direkt auf der Seite statt in einer Karte: das ist
            kein Bedienelement, sondern der Kopf, unter dem alles steht. */}
        <View
          style={styles.person}
          accessible
          accessibilityLabel={`${anzeigeName}, lernt ${sprache}`}
        >
          <View style={[styles.avatar, { backgroundColor: avatarGrund }]}>
            {initiale ? (
              <Text style={[styles.avatarText, { color: avatarSchrift }]}>{initiale}</Text>
            ) : (
              <Feather name="user" size={28} color={avatarSchrift} />
            )}
          </View>
          <View style={styles.personText}>
            <Text style={[styles.personName, { color: theme.text }]} numberOfLines={1}>
              {anzeigeName}
            </Text>
            <Text style={[styles.personSprache, { color: theme.sub }]} numberOfLines={1}>
              Lernt {sprache}
            </Text>
          </View>
        </View>

        <Gruppe dark={darkMode}>
          <Zeile
            dark={darkMode}
            titel="Konto"
            wert={kontoStand}
            hinweis="Anmeldung und Abgleich zwischen Geräten"
            onPress={() => router.push('/konto')}
          />
        </Gruppe>

        <Gruppe dark={darkMode} titel="Lernen">
          <SchalterZeile
            dark={darkMode}
            titel="Wortarten einfärben"
            untertitel="Nomen, Verben und Adjektive in Farbe"
            wert={wortartenFarben}
            onWechsel={(an) => {
              if (an !== wortartenFarben) toggleWortartenFarben();
            }}
          />
          <Zeile
            dark={darkMode}
            titel="Herausforderungen"
            wert={offen ? `${offen} offen` : 'alle geschafft'}
            // Rotes Abzeichen wie bei iOS, sobald Coins abzuholen sind - sonst
            // merkt man es nur, wenn man zufaellig hineinschaut.
            abzeichen={abholbar}
            onPress={() => router.push('/einstellungen/herausforderungen')}
          />
          {/* "Brauch ich nicht" wirkt dauerhaft - ohne diese Stelle waere es
              eine Einbahnstrasse. Nur sichtbar, wenn es etwas zurueckzuholen
              gibt. */}
          {anzahlUebersprungen > 0 ? (
            <Zeile
              dark={darkMode}
              titel="Übersprungene Sätze"
              wert={String(anzahlUebersprungen)}
              rechts={
                <Pressable
                  onPress={ueberspringenZuruecknehmen}
                  hitSlop={SPACING.sm}
                  accessibilityRole="button"
                  accessibilityLabel={`${anzahlUebersprungen} übersprungene Sätze zurückholen`}
                  style={({ pressed }) => [styles.textKnopf, pressed && styles.gedrueckt]}
                >
                  <Text style={[styles.textKnopfText, { color: aktionsFarbe(darkMode) }]}>
                    Zurückholen
                  </Text>
                </Pressable>
              }
            />
          ) : null}
        </Gruppe>

        <Gruppe
          dark={darkMode}
          titel="Sperrbildschirm"
          fuss={`Wechselt alle ${SLOT_HOURS} Stunden.`}
        >
          <AuswahlZeile
            dark={darkMode}
            titel="Inhalt"
            optionen={SPERR_OPTIONEN}
            wert={lockscreenContent}
            onWahl={setLockscreenContent}
          />
          <Zeile
            dark={darkMode}
            titel="Vorschau"
            // Der Eintrag, der gerade dran ist - Apple zeigt rechts immer den
            // aktuellen Wert, nicht nur einen Pfeil.
            wert={pick.item?.primary}
            onPress={() => router.push('/einstellungen/sperrbildschirm')}
          />
        </Gruppe>

        <Gruppe
          dark={darkMode}
          titel="Über dich"
          fuss={
            ansprache && ansprache !== 'alle'
              ? 'Danach richten sich Komplimente und Anmachsätze.'
              : 'Solange nichts gewählt ist, siehst du beide Varianten.'
          }
        >
          <Zeile
            dark={darkMode}
            titel="Du bist"
            wert={geschlecht ? GESCHLECHT_LABEL[geschlecht] ?? geschlecht : 'Noch offen'}
            onPress={() => router.push('/anrede')}
          />
          <Zeile
            dark={darkMode}
            titel="Du sprichst an"
            wert={ansprache ? ANSPRACHE_LABEL[ansprache] ?? ansprache : 'Noch offen'}
            onPress={() => router.push('/anrede')}
          />
        </Gruppe>
      </ScrollView>
    </Screen>
  );
}

const AVATAR = 64;

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
  person: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.xl,
  },
  avatar: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    ...schrift('800'),
  },
  personText: {
    flex: 1,
    gap: 2,
  },
  personName: {
    fontSize: FONT_SIZE.title,
    lineHeight: LINE_HEIGHT.title,
    ...schrift('800'),
  },
  personSprache: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
  },
  textKnopf: {
    // 44 hoch wie jedes Tippziel, auch wenn nur das Wort zu sehen ist.
    minHeight: 44,
    justifyContent: 'center',
  },
  textKnopfText: {
    fontSize: FONT_SIZE.body,
    ...schrift('700'),
  },
  gedrueckt: {
    opacity: 0.55,
  },
});
