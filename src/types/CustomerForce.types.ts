// Created separately to allow for scalability and maintainability

export type Viewing = {
  id: number;
  room: string;
  company: string;
  date: string;
  createdAt: string;
};

export type Move = {
  id: number;
  room: string;
  company: string;
  date: string;
  createdAt: string;
};

export type CustomerForce = {
  viewings: Viewing[];
  moves: Move[];
};
