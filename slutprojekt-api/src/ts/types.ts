export type ArmorItem = {
  id: number;
  type: string;
  name: string;
  resistances: Resistances;
  defense: Defense;
  armorSet: ArmorSet;
  assets?: Assets;
  gridPlacement?: string;
  size?: string;
};
export type WeaponItem = {
  id: number;
  name: string;
  type: string;
  attack: { display: number; raw: number };
  damageType: string;
  assets?: { icon: string; image: string };
  gridPlacement?: string;
  size?: string;
};
export type RawWeaponItem = {
  [key: string]: any;
};
export type RawArmorItem = {
  [key: string]: any;
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

export type ArmorSet = {
  id: number;
  rank: string;
  name: string;
  pieces: number[];
  bonus: number | null;
};

export type gridItems = {
  id: number;
  type: string;
  size: string;
  gridPlacement: string;
  backgroundImage: string;
};
