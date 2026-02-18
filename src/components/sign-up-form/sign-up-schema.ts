import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.email(),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().optional(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export default signUpSchema;
