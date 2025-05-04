export type Item = {
  id: number;
  room: string;
  company: string;
  date: string;
  createdAt: string;
};

export type CustomerForceType = {
  viewings: Item[];
  moves: Item[];
};
