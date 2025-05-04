import BuildingNameMenu from "@/components/buildingNameMenu/BuildingNameMenu";

import styles from "./page.module.scss";

export default function Home() {

  return (
    <div className={`main-container ${styles.container}`}>
    {/* <div className="main-container"> */}
      <div className="header">
        <h1>Hey, Joe</h1>
        <BuildingNameMenu />
      </div>
    </div>
  );
}
