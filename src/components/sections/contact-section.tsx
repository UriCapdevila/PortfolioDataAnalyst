'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ContactState, submitContactForm } from '@/app/actions';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

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

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un correo electrónico válido.'),
  company: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function ContactSection() {
  const { toast } = useToast();
  const initialState: ContactState = { success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.success) {
      toast({
        title: '¡Éxito!',
        description: state.message,
      });
      form.reset();
    } else if (state.message && !state.success) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">
              CONTACTO
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Estoy siempre abierto a discutir nuevas oportunidades, proyectos
              desafiantes o simplemente tener una conversación sobre datos y
              tecnología.
            </p>
            <div className="space-y-4 pt-4">
              <a
                href="mailto:contacto@datofoliopro.com"
                className="inline-flex items-center gap-3 text-base font-medium transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                  <Mail className="h-5 w-5" />
                </div>
                contacto@datofoliopro.com
              </a>
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="secondary"
                    size="icon"
                    asChild
                    aria-label={link.name}
                  >
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full">
            <Form {...form}>
              <form action={formAction} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre *</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="tu@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu empresa (opcional)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntame sobre tu proyecto..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SubmitButton />
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
