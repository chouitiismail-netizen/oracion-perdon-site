// Curated content configuration for homepage sections

export const START_HERE_SLUGS = [
  'oraciones-por-los-hijos',
  'oracion-por-mis-hijos',
  'oracion-para-proteger-a-mis-hijos',
  'oracion-por-los-hijos-antes-de-dormir',
  'oracion-para-encomendar-a-los-hijos-a-dios',
  'oracion-para-bendecir-a-los-hijos',
];

export const FEATURED_SLUGS = [
  'oracion-por-los-hijos-pequenos',
  'oracion-por-los-hijos-adolescentes',
  'oracion-por-un-hijo-enfermo',
  'oracion-por-un-hijo-rebelde',
  'oracion-por-el-futuro-de-mis-hijos',
  'oracion-por-los-hijos-cuando-sufren',
];

// Primary prayer for main CTA
export const PRIMARY_PRAYER_SLUG = 'oraciones-por-los-hijos';

// Quick action categories with icons and slugs
export interface QuickAction {
  id: string;
  label: string;
  icon: 'anxiety' | 'gratitude' | 'protection' | 'family' | 'trust';
  slug: string;
}

export const QUICK_ACTIONS: QuickAction[] = [
  { id: 'proteccion', label: 'Protección', icon: 'protection', slug: 'oracion-para-proteger-a-mis-hijos' },
  { id: 'bendicion', label: 'Bendición', icon: 'gratitude', slug: 'oracion-para-bendecir-a-los-hijos' },
  { id: 'salud', label: 'Salud', icon: 'anxiety', slug: 'oracion-por-un-hijo-enfermo' },
  { id: 'guia', label: 'Guía', icon: 'trust', slug: 'oracion-por-los-hijos-y-su-camino' },
  { id: 'paz', label: 'Paz', icon: 'family', slug: 'oracion-por-los-hijos-antes-de-dormir' },
];

// Daily verse for "Santo del día" equivalent
export const DAILY_VERSES = [
  { text: 'Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.', reference: 'Proverbios 22:6' },
  { text: 'Los hijos son una herencia del Señor, los frutos del vientre son una recompensa.', reference: 'Salmos 127:3' },
  { text: 'Que el Señor te bendiga y te proteja; que el Señor te muestre su favor y tenga compasión de ti.', reference: 'Números 6:24-25' },
  { text: 'No temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios.', reference: 'Isaías 41:10' },
  { text: 'Encomienda al Señor tus obras, y tus proyectos se cumplirán.', reference: 'Proverbios 16:3' },
];

export function getDailyVerse() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
}
