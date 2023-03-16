import "sanitize.css";
import "sanitize.css/typography.css";
import BookList from "./BookList";

export default async function Home() {
  const nonFictionList: JSX.Element = await BookList({ name: "Non-fiction" });
  const fictionList: JSX.Element = await BookList({ name: "Fiction" });
  const technicalList: JSX.Element = await BookList({ name: "Technical" });

  return (
    <main>
      {nonFictionList} {fictionList} {technicalList}
    </main>
  );
}
