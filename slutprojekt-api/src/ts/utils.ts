import { WeaponItem, ArmorItem } from "./types";
export function isWeaponItem(item: WeaponItem | ArmorItem): item is WeaponItem {
  return (item as WeaponItem).attack !== undefined;
}
