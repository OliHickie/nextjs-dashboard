import type { Metadata } from "next";
import styles from './layout.module.scss'

// Components
import MainNav from "@/components/navigations/MainNav";
import SecondaryNav from "@/components/navigations/SecondaryNav";


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
