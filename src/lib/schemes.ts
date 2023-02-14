import { z } from "zod";

export const postFields = z.object({
  bookTitle: z.string(),
  author: z.string(),
  recomendation: z.boolean(),
  finished: z.boolean(),
  coverLink: z.string(),
  status: z.any(),
});

export const postScheme = z.object({
  sys: z.object({ id: z.string() }),
  fields: postFields,
});

export const queryScheme = z.object({
  total: z.number(),
  items: z.array(postScheme),
});
