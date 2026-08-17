import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';
import { Redirect, Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppState } from '../../src/state/AppState';
import { useAuthState } from '../../src/state/AuthState';
import { useOnboardingState } from '../../src/state/OnboardingState';
import { getTheme, ACCENT_ORANGE, FONT_SIZE, SPACING } from '../../src/theme/tokens';

// Tab-Leiste (2026-08-18, seit dem 18. als schwebende Leiste).
//
// Fuenf Einstiegspunkte nach Simons Vorlage
// (`Screenplanung/UI - Rest/Homepage/Homescreen grobe Themenuebersicht.png`).
// Damit gilt das frueher in CLAUDE.md festgehaltene "der Pfad ist die EINE
// Navigation" nicht mehr - bewusste Entscheidung, die Doku ist nachgezogen.
//
// Zwei Punkte aus den Apple-Richtlinien, die hier den Ausschlag geben:
// - Zwei bis fuenf Ziele. Fuenf ist das Maximum, mehr passt nicht nebeneinander.
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
const FLOAT_GAP = 14;
const BAR_HEIGHT = 64;
const BAR_RADIUS = 36;
// Abstand zwischen Bildschirminhalt und Leiste. Ohne das verschwaende der
// Inhalt unter der Leiste - sie liegt absolut positioniert darueber und
// reserviert keinen Platz mehr im Layout.
const CONTENT_GAP = SPACING.md;

export default function TabsLayout() {
  const { darkMode } = useAppState();
  const { loading: authLoading } = useAuthState();
  const { completed, loading: onboardingLoading } = useOnboardingState();
  const theme = getTheme(darkMode);
  const insets = useSafeAreaInsets();

  const bottomOffset = Math.max(insets.bottom, FLOAT_GAP);

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
    <Tabs
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
          left: SPACING.lg,
          right: SPACING.lg,
          bottom: bottomOffset,
          height: BAR_HEIGHT,
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
        tabBarItemStyle: {
          // Die Leiste ist niedriger als die Standardleiste samt
          // Sicherheitsrand - ohne eigenen Innenabstand kleben Symbol und
          // Beschriftung an der Oberkante.
          paddingTop: SPACING.sm,
          paddingBottom: SPACING.sm,
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
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
        }}
      />
    </Tabs>
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
function TabBarSurface({ dark }: { dark: boolean }) {
  return (
    <View style={styles.surface}>
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
  surface: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: BAR_RADIUS,
    overflow: 'hidden',
  },
});
