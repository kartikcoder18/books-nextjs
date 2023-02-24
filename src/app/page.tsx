import { getEntries } from "@/lib/contentful";
import BookCard from "./BookCard";
import "sanitize.css";
import "sanitize.css/typography.css";

export default async function Home() {
  const blogPosts = await getEntries("book");
  return (
    <main>
      <h1>Books</h1>
      <ul>
        {blogPosts.items.map((item) => (
          <li key={item.sys.id}>
            <BookCard props={item.fields} />
          </li>
        ))}
      </ul>
    </main>
  );
}
