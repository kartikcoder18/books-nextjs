import { getEntries } from "@/lib/contentful";
import Image from "next/image";

export default async function Home() {
  const blogPosts = await getEntries("book");
  return (
    <main>
      <h1>Books</h1>
      <ul>
        {blogPosts.items.map((item) => (
          <li key={item.sys.id}>
            <h2>{item.fields.bookTitle}</h2>
            <p>{item.fields.author}</p>
            <p>{item.fields.status}</p>
            <Image
              alt=""
              src={item.fields.coverLink}
              width="300"
              height="400"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
