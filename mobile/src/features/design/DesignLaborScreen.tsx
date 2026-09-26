import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { getTheme } from '../../theme/tokens';
import { DESIGNS, DESIGN_REIHENFOLGE, type DesignId } from '../../theme/designs';
import { useDesign } from '../../theme/useDesign';
import {
  AuswahlZeile,
  DetailKopf,
  Gruppe,
  Zeile,
  gruppenGrund,
  type AuswahlOption,
} from '../profile/ListenBausteine';

// Design-Labor (2026-09-23, Simons Auftrag "ein paar weitere Designs testen,
// wie so ein A/B-Test etwa").
//
// **Kein Nutzer darf das je sehen.** Vor dem Launch fliegt die Zeile im
// Profil raus oder haengt hinter einer Kontopruefung - der Merkposten steht
// dort, wo die Zeile eingebaut ist (ProfileScreen.tsx), damit ihn niemand
// hier suchen muss.
//
// Der Screen zeigt bewusst eine Kostprobe: umschalten und dann erst durch
// die App laufen heisst, den Unterschied aus der Erinnerung zu vergleichen.
// Die Kostprobe steht direkt unter der Auswahl und wechselt sofort mit.

export function DesignLaborScreen() {
  const { darkMode, designId, waehleDesign } = useAppState();
  const theme = getTheme(darkMode);
  const design = useDesign();

  const optionen: AuswahlOption<DesignId>[] = DESIGN_REIHENFOLGE.map((id) => ({
    id,
    label: DESIGNS[id].name,
  }));

  return (
    <View style={[styles.seite, { backgroundColor: gruppenGrund(darkMode) }]}>
      <DetailKopf titel="Design-Labor" dark={darkMode} fallback="/profil" />
      <ScrollView contentContainerStyle={styles.inhalt}>
        <Gruppe
          dark={darkMode}
          titel="Look"
          fuss={design.kurz}
        >
          <AuswahlZeile
            dark={darkMode}
            titel="Aktiv"
            optionen={optionen}
            wert={designId}
            onWahl={waehleDesign}
          />
        </Gruppe>

        {/* Kostprobe: genau die Bausteine, die der Pilot-Screen benutzt. */}
        <Gruppe
          dark={darkMode}
          titel="Kostprobe"
          fuss="So sieht eine Satzkarte in diesem Look aus."
        >
          <View style={styles.probeRahmen}>
            <View
              style={[
                styles.probeKarte,
                { backgroundColor: theme.cardBg, borderRadius: design.radius.md, padding: design.abstand.md },
                design.kartenFlaeche(darkMode),
              ]}
            >
              <View style={{ flex: 1, gap: 2 }}>
                <Text style={[design.schrift('800'), { fontSize: 15, color: theme.text }]}>
                  Hvor er toalettet?
                </Text>
                <Text style={[design.schrift('500'), { fontSize: 13, color: theme.sub }]}>
                  Wo ist die Toilette?
                </Text>
              </View>
              <Text style={[design.schrift('700'), { fontSize: 13, color: design.gemerkt }]}>
                gemerkt
              </Text>
            </View>

            <View style={styles.probeKnopfReihe}>
              <View
                style={[
                  styles.probeKnopf,
                  { backgroundColor: design.akzent, borderBottomColor: design.akzentKante, borderRadius: design.radius.pill },
                ]}
              >
                <Text style={[design.schrift('800'), styles.probeKnopfText]}>Weiter</Text>
              </View>
              <Text style={[design.schrift('700'), { fontSize: 13, color: design.akzentText(darkMode) }]}>
                Überspringen
              </Text>
            </View>
          </View>
        </Gruppe>

        <Gruppe
          dark={darkMode}
          titel="Wie weit es reicht"
          fuss="Ein Look wandert Screen für Screen weiter - sag, welcher als Nächstes dran ist."
        >
          <Zeile
            dark={darkMode}
            titel="Überall"
            wert="Flächen, Text, Rahmen"
            onPress={undefined}
          />
          <Zeile
            dark={darkMode}
            titel="Ganz umgestellt"
            wert="Satzliste"
            onPress={() => router.push('/cheatsheet/grundwortschatz')}
          />
        </Gruppe>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  seite: { flex: 1 },
  inhalt: { paddingBottom: 32 },
  probeRahmen: { padding: 16, gap: 14 },
  probeKarte: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  probeKnopfReihe: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  probeKnopf: { paddingVertical: 10, paddingHorizontal: 20, borderBottomWidth: 3 },
  probeKnopfText: { color: '#FFFFFF', fontSize: 14 },
});
