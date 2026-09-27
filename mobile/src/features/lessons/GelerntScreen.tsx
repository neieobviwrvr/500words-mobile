import { useCallback, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Screen } from '../../components';
import { useTabLeistenFreiraum } from '../../components/tabLeiste';
import { getLanguage } from '../../data/languages';
import { TRAINING_MODES } from '../../data/trainingModes';
import { useAppState } from '../../state/AppState';
import { gedaechtnisVon, zaehleGedaechtnis, wackelndZuerst, type Gedaechtnis } from '../srs/gedaechtnis';
import { SEITE, s, usePalette, useStil, type Palette } from '../entwurf/entwurfStil';
import { GelerntKarte, stufenFarben } from './GelerntKarte';
import { useGelerntes, type GelerntArt, type Gelerntes } from './useGelerntes';

// Lektionen-Tab, neu (2026-09-27).
//
// Simons Auftrag: "Jetzt da wir im Grunde das meiste aus Lektionen jetzt auf
// S1 haben hätte ich gerne auf 'Lektionen' eine Übersicht mit allen bereits
// gelernten Sätzen und Worten - beides separiert - bei dem man auch sieht wie
// oft man beides schon gesehen hat und auf welcher Stufe man ist/wie oft
// richtig/falsch etc. Sätze und Wörter sollen jeweils auf einer einzelnen
// Karte stehen."
//
// **Der alte `LessonsScreen.tsx` bleibt unangetastet liegen** - dieselbe
// Begruendung wie bei `PathScreen.tsx`: solange der neue Aufbau nicht auf dem
// Geraet bestaetigt ist, soll das Zurueckdrehen eine Zeile in
// `app/(tabs)/lektionen.tsx` kosten und keinen Rueckbau. Was er an FUNKTION
// trug, ist umgezogen: die Kategorie-Reihen und die Satz-/Wortlisten stehen
// seit dem 2026-09-26 auf S1, die drei Trainingsarten stehen hier oben.
//
// **Die drei Trainings-Chips sind kein Zierrat.** `/training/woerter` ist ein
// echter, gebauter Screen (Zuordnungsspiel mit Wortart-Filter) und war allein
// ueber die Kaesten des alten Lektionen-Screens erreichbar. Ohne diese Zeile
// waere er mit dem Umbau lautlos unerreichbar geworden.
//
// **Warum FlatList und nicht ScrollView:** die Liste wird lang - im
// gefuehrten Kurs hat eine Sprache ueber 600 Wortformen. Der Kopf haengt als
// ELEMENT an `ListHeaderComponent`, nicht als Funktion: sonst baut React ihn
// bei jedem Tastendruck im Suchfeld neu auf, und das Feld verliert den Fokus.

type Sortierung = 'zuletzt' | 'wackelt' | 'oft' | 'alpha';

const SORTIER_NAME: Record<Sortierung, string> = {
  zuletzt: 'Zuletzt geübt',
  wackelt: 'Wackelt am meisten',
  oft: 'Am häufigsten geübt',
  alpha: 'Alphabetisch',
};

const STUFEN_REIHE: Gedaechtnis[] = ['sitzt', 'aufbau', 'wackelt'];

/**
 * Kurzform der Trainingsarten fuer die Chip-Zeile.
 *
 * Eigene Zuordnung statt `TRAINING_MODES[].title`: "Wörter-Wiederholung"
 * passt nicht in einen Chip, und am Titel herumzuschneiden bricht, sobald ihn
 * jemand umbenennt. Faellt eine Art weg oder kommt eine dazu, faellt das hier
 * sofort auf - der Chip haette dann keine Beschriftung.
 */
const MODUS_KURZ: Record<string, string> = {
  woerter: 'Wörter üben',
  saetze: 'Sätze üben',
  konversation: 'Konversation',
};

export function GelerntScreen() {
  const { darkMode, targetLanguageId } = useAppState();
  const E = usePalette();
  const stil = useStil(stilFabrik);
  const STUFEN_FARBE = stufenFarben(E);
  const freiraum = useTabLeistenFreiraum();
  const daten = useGelerntes(targetLanguageId);
  const sprache = getLanguage(targetLanguageId);

  const [art, setArt] = useState<GelerntArt>('satz');
  const [stufe, setStufe] = useState<Gedaechtnis | null>(null);
  const [sortierung, setSortierung] = useState<Sortierung>('zuletzt');
  const [sortWahl, setSortWahl] = useState(false);
  const [suche, setSuche] = useState('');
  const [offen, setOffen] = useState<string | null>(null);

  const alle = art === 'satz' ? daten.saetze : daten.woerter;
  const zahlen = useMemo(() => zaehleGedaechtnis(alle.map((x) => x.karte)), [alle]);

  const liste = useMemo(() => {
    const begriff = suche.trim().toLowerCase();
    const gefiltert = alle.filter(
      (x) =>
        (stufe === null || gedaechtnisVon(x.karte) === stufe) &&
        (begriff === '' || x.suchtext.includes(begriff))
    );
    const sortiert = [...gefiltert];
    if (sortierung === 'zuletzt') {
      sortiert.sort(
        (a, b) =>
          (b.karte.last_review?.getTime() ?? 0) - (a.karte.last_review?.getTime() ?? 0)
      );
    } else if (sortierung === 'wackelt') {
      // Dieselbe Reihenfolge wie "Wackelt gerade" auf der Statistikseite -
      // zwei Fassungen wuerden verschiedene Saetze nach oben stellen.
      sortiert.sort((a, b) => wackelndZuerst(a.karte, b.karte));
    } else if (sortierung === 'oft') {
      sortiert.sort((a, b) => b.karte.reps - a.karte.reps);
    } else {
      sortiert.sort((a, b) => a.lerntext.localeCompare(b.lerntext, 'de'));
    }
    return sortiert;
  }, [alle, stufe, suche, sortierung]);

  const einheit = art === 'satz' ? ['Satz', 'Sätze'] : ['Wort', 'Wörter'];
  const menge = (n: number) => `${n} ${n === 1 ? einheit[0] : einheit[1]}`;

  /**
   * Wohin "üben" fuehrt. Beim Filter "Wackelt" genau in die wackelnden Karten
   * - dieselben zwei Wege, die die Statistikseite schon benutzt. Ohne Filter
   * in die normale Wiederholung des jeweiligen Lernwegs.
   *
   * **Eine Unschaerfe, bewusst so gelassen:** unter "Sätze" stehen auch die
   * Satzmuster des Kurses, `/exercise` uebt aber nur Phrasebook-Saetze. Wer
   * also "Wackelt" filtert und dort ausschliesslich Kurs-Rahmen stehen hat,
   * landet in einer Sitzung ohne genau diese Karten. Ein Knopf, der sich in
   * zwei Ziele teilt, waere dafuer die teurere Loesung als der seltene Fall
   * wert ist - die Kurs-Rahmen erreicht man ueber `/wiederholen`.
   */
  const ueben = () => {
    if (stufe === 'wackelt') {
      if (art === 'satz') router.push({ pathname: '/exercise', params: { source: 'wackelt', mode: 'saetze' } });
      else router.push({ pathname: '/wiederholen', params: { auswahl: 'wackelt', modus: 'woerter' } });
      return;
    }
    if (art === 'satz') router.push('/training/saetze');
    else router.push({ pathname: '/wiederholen', params: { modus: 'woerter' } });
  };

  const umschalten = useCallback((key: string) => {
    setOffen((cur) => (cur === key ? null : key));
  }, []);

  const kopf = (
    <View style={stil.kopf}>
      <Text style={stil.titel}>Gelernt</Text>
      <Text style={stil.unterTitel}>
        {sprache.flagge} {sprache.label} — {daten.saetze.length === 1 ? '1 Satz' : `${daten.saetze.length} Sätze`},{' '}
        {daten.woerter.length === 1 ? '1 Wort' : `${daten.woerter.length} Wörter`}
        {daten.offline ? ' · 📴 letzter Stand' : ''}
      </Text>

      <View style={stil.modusReihe}>
        {TRAINING_MODES.map((m) => (
          <Pressable
            key={m.id}
            onPress={() => router.push(`/training/${m.id}`)}
            accessibilityRole="button"
            accessibilityLabel={`${m.title}. ${m.description}`}
            style={({ pressed }) => [stil.modusChip, pressed && stil.gedrueckt]}
          >
            <Text style={stil.modusText} numberOfLines={1}>
              {MODUS_KURZ[m.id] ?? m.title}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={stil.umschalter}>
        <Umschalt
          label="Sätze"
          anzahl={daten.saetze.length}
          aktiv={art === 'satz'}
          onPress={() => {
            setArt('satz');
            setOffen(null);
          }}
        />
        <Umschalt
          label="Wörter"
          anzahl={daten.woerter.length}
          aktiv={art === 'wort'}
          onPress={() => {
            setArt('wort');
            setOffen(null);
          }}
        />
      </View>

      {alle.length > 0 ? (
        <View style={stil.bilanz}>
          <View style={stil.split} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            {STUFEN_REIHE.filter((g) => zahlen[g] > 0).map((g) => (
              <View key={g} style={{ flex: zahlen[g], backgroundColor: STUFEN_FARBE[g].farbe }} />
            ))}
          </View>
          <View style={stil.stufenReihe}>
            {STUFEN_REIHE.map((g) => {
              const an = stufe === g;
              return (
                <Pressable
                  key={g}
                  onPress={() => setStufe(an ? null : g)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: an }}
                  accessibilityLabel={`${STUFEN_FARBE[g].label}: ${menge(zahlen[g])}${an ? ', Filter aus' : ', nur diese zeigen'}`}
                  style={({ pressed }) => [
                    stil.stufenChip,
                    an && { backgroundColor: STUFEN_FARBE[g].flaeche, borderColor: STUFEN_FARBE[g].text },
                    pressed && stil.gedrueckt,
                  ]}
                >
                  <View style={[stil.punkt, { backgroundColor: STUFEN_FARBE[g].farbe }]} />
                  <Text style={[stil.stufenChipText, an && { color: STUFEN_FARBE[g].text }]}>
                    {STUFEN_FARBE[g].label}
                  </Text>
                  <Text style={[stil.stufenChipZahl, an && { color: STUFEN_FARBE[g].text }]}>{zahlen[g]}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      ) : null}

      {alle.length > 0 ? (
        <View style={stil.werkzeuge}>
          <View style={stil.suchfeld}>
            <Feather name="search" size={15} color={E.grau} />
            <TextInput
              value={suche}
              onChangeText={setSuche}
              placeholder={art === 'satz' ? 'Satz oder Bedeutung suchen' : 'Wort oder Bedeutung suchen'}
              placeholderTextColor={E.grau}
              style={stil.sucheingabe}
              autoCorrect={false}
              accessibilityLabel="Suchen"
              returnKeyType="search"
            />
            {suche.length > 0 ? (
              <Pressable onPress={() => setSuche('')} hitSlop={10} accessibilityLabel="Suche leeren">
                <Feather name="x" size={15} color={E.grau} />
              </Pressable>
            ) : null}
          </View>
          <Pressable
            onPress={() => setSortWahl(true)}
            accessibilityRole="button"
            accessibilityLabel={`Sortierung: ${SORTIER_NAME[sortierung]}. Ändern`}
            style={({ pressed }) => [stil.sortKnopf, pressed && stil.gedrueckt]}
          >
            <Feather name="sliders" size={15} color={E.blau} />
          </Pressable>
        </View>
      ) : null}

      {liste.length > 0 ? (
        <View style={stil.listenKopf}>
          <Text style={stil.listenZahl}>
            {menge(liste.length)}
            {stufe ? ` · ${STUFEN_FARBE[stufe].label}` : ''}
          </Text>
          <Pressable
            onPress={ueben}
            accessibilityRole="button"
            accessibilityLabel={stufe === 'wackelt' ? 'Wackelnde üben' : 'Wiederholen'}
            style={({ pressed }) => [stil.uebeKnopf, pressed && stil.gedrueckt]}
          >
            <Text style={stil.uebeText}>{stufe === 'wackelt' ? 'Wackelnde üben' : 'Wiederholen'}</Text>
            <Feather name="chevron-right" size={14} color={E.blau} />
          </Pressable>
        </View>
      ) : null}
    </View>
  );

  return (
    <Screen dark={darkMode} padHorizontal={false}>
      {daten.loading ? (
        <View style={stil.laedt}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={liste}
          keyExtractor={(x) => x.key}
          ListHeaderComponent={kopf}
          renderItem={({ item }: { item: Gelerntes }) => (
            <View style={stil.kartenPlatz}>
              <GelerntKarte
                eintrag={item}
                languageId={targetLanguageId}
                offen={offen === item.key}
                onToggle={() => umschalten(item.key)}
              />
            </View>
          )}
          ListEmptyComponent={
            <Leer
              art={art}
              hatKarten={alle.length > 0}
              onZuruecksetzen={() => {
                setStufe(null);
                setSuche('');
              }}
            />
          }
          contentContainerStyle={{ paddingBottom: freiraum }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        />
      )}

      <SortierWahl
        offen={sortWahl}
        gewaehlt={sortierung}
        onWahl={(w) => {
          setSortierung(w);
          setSortWahl(false);
        }}
        onSchliessen={() => setSortWahl(false)}
      />
    </Screen>
  );
}

function Umschalt({
  label,
  anzahl,
  aktiv,
  onPress,
}: {
  label: string;
  anzahl: number;
  aktiv: boolean;
  onPress: () => void;
}) {
  const stil = useStil(stilFabrik);
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="tab"
      accessibilityState={{ selected: aktiv }}
      accessibilityLabel={`${label}, ${anzahl}`}
      style={({ pressed }) => [stil.umschaltTeil, aktiv && stil.umschaltAktiv, pressed && stil.gedrueckt]}
    >
      <Text style={[stil.umschaltText, aktiv && stil.umschaltTextAktiv]}>{label}</Text>
      <View style={[stil.umschaltZahl, aktiv && stil.umschaltZahlAktiv]}>
        <Text style={[stil.umschaltZahlText, aktiv && stil.umschaltZahlTextAktiv]}>{anzahl}</Text>
      </View>
    </Pressable>
  );
}

function Leer({
  art,
  hatKarten,
  onZuruecksetzen,
}: {
  art: GelerntArt;
  hatKarten: boolean;
  onZuruecksetzen: () => void;
}) {
  const stil = useStil(stilFabrik);
  if (hatKarten) {
    return (
      <View style={stil.leer}>
        <Text style={stil.leerTitel}>Kein Treffer</Text>
        <Text style={stil.leerText}>Mit diesem Filter ist hier nichts.</Text>
        <Pressable
          onPress={onZuruecksetzen}
          accessibilityRole="button"
          style={({ pressed }) => [stil.leerKnopf, pressed && stil.gedrueckt]}
        >
          <Text style={stil.leerKnopfText}>Filter zurücksetzen</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={stil.leer}>
      <Text style={stil.leerTitel}>{art === 'satz' ? 'Noch kein Satz geübt' : 'Noch kein Wort geübt'}</Text>
      <Text style={stil.leerText}>
        {art === 'satz'
          ? 'Sobald du auf Start eine Situation übst, steht hier jeder Satz mit seinem Stand.'
          : 'Wörter kommen aus dem geführten Lernen — jedes Wort, das du dort abrufst, steht danach hier.'}
      </Text>
      <Pressable
        onPress={() => router.push('/')}
        accessibilityRole="button"
        style={({ pressed }) => [stil.leerKnopf, pressed && stil.gedrueckt]}
      >
        <Text style={stil.leerKnopfText}>Zu Start</Text>
      </Pressable>
    </View>
  );
}

/** Blatt von unten - dasselbe Muster wie die Listen-Auswahl auf S1. */
function SortierWahl({
  offen,
  gewaehlt,
  onWahl,
  onSchliessen,
}: {
  offen: boolean;
  gewaehlt: Sortierung;
  onWahl: (w: Sortierung) => void;
  onSchliessen: () => void;
}) {
  const insets = useSafeAreaInsets();
  const E = usePalette();
  const stil = useStil(stilFabrik);
  return (
    <Modal visible={offen} transparent animationType="slide" onRequestClose={onSchliessen}>
      <Pressable style={stil.schleier} onPress={onSchliessen} accessibilityLabel="Schließen" />
      <View style={[stil.blatt, { paddingBottom: Math.max(insets.bottom, SEITE) }]}>
        <View style={stil.griff} />
        <Text style={stil.blattTitel}>Sortieren</Text>
        {(Object.keys(SORTIER_NAME) as Sortierung[]).map((w) => (
          <Pressable
            key={w}
            onPress={() => onWahl(w)}
            accessibilityRole="button"
            accessibilityState={{ selected: gewaehlt === w }}
            style={({ pressed }) => [stil.blattZeile, pressed && stil.gedrueckt]}
          >
            <Text style={[stil.blattLabel, gewaehlt === w && { color: E.blau }]}>{SORTIER_NAME[w]}</Text>
            {gewaehlt === w ? <Feather name="check" size={18} color={E.blau} /> : null}
          </Pressable>
        ))}
      </View>
    </Modal>
  );
}

const stilFabrik = (E: Palette) =>
  StyleSheet.create({
  gedrueckt: { opacity: 0.6 },
  laedt: { paddingTop: 48, alignItems: 'center' },

  kopf: { paddingHorizontal: SEITE, paddingTop: 4, gap: 14 },
  titel: { ...s('800'), fontSize: 26, color: E.text },
  unterTitel: { ...s('500'), fontSize: 13, color: E.neben, marginTop: -10 },

  modusReihe: { flexDirection: 'row', gap: 8 },
  // Drei gleich breite Chips statt drei nach Textlaenge: nebeneinander
  // passten sie auf 375 Punkten sonst nicht, und "Konversation" fiel rechts
  // aus dem Bild. Ein Symbol davor haben sie aus demselben Grund nicht.
  modusChip: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: E.linie,
  },
  modusText: { ...s('700'), fontSize: 11.5, color: E.blau },

  umschalter: {
    flexDirection: 'row',
    backgroundColor: E.grauHell,
    borderRadius: 12,
    padding: 3,
    gap: 3,
  },
  umschaltTeil: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 9,
    borderRadius: 10,
  },
  umschaltAktiv: { backgroundColor: E.grund },
  umschaltText: { ...s('700'), fontSize: 14, color: E.neben },
  umschaltTextAktiv: { color: E.text },
  umschaltZahl: { borderRadius: 100, paddingHorizontal: 7, paddingVertical: 1, backgroundColor: E.linie },
  umschaltZahlAktiv: { backgroundColor: E.blau },
  umschaltZahlText: { ...s('800'), fontSize: 11, color: E.neben },
  umschaltZahlTextAktiv: { color: '#FFFFFF' },

  bilanz: { gap: 9 },
  split: { flexDirection: 'row', height: 7, borderRadius: 4, overflow: 'hidden', backgroundColor: E.grauHell },
  stufenReihe: { flexDirection: 'row', gap: 7 },
  stufenChip: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: E.linie,
  },
  punkt: { width: 7, height: 7, borderRadius: 4 },
  stufenChipText: { ...s('700'), fontSize: 11, color: E.neben, flexShrink: 1 },
  stufenChipZahl: { ...s('800'), fontSize: 11, color: E.text, marginLeft: 'auto' },

  werkzeuge: { flexDirection: 'row', gap: 8 },
  suchfeld: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: E.linie,
    borderRadius: 10,
    paddingHorizontal: 11,
    height: 40,
  },
  // `padding: 0` und feste Hoehe: Android gibt einem TextInput von sich aus
  // Innenabstand und macht die Zeile sonst hoeher als das Feld.
  sucheingabe: { flex: 1, ...s('500'), fontSize: 13, color: E.text, padding: 0, height: 40 },
  sortKnopf: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: E.linie,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listenKopf: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  listenZahl: { ...s('700'), fontSize: 12, color: E.neben },
  uebeKnopf: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  uebeText: { ...s('800'), fontSize: 13, color: E.blau },

  kartenPlatz: { paddingHorizontal: SEITE, paddingTop: 10 },

  leer: { paddingHorizontal: SEITE, paddingTop: 28, gap: 8, alignItems: 'flex-start' },
  leerTitel: { ...s('800'), fontSize: 17, color: E.text },
  leerText: { ...s('500'), fontSize: 13, color: E.neben, lineHeight: 19 },
  leerKnopf: {
    marginTop: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: E.blauHell,
  },
  leerKnopfText: { ...s('700'), fontSize: 13, color: E.blau },

  schleier: { flex: 1, backgroundColor: 'rgba(15,23,42,0.35)' },
  blatt: {
    backgroundColor: E.grund,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: SEITE,
    paddingTop: 10,
  },
  griff: { alignSelf: 'center', width: 38, height: 4, borderRadius: 2, backgroundColor: E.linie, marginBottom: 8 },
  blattTitel: { ...s('800'), fontSize: 18, color: E.text, paddingBottom: 6 },
  blattZeile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 13,
    borderTopWidth: 1,
    borderTopColor: E.linie,
  },
  blattLabel: { ...s('700'), fontSize: 15, color: E.text },
});
