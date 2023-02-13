import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <h1> My blog</h1>
        {children}
      </body>
    </html>
  );
}
