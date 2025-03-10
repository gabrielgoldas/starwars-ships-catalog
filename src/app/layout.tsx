import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <header className="header">
          <div className="logo">ESPAÇONAVES DO STAR WARS</div>
          <nav className="navigation">
            <Link className="link" href="/">INÍCIO</Link>
            <Link className="link" href="/spaceships">ESPAÇONAVES</Link>
            <Link className="link" href="/categories">CATEGORIAS</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
