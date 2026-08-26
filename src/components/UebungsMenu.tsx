import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { getTheme, RADIUS, SPACING, FONT_SIZE } from '../theme/tokens';

// "..."-Dropdown oben rechts auf jedem Uebungsscreen (2026-08-26, Simons
// Wunsch: "auf jedem Uebungsscreen fuer egal welche Stufe"). Betrifft
// ExerciseScreen.tsx (Speed-Run), SentenceReviewScreen.tsx,
// WordReviewScreen.tsx und LessonScreen.tsx - ein Baustein statt vier
// fast identischer Kopien.
//
// Bewusst NICHT `HeaderMenu.tsx` wiederverwendet: das faehrt seine Knoepfe
// seitlich AUS der Kopfzeile heraus (S1-Stil) - Simons Vorgabe hier ist
// ausdruecklich ein klassisches Dropdown, das sich NACH UNTEN oeffnet.
// Zwei unterschiedliche Interaktionen, deshalb ein eigener Baustein statt
// eine Variante an HeaderMenu drangebaut.
//
// "Feedback" fuehrt zur bestehenden Rewards-Seite (`/rewards`) - dort gibt
// es bereits ein Feedback-Textfeld, dessen "Absenden"-Knopf allerdings noch
// deaktiviert ist ("(bald)", siehe RewardsScreen.tsx - keine echte
// Backend-Anbindung existiert). "[X] melden" hat noch GAR KEINE
// Infrastruktur (keine Tabelle, kein Endpunkt) - deshalb hier bewusst ein
// ehrlicher Platzhalter statt eine Meldung vorzutaeuschen, die nirgendwo
// ankommt. Gleiches Hinweis-Muster (Toast unten, 2,6s) wie beim
// "Geschenk"-Knopf in HeaderMenu.tsx ("Die taegliche Kiste kommt spaeter.")
// - dieselbe ehrliche Sprache fuer denselben Fall ("existiert technisch
// noch nicht") an zwei verschiedenen Stellen der App.

type Props = {
  dark: boolean;
  /** "Satz melden" oder "Wort melden" - je nachdem, was der Screen zeigt. */
  meldenLabel: string;
};

export function UebungsMenu({ dark, meldenLabel }: Props) {
  const theme = getTheme(dark);
  const [offen, setOffen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), 2600);
    return () => clearTimeout(timer);
  }, [notice]);

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
                onPress={() => {
                  setOffen(false);
                  router.push('/rewards');
                }}
                accessibilityRole="button"
                accessibilityLabel="Feedback"
                style={({ pressed }) => [styles.eintrag, { opacity: pressed ? 0.6 : 1 }]}
              >
                <Text style={[styles.eintragText, { color: theme.text }]}>Feedback</Text>
              </Pressable>
              <View style={[styles.trenner, { backgroundColor: theme.border }]} />
              <Pressable
                onPress={() => {
                  setOffen(false);
                  setNotice('Danke! Melde-Funktion kommt bald.');
                }}
                accessibilityRole="button"
                accessibilityLabel={meldenLabel}
                accessibilityHint="Noch nicht angebunden"
                style={({ pressed }) => [styles.eintrag, { opacity: pressed ? 0.6 : 1 }]}
              >
                <Text style={[styles.eintragText, { color: theme.text }]}>{meldenLabel}</Text>
              </Pressable>
            </View>
          </>
        ) : null}
      </View>

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
  eintragText: { fontSize: FONT_SIZE.body, fontWeight: '600' },
  trenner: { height: StyleSheet.hairlineWidth, marginHorizontal: SPACING.sm },
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
  noticeText: { fontSize: FONT_SIZE.small, fontWeight: '700', textAlign: 'center' },
});
