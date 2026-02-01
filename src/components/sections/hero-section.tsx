import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '@/lib/data';

export default function HeroSection() {
  return (
    <section className="w-full border-b py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-border bg-muted/30 px-3 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
                <span className="relative mr-2 flex h-2.5 w-2.5">
                  <span className="relative inline-flex h-full w-full rounded-full bg-[#10b981]"></span>
                </span>
                Disponible para nuevos proyectos
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                <span className="block">Transformando</span>
                <span className="block">Datos en</span>
                <span className="text-accent block">Decisiones</span>
                <span className="block">Estratégicas</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Data Analyst & Full Stack Developer especializado en convertir
                datos complejos en insights accionables y soluciones
                tecnológicas de alto impacto.
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
          <div className="relative flex items-center justify-center lg:order-last">
            <div className="relative w-full max-w-[400px]">
              <Image
                src={profile.image.url}
                alt="Foto de perfil"
                width={400}
                height={400}
                priority
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                data-ai-hint={profile.image.hint}
              />
              <div className="absolute top-[20%] -right-[15%] rounded-full border border-border bg-muted/30 px-4 py-2 text-sm backdrop-blur-sm">
                Python
              </div>
              <div className="absolute bottom-[20%] -left-[15%] rounded-full border border-border bg-muted/30 px-4 py-2 text-sm backdrop-blur-sm">
                Full Stack Dev
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
