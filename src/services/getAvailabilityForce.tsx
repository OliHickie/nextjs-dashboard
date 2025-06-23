import { AvailabilityForce } from "@/types/AvailabilityForce.types";
import data from "@/data/AvailabilityForce.json";

export const getAvailabilityForce = async (
  buildingId: number
): Promise<AvailabilityForce[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.filter((item) => item.buildingId === buildingId);
};
