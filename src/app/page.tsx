import { getEntries } from "@/lib/contentful";
import BookCard from "./BookCard";
import "sanitize.css";
import "sanitize.css/typography.css";

export default async function Home() {
  const blogPosts = await getEntries("Fiction");
  return (
    <main>
      <h1>Books</h1>
      <h2>Fiction</h2>
      <ul className="book-grid">
        {blogPosts.items.map((item) => (
          <BookCard props={item.fields} key={item.sys.id} />
        ))}
      </ul>
    </main>
  );
}
