import { useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  AppState as RNAppState,
  StyleSheet,
  View,
} from 'react-native';
import { Redirect, Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { CONTENT_GAP, leistenKarte, useTabLeiste } from '../../src/components/tabLeiste';
import { useAppState } from '../../src/state/AppState';
import { useAuthState } from '../../src/state/AuthState';
import { useOnboardingState } from '../../src/state/OnboardingState';
import {
  getTheme,
  ACCENT_ORANGE,
  FONT_SIZE,
  SPACING,
  schrift,
} from '../../src/theme/tokens';

// Tab-Leiste (2026-08-18). Bis 2026-09-13 eine schwebende Kapsel mit
// Milchglas, seitdem die angedockte Leiste, die vorher nur auf Freunde
// stand (Simon: "die regulaere Tab-Bar mit der Tab-Bar von Freunde
// ersetzen") - Masse und Material in src/components/tabLeiste.ts.
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

// --- Masse der Leiste -------------------------------------------------------
// Liegen in src/components/tabLeiste.ts (samt Begruendungen): Screens, deren
// Inhalt unter der Leiste durchlaeuft, brauchen dieselben Zahlen fuer ihr
// Scroll-Ende.

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

export default function TabsLayout() {
  const { darkMode, hydrated, abgleichen } = useAppState();
  const { loading: authLoading, session } = useAuthState();
  const { completed, loading: onboardingLoading } = useOnboardingState();
  const theme = getTheme(darkMode);
  const leiste = useTabLeiste();

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
        // Der untere Innenabstand ersetzt den Platz, den die Leiste sonst im
        // Layout belegen wuerde - sie liegt absolut darueber, die Screens
        // muessen ihn selbst freihalten. S1 schaltet ihn ab und
        // verlegt ihn in seine Scroll-Flaeche (`useTabLeistenFreiraum`).
        sceneStyle: {
          backgroundColor: theme.pageBg,
          paddingBottom: leiste.hoehe + CONTENT_GAP,
        },
        tabBarActiveTintColor: ACCENT_ORANGE,
        tabBarInactiveTintColor: theme.sub,
        tabBarStyle: {
          // Absolut, damit S1 seine untere Karte bis an den
          // Bildschirmrand ziehen kann - unter der Leiste durch.
          position: 'absolute',
          // `start`/`end` ZUSAETZLICH zu left/right (Geraetefehler vom
          // 2026-09-11): die von expo-router mitgelieferte Tab-Bibliothek
          // setzt `start: 0, end: 0`, und auf iOS schlaegt das logische
          // `start` das physische `left`. Im Browser gewinnt `left`, deshalb
          // war das in der Vorschau nie zu sehen.
          start: 0,
          end: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: leiste.hoehe,
          // Der (gekappte) Sicherheitsrand INNEN - siehe `useTabLeiste`.
          // React Navigation setzt hier sonst `insets.bottom` in voller Hoehe.
          paddingBottom: leiste.rand,
          // Deckend weiss wie die fruehere Kopfleiste, kein Milchglas.
          backgroundColor: theme.cardBg,
          // Rand, Rundung und Schatten gespiegelt - siehe `leistenKarte`.
          // Setzt `borderTopWidth` ausdruecklich: React Navigation zieht fuer
          // die angedockte Leiste sonst eine eigene Trennlinie oben.
          ...leistenKarte(darkMode),
        },
        // Ausdruecklich, nicht auf den Standard verlassen: ohne
        // Beschriftungen stehen vier gleich aussehende Symbole in einer
        // breiten Leiste, und niemand weiss, was sie tun.
        tabBarShowLabel: true,
        tabBarItemStyle: {
          // Klein gehalten: Symbol UND Beschriftung muessen in das 56 hohe
          // Band passen. Mit SPACING.sm oben und unten blieb fuer die
          // Beschriftung zu wenig, sie wurde abgeschnitten.
          paddingTop: SPACING.xs,
          paddingBottom: SPACING.xs,
          // Ohne das setzt die Leiste einen eigenen seitlichen Abstand pro
          // Eintrag - die Symbole stehen dann weiter auseinander, als die
          // Kapsel breit ist.
          paddingHorizontal: 0,
        },
        tabBarLabelStyle: {
          fontSize: FONT_SIZE.caption - 2,
          ...schrift('700'),
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
      {/* Detailseiten des Profils (2026-09-11, Umbau im iOS-Stil). */}
      <Tabs.Screen name="einstellungen/sperrbildschirm" options={{ href: null }} />
      <Tabs.Screen name="einstellungen/herausforderungen" options={{ href: null }} />
    </Tabs>

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
