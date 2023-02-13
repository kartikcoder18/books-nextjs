import { getEntryBySlug, getEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import Codepen from "../Codepen";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const query = await getEntryBySlug(slug, "post");
  if (!query.total) {
    notFound();
  }
  const post = query.items[0].fields;
  return (
    <article>
      <h1>{post.title}</h1>
      {documentToReactComponents(post.content)}
      <Codepen hash={post.codepenHash} />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getEntries("post");
  return posts.items.map((item) => item.fields);
}
