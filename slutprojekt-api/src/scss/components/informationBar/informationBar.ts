import "./_informationBar.scss";
import { armor, weapons, subscribeToState } from "../../../ts/state";
export const informationBar = () => {
  const itemStats = document.querySelector<HTMLDivElement>(".item-container");
  if (!itemStats) {
    console.log("item stats can't be found");
    return;
  }

  let itemStatsContainer =
    itemStats.querySelector<HTMLDivElement>(".container");
  if (!itemStatsContainer) {
    itemStatsContainer = document.createElement("div");
    itemStatsContainer.className = "container";
    itemStats.append(itemStatsContainer);
  }

  const updateInformation = () => {
    // 1. Calculate Total Damage from weapons
    const totalDamage = weapons.reduce(
      (acc, weapon) => acc + weapon.attack.display,
      0,
    );

    const totalResistances = {
      fire: 0,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 0,
    };
    let totalDefense = 0;
    armor.forEach((piece) => {
      totalResistances.fire += piece.resistances.fire;
      totalResistances.water += piece.resistances.water;
      totalResistances.thunder += piece.resistances.thunder;
      totalResistances.ice += piece.resistances.ice;
      totalResistances.dragon += piece.resistances.dragon;
      totalDefense += piece.defense.base; // You can adjust this if you want to consider max or augmented values.
    });

    const damageReduction = (totalDefense / (totalDefense + 100)) * 100;

    itemStatsContainer.innerHTML = `
<div class="information">
  <h2>Character Stats</h2>
  <div class="stats-wrapper">
    <div class="left-column">
      <p><strong>Total Damage:</strong> ${totalDamage}</p>
      <p><strong>Damage Reduction:</strong> ${damageReduction.toFixed(2)}%</p>
    </div>
    <div class="right-column">
      <div>
        <strong>Resistances:</strong>
        <ul>
          <li>Fire: ${totalResistances.fire}</li>
          <li>Water: ${totalResistances.water}</li>
          <li>Thunder: ${totalResistances.thunder}</li>
          <li>Ice: ${totalResistances.ice}</li>
          <li>Dragon: ${totalResistances.dragon}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    `;
  };

  // Subscribe the update function so it is called whenever the state changes
  subscribeToState(updateInformation);

  // Initial call to set up the information when the page loads
  updateInformation();
};
