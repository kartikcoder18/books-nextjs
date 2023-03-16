import "./globals.css";
import Intro from "./Intro";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Intro />
        {children}
        <footer>
          Made with ☕ by{" "}
          <a
            href="https://github.com/ralacerda"
            target="_blank"
            rel="noreferrer"
          >
            Renato Lacerda
          </a>
        </footer>
      </body>
    </html>
  );
}
