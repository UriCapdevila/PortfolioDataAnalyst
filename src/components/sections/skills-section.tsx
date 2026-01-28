import { Progress } from '@/components/ui/progress';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">COMPETENCIAS</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Habilidades Técnicas
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un conjunto de habilidades diverso que abarca todo el ciclo de vida de los datos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {skills.map((category) => (
            <Card key={category.title} className="flex flex-col bg-card border-border/40 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <CardTitle className={cn('text-xl font-bold', category.titleColor)}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              {category.showProgress ? (
                <CardContent className="grid gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        indicatorClassName={category.progressColor}
                        aria-label={skill.name}
                      />
                    </div>
                  ))}
                </CardContent>
              ) : (
                <CardContent className="grid gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
