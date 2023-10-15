import { z } from 'zod';

/**
 * @desc CMSから取得した値に自動でセットされている値
 */
export const CMSAutoSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.number(),
  updatedAt: z.number(),
  publishedAt: z.number(),
  revisedAt: z.number(),
});

export type CMSAuto = z.infer<typeof CMSAutoSchema>;
