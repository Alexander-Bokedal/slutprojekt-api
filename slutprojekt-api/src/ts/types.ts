export type ArmorItem = {
  id: number;
  type: string;
  name: string;
  resistances: Resistances;
  defense: Defense;
  armorSet: ArmorSet;
  assets: Assets;
};
//FIX:Change RawArmorItem to take in any properties
export type RawArmorItem = {
  id: number;
  type: string;
  rank: string;
  rarity: number;
  defense: Defense;
  resistances: Resistances;
  attributes: Attributes;
  name: string;
  slots: Slot[];
  skills: Skill[];
  armorSet: ArmorSet;
  assets: Assets;
  crafting: Crafting;
};

export type Assets = {
  imageMale: string;
  imageFemale: string;
} | null;

export type Defense = {
  base: number;
  max: number;
  augmented: number;
};

export type Resistances = {
  fire: number;
  water: number;
  ice: number;
  thunder: number;
  dragon: number;
};

export type Attributes = {};

export type Slot = {
  rank: number;
};

export type Skill = {
  id: number;
  level: number;
  modifiers: Modifiers;
  description: string;
  skill: number;
  skillName: string;
};

export type Modifiers = {
  [key: string]: any;
};

export type ArmorSet = {
  id: number;
  rank: string;
  name: string;
  pieces: number[];
  bonus: number | null;
};

export type Crafting = {
  materials: any[];
};
