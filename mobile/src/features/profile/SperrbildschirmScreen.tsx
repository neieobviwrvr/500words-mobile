import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Screen } from '../../components';
import { LockscreenContent, useAppState } from '../../state/AppState';
import { useLockscreenPick } from '../widget/useLockscreenPick';
import { formatCountdown, SLOT_HOURS } from '../widget/lockscreenRotation';
import {
  ACCENT_ORANGE,
  FONT_SIZE,
  LINE_HEIGHT,
  RADIUS,
  SPACING,
  schrift,
} from '../../theme/tokens';
import { AuswahlOption, DetailKopf, Gruppe, gruppenGrund, Zeile } from './ListenBausteine';

// Detailansicht "Sperrbildschirm" (2026-09-11, Teil des Profil-Umbaus im
// iOS-Stil). Vorher stand die Vorschau als letzte Karte unten auf dem
// Profil, getrennt von der Auswahl ganz oben - man sah nie beides auf
// einmal. Jetzt gehoeren sie auf eine Seite: oben der Sperrbildschirm, wie
// er aussehen wird, darunter die Auswahl, die ihn veraendert.

export const SPERR_OPTIONEN: AuswahlOption<LockscreenContent>[] = [
  {
    id: 'woerter',
    label: 'Ein Wort',
    hinweis: 'Aus den 500 häufigsten Wörtern deiner Zielsprache.',
  },
  {
    id: 'saetze',
    label: 'Ein Satz',
    hinweis: 'Aus allen Kategorien, die du freigeschaltet hast.',
  },
];

// Von Hand formatiert statt ueber `toLocaleDateString('de-DE', ...)`: das
// haengt an der Intl-Unterstuetzung der JS-Engine, und die ist nicht auf
// jedem Geraet gleich vollstaendig. Eine Uhr, die auf dem einen Handy
// "Donnerstag" und auf dem anderen "Thursday" sagt, waere ein seltsamer Fehler.
const WOCHENTAGE = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const MONATE = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

/** Laeuft mit, damit die Vorschau-Uhr nicht auf der Oeffnungszeit stehenbleibt. */
function useUhr() {
  const [jetzt, setJetzt] = useState(() => new Date());
  useEffect(() => {
    const takt = setInterval(() => setJetzt(new Date()), 30_000);
    return () => clearInterval(takt);
  }, []);
  return jetzt;
}

export function SperrbildschirmScreen() {
  const { darkMode, lockscreenContent, setLockscreenContent } = useAppState();
  const pick = useLockscreenPick();
  const jetzt = useUhr();

  const zeit = `${String(jetzt.getHours()).padStart(2, '0')}:${String(jetzt.getMinutes()).padStart(2, '0')}`;
  const datum = `${WOCHENTAGE[jetzt.getDay()]}, ${jetzt.getDate()}. ${MONATE[jetzt.getMonth()]}`;

  const vorschauText = pick.loading
    ? 'Wird geladen …'
    : pick.unavailable
      ? pick.unavailable
      : pick.item
        ? [pick.item.primary, pick.item.secondary].filter(Boolean).join(', ')
        : '';

  return (
    <Screen dark={darkMode} padHorizontal={false} style={{ backgroundColor: gruppenGrund(darkMode) }}>
      <DetailKopf dark={darkMode} titel="Sperrbildschirm" />

      <ScrollView contentContainerStyle={styles.seite} showsVerticalScrollIndicator={false}>
        {/* Die Vorschau als Sperrbildschirm, nicht als Karte: so sieht der
            Nutzer, WO der Eintrag spaeter steht, nicht nur welcher. */}
        <LinearGradient
          colors={['#2B4C7E', '#101A33']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.4, y: 1 }}
          style={styles.sperr}
          accessible
          accessibilityLabel={`Vorschau des Sperrbildschirms. ${zeit} Uhr. ${vorschauText}`}
        >
          <Text style={styles.datum}>{datum}</Text>
          <Text style={styles.zeit}>{zeit}</Text>
          <View style={styles.widget}>
            {pick.loading || pick.unavailable ? (
              <Text style={styles.widgetNeben}>{vorschauText}</Text>
            ) : pick.item ? (
              <>
                <Text style={styles.widgetHaupt} numberOfLines={2}>
                  {pick.item.primary}
                </Text>
                {pick.item.secondary ? (
                  <Text style={styles.widgetNeben} numberOfLines={2}>
                    {pick.item.secondary}
                  </Text>
                ) : null}
                {pick.item.note ? (
                  <Text style={styles.widgetNotiz} numberOfLines={1}>
                    {pick.item.note}
                  </Text>
                ) : null}
              </>
            ) : null}
          </View>
        </LinearGradient>

        <Gruppe dark={darkMode} titel="Anzeige">
          {SPERR_OPTIONEN.map((o) => {
            const gewaehlt = lockscreenContent === o.id;
            return (
              <Zeile
                key={o.id}
                dark={darkMode}
                titel={o.label}
                untertitel={o.hinweis}
                onPress={() => setLockscreenContent(o.id)}
                chevron={false}
                ausgewaehlt={gewaehlt}
                rechts={gewaehlt ? <Feather name="check" size={20} color={ACCENT_ORANGE} /> : null}
              />
            );
          })}
        </Gruppe>

        <Gruppe
          dark={darkMode}
          titel="Wechsel"
          fuss="Das Widget selbst ist noch nicht gebaut — dafür braucht die App ein bezahltes Apple-Entwicklerkonto. Deine Auswahl ist gespeichert und gilt, sobald es da ist."
        >
          <Zeile dark={darkMode} titel="Rhythmus" wert={`alle ${SLOT_HOURS} Std.`} />
          {pick.item ? (
            <Zeile
              dark={darkMode}
              titel="Nächster Wechsel"
              wert={formatCountdown(pick.changesAt - jetzt.getTime())}
            />
          ) : null}
          {pick.item ? (
            <Zeile
              dark={darkMode}
              titel="Im Wechsel"
              wert={`${pick.poolSize} ${pick.kind === 'woerter' ? 'Wörter' : 'Sätze'}`}
            />
          ) : null}
          {pick.offline ? (
            <Zeile dark={darkMode} titel="Offline" wert="letzter Stand" />
          ) : null}
        </Gruppe>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  seite: {
    paddingBottom: SPACING.xxxl,
  },
  sperr: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.md,
    // Gerundet wie ein Displayrand - die Flaeche soll als Telefon gelesen
    // werden, nicht als weitere Karte.
    borderRadius: 28,
    minHeight: 260,
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.xs,
  },
  datum: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: FONT_SIZE.body,
    ...schrift('700'),
  },
  zeit: {
    color: '#FFFFFF',
    // Bewusst ausserhalb der Schriftskala: das ist eine nachgezeichnete
    // Sperrbildschirm-Uhr, und die ist nun einmal so gross.
    fontSize: 64,
    lineHeight: 72,
    letterSpacing: -1,
    ...schrift('800'),
  },
  widget: {
    marginTop: SPACING.md,
    alignSelf: 'stretch',
    // Milchglas-Andeutung wie Apples Sperrbildschirm-Widgets.
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    gap: 2,
  },
  widgetHaupt: {
    color: '#FFFFFF',
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    ...schrift('800'),
  },
  widgetNeben: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
  },
  widgetNotiz: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: FONT_SIZE.caption,
    ...schrift('700'),
    marginTop: SPACING.xs,
  },
});
