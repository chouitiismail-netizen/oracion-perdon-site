// Curated content configuration for homepage sections

export const START_HERE_SLUGS = [
  'oraciones-de-agradecimiento',
  'oracion-de-agradecimiento',
  'oracion-para-dar-gracias-a-dios',
  'oracion-de-gratitud-diaria',
  'oracion-de-agradecimiento-por-la-vida',
  'oracion-de-agradecimiento-por-la-familia',
];

export const FEATURED_SLUGS = [
  'oracion-de-agradecimiento-por-el-trabajo',
  'oracion-de-agradecimiento-por-un-nuevo-dia',
  'oracion-de-agradecimiento-por-bendiciones',
  'oracion-para-agradecer-aun-en-dificultad',
  'oracion-de-agradecimiento-por-salud',
  'oracion-de-agradecimiento-por-proteccion',
];

// Primary prayer for main CTA
export const PRIMARY_PRAYER_SLUG = 'oraciones-de-agradecimiento';

// Quick action categories with icons and slugs
export interface QuickAction {
  id: string;
  label: string;
  icon: 'anxiety' | 'gratitude' | 'protection' | 'family' | 'trust';
  slug: string;
}

export const QUICK_ACTIONS: QuickAction[] = [
  { id: 'vida', label: 'Por la vida', icon: 'gratitude', slug: 'oracion-de-agradecimiento-por-la-vida' },
  { id: 'familia', label: 'Por la familia', icon: 'family', slug: 'oracion-de-agradecimiento-por-la-familia' },
  { id: 'bendiciones', label: 'Bendiciones', icon: 'trust', slug: 'oracion-de-agradecimiento-por-bendiciones' },
  { id: 'provision', label: 'Provisión', icon: 'protection', slug: 'oracion-de-agradecimiento-por-provision' },
  { id: 'dificultad', label: 'En dificultad', icon: 'anxiety', slug: 'oracion-para-agradecer-aun-en-dificultad' },
];

// Daily verse for spiritual inspiration
export const DAILY_VERSES = [
  { text: 'Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.', reference: '1 Tesalonicenses 5:18' },
  { text: 'Entrad por sus puertas con acción de gracias, por sus atrios con alabanza; alabadle, bendecid su nombre.', reference: 'Salmo 100:4' },
  { text: 'Alabad al Señor, porque él es bueno; porque para siempre es su misericordia.', reference: 'Salmo 107:1' },
  { text: 'Todo lo que respira alabe al Señor. Aleluya.', reference: 'Salmo 150:6' },
  { text: 'Por tanto, ofrezcamos siempre a Dios, por medio de él, sacrificio de alabanza, es decir, fruto de labios que confiesan su nombre.', reference: 'Hebreos 13:15' },
];

export function getDailyVerse() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
}
