import Image from "next/image";

export default function BookCard({ props }) {
  return (
    <>
      <h2>{props.bookTitle}</h2>
      <p>{props.author}</p>
      <p>{props.status}</p>
      <Image alt="" src={props.coverLink} width="300" height="460" />
      {props.highlight}
    </>
  );
}
