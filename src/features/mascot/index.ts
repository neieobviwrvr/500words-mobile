// Sammelstelle fuer alles rund um das Begleit-Maskottchen.
//
// Aufrufer sollen nur von hier importieren - dann genuegt es, beim
// Abschalten (MASCOT_ENABLED in config.ts) an einer Stelle nachzusehen.
export { Mascot } from './Mascot';
export { MASCOT_ENABLED, MASCOT_STEP, ONBOARDING_TOTAL_STEPS, stepNumber } from './config';
