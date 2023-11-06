import {Occ,Rcc} from "./classes.model";
import {Attribute, Stat, newAttributeRoll, oneDSix} from "./stats.model";

class User {
}

export class Character {
  id?: number;
  name?: string;
  rccDetails?: Rcc;
  occDetails?: Occ;
  userDetails?: object;
  level: number = 1;
  user?: number;
  age?: number;
  rcc?: number;
  occ?: number;
  iq: Attribute;
  me: Attribute;
  ma: Attribute;
  ps: Attribute;
  pp: Attribute;
  pe: Attribute;
  pb: Attribute;
  spd: Attribute;
  hp: Stat;
  sdc: Stat;
  mdc: Stat;

  constructor() {
    this.iq = new Attribute([newAttributeRoll]);
    this.me = new Attribute([newAttributeRoll]);
    this.ma = new Attribute([newAttributeRoll]);
    this.ps = new Attribute([newAttributeRoll]);
    this.pp = new Attribute([newAttributeRoll]);
    this.pe = new Attribute([newAttributeRoll]);
    this.pb = new Attribute([newAttributeRoll]);
    this.spd = new Attribute([newAttributeRoll]);
    this.hp = new Stat([oneDSix]);
    this.sdc = new Stat();
    this.mdc = new Stat();
  }
}
