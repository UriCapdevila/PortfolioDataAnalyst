export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Sobre mí
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Soy un profesional con un perfil híbrido único que combina una
              profunda experiencia en Ciencia de Datos con habilidades sólidas
              en Desarrollo Web Full Stack. Mi pasión es cerrar la brecha entre
              el análisis de datos y la implementación de productos, creando
              soluciones que no solo son inteligentes, sino también funcionales,
              escalables y atractivas para el usuario final. Disfruto
              transformando datos crudos en historias y aplicaciones que generan
              valor real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
