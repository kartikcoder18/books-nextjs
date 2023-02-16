import { z } from "zod";

export const bookFields = z.object({
  bookTitle: z.string(),
  author: z.string(),
  status: z.enum(["Read", "Unread", "Started", "Recommended"]),
  coverLink: z.string(),
  highlight: z.any().optional(),
  publisher: z.string(),
});

export const bookScheme = z.object({
  sys: z.object({ id: z.string() }),
  fields: bookFields,
});

export const queryScheme = z.object({
  total: z.number(),
  items: z.array(bookScheme),
});
