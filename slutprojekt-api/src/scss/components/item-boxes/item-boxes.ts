import { getStoredArmorData } from "../../../ts/fetchFunctions";
import "./item-boxes.scss";
import "../../mixins/_mixins.scss";
export const getItemsByType = async (searchByType: string) => {
  const storedData = await getStoredArmorData();
  if (!storedData) {
    console.log("dont be a little bitch about it");
    return;
  }
  console.log("im right here");
  const itemsOfSpecificType = storedData.filter(
    (item) => item.type === searchByType,
  );
  console.log(itemsOfSpecificType);
};
export const generateItemsGrid = () => {
  const displayItems = document.querySelector<HTMLDivElement>("#display-items");

  if (!displayItems) {
    console.error('Div with id "display-items" not found.');
    return;
  }

  // Define items and their types
  const items = [
    {
      id: "weapon",
      label: "W",
      type: "weapon",
      size: "large",
      gridPlacement: "first",
      backgroundImage:
        "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png",
    },
    {
      id: "head",
      label: "H",
      type: "head",
      size: "medium",
      gridPlacement: "middle",
      backgroundImage:
        "https://assets.mhw-db.com/armor/33c032e75365c3d3ee4ee7365395fb1bca1e22c3.d3343d2b227e3b9be99d001ad09ba31f.png",
    },
    {
      id: "chest",
      label: "C",
      type: "chest",
      size: "large",
      gridPlacement: "middle",
      backgroundImage:
        "https://assets.mhw-db.com/armor/9d45d14f681e8c9fffeda9ab6a05b81924a94a4d.6573ddbc07ad7ed19f5745fdf3d210ca.png",
    },
    {
      id: "gloves",
      label: "G",
      type: "gloves",
      size: "medium",
      gridPlacement: "last",
      backgroundImage:
        "https://assets.mhw-db.com/armor/e138d3fca0ac440b0cf87017eb3dd80d6297c0b3.0ef74ddfe477b1f7e364b13b644f3f4b.png",
    },
    {
      id: "waist",
      label: "W",
      type: "waist",
      size: "small",
      gridPlacement: "middle",
      backgroundImage:
        "https://assets.mhw-db.com/armor/dbaa32d253815b28890e03d92ac1df47b65b0892.ed05d7ab57f767824aa2f4df97260a68.png",
    },
    {
      id: "legs",
      label: "L",
      type: "legs",
      size: "large",
      gridPlacement: "middle",
      backgroundImage:
        "https://assets.mhw-db.com/armor/cef766ff4d22e81f51d877b865ec9c849b0bb296.2a6c1688787666bb1ee5ef1d7e093917.png",
    },
  ];

  // Clear any existing content
  displayItems.innerHTML = "";

  // Create grid container
  const gridContainer = document.createElement("div");
  gridContainer.className = "grid-three-columns";

  // Create and append items
  items.forEach((item) => {
    const gridItem = document.createElement("div");
    gridItem.className = `grid-item--${item.gridPlacement} item-boxes item-boxes--${item.size} `;
    gridItem.style.backgroundImage = `url(${item.backgroundImage}`;
    gridItem.id = item.id;
    gridItem.textContent = item.label;

    // Attach event listener to each element
    gridItem.addEventListener("click", () => getItemsByType(item.type));

    gridContainer.appendChild(gridItem);
  });

  // Append the grid to the displayItems container
  displayItems.appendChild(gridContainer);
};
