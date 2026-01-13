// Curated content configuration for homepage sections

export const START_HERE_SLUGS = [
  'oraciones-por-el-perdon',
  'oracion-para-pedir-perdon-a-dios',
  'oracion-para-perdonar-a-alguien',
  'oracion-para-perdonarme-a-mi-mismo',
  'oracion-por-la-culpa',
  'oracion-para-sanar-el-corazon-herido',
];

export const FEATURED_SLUGS = [
  'oracion-para-soltar-el-rencor',
  'oracion-para-reconciliacion-familiar',
  'oracion-para-pedir-disculpas',
  'oracion-para-empezar-de-nuevo',
  'oracion-por-misericordia',
  'oracion-para-restaurar-la-paz-interior',
];

// Primary prayer for main CTA
export const PRIMARY_PRAYER_SLUG = 'oraciones-por-el-perdon';

// Quick action categories with icons and slugs
export interface QuickAction {
  id: string;
  label: string;
  icon: 'anxiety' | 'gratitude' | 'protection' | 'family' | 'trust';
  slug: string;
}

export const QUICK_ACTIONS: QuickAction[] = [
  { id: 'pedir-perdon', label: 'Pedir perdón', icon: 'gratitude', slug: 'oracion-para-pedir-perdon-a-dios' },
  { id: 'perdonar', label: 'Perdonar', icon: 'trust', slug: 'oracion-para-perdonar-a-alguien' },
  { id: 'culpa', label: 'Culpa', icon: 'anxiety', slug: 'oracion-por-la-culpa' },
  { id: 'reconciliacion', label: 'Reconciliación', icon: 'family', slug: 'oracion-para-reconciliacion-familiar' },
  { id: 'paz', label: 'Paz interior', icon: 'protection', slug: 'oracion-para-restaurar-la-paz-interior' },
];

// Daily verse for spiritual inspiration
export const DAILY_VERSES = [
  { text: 'Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados y limpiarnos de toda maldad.', reference: '1 Juan 1:9' },
  { text: 'Porque si perdonáis a los hombres sus ofensas, os perdonará también a vosotros vuestro Padre celestial.', reference: 'Mateo 6:14' },
  { text: 'Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo.', reference: 'Efesios 4:32' },
  { text: 'Cuanto está lejos el oriente del occidente, hizo alejar de nosotros nuestras rebeliones.', reference: 'Salmo 103:12' },
  { text: 'El que encubre sus pecados no prosperará; mas el que los confiesa y se aparta alcanzará misericordia.', reference: 'Proverbios 28:13' },
];

export function getDailyVerse() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
}
