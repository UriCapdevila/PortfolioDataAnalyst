import { BarChart3, CodeXml, Database, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const expertiseAreas = [
  {
    icon: Database,
    title: 'Ciencia de Datos',
    description:
      'Análisis exploratorio, modelado estadístico y machine learning para extraer valor de los datos.',
    colorClass: 'border-primary/40 hover:border-primary',
    iconColorClass: 'text-primary',
    iconBgColorClass: 'bg-primary/10',
  },
  {
    icon: CodeXml,
    title: 'Desarrollo Full Stack',
    description:
      'Aplicaciones web modernas con React, Node.js y arquitecturas escalables.',
    colorClass: 'border-accent/40 hover:border-accent',
    iconColorClass: 'text-accent',
    iconBgColorClass: 'bg-accent/10',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description:
      'Dashboards interactivos y reportes ejecutivos que impulsan decisiones estratégicas.',
    colorClass: 'border-primary/40 hover:border-primary',
    iconColorClass: 'text-primary',
    iconBgColorClass: 'bg-primary/10',
  },
  {
    icon: Layers,
    title: 'Data Engineering',
    description:
      'Pipelines de datos robustos, ETL y optimización de bases de datos.',
    colorClass: 'border-accent/40 hover:border-accent',
    iconColorClass: 'text-accent',
    iconBgColorClass: 'bg-accent/10',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">
                SOBRE MÍ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Perfil Híbrido en Tecnología
              </h2>
            </div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Combino la rigurosidad analítica del Data Science con la
              creatividad del desarrollo web para crear soluciones completas y
              efectivas.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {expertiseAreas.map((area) => (
            <Card
              key={area.title}
              className={cn(
                'flex h-full flex-col items-start p-10 bg-card border-2 transition-all duration-300',
                area.colorClass
              )}
            >
              <div
                className={cn(
                  'mb-4 p-3 rounded-lg transition-colors',
                  area.iconBgColorClass
                )}
              >
                <area.icon
                  className={cn('h-7 w-7 transition-colors', area.iconColorClass)}
                />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
