import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';

type ProjectsSectionProps = {
  limit?: number;
};

export default function ProjectsSection({ limit }: ProjectsSectionProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Proyectos Destacados
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una selección de mis trabajos que demuestran mis habilidades en
              análisis de datos, visualización y desarrollo de aplicaciones.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <Image
                  src={project.image.url}
                  alt={`Cover image for ${project.title}`}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                  data-ai-hint={project.image.hint}
                />
              </Link>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href={`/projects/${project.id}`}>
                    Ver detalles <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {limit && projects.length > limit && (
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/projects">Ver Todos los Proyectos</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
