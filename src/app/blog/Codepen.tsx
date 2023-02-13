import Script from "next/script";

export default function Codepen({ hash }: { hash: string }) {
  return (
    <>
      <p
        className="codepen"
        data-height="600"
        data-default-tab="html,result"
        data-slug-hash={hash}
        data-user="ralacerda"
        style={{ height: "600px" }}
      >
        <a href={`https://codepen.io/ralacerda/pen/${hash}`}>
          See the Pen on Codepen
        </a>
      </p>
      <Script src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
    </>
  );
}
