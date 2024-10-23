import style from "./layout.module.css";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>🎧 Song Jin 🎧</Link>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
