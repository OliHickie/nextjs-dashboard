import { CustomerForceType } from "../types/CustomerForce.types";
import data from "@/data/CustomerForce.json";

export const getCustomerForce = async (): Promise<CustomerForceType> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.data;
};
