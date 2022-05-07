import React from "react";
import InventoryCard from "./InventoryCard.js";

function Inventory({
  plants,
  setUser,
  user,
  garden,
  setGarden,
  updateGardensOnAddPlant,
  updateUserGardenOnAddPlant,
  updateSeedlingsOnAddPlant,
}) {
  const display = plants.map((plant) => (
    <InventoryCard
      key={plant.id}
      plant={plant}
      user={user}
      setUser={setUser}
      garden={garden}
      setGarden={setGarden}
      updateGardensOnAddPlant={updateGardensOnAddPlant}
      updateUserGardenOnAddPlant={updateUserGardenOnAddPlant}
      updateSeedlingsOnAddPlant={updateSeedlingsOnAddPlant}
    />
  ));
  return (
    <div id="inventory">
      <h1 className="inv-header">INVENTORY</h1>
      <div className="inventory">{display}</div>
    </div>
  );
}

export default Inventory;
