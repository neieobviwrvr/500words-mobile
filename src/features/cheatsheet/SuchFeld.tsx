import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, TextInput, View } from 'react-native';
import { getTheme, RADIUS, SPACING, FONT_SIZE } from '../../theme/tokens';

// Das Suchfeld mit laufendem Beispieltext (Nutzer-Vorlage 2026-08-22).
//
// Simons Vorgabe: beim Antippen von "Suchen" faehrt neben der Lupe ein
// Textfeld aus, in dem ein Beispiel "blinkend, animiert" steht - also nicht
// ein starrer Platzhalter, sondern einer, der sich schreibt.
//
// Warum getippt statt nur durchgewechselt: das Feld soll zeigen, WIE man
// sucht. Ein Nutzer, der "Arzt" erwartet, tippt ein Stichwort; einer, der
// „... ich brauche einen Arzt" entstehen sieht, merkt, dass ganze Sätze
// gehen. Ein still ausgetauschter Text erklaert das nicht, ein entstehender
// schon.
//
// Drei Dinge, die dabei schiefgehen koennen und hier abgefangen sind:
//
//  1. WEITERLAUFEN, WENN DER NUTZER SCHREIBT. Sobald etwas im Feld steht,
//     zeigt RN den Platzhalter ohnehin nicht mehr - der Zeitgeber lief aber
//     weiter und hat bei jedem Schritt neu gezeichnet. Er haelt jetzt an.
//  2. ZEITGEBER NACH DEM AUSHAENGEN. Ohne Aufraeumen setzt der letzte
//     Durchlauf Zustand auf einer Komponente, die es nicht mehr gibt.
//  3. SPRINGENDE HOEHE. Der Platzhalter wechselt zwischen kurzem und langem
//     Text; ohne feste Hoehe zuckt die Zeile.

const BEISPIELE = [
  '… ich brauche einen Arzt',
  '… wo ist die Toilette',
  '… das ist zu teuer',
  '… noch ein Bier bitte',
];

const TIPP_MS = 55; // ein Zeichen
const LOESCH_MS = 30; // rueckwaerts schneller, wie in echt
const PAUSE_MS = 1400; // stehen lassen, wenn der Satz fertig ist

export function SuchFeld({
  wert,
  onChange,
  onAbsenden,
  dark,
}: {
  wert: string;
  onChange: (t: string) => void;
  onAbsenden: () => void;
  dark: boolean;
}) {
  const theme = getTheme(dark);
  const [platzhalter, setPlatzhalter] = useState('');
  const blinken = useRef(new Animated.Value(1)).current;

  // Der Cursor blinkt unabhaengig vom Tippen weiter - sonst steht er in der
  // Pause zwischen zwei Beispielen still und sieht eingefroren aus.
  useEffect(() => {
    const schleife = Animated.loop(
      Animated.sequence([
        Animated.timing(blinken, { toValue: 0, duration: 500, useNativeDriver: true }),
        Animated.timing(blinken, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]),
    );
    schleife.start();
    return () => schleife.stop();
  }, [blinken]);

  useEffect(() => {
    // Sobald der Nutzer tippt, ist der Beispieltext unsichtbar - dann darf
    // auch nichts mehr laufen.
    if (wert.length > 0) return;

    let abgebrochen = false;
    let timer: ReturnType<typeof setTimeout>;
    let i = 0;
    let zeichen = 0;
    let rueckwaerts = false;

    const schritt = () => {
      if (abgebrochen) return;
      const ziel = BEISPIELE[i];

      if (!rueckwaerts) {
        zeichen += 1;
        setPlatzhalter(ziel.slice(0, zeichen));
        if (zeichen >= ziel.length) {
          rueckwaerts = true;
          timer = setTimeout(schritt, PAUSE_MS);
          return;
        }
        timer = setTimeout(schritt, TIPP_MS);
        return;
      }

      zeichen -= 1;
      setPlatzhalter(ziel.slice(0, zeichen));
      if (zeichen <= 0) {
        rueckwaerts = false;
        i = (i + 1) % BEISPIELE.length;
      }
      timer = setTimeout(schritt, LOESCH_MS);
    };

    timer = setTimeout(schritt, TIPP_MS);
    return () => {
      abgebrochen = true;
      clearTimeout(timer);
    };
  }, [wert.length === 0]);

  return (
    <View style={[styles.rahmen, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
      <TextInput
        value={wert}
        onChangeText={onChange}
        onSubmitEditing={onAbsenden}
        autoFocus
        returnKeyType="search"
        // Der laufende Text ist Deko. VoiceOver bekommt eine feste
        // Beschriftung, sonst liest es bei jedem Zeichen neu vor.
        accessibilityLabel="Suchbegriff"
        placeholder={platzhalter}
        placeholderTextColor={theme.sub}
        style={[styles.feld, { color: theme.text }]}
      />
      {wert.length === 0 ? (
        <Animated.View style={[styles.cursor, { opacity: blinken, backgroundColor: theme.sub }]} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  rahmen: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.md,
    // Feste Hoehe: der Platzhalter wechselt zwischen kurz und lang, ohne das
    // zuckt die ganze Zeile mit.
    height: 40,
  },
  feld: { flex: 1, fontSize: FONT_SIZE.caption, paddingVertical: 0 },
  cursor: { width: 1.5, height: 16, marginLeft: -2 },
});
