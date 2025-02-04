import { RawArmorItem, ArmorItem, RawWeaponItem, WeaponItem } from "./types";
export const fetchAndStoreArmorData = async (
  itemType: string,
): Promise<void> => {
  try {
    const storedData = await getStoredArmorData(`${itemType}`);
    if (storedData) {
      console.log("Data is stored locally!");
      return;
    }

    // Fetch data from the API
    const response = await fetch("https://mhw-db.com/armor");

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Parse the full JSON data from the response
    const data: RawArmorItem[] = await response.json();

    // Filter and map the data to include only the desired properties
    // WARNING: FIX BROKEN CODE
    const filteredData: ArmorItem[] = data.map((item) => ({
      id: item.id,
      type: item.type,
      name: item.name,
      resistances: item.resistances,
      defense: item.defense,
      armorSet: item.armorSet,
      assets: item.assets,
    }));

    // Store the filtered data in localStorage
    localStorage.setItem("armorData", JSON.stringify(filteredData));

    console.log("Data fetched and stored successfully");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchAndStoreWeaponData = async (): Promise<void> => {
  try {
    const storedData = await getStoredWeaponData();
    if (storedData) {
      console.log("Data is stored locally!");
      return;
    }

    // Fetch data from the API
    const response = await fetch("https://mhw-db.com/weapons");

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Parse the full JSON data from the response
    const data: RawWeaponItem[] = await response.json();

    // Filter and map the data to include only the desired properties
    const filteredData: WeaponItem[] = data.map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      attack: item.attack,
      damageType: item.damageType,
      assets: item.assets,
    }));

    // Store the filtered data in localStorage
    localStorage.setItem("weaponData", JSON.stringify(filteredData));

    console.log("Data fetched and stored successfully");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getStoredArmorData = async (
  itemType: string,
): Promise<ArmorItem[] | null> => {
  const data = localStorage.getItem("armorData");
  if (data) {
    const parsedData = JSON.parse(data) as ArmorItem[];
    console.log(parsedData.filter((item: ArmorItem) => item.type === itemType));
    return parsedData.filter((item: ArmorItem) => item.type === itemType);
  } else {
    console.log("No data found in localStorage");
    return null;
  }
};
export const getStoredWeaponData = async (): Promise<WeaponItem[] | null> => {
  const data = localStorage.getItem("weaponData");
  if (data) {
    return JSON.parse(data) as WeaponItem[];
  } else {
    console.log("No data found in localStorage");
    return null;
  }
};
