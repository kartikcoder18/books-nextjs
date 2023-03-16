import Image from "next/image";
import type { Book } from "@/lib/schemes";
import "./bookcard.css";
import Badge from "./Badge";

export default function BookCard({ props }: { props: Book }) {
  return (
    <li className="book-card">
      <div className="badge">
        <Badge status={props.status} />
      </div>
      <div className="book-info">
        <h3>{props.bookTitle}</h3>
        <p className="book-author">{props.author}</p>
        <p className="book-details">
          {props.publisher} ({props.publishedDate})
        </p>
      </div>
      <div className="book-cover">
        <Image
          alt=""
          src={props.coverLink}
          sizes="(max-width: 768px) 100vw, 10vw"
          fill={true}
        />
      </div>
    </li>
  );
}
