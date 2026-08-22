import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { OnboardingScaffold, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import { Mascot } from '../../src/features/mascot';
import {
  getTheme,
  ACCENT_PREMIUM,
  RADIUS,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
} from '../../src/theme/tokens';

// O9b - Der erste Coin.
//
// Sitzt direkt hinter der bestandenen Beispiellektion (O9) und vor der
// Kontofrage (O10). Der Nutzer hat gerade zum ersten Mal etwas geschafft -
// das ist der Moment, in dem eine Belohnung sich verdient anfuehlt statt
// geschenkt. Danach kommt O10 und fragt nach dem Konto: "diesen Fortschritt
// nicht verlieren" hat jetzt etwas Greifbares, auf das es sich bezieht.
//
// Warum ueberhaupt ein Coin und nicht nur Lob: Coins schalten ab drei Stueck
// eine Gratiskategorie frei (siehe CLAUDE.md, Abschnitt "Coins und
// Gluueckskiste"). Wer mit 1 von 3 startet statt mit 0 von 3, sieht eine
// angefangene Sammlung statt einer leeren - und auf S1 steht beim
// Coins-Knopf von Anfang an eine echte Zahl.
//
// Das Geschenk wird ueber `grantCoins` genau EINMAL vergeben, gebunden an
// den Schluessel unten. Wer per Zurueck-Wisch noch einmal auf diesen Screen
// kommt, sieht denselben Kontostand und bekommt keinen zweiten Coin.

const GRANT_ID = 'onboarding_lektion';

export default function CoinScreen() {
  const { darkMode, coins, grantCoins, hydrated } = useAppState();
  const theme = getTheme(darkMode);

  // Ob DIESER Besuch die Gutschrift ausgeloest hat - beim zweiten Mal soll
  // der Screen nicht noch einmal "du bekommst" behaupten.
  const [justGranted, setJustGranted] = useState(false);
  const asked = useRef(false);

  useEffect(() => {
    // Erst pruefen, wenn der gespeicherte Stand geladen ist - sonst faellt
    // die Pruefung gegen den leeren Default-Zustand aus und der Screen
    // behauptet auch beim zweiten Besuch, es sei der erste Coin.
    if (!hydrated || asked.current) return;
    // Ref-Wache zusaetzlich gegen den doppelten Effektlauf im
    // Entwicklungsmodus.
    asked.current = true;
    setJustGranted(grantCoins(GRANT_ID, 1));
  }, [hydrated, grantCoins]);

  return (
    <OnboardingScaffold
      step={stepNumber(8)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Das hast du dir "
      titleAccent="verdient"
      subtitle={
        justGranted
          ? 'Dein erster Coin. Sammelst du drei davon, schaltest du eine Kategorie deiner Wahl frei — kostenlos.'
          : 'Deinen ersten Coin hast du schon. Sammelst du drei davon, schaltest du eine Kategorie deiner Wahl frei — kostenlos.'
      }
      onBack={() => router.back()}
      footer={
        <PillButton
          label="Weiter"
          dark={darkMode}
          onPress={() => router.push('/onboarding/o10-konto')}
        />
      }
    >
      <View style={styles.mascotRow}>
        <Mascot state="feiert" size="gross" />
      </View>

      {/* Der Kontostand als eigenes Element - dieselbe Zahl, die von jetzt an
          oben rechts auf dem Startscreen steht. */}
      <View
        accessibilityRole="text"
        accessibilityLabel={`Du hast ${coins} von 3 Coins`}
        style={[styles.coinCard, { backgroundColor: theme.cardBg, borderColor: theme.border }]}
      >
        <Feather name="circle" size={28} color={ACCENT_PREMIUM} accessibilityElementsHidden />
        <Text style={[styles.coinCount, { color: theme.text }]}>{coins}</Text>
        <Text style={[styles.coinOf, { color: theme.sub }]}>von 3</Text>
      </View>

      <Text style={[styles.hint, { color: theme.sub }]}>
        Weitere Coins bekommst du, wenn du Freunde einlädst — und mit etwas Glück
        aus der täglichen Kiste.
      </Text>
    </OnboardingScaffold>
  );
}

const styles = StyleSheet.create({
  mascotRow: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  coinCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    borderWidth: 1,
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.xl,
  },
  coinCount: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h1,
    lineHeight: LINE_HEIGHT.h1,
  },
  coinOf: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    fontWeight: '700',
  },
  hint: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    textAlign: 'center',
    marginTop: SPACING.lg,
  },
});
