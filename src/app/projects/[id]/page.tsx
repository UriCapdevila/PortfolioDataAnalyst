import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type ProjectDetailPageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Proyectos
          </Link>
        </Button>
      </div>

      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </header>

        <Image
          src={project.image.url}
          alt={`Imagen del proyecto ${project.title}`}
          width={900}
          height={500}
          className="aspect-video w-full rounded-lg border object-cover shadow-md"
          data-ai-hint={project.image.hint}
        />

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <p>{project.longDescription}</p>
        </div>

        <div className="border-t pt-8 text-center">
          <Button asChild size="lg">
            <a href={project.reportUrl} download>
              <Download className="mr-2 h-5 w-5" />
              Descargar Reporte Completo
            </a>
          </Button>
        </div>
      </article>
    </div>
  );
}
