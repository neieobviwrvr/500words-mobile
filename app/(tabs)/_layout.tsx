import { useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  AppState as RNAppState,
  Platform,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { Redirect, Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppState } from '../../src/state/AppState';
import { useAuthState } from '../../src/state/AuthState';
import { useOnboardingState } from '../../src/state/OnboardingState';
import { getTheme, ACCENT_ORANGE, FONT_SIZE, RADIUS, SPACING } from '../../src/theme/tokens';

// Tab-Leiste (2026-08-18, seit dem 18. als schwebende Leiste).
//
// Fuenf Einstiegspunkte nach Simons Vorlage
// (`Screenplanung/UI - Rest/Homepage/Homescreen grobe Themenuebersicht.png`).
// Damit gilt das frueher in CLAUDE.md festgehaltene "der Pfad ist die EINE
// Navigation" nicht mehr - bewusste Entscheidung, die Doku ist nachgezogen.
//
// Zwei Punkte aus den Apple-Richtlinien, die hier den Ausschlag geben:
// - Zwei bis fuenf Ziele. Es sind vier: Start, Lektionen, Survival, Freunde.
//   "Profil" liegt im Drei-Punkte-Menue (Konto und Einstellungen sind
//   Monats-, keine Tageshandlungen). "Wiederholen" war kurz ein Tab und ist
//   auf Nutzer-Entscheidung wieder der Knopf auf S1 - bei fuenf Tabs blieben
//   52 Punkte pro Eintrag, und "Wiederholen" braucht 60 fuer seine
//   Beschriftung, wurde also abgeschnitten.
// - Ein-Wort-Beschriftungen. Deshalb "Survival" statt "Cheat-Sheet-Survival".
//
// Das Gate liegt hier und nicht in `index.tsx`: haenge es am Startscreen,
// mountet die Leiste einen Moment lang mit, bevor die Weiterleitung ins
// Onboarding greift - man saehe die Tab-Leiste kurz aufblitzen. Auf dieser
// Ebene wird die ganze Gruppe erst gar nicht aufgebaut.

// --- Masse der schwebenden Leiste ------------------------------------------
// Abstand nach unten. `Math.max` statt einer festen Zahl, weil beide Geraete-
// arten gemeint sind: auf Geraeten mit Home-Indikator ist der Sicherheitsrand
// (34) schon groesser als der gewuenschte Schwebeabstand, die Leiste sitzt
// dann genau auf dessen Oberkante; auf aelteren Geraeten ohne Indikator sorgt
// FLOAT_GAP fuer den Abstand zum Bildschirmrand.
const FLOAT_GAP = 20;
const BAR_HEIGHT = 64;
const BAR_RADIUS = 36;

/**
 * Wie lange nach einem Abgleich das Zurueckkehren in die App keinen neuen
 * ausloest.
 *
 * Eine Minute: lang genug, dass App-Wechsel im Sekundentakt nichts kosten,
 * kurz genug, dass ein Wechsel aufs zweite Geraet sich sofort anfuehlt.
 *
 * Bewusst KEIN Timer waehrend des Lernens (Nutzer-Entscheidung 2026-08-22):
 * die Zielgruppe sitzt im Ausland an einem wackeligen Datentarif, und
 * offline-zuerst ist das Prinzip der App. Der Preis dafuer ist bekannt und
 * angenommen: wer die App sofort per Wischen killt, schiebt erst beim
 * naechsten Start hoch. Verloren ist nichts - AsyncStorage behaelt alles -,
 * das zweite Geraet ist nur bis dahin veraltet.
 */
const ZURUECK_DROSSEL_MS = 60_000;
// Abstand zwischen Bildschirminhalt und Leiste. Ohne das verschwaende der
// Inhalt unter der Leiste - sie liegt absolut positioniert darueber und
// reserviert keinen Platz mehr im Layout.
const CONTENT_GAP = SPACING.md;
// Zweite, abgesetzte Kapsel rechts neben der Leiste (Nutzer-Vorlage
// 2026-08-18). Quadratisch und so hoch wie die Leiste, damit beide auf
// derselben Linie sitzen; der Abstand dazwischen macht sie als eigenes
// Element lesbar statt als abgetrennten fuenften Tab.
// Kleiner als die Leiste hoch ist (Nutzer-Rueckmeldung 2026-08-20): ein
// gleich grosser Kreis las sich wie ein abgetrennter fuenfter Tab. Der
// groessere Abstand daneben macht die Trennung eindeutig.
/** Seitlicher Rand von Leiste UND Plus-Knopf - beide gleich weit vom Rand. */
const BAR_SIDE = SPACING.xxl;

export default function TabsLayout() {
  const { darkMode, hydrated, abgleichen } = useAppState();
  const { loading: authLoading, session } = useAuthState();
  const { completed, loading: onboardingLoading } = useOnboardingState();
  const theme = getTheme(darkMode);
  const insets = useSafeAreaInsets();

  const bottomOffset = Math.max(insets.bottom, FLOAT_GAP);

  /**
   * Geraeteabgleich anstossen (2026-08-22).
   *
   * Hier und nicht in AppState selbst, weil beide Voraussetzungen aus
   * verschiedenen Ecken kommen: die Sitzung aus AuthState, der geladene
   * lokale Stand aus AppState. Erst wenn beides steht, darf abgeglichen
   * werden - vorher liefe der Abgleich gegen den leeren Vorgabezustand und
   * schriebe ihn als "lokalen Stand" hoch.
   *
   * Genau EINMAL je Anmeldung: `session.user.id` in den Abhaengigkeiten
   * sorgt dafuer, dass ein Token-Refresh (der eine neue Session-Instanz mit
   * derselben ID liefert) keinen weiteren Durchgang ausloest.
   */
  const nutzerId = session?.user?.id;
  // Immer die aktuelle Fassung: `abgleichen` haengt am gesamten lokalen Stand
  // und aendert sich bei jeder Eingabe. Der Listener unten wird EINMAL
  // angemeldet und griffe sonst dauerhaft auf einen veralteten Stand zu.
  const abgleichenRef = useRef(abgleichen);
  abgleichenRef.current = abgleichen;
  const letzterAbgleichRef = useRef(0);

  useEffect(() => {
    if (!nutzerId || !hydrated) return;

    const los = () => {
      letzterAbgleichRef.current = Date.now();
      void abgleichenRef.current(nutzerId);
    };

    los(); // beim Start

    const sub = RNAppState.addEventListener('change', (zustand) => {
      if (zustand === 'background') {
        // WEGSCHALTEN ist der wichtige Moment: hier ist alles, was gerade
        // gelernt wurde, am laengsten ungesichert. Immer abgleichen, ohne
        // Drossel - wer die App schliesst, soll nichts stehen lassen.
        //
        // NUR `background`, nicht `inactive`: letzteres feuert auf iOS bei
        // jedem Benachrichtigungs-Banner, beim Kontrollzentrum und bei
        // eingehenden Anrufen. Und beim echten Wegschalten kommt ohnehin
        // active -> inactive -> background, es liefe also doppelt.
        los();
        return;
      }
      if (zustand === 'active') {
        // ZURUECKKEHREN holt, was ein anderes Geraet getan hat. Das ist
        // nuetzlich, aber nicht dringend - und wer zwischen zwei Apps hin
        // und her springt, loeste sonst im Sekundentakt Abgleiche aus.
        if (Date.now() - letzterAbgleichRef.current > ZURUECK_DROSSEL_MS) los();
      }
    });
    return () => sub.remove();
    // `abgleichen` steht bewusst nicht drin - siehe `abgleichenRef` oben.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nutzerId, hydrated]);

  // Breite der Leiste AUSGERECHNET statt ueber `right` gesetzt.
  //
  // Grund (Geraete-Fehler vom 2026-08-20): mit `left` + `right` lief die
  // Leiste auf dem iPhone unter dem Plus-Knopf durch und schnitt den letzten
  // Tab an - im Browser stimmte es. Eine ausgerechnete Breite haengt nicht
  // davon ab, ob die Leiste `right` beachtet.
  const { width: windowWidth } = useWindowDimensions();
  // Seit dem 2026-08-22 laeuft die Kapsel wieder ueber die volle Breite:
  // der abgesetzte runde Knopf daneben ist weg, Profil ist stattdessen der
  // fuenfte Tab. Vorher endete die Leiste vor ihm.
  const barWidth = windowWidth - 2 * BAR_SIDE;

  // Beide Quellen liegen in AsyncStorage und laden asynchron. Ohne dieses
  // Warten blitzt kurz der Default-Zustand durch und schickt einen fertigen
  // Nutzer faelschlich zurueck ins Onboarding.
  if (authLoading || onboardingLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.pageBg }}>
        <ActivityIndicator />
      </View>
    );
  }
  if (!completed) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View style={styles.root}>
    <Tabs
      // "zurueck" fuehrt dorthin, wo man hergekommen ist - nicht auf den
      // ersten Tab (Fehler vom 2026-08-20).
      //
      // Hintergrund: seit alle Screens in dieser Gruppe liegen, sind sie
      // Geschwister im Tab-Navigator und kein Stapel mehr. Der Standard
      // `firstRoute` schickt jedes Zurueck auf den Startscreen - wer von
      // Lektionen in eine Kategorie ging, landete beim Zurueck auf S1.
      // `history` merkt sich stattdessen die tatsaechliche Reihenfolge.
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        // Wie im Stack-Layout: React Navigation faerbt den Untergrund einer
        // Szene sonst mit seinem eigenen Standard (#F2F2F2). Im Darkmode
        // blitzt der beim Tab-Wechsel hellgrau hinter der App auf.
        //
        // Der untere Innenabstand ersetzt den Platz, den die Leiste frueher
        // im Layout belegt hat - seit sie schwebt, muessen die Screens ihn
        // selbst freihalten.
        sceneStyle: {
          backgroundColor: theme.pageBg,
          paddingBottom: bottomOffset + BAR_HEIGHT + CONTENT_GAP,
        },
        tabBarActiveTintColor: ACCENT_ORANGE,
        tabBarInactiveTintColor: theme.sub,
        tabBarBackground: () => <TabBarSurface dark={darkMode} />,
        tabBarStyle: {
          position: 'absolute',
          left: BAR_SIDE,
          width: barWidth,
          bottom: bottomOffset,
          height: BAR_HEIGHT,
          // WARUM DAS HIER STEHEN MUSS (Geraete-Fehler vom 2026-08-20):
          // React Navigation rechnet den unteren Sicherheitsrand als INNEREN
          // Abstand in die Leiste (BottomTabBar.js: `paddingBottom:
          // insets.bottom`). Das ist fuer eine am Rand klebende Leiste
          // richtig - unsere schwebt aber schon oberhalb des Sicherheitsrands,
          // weil `bottom: bottomOffset` ihn bereits einrechnet.
          //
          // Folge ohne diese Zeile: von den 64 Punkten Hoehe gingen auf einem
          // iPhone mit Home-Indikator 34 fuer den doppelt gezaehlten
          // Sicherheitsrand drauf. Uebrig blieb Platz fuer das Symbol, die
          // BESCHRIFTUNG WURDE ABGESCHNITTEN. Im Browser faellt das nie auf:
          // dort ist `insets.bottom` gleich 0, deshalb sahen die Tabs in der
          // Vorschau vollstaendig aus und auf dem Geraet nicht.
          paddingBottom: 0,
          borderRadius: BAR_RADIUS,
          // Der Untergrund kommt komplett aus <TabBarSurface />. Waere hier
          // eine Farbe gesetzt, laege sie ueber dem Blur und wuerde ihn
          // zudecken.
          backgroundColor: 'transparent',
          // Bewusst 1 und nicht `StyleSheet.hairlineWidth`: auf Geraeten mit
          // hoher Pixeldichte waere die Haarlinie duenner als die geforderte
          // 1-px-Kontur und auf hellem Grund praktisch weg.
          //
          // `borderTopWidth` muss ausdruecklich noch einmal dastehen: React
          // Navigation setzt fuer die angedockte Leiste eine eigene
          // Trennlinie oben, und diese Einzelangabe schlaegt unsere
          // Sammelangabe `borderWidth`. Ohne die Zeile hat die Kapsel drei
          // Seiten Kontur und oben keine.
          borderWidth: 1,
          borderTopWidth: 1,
          // Weisse Kontur nach Simons Vorgabe - aber nur im Darkmode, wo sie
          // die Kante vom dunklen Untergrund abhebt. Auf hellem Grund waere
          // weiss auf weiss unsichtbar, dort uebernimmt eine ebenso dezente
          // dunkle Linie dieselbe Aufgabe.
          borderColor: darkMode ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.08)',
          // Weicher Schatten. Auf Android braucht `elevation` eine deckende
          // Flaeche, um zu zeichnen - dort bleibt der Schatten bei diesem
          // durchscheinenden Aufbau schwach. Bewusst hingenommen, iOS ist
          // die Zielplattform dieses Effekts.
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 25,
          shadowOpacity: darkMode ? 0.4 : 0.16,
          elevation: 12,
        },
        // Ausdruecklich, nicht auf den Standard verlassen: ohne
        // Beschriftungen stehen vier gleich aussehende Symbole in einer
        // breiten Leiste, und niemand weiss, was sie tun.
        tabBarShowLabel: true,
        tabBarItemStyle: {
          // Klein gehalten: die Leiste ist mit 64 niedriger als eine
          // Standardleiste samt Sicherheitsrand, und Symbol UND Beschriftung
          // muessen hineinpassen. Mit SPACING.sm oben und unten blieb fuer
          // die Beschriftung zu wenig, sie wurde abgeschnitten.
          paddingTop: SPACING.xs,
          paddingBottom: SPACING.xs,
          // Ohne das setzt die Leiste einen eigenen seitlichen Abstand pro
          // Eintrag - die Symbole stehen dann weiter auseinander, als die
          // Kapsel breit ist.
          paddingHorizontal: 0,
        },
        tabBarLabelStyle: {
          fontSize: FONT_SIZE.caption - 2,
          fontWeight: '700',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Start',
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="lektionen"
        options={{
          title: 'Lektionen',
          tabBarIcon: ({ color, size }) => <Feather name="star" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="survival"
        options={{
          title: 'Survival',
          tabBarIcon: ({ color, size }) => <Feather name="bookmark" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="freunde"
        options={{
          title: 'Freunde',
          tabBarIcon: ({ color, size }) => <Feather name="message-circle" size={size} color={color} />,
        }}
      />
      {/* Profil ist seit dem 2026-08-22 wieder ein echter Tab
          (Nutzer-Entscheidung). Damit sind es fuenf - Apples Obergrenze fuer
          eine Tab-Leiste, also genau ausgereizt und kein Platz mehr fuer
          einen sechsten. Ueber das Drei-Punkte-Menue ist er weiterhin
          erreichbar; doppelt schadet hier nichts, der Weg aus der Kopfzeile
          war vorher der einzige. */}
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
        }}
      />
      {/* Ab hier: Screens, die in der Gruppe liegen, damit die Tab-Leiste auf
          ihnen sichtbar bleibt (Nutzer-Wunsch 2026-08-20) - aber KEIN eigener
          Tab sind. `href: null` nimmt sie aus der Leiste, ohne sie aus dem
          Navigator zu nehmen. Ohne diese Eintraege haette die Leiste zwoelf
          Symbole statt fuenf. */}
      <Tabs.Screen name="shop" options={{ href: null }} />
      <Tabs.Screen name="training/[mode]" options={{ href: null }} />
      <Tabs.Screen name="training/woerter" options={{ href: null }} />
      {/* Fehlte seit dem 26.08. (Bau von SentenceReviewScreen) - fiel bisher
          nicht auf, weil "Sätze-Wiederholung" ohnehin nur ueber den
          Trainingsmodi-Kasten erreichbar ist, nie ueber die Leiste selbst.
          Nachgetragen fuers Konsistenz mit den Geschwistern oben. */}
      <Tabs.Screen name="training/saetze" options={{ href: null }} />
      <Tabs.Screen name="lesson/[id]" options={{ href: null }} />
      <Tabs.Screen name="wiederholen" options={{ href: null }} />
      <Tabs.Screen name="wortliste" options={{ href: null }} />
      <Tabs.Screen name="anrede" options={{ href: null }} />
      <Tabs.Screen name="konto" options={{ href: null }} />
      <Tabs.Screen name="srs" options={{ href: null }} />
      <Tabs.Screen name="exercise" options={{ href: null }} />
      <Tabs.Screen name="rewards" options={{ href: null }} />
      <Tabs.Screen name="category/[id]" options={{ href: null }} />
      <Tabs.Screen name="cheatsheet/[groupId]" options={{ href: null }} />
      <Tabs.Screen name="cheatsheet/search-results" options={{ href: null }} />
    </Tabs>

    </View>
  );
}

// Der milchige Untergrund der Leiste.
//
// `systemThinMaterial` ist Apples eigenes Material und passt sich automatisch
// an, was darunter durchscheint - deshalb die Systemvariante statt eines
// nachgebauten Grautons. Die Hell-/Dunkelvariante wird ausdruecklich gewaehlt
// statt der automatischen: der Darkmode der App ist ein eigener Schalter und
// folgt nicht zwingend dem System-Erscheinungsbild.
//
// Der Farbschleier darueber ist bewusst duenn. Die geforderte leichte
// Undurchsichtigkeit entsteht aus Material + Schleier zusammen; als flacher
// `opacity`-Wert auf der ganzen Leiste haette er auch Symbole und
// Beschriftungen mit ausgeblichen.
//
// `overflow: 'hidden'` statt `borderRadius` direkt auf der BlurView: die
// Ecken-Rundung greift laut Expo-Doku auf Android sonst nicht.
function TabBarSurface({ dark, radius = BAR_RADIUS }: { dark: boolean; radius?: number }) {
  return (
    <View style={[styles.surface, { borderRadius: radius }]}>
      <BlurView
        intensity={60}
        tint={dark ? 'systemThinMaterialDark' : 'systemThinMaterialLight'}
        // Ohne diese Angabe zeichnet Android gar keinen Blur.
        blurMethod={Platform.OS === 'android' ? 'dimezisBlurViewSdk31Plus' : undefined}
        style={StyleSheet.absoluteFill}
      />
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: dark ? 'rgba(24,24,22,0.22)' : 'rgba(255,255,255,0.12)' },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  surface: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
  },
});
