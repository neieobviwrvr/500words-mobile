import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TaggedTokens } from './ColoredTokens';
import {
  getTheme,
  schrift,
  WordType,
  RADIUS,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT,
  KACHEL_RAND_LIGHT,
} from '../theme/tokens';

// Bausteine der verbindlichen Satz-Vorlagen (Simons Templates vom
// 2026-08-30/31).
//
// **Warum hier und nicht im Screen:** die Vorlagen gelten fuer JEDE Stelle,
// an der ein ganzer Satz geuebt wird - die Saetze-Wiederholung ebenso wie
// den gefuehrten Kurs. Waeren sie zweimal gebaut, liefen sie mit der ersten
// Aenderung auseinander; genau das ist in dieser Datei-Familie schon
// mehrfach passiert (Stufe-2-Optionen, Kartenschatten).
//
// Bewusst NUR Darstellung, kein Zustand: was ein Chip tut, wann er aktiv ist
// und wie eine Antwort bewertet wird, bleibt Sache des jeweiligen Screens.

// ---------------------------------------------------------------------------
// Chip
// ---------------------------------------------------------------------------
// Erhebung statt Rahmen: der Chip liegt sichtbar UEBER der Seite, statt mit
// einer Linie von ihr abgegrenzt zu sein. Der Rahmen ist im Ruhezustand
// deshalb DURCHSICHTIG - Rahmen und Schatten zusammen waeren eine doppelte
// Abgrenzung und liessen den Knopf schwer wirken. Die Breite bleibt trotzdem
// stehen, damit der aktive Zustand das Layout nicht verschiebt.
export function SatzChip({
  label,
  aktiv,
  onPress,
  dark,
  a11y,
  hint,
  icon,
  aktivFarbe,
  expanded,
  selected,
}: {
  label: string;
  aktiv: boolean;
  onPress: () => void;
  dark: boolean;
  a11y: string;
  hint?: string;
  icon?: 'bookmark' | 'bookmark-outline';
  /** Abweichende Farbe im aktiven Zustand (Speichern nutzt Gruen). */
  aktivFarbe?: string;
  expanded?: boolean;
  selected?: boolean;
}) {
  const theme = getTheme(dark);
  const farbe = aktiv ? aktivFarbe ?? theme.text : theme.sub;
  // Ruhefarbe des Rands (2026-09-02, Simons "3D-Feinschliff" fuer die vier
  // Aktions-Chips unter dem Satz): derselbe sanfte Grau-Blau-Ton, den
  // `kachel()` app-weit fuer kleine interaktive Elemente benutzt - statt des
  // bisherigen `transparent`, das im Ruhezustand gar keinen Rand zeigte.
  // Aktiv bleibt farbig (die Bedeutung - "gespeichert", "aufgeklappt" -
  // soll weiterhin an der Farbe haengen, nicht nur an der Tiefe).
  const randRuhe = dark ? theme.border : KACHEL_RAND_LIGHT;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={a11y}
      accessibilityHint={hint}
      accessibilityState={{ expanded, selected }}
      style={({ pressed }) => [
        styles.chip,
        {
          borderColor: aktiv ? farbe : randRuhe,
          backgroundColor: theme.subtleFill,
          // Beim Druecken sinkt der Chip ein - dieselbe Geste wie bei jeder
          // anderen 3D-Kachel der App (`kachel()`), nur mit der kleineren
          // Tiefe von 2 statt 5/6, weil ein Chip ein kleines, haeufiges
          // Element ist.
          borderBottomWidth: pressed ? 1.5 : 2,
          opacity: pressed ? 0.75 : 1,
          transform: [{ translateY: pressed ? 0.5 : 0 }],
        },
      ]}
    >
      {icon ? <Ionicons name={icon} size={14} color={farbe} /> : null}
      <Text style={[styles.chipText, { color: farbe }]}>{label}</Text>
    </Pressable>
  );
}

/** Umbrechende, MITTIGE Reihe - angebrochene Zeilen sitzen zentriert. */
export function SatzChipReihe({ children }: { children: ReactNode }) {
  return <View style={styles.chipReihe}>{children}</View>;
}

// ---------------------------------------------------------------------------
// Der Satz
// ---------------------------------------------------------------------------
/**
 * Schriftzeichen oben, Lautschrift darunter - beide in GLEICHER Groesse.
 *
 * Zwei Regeln stecken darin, die beide aus Fehlern stammen:
 *
 * 1. **Schriftzeichen werden nie eingefaerbt.** `tokens` ist gegen die
 *    LAUTSCHRIFT getaggt, und `TaggedTokens` rendert seine Tokens als
 *    sichtbaren Text - auf die Zeichen-Zeile gelegt wuerde es die Zeichen
 *    durch Lautschrift ERSETZEN.
 * 2. **Die Zeichen-Zeile bleibt im Layout, auch wenn sie unsichtbar ist.**
 *    Sonst springt beim Umschalten alles darunter. Sprachen ohne eigene
 *    Schrift bekommen sie gar nicht erst - dort gibt es nichts umzuschalten
 *    und entsprechend nichts zu reservieren.
 */
export function SatzAnzeige({
  schriftzeichen,
  zeichenSichtbar = true,
  tokens,
  farbenAn,
  dark,
  onPress,
  a11y,
}: {
  /** Zielsprachen-Schrift (z.B. Hanzi). `null` = Sprache ohne eigene Schrift. */
  schriftzeichen?: string | null;
  zeichenSichtbar?: boolean;
  /** Die Lautschrift, wortweise mit Wortart. Ohne Tags: ein Token, `c: null`. */
  tokens: { t: string; c: WordType | null }[];
  farbenAn: boolean;
  dark: boolean;
  /** Antippen liest vor. Ohne Angabe ist der Satz nicht antippbar. */
  onPress?: () => void;
  a11y?: string;
}) {
  const theme = getTheme(dark);
  const inhalt = (
    <>
      {schriftzeichen ? (
        <Text
          style={[styles.satzGross, { color: theme.text, opacity: zeichenSichtbar ? 1 : 0 }]}
          accessibilityElementsHidden={!zeichenSichtbar}
          importantForAccessibility={zeichenSichtbar ? 'auto' : 'no-hide-descendants'}
        >
          {schriftzeichen}
        </Text>
      ) : null}
      <TaggedTokens style={styles.satzGross} textColor={theme.text} showColors={farbenAn} tokens={tokens} />
    </>
  );

  if (!onPress) return <View style={styles.satzBlock}>{inhalt}</View>;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={a11y}
      style={({ pressed }) => [styles.satzBlock, { opacity: pressed ? 0.6 : 1 }]}
    >
      {inhalt}
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// Rahmen um den Aufgaben-Kern
// ---------------------------------------------------------------------------
/**
 * Umschliesst Satz, Mikrofon und den Schreiben-Ausweg (Simons Vorlage
 * 2026-08-31) - also genau das, was zur Aufgabe selbst gehoert.
 *
 * Enthalten ist auch die reservierte Info-Zeile (Übersetzung/Hilfe) - sie
 * gehoert zum Satz und stand anfangs faelschlich ausserhalb (Simons Korrektur
 * 2026-08-31). Der Kasten waechst dadurch NICHT beim Einblenden: die Zeile
 * haelt ihren Platz ohnehin dauerhaft frei.
 *
 * BEWUSST NICHT enthalten: die Chip-Reihe darueber und der Loesen-Knopf
 * darunter. Chips sind Werkzeuge zur Aufgabe, keine Teile von ihr, und der
 * Abschluss-Knopf fuehrt aus ihr heraus.
 *
 * Die Werte stammen aus Simons Vorlage und sind dort in der
 * Design-Werkzeug-Schreibweise angegeben:
 *   Rahmen        1 Punkt, #000000 bei 10 %  -> rgba(0,0,0,0.1)
 *   Schlagschatten X 2, Y 2, Weichzeichnen 4, Streuung 0,
 *                  #000000 bei 25 %          -> shadowOpacity 0.25
 *
 * Der Schatten hat als einziger in der App einen SEITLICHEN Versatz (X 2).
 * Das ist Absicht und kommt aus der Vorlage - wer ihn spaeter an die
 * ELEVATION-Skala angleicht, nimmt ihm genau das Merkmal.
 */
export function SatzRahmen({ children, dark }: { children: ReactNode; dark: boolean }) {
  const theme = getTheme(dark);
  return (
    <View
      style={[
        styles.rahmen,
        {
          backgroundColor: theme.cardBg,
          // Im Darkmode traegt ein schwarzer Schatten nichts bei, und eine
          // schwarze Linie auf dunklem Grund verschwindet - dort uebernimmt
          // eine hellere Kante die Abgrenzung.
          borderColor: dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)',
          ...(dark
            ? null
            : {
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 4,
                shadowOpacity: 0.25,
                elevation: 2,
              }),
        },
      ]}
    >
      {children}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Info-Zeile (Übersetzung, Hilfe)
// ---------------------------------------------------------------------------
/**
 * Steht IMMER im Layout und wird nur durchsichtig geschaltet - haengte man
 * sie ein und aus, ruckte alles darunter bei jedem Tipp. Fuer Screenreader
 * ist die unsichtbare Zeile ausgeblendet: reservierter Platz ist kein Inhalt.
 */
export function SatzInfoZeile({
  text,
  sichtbar,
  dark,
  kursiv = false,
}: {
  text: string;
  sichtbar: boolean;
  dark: boolean;
  kursiv?: boolean;
}) {
  const theme = getTheme(dark);
  return (
    <Text
      style={[
        styles.infoZeile,
        kursiv && styles.infoKursiv,
        { color: theme.sub, opacity: sichtbar ? 1 : 0 },
      ]}
      accessibilityElementsHidden={!sichtbar}
      importantForAccessibility={sichtbar ? 'auto' : 'no-hide-descendants'}
    >
      {text}
    </Text>
  );
}

/** Behaelter der Info-Zeilen - ohne eigenes `gap`, siehe Kommentar dort. */
export function SatzInfoSlot({ children }: { children: ReactNode }) {
  return <View style={styles.infoSlot}>{children}</View>;
}

const styles = StyleSheet.create({
  chipReihe: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: SPACING.sm,
    rowGap: SPACING.sm,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    // 1.5 gilt fuer alle vier Seiten als Grundlage - die Verwendungsstelle
    // ueberschreibt `borderBottomWidth` gezielt auf 2 (Ruhezustand) bzw. 1.5
    // (gedrueckt), fuer die kleine 3D-Tiefe.
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: 7,
    paddingHorizontal: 13,
  },
  chipText: { fontSize: FONT_SIZE.caption, ...schrift('700') },
  satzBlock: { alignItems: 'center', gap: SPACING.xs, paddingVertical: SPACING.lg },
  rahmen: {
    borderWidth: 1,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    // Oben etwas weniger, weil die Info-Zeile ihren eigenen `marginTop`
    // mitbringt - sonst stuende die Übersetzung zu tief im Kasten.
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.lg,
    // Schmaler als der Screen (2026-08-31, Simons Wunsch "einen Tick weniger
    // breit"): der Kasten soll auf der Seite liegen, nicht bis an ihre
    // Raender stossen.
    marginHorizontal: SPACING.sm,
  },
  satzGross: { fontSize: FONT_SIZE.h2, lineHeight: LINE_HEIGHT.h2, ...schrift('700'), textAlign: 'center' },
  // Eigener Container OHNE `gap`: die Elternliste setzt eins, das sonst auch
  // zwischen den reservierten Zeilen laege und den Leerraum verdoppelte.
  infoSlot: { alignItems: 'center', marginTop: SPACING.md },
  infoZeile: { fontSize: FONT_SIZE.body, lineHeight: LINE_HEIGHT.body, textAlign: 'center' },
  infoKursiv: { fontStyle: 'italic' },
});
