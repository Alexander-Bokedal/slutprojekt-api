import "./_searchModal.scss";
import { isWeaponItem } from "../../../ts/utils";
import { changeArmor, changeWeapon, weapons, armor } from "../../../ts/state";

import { ArmorItem, WeaponItem } from "../../../ts/types";
import {
  fetchAndStoreWeaponData,
  getStoredWeaponData,
  fetchAndStoreArmorData,
  getStoredArmorData,
} from "../../../ts/fetchFunctions";
export const searchModal = (itemType: string) => {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";

  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.textContent = `Search for ${itemType}`;

  const inputField = document.createElement("input");
  inputField.className = "modal-input";
  inputField.placeholder = `Search for ${itemType}`;
  const filterContainer = document.createElement("div");
  filterContainer.className = "filter-container";

  const resistances = ["Fire", "Water", "Ice", "Thunder", "Dragon"];
  const selectedResistances = new Set<string>();

  resistances.forEach((resistance) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = resistance.toLowerCase();

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        selectedResistances.add(checkbox.value);
      } else {
        selectedResistances.delete(checkbox.value);
      }
      populateResults(currentFetchedItems.slice(0, 50));
    });

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(resistance));
    filterContainer.appendChild(label);
  });
  const closeButton = document.createElement("button");
  closeButton.className = "modal-close";
  closeButton.textContent = "Close";

  const saveButton = document.createElement("button");
  saveButton.className = "modal-save";
  saveButton.textContent = "Save";

  const resultList = document.createElement("ul");
  resultList.className = "modal-results";

  modalContainer.appendChild(modalHeader);
  modalContainer.appendChild(inputField);
  modalContainer.appendChild(resultList);
  modalContainer.appendChild(filterContainer);
  modalContainer.appendChild(closeButton);
  modalContainer.appendChild(saveButton);

  modalOverlay.appendChild(modalContainer);

  closeButton.addEventListener("click", () => {
    document.body.removeChild(modalOverlay);
  });
  let weaponToBeAddedToState: WeaponItem;
  let armorToBeAddedToState: ArmorItem;
  saveButton.addEventListener("click", () => {
    if (weaponToBeAddedToState) {
      console.log("Before function", weapons);
      changeWeapon(weaponToBeAddedToState);
      console.log("After function", weapons);
    }
    if (armorToBeAddedToState) {
      changeArmor(armorToBeAddedToState);
      console.log("Updated state", armor);
    }
    document.body.removeChild(modalOverlay);
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      document.body.removeChild(modalOverlay);
    }
  });

  const searchButton = document.createElement("button");
  searchButton.className = "dropbtn";
  searchButton.textContent = "Search";

  let currentFetchedItems: ArmorItem[];

  searchButton.addEventListener("click", async () => {
    document.body.appendChild(modalOverlay);
    let currentFunction: Function;

    if (itemType != "weapon") {
      await fetchAndStoreArmorData(itemType);
      currentFunction = getStoredArmorData;
    } else {
      await fetchAndStoreWeaponData();
      currentFunction = getStoredWeaponData;
    }

    const items = await currentFunction(itemType);
    if (items) {
      currentFetchedItems = items;
      populateResults(currentFetchedItems.slice(0, 50));
      console.log("Currently fetched items", currentFetchedItems);
    } else {
      populateResults([]);
    }
  });
  let searchTimer: number;
  const populateResults = (items: (ArmorItem | WeaponItem)[]): void => {
    resultList.innerHTML = "";

    const resistanceKeys = [
      "fire",
      "water",
      "ice",
      "thunder",
      "dragon",
    ] as const;
    type ResistanceKey = (typeof resistanceKeys)[number];

    const filteredItems = items.filter((item) => {
      if (selectedResistances.size > 0 && !isWeaponItem(item)) {
        for (let resistance of selectedResistances) {
          if (
            item.resistances &&
            item.resistances[resistance as ResistanceKey] <= 0
          ) {
            return false;
          }
        }
      }
      return true;
    });

    if (filteredItems.length === 0) {
      const noResults = document.createElement("li");
      noResults.textContent = "No items found.";
      resultList.appendChild(noResults);
      return;
    }

    filteredItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.name;
      listItem.className = "modal-result-item";
      resultList.appendChild(listItem);

      listItem.addEventListener("click", () => {
        inputField.value = item.name;
        resultList.innerHTML = "";
        if (isWeaponItem(item)) {
          weaponToBeAddedToState = item;
        } else {
          armorToBeAddedToState = item;
        }
      });
    });
  };

  inputField.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      const query = inputField.value.toLowerCase();
      const filteredItems = currentFetchedItems.filter((item) =>
        item.name.toLowerCase().includes(query),
      );
      populateResults(filteredItems.slice(0, 50));
    }, 500);
  });
  return searchButton;
};
