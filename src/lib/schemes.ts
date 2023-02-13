import { z } from "zod";

export const postFields = z.object({
  title: z.string(),
  content: z.any(),
  codepenHash: z.string(),
  slug: z.string(),
});

export const postScheme = z.object({
  sys: z.object({ id: z.string() }),
  fields: postFields,
});

export const queryScheme = z.object({
  total: z.number(),
  items: z.array(postScheme),
});
