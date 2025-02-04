import { weapons, armor } from "../../../ts/state";
import placeholderImage from "../../../placeholder.webp";
import { showItemModal } from "../displayItem/displayItem";
import { searchModal } from "../dropdown/searchModal";
import "./item-boxes.scss";
import "../../mixins/_mixins.scss";
export const generateItemsGrid = () => {
  const displayItems = document.querySelector<HTMLDivElement>("#display-items");

  if (!displayItems) {
    console.error('Div with id "display-items" not found.');
    return;
  }

  displayItems.innerHTML = "";

  const gridContainer = document.createElement("div");
  gridContainer.className = "grid-two-columns";

  armor.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.className = `item-container grid-item--${item.gridPlacement} `;

    const gridItem = document.createElement("div");
    gridItem.className = ` item-boxes item-boxes--${item.size}`;
    if (!item.assets) {
      gridItem.style.backgroundImage = `url(${placeholderImage})`;
    } else {
      gridItem.style.backgroundImage = `url(${item.assets.imageFemale})`;
    }

    gridItem.id = item.id.toString();

    gridItem.addEventListener("click", () => {
      showItemModal(item);
    });
    itemContainer.appendChild(gridItem);

    const dropdown = searchModal(`${item.type}`);

    itemContainer.appendChild(dropdown);
    gridContainer.appendChild(itemContainer);
  });
  weapons.forEach((item) => {
    const weaponContainer = document.createElement("div");
    weaponContainer.className = `item-container grid-item--${item.gridPlacement}`;

    const weaponItem = document.createElement("div");
    weaponItem.className = `item-boxes item-boxes--${item.size} grid-item--${item.gridPlacement}`;
    if (!item.assets) {
      weaponItem.style.backgroundImage = `url(${placeholderImage})`;
    } else {
      weaponItem.style.backgroundImage = `url(${item.assets.image})`;
    }
    weaponItem.id = item.id.toString();

    weaponItem.addEventListener("click", () => {
      showItemModal(item);
    });
    weaponContainer.appendChild(weaponItem);
    const dropdown = searchModal("weapon");

    weaponContainer.appendChild(dropdown);
    gridContainer.appendChild(weaponContainer);
  });

  // Append the grid to the displayItems container
  displayItems.appendChild(gridContainer);
};
