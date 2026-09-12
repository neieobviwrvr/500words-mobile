import { useLayoutEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { router, useNavigation } from 'expo-router';
import type { BottomTabNavigationProp } from 'expo-router/tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dropdown, ProgressBar, ProgressProzent, Screen } from '../../components';
import type { DropdownOption } from '../../components';
import { CONTENT_GAP } from '../../components/tabLeiste';
import { CATEGORIES, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { LANGUAGES, getLanguage } from '../../data/languages';
import { useUnlockedProgress } from '../home/useUnlockedProgress';
import { useAppState } from '../../state/AppState';
import {
  KACHEL_RAND_LIGHT,
  getTheme,
  karte,
  PROGRESS_SEITE,
  RADIUS,
  SPACING,
} from '../../theme/tokens';
import { Standortzeile, useStandort } from '../home/Standort';
import {
  BildKarte,
  BlattKarte,
  KARTE_HOEHE,
  KARTE_SEITE,
  Knopfreihe,
  LektionsPille,
  SCHATTEN,
  SCHATTEN_TIEFE,
  useUmdrehen,
  WechselKnopf,
} from '../home/Drehkarten';

// TESTSCREEN (2026-09-11, Simon: "a box like the lernpfad that is kind of a
// holographic image or playcard that flips 180 degrees"). Haengt
// voruebergehend an /freunde, siehe `HOLO_TEST` in app/(tabs)/freunde.tsx.
// Kein Produktcode: wenn der Test vorbei ist, den Schalter dort entfernen
// und diesen Ordner loeschen.
//
// Zwei Karten:
//   OBEN  das Bild "Mandarin". Kippt beim Ziehen, dreht sich beim Tippen.
//         Die Pillen darauf (Serie, Abzeichen) sind Teil des Bildes - die
//         eigene Coins-Pille ist deshalb raus, sie lag genau auf der
//         gemalten. Die Rueckseite war zuerst leer und traegt seit dem
//         2026-09-12 eine eigene Flaeche: bei der gemeinsamen Drehung sah
//         eine leere Rueckseite nach "Bild verschwindet" aus, waehrend die
//         untere Karte scheinbar stillstand.
//   UNTEN die weisse Karte - erhoben wie ein Blatt, das vom unteren Rand
//         heraufsteigt; scrollbar, dreht sich beim Tippen und kippt beim
//         QUEREN Ziehen (senkrecht scrollt sie weiter). Inhalt: noch keiner,
//         das Stueck gefuehrter Pfad darin ist am 2026-09-12 wieder raus -
//         geblieben ist ein Raster aus Haarlinien (`Struktur`), an dem man
//         die Drehung ueberhaupt ablesen kann.
//
// Beide Karten tragen denselben Schatten (`SCHATTEN`) und beide eine
// gezeichnete Flaeche - vorher war die Drehung oben ein Foto, das sich
// verzieht, und unten eine einfarbige Flaeche, an der nichts zu sehen war
// (2026-09-12, Simons Beobachtung: "so much dissonance between the two
// cards when turning").
//
// Jede Karte dreht sich beim Tippen selbst - und der Wechsel-Knopf zwischen
// ihnen dreht BEIDE gleichzeitig (2026-09-12, Simons Wunsch). Deshalb liegen
// beide Drehungen im Screen und nicht in den Karten. Zwischendurch drehte ein
// Tipp auf die obere die UNTERE ("only the lower card can rotate"); das ist
// mit dem Bild-Wunsch am selben Tag ueberholt ("the image should be
// turnable").
//
// Die obere Karte war erst gezeichnet: Perlmutt, wandernde Regenbogen-Folie
// und Glanz, zuletzt mit `react-native-svg`, weil Simons Vorlage eine
// gewoelbte Unterkante hatte und React Native nur Eckenradien kennt. Seit
// dem 2026-09-12 IST sie das Bild "Mandarin" aus dem Marketing-Ordner, in
// gleicher Groesse und Rundung. `react-native-svg` bleibt installiert (es
// gehoert ohnehin in den naechsten Build), wird hier aber nicht mehr
// gebraucht - und mit der gezeichneten Flaeche ist auch ihr Preis weg: alle
// Animationen laufen wieder ueber den nativen Treiber.
//
// `react-native-svg` ist NATIV: im Browser wirkt es sofort, auf dem iPhone
// erst mit dem naechsten Build.

/** Hoechste Neigung beim Ziehen, in Grad. Mehr wirkt wie Wackeln. */
/**
 * Die obere Karte: das Bild "Mandarin" IST die Karte (2026-09-12, Simon -
 * gleiche Groesse, gleiche Rundung, gleicher Schatten wie die gezeichnete
 * Karte davor, "indistinguishable from the card we have right now").
 *
 * Sie dreht sich beim Tippen und zeigt hinten NICHTS: die Rueckseite ist
 * eine leere Flaeche ohne Grund und ohne Schatten, dort schaut der
 * Seitenhintergrund durch. Beim Ziehen kippt sie wie vorher.
 */
const MANDARIN = require('../../../assets/sprachkarte-zh.png');

/**
 * Die Tab-Leiste im Gewand der Top-Bar (2026-09-12, Simons Wunsch:
 * "kannst du bei Freunde die Tab-Bar so bauen wie die Top-Bar und im selben
 * Zug bei Freunde die Top-Bar entfernen?").
 *
 * Aus der schwebenden Kapsel wird damit eine angedockte Karte am unteren
 * Rand - dieselbe Flaeche, dieselbe Kontur, derselbe Radius wie die
 * Kopfleiste, nur GESPIEGELT: die Kopfleiste laeuft oben aus dem Bild und
 * ist deshalb unten gerundet, diese laeuft unten hinaus und ist oben
 * gerundet.
 *
 * Die Einstellung steht in diesem Screen und nicht im Tab-Layout: sie gilt
 * nur hier, und wenn der Testbereich geloescht wird, verschwindet sie mit
 * ihm.
 *
 * Auf `false` ist alles wie ueberall sonst - eine Zeile.
 */
const LEISTE_WIE_TOPBAR = true;

export function HoloKarteTest() {
  const { darkMode, purchased, targetLanguageId, setTargetLanguageId, learningMode } =
    useAppState();
  const theme = getTheme(darkMode);
  const sicherRand = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  // BEIDE Drehungen liegen hier (2026-09-12, Simon: der Wechsel-Knopf soll
  // "both the cards turn at the same time"). Das geht nur, wenn keine Karte
  // ihre Drehung fuer sich behaelt - einzeln antippen laesst sich trotzdem
  // weiterhin jede.
  const oben = useUmdrehen();
  const unten = useUmdrehen();

  // Beide im selben Tick gestartet, mit gleicher Dauer und Kurve: dadurch
  // laufen sie Bild fuer Bild synchron, statt nur kurz nacheinander.
  const beideUmdrehen = () => {
    oben.umdrehen();
    unten.umdrehen();
  };

  // Derselbe ECHTE Wert wie auf S1 im Speed-Run: Anteil der freigeschalteten
  // Saetze, die schon einmal bewertet wurden. Kein Platzhalter - der Balken
  // soll hier zeigen, was er auf S1 zeigt. (Den Kurs-Anteil des gefuehrten
  // Modus laesst dieser Testscreen bewusst aus, das waere ein zweiter Hook
  // fuer einen Screen, der wieder verschwindet.)
  const freigeschaltet = useMemo(
    () => [GRUNDWORTSCHATZ_ID, ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id)],
    [purchased],
  );
  const anteil = useUnlockedProgress(targetLanguageId, freigeschaltet).ratio;

  // Die Sprachauswahl ist mit der Kopfleiste weggefallen und kommt als
  // Flagge neben dem Balken zurueck (2026-09-12, Simons Wunsch) - derselbe
  // Baustein wie auf S1, nur mit dem kleinen Ausloeser.
  const sprachen: DropdownOption[] = LANGUAGES.map((l) => ({
    id: l.id,
    label: l.label,
    disabled: !l.hasContent,
    note: l.hasContent ? undefined : 'bald',
  }));

  // Die Tab-Leiste bekommt das Gewand der frueheren Kopfleiste: dieselbe
  // `karte()`, nur gespiegelt. Die Kopfleiste lief oben aus dem Bild (kein
  // oberer Rand, unten gerundet) - diese laeuft unten hinaus, also kein
  // unterer Rand und oben gerundet.
  //
  // Auch der Schatten spiegelt: `karte()` wirft ihn nach unten, wo er bei
  // einer am Boden klebenden Leiste aus dem Bild faellt. Nach oben liegt er
  // auf dem Inhalt - und genau das tut er bei der Kopfleiste auch.
  const { borderWidth: kartenRand, borderRadius: kartenRadius, ...kartenRest } = karte(darkMode);
  const leisteKarte = {
    ...kartenRest,
    shadowOffset: { width: 0, height: -2 },
    borderBottomWidth: 0,
    borderLeftWidth: kartenRand,
    borderRightWidth: kartenRand,
    borderTopWidth: kartenRand,
    borderTopLeftRadius: kartenRadius,
    borderTopRightRadius: kartenRadius,
  };
  // Die untere Karte laeuft unten aus dem Bildschirm, also Rand und Rundung
  // nur OBEN und an den Seiten. Seit sie nicht mehr randlos ist
  // (2026-09-12), traegt sie auch links und rechts die Kontur - vorher lag
  // die genau auf der Bildschirmkante und war sinnlos.
  //
  // ERHOBEN (2026-09-12, Simon: "do it with the white of the top-bar but do
  // it like elevated") und seit demselben Tag mit der 3D-Kontur der S1-
  // Knoepfe ("make the lower card look more 3D - similar to the buttons on
  // S1"): satter Slate-Rand wie in `kachel()`, dazu der weiche Schatten des
  // Floating-Looks. Nicht `karte()`: deren Schatten faellt schraeg nach
  // rechts unten und liegt damit HINTER dieser Karte.
  //
  // Was hier NICHT ankommt, ist `kachel()`s eigentliche Druckkante: die
  // sitzt UNTEN, und die Karte laeuft unten aus dem Bildschirm. Sichtbar
  // wird die Tiefe deshalb nur ueber Rand und Schatten - fuer die echte
  // Kante muesste die Karte oberhalb der Tab-Leiste enden.
  //
  // Der Schatten ist seit dem 2026-09-12 derselbe wie bei der Bildkarte
  // (`SCHATTEN`), nur nach OBEN gespiegelt - die Begruendung fuer beides
  // steht dort.
  const blattKarte = {
    // 1.5 wie `kachel()` - merklich kraeftiger als die blasse Kontur des
    // Floating-Looks, die hier vorher stand.
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderBottomWidth: 0,
    borderColor: darkMode ? theme.border : KACHEL_RAND_LIGHT,
    borderTopLeftRadius: RADIUS.lg,
    borderTopRightRadius: RADIUS.lg,
    // Im Darkmode traegt ein Schatten nichts bei (siehe tokens.ts) - dort
    // macht die hellere Flaeche die Hoehe.
    ...(darkMode
      ? null
      : { ...SCHATTEN, shadowOffset: { width: 0, height: -SCHATTEN_TIEFE } }),
  };
  // Der Platz, den das Tab-Layout sonst unten freihaelt - hier wandert er in
  // die Scroll-Flaeche der unteren Karte, damit ihr letzter Eintrag ueber
  // der Leiste endet statt darunter.
  // Der Testscreen liest die drei Quellen nur fuer diese Zeile - deshalb der
  // bequeme Hook. S1 hat sie ohnehin und rechnet direkt.
  const standort = useStandort(targetLanguageId, learningMode);

  // Die angedockte Leiste braucht weniger Platz als die schwebende: es
  // entfaellt der Schwebeabstand, der Sicherheitsrand steckt jetzt IN ihr.
  //
  // Und sie ist flacher als die schwebende (2026-09-12, Simon: das Weiss
  // unter den Symbolen reduzieren): die Kapsel braucht ihre 68, weil sie
  // frei steht und rundum Luft hat - eine angedockte Leiste kommt mit 56
  // aus, das ist die zweite Knopfhoehe der App und immer noch mehr als
  // Apples eigene Leiste (49).
  //
  // Der Sicherheitsrand darunter BLEIBT: dort liegt der Home-Indikator, und
  // Symbole in diesem Streifen waeren teils nicht bedienbar. Das ist der
  // weisse Rest, der unten stehen bleibt - Geraet, nicht Gestaltung.
  const leistenBand = 56;
  // Derselbe gekappte Wert wie im Innenabstand unten - sonst waere die
  // Leiste hoeher als ihr Inhalt und der Schnitt waere wieder da.
  const leistenRand = Math.min(sicherRand.bottom, SPACING.lg);
  const leistenHoehe = leistenBand + leistenRand;
  const freiraum = leistenHoehe + CONTENT_GAP;

  // Diesem einen Screen den unteren Innenabstand des Tab-Layouts abnehmen:
  // nur so reicht die untere Karte wirklich bis an den Bildschirmrand, und
  // auch ihr Stueck unter der Leiste bleibt beruehr- und scrollbar. Einfach
  // ueber den Screen hinausragen liesse dieses Stueck auf dem iPhone tot -
  // iOS nimmt keine Beruehrung ausserhalb des Elternelements an.
  //
  // `sceneStyle` ersetzt das ganze Objekt aus dem Layout, deshalb steht der
  // Untergrund noch einmal hier. Der Abstand geht nicht verloren, er sitzt
  // jetzt als `freiraum` in der Scroll-Flaeche. Faellt der Testscreen weg,
  // faellt diese Ausnahme mit ihm.
  const navigation = useNavigation<BottomTabNavigationProp<Record<string, object | undefined>>>();
  useLayoutEffect(() => {
    navigation.setOptions({
      sceneStyle: { backgroundColor: theme.pageBg, paddingBottom: 0 },
      // Die Leiste im Gewand der Kopfleiste, siehe `LEISTE_WIE_TOPBAR`.
      ...(LEISTE_WIE_TOPBAR
        ? {
            tabBarStyle: {
              position: 'absolute' as const,
              // `start`/`end` ZUSAETZLICH zu left/right: auf iOS schlaegt
              // das logische `start` das physische `left`, und die
              // mitgelieferte Leiste setzt beide. Ohne das stuende sie
              // seitlich versetzt (derselbe Geraetefehler wie 2026-09-11 im
              // Tab-Layout).
              start: 0,
              end: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: leistenHoehe,
              // Der Sicherheitsrand gehoert hier NACH INNEN: die Leiste
              // klebt am Rand, ihre Symbole duerfen nicht unter dem
              // Home-Indikator liegen.
              //
              // GEKAPPT auf hoechstens SPACING.lg (2026-09-13, Simon nach
              // dem zweiten Blick aufs Geraet: unten ist immer noch zu viel
              // weiss). Auf einem iPhone 12 sind das 16 statt 34 Punkte.
              //
              // Was das kostet: die Beschriftungen ruecken in die Naehe des
              // Home-Indikators. Die Wischgeste von unten gehoert weiterhin
              // iOS - ein Tipp auf die Symbole funktioniert, ein Wisch von
              // ganz unten fuehrt aus der App. Apples eigene Leiste laesst
              // den Streifen deshalb frei; das hier ist bewusst enger.
              paddingBottom: leistenRand,
              backgroundColor: theme.cardBg,
              ...leisteKarte,
            },
            // Kein Milchglas mehr - die Kopfleiste ist deckend weiss, und
            // der Untergrund aus dem Tab-Layout laege sonst darueber.
            tabBarBackground: () => null,
          }
        : null),
    });
  }, [navigation, theme.pageBg, leisteKarte, leistenHoehe, leistenRand, theme.cardBg]);


  // Seit 2026-09-12 nicht mehr randlos, sondern mit KARTE_SEITE Abstand zu
  // beiden Seiten - genau wie die untere Karte ("do the same to the top
  // card"). 35% der Fensterhoehe hoch. Auf einem 375 x 812 grossen Handy:
  // 351 x 284.
  const breite = width - 2 * KARTE_SEITE;
  const hoehe = Math.round(height * KARTE_HOEHE);


  return (
    <Screen dark={darkMode}>
      {/* Keine Kopfleiste mehr (2026-09-12, Simons Wunsch: "im selben Zug
          bei Freunde die Top-Bar entfernen"). Mit ihr sind Sprachauswahl und
          das Drei-Punkte-Menue von diesem Screen verschwunden - der Weg zu
          Geschenk und Coins fuehrt hier also nicht mehr entlang. */}
      {/* Ueber dem Balken: wo man gerade steht (2026-09-12, Simon: "setz
          ueber die Progressionbar wo wir uns grade befinden"). Inhalt und
          Aufbau stammen aus dem "Du bist hier"-Kasten, den S1 beim Umbau
          verloren hat - hier ohne Kasten, nur die zwei Zeilen. */}
      <View style={styles.standortReihe}>
        <Standortzeile dark={darkMode} standort={standort} />
      </View>

      {/* Fortschrittsbalken wie auf S1 (Simon, 2026-09-12: "put the
          progressionbar on Freunde right under the top bar"). */}
      <View style={styles.progressRow}>
        {/* Links die Flagge der Lernsprache, wie auf S1: derselbe Baustein
            mit kleinerem Ausloeser, und zugleich das Gegengewicht zur
            Prozentzahl rechts - der Balken bleibt dadurch mittig und genau
            so breit wie dort. */}
        <View style={styles.progressSeite}>
          <Dropdown
            compact
            symbol={getLanguage(targetLanguageId).flagge}
            options={sprachen}
            selectedId={targetLanguageId}
            onSelect={setTargetLanguageId}
            dark={darkMode}
            title="Welche Sprache lernst du?"
            accessibilityLabel="Sprache"
            rahmen="ohne"
          />
        </View>
        {/* Der Balken in einer eigenen Huelle, damit er MITTIG in der Zeile
            sitzt (2026-09-13, Simons Befund: die Mitte der Flagge lag 7
            Punkte unter der Mitte des Balkens).

            Ursache: die Spur traegt `alignSelf: 'stretch'` (fuer den Fall,
            dass der Balken in einer SPALTE steht und die volle Breite
            braucht). Bei fester Hoehe stretcht das nichts, sondern setzt
            ihn an den Anfang der Achse - in einer Zeile also nach OBEN, und
            das schlaegt das `alignItems: 'center'` der Zeile.

            Die Huelle nimmt den Platz ein, wird von der Zeile mittig
            gesetzt und laesst die Spur darin ihre Breite fuellen. So bleibt
            `ProgressBar` unangetastet - es gibt sechs Verwendungen, und in
            den Spalten ist das Strecken richtig. */}
        <View style={styles.balkenPlatz}>
                  <ProgressBar
            dark={darkMode}
            ratio={anteil}
            label={`${Math.round(anteil * 100)} Prozent deiner freigeschalteten Inhalte geübt`}
          />
        </View>
        <View style={styles.progressSeite}>
          <ProgressProzent dark={darkMode} ratio={anteil} />
        </View>
      </View>

      <View style={styles.buehne}>
        <View style={styles.karteUnterLeiste}>
          <BildKarte
            breite={breite}
            hoehe={hoehe}
            dreh={oben.dreh}
            seite={oben.seite}
            umdrehen={oben.umdrehen}
            quelle={MANDARIN}
            name="Mandarin-Karte"
          />
        </View>

        {/* Untere Karte (Simon, 2026-09-11: "another card right below that -
            the card is allowed to go below the Tab-Bar and to be
            scrollable"). Reicht bis an den unteren Bildschirmrand, unter der
            schwebenden Leiste durch; ihr Inhalt scrollt in ihr. Inhalt hat
            sie im Moment keinen - was hineinkommt, ist noch offen. */}
        {/* Die Knopfreihe ZWISCHEN den Karten (2026-09-12, Simon: erst
            "overlapping both", dann "move it between the two cards"). Sie
            steht in der normalen Reihenfolge, nicht absolut darueber - die
            untere Karte ruecht um ihre Hoehe nach unten.
            Reihenfolge Pille - runder Knopf - Pille nach Simons Vorlage. */}
        <Knopfreihe>
          <LektionsPille dark={darkMode} label="Sprachlektion" />

          {/* Der runde Knopf in der Mitte dreht BEIDE Karten gleichzeitig
              (2026-09-12, Simons Wunsch) - die eine echte Handlung hier.
              Die Schleife wie auf S1 (2026-09-12, Simon: "keep the loop icon
              from S1"): kurz stand hier der waagerechte Doppelpfeil seiner
              Vorlage, das ist zurueckgenommen. Sie passt auch besser - der
              Knopf dreht die Karten, er fuehrt nicht woandershin. */}
          <WechselKnopf
            dark={darkMode}
            onPress={beideUmdrehen}
            label="Beide Karten umdrehen"
            hinweis="Dreht die obere und die untere Karte gleichzeitig"
          />

          {/* Genau das, was "Tägliches Wiederholen" auf S1 tut (2026-09-12,
              Simons Vorgabe) - Ziel und Hinweis sind aus `PathScreen.tsx`
              uebernommen, nicht neu erfunden:

              Direkt in EINE gemischte Sitzung, ohne Zwischenscreen. Das
              taegliche Wiederholen ist der gemeinsame Pool aus Woertern und
              Saetzen; wer davor erst waehlen muss, uebt die Haelfte nicht.

              WOHIN, haengt am LERNWEG und nicht an der Sprache: wiederholt
              wird das, was man auch lernt. `gefuehrt` fuehrt zu den
              Kurs-Karten, `speedrun` zur globalen Satz-Wiederholung ueber
              alle Kategorien.

              Bewusst KOPIERT statt ausgelagert - wie die Kopfleiste weiter
              oben: dieser Screen verschwindet wieder, und S1 soll dafuer
              nicht umgebaut werden. Wird daraus echte Navigation, gehoert
              der Griff in ein gemeinsames Bauteil. */}
          <LektionsPille
            dark={darkMode}
            label="Tageslektion"
            hinweis={
              learningMode === 'gefuehrt'
                ? 'Wiederholt die Wörter und Satzmuster aus dem Kurs'
                : 'Wiederholt die fälligen Sätze aus dem Speed-Run'
            }
            onPress={() =>
              router.push(learningMode === 'gefuehrt' ? '/wiederholen' : '/training/saetze')
            }
          />
        </Knopfreihe>

        <View style={styles.blatt}>
          <BlattKarte
            rahmen={blattKarte}
            name="Farbkarte"
            vorne={<ScrollView contentContainerStyle={[styles.blattInhalt, { paddingBottom: freiraum }]} />}
            hinten={<ScrollView contentContainerStyle={[styles.blattInhalt, { paddingBottom: freiraum }]} />}
            dreh={unten.dreh}
            seite={unten.seite}
            umdrehen={unten.umdrehen}
            linien={theme.border}
            // Wieder auf der Palette (2026-09-12, Simons letzte Wahl nach
            // sechs Stufen: #FFFFFF, #FAFAF9, #F5F4F1, #E6E4E0, #EEECE9,
            // zurueck zu #F5F4F1). `theme.subtleFill` ist genau dieser Ton -
            // dasselbe Off-White, auf dem auf S1 die weissen Karten liegen.
            farbe={theme.subtleFill}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buehne: {
    // Oben angesetzt, nicht mittig: die Karte gehoert direkt unter die
    // Top-Bar. Seitlich gestreckt (Vorgabe), damit `karteUnterLeiste` mit
    // seinem negativen Rand die volle Breite bekommt.
    flex: 1,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    // Unter die Leiste (Simons Wunsch). Der Betrag holt zuerst ihren
    // Ueberstand ueber die Knoepfe auf (LEISTE_UEBERSTAND) und setzt dann
    // den Abstand darunter.
    //
    // 2026-09-12 von md auf xl ("more space up and down of the bar"). Damit
    // stand der Balken 24 Punkte unter der Leistenkante.
    //
    // Seit die Standort-Zeile darueber sitzt, haelt SIE diesen Abstand zur
    // Leiste; hier bleibt nur noch der Abstand zwischen Zeile und Balken.
    // Alles darunter verschiebt sich entsprechend nach unten - genau das war
    // Simons Vorgabe ("der Rest darunter darf etwas nach unten verschoben
    // werden").
    marginTop: SPACING.lg,
  },
  standortReihe: {
    // Ohne Kopfleiste holt hier nichts mehr einen Ueberstand auf - es ist
    // schlicht der Abstand zum oberen Rand.
    //
    // In zwei Schritten am 2026-09-12/13 heruntergefahren (Simon: "immer
    // noch zu viel weisse Flaeche gaanz oben"): erst xl -> sm, dann auf
    // NEGATIV. Die -8 nehmen die Polsterung zurueck, die `Screen` allen
    // Seiten gibt - der Text steht damit direkt unter der Statusleiste.
    //
    // Weiter geht es nicht, ohne DARUNTER zu rutschen: die restlichen rund
    // 47 Punkte auf einem iPhone 12 sind der Sicherheitsrand mit Uhrzeit,
    // Signal und Notch. Text dort waere teilweise verdeckt.
    marginTop: -SPACING.sm,
  },
  balkenPlatz: {
    // Nimmt die Restbreite; die Hoehe kommt vom Balken selbst, damit die
    // Zeile ihn mittig setzen kann.
    flex: 1,
  },
  progressSeite: {
    width: PROGRESS_SEITE,
    // Rechtsbuendig, damit die Zahl am Balken klebt statt am Rand.
    alignItems: 'flex-end',
  },
  karteUnterLeiste: {
    // Unter dem Balken; der Abstand zur Leiste steckt in `progressRow`.
    // Derselbe Wert wie dort ueber dem Balken, damit er mittig zwischen
    // Leiste und Karte sitzt statt an einer von beiden zu kleben.
    marginTop: SPACING.xl,
    // `Screen` polstert seitlich um SPACING.lg; die Differenz holt die Karte
    // wieder heraus, damit genau KARTE_SEITE stehen bleibt - dieselbe
    // Rechnung wie bei der unteren Karte.
    marginHorizontal: KARTE_SEITE - SPACING.lg,
    // KEIN zIndex mehr (2026-09-12): die UNTERE Karte liegt jetzt vorn,
    // damit ihr Schatten auf die obere faellt und sie erhoben wirkt. Vorher
    // lag die obere vorn - dann sah die untere aus, als staecke sie
    // darunter (Simons Rueckmeldung: "looks like it is below the top one").
  },
  blatt: {
    flex: 1,
    // Kein eigener Abstand mehr: zwischen den Karten steht die Knopfreihe,
    // und die bringt ihn mit (`knopfReihe.marginBottom`).
    // Nicht mehr randlos (2026-09-12, Simon: "not full-width but with a bit
    // more distance to the sides", dann "10px"). `Screen` polstert seitlich
    // um SPACING.lg; die Differenz holt die Karte wieder heraus, damit genau
    // KARTE_SEITE stehen bleibt.
    marginHorizontal: KARTE_SEITE - SPACING.lg,
    // Vorn: nur so legt sich ihr Schatten auf die obere Karte, und genau
    // das macht "erhoben" sichtbar.
    zIndex: 1,
  },
  blattInhalt: {
    padding: SPACING.lg,
    // `paddingBottom` kommt an der Verwendung - der Freiraum ueber der
    // Leiste, damit Inhalt nicht unter ihr endet.
  },
});
