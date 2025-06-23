'use client'

import BuildingNameMenu from "@/components/buildingNameMenu/BuildingNameMenu";
import Meetings from "@/components/meetings/Meetings";
import CustomerForce from "@/components/customerForce/CustomerForce";
import { useBuilding } from "@/context/BuildingContext";

import styles from "./page.module.scss";

export default function Home() {

  const { buildingId } = useBuilding();

  return (
    <div className={`global-main-container ${styles.container}`}>
      <div className="global-header">
        <h1>Hey, Joe</h1>
        <BuildingNameMenu />
      </div>
      <div className={styles.contentLayout}>
        { buildingId ? (
          <>
          <section className={styles.leftSection}>
            <Meetings />
          </section>
          <section className={styles.rightSection}>
            <CustomerForce />
          </section>
          </>
        ) : (
          <>
            <p>Loading buildings</p>
          </>
        )}
      </div>
    </div>
  );
}
