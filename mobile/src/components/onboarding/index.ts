// Sammelstelle fuer die Onboarding-Bausteine, damit die zwoelf Screens
// nur aus einem Pfad importieren muessen.
//
// `Dropdown`, `PillButton` und `ProgressBar` liegen seit 2026-08-18 eine
// Ebene hoeher in `src/components/`, weil S1 sie ebenfalls braucht und keiner
// von ihnen je onboarding-spezifisch war. Sie werden hier weitergereicht,
// damit die Importe in den zwoelf Screens unveraendert bleiben - der Umzug
// soll dort nichts anfassen muessen.
//
// Hier bleiben nur die beiden Bausteine, die wirklich nur im Onboarding
// vorkommen: das Geruest und die Auswahlzeile.
export { Dropdown } from '../Dropdown';
export type { DropdownOption } from '../Dropdown';
export { OnboardingScaffold } from './OnboardingScaffold';
export { OptionRow } from './OptionRow';
export type { FeatherIconName } from './OptionRow';
export { PillButton } from '../PillButton';
export { ProgressBar } from '../ProgressBar';
