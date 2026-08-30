import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Phrase } from '../../data/cheatsheetContent';
import { TaggedTokens } from '../../components/ColoredTokens';
import { useAppState } from '../../state/AppState';
import { getTheme, ACCENT_BLUE, RADIUS, SPACING, FONT_SIZE, LINE_HEIGHT } from '../../theme/tokens';

// Ein Satz im Survival-Nachschlagewerk (Nutzer-Vorlage 2026-08-20).
//
// Drei Zeilen laut Vorlage: Zielsprache, Lautschrift, eigene Sprache. Dazu
// rechts Vorlesen und Merken.
//
// **Die Lautschrift fehlt in den Daten.** Ein Satz hat heute nur `text`
// (Zielsprache) und `gloss` (Deutsch) - weder `phrasebook_master` noch die
// Sprachlisten kennen eine Umschrift. Die Zeile ist deshalb vorbereitet, wird
// aber nur gezeigt, wenn wirklich etwas da ist: eine leere Zeile in
// Anfuehrungszeichen waere schlimmer als keine.
//
// Sobald eine Umschrift-Spalte existiert, reicht es, sie in `Phrase`
// aufzunehmen und hier durchzureichen - am Aufbau aendert sich nichts.

type Props = {
  phrase: Phrase & { phonetic?: string | null; cultureNote?: string | null };
  dark: boolean;
  saved: boolean;
  onToggleSave: () => void;
  onSpeak: () => void;
  /**
   * Zeichen an/aus (2026-08-26, Simons Wunsch) - blendet `phrase.text`
   * (Zielsprachen-Schriftzeichen, z.B. Hanzi) aus, wenn eine Lautschrift
   * (`phrase.phonetic`, z.B. Pinyin) vorhanden ist, und macht DIE zur
   * primaeren Zeile. Ohne Lautschrift bleibt `phrase.text` stehen, egal wie
   * der Schalter steht - sonst waere die Karte leer. Vorgabe `true` (an) -
   * die drei bisherigen Aufrufer (Survival-Kategorie, Suchergebnisse,
   * Favoriten) reichen die Prop noch nicht durch und behalten dadurch ihr
   * bisheriges Verhalten unveraendert bei.
   */
  zeichenEin?: boolean;
};

export function PhraseCard({ phrase, dark, saved, onToggleSave, onSpeak, zeichenEin = true }: Props) {
  const theme = getTheme(dark);
  const zeichenAusblendbar = zeichenEin === false && !!phrase.phonetic;
  const { wortartenFarben } = useAppState();
  // "Nur diesmal"-Ausnahme (2026-08-30) - eigener Zustand JE KARTE, nicht
  // global: eine Karte in der Satzliste aufzudecken soll nicht alle anderen
  // mit aufdecken. Bewusst lokaler State, kein AppState - ueberlebt weder
  // einen Neustart noch einen erneuten Aufbau der Liste, und das ist richtig
  // fuer eine reine "kurz nachschauen"-Geste.
  const [farbenEinmalig, setFarbenEinmalig] = useState(false);
  const zeigeFarben = wortartenFarben || farbenEinmalig;
  const hatTags = !!phrase.wordTags;

  return (
    <View style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
      <View style={styles.textBlock}>
        {/* Wortart-Farben (2026-08-29/30) - `wordTags` ist IMMER gegen das
            Pinyin getaggt (bei Nicht-Chinesisch: gegen target_text, das dort
            der einzige Text ist). Schriftzeichen werden NIE eingefaerbt
            (Simons ausdrueckliche Vorgabe) - `phrase.text` ist bei
            Chinesisch Hanzi und bekommt deshalb bewusst nie `wordTags`
            zugewiesen, egal ob primaer oder sekundaer angezeigt. Ohne diese
            Trennung wuerden bei "Zeichen ein" (Vorgabe) faelschlich die
            Pinyin-Woerter statt der Zeichen angezeigt, weil TaggedTokens die
            uebergebenen `tokens` als Text rendert, nicht nur als Farbe. */}
        {zeichenAusblendbar ? (
          <TaggedTokens
            style={styles.target}
            textColor={theme.text}
            showColors={zeigeFarben}
            tokens={(phrase.wordTags ?? [{ w: phrase.phonetic ?? '', c: null }]).map((t) => ({ t: t.w, c: t.c }))}
          />
        ) : (
          <>
            <Text style={[styles.target, { color: theme.text }]}>{phrase.text}</Text>
            {phrase.phonetic ? (
              phrase.wordTags && phrase.wordTags.length > 0 ? (
                <Text style={[styles.phonetic, { color: theme.sub }]}>
                  {'„'}
                  <TaggedTokens
                    style={styles.phonetic}
                    textColor={theme.sub}
                    showColors={zeigeFarben}
                    tokens={phrase.wordTags.map((t) => ({ t: t.w, c: t.c }))}
                  />
                  {'”'}
                </Text>
              ) : (
                <Text style={[styles.phonetic, { color: theme.sub }]}>{'„'}{phrase.phonetic}{'”'}</Text>
              )
            ) : null}
          </>
        )}
        {!wortartenFarben && hatTags ? (
          <Pressable
            onPress={() => setFarbenEinmalig((v) => !v)}
            accessibilityRole="button"
            accessibilityLabel={farbenEinmalig ? 'Wortarten-Farben ausblenden' : 'Wortarten-Farben zeigen'}
            accessibilityState={{ expanded: farbenEinmalig }}
            hitSlop={6}
            style={styles.farbenHilfe}
          >
            <Feather name="help-circle" size={12} color={theme.sub} />
            <Text style={[styles.farbenHilfeText, { color: theme.sub }]}>
              {farbenEinmalig ? 'Farben ausblenden' : 'Wortarten-Farben zeigen'}
            </Text>
          </Pressable>
        ) : null}
        {phrase.gloss ? (
          <Text style={[styles.gloss, { color: theme.sub }]}>{phrase.gloss}</Text>
        ) : null}
        {/* Kulturhinweis (2026-08-21). Steht bewusst UNTER der Uebersetzung
            und in kleinerer Schrift: er erklaert, warum ein Satz dort normal
            ist, der bei uns seltsam klaenge ("du bist schlank"). Ohne ihn
            traut sich niemand, den Satz zu benutzen. */}
        {phrase.cultureNote ? (
          <View style={[styles.hinweis, { borderLeftColor: ACCENT_BLUE }]}>
            <Text style={[styles.hinweisText, { color: theme.sub }]}>{phrase.cultureNote}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.actions}>
        <Pressable
          onPress={onSpeak}
          accessibilityRole="button"
          accessibilityLabel={`Vorlesen: ${phrase.text}`}
          hitSlop={8}
          style={({ pressed }) => [styles.iconButton, { opacity: pressed ? 0.6 : 1 }]}
        >
          <Feather name="volume-2" size={20} color={theme.sub} />
        </Pressable>
        <Pressable
          onPress={onToggleSave}
          accessibilityRole="button"
          accessibilityLabel={saved ? `Gemerkt: ${phrase.text}` : `Merken: ${phrase.text}`}
          // Gemerkt wird sonst nur ueber das gefuellte Symbol gezeigt.
          accessibilityState={{ selected: saved }}
          hitSlop={8}
          style={({ pressed }) => [styles.iconButton, { opacity: pressed ? 0.6 : 1 }]}
        >
          <Feather
            name="bookmark"
            size={20}
            color={saved ? ACCENT_BLUE : theme.sub}
            // Feather kennt kein gefuelltes Lesezeichen - die Fuellung kommt
            // ueber die Schriftfarbe, deshalb zusaetzlich der Farbwechsel.
            style={saved ? styles.savedMark : undefined}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hinweis: {
    borderLeftWidth: 2,
    paddingLeft: SPACING.sm,
    marginTop: SPACING.xs,
  },
  hinweisText: { fontSize: FONT_SIZE.caption, lineHeight: LINE_HEIGHT.caption, fontStyle: 'italic' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
  },
  textBlock: {
    flex: 1,
    gap: 2,
  },
  target: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    fontWeight: '800',
  },
  phonetic: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.body,
    fontStyle: 'italic',
  },
  gloss: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.body,
  },
  farbenHilfe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 2,
  },
  farbenHilfeText: { fontSize: 11, fontWeight: '600' },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  iconButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  savedMark: {
    opacity: 1,
  },
});
