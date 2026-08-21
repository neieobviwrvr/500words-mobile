import { useLocalSearchParams } from 'expo-router';
import { LessonScreen } from '../../../src/features/course/LessonScreen';

// Eine Lektion des gefuehrten Kurses. `id` ist die Lektionsnummer aus
// data/chineseCourse.ts ("1.1", "3.2", ...).
//
// Gebaut ist die Uebung bisher nur fuer die ersten zwei Lektionen - der
// Screen sagt das fuer alle anderen selbst, statt hier zu filtern.
export default function Lesson() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <LessonScreen lessonId={id ?? ''} />;
}
