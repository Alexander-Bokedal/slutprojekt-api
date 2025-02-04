import "./main.css";
import {
  fetchAndStoreArmorData,
  //getStoredArmorData,
  fetchAndStoreWeaponData,
  //getStoredWeaponData,
} from "./ts/fetchFunctions";
import { subscribeToState } from "./ts/state";
import { generateItemsGrid } from "./scss/components/item-boxes/item-boxes";
import { informationBar } from "./scss/components/informationBar/informationBar";
fetchAndStoreWeaponData();
fetchAndStoreArmorData("head");
generateItemsGrid();
subscribeToState(() => {
  console.log("State has changed. Regenerating item grid...");
  generateItemsGrid(); // Regenerate the grid when the state changes
});
informationBar();
