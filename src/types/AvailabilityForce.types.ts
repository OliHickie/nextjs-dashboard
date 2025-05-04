export type AvailabilityForce = {
  id: number;
  company: {
    id: number;
    name: string;
  };
  room: string;
  time: {
    start: string;
    end: string;
  };
  createdAt: string;
};
