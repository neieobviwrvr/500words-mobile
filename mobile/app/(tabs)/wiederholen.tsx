import { useLocalSearchParams } from 'expo-router';
import { CourseReviewScreen } from '../../src/features/course/CourseReviewScreen';
import { Kartenart } from '../../src/features/course/useFaelligeKarten';
import { SwipeBackScreen } from '../../src/components';

// Wiederholungs-Sitzung des gefuehrten Kurses.
//
// Getrennt vom Speed-Run-Weg (`/exercise` mit `source: 'srs'`): der laedt
// Phrasebook-Saetze, die es fuer Chinesisch gar nicht gibt.
//
// `modus` kommt von den beiden Knoepfen auf S5 und schraenkt die Sitzung ein:
// "woerter" fragt nur einzelne Vokabeln ab, "saetze" nur ganze Saetze
// (Nutzer-Vorgabe 2026-08-21). Ohne Angabe kommt beides.
export default function Wiederholen() {
  const { modus, auswahl } = useLocalSearchParams<{ modus?: string; auswahl?: string }>();
  const art: Kartenart | undefined =
    modus === 'woerter' ? 'wort' : modus === 'saetze' ? 'rahmen' : undefined;
  return (
    <SwipeBackScreen>
      {/* `auswahl=wackelt`: "Diese Woerter ueben" von der Statistikseite. */}
      <CourseReviewScreen modus={art} auswahl={auswahl === 'wackelt' ? 'wackelt' : 'faellig'} />
    </SwipeBackScreen>
  );
}
