import { client } from "./contentfulClient";
import { queryScheme } from "./schemes";

export const getEntries = async (entryType: string) => {
  const query = await client.getEntries({ content_type: entryType });
  const result = queryScheme.parse(query);
  return result;
};

export const getEntryBySlug = async (slug: string, entryType: string) => {
  const query = await client.getEntries({
    content_type: entryType,
    "fields.slug": slug,
  });
  const result = queryScheme.parse(query);
  return result;
};
