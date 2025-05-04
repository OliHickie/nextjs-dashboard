export type AvailabilityForce = {
  id: number;
  company: {
    id: number;
    name: string;
  };
  name: string;
  time: {
    start: string;
    end: string;
  };
  createdAt: string;
};
