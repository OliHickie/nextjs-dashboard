import { Ticket } from "@/types/Tickets.types";
import { tickets } from "@/data/IssueForce.json";

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return tickets;
};