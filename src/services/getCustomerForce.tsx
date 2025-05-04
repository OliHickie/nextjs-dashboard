import { CustomerForce } from "../types/CustomerForce.types";
import data from "@/data/CustomerForce.json";

export const getAvailabilityForce = async (): Promise<CustomerForce> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.data;
};
