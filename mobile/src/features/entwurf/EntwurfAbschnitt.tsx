import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { E, KREIS, SEITE, s } from './entwurfStil';

// Ein Abschnitt des Entwurfs: eine Kategorie mit allen ihren Situationen
// als eine durchgehende senkrechte Kette.
//
// **Kein Blaettern mehr (2026-09-26, Simons Korrektur:** "Entferne ueberall
// diese Doppelpunkte, alle Unterueberschriften die dahinterliegen sollen
// einfach unter den anderen Unterueberschriften sein"). Der erste Anlauf
// hatte Seiten zu je fuenf Eintraegen mit Punkten darunter, weil die
// Vorlage genau so aussah - fuenf Eintraege und zwei Punkte. Versteckt
// waren dahinter aber vier bis sechs weitere Situationen, die man nur mit
// einer Wischgeste fand. Jetzt stehen alle untereinander, und der Abschnitt
// ist so lang, wie die Kategorie Inhalt hat.

/**
 * In wie vielen Stufen sich der Ring fuellt (2026-09-26, Simons Wunsch:
 * "dass man zb vier mal die Kategorie durch lernt und sich dann bei jedem
 * mal der kreis auf 1/4 und danach auf 2/4, 3/4 und 4/4 füllt").
 *
 * Eine Zahl, eine Stelle - der Ring, der Haken und die Zaehlerzeile
 * ("x von y abgeschlossen") richten sich alle danach. Auf 3 oder 5 zu
 * gehen kostet genau diese Zeile.
 */
export const STUFEN = 4;

export type AbschnittsEintrag = {
  scenario: string;
  label: string;
  /**
   * Wie oft jeder Satz dieser Situation mindestens beantwortet wurde -
   * kommt ungekappt aus `useCategorySituations`. Der Ring zeigt davon
   * hoechstens `STUFEN`; wer haeufiger uebt, bleibt bei voll.
   */
  durchgaenge: number;
  gesperrt: boolean;
  /** Wie viele Saetze dahinterstehen - als zweite Zeile unter dem Namen. */
  saetze: number;
};

export function EntwurfAbschnitt({
  titel,
  eintraege,
  onEintrag,
  onListen,
  onFinale,
  gesperrt = false,
}: {
  titel: string;
  eintraege: AbschnittsEintrag[];
  onEintrag: (eintrag: AbschnittsEintrag) => void;
  /** Das Symbol rechts an der Ueberschrift - oeffnet die Listen-Auswahl. */
  onListen: () => void;
  /**
   * Die Kapitel-Wiederholung am Ende (2026-09-27, Simons Vorlage: "Pack ans
   * Ende jeder Kategorie sowas als Abschlusswiederholung").
   *
   * Steht auch bei GESPERRTEN Kategorien (Simons Korrektur am selben Tag:
   * "Gesperrte Kategorien bekommen auch eins, aber es ist ein graues Schloss
   * drüber") - dort grau mit Schloss und mit dem Shop als Ziel. Erst
   * dachte ich, ein goldener Abschluss hinter der Bezahlschranke verspreche
   * das Falsche; richtig ist das Gegenteil: er zeigt, was zum Paket gehoert.
   *
   * Ohne Handler kein Finale - das gilt nur noch fuer leere Kategorien.
   */
  onFinale?: () => void;
  /** Faerbt das Finale grau und setzt ein Schloss statt des Pokals. */
  gesperrt?: boolean;
}) {
  // "Abgeschlossen" heisst seit dem Stufen-Ring: alle vier Durchgaenge
  // voll. Vorher reichte ein einziger Blick auf jeden Satz - die Zeile
  // haette sonst etwas anderes gezaehlt als der Ring darunter zeigt.
  const fertig = eintraege.filter((e) => e.durchgaenge >= STUFEN).length;

  return (
    <View style={styles.abschnitt}>
      <View style={styles.kopf}>
        <Text style={styles.titel} numberOfLines={1}>
          {titel}
        </Text>
        <Pressable
          onPress={onListen}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel={'Listen zu ' + titel}
          accessibilityHint="Wählt zwischen Satzliste und Wortliste"
          style={({ pressed }) => pressed && styles.gedrueckt}
        >
          <Feather name="download-cloud" size={21} color={E.blau} />
        </Pressable>
      </View>

      <Text style={styles.zaehler}>
        {eintraege.length === 0
          ? 'Noch keine Sätze in dieser Kategorie'
          : fertig + ' von ' + eintraege.length + ' Lektionen abgeschlossen'}
      </Text>

      <View style={styles.kette}>
        {eintraege.map((eintrag, i) => (
          <View key={eintrag.scenario}>
            <Kette eintrag={eintrag} onPress={() => onEintrag(eintrag)} />
            {i < eintraege.length - 1 ? <Verbinder /> : null}
          </View>
        ))}
        {onFinale && eintraege.length > 0 ? (
          <View>
            <Verbinder />
            <Finale onPress={onFinale} gesperrt={gesperrt} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Ein Glied der Kette
// ---------------------------------------------------------------------------
// Drei Zustaende, wie in der Vorlage: gruen mit Haken (durch), gruener Ring
// (offen), grau mit Schloss (gesperrt).
//
// **Gesperrt heisst hier WIRKLICH gesperrt**, also eine nicht gekaufte
// Kategorie. Die Vorlage zeigt innerhalb des Grundwortschatzes vier Schloesser
// hinter dem ersten Eintrag - das waere eine Reihenfolge-Sperre und
// widerspraeche der Entscheidung vom 2026-08-20 ("Es wird auch nichts
// gesperrt - alle Lektionen bleiben offen"). Ob die Sperre kommt, ist eine
// Produktentscheidung und keine des Layouts; bis dahin bleibt der freie
// Inhalt frei.

function Kette({ eintrag, onPress }: { eintrag: AbschnittsEintrag; onPress: () => void }) {
  const { durchgaenge, gesperrt, label } = eintrag;

  const stufe = gesperrt ? 0 : Math.min(durchgaenge, STUFEN);
  const fertig = stufe >= STUFEN;

  const voll = gesperrt ? E.linie : fertig ? E.gruen : E.blau;
  const flaeche = gesperrt ? E.grauHell : fertig ? E.gruenHell : E.blauHell;
  const symbolFarbe = gesperrt ? E.grau : fertig ? E.gruen : E.blau;

  const zustand = gesperrt
    ? 'gesperrt'
    : fertig
      ? 'abgeschlossen, alle ' + STUFEN + ' Durchgänge'
      : stufe + ' von ' + STUFEN + ' Durchgängen';

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label + ', ' + zustand}
      style={({ pressed }) => [styles.zeile, pressed && styles.gedrueckt]}
    >
      <View style={[styles.kreis, { backgroundColor: flaeche }]}>
        <Stufenring stufe={stufe} voll={voll} />
        <Feather
          name={gesperrt ? 'lock' : 'user'}
          size={gesperrt ? 18 : 21}
          color={symbolFarbe}
        />
        {fertig ? (
          <View style={styles.haken}>
            <Feather name="check" size={11} color="#FFFFFF" />
          </View>
        ) : null}
      </View>
      <View style={styles.eintragText}>
        <Text style={[styles.eintragLabel, gesperrt && { color: E.neben }]} numberOfLines={2}>
          {label}
        </Text>
        {eintrag.saetze > 0 ? (
          <Text style={styles.eintragZahl}>
            {eintrag.saetze} {eintrag.saetze === 1 ? 'Satz' : 'Sätze'}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}

/**
 * Der Ring um den Kreis, in vier Viertel geteilt (2026-09-26).
 *
 * **Vier getrennte Boegen statt eines wachsenden Bogens**, und das ist der
 * Punkt: mit einer durchgezogenen Linie sieht man bei 2/4 einen halben
 * Kreis und muss raten, wie viele Stufen es ueberhaupt gibt. Mit Luecken
 * sind die Stufen abzaehlbar, auch wenn noch keine voll ist.
 *
 * Gezeichnet mit `react-native-svg` (liegt seit jeher im Projekt), weil ein
 * Kreisbogen mit Rahmen-Tricks nicht geht - vier gedrehte Halbkreise mit
 * ueberlappenden Masken waeren deutlich mehr Code fuer ein schlechteres
 * Ergebnis.
 */
function Stufenring({ stufe, voll }: { stufe: number; voll: string }) {
  // Dicker und mit groesseren Luecken als beim ersten Anlauf (2026-09-26):
  // 3 Punkte Strich und 5 Punkte Luecke waren auf 48 Punkten Durchmesser zu
  // zierlich, um die Teilung ueberhaupt zu erkennen.
  const dicke = 4;
  const r = (KREIS - dicke) / 2;
  const umfang = 2 * Math.PI * r;
  // Die Luecke geht VON der Stufe ab, damit die vier Boegen zusammen den
  // vollen Kreis ergeben - sonst waechst der Ring ueber den Umfang hinaus.
  const luecke = 9;
  const bogen = umfang / STUFEN - luecke;

  return (
    <Svg width={KREIS} height={KREIS} style={StyleSheet.absoluteFill}>
      {Array.from({ length: STUFEN }, (_, i) => (
        <Circle
          key={i}
          cx={KREIS / 2}
          cy={KREIS / 2}
          r={r}
          fill="none"
          stroke={i < stufe ? voll : E.ringLeer}
          strokeWidth={dicke}
          strokeLinecap="round"
          strokeDasharray={bogen + ' ' + (umfang - bogen)}
          // Jedes Viertel um seinen eigenen Anteil versetzt; negativ, weil
          // ein positiver Versatz den Strich rueckwaerts schiebt.
          strokeDashoffset={-i * (umfang / STUFEN)}
          // Ohne Drehung faengt Viertel eins auf drei Uhr an. Oben ist die
          // Stelle, an der man einen Fortschritt beginnen sieht.
          transform={'rotate(-90 ' + KREIS / 2 + ' ' + KREIS / 2 + ')'}
        />
      ))}
    </Svg>
  );
}

/**
 * Die Kapitel-Wiederholung am Ende einer Kategorie.
 *
 * **Kein Stufenring und kein Haken**, und das ist der Unterschied zu allen
 * Zeilen darueber: sie laesst sich beliebig oft spielen und ist deshalb nie
 * "abgeschlossen". Ein Ring, der sich fuellt, wuerde ein Ende versprechen,
 * das es hier nicht gibt - sie zaehlt auch nicht in "x von y".
 *
 * Fuehrt auf dieselbe Satz-Uebung wie eine einzelne Situation, nur OHNE
 * Situationsfilter: damit ist es die ganze Kategorie am Stueck.
 */
function Finale({ onPress, gesperrt }: { onPress: () => void; gesperrt: boolean }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={
        gesperrt
          ? 'Kapitel-Wiederholung, Finale, gesperrt'
          : 'Kapitel-Wiederholung, Finale, beliebig oft spielbar'
      }
      style={({ pressed }) => [styles.zeile, pressed && styles.gedrueckt]}
    >
      <View style={[styles.kreis, gesperrt ? styles.finaleKreisZu : styles.finaleKreis]}>
        <Ionicons
          name={gesperrt ? 'lock-closed' : 'trophy'}
          size={gesperrt ? 18 : 22}
          color={gesperrt ? E.grau : E.gold}
        />
        {/* Der Stern nur beim offenen Finale: er feiert etwas, das hinter
            der Bezahlschranke noch gar nicht zu feiern ist. */}
        {gesperrt ? null : (
          <View style={styles.stern}>
            <Ionicons name="star" size={10} color="#FFFFFF" />
          </View>
        )}
      </View>
      <View style={styles.eintragText}>
        <View style={styles.finaleKopf}>
          <Text style={[styles.eintragLabel, gesperrt && { color: E.neben }]}>
            Kapitel-Wiederholung
          </Text>
          <View style={[styles.finaleChip, gesperrt && styles.finaleChipZu]}>
            <Text style={[styles.finaleChipText, gesperrt && { color: E.neben }]}>Finale</Text>
          </View>
        </View>
        <Text style={[styles.finaleUnter, gesperrt && { color: E.neben }]} numberOfLines={1}>
          Feierlicher Abschluss · Alles festigen
        </Text>
      </View>
    </Pressable>
  );
}

/**
 * Die gestrichelte Linie zwischen zwei Kreisen.
 *
 * Liegt genau auf der Mitte des Kreises (`KREIS / 2`), damit sie nicht neben
 * der Kette herlaeuft - deshalb kommt der Durchmesser aus derselben
 * Konstante wie der Kreis und nicht als abgeschriebene Zahl.
 */
function Verbinder() {
  return (
    <View style={styles.verbinder} pointerEvents="none">
      <View style={styles.strich} />
    </View>
  );
}

const styles = StyleSheet.create({
  gedrueckt: { opacity: 0.55 },

  // Abstand zum naechsten Abschnitt 1,5x so gross (2026-09-27, Simon):
  // gemessen waren es 26 Punkte, also das obere Polster allein. Die 13
  // fehlenden haengen UNTEN, nicht oben - sonst waere auch der Abstand
  // zwischen Karte und erstem Abschnitt mitgewachsen, und der war nicht
  // gemeint.
  abschnitt: { paddingHorizontal: SEITE, paddingTop: 26, paddingBottom: 13 },
  kopf: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  titel: { ...s('800'), fontSize: 20, color: E.text, flexShrink: 1, paddingRight: 12 },
  // Ein Schritt fetter als vorher: das hellere Gruen verliert Kontrast, und
  // mehr Strichstaerke holt einen Teil davon zurueck, ohne es abzudunkeln.
  zaehler: { ...s('700'), fontSize: 13, color: E.gruen, paddingTop: 4 },

  kette: { paddingTop: 16 },
  zeile: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  kreis: {
    width: KREIS,
    height: KREIS,
    borderRadius: KREIS / 2,
    // Kein `borderWidth` mehr - den Rand zeichnet seit 2026-09-26 der
    // Stufenring darueber. Beides zusammen gaebe zwei Ringe ineinander.
    alignItems: 'center',
    justifyContent: 'center',
  },
  haken: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: E.gruen,
    borderWidth: 2,
    borderColor: E.grund,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eintragText: { flexShrink: 1, gap: 1 },
  eintragLabel: { ...s('700'), fontSize: 15, color: E.text },
  eintragZahl: { ...s('500'), fontSize: 12, color: E.neben },

  finaleKreis: { backgroundColor: E.goldHell, borderWidth: 2, borderColor: E.gold },
  // Dieselbe Sprache wie ein gesperrtes Kettenglied - grau heisst ueberall
  // dasselbe, egal ob Situation oder Finale.
  finaleKreisZu: { backgroundColor: E.grauHell, borderWidth: 2, borderColor: E.linie },
  stern: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: E.gold,
    borderWidth: 2,
    borderColor: E.grund,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finaleKopf: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  finaleChip: {
    backgroundColor: E.goldHell,
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  finaleChipZu: { backgroundColor: E.grauHell },
  finaleChipText: { ...s('700'), fontSize: 11, color: E.goldText },
  finaleUnter: { ...s('600'), fontSize: 12, color: E.goldText },

  verbinder: { height: 18, justifyContent: 'center' },
  strich: {
    marginLeft: KREIS / 2 - 1,
    width: 0,
    height: '100%',
    borderLeftWidth: 2,
    borderStyle: 'dashed',
    borderColor: E.linie,
  },

});
