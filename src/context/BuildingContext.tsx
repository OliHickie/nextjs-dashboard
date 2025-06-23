'use client';

import { createContext, useState, useContext } from 'react';

type BuildingContextType = {
  buildingId: number | null;
  setBuildingId: (id: number) => void;
};

const BuildingContext = createContext<BuildingContextType | undefined>(undefined);

export const BuildingProvider = ({ children }: { children: React.ReactNode }) => {
  const [buildingId, setBuildingId] = useState<number | null>(null);

  return (
    <BuildingContext.Provider value={{ buildingId, setBuildingId }}>
      {children}
    </BuildingContext.Provider>
  );
};

export const useBuilding = () => {
  const context = useContext(BuildingContext);
  if (!context) {
    throw new Error('useBuilding must be used within a BuildingProvider');
  }
  return context;
};
