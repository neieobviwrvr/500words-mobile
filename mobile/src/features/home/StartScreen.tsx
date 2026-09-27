import { useCallback, useMemo, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '../../components';
import { useTabLeistenFreiraum } from '../../components/tabLeiste';
import { CATEGORIES, GRUNDWORTSCHATZ_ID, GRUNDWORTSCHATZ_NAME } from '../../data/categories';
import { leihName } from '../../data/geliehen';
import { scenarioLabel } from '../../data/scenarios';
import { situationsVergleich } from '../../data/situationsReihenfolge';
import { useAppState } from '../../state/AppState';
import { getTheme } from '../../theme/tokens';
import { useCategorySituations } from '../lessons/useCategorySituations';
import { BildKarte, KARTE_HOEHE, KARTE_SEITE, useUmdrehen } from './Drehkarten';
import { fortschrittsAnteil, LernKopf } from './LernKopf';
import { SPRACH_FIGUREN, Sprachfigur, Sprechblasen } from './Sprachfigur';
import { standortAus } from './Standort';
import { useGuidedCourse } from './useGuidedCourse';
import { useGuidedProgress } from './useGuidedProgress';
import { useUnlockedProgress } from './useUnlockedProgress';
import { EntwurfAbschnitt, type AbschnittsEintrag } from '../entwurf/EntwurfAbschnitt';

// ---------------------------------------------------------------------------
// S1 im neuen Aufbau (2026-09-26)
// ---------------------------------------------------------------------------
//
// Simons Vorgabe: "wir bauen S1 um wie es auf unserem Testscreen ist -
// ALLERDINGS brauchen wir unsere drehende Karte mit dem Maskottchen ... über
// den Überschriften".
//
// Also: die Abschnittsliste aus dem Entwurf, und darueber die Karte, die es
// auf S1 schon gab. Weg sind damit der Zickzack-Pfad in der Pfad-Box und die
// zweite (untere) Karte - der Pfad IST jetzt die Liste.
//
// **`PathScreen.tsx` bleibt unangetastet liegen.** Der alte Startscreen ist
// 1.400 Zeilen; ihn umzubauen hiesse, den Rueckweg zu verlieren. So kostet
// das Zurueckdrehen eine Zeile in `app/(tabs)/index.tsx`. Wenn der neue
// Aufbau steht, faellt die alte Datei weg - vorher nicht.
//
// **Die Bausteine der Liste liegen noch unter `features/entwurf/`.** Das ist
// jetzt falsch benannt, weil sie kein Entwurf mehr sind, sondern S1 tragen.
// Bewusst noch nicht verschoben: solange beide Screens nebeneinander stehen,
// waere ein Umzug nur zusaetzliche Bewegung. Gehoert nachgeholt, sobald
// PathScreen wegfaellt.
//
// **Was die Vorlage nicht zeigt und ich trotzdem behalten habe**, weil es
// Funktion traegt und nicht Zierde ist: den Kopf mit Standortzeile, Flagge
// und Prozentzahl. Die Flagge ist die einzige Sprachauswahl auf S1, die Zahl
// der einzige Weg in die Statistik. Wer den Kopf wegnimmt, nimmt beides mit.

export function StartScreen() {
  const { darkMode, targetLanguageId, purchased, learningMode, toggleLearningMode } = useAppState();
  const theme = getTheme(darkMode);
  const { width: fensterBreite, height: fensterHoehe } = useWindowDimensions();
  const freiraum = useTabLeistenFreiraum();

  const kartenBreite = fensterBreite - 2 * KARTE_SEITE;
  /**
   * Hoeher als `KARTE_HOEHE` (0,24) - 0,26 am 2026-09-27 fuer mehr Luft um
   * die Figur, kurz darauf 0,29 ("Figur bleibt so gross und Karte wird
   * einen Tick groesser").
   *
   * Die zusaetzliche Hoehe landet vollstaendig im Weissraum, nicht in der
   * Figur: `Sprachfigur` rechnet mit Blasen von aussen nach innen, siehe
   * dort. Eine groessere Karte heisst hier also wirklich mehr Luft.
   *
   * Lokal und NICHT an `KARTE_HOEHE` gedreht: die Konstante traegt auch den
   * alten Startscreen, und der soll als Rueckweg unveraendert bleiben.
   */
  const kartenHoehe = Math.round(fensterHoehe * 0.29);

  const situations = useCategorySituations(targetLanguageId);
  const kurs = useGuidedCourse(targetLanguageId);
  const kursStand = useGuidedProgress(targetLanguageId);

  const freigeschaltet = useMemo(
    () => [GRUNDWORTSCHATZ_ID, ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id)],
    [purchased]
  );
  const progress = useUnlockedProgress(targetLanguageId, freigeschaltet);
  const anteil = fortschrittsAnteil(learningMode, kursStand, progress.ratio);

  const standort = useMemo(
    () =>
      standortAus({
        learningMode,
        lektionen: kurs.lessons,
        aktuellesModul: kursStand.aktuellesModul,
        aktuelleLektion: kursStand.aktuelleLektion,
        recentCategoryIds: situations.recentCategoryIds,
        recentSituations: situations.recentSituations,
      }),
    [
      learningMode,
      kurs.lessons,
      kursStand.aktuellesModul,
      kursStand.aktuelleLektion,
      situations.recentCategoryIds,
      situations.recentSituations,
    ]
  );

  // Das Umdrehen der Karte IST der Wechsel des Lernwegs - wie bisher. Neu ist
  // nur, dass es dafuer noch EINE Karte gibt statt zwei: die untere trug den
  // Pfad, und den traegt jetzt die Liste.
  //
  // Der Wechsel kommt am ENDE der Drehung und wird VERGLICHEN statt blind
  // umgeschaltet: bei zweimal schnell hintereinander bricht die erste
  // Drehung ab, ihr Rueckruf laeuft dann gar nicht, und Karte und Lernweg
  // liefen auseinander.
  const lernwegRef = useRef(learningMode);
  lernwegRef.current = learningMode;
  const seiteGelandet = useCallback(
    (seite: 1 | 2) => {
      const soll = seite === 2 ? 'gefuehrt' : 'speedrun';
      if (lernwegRef.current !== soll) toggleLearningMode();
    },
    [toggleLearningMode]
  );
  const karte = useUmdrehen({ start: learningMode === 'gefuehrt' ? 2 : 1, beiEnde: seiteGelandet });

  const figur = SPRACH_FIGUREN[targetLanguageId];

  // Reihenfolge wie im alten Pfad: Grundwortschatz, dann Gekauftes, dann
  // Gesperrtes. Gesperrte kommen MIT - der Katalog soll bewerben, nicht
  // verstecken.
  const abschnitte = useMemo(() => {
    const reihen = [
      { id: GRUNDWORTSCHATZ_ID, name: GRUNDWORTSCHATZ_NAME, gesperrt: false },
      ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => ({ id: c.id, name: c.name, gesperrt: false })),
      ...CATEGORIES.filter((c) => !purchased[c.id]).map((c) => ({ id: c.id, name: c.name, gesperrt: true })),
    ];
    return reihen.map((reihe) => ({
      ...reihe,
      eintraege: [...(situations.byCategory[reihe.id] ?? [])]
        .sort(situationsVergleich(reihe.id))
        .map<AbschnittsEintrag>((sit) => ({
          scenario: sit.scenario,
          label: leihName(reihe.id, sit.scenario) ?? scenarioLabel(sit.scenario),
          durchgaenge: sit.durchgaenge,
          gesperrt: reihe.gesperrt,
          saetze: sit.total,
        })),
    }));
  }, [purchased, situations.byCategory]);

  const oeffneEintrag = (categoryId: string) => (eintrag: AbschnittsEintrag) => {
    if (eintrag.gesperrt) {
      router.push('/shop');
      return;
    }
    router.push({ pathname: '/training/saetze', params: { categoryId, scenario: eintrag.scenario } });
  };

  return (
    <Screen dark={darkMode} padHorizontal={false}>
      <View style={styles.kopf}>
        <LernKopf dark={darkMode} standort={standort} anteil={anteil} nurModus />
      </View>

      <ScrollView
        contentContainerStyle={[styles.inhalt, { paddingBottom: freiraum }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Die Karte scrollt MIT, statt oben festzustehen (Simons Vorlage:
            sie steht ueber der ersten Ueberschrift, nicht darueber
            festgepinnt). Sonst bliebe fuer die Liste auf einem kleinen
            Geraet kaum Hoehe uebrig. */}
        <View style={styles.kartenReihe}>
          <BildKarte
            breite={kartenBreite}
            hoehe={kartenHoehe}
            dreh={karte.dreh}
            seite={karte.seite}
            umdrehen={karte.umdrehen}
            name="Sprachkarte"
            // Ohne Flaeche steht die Figur frei auf der Seite (Simons Wunsch
            // vom 2026-09-26). Gibt es keine Zeichnung, bekommt die Karte
            // ihre Flaeche zurueck - sonst waere an dieser Stelle gar nichts
            // mehr, und der Nutzer sieht einen leeren Bereich statt einer
            // Karte, die noch kein Bild hat. Betrifft Spanisch, Polnisch und
            // Vietnamesisch, siehe SPRACH_FIGUREN.
            ohneFlaeche={Boolean(figur)}
            figur={
              figur ? (
                <Sprachfigur
                  quelle={figur.ruhe}
                  blinzeln={figur.blinzeln}
                  kartenHoehe={kartenHoehe}
                  mitBlasen={Boolean(figur.sagtOben || figur.sagtUnten)}
                />
              ) : undefined
            }
            // Die Ebene heisst `knopf`, traegt hier aber nur noch die
            // Sprechblasen: das Geschenk ist am 2026-09-27 von der Karte
            // geflogen (Simon). Erreichbar bleibt es ueber das
            // Drei-Punkte-Menue auf Survival und Profil.
            knopf={
              <>
                <Sprechblasen
                  oben={figur?.sagtOben}
                  unten={figur?.sagtUnten}
                  // Oben der Konversationsmodus - den gibt es noch nicht, der
                  // Platzhalter-Screen sagt das beim Oeffnen selbst.
                  onOben={() => router.push('/training/konversation')}
                  // Unten dasselbe Ziel wie "Tageslektion": die faellige
                  // Wiederholung des AKTUELLEN Lernwegs. Ueber den
                  // Lernweg, nicht ueber die Sprache - sonst landet man im
                  // falschen Stoff, sobald beide Wege Inhalt haben.
                  onUnten={() =>
                    router.push(learningMode === 'gefuehrt' ? '/wiederholen' : '/training/saetze')
                  }
                />
              </>
            }
          />
        </View>

        {situations.loading ? (
          <Text style={[styles.laedt, { color: theme.sub }]}>Lädt …</Text>
        ) : (
          abschnitte.map((abschnitt) => (
            <EntwurfAbschnitt
              key={abschnitt.id}
              titel={abschnitt.name}
              eintraege={abschnitt.eintraege}
              onEintrag={oeffneEintrag(abschnitt.id)}
              gesperrt={abschnitt.gesperrt}
              // Auch gesperrte Kategorien bekommen ihr Finale - grau mit
              // Schloss, und es fuehrt in den Shop statt in die Uebung.
              onFinale={() =>
                abschnitt.gesperrt
                  ? router.push('/shop')
                  : router.push({
                      pathname: '/training/saetze',
                      params: { categoryId: abschnitt.id },
                    })
              }
              onListen={() => router.push('/cheatsheet/' + abschnitt.id)}
            />
          ))
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  kopf: { paddingHorizontal: 16 },
  inhalt: { paddingBottom: 24 },
  // Mehr Luft zum Balken darueber (2026-09-27, Simons Wunsch). Die obere
  // Sprechblase sitzt nochmal 2 Punkte tiefer in der Karte.
  kartenReihe: { alignItems: 'center', paddingTop: 26 },
  laedt: { padding: 20, fontSize: 14 },
});
