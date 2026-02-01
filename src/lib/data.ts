import type { Project, SkillCategory } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a default or throw an error
    return { id: 'default', url: 'https://picsum.photos/seed/default/600/400', hint: 'placeholder' };
  }
  return { id: image.id, url: image.imageUrl, hint: image.imageHint };
};

export const skills: SkillCategory[] = [
  {
    title: 'Data Science & Analytics',
    progressColor: 'bg-primary',
    titleColor: 'text-primary',
    skills: [
      { name: 'Python (Pandas, NumPy)', level: 95 },
      { name: 'Data Visualization (Matplotlib, Seaborn)', level: 90 },
      { name: 'Machine Learning (Scikit-learn)', level: 85 },
      { name: 'Statistical Analysis', level: 88 },
    ],
  },
  {
    title: 'Databases & BI',
    progressColor: 'bg-chart-4',
    titleColor: 'text-chart-4',
    skills: [
      { name: 'SQL (PostgreSQL, MySQL)', level: 92 },
      { name: 'Power BI', level: 88 },
      { name: 'Tableau', level: 82 },
      { name: 'Excel Avanzado', level: 95 },
    ],
  },
  {
    title: 'Full Stack Development',
    progressColor: 'bg-accent',
    titleColor: 'text-accent',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'TypeScript', level: 82 },
      { name: 'REST APIs & GraphQL', level: 88 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'netflix-content-analysis',
    title: 'Análisis de Contenido de Netflix',
    description: 'Un análisis profundo del catálogo de Netflix para identificar tendencias de contenido.',
    longDescription: 'Este proyecto utiliza un extenso conjunto de datos de Netflix para realizar un análisis exploratorio de datos (EDA). Se aplicaron técnicas de visualización de datos con Python (Matplotlib, Seaborn) para descubrir patrones en la distribución de contenido, géneros populares por país y la evolución de la biblioteca a lo largo del tiempo. El reporte final presenta insights clave para la toma de decisiones estratégicas de contenido.',
    technologies: ['Python', 'Pandas', 'Data Viz', 'Jupyter'],
    image: getImage('project-netflix'),
    reportUrl: '/reports/analisis-contenido-netflix.pdf',
  },
  {
    id: 'sentiment-analysis-system',
    title: 'Sistema de Análisis de Sentimiento',
    description: 'Una aplicación full-stack que analiza el sentimiento de texto en tiempo real.',
    longDescription: 'Se desarrolló una API con Node.js y un frontend con React para crear una herramienta interactiva de análisis de sentimiento. El backend integra un modelo de Procesamiento del Lenguaje Natural (NLP) para clasificar el texto como positivo, negativo o neutro. Esta aplicación demuestra la capacidad de construir soluciones de datos de extremo a extremo, desde el modelo de ML hasta la interfaz de usuario.',
    technologies: ['Full Stack', 'React', 'Node.js', 'NLP', 'API'],
    image: getImage('project-sentiment'),
    reportUrl: '/reports/sistema-analisis-sentimiento.pdf',
  },
  {
    id: 'corporate-financial-dashboard',
    title: 'Dashboard Financiero Corporativo',
    description: 'Creación de un dashboard interactivo para el seguimiento de KPIs financieros.',
    longDescription: 'Utilizando SQL para extraer y transformar datos de múltiples fuentes, se construyó un dashboard completo en una herramienta de BI (como Tableau o Power BI). El dashboard permite a los ejecutivos monitorear métricas clave como ingresos, rentabilidad y flujo de caja en tiempo real. Se emplearon técnicas avanzadas de modelado de datos y diseño de dashboards para asegurar que la información fuera clara, accionable e impactante. El reporte adjunto es una exportación en Excel con los datos y gráficos principales.',
    technologies: ['SQL', 'Excel', 'BI Tools', 'Data Modeling'],
    image: getImage('project-dashboard'),
    reportUrl: '/reports/dashboard-financiero-corporativo.pdf',
  },
];

export const profile = {
  name: "Analista de Datos y Desarrollador",
  cvUrl: "/reports/cv-uriel-capdevila.pdf",
  image: getImage('hero-profile'),
  backgroundImage: getImage('hero-background'),
}
