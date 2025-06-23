import type { Metadata } from "next";
import styles from './layout.module.scss'
import MainNav from "@/components/navigations/MainNav";
import SecondaryNav from "@/components/navigations/SecondaryNav";
import { BuildingProvider } from "@/context/BuildingContext";


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
        <BuildingProvider>
          <div className={styles.mainNav}>
            <MainNav />
          </div>
            <main className={styles.mainContent}>
              {children}
            </main>
          <div className={styles.secondaryNav}>
            <SecondaryNav />
          </div>
        </BuildingProvider>
      </body>
    </html>
  );
}
