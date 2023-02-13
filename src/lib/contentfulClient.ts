import { createClient } from "contentful";

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error("Missing Contentful space id");
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("Missing Contentful access token");
}

const space_id = process.env.CONTENTFUL_SPACE_ID as string;
const access_token = process.env.CONTENTFUL_ACCESS_TOKEN as string;

export const client = createClient({
  space: space_id,
  accessToken: access_token,
});
