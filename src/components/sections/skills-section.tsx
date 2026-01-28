import { Progress } from '@/components/ui/progress';
import { skills } from '@/lib/data';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Habilidades Técnicas
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mi conjunto de herramientas para analizar datos, construir modelos
              y desarrollar aplicaciones web completas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="grid gap-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <Progress value={skill.level} aria-label={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
