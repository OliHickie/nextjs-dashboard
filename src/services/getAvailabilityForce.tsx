import { AvailabilityForce } from "@/types/AvailabilityForce.types";
import data from "@/data/AvailabilityForce.json";

export const getAvailabilityForce = async (): Promise<AvailabilityForce[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.data;
};
