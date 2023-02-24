import Image from "next/image";
import type { Book } from "@/lib/schemes";
import "./bookcard.css";

export default function BookCard({ props }: { props: Book }) {
  return (
    <div className="book-card">
      <h2>{props.bookTitle}</h2>
      <p className="book-author">{props.author}</p>
      <p className="book-details">
        {props.publisher} ({props.publishedDate})
      </p>
      <div className="book-cover">
        <Image alt="" src={props.coverLink} width="150" height="230" />
      </div>
    </div>
  );
}
