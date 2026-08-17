import { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  getTheme,
  ACCENT_ORANGE,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
} from '../../theme/tokens';
import { ProgressBar } from '../ProgressBar';

// Gemeinsames Geruest aller Onboarding-Screens.
//
// Aufbau nach Babbel: Zurueck-Pfeil und Fortschrittsbalken oben, darunter
// eine grosse zentrierte Serifen-Headline, ein ruhiger Untertitel, dann der
// Inhalt. Der Fussbereich ist fix und scrollt NICHT mit - dasselbe Muster
// wie die Pfad-Box auf S1 (siehe CLAUDE.md).
//
// Die Headline nimmt optional ein hervorgehobenes Wort auf: Babbel setzt die
// Zielsprache kursiv und orange mitten in den Satz ("Was willst du auf
// svenska koennen?"). Dafuer sind `title` und `titleAccent` getrennt.

type Props = {
  step: number;
  total: number;
  dark: boolean;
  title: string;
  /** Wird kursiv + orange direkt hinter `title` gesetzt. */
  titleAccent?: string;
  /** Text nach dem hervorgehobenen Wort, z.B. " koennen?" */
  titleAfter?: string;
  subtitle?: string;
  children: ReactNode;
  /** Fixer Fussbereich, scrollt nicht mit. */
  footer?: ReactNode;
  onBack?: () => void;
};

export function OnboardingScaffold({
  step,
  total,
  dark,
  title,
  titleAccent,
  titleAfter,
  subtitle,
  children,
  footer,
  onBack,
}: Props) {
  const theme = getTheme(dark);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.page, { backgroundColor: theme.pageBg, paddingTop: insets.top + SPACING.sm }]}>
      <View style={styles.topBar}>
        {onBack ? (
          <Pressable
            onPress={onBack}
            accessibilityRole="button"
            accessibilityLabel="Zurück"
            hitSlop={12}
            style={styles.backButton}
          >
            <Feather name="arrow-left" size={24} color={theme.sub} />
          </Pressable>
        ) : (
          // Platzhalter gleicher Breite, damit der Balken auf allen Screens
          // an derselben Stelle beginnt - auch auf dem ersten ohne Zurueck.
          <View style={styles.backButton} />
        )}
        {/* Eigenes Label: der Balken liest sonst "25 Prozent" vor. In einer
            Strecke mit zwoelf Schritten ist "Schritt 3 von 12" die
            hilfreichere Ansage. */}
        <ProgressBar step={step} total={total} dark={dark} label={`Schritt ${step} von ${total}`} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, { color: theme.text }]}>
          {title}
          {titleAccent ? <Text style={styles.titleAccent}>{titleAccent}</Text> : null}
          {titleAfter ?? ''}
        </Text>

        {subtitle && <Text style={[styles.subtitle, { color: theme.sub }]}>{subtitle}</Text>}

        <View style={styles.body}>{children}</View>
      </ScrollView>

      {footer && (
        <View
          style={[
            styles.footer,
            {
              borderTopColor: theme.border,
              backgroundColor: theme.pageBg,
              paddingBottom: Math.max(insets.bottom, SPACING.lg),
            },
          ]}
        >
          {footer}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
    gap: SPACING.md,
  },
  backButton: {
    width: 32,
    alignItems: 'flex-start',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.xl,
  },
  title: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h1,
    lineHeight: LINE_HEIGHT.h1,
    textAlign: 'center',
    marginTop: SPACING.lg,
  },
  titleAccent: {
    fontFamily: FONT_FAMILY.serif,
    fontStyle: 'italic',
    color: ACCENT_ORANGE,
  },
  subtitle: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    textAlign: 'center',
    marginTop: SPACING.md,
  },
  body: {
    marginTop: SPACING.xxl,
  },
  footer: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});
