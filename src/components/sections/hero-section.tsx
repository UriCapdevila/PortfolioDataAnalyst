import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '@/lib/data';

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Transformando Datos en Decisiones Estratégicas
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Data Analyst y Desarrollador Full Stack con pasión por descubrir
                insights y construir soluciones tecnológicas de alto impacto.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/#projects">
                  Ver Proyectos <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={profile.cvUrl} download>
                  Descargar CV <Download className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <Image
            src={profile.image.url}
            alt="Foto de perfil"
            width={400}
            height={400}
            priority
            className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-[400px] lg:order-last lg:w-full"
            data-ai-hint={profile.image.hint}
          />
        </div>
      </div>
    </section>
  );
}
