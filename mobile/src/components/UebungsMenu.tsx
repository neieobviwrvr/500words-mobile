import { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useAppState } from '../state/AppState';
import { useAuthState } from '../state/AuthState';
import {
  FEEDBACK_BELOHNUNG,
  FEEDBACK_BELOHNUNG_SCHLUESSEL,
  sendeRueckmeldung,
  type RueckmeldungKontext,
} from '../data/rueckmeldung';
import { PillButton } from './PillButton';
import { SatzChip } from './SatzTemplate';
import { getTheme, RADIUS, SPACING, FONT_SIZE, LINE_HEIGHT, schrift } from '../theme/tokens';

// "..."-Dropdown oben rechts auf jedem Uebungsscreen (2026-08-26, Simons
// Wunsch: "auf jedem Uebungsscreen fuer egal welche Stufe"). Betrifft
// ExerciseScreen.tsx (Speed-Run), SentenceReviewScreen.tsx,
// WordReviewScreen.tsx und LessonScreen.tsx - ein Baustein statt vier
// fast identischer Kopien.
//
// Bewusst NICHT `HeaderMenu.tsx` wiederverwendet: das faehrt seine Knoepfe
// seitlich AUS der Kopfzeile heraus (S1-Stil) - Simons Vorgabe hier ist
// ausdruecklich ein klassisches Dropdown, das sich NACH UNTEN oeffnet.
//
// Seit 2026-09-13 tun beide Eintraege etwas (Simon: "Satz-Melden hat noch
// keine Funktion, Feedback leitet immer noch auf Geschenke, soll aber lieber
// Textfeld oeffnen und dann wieder in der Lektion bleiben - zusaetzlich mit
// Belohnung"):
//   Feedback     oeffnet ein Textfeld UEBER der Uebung; nach dem Senden ist
//                man genau dort, wo man war. Das erste Feedback bringt
//                einen Coin, danach keinen mehr (siehe `FEEDBACK_BELOHNUNG`).
//   ... melden   fragt nach dem Grund, optional mit Text, und schickt mit,
//                welcher Satz bzw. welches Wort auf dem Schirm stand.
// Beides landet in der Tabelle `rueckmeldung`. Vorher fuehrte Feedback aus
// der Lektion heraus auf die Geschenke-Seite, deren Absenden-Knopf
// deaktiviert ist - und Melden zeigte nur "kommt bald".

type Props = {
  dark: boolean;
  /** "Satz melden" oder "Wort melden" - je nachdem, was der Screen zeigt. */
  meldenLabel: string;
  /**
   * Was gerade auf dem Schirm steht. Ohne Angabe geht die Rueckmeldung
   * trotzdem raus, nur ohne Bezug auf einen bestimmten Inhalt.
   */
  kontext?: RueckmeldungKontext;
};

const GRUENDE_SATZ = [
  'Übersetzung stimmt nicht',
  'Satz klingt falsch',
  'Audio stimmt nicht',
  'Aussprache wird nicht erkannt',
  'Etwas anderes',
];
const GRUENDE_WORT = [
  'Bedeutung stimmt nicht',
  'Wort ist falsch geschrieben',
  'Audio stimmt nicht',
  'Aussprache wird nicht erkannt',
  'Etwas anderes',
];

type Fenster = 'feedback' | 'melden' | null;

export function UebungsMenu({ dark, meldenLabel, kontext }: Props) {
  const theme = getTheme(dark);
  const { grantCoins, coinGrants } = useAppState();
  // Der Feedback-Coin gilt je KONTO (Simon, 2026-09-13) - und nur ein Konto
  // hat auf dem Server ein Feedback, gegen das sich der Coin pruefen laesst.
  const { hatKonto } = useAuthState();
  const [offen, setOffen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [fenster, setFenster] = useState<Fenster>(null);
  const [text, setText] = useState('');
  const [grund, setGrund] = useState<string | null>(null);
  const [sendet, setSendet] = useState(false);
  const [fehler, setFehler] = useState<string | null>(null);

  const istWort = meldenLabel.startsWith('Wort');
  const gruende = istWort ? GRUENDE_WORT : GRUENDE_SATZ;
  const belohnungOffen = !coinGrants[FEEDBACK_BELOHNUNG_SCHLUESSEL];

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), 2600);
    return () => clearTimeout(timer);
  }, [notice]);

  function oeffne(welches: Exclude<Fenster, null>) {
    setOffen(false);
    setText('');
    setGrund(null);
    setFehler(null);
    setFenster(welches);
  }

  function schliesse() {
    if (sendet) return;
    setFenster(null);
  }

  async function senden() {
    if (sendet || !fenster) return;
    if (fenster === 'feedback' && !text.trim()) return;
    if (fenster === 'melden' && !grund) return;
    setSendet(true);
    setFehler(null);
    try {
      await sendeRueckmeldung(
        fenster === 'feedback' ? 'feedback' : istWort ? 'wort_melden' : 'satz_melden',
        { grund: fenster === 'melden' ? grund ?? undefined : undefined, text },
        kontext ?? { screen: 'unbekannt' }
      );
      setFenster(null);
      if (fenster === 'feedback') {
        // Erst NACH erfolgreichem Senden anfordern - der Server bucht den Coin
        // nur, wenn er das Feedback dieses Kontos tatsaechlich vorfindet.
        const belohnt = hatKonto && grantCoins(FEEDBACK_BELOHNUNG_SCHLUESSEL, FEEDBACK_BELOHNUNG);
        setNotice(belohnt ? `Danke für dein Feedback! +${FEEDBACK_BELOHNUNG} Coin` : 'Danke für dein Feedback!');
      } else {
        setNotice('Danke! Wir schauen uns das an.');
      }
    } catch {
      // Text bleibt stehen - wer offline war, soll nicht alles neu tippen.
      setFehler('Das hat nicht geklappt. Bist du online? Versuch es gleich noch einmal.');
    } finally {
      setSendet(false);
    }
  }

  const sendenMoeglich = fenster === 'feedback' ? !!text.trim() : !!grund;

  return (
    <>
      <View style={styles.anchor}>
        <Pressable
          onPress={() => setOffen((o) => !o)}
          accessibilityRole="button"
          accessibilityLabel="Menü öffnen"
          accessibilityState={{ expanded: offen }}
          hitSlop={8}
          style={({ pressed }) => [
            styles.knopf,
            { borderColor: theme.border, backgroundColor: theme.cardBg, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Feather name="more-horizontal" size={18} color={theme.sub} />
        </Pressable>

        {offen ? (
          <>
            {/* Tippen daneben schliesst das Menue - deckt den ganzen Screen
                ab, liegt aber HINTER dem Panel (siehe zIndex/Reihenfolge
                unten), sonst waere das Panel selbst nicht mehr antippbar. */}
            <Pressable
              style={styles.hintergrund}
              accessibilityRole="button"
              accessibilityLabel="Menü schließen"
              onPress={() => setOffen(false)}
            />
            <View style={[styles.panel, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
              <Pressable
                onPress={() => oeffne('feedback')}
                accessibilityRole="button"
                accessibilityLabel="Feedback"
                accessibilityHint="Öffnet ein Textfeld, du bleibst in der Übung"
                style={({ pressed }) => [styles.eintrag, { opacity: pressed ? 0.6 : 1 }]}
              >
                <Text style={[styles.eintragText, { color: theme.text }]}>Feedback</Text>
              </Pressable>
              <View style={[styles.trenner, { backgroundColor: theme.border }]} />
              <Pressable
                onPress={() => oeffne('melden')}
                accessibilityRole="button"
                accessibilityLabel={meldenLabel}
                style={({ pressed }) => [styles.eintrag, { opacity: pressed ? 0.6 : 1 }]}
              >
                <Text style={[styles.eintragText, { color: theme.text }]}>{meldenLabel}</Text>
              </Pressable>
            </View>
          </>
        ) : null}
      </View>

      {/* Die Eingabe liegt in einem Modal UEBER der Uebung - nichts wird
          verlassen, und nach dem Schliessen steht die Aufgabe unveraendert
          da. */}
      <Modal visible={fenster !== null} transparent animationType="fade" onRequestClose={schliesse}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.modalWurzel}
        >
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={schliesse}
            accessibilityRole="button"
            accessibilityLabel="Schließen"
          />
          <View style={[styles.blatt, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.blattInhalt}>
              <Text style={[styles.blattTitel, { color: theme.text }]} accessibilityRole="header">
                {fenster === 'feedback' ? 'Feedback' : meldenLabel}
              </Text>

              {fenster === 'feedback' ? (
                <Text style={[styles.blattHinweis, { color: theme.sub }]}>
                  Was fällt dir auf, was fehlt dir? Wir lesen alles.
                  {!hatKonto
                    ? ` Mit Konto gibt es für dein erstes Feedback ${FEEDBACK_BELOHNUNG} Coin.`
                    : belohnungOffen
                      ? ` Für dein erstes Feedback gibt es ${FEEDBACK_BELOHNUNG} Coin.`
                      : ''}
                </Text>
              ) : (
                <>
                  {kontext?.inhaltText ? (
                    <Text style={[styles.blattHinweis, { color: theme.sub }]}>
                      Gemeldet wird: „{kontext.inhaltText}“
                    </Text>
                  ) : null}
                  <Text style={[styles.abschnitt, { color: theme.text }]}>Was stimmt nicht?</Text>
                  <View style={styles.gruende}>
                    {gruende.map((g) => (
                      <SatzChip
                        key={g}
                        dark={dark}
                        label={g}
                        aktiv={grund === g}
                        selected={grund === g}
                        onPress={() => setGrund(g)}
                        a11y={g}
                      />
                    ))}
                  </View>
                </>
              )}

              <TextInput
                value={text}
                onChangeText={setText}
                multiline
                autoFocus={fenster === 'feedback'}
                maxLength={2000}
                placeholder={fenster === 'feedback' ? 'Dein Feedback' : 'Magst du es kurz erklären? (optional)'}
                placeholderTextColor={theme.sub}
                accessibilityLabel={fenster === 'feedback' ? 'Dein Feedback' : 'Erklärung, optional'}
                style={[
                  styles.eingabe,
                  { color: theme.text, borderColor: theme.border, backgroundColor: theme.subtleFill },
                ]}
              />

              {fehler ? (
                <Text style={[styles.fehler, { color: theme.text }]} accessibilityLiveRegion="polite">
                  {fehler}
                </Text>
              ) : null}

              <View style={styles.knoepfe}>
                <PillButton
                  dark={dark}
                  label="Senden"
                  onPress={senden}
                  disabled={!sendenMoeglich}
                  busy={sendet}
                />
                <PillButton dark={dark} variant="ghost" label="Abbrechen" onPress={schliesse} disabled={sendet} />
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {notice ? (
        <View
          accessibilityLiveRegion="polite"
          style={[styles.notice, { backgroundColor: theme.cardBg, borderColor: theme.border }]}
        >
          <Text style={[styles.noticeText, { color: theme.text }]}>{notice}</Text>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  anchor: { position: 'relative' },
  knopf: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
  },
  hintergrund: {
    position: 'absolute',
    // Grosszuegig ueberdimensioniert statt exakt bemessen - das Panel kann
    // je nach Bildschirmbreite unterschiedlich weit reichen, ein zu kleiner
    // Hintergrund liesse sich an den Raendern nicht schliessen.
    top: -1000,
    left: -1000,
    right: -1000,
    bottom: -1000,
    zIndex: 15,
  },
  panel: {
    position: 'absolute',
    top: 42,
    right: 0,
    minWidth: 170,
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.xs,
    zIndex: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  eintrag: { paddingVertical: SPACING.md, paddingHorizontal: SPACING.lg },
  eintragText: { fontSize: FONT_SIZE.body, ...schrift('600') },
  trenner: { height: StyleSheet.hairlineWidth, marginHorizontal: SPACING.sm },
  modalWurzel: {
    flex: 1,
    justifyContent: 'flex-end',
    // Leichter Schleier, damit klar ist, dass die Uebung dahinter pausiert.
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  blatt: {
    borderTopLeftRadius: RADIUS.lg,
    borderTopRightRadius: RADIUS.lg,
    borderWidth: 1.5,
    borderBottomWidth: 0,
    maxHeight: '85%',
  },
  blattInhalt: { padding: SPACING.lg, paddingBottom: SPACING.xl, gap: SPACING.md },
  blattTitel: { fontSize: FONT_SIZE.h2, lineHeight: LINE_HEIGHT.h2, ...schrift('800') },
  blattHinweis: { fontSize: FONT_SIZE.body, lineHeight: LINE_HEIGHT.body },
  abschnitt: { fontSize: FONT_SIZE.body, ...schrift('700') },
  gruende: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  eingabe: {
    minHeight: 110,
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    fontSize: FONT_SIZE.body,
    textAlignVertical: 'top',
  },
  fehler: { fontSize: FONT_SIZE.small, ...schrift('700') },
  knoepfe: { gap: SPACING.sm },
  notice: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: SPACING.lg,
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    zIndex: 30,
  },
  noticeText: { fontSize: FONT_SIZE.small, ...schrift('700'), textAlign: 'center' },
});
