import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppState } from '../../state/AppState';
import { useAuthState } from '../../state/AuthState';
import { PillButton } from '../../components';
import { KONTO_NOETIG, type KontoGrund } from '../../data/demo';
import {
  getTheme,
  ACCENT_BLUE,
  ACCENT_GREEN,
  RADIUS,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
} from '../../theme/tokens';

// Konto anlegen oder anmelden (2026-08-22).
//
// **Warum E-Mail und nicht Google:** der Google-Login ist codeseitig fertig,
// braucht aber einen OAuth-Client in der Google Cloud Console und die
// Client-ID in Supabase - beides haengt an Simons Konten. Apple braucht ein
// bezahltes Developer-Programm. Ohne E-Mail waere damit ueberhaupt kein Konto
// erreichbar, und seit der Entscheidung vom 2026-08-22 haengt daran alles:
// Kaufen, Freunde, Gruppen, Geraeteabgleich.
//
// **Die Bestaetigungs-Mail ist derzeit AUS - nur zum Testen.** Am 2026-08-22
// wurde `mailer_autoconfirm` auf Simons Bitte eingeschaltet, damit Konten
// beim Entwickeln sofort nutzbar sind.
//
// !!! VOR DEM LAUNCH ZURUECKDREHEN !!! Zwei Dinge, die zusammengehoeren:
//   1. `mailer_autoconfirm` wieder aus - sonst registriert sich jeder mit
//      einer fremden oder erfundenen Adresse, und kein Konto laesst sich
//      wiederherstellen, weil niemand die Adresse besitzt.
//   2. Eigenen SMTP-Anbieter hinterlegen. Supabases eingebauter Versand ist
//      absichtlich stark gedrosselt (wenige Mails je Stunde) und nur zum
//      Testen gedacht. Punkt 1 ohne Punkt 2 sperrt alle Nutzer aus.
//
// Der Code deckt BEIDE Faelle ab und muss dafuer nicht angefasst werden:
// `signUpWithEmail` erkennt am Fehlen der Sitzung, ob eine Bestaetigung
// aussteht, und dieser Screen zeigt dann den Postfach-Hinweis. Sobald die
// Pflicht wieder an ist, erscheint er von selbst.

export function KontoScreen({ grund }: { grund?: KontoGrund }) {
  const { darkMode } = useAppState();
  const { signUpWithEmail, signInWithEmail, signInWithGoogle } = useAuthState();
  const theme = getTheme(darkMode);
  const insets = useSafeAreaInsets();

  const [modus, setModus] = useState<'anmelden' | 'registrieren'>('registrieren');
  const [email, setEmail] = useState('');
  const [passwort, setPasswort] = useState('');
  const [laeuft, setLaeuft] = useState(false);
  const [fehler, setFehler] = useState<string | null>(null);
  const [postfach, setPostfach] = useState(false);

  const anlass = grund ? KONTO_NOETIG[grund] : null;
  // Supabase verlangt mindestens sechs Zeichen. Hier gleich pruefen, statt
  // den Nutzer den Umweg ueber eine Server-Fehlermeldung gehen zu lassen.
  const bereit = /\S+@\S+\.\S+/.test(email) && passwort.length >= 6;

  async function absenden() {
    if (!bereit || laeuft) return;
    setLaeuft(true);
    setFehler(null);
    try {
      if (modus === 'registrieren') {
        const { bestaetigungNoetig } = await signUpWithEmail(email, passwort);
        if (bestaetigungNoetig) {
          setPostfach(true);
          return;
        }
      } else {
        await signInWithEmail(email, passwort);
      }
      // Angemeldet - zurueck dorthin, wo der Nutzer hergekommen ist.
      if (router.canGoBack()) router.back();
      else router.replace('/');
    } catch (e) {
      setFehler(uebersetzeFehler(e));
    } finally {
      setLaeuft(false);
    }
  }

  if (postfach) {
    return (
      <View style={[styles.container, { backgroundColor: theme.pageBg, paddingTop: insets.top }]}>
        <Kopf dark={darkMode} titel="Fast geschafft" />
        <View style={styles.inhalt}>
          <Feather name="mail" size={40} color={ACCENT_GREEN} />
          <Text style={[styles.gross, { color: theme.text }]}>Schau in dein Postfach</Text>
          <Text style={[styles.text, { color: theme.sub }]}>
            {`Wir haben dir eine Bestätigung an ${email} geschickt. Sobald du auf den Link tippst, ist dein Konto aktiv — dann meld dich hier an.`}
          </Text>
          <PillButton
            label="Zur Anmeldung"
            dark={darkMode}
            onPress={() => {
              setPostfach(false);
              setModus('anmelden');
              setPasswort('');
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg, paddingTop: insets.top }]}>
      <Kopf dark={darkMode} titel={modus === 'anmelden' ? 'Anmelden' : 'Konto anlegen'} />

      <ScrollView contentContainerStyle={styles.inhalt} keyboardShouldPersistTaps="handled">
        {/* Warum der Nutzer hier gelandet ist. Ohne den Satz wirkt die
            Anmeldemaske wie eine Huerde ohne Grund. */}
        {anlass ? (
          <View style={[styles.anlass, { borderLeftColor: ACCENT_BLUE }]}>
            <Text style={[styles.anlassTitel, { color: theme.text }]}>{anlass.titel}</Text>
            <Text style={[styles.text, { color: theme.sub }]}>{anlass.text}</Text>
          </View>
        ) : null}

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="E-Mail"
          placeholderTextColor={theme.sub}
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          accessibilityLabel="E-Mail-Adresse"
          style={[styles.feld, { borderColor: theme.border, backgroundColor: theme.cardBg, color: theme.text }]}
        />
        <TextInput
          value={passwort}
          onChangeText={setPasswort}
          placeholder="Passwort (mind. 6 Zeichen)"
          placeholderTextColor={theme.sub}
          secureTextEntry
          autoCapitalize="none"
          autoComplete={modus === 'anmelden' ? 'current-password' : 'new-password'}
          accessibilityLabel="Passwort"
          onSubmitEditing={absenden}
          style={[styles.feld, { borderColor: theme.border, backgroundColor: theme.cardBg, color: theme.text }]}
        />

        {fehler ? <Text style={[styles.fehler]}>{fehler}</Text> : null}

        <PillButton
          label={laeuft ? '…' : modus === 'anmelden' ? 'Anmelden' : 'Konto anlegen'}
          dark={darkMode}
          disabled={!bereit || laeuft}
          onPress={absenden}
        />
        {laeuft ? <ActivityIndicator color={ACCENT_BLUE} /> : null}

        <Pressable
          onPress={() => {
            setModus((m) => (m === 'anmelden' ? 'registrieren' : 'anmelden'));
            setFehler(null);
          }}
          accessibilityRole="button"
          style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
        >
          <Text style={[styles.wechsel, { color: theme.sub }]}>
            {modus === 'anmelden' ? 'Noch kein Konto? Hier anlegen' : 'Schon ein Konto? Hier anmelden'}
          </Text>
        </Pressable>

        {/* Google steht bewusst unten und nicht oben: er sieht wie der
            bequeme Weg aus, funktioniert aber erst, wenn der OAuth-Client
            eingerichtet ist. Ihn zuerst anzubieten hiesse, die meisten Nutzer
            in eine Fehlermeldung zu schicken. */}
        <View style={[styles.trenner, { borderTopColor: theme.border }]} />
        <Pressable
          onPress={() => signInWithGoogle().catch((e) => setFehler(uebersetzeFehler(e)))}
          accessibilityRole="button"
          accessibilityLabel="Mit Google anmelden"
          style={({ pressed }) => [
            styles.google,
            { borderColor: theme.border, backgroundColor: theme.cardBg, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Text style={[styles.googleText, { color: theme.text }]}>Mit Google anmelden</Text>
        </Pressable>
        <Text style={[styles.klein, { color: theme.sub }]}>
          Google ist noch nicht freigeschaltet — bis dahin geht es über E-Mail.
        </Text>
      </ScrollView>
    </View>
  );
}

function Kopf({ dark, titel }: { dark: boolean; titel: string }) {
  const theme = getTheme(dark);
  return (
    <View style={styles.kopf}>
      <Pressable
        onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel="Zurück"
        style={styles.kopfSeite}
      >
        <Feather name="arrow-left" size={24} color={theme.text} />
      </Pressable>
      <Text style={[styles.titel, { color: theme.text }]}>{titel}</Text>
      <View style={styles.kopfSeite} />
    </View>
  );
}

/**
 * Supabase antwortet auf Englisch und technisch ("Invalid login credentials").
 * Die App spricht Deutsch - und ein Nutzer, der "User already registered"
 * liest, weiss nicht, dass er sich einfach anmelden soll.
 */
function uebersetzeFehler(e: unknown): string {
  const roh = e instanceof Error ? e.message : String(e);
  const k = roh.toLowerCase();
  if (k.includes('invalid login')) return 'E-Mail oder Passwort stimmt nicht.';
  if (k.includes('already registered')) return 'Diese E-Mail hat schon ein Konto — meld dich einfach an.';
  if (k.includes('email not confirmed')) return 'Bestätige zuerst den Link in deiner E-Mail.';
  if (k.includes('rate limit') || k.includes('too many')) return 'Zu viele Versuche. Warte kurz und probier es nochmal.';
  if (k.includes('password')) return 'Das Passwort ist zu kurz (mindestens 6 Zeichen).';
  return roh;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  kopf: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: SPACING.lg, paddingBottom: SPACING.sm },
  kopfSeite: { width: 40 },
  titel: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.title,
    lineHeight: LINE_HEIGHT.title,
  },
  inhalt: { padding: SPACING.lg, gap: SPACING.md, alignItems: 'stretch' },
  anlass: { borderLeftWidth: 3, paddingLeft: SPACING.md, gap: 4, marginBottom: SPACING.sm },
  anlassTitel: { fontSize: FONT_SIZE.body, fontWeight: '800' },
  gross: { fontSize: FONT_SIZE.title, fontWeight: '800', textAlign: 'center' },
  text: { fontSize: FONT_SIZE.caption, lineHeight: LINE_HEIGHT.caption },
  klein: { fontSize: FONT_SIZE.caption, textAlign: 'center' },
  feld: { borderWidth: 1.5, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, paddingVertical: 12, fontSize: FONT_SIZE.body },
  fehler: { color: '#D9564F', fontSize: FONT_SIZE.caption, fontWeight: '700' },
  wechsel: { fontSize: FONT_SIZE.caption, fontWeight: '700', textAlign: 'center', paddingVertical: SPACING.sm },
  trenner: { borderTopWidth: 1, marginVertical: SPACING.sm },
  google: { borderWidth: 1.5, borderRadius: RADIUS.pill, paddingVertical: 12, alignItems: 'center' },
  googleText: { fontSize: FONT_SIZE.body, fontWeight: '700' },
});
