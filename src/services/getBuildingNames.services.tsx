import { BuildingNames } from '@/types/BuildingNames.types';

export const getBuildingNames = async (): Promise<BuildingNames[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { id: '1', name: 'Stanley Building' },
    { id: '2', name: 'York House' },
    { id: '3', name: 'The Jellicoe' },
  ];
};
