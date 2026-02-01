'use client';

import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/uriel-capdevila0024/',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/UriCapdevila',
  },
    {
    name: 'Email',
    icon: Mail,
    url: 'mailto:Uri_CapdevilaWRK@outlook.com',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">
              CONTACTO
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Hablemos
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Estoy siempre abierto a discutir nuevas oportunidades y proyectos desafiantes. Conectemos.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="lg" asChild>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="text-lg">{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}