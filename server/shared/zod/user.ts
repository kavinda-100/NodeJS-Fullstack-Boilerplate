import z from 'zod';

export const zodUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
});

export type zodUserType = z.infer<typeof zodUserSchema>;