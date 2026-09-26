import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CATEGORIES, GRUNDWORTSCHATZ_ID, GRUNDWORTSCHATZ_NAME } from '../../data/categories';
import { leihName } from '../../data/geliehen';
import { scenarioLabel } from '../../data/scenarios';
import { situationsVergleich } from '../../data/situationsReihenfolge';
import { useAppState } from '../../state/AppState';
import { ladeTagebuch, tagSchluessel } from '../srs/lerntagebuch';
import { useCategorySituations } from '../lessons/useCategorySituations';
import { useUnlockedProgress } from '../home/useUnlockedProgress';
import { EntwurfAbschnitt, type AbschnittsEintrag } from './EntwurfAbschnitt';
import { EntwurfLeiste, FussKnoepfe } from './EntwurfFuss';
import { EntwurfListenWahl } from './EntwurfListenWahl';
import { ListenKnoepfe, Niveaublock, StatusReihe } from './EntwurfKopf';
import { E, SEITE, s } from './entwurfStil';

// ---------------------------------------------------------------------------
// Der Start-Entwurf (2026-09-26, nach Simons Vorlage)
// ---------------------------------------------------------------------------
//
// Ein ANDERER Aufbau von S1, nicht derselbe Screen in anderer Farbe: keine
// Zickzack-Karte, keine drehbaren Bildkarten, kein Lernweg-Wechsler.
// Stattdessen Niveau und Balken oben, darunter je Kategorie ein Abschnitt
// mit einer senkrechten Kette aus Situationen, seitenweise blaetterbar.
//
// **Er laeuft auf ECHTEN Daten**, und das ist der Punkt der ganzen Uebung:
// die Substanz der App steckt in den Hooks, nicht in der Anordnung. Dieser
// Screen ruft dieselben zwei, die der echte Startscreen ruft
// (`useCategorySituations`, `useUnlockedProgress`), und ordnet ihr Ergebnis
// nur anders an. Nichts davon ist nachgebaut oder erfunden.
//
// **Was NICHT echt ist, sagt es selbst:** Streak und Mitteilungen zeigen "-"
// und erklaeren beim Antippen, dass es sie noch nicht gibt. Lieber eine
// ehrliche Luecke als eine erfundene Zahl, die spaeter jemand fuer bare
// Muenze nimmt - dieselbe Regel wie beim Cheat-Sheet ("zeigt ehrlich
// (Platzhalter) statt Fake-Content").
//
// **Nur hell**, siehe entwurfStil.ts.
//
// **!!! VOR DEM LAUNCH !!!** Entweder wird daraus der echte Startscreen -
// dann ersetzt er `features/home/PathScreen.tsx` - oder der ganze Ordner
// `features/entwurf/` fliegt samt Knopf auf S1 und der Route wieder raus.

/** Angenommenes Tagesziel fuer den Stern oben. Eine Einstellung dafuer gibt es noch nicht. */
const TAGESZIEL = 20;

export function EntwurfScreen() {
  const { targetLanguageId, setTargetLanguageId, purchased, learningMode } = useAppState();
  const insets = useSafeAreaInsets();

  const [hinweis, setHinweis] = useState<string | null>(null);
  // Welche Kategorie ihre Listen-Auswahl offen hat. Der Name allein reicht
  // nicht - fuer die Ziele braucht es die ID, und angezeigt wird der Name.
  const [listen, setListen] = useState<{ id: string; name: string } | null>(null);

  const situations = useCategorySituations(targetLanguageId);

  const freigeschaltet = useMemo(
    () => [GRUNDWORTSCHATZ_ID, ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id)],
    [purchased]
  );
  const progress = useUnlockedProgress(targetLanguageId, freigeschaltet);

  // Heute beantwortete Karten - aus dem Lern-Tagebuch, also genau das, was
  // die Uebungen ohnehin mitschreiben. Ueber ALLE Lernwege der aktuellen
  // Sprache zusammen: fuer den Nutzer ist es ein Tag, kein Weg.
  const [heute, setHeute] = useState(0);
  useFocusEffect(
    useCallback(() => {
      let weg = false;
      ladeTagebuch()
        .then((buch) => {
          if (weg) return;
          const tag = buch[tagSchluessel()] ?? {};
          const summe = Object.entries(tag)
            .filter(([schluessel]) => schluessel.startsWith(targetLanguageId + ':'))
            .reduce((n, [, z]) => n + z.richtig + z.ueberlebt + z.nichtVerstanden, 0);
          setHeute(summe);
        })
        .catch(() => undefined);
      return () => {
        weg = true;
      };
    }, [targetLanguageId])
  );

  // Reihenfolge wie im echten Pfad: Grundwortschatz, dann Gekauftes, dann
  // Gesperrtes. Gesperrte kommen MIT - der Katalog soll bewerben, nicht
  // verstecken (CLAUDE.md, "Konto noetig, Demo fuer Gaeste").
  const abschnitte = useMemo(() => {
    const reihen = [
      { id: GRUNDWORTSCHATZ_ID, name: GRUNDWORTSCHATZ_NAME, gesperrt: false },
      ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => ({ id: c.id, name: c.name, gesperrt: false })),
      ...CATEGORIES.filter((c) => !purchased[c.id]).map((c) => ({ id: c.id, name: c.name, gesperrt: true })),
    ];

    return reihen.map((reihe) => {
      const roh = [...(situations.byCategory[reihe.id] ?? [])].sort(situationsVergleich(reihe.id));
      const eintraege: AbschnittsEintrag[] = roh.map((sit) => ({
        scenario: sit.scenario,
        // Geliehene Situationen heissen je Kategorie anders (LEIH_NAMEN) -
        // sonst beginnt jede Kategorie mit derselben Karte.
        label: leihName(reihe.id, sit.scenario) ?? scenarioLabel(sit.scenario),
        // Ungekappt weiterreichen - wie viele Stufen daraus werden,
        // entscheidet `STUFEN` im Abschnitt, nicht der Datenweg.
        durchgaenge: sit.durchgaenge,
        gesperrt: reihe.gesperrt,
        saetze: sit.total,
      }));
      return { ...reihe, eintraege };
    });
  }, [purchased, situations.byCategory]);

  const oeffneSatzliste = (categoryId: string) => router.push('/cheatsheet/' + categoryId);
  const oeffneWortliste = (categoryId: string) =>
    router.push({ pathname: '/wortliste', params: { categoryId } });

  /**
   * Blatt schliessen, DANN navigieren - und zwar in zwei Schritten.
   *
   * Beides im selben Aufruf geht schief, im Browser nachgestellt: React
   * Navigation friert den verlassenen Screen ein, sobald er den Fokus
   * verliert. Das `setListen(null)` wird dort nie mehr gezeichnet, und das
   * Blatt bleibt ueber der Satzliste stehen. Der aufgeschobene Aufruf laesst
   * React das Schliessen zuerst zeichnen, waehrend der Screen noch vorn ist.
   */
  const mitBlattZu = (ziel: (categoryId: string) => void) => {
    const id = listen?.id;
    setListen(null);
    if (id) setTimeout(() => ziel(id), 0);
  };

  const oeffneEintrag = (categoryId: string) => (eintrag: AbschnittsEintrag) => {
    if (eintrag.gesperrt) {
      router.push('/shop');
      return;
    }
    // Dasselbe Ziel wie im echten Pfad: die verbindlichen Layout-Vorlagen
    // der drei Satzstufen, gefiltert auf genau diese Situation.
    router.push({ pathname: '/training/saetze', params: { categoryId, scenario: eintrag.scenario } });
  };

  return (
    <View style={[styles.seite, { paddingTop: insets.top + 6 }]}>
      <StatusReihe
        sprachId={targetLanguageId}
        onSprache={setTargetLanguageId}
        heute={heute}
        tagesziel={TAGESZIEL}
        onHinweis={setHinweis}
      />

      {/* Fest "Anfänger A1": der Speed-Run hat kein Niveau je Kategorie, das
          steht nur an den Kurs-Modulen (`niveau` in useGuidedCourse). Das
          hier daran zu haengen hiesse, den ganzen Kursfortschritt zu laden -
          fuer ein Wort. Sobald der Entwurf bleibt, gehoert es dorthin. */}
      <Niveaublock
        titel="Anfänger A1"
        anteil={progress.ratio}
        onPress={() => router.push({ pathname: '/statistik', params: { weg: 'speedrun', von: 'start' } })}
      />

      <ListenKnoepfe
        onSatzliste={() => oeffneSatzliste(GRUNDWORTSCHATZ_ID)}
        onWortliste={() => oeffneWortliste(GRUNDWORTSCHATZ_ID)}
      />

      <ScrollView
        style={styles.liste}
        contentContainerStyle={styles.listeInhalt}
        showsVerticalScrollIndicator={false}
      >
        {situations.loading ? (
          <Text style={styles.laedt}>Lädt …</Text>
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
              onListen={() => setListen({ id: abschnitt.id, name: abschnitt.name })}
            />
          ))
        )}
      </ScrollView>

      <FussKnoepfe
        onGespraeche={() => setHinweis('Den Konversationsmodus gibt es noch nicht.')}
        onWiederholung={() =>
          router.push(learningMode === 'gefuehrt' ? '/wiederholen' : '/training/saetze')
        }
      />

      <EntwurfLeiste
        unten={insets.bottom}
        onPlus={() => setHinweis('Was hinter dem Plus liegt, ist noch offen.')}
        links={[
          { icon: 'globe', label: 'Start', onPress: () => undefined, aktiv: true },
          { icon: 'shield', label: 'Survival', onPress: () => router.push('/survival') },
        ]}
        rechts={[
          { icon: 'users', label: 'Freunde', onPress: () => router.push('/freunde') },
          { icon: 'user', label: 'Profil', onPress: () => router.push('/profil') },
        ]}
      />

      <EntwurfListenWahl
        kategorie={listen?.name ?? null}
        onSatzliste={() => mitBlattZu(oeffneSatzliste)}
        onWortliste={() => mitBlattZu(oeffneWortliste)}
        onSchliessen={() => setListen(null)}
      />

      <Hinweis text={hinweis} onWeg={() => setHinweis(null)} />
    </View>
  );
}

/**
 * Kurze Meldung ueber dem Inhalt - dieselbe Rolle wie `Notice` in
 * PathScreen.tsx, hier noch einmal, damit der Entwurf keine Datei des
 * Bestands anfassen muss. Beim Wegwerfen bleibt dadurch nichts zurueck.
 */
function Hinweis({ text, onWeg }: { text: string | null; onWeg: () => void }) {
  if (!text) return null;
  return (
    <Pressable style={styles.hinweis} onPress={onWeg} accessibilityRole="button">
      <Text style={styles.hinweisText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  seite: { flex: 1, backgroundColor: E.grund },
  liste: { flex: 1 },
  listeInhalt: { paddingBottom: 20 },
  laedt: { ...s('500'), fontSize: 14, color: E.neben, padding: SEITE },

  hinweis: {
    position: 'absolute',
    left: SEITE,
    right: SEITE,
    bottom: 128,
    backgroundColor: E.text,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  hinweisText: { ...s('600'), fontSize: 13, color: '#FFFFFF' },
});
