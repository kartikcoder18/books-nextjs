import { client, getEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import Codepen from "../Codepen";
import { z } from "zod";

const postScheme = z.object({
  title: z.string(),
  content: z.any(),
  codepenHash: z.string(),
});

async function getBlogPost(slug: string) {
  const blogPost = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });
  return blogPost;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const query = await getBlogPost(slug);
  if (!query.items[0]) {
    notFound();
  }
  const blog = postScheme.parse(query.items[0].fields);
  return (
    <article>
      <h1>{blog.title}</h1>
      {documentToReactComponents(blog.content)}
      <Codepen hash={blog.codepenHash} />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getEntries("post");
  return posts.items.map((item) => item.fields);
}
