import { useAppState } from '../state/AppState';
import { designVon, type Design } from './designs';

/**
 * Der aktive Look fuer einen Screen, der wirklich ALLES umschalten soll.
 *
 * Ohne diesen Haken schalten nur die Farben mit, die durch `getTheme()`
 * laufen - Seitengrund, Karten, Text, Rahmen. Akzentfarbe, Schrift, Radien
 * und Schatten stehen in den `StyleSheet.create`-Bloecken und damit beim
 * App-Start fest.
 *
 * **Ein Screen, der umgestellt wird, baut seine Styles aus dem Design**,
 * statt sie auf Modulebene zu erzeugen:
 *
 * ```tsx
 * const design = useDesign();
 * const styles = useMemo(() => macheStyles(design), [design]);
 * ```
 *
 * `useMemo` ist hier kein Feinschliff: `StyleSheet.create` bei jedem
 * Rendern neu aufzurufen wirft die Stil-Objekte weg, an denen React Native
 * seine Aktualisierungen erkennt.
 */
export function useDesign(): Design {
  const { designId } = useAppState();
  return designVon(designId);
}
