import {RawArmorItem, ArmorItem} from 'types.ts'
export const fetchAndStoreArmorData = async (): Promise<void> => {
  try {
    const storedData = await getStoredArmorData();
    if (storedData) {
    console.log("Data is stored locally!");
      console.log(storedData);
    return;
    }

    // Fetch data from the API
    const response = await fetch('https://mhw-db.com/armor');
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the full JSON data from the response
    const data: RawArmorItem[] = await response.json();

    // Filter and map the data to include only the desired properties
    const filteredData: ArmorItem[] = data.map(item => ({
      id: item.id,
      type: item.type,
      name: item.name,
      resistances: item.resistances,  // You may need additional processing here if it's a more complex structure
      defense: item.defense,
      armorSet: item.armorSet,
      assets: item.assets,
    }));

    // Store the filtered data in localStorage
    localStorage.setItem('armorData', JSON.stringify(filteredData));

    console.log('Data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const getStoredArmorData = async (): Promise<ArmorItem[] | null> => {
  const data = localStorage.getItem('armorData');
  if (data) {
    return JSON.parse(data) as ArmorItem[];
  } else {
    console.log('No data found in localStorage');
    return null;
  }
}

