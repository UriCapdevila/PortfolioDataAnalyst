'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un correo electrónico válido.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

export type ContactState = {
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error de validación. Por favor, revisa los campos.',
      success: false,
    };
  }

  // Simulate saving to a database
  console.log('New contact form submission:');
  console.log(validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
    success: true,
  };
}
