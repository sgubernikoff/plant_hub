import { React } from "react";

function InventoryCard({
  plant,
  user,
  setUser,
  updateGardensOnAddPlant,
  updateUserGardenOnAddPlant,
  updateSeedlingsOnAddPlant,
}) {
  function addPlant() {
    fetch("/seedlings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        garden_id: user.gardens[0].id,
        plant_id: plant.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateGardensOnAddPlant(data);
        updateUserGardenOnAddPlant(data);
        updateSeedlingsOnAddPlant(data);
      });
  }

  return (
    <div className="inv">
      <h3 className="plant-name">
        {plant.name} <br></br>
        <p className="plant-price">${plant.price}</p>
      </h3>
      <img className="pic-plant" src={plant.image} alt={plant.description} />
      {user ? (
        <button onClick={addPlant} className="add-plant">
          Add to Garden
        </button>
      ) : (
        <p>
          Please{" "}
          <a href="/login" className="login-bold">
            LOG IN
          </a>{" "}
          to add your plant!
        </p>
      )}
    </div>
  );
}
export default InventoryCard;
