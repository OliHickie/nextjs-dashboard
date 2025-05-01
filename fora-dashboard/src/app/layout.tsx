import type { Metadata } from "next";
import "./globals.css";
import styles from './layout.module.scss'

// Components
import MainNav from "@/components/MainNav/MainNav";
import SecondaryNav from "@/components/SecondaryNav/SecondaryNav";


export const metadata: Metadata = {
  title: "Fora Dashboard",
  description: "Prototype for the Fora Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.mainNav}>
          <MainNav />
        </nav>
        <main className={styles.mainContent}>
          {children}
        </main>
        <aside className={styles.secondaryNav}>
          <SecondaryNav />
        </aside>
      </body>
    </html>
  );
}
