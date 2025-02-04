import { ArmorItem, WeaponItem } from "./types";

export let weapons: WeaponItem[] = [
  {
    id: 1,
    name: "Buster Sword 1",
    type: "weapon",
    attack: {
      display: 384,
      raw: 80,
    },
    damageType: "sever",
    gridPlacement: "weapon",
    assets: {
      icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
      image:
        "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png",
    },
    size: "large",
  },
];

export const armor: ArmorItem[] = [
  {
    id: 1,
    type: "head",
    name: "Leather Headgear",
    resistances: {
      fire: 2,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    defense: {
      base: 2,
      max: 38,
      augmented: 68,
    },
    armorSet: {
      id: 1,
      rank: "low",
      name: "Leather",
      pieces: [1, 2, 3, 4, 5],
      bonus: null,
    },
    assets: {
      imageMale:
        "https://assets.mhw-db.com/armor/e7cfa0acf10c8439b78639a0f59c2eb9ee9e2923.c8685d97610f608eae4850d6f53b9226.png",
      imageFemale:
        "https://assets.mhw-db.com/armor/33c032e75365c3d3ee4ee7365395fb1bca1e22c3.d3343d2b227e3b9be99d001ad09ba31f.png",
    },
    gridPlacement: "middle",
    size: "medium",
  },
  {
    id: 2,
    type: "chest",
    name: "Leather Mail",
    resistances: {
      fire: 2,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    defense: {
      base: 2,
      max: 38,
      augmented: 68,
    },
    armorSet: {
      id: 1,
      rank: "low",
      name: "Leather",
      pieces: [1, 2, 3, 4, 5],
      bonus: null,
    },
    assets: {
      imageMale:
        "https://assets.mhw-db.com/armor/8c083e8d252d2d86456fda2135a8a16b21679ec6.4856a15b707ce6c14d2fb143c1513696.png",
      imageFemale:
        "https://assets.mhw-db.com/armor/9d45d14f681e8c9fffeda9ab6a05b81924a94a4d.6573ddbc07ad7ed19f5745fdf3d210ca.png",
    },
    gridPlacement: "middle",
    size: "large",
  },
  {
    id: 3,
    type: "gloves",
    name: "Leather Gloves",
    resistances: {
      fire: 2,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    defense: {
      base: 2,
      max: 38,
      augmented: 68,
    },
    armorSet: {
      id: 1,
      rank: "low",
      name: "Leather",
      pieces: [1, 2, 3, 4, 5],
      bonus: null,
    },
    assets: {
      imageMale:
        "https://assets.mhw-db.com/armor/1f80c6c43da88f5977765a7c6c9baaf52e8ec5c3.4ffa6d0b149ce6f8f1c15a98ea4e22f5.png",
      imageFemale:
        "https://assets.mhw-db.com/armor/e138d3fca0ac440b0cf87017eb3dd80d6297c0b3.0ef74ddfe477b1f7e364b13b644f3f4b.png",
    },
    gridPlacement: "gloves",
    size: "medium",
  },
  {
    id: 4,
    type: "waist",
    name: "Leather Belt",
    resistances: {
      fire: 2,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    defense: {
      base: 2,
      max: 38,
      augmented: 68,
    },
    armorSet: {
      id: 1,
      rank: "low",
      name: "Leather",
      pieces: [1, 2, 3, 4, 5],
      bonus: null,
    },
    assets: {
      imageMale:
        "https://assets.mhw-db.com/armor/e41b9bc0eabf3d67a7a5641ec1403639835533a2.6e12383e9f0d117db879b90e9f7ab89c.png",
      imageFemale:
        "https://assets.mhw-db.com/armor/dbaa32d253815b28890e03d92ac1df47b65b0892.ed05d7ab57f767824aa2f4df97260a68.png",
    },
    gridPlacement: "middle",
    size: "medium",
  },
  {
    id: 5,
    type: "legs",
    name: "Leather Trousers",
    resistances: {
      fire: 2,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    defense: {
      base: 2,
      max: 38,
      augmented: 68,
    },
    armorSet: {
      id: 1,
      rank: "low",
      name: "Leather",
      pieces: [1, 2, 3, 4, 5],
      bonus: null,
    },
    assets: {
      imageMale:
        "https://assets.mhw-db.com/armor/07532b6d0922c66d3d569108506880ac1790439c.9d49413bced4ac9a9cbcda445eb29eb2.png",
      imageFemale:
        "https://assets.mhw-db.com/armor/cef766ff4d22e81f51d877b865ec9c849b0bb296.2a6c1688787666bb1ee5ef1d7e093917.png",
    },
    gridPlacement: "middle",
    size: "medium",
  },
];

const subscribers: Array<() => void> = []; // Array to hold subscriber functions

// Function to subscribe to state updates
export const subscribeToState = (callback: () => void) => {
  subscribers.push(callback);
};

// Function to notify all subscribers when the state changes
const notifySubscribers = () => {
  subscribers.forEach((callback) => callback());
};

export const changeArmor = (item: ArmorItem) => {
  if (item.type === "gloves") {
    const index = armor.findIndex((armorItem) => armorItem.type === "gloves");
    armor[index] = { ...item, gridPlacement: "gloves", size: "medium" };
  }
  if (item.type === "head") {
    const index = armor.findIndex((armorItem) => armorItem.type === "head");
    armor[index] = { ...item, gridPlacement: "middle", size: "medium" };
  }
  if (item.type === "chest") {
    const index = armor.findIndex((armorItem) => armorItem.type === "chest");
    armor[index] = { ...item, gridPlacement: "middle", size: "large" };
  }
  if (item.type === "waist") {
    const index = armor.findIndex((armorItem) => armorItem.type === "waist");
    armor[index] = { ...item, gridPlacement: "middle", size: "medium" };
  }
  if (item.type === "legs") {
    const index = armor.findIndex((armorItem) => armorItem.type === "legs");
    armor[index] = { ...item, gridPlacement: "middle", size: "large" };
  }
  notifySubscribers();
};

export const changeWeapon = (item: WeaponItem) => {
  weapons[0] = { ...item, gridPlacement: "weapon", size: "large" };
  notifySubscribers();
};
