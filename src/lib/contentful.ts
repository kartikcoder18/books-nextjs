import { client } from "./contentfulClient";
import { queryScheme } from "./schemes";

export const getEntries = async (entryType: string) => {
  const query = await client.getEntries({ content_type: entryType });
  const result = queryScheme.parse(query);
  return result;
};
