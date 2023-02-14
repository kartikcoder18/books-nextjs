import { z } from "zod";

export const bookFields = z.object({
  bookTitle: z.string(),
  author: z.string(),
  recomendation: z.boolean(),
  finished: z.boolean(),
  coverLink: z.string(),
  status: z.any(),
});

export const bookScheme = z.object({
  sys: z.object({ id: z.string() }),
  fields: bookFields,
});

export const queryScheme = z.object({
  total: z.number(),
  items: z.array(bookScheme),
});
