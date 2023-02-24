import { client } from "./contentfulClient";
import { queryScheme } from "./schemes";

export const getEntries = async (bookCategory: string) => {
  const query = await client.getEntries({
    content_type: "book",
    "fields.category": bookCategory,
  });
  const result = queryScheme.parse(query);
  return result;
};
