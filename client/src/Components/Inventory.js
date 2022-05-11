import { React, useState } from "react";
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
  const [searchText, setSearchText] = useState("");

  const searchResults = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchText.toLowerCase());
  });
  console.log(plants);
  console.log(searchResults);
  const display = searchResults.map((plant) => (
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
      <section>
        <h3 className="searcher">Search For Your Favorite Plant</h3>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="inventory">{display}</div>
      </section>
    </div>
  );
}

export default Inventory;
