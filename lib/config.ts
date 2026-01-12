// Curated content configuration for homepage sections

export const START_HERE_SLUGS = [
  'oraciones-para-la-tristeza',
  'oracion-para-la-tristeza',
  'oracion-para-el-desanimo',
  'oracion-cuando-estoy-triste',
  'oracion-por-consuelo',
  'oracion-para-encontrar-esperanza',
];

export const FEATURED_SLUGS = [
  'oracion-para-sanar-el-alma',
  'oracion-para-el-corazon-roto',
  'oracion-cuando-me-siento-vacio',
  'oracion-cuando-me-siento-solo',
  'oracion-para-llorar-con-fe',
  'oracion-para-calmar-el-dolor',
];

// Primary prayer for main CTA
export const PRIMARY_PRAYER_SLUG = 'oraciones-para-la-tristeza';

// Quick action categories with icons and slugs
export interface QuickAction {
  id: string;
  label: string;
  icon: 'anxiety' | 'gratitude' | 'protection' | 'family' | 'trust';
  slug: string;
}

export const QUICK_ACTIONS: QuickAction[] = [
  { id: 'consuelo', label: 'Consuelo', icon: 'gratitude', slug: 'oracion-por-consuelo' },
  { id: 'esperanza', label: 'Esperanza', icon: 'trust', slug: 'oracion-para-encontrar-esperanza' },
  { id: 'desanimo', label: 'Desánimo', icon: 'anxiety', slug: 'oracion-para-el-desanimo' },
  { id: 'soledad', label: 'Soledad', icon: 'family', slug: 'oracion-cuando-me-siento-solo' },
  { id: 'animo', label: 'Levantar ánimo', icon: 'protection', slug: 'oracion-para-levantar-el-animo' },
];

// Daily verse for spiritual inspiration
export const DAILY_VERSES = [
  { text: 'El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido.', reference: 'Salmo 34:18' },
  { text: 'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.', reference: 'Mateo 11:28' },
  { text: 'Él sana a los quebrantados de corazón y venda sus heridas.', reference: 'Salmo 147:3' },
  { text: 'No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.', reference: 'Isaías 41:10' },
  { text: 'Jehová es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar.', reference: 'Salmo 23:1-2' },
];

export function getDailyVerse() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
}
