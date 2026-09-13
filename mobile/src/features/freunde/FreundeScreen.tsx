import { useCallback, useState } from 'react';
import { ScrollView, Share, StyleSheet, Text, TextInput, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { PillButton, Screen } from '../../components';
import { useAppState } from '../../state/AppState';
import { useAuthState } from '../../state/AuthState';
import { useOnboardingState } from '../../state/OnboardingState';
import {
  CODE_LAENGE,
  NAME_MAX,
  freundHinzufuegen,
  ladeAnzeigename,
  ladeFreunde,
  ladeFreundescode,
  normalisiereCode,
  speichereAnzeigename,
  type Freund,
  type HinzufuegenErgebnis,
} from '../../data/freunde';
import { Gruppe, Zeile, gruppenGrund } from '../profile/ListenBausteine';
import {
  ACCENT_ERROR,
  ACCENT_GREEN,
  ACCENT_GREEN_DARK,
  FONT_SIZE,
  LINE_HEIGHT,
  RADIUS,
  SPACING,
  getTheme,
  schrift,
} from '../../theme/tokens';

// Freunde (2026-09-14, Simons Auftrag: "Aendere die Freundeseite wieder zu
// etwas mit Freunden und Leute hinzufuegen"). Bis dahin stand hier der
// Holo-Karten-Testscreen, der inzwischen 1:1 die Startseite war.
//
// Drei Dinge, in der Reihenfolge, in der man sie braucht:
//   1. der eigene Code zum Weitergeben (Teilen-Menue: WhatsApp & Co.)
//   2. ein fremder Code zum Eingeben
//   3. die Liste der Freunde
// Dazu der Name, unter dem Freunde einen sehen - ohne ihn stuende in ihrer
// Liste nur "Ohne Namen".
//
// Gruppen, Streak und Rangliste kommen spaeter (CLAUDE.md, Freunde-Bereich).
// Wer hier ankommt, braucht ein Konto - das prueft die Route davor.

type Meldung = { text: string; gut: boolean } | null;

const MELDUNG: Record<HinzufuegenErgebnis, (name: string | null) => Meldung> = {
  befreundet: (name) => ({
    text: name ? `Du und ${name} seid jetzt befreundet.` : 'Ihr seid jetzt befreundet.',
    gut: true,
  }),
  schon_befreundet: (name) => ({
    text: name ? `Du und ${name} seid schon befreundet.` : 'Ihr seid schon befreundet.',
    gut: true,
  }),
  eigener_code: () => ({ text: 'Das ist dein eigener Code.', gut: false }),
  unbekannt: () => ({ text: 'Diesen Code gibt es nicht. Prüf ihn noch einmal.', gut: false }),
  zu_viele_versuche: () => ({
    text: 'Zu viele falsche Codes. Versuch es in ein paar Minuten noch einmal.',
    gut: false,
  }),
  kein_konto: () => ({ text: 'Dafür musst du angemeldet sein.', gut: false }),
};

const OFFLINE = 'Das hat nicht geklappt. Bist du online?';

export function FreundeScreen() {
  const { darkMode } = useAppState();
  const { session } = useAuthState();
  const { name: onboardingName } = useOnboardingState();
  const theme = getTheme(darkMode);
  const nutzerId = session?.user?.id ?? null;

  const [code, setCode] = useState<string | null>(null);
  const [codeFehlt, setCodeFehlt] = useState(false);
  const [freunde, setFreunde] = useState<Freund[] | null>(null);
  const [freundeFehlen, setFreundeFehlen] = useState(false);

  const [eingabe, setEingabe] = useState('');
  const [sendet, setSendet] = useState(false);
  const [meldung, setMeldung] = useState<Meldung>(null);

  const [name, setName] = useState('');
  const [gespeicherterName, setGespeicherterName] = useState<string | null>(null);
  const [speichert, setSpeichert] = useState(false);
  const [nameMeldung, setNameMeldung] = useState<Meldung>(null);

  // Bei jedem Betreten neu laden: ein Freund kann in der Zwischenzeit den
  // eigenen Code eingegeben haben.
  useFocusEffect(
    useCallback(() => {
      if (!nutzerId) return;
      let aktiv = true;
      (async () => {
        const [c, f, n] = await Promise.all([ladeFreundescode(), ladeFreunde(), ladeAnzeigename(nutzerId)]);
        if (!aktiv) return;
        setCode(c);
        setCodeFehlt(c === null);
        setFreunde(f ?? []);
        setFreundeFehlen(f === null);
        setGespeicherterName(n);
        setName((bisher) => (bisher ? bisher : n ?? ''));
      })();
      return () => {
        aktiv = false;
      };
    }, [nutzerId])
  );

  const teilen = async () => {
    if (!code) return;
    try {
      await Share.share({
        message: `Lern mit mir in der App „500 Wörter“! Gib dort meinen Freundescode ein: ${code}`,
      });
    } catch {
      // Im Browser gibt es das Teilen-Menue nicht immer - der Code steht ja
      // gross auf dem Schirm.
      setMeldung({ text: `Teilen geht hier nicht. Dein Code: ${code}`, gut: false });
    }
  };

  const sauber = normalisiereCode(eingabe);

  const hinzufuegen = async () => {
    if (sauber.length !== CODE_LAENGE || sendet) return;
    setSendet(true);
    setMeldung(null);
    try {
      const { ergebnis, name: freundName } = await freundHinzufuegen(sauber);
      setMeldung(MELDUNG[ergebnis](freundName));
      if (ergebnis === 'befreundet' || ergebnis === 'schon_befreundet') {
        setEingabe('');
        const f = await ladeFreunde();
        if (f) setFreunde(f);
      }
    } catch {
      setMeldung({ text: OFFLINE, gut: false });
    } finally {
      setSendet(false);
    }
  };

  const nameGeaendert = name.trim() !== (gespeicherterName ?? '');

  const nameSpeichern = async () => {
    if (!nutzerId || !nameGeaendert || speichert) return;
    setSpeichert(true);
    setNameMeldung(null);
    try {
      await speichereAnzeigename(nutzerId, name);
      const neu = name.trim() || null;
      setGespeicherterName(neu);
      setNameMeldung({ text: neu ? 'Gespeichert.' : 'Name entfernt.', gut: true });
    } catch {
      setNameMeldung({ text: OFFLINE, gut: false });
    } finally {
      setSpeichert(false);
    }
  };

  const meldungFarbe = (m: NonNullable<Meldung>) =>
    m.gut ? (darkMode ? ACCENT_GREEN : ACCENT_GREEN_DARK) : ACCENT_ERROR;

  const feld = [
    styles.feld,
    { borderColor: theme.border, color: theme.text, backgroundColor: theme.pageBg },
  ];

  return (
    <Screen dark={darkMode} padHorizontal={false} style={{ backgroundColor: gruppenGrund(darkMode) }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.seite}
      >
        <Text style={[styles.titel, { color: theme.text }]} accessibilityRole="header">
          Freunde
        </Text>
        <Text style={[styles.intro, { color: theme.sub }]}>
          Lernt zusammen. Wer deinen Code eingibt, ist direkt mit dir befreundet.
        </Text>

        <Gruppe dark={darkMode} titel="Dein Freundescode">
          <View style={styles.box}>
            <Text
              style={[styles.code, { color: codeFehlt ? theme.sub : theme.text }]}
              selectable
              accessibilityLabel={
                code ? `Dein Freundescode: ${code.split('').join(' ')}` : 'Dein Freundescode lädt'
              }
            >
              {code ?? (codeFehlt ? 'Offline' : '······')}
            </Text>
            <PillButton
              label="Code teilen"
              dark={darkMode}
              onPress={teilen}
              disabled={!code}
              hint="Öffnet das Teilen-Menü, zum Beispiel für WhatsApp"
            />
          </View>
        </Gruppe>

        <Gruppe dark={darkMode} titel="Freund hinzufügen">
          <View style={styles.box}>
            <TextInput
              value={eingabe}
              onChangeText={(t) => {
                setEingabe(t);
                if (meldung) setMeldung(null);
              }}
              placeholder="Code eingeben"
              placeholderTextColor={theme.sub}
              autoCapitalize="characters"
              autoCorrect={false}
              autoComplete="off"
              maxLength={CODE_LAENGE + 2}
              returnKeyType="done"
              onSubmitEditing={hinzufuegen}
              accessibilityLabel="Freundescode eingeben"
              // Gesperrt nur, wenn etwas drinsteht - sonst stuende auch der
              // Platzhalter auseinandergezogen da.
              style={[feld, eingabe ? styles.codeFeld : null]}
            />
            <PillButton
              label="Hinzufügen"
              variant="secondary"
              dark={darkMode}
              onPress={hinzufuegen}
              disabled={sauber.length !== CODE_LAENGE}
              busy={sendet}
            />
            {meldung ? (
              <Text
                style={[styles.meldung, { color: meldungFarbe(meldung) }]}
                accessibilityLiveRegion="polite"
              >
                {meldung.text}
              </Text>
            ) : null}
          </View>
        </Gruppe>

        <Gruppe
          dark={darkMode}
          titel={freunde && freunde.length > 0 ? `Deine Freunde (${freunde.length})` : 'Deine Freunde'}
          fuss={freundeFehlen ? 'Die Liste konnte nicht geladen werden. Bist du online?' : undefined}
        >
          {freunde === null ? (
            <Zeile dark={darkMode} titel="Wird geladen …" />
          ) : freunde.length === 0 ? (
            <Zeile
              dark={darkMode}
              titel="Noch niemand dabei"
              untertitel="Teile deinen Code - sobald jemand ihn eingibt, steht er hier."
            />
          ) : (
            freunde.map((f) => (
              <Zeile
                key={f.id}
                dark={darkMode}
                titel={f.name ?? 'Ohne Namen'}
                wert={`seit ${f.seit.toLocaleDateString('de-DE', { day: 'numeric', month: 'numeric' })}`}
              />
            ))
          )}
        </Gruppe>

        <Gruppe
          dark={darkMode}
          titel="So sehen dich Freunde"
          fuss="Dein Name aus dem Onboarding bleibt privat auf diesem Gerät. Hier legst du fest, was Freunde sehen."
        >
          <View style={styles.box}>
            <TextInput
              value={name}
              onChangeText={(t) => {
                setName(t);
                if (nameMeldung) setNameMeldung(null);
              }}
              placeholder={onboardingName?.trim() || 'Dein Name'}
              placeholderTextColor={theme.sub}
              maxLength={NAME_MAX}
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={nameSpeichern}
              accessibilityLabel="Dein Name für Freunde"
              style={feld}
            />
            <PillButton
              label="Speichern"
              variant="secondary"
              dark={darkMode}
              onPress={nameSpeichern}
              disabled={!nameGeaendert}
              busy={speichert}
            />
            {nameMeldung ? (
              <Text
                style={[styles.meldung, { color: meldungFarbe(nameMeldung) }]}
                accessibilityLiveRegion="polite"
              >
                {nameMeldung.text}
              </Text>
            ) : null}
          </View>
        </Gruppe>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  seite: {
    paddingBottom: SPACING.xxxl,
  },
  // Wie auf Profil und Lektionen: grosse Seitenueberschrift.
  titel: {
    ...schrift('800'),
    fontSize: FONT_SIZE.h1,
    lineHeight: LINE_HEIGHT.h1,
    paddingHorizontal: SPACING.lg,
  },
  intro: {
    ...schrift('500'),
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.xs,
  },
  box: {
    padding: SPACING.lg,
    gap: SPACING.md,
  },
  code: {
    ...schrift('800'),
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    // Gesperrt, damit man die sechs Zeichen einzeln abliest - der Code wird
    // vorgelesen und abgetippt, nicht ueberflogen.
    letterSpacing: 6,
    textAlign: 'center',
  },
  feld: {
    ...schrift('600'),
    fontSize: FONT_SIZE.bodyLg,
    minHeight: 48,
    borderWidth: 1,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
  },
  codeFeld: {
    letterSpacing: 3,
  },
  meldung: {
    ...schrift('600'),
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
  },
});
