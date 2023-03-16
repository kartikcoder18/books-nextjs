import BookCard from "./BookCard";
import { getEntries } from "@/lib/contentful";
import { BookStatus } from "@/lib/schemes";

const sortOrder: Record<BookStatus, number> = {
  Recommended: 0,
  Read: 1,
  Started: 2,
};

export default async function BookList({ name }: { name: string }) {
  const blogPosts = await getEntries(name);
  return (
    <div className="book-category">
      <h2>{name}</h2>
      <ul className="book-grid">
        {blogPosts.items
          .sort(
            (a, b) => sortOrder[a.fields.status] - sortOrder[b.fields.status]
          )
          .map((item) => (
            <BookCard props={item.fields} key={item.sys.id} />
          ))}
      </ul>
    </div>
  );
}
