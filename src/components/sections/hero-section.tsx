import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '@/lib/data';

export default function HeroSection() {
  return (
    <section className="relative flex h-[80vh] w-full items-center justify-center text-center text-white">
      <Image
        src={profile.backgroundImage.url}
        alt="Fondo de Business Intelligence"
        fill
        className="object-cover"
        data-ai-hint={profile.backgroundImage.hint}
        priority
      />
      <div className="absolute inset-0 z-10 bg-black/50" />
      <div className="relative z-20 container flex flex-col items-center justify-center space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
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
          <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
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
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href={profile.cvUrl} download>
              Descargar CV <Download className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
