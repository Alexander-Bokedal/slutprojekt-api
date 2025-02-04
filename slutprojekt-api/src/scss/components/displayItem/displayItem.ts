import "./_displayItem.scss";
import placeholderImage from "../../../placeholder.webp";
import { ArmorItem, WeaponItem } from "../../../ts/types";
export function showItemModal(item: ArmorItem | WeaponItem): void {
  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const closeButton = document.createElement("button");
  closeButton.classList.add("modal-close");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });
  modalContent.appendChild(closeButton);

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  const leftColumn = document.createElement("div");
  leftColumn.classList.add("left-column");
  const rightColumn = document.createElement("div");
  rightColumn.classList.add("right-column");

  if ("defense" in item) {
    if (!item.assets) {
      leftColumn.innerHTML = `<img src="${placeholderImage}" alt="Placeholder Image">`;
    } else {
      leftColumn.innerHTML = `<img src="${item.assets.imageMale}" alt="${item.name}">`;
    }
    rightColumn.innerHTML = `
      <h2>${item.name}</h2>
      <p><strong>Type:</strong> ${item.type}</p>
      <p>
        <strong>Defense:</strong> Base ${item.defense.base}, 
        Max ${item.defense.max}, 
        Augmented ${item.defense.augmented}
      </p>
      <div class="resistances">
        <strong>Resistances:</strong>
        <ul>
          <li>Fire: ${item.resistances.fire}</li>
          <li>Water: ${item.resistances.water}</li>
          <li>Ice: ${item.resistances.ice}</li>
          <li>Thunder: ${item.resistances.thunder}</li>
          <li>Dragon: ${item.resistances.dragon}</li>
        </ul>
      </div>
    `;
  } else if ("attack" in item) {
    // WeaponItem case
    // For a weapon, we assume you want to show an icon image.
    if (!item.assets) {
      //FIX: Get a new placeholder for backgroundimage
      leftColumn.innerHTML = `<img src="${placeholderImage}" alt="Placeholder Image">`;
    } else {
      leftColumn.innerHTML = `<img src="${item.assets.image}" alt="${item.name}">`;
    }
    rightColumn.innerHTML = `
      <h2>${item.name}</h2>
      <p><strong>Type:</strong> ${item.type}</p>
      <p>
        <strong>Attack:</strong> Display ${item.attack.display}, 
        Raw ${item.attack.raw}
      </p>
      <p><strong>Damage Type:</strong> ${item.damageType}</p>
    `;
  }

  // Append columns to the modal body
  modalBody.appendChild(leftColumn);
  modalBody.appendChild(rightColumn);
  modalContent.appendChild(modalBody);

  // Assemble the modal
  modalContainer.appendChild(modalContent);
  overlay.appendChild(modalContainer);
  document.body.appendChild(overlay);

  // Also close modal on clicking the overlay (but not when clicking inside the container)
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });
}
