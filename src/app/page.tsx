import { getEntries } from "@/lib/contentful";
import Link from "next/link";

export default async function Home() {
  const blogPosts = await getEntries("post");
  return (
    <main>
      <h1>Hello</h1>
      {blogPosts.items.map((item) => (
        <Link key={item.sys.id} href={`/blog/${item.fields.slug}`}>
          {item.fields.title}
        </Link>
      ))}
    </main>
  );
}
