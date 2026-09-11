import { ReactNode } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TaggedTokens } from './ColoredTokens';
import {
  getTheme,
  elevation,
  schrift,
  WordType,
  RADIUS,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT,
  KACHEL_RAND_LIGHT,
  ACCENT_ERROR,
  karte,
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
//
// Seit 2026-09-11 benutzt der gefuehrte Kurs (LessonScreen.tsx) die Vorlage
// fuer Stufe 1 bei seinen Teaser-Saetzen. Mikrofon, Weiter-Knopf und der
// Hilfe-Anteil sind deshalb ebenfalls hierher gewandert - vorher lagen sie
// nur in SentenceReviewScreen.tsx.

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
      // Rand, Radius und Schatten liegen seit 2026-09-03 als `karte()` in
      // tokens.ts, weil der "Du bist hier"-Kasten auf S1 denselben Look
      // teilt. Die Werte sind unveraendert - nur nicht mehr doppelt.
      style={[styles.rahmen, karte(dark), { backgroundColor: theme.cardBg }]}
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

// ---------------------------------------------------------------------------
// Hilfe: wie viel der Loesung sichtbar wird
// ---------------------------------------------------------------------------
/**
 * Wie viel der Loesung die Hilfe zeigt (Simon, 2026-08-30: "knapp 40%").
 *
 * **Der Anteil allein reicht dafuer nicht - es haengt an der Rundung.**
 * `hilfeText()` in phrasebookContent.ts rundet AUF; bei drei Woertern kaeme
 * damit auch aus 0.4 noch `ceil(1.2) = 2` heraus, also 67% statt der
 * gewuenschten Groessenordnung. Deshalb wird die Wortzahl hier selbst
 * gerechnet und KAUFMAENNISCH gerundet. `hilfeText()` bleibt unveraendert -
 * ExerciseScreen.tsx haengt daran und soll sich nicht mitaendern.
 *
 * Ergebnis (Anteil des Satzes, der sichtbar wird):
 *   2 Woerter -> 1 (50%)   5 -> 2 (40%)   8 -> 3 (38%)
 *   3 Woerter -> 1 (33%)   6 -> 2 (33%)
 *   4 Woerter -> 2 (50%)   7 -> 3 (43%)
 * "Talar du engelska?" zeigt damit "Talar" statt "Talar du".
 *
 * Mindestens EIN Wort, sonst waere die Hilfe bei kurzen Saetzen leer und
 * der Chip liefe ins Nichts.
 *
 * Liegt seit 2026-09-11 hier statt in SentenceReviewScreen.tsx - der
 * gefuehrte Kurs zeigt dieselbe Hilfe, und zwei Rechnungen dafuer liefen
 * mit der ersten Aenderung auseinander.
 */
const HILFE_ANTEIL = 0.4;

export function hilfeWortzahl(gesamt: number): number {
  return Math.max(1, Math.round(gesamt * HILFE_ANTEIL));
}

/** Der Anfang eines Satzes nach derselben Regel - fuer die Hilfe-Zeile. */
export function hilfeAusschnitt(text: string): string {
  const woerter = text.trim().split(/\s+/).filter(Boolean);
  return woerter.slice(0, hilfeWortzahl(woerter.length)).join(' ');
}

// ---------------------------------------------------------------------------
// Mikrofon
// ---------------------------------------------------------------------------
/**
 * Das grosse runde Mikrofon in der Mitte - die Hauptaktion der Vorlagen -
 * plus die Erkannt-Zeile darunter.
 *
 * Die Erkannt-Zeile haelt ihren Platz immer frei (Simons Punkt 4), sonst
 * springt beim Auswerten alles darunter. `numberOfLines={1}` haelt die
 * reservierte Hoehe konstant, auch wenn ein langes Transkript zurueckkommt.
 *
 * Waehrend der Auswertung gesperrt: ein Tipp in dieser Zeit startete sonst
 * eine zweite Aufnahme, deren Ergebnis das erste ueberholt.
 */
export function SatzMikrofon({
  dark,
  verfuegbar = true,
  nimmtAuf,
  wertetAus,
  onPress,
  erkannt,
}: {
  dark: boolean;
  /** Ohne Spracherkennung steht an seiner Stelle ein Hinweis aufs Tippen. */
  verfuegbar?: boolean;
  nimmtAuf: boolean;
  wertetAus: boolean;
  onPress: () => void;
  /** Was die Erkennung verstanden hat; leer = Zeile bleibt unsichtbar. */
  erkannt: string | null;
}) {
  const theme = getTheme(dark);
  return (
    <>
      <View style={styles.micZeile}>
        {verfuegbar ? (
          <Pressable
            onPress={onPress}
            disabled={wertetAus}
            accessibilityRole="button"
            accessibilityLabel={nimmtAuf ? 'Aufnahme stoppen' : wertetAus ? 'Wird ausgewertet' : 'Antwort einsprechen'}
            accessibilityState={{ busy: wertetAus, disabled: wertetAus }}
            style={({ pressed }) => [
              styles.mic,
              {
                backgroundColor: nimmtAuf ? ACCENT_ERROR : theme.subtleFill,
                borderColor: nimmtAuf ? ACCENT_ERROR : theme.border,
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            {wertetAus ? (
              <ActivityIndicator color={theme.text} />
            ) : (
              <Ionicons name="mic" size={30} color={nimmtAuf ? '#FFFFFF' : theme.text} />
            )}
          </Pressable>
        ) : (
          <Text style={{ color: theme.sub, fontSize: FONT_SIZE.caption, textAlign: 'center' }}>
            Spracherkennung nicht verfügbar - bitte Text eingeben.
          </Text>
        )}
      </View>
      <Text
        numberOfLines={1}
        style={[styles.erkannt, { color: erkannt ? theme.text : 'transparent' }]}
        accessibilityElementsHidden={!erkannt}
        importantForAccessibility={erkannt ? 'auto' : 'no-hide-descendants'}
      >
        {erkannt ? `Erkannt: „${erkannt}"` : ' '}
      </Text>
    </>
  );
}

// ---------------------------------------------------------------------------
// Abschluss-Knopf unten rechts
// ---------------------------------------------------------------------------
/**
 * "▶ Weiter" (Stufe 1) bzw. "› Lösen" (Stufe 3), unten rechts.
 *
 * Gesperrt liegt der Knopf FLACH auf der Seite - ein schwebender Knopf, der
 * nichts tut, ist ein Widerspruch. Die Erhebung kommt erst, wenn er bedienbar
 * wird.
 */
export function SatzWeiterKnopf({
  dark,
  label,
  a11y,
  gesperrt,
  onPress,
}: {
  dark: boolean;
  /** Sichtbare Beschriftung samt Pfeil, z.B. "▶ Weiter". */
  label: string;
  /** Ansage fuer Screenreader, ohne Pfeil. */
  a11y: string;
  gesperrt: boolean;
  onPress: () => void;
}) {
  const theme = getTheme(dark);
  return (
    <View style={styles.weiterZeile}>
      <Pressable
        onPress={onPress}
        disabled={gesperrt}
        accessibilityRole="button"
        accessibilityLabel={a11y}
        accessibilityState={{ disabled: gesperrt }}
        style={({ pressed }) => [
          styles.weiterKnopf,
          gesperrt ? null : elevation(dark, 'chip'),
          {
            borderColor: 'transparent',
            backgroundColor: theme.subtleFill,
            opacity: gesperrt ? 0.4 : pressed ? 0.75 : 1,
            transform: [{ translateY: !gesperrt && pressed ? 1 : 0 }],
          },
        ]}
      >
        <Text style={{ color: theme.text, ...schrift('700'), fontSize: FONT_SIZE.caption }}>{label}</Text>
      </Pressable>
    </View>
  );
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
    // borderWidth/borderRadius kommen aus `karte()` - hier steht nur noch
    // die Groesse, nicht mehr das Aussehen.
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
  micZeile: { alignItems: 'center', marginBottom: SPACING.md },
  mic: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  erkannt: { textAlign: 'center', fontSize: FONT_SIZE.caption, marginTop: SPACING.xs },
  weiterZeile: { flexDirection: 'row', justifyContent: 'flex-end' },
  weiterKnopf: {
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
  },
});
