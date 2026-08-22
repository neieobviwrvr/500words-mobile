import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Card, HeaderMenu, PillButton, Screen } from '../../components';
import { useOnboardingState } from '../../state/OnboardingState';
import { Herausforderungen } from './Herausforderungen';
import { ADDRESSING_OPTIONS, GENDERS } from '../../data/onboardingOptions';
import { LockscreenContent, useAppState } from '../../state/AppState';
import { useLockscreenPick } from '../widget/useLockscreenPick';
import { formatCountdown, SLOT_HOURS } from '../widget/lockscreenRotation';
import {
  ACCENT_ORANGE,
  FONT_FAMILY,
  FONT_SIZE,
  getTheme,
  LINE_HEIGHT,
  RADIUS,
  SPACING,
} from '../../theme/tokens';

// Profil - bisher ein Platzhalter, jetzt echter Screen (2026-08-20).
//
// Erste echte Einstellung ist das Sperrbildschirm-Widget. Konto, Darkmode,
// Sprache und Erinnerungen sollen hier ebenfalls hin (das versprach der
// Platzhalter), sind aber noch nicht gebaut - der Hinweis unten sagt das,
// statt die Seite so aussehen zu lassen, als waere sie fertig.

const OPTIONS: { id: LockscreenContent; title: string; description: string }[] = [
  {
    id: 'woerter',
    title: 'Ein Wort',
    description: 'Aus den 500 häufigsten Wörtern deiner Zielsprache.',
  },
  {
    id: 'saetze',
    title: 'Ein Satz',
    description: 'Aus allen Kategorien, die du freigeschaltet hast.',
  },
];

// Beschriftungen aus derselben Quelle wie der Anrede-Screen, damit Profil und
// Auswahl nie verschiedene Woerter fuer dieselbe Antwort zeigen.
const ANSPRACHE_LABEL: Record<string, string> = Object.fromEntries(
  ADDRESSING_OPTIONS.map((a) => [a.id, a.label]),
);
const GESCHLECHT_LABEL: Record<string, string> = Object.fromEntries(
  GENDERS.map((g) => [g.id, g.label]),
);

export function ProfileScreen() {
  const { gender: geschlecht, addressing: ansprache } = useOnboardingState();
  const { uebersprungen, ueberspringenZuruecknehmen, darkMode, lockscreenContent, setLockscreenContent } = useAppState();
  const theme = getTheme(darkMode);
  const anzahlUebersprungen = Object.values(uebersprungen).filter(Boolean).length;
  const pick = useLockscreenPick();

  return (
    <Screen dark={darkMode} padHorizontal={false}>
      <View style={styles.menuSlot}>
        <HeaderMenu dark={darkMode} overlay />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.page}>
        <Text style={[styles.pageTitle, { color: theme.text }]}>Profil</Text>
        <Text style={[styles.pageIntro, { color: theme.sub }]}>
          Einstellungen rund um dein Lernen.
        </Text>

        <Text style={[styles.sectionLabel, { color: theme.sub }]}>SPERRBILDSCHIRM</Text>

        <Card dark={darkMode} style={styles.card}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>Was dir angezeigt wird</Text>
          <Text style={[styles.cardText, { color: theme.sub }]}>
            {`Alle ${SLOT_HOURS} Stunden erscheint ein neuer Eintrag auf deinem Sperrbildschirm.`}
          </Text>

          <View
            style={styles.options}
            accessibilityRole="radiogroup"
            accessibilityLabel="Inhalt des Sperrbildschirm-Widgets"
          >
            {OPTIONS.map((option) => {
              const selected = lockscreenContent === option.id;
              return (
                <Pressable
                  key={option.id}
                  onPress={() => setLockscreenContent(option.id)}
                  accessibilityRole="radio"
                  // Beide Schreibweisen, und das ist kein Versehen: die
                  // klassische `accessibilityState` traegt den Zustand auf
                  // iOS/Android, wird von React Native Web an `Pressable`
                  // aber gar nicht weitergereicht (im Browser nachgemessen -
                  // es entstand kein aria-checked). `aria-checked` gibt es
                  // seit RN 0.71 und deckt genau diese Luecke.
                  accessibilityState={{ checked: selected, selected }}
                  aria-checked={selected}
                  accessibilityLabel={`${option.title}. ${option.description}`}
                  style={({ pressed }) => [
                    styles.option,
                    {
                      // Ausgewaehlt traegt Rahmen UND Punkt - Farbe allein
                      // reicht nicht (siehe CLAUDE.md, Zustand nie nur ueber
                      // Farbe).
                      borderColor: selected ? ACCENT_ORANGE : theme.border,
                      backgroundColor: selected ? theme.subtleFill : 'transparent',
                      opacity: pressed ? 0.7 : 1,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.radio,
                      { borderColor: selected ? ACCENT_ORANGE : theme.dividerColor },
                    ]}
                  >
                    {selected ? <View style={styles.radioDot} /> : null}
                  </View>
                  <View style={styles.optionBody}>
                    <Text style={[styles.optionTitle, { color: theme.text }]}>{option.title}</Text>
                    <Text style={[styles.optionText, { color: theme.sub }]}>
                      {option.description}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </Card>

        {/* Uebersprungene Saetze zurueckholen (2026-08-22). "Brauch ich
            nicht" wirkt dauerhaft - ohne diese Stelle waere es eine
            Einbahnstrasse, und wer versehentlich tippt, bekaeme den Satz nie
            wieder. Vorerst nur alles auf einmal: eine Einzelliste braucht
            eine Ansicht, die es noch nicht gibt, und der haeufige Fall ist
            ohnehin "ich hab mich vertan". */}
        {anzahlUebersprungen > 0 ? (
          <>
            <Text style={[styles.sectionLabel, { color: theme.sub }]}>ÜBERSPRUNGENE SÄTZE</Text>
            <Card dark={darkMode} style={styles.card}>
              <Text style={[styles.cardText, { color: theme.sub }]}>
                {anzahlUebersprungen === 1
                  ? 'Ein Satz taucht nicht mehr in deinen Übungen auf.'
                  : `${anzahlUebersprungen} Sätze tauchen nicht mehr in deinen Übungen auf.`}
              </Text>
              <PillButton
                label="Alle zurückholen"
                dark={darkMode}
                onPress={ueberspringenZuruecknehmen}
              />
            </Card>
          </>
        ) : null}

        <Herausforderungen />

        {/* Geschlecht und Ansprache sind seit dem 2026-08-22 nicht mehr Teil
            des Onboardings, sondern werden nach dem Kauf einer Kategorie mit
            geschlechtsspezifischen Saetzen gefragt (siehe data/anrede.ts).
            Damit braucht es eine Stelle zum Nachschauen und Aendern - und der
            Anrede-Screen verspricht sie ausdruecklich. */}
        <Text style={[styles.sectionLabel, { color: theme.sub }]}>SÄTZE FÜRS KENNENLERNEN</Text>

        <Card dark={darkMode} style={styles.card}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>Geschlecht und Ansprache</Text>
          <View style={styles.anredeZeilen}>
            <View style={styles.anredeZeile}>
              <Text style={[styles.anredeLabel, { color: theme.sub }]}>Du bist</Text>
              <Text style={[styles.anredeWert, { color: theme.text }]}>
                {geschlecht ? GESCHLECHT_LABEL[geschlecht] ?? geschlecht : 'noch offen'}
              </Text>
            </View>
            <View style={styles.anredeZeile}>
              <Text style={[styles.anredeLabel, { color: theme.sub }]}>Du sprichst an</Text>
              <Text style={[styles.anredeWert, { color: theme.text }]}>
                {ansprache ? ANSPRACHE_LABEL[ansprache] ?? ansprache : 'noch offen'}
              </Text>
            </View>
          </View>
          <Text style={[styles.cardText, { color: theme.sub }]}>
            {ansprache && ansprache !== 'alle'
              ? 'Danach richten sich Komplimente und Anmachsätze — im Chinesischen etwa 漂亮 an Frauen und 帅 an Männer.'
              : 'Solange nichts festgelegt ist, zeigen wir dir beide Varianten.'}
          </Text>
          <PillButton
            label={ansprache ? 'Ändern' : 'Festlegen'}
            dark={darkMode}
            onPress={() => router.push('/anrede')}
          />
        </Card>

        <Text style={[styles.sectionLabel, { color: theme.sub }]}>VORSCHAU</Text>

        <Card dark={darkMode} style={styles.card}>
          {pick.loading ? (
            <Text style={[styles.cardText, { color: theme.sub }]}>Wird geladen …</Text>
          ) : pick.unavailable ? (
            <Text style={[styles.cardText, { color: theme.sub }]}>{pick.unavailable}</Text>
          ) : pick.item ? (
            <>
              <Text style={[styles.previewPrimary, { color: theme.text }]}>
                {pick.item.primary}
              </Text>
              {pick.item.secondary ? (
                <Text style={[styles.previewSecondary, { color: theme.sub }]}>
                  {pick.item.secondary}
                </Text>
              ) : null}
              <View style={[styles.previewFoot, { borderTopColor: theme.border }]}>
                {pick.item.note ? (
                  <Text style={[styles.previewNote, { color: theme.sub }]}>{pick.item.note}</Text>
                ) : (
                  <View />
                )}
                <Text style={[styles.previewNote, { color: theme.sub }]}>
                  {`wechselt ${formatCountdown(pick.changesAt - Date.now())}`}
                </Text>
              </View>
              <Text style={[styles.previewPool, { color: theme.sub }]}>
                {`${pick.poolSize} ${pick.kind === 'woerter' ? 'Wörter' : 'Sätze'} im Wechsel`}
              </Text>
            </>
          ) : null}

          {pick.offline ? (
            <Text style={[styles.previewPool, { color: theme.sub }]}>
              📴 Offline — letzter gespeicherter Stand
            </Text>
          ) : null}
        </Card>

        {/* Ehrlich statt stillschweigend: die Auswahl wirkt heute nur in der
            Vorschau, weil die Widget-Extension noch fehlt. */}
        <View style={styles.hint}>
          <Feather name="info" size={15} color={theme.sub} />
          <Text style={[styles.hintText, { color: theme.sub }]}>
            Das Widget selbst ist noch nicht gebaut — dafür braucht die App ein bezahltes
            Apple-Entwicklerkonto. Deine Auswahl ist gespeichert und gilt, sobald es da ist.
          </Text>
        </View>

        <Text style={[styles.outlook, { color: theme.sub }]}>
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
  page: {
    paddingBottom: SPACING.xxxl,
    gap: SPACING.sm,
  },
  pageTitle: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h1,
    lineHeight: LINE_HEIGHT.h1,
    paddingHorizontal: SPACING.lg,
  },
  pageIntro: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    paddingHorizontal: SPACING.lg,
  },
  sectionLabel: {
    fontSize: FONT_SIZE.small,
    fontWeight: '800',
    letterSpacing: 0.8,
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
  },
  card: {
    marginHorizontal: SPACING.lg,
    gap: SPACING.sm,
  },
  cardTitle: {
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    fontWeight: '800',
  },
  cardText: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
  },
  options: {
    gap: SPACING.sm,
    marginTop: SPACING.xs,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACING.md,
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: ACCENT_ORANGE,
  },
  optionBody: {
    flex: 1,
    gap: 2,
  },
  optionTitle: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    fontWeight: '800',
  },
  optionText: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
  },
  previewPrimary: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.title,
    lineHeight: LINE_HEIGHT.title,
  },
  previewSecondary: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
  },
  previewFoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.sm,
    borderTopWidth: 1,
    paddingTop: SPACING.sm,
    marginTop: SPACING.xs,
  },
  previewNote: {
    fontSize: FONT_SIZE.caption,
    fontWeight: '700',
    flexShrink: 1,
  },
  previewPool: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
  },
  anredeZeilen: { gap: SPACING.xs },
  anredeZeile: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: SPACING.sm },
  anredeLabel: { fontSize: FONT_SIZE.caption },
  anredeWert: { fontSize: FONT_SIZE.caption, fontWeight: '800' },
  hint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACING.sm,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.md,
  },
  hintText: {
    flex: 1,
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
  },
  outlook: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
  },
});
