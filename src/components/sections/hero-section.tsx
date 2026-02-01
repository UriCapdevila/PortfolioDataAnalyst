import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '@/lib/data';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center">
      {/* Background and overlay */}
      <Image
        src={profile.backgroundImage.url}
        alt="Fondo de Business Intelligence"
        fill
        className="object-cover"
        data-ai-hint={profile.backgroundImage.hint}
        priority
      />
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 container text-white">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text and Buttons Column */}
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                <span className="relative mr-2 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-full w-full rounded-full bg-green-500"></span>
                </span>
                Disponible para nuevos proyectos
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                <span className="block">Transformando</span>
                <span className="block">Datos en</span>
                <span className="text-accent block">Decisiones</span>
              </h1>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                Data Analyst & Full Stack Developer especializado en convertir
                datos complejos en insights accionables y soluciones
                tecnológicas de alto impacto.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

          {/* Profile Picture Column */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={profile.image.url}
              alt="Foto de perfil de Uriel Capdevila"
              width={350}
              height={350}
              className="rounded-full border-4 border-primary/50 object-cover shadow-2xl aspect-square"
              data-ai-hint={profile.image.hint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
