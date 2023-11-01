import {Occ,Rcc} from "./classes.model";

export interface Character {
  id?: number;
  name: string;
  rccDetails?: Rcc;
  occDetails?: Occ;
  userDetails?: object;
  currentStats?: object;
  maxStats?: object;
  level?: number;
  user: number;
  age?: number;
  rcc?: number;
  occ?: number;
}
