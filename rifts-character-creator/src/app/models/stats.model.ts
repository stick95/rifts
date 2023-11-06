export class Attribute {
  max_value: number = 0;
  rolls: Roll[] = [];
  modifiers: Modifier[] = [];
  buffs: Modifier[] = [];

  constructor(addRolls: Roll[] = []) {
    this.rolls = addRolls;
  }

  buffed_max = this.max_value + this.buffs.reduce((sum, current) => sum + current.modifier, 0);
}

export class Stat extends Attribute {
  current_value = 0;

  constructor(addRolls: Roll[] = []) {
    super(addRolls);
  }
}

export interface Roll {
  source: string;
  dice: number;
  pips: number;
  multiplier: number;
  modifier: number;
  value?: number;
  exploding_gte?: number;
  exploding_roll?: Roll;
}

export interface Modifier {
  source: string;
  modifier: number;
}

export const newAttributeRoll:Roll = {
  source: 'new', dice: 3, pips: 6, multiplier: 1, modifier:0, exploding_gte: 16,
  exploding_roll: {
    source: 'new bonus', dice: 1, pips: 6, multiplier: 1, modifier: 0, exploding_gte: 6,
    exploding_roll: {
      source: 'new bonus', dice: 1, pips: 6, multiplier: 1, modifier: 0
    }
  }
}

export const oneDSix: Roll = {
  source: 'new', dice: 1, pips: 6, multiplier: 1, modifier:0
}



