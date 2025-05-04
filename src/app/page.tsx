import BuildingNameMenu from "@/components/buildingNameMenu/BuildingNameMenu";
import Meetings from "@/components/meetings/Meetings";

import styles from "./page.module.scss";

export default function Home() {

  return (
    <div className={`global-main-container ${styles.container}`}>
    {/* <div className="main-container"> */}
      <div className="global-header">
        <h1>Hey, Joe</h1>
        <BuildingNameMenu />
      </div>
      <div className={styles.contentLayout}>
        <section className={styles.leftSection}>
          <Meetings />
        </section>
        <div className={styles.rightSection}>
          <section>
            hello
          </section>
          <section>
            hello 2
          </section>
        </div>
      </div>
    </div>
  );
}
