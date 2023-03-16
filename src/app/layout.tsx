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
        <h1> Book Lists </h1>
        {children}
      </body>
    </html>
  );
}
