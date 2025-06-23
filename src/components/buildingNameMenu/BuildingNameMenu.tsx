'use client'

import { useEffect, useState } from "react"; 
import SelectMenu from "@/components/selectMenu/SelectMenu";
import { getBuildingNames } from "@/services/getBuildingNames.services";
import { useBuilding } from "@/context/BuildingContext";
import styles from "./BuildingNameMenu.module.scss";

const BuildingNameMenu = () => {
  const [buildings, setBuildings] = useState<{ id: string; label: string }[]>([]);
  const { buildingId, setBuildingId } = useBuilding();

  const selectBuilding = (id: string) => {
    const numericId = Number(id);
    if (!isNaN(numericId)) {
      setBuildingId(numericId);
    }
  };

  useEffect(() => {
    const fetchBuildingNames = async () => {
      try {
        const data = await getBuildingNames();
        const mappedBuildings = data.map(building => ({
          id: building.id,
          label: building.name,
        }));
        setBuildings(mappedBuildings);

        if (mappedBuildings.length > 0 && buildingId === null) {
          selectBuilding(mappedBuildings[0].id);
        }
      } catch (error) {
        console.error("Error fetching building names:", error);
      }
    };

    fetchBuildingNames();
  }, [buildingId, setBuildingId]);

  return (
    <SelectMenu
      options={buildings}
      className={styles.selectMenu}
      ariaLabel="Building name select"
      onChange={selectBuilding}
    />
  );
};

export default BuildingNameMenu;
