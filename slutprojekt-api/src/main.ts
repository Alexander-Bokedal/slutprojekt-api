import "./main.css";
import {
  fetchAndStoreArmorData,
  getStoredArmorData,
} from "./ts/fetchFunctions";
const debugging = async (searchByType: string) => {
  const storedData = await getStoredArmorData();
  if (!storedData) {
    console.log("dont be a little bitch about it");
    return;
  }
  const itemsOfSpecificType = storedData.filter(
    (item) => item.type === searchByType,
  );
  console.log(itemsOfSpecificType);
};
document
  .querySelector<HTMLButtonElement>(".button")
  ?.addEventListener("click", fetchAndStoreArmorData);

document
  .querySelector<HTMLButtonElement>("#gloves")
  ?.addEventListener("click", () => debugging("gloves"));

document
  .querySelector<HTMLButtonElement>("#waist")
  ?.addEventListener("click", () => debugging("waist"));

document
  .querySelector<HTMLButtonElement>("#head")
  ?.addEventListener("click", () => debugging("head"));

document
  .querySelector<HTMLButtonElement>("#legs")
  ?.addEventListener("click", () => debugging("legs"));

document
  .querySelector<HTMLButtonElement>("#chest")
  ?.addEventListener("click", () => debugging("chest"));
//TODO: Put in seperate file for items
