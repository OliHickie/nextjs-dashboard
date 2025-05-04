'use client'

import { useEffect, useState } from "react"; 
import SelectMenu from "@/components/selectMenu/SelectMenu";
import { getBuildingNames } from "@/services/getBuildingNames.services";
import styles from "./BuildingNameMenu.module.scss";


const BuildingNameMenu = () => {
  const [buildings, setBuildings] = useState<{ id: string; label: string }[]>([]);

  useEffect(() => {
    const fetchBuildingNames = async () => {
      try {
        const data = await getBuildingNames();
        const mappedBuildings = data.map(building => ({
          id: building.id,
          label: building.name,
        }));
        setBuildings(mappedBuildings);
      } catch (error) {
        console.error("Error fetching building names:", error);
      }
    };

    fetchBuildingNames();
  }, []);

  return (
    <SelectMenu
      options={buildings}
      className={styles.selectMenu}
      ariaLabel="Building name select" 
    />
  );
};

export default BuildingNameMenu;
