import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com',
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <div className="text-center text-sm text-muted-foreground sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} DataFolio Pro. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild
              aria-label={link.name}
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5 text-muted-foreground" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
