const fs = require('fs');
const path = require('path');

const keywords = [
  { title: 'Oraciones por los hijos', slug: 'oraciones-por-los-hijos' },
  { title: 'Oración por mis hijos', slug: 'oracion-por-mis-hijos' },
  { title: 'Oración por los hijos pequeños', slug: 'oracion-por-los-hijos-pequenos' },
  { title: 'Oración por los hijos adolescentes', slug: 'oracion-por-los-hijos-adolescentes' },
  { title: 'Oración para proteger a mis hijos', slug: 'oracion-para-proteger-a-mis-hijos' },
  { title: 'Oración por los hijos en peligro', slug: 'oracion-por-los-hijos-en-peligro' },
  { title: 'Oración por un hijo enfermo', slug: 'oracion-por-un-hijo-enfermo' },
  { title: 'Oración por un hijo rebelde', slug: 'oracion-por-un-hijo-rebelde' },
  { title: 'Oración por los hijos antes de dormir', slug: 'oracion-por-los-hijos-antes-de-dormir' },
  { title: 'Oración por los hijos en la madrugada', slug: 'oracion-por-los-hijos-en-la-madrugada' },
  { title: 'Oración por el futuro de mis hijos', slug: 'oracion-por-el-futuro-de-mis-hijos' },
  { title: 'Oración para encomendar a los hijos a Dios', slug: 'oracion-para-encomendar-a-los-hijos-a-dios' },
  { title: 'Oración por los hijos en los estudios', slug: 'oracion-por-los-hijos-en-los-estudios' },
  { title: 'Oración por los hijos cuando sufren', slug: 'oracion-por-los-hijos-cuando-sufren' },
  { title: 'Oración por los hijos cuando se alejan', slug: 'oracion-por-los-hijos-cuando-se-alejan' },
  { title: 'Oración por la fe de mis hijos', slug: 'oracion-por-la-fe-de-mis-hijos' },
  { title: 'Oración por los hijos y su camino', slug: 'oracion-por-los-hijos-y-su-camino' },
  { title: 'Oración por los hijos y su protección diaria', slug: 'oracion-por-los-hijos-y-su-proteccion-diaria' },
  { title: 'Oración para bendecir a los hijos', slug: 'oracion-para-bendecir-a-los-hijos' },
  { title: 'Oración por los hijos en momentos difíciles', slug: 'oracion-por-los-hijos-en-momentos-dificiles' },
  { title: 'Oración por un hijo que no duerme', slug: 'oracion-por-un-hijo-que-no-duerme' },
  { title: 'Oración por los hijos y su salud mental', slug: 'oracion-por-los-hijos-y-su-salud-mental' },
  { title: 'Oración por los hijos y la ansiedad', slug: 'oracion-por-los-hijos-y-la-ansiedad' },
  { title: 'Oración por los hijos antes de salir de casa', slug: 'oracion-por-los-hijos-antes-de-salir-de-casa' },
  { title: 'Oración corta por los hijos', slug: 'oracion-corta-por-los-hijos' },
];

const contentTemplates = {
  'oraciones-por-los-hijos': {
    description: 'Oraciones católicas para encomendar a los hijos a Dios, pedir su protección y bendición en cada etapa de su vida.',
    keywords: ['oraciones por los hijos', 'oraciones por mis hijos', 'oraciones católicas', 'bendición para hijos'],
    sections: [
      {
        heading: 'Oración principal por los hijos',
        paragraphs: [
          'Padre celestial, vengo ante ti con un corazón lleno de amor y gratitud por el regalo de mis hijos. Tú conoces cada uno de sus nombres, sus alegrías, sus luchas y sus sueños.',
          'Te pido que los cubras con tu manto de protección. Guarda sus pasos en cada camino que transiten, protege su mente de toda confusión, su corazón de toda amargura, y su espíritu de toda oscuridad.',
          'Que tu Espíritu Santo more en ellos, llenándolos de sabiduría, paz y amor. Ayúdame a ser un reflejo de tu amor en sus vidas, y a educarlos en tu verdad y en tu gracia.',
          'Te los encomiendo hoy y siempre, confiando en que tu amor por ellos es infinitamente mayor que el mío. Amén.'
        ]
      },
      {
        heading: 'Oración por la protección de los hijos',
        paragraphs: [
          'Señor Jesús, te suplico que rodees a mis hijos con tu protección divina. Que tus ángeles los acompañen en todo momento y lugar.',
          'Protege su cuerpo, su mente y su alma. Líbralos de todo peligro, enfermedad y mal. Que ningún daño los alcance, ni física ni espiritualmente.',
          'Fortalece su carácter y su fe, para que sepan discernir el bien del mal y escojan siempre tus caminos. Amén.'
        ]
      },
      {
        heading: 'Oración por el futuro de los hijos',
        paragraphs: [
          'Dios de amor, pongo en tus manos el futuro de mis hijos. Tú conoces el plan que tienes para cada uno de ellos, un plan de esperanza y de bien.',
          'Guíalos en sus decisiones, en sus estudios, en sus relaciones y en su vocación. Que descubran el propósito para el cual los creaste.',
          'Dame la gracia de acompañarlos con paciencia, sabiduría y amor incondicional, confiando siempre en tu providencia. Amén.'
        ]
      },
      {
        heading: 'Cuándo rezar por los hijos',
        paragraphs: [
          'Estas oraciones pueden rezarse en cualquier momento: al despertar, antes de que salgan de casa, antes de dormir, o cuando sientas preocupación por ellos.',
          'La oración constante por nuestros hijos es uno de los regalos más valiosos que podemos ofrecerles. Encomiéndalos a Dios cada día, confiando en su amor y protección.'
        ]
      }
    ]
  },
  'oracion-por-mis-hijos': {
    description: 'Oración personal para encomendar a tus hijos a Dios, pidiendo bendición, protección y guía en su vida diaria.',
    keywords: ['oración por mis hijos', 'oración de madre por sus hijos', 'oración de padre', 'bendición para hijos'],
    sections: [
      {
        heading: 'Oración de un padre por sus hijos',
        paragraphs: [
          'Señor, hoy vengo ante ti como padre/madre, trayendo en mi corazón a cada uno de mis hijos. Tú me los confiaste, y yo te los devuelvo cada día en oración.',
          'Te pido por [nombre de cada hijo], que tu bendición repose sobre su vida. Que crezca en sabiduría, en gracia y en tu amor. Protege su inocencia, fortalece su carácter, y enciende en su corazón el deseo de conocerte y seguirte.',
          'Dame la paciencia para educarlos, la sabiduría para guiarlos, y el amor para acompañarlos en cada etapa de su vida. Ayúdame a ser un ejemplo vivo de tu amor y tu verdad.',
          'Confío en que tú, que los amas aún más que yo, velarás por ellos todos los días de su vida. Amén.'
        ]
      },
      {
        heading: 'Oración por la salud y bienestar',
        paragraphs: [
          'Padre celestial, te pido salud para mis hijos. Fortalece su cuerpo, su mente y su espíritu. Protégelos de toda enfermedad y peligro.',
          'Que crezcan fuertes y sanos, llenos de energía y alegría. Cuando enfrenten dificultades, dame la gracia de estar presente y de sostenerlos con tu amor a través de mí. Amén.'
        ]
      },
      {
        heading: 'Oración por la paz interior',
        paragraphs: [
          'Señor, derrama tu paz sobre el corazón de mis hijos. En un mundo lleno de ruido y confusión, que encuentren en ti su refugio y su descanso.',
          'Libera su mente de ansiedades y temores. Llena su corazón de confianza en tu providencia. Que sepan que nunca están solos, que tú siempre estás con ellos. Amén.'
        ]
      }
    ]
  },
  'oracion-por-los-hijos-pequenos': {
    description: 'Oración especial para encomendar a los hijos pequeños a Dios, pidiendo su protección, salud y bendición en sus primeros años de vida.',
    keywords: ['oración por hijos pequeños', 'oración por niños', 'bendición para niños', 'protección infantil'],
    sections: [
      {
        heading: 'Oración por los hijos pequeños',
        paragraphs: [
          'Padre amoroso, te presento a mis hijos pequeños, tesoros que has puesto en mis manos. Gracias por su inocencia, su alegría y su capacidad de asombro.',
          'Protege su infancia, que sea un tiempo de descubrimiento, aprendizaje y felicidad. Cuida su salud, fortalece su cuerpo en crecimiento, y desarrolla su mente con sabiduría.',
          'Guarda su corazón puro y libre de miedo. Que crezcan sintiendo tu amor a través de mi cuidado, mi abrazo y mis palabras.',
          'Bendice cada paso que dan, cada palabra que aprenden, cada sonrisa que comparten. Que tu presencia los acompañe desde estos primeros años. Amén.'
        ]
      },
      {
        heading: 'Oración por la protección de los niños',
        paragraphs: [
          'Señor Jesús, que tanto amaste a los niños, te pido que protejas a mis pequeños de todo mal. Envía a tus ángeles para que los cuiden en cada momento.',
          'Protégelos de enfermedades, accidentes y peligros. Que jueguen seguros, descansen tranquilos, y exploren el mundo con confianza.',
          'Dame paciencia infinita, ternura constante, y sabiduría para educarlos en tu amor. Amén.'
        ]
      },
      {
        heading: 'Oración por su desarrollo y crecimiento',
        paragraphs: [
          'Padre celestial, te pido que bendigas el crecimiento de mis hijos pequeños. Que se desarrollen sanos y fuertes, en cuerpo, mente y espíritu.',
          'Que aprendan con alegría, que descubran sus talentos, y que crezcan en valores y virtudes. Que desde pequeños conozcan tu amor y aprendan a confiar en ti. Amén.'
        ]
      }
    ]
  },
  'oracion-por-los-hijos-adolescentes': {
    description: 'Oración por los hijos adolescentes, pidiendo guía, protección y fortaleza durante esta etapa de cambios y decisiones importantes.',
    keywords: ['oración por hijos adolescentes', 'oración por jóvenes', 'guía para adolescentes', 'protección en adolescencia'],
    sections: [
      {
        heading: 'Oración por los hijos adolescentes',
        paragraphs: [
          'Señor, vengo ante ti por mis hijos adolescentes, que atraviesan una etapa de cambios, búsquedas y decisiones importantes.',
          'Tú conoces sus luchas internas, sus dudas, sus sueños y sus temores. Te pido que los acompañes con tu luz en este camino de descubrimiento de su identidad.',
          'Protege su mente de las mentiras del mundo, de las presiones sociales, y de todo lo que pueda dañar su autoestima y su valor como hijos tuyos.',
          'Fortalece su carácter, ayúdalos a tomar decisiones sabias, y rodéalos de buenas amistades que los impulsen hacia el bien. Amén.'
        ]
      },
      {
        heading: 'Oración por su identidad y vocación',
        paragraphs: [
          'Padre celestial, te pido que mis hijos adolescentes descubran quiénes son realmente en ti. Que encuentren su valor no en las opiniones del mundo, sino en tu amor incondicional.',
          'Guíalos en el descubrimiento de sus talentos y de su vocación. Ilumina sus decisiones sobre estudios, amistades y su futuro.',
          'Dame sabiduría para escucharlos, para acompañarlos sin abrumarlos, y para amarlos incondicionalmente aun cuando no entiendan mis límites. Amén.'
        ]
      },
      {
        heading: 'Oración por protección en la adolescencia',
        paragraphs: [
          'Señor Jesús, protege a mis hijos adolescentes de toda tentación y peligro. Guárdalos de las adicciones, de relaciones dañinas, y de decisiones que puedan herirlos.',
          'Fortalece su voluntad, su capacidad de decir no, y su discernimiento entre el bien y el mal. Que tu Espíritu Santo sea su consejero y su guía. Amén.'
        ]
      }
    ]
  },
  'oracion-para-proteger-a-mis-hijos': {
    description: 'Oración poderosa para pedir la protección divina sobre los hijos, cubriéndolos con el amor y el cuidado de Dios cada día.',
    keywords: ['oración de protección para hijos', 'proteger a los hijos', 'oración por seguridad', 'amparo divino'],
    sections: [
      {
        heading: 'Oración de protección para los hijos',
        paragraphs: [
          'Padre todopoderoso, clamo a ti por la protección de mis hijos. Bajo la sombra de tus alas los pongo, confiando en tu poder y tu amor.',
          'Cubre a mis hijos con tu sangre preciosa. Que ningún mal los alcance, ni en el camino, ni en la escuela, ni en ningún lugar donde estén.',
          'Envía a tus santos ángeles para que los guarden en todos sus pasos. Que tu presencia divina los rodee como un escudo impenetrable.',
          'Protege su cuerpo de enfermedades y accidentes, su mente de pensamientos negativos, y su corazón de toda influencia maligna. Amén.'
        ]
      },
      {
        heading: 'Oración al Ángel de la Guarda',
        paragraphs: [
          'Santo Ángel de la Guarda de mis hijos, a ti te los encomiendo. Custodialos con fidelidad, guíalos con sabiduría, y protégelos con tu poder.',
          'No permitas que se aparten del camino del bien. Alerta su conciencia ante el peligro, y fortalece su voluntad para escoger lo correcto.',
          'Acompáñalos en cada momento, invisible pero presente, velando por su bienestar y su salvación. Amén.'
        ]
      },
      {
        heading: 'Oración de protección diaria',
        paragraphs: [
          'Señor, cada mañana te entrego a mis hijos. Que tu mano poderosa los proteja durante todo el día.',
          'Que salgan en paz y vuelvan con bien. Que estén seguros en cada lugar, y que tu amor los acompañe en cada paso. Amén.'
        ]
      }
    ]
  }
};

function generateContent(keyword) {
  const template = contentTemplates[keyword.slug];

  if (template) {
    return template;
  }

  // Generic template for keywords without custom content
  const isPlural = keyword.title.toLowerCase().includes('los hijos');
  const pronoun = isPlural ? 'los' : 'lo/la';

  return {
    description: `Oración católica para ${keyword.title.toLowerCase()}, pidiendo la intercesión divina y confiando en el amor de Dios.`,
    keywords: [keyword.title.toLowerCase(), 'oraciones por los hijos', 'oraciones católicas', 'protección divina'],
    sections: [
      {
        heading: keyword.title,
        paragraphs: [
          `Padre celestial, vengo ante ti para presentarte esta intención sobre mis hijos. Tú conoces cada detalle de sus vidas, sus necesidades y sus luchas.`,
          `Te pido que ${pronoun} cubras con tu amor y protección. Que tu Espíritu Santo ${pronoun} guíe, ${pronoun} fortalezca y ${pronoun} llene de paz.`,
          `Dame la gracia de ser un instrumento de tu amor en sus vidas. Ayúdame a acompañar${pronoun} con paciencia, comprensión y sabiduría.`,
          `Te ${pronoun} encomiendo con todo mi corazón, confiando en tu providencia y en tu amor infinito. Amén.`
        ]
      },
      {
        heading: 'Oración de confianza',
        paragraphs: [
          `Señor, pongo en tus manos a mis hijos. Confío en que tú, que ${pronoun} amas más que yo, sabrás cuidar${pronoun} y guiar${pronoun}.`,
          `Que tu voluntad se cumpla en sus vidas, y que yo tenga la fe para aceptar tu plan con paz y esperanza. Amén.`
        ]
      },
      {
        heading: 'Momento de oración',
        paragraphs: [
          `Esta oración puede rezarse en cualquier momento del día, especialmente cuando sientas preocupación o cuando quieras encomendar a tus hijos al cuidado de Dios.`,
          `La oración constante por los hijos es un acto de amor y de fe que fortalece el vínculo espiritual con ellos y con Dios.`
        ]
      }
    ]
  };
}

function createMDXContent(keyword) {
  const content = generateContent(keyword);
  const sections = content.sections.map(section => {
    const heading = `## ${section.heading}`;
    const paragraphs = section.paragraphs.join('\n\n');
    return `${heading}\n\n${paragraphs}`;
  }).join('\n\n');

  return `---
slug: "${keyword.slug}"
title: "${keyword.title}"
metaTitle: "${keyword.title} | Oraciones por los hijos"
metaDescription: "${content.description}"
keywords: ${JSON.stringify(content.keywords)}
publishedAt: "2026-01-08"
updatedAt: "2026-01-08"
category: "hijos"
---

${sections}
`;
}

// Generate all MDX files
const contentDir = path.join(__dirname, '..', 'content', 'pages');

// Remove old MDX files except legal ones
const existingFiles = fs.readdirSync(contentDir);
existingFiles.forEach(file => {
  if (file.endsWith('.mdx') && !file.startsWith('aviso-legal') && !file.startsWith('politica-de-privacidad')) {
    fs.unlinkSync(path.join(contentDir, file));
  }
});

// Generate new files
keywords.forEach(keyword => {
  const mdxContent = createMDXContent(keyword);
  const filePath = path.join(contentDir, `${keyword.slug}.mdx`);
  fs.writeFileSync(filePath, mdxContent, 'utf-8');
  console.log(`Created: ${keyword.slug}.mdx`);
});

console.log(`\nSuccessfully generated ${keywords.length} MDX files!`);
