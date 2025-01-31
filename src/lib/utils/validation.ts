import { z } from 'zod'

export const resourceSchema = z.object({
  title: z.string().min(3).max(100),
  url: z.string().url(),
  description: z.string().min(10).max(500),
  category: z.string().min(1),
  tags: z.array(z.string().min(2)).max(5),
})