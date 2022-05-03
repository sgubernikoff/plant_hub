import { React } from "react";

function InventoryCard({ plant, user, setUser }) {
  function updateUserGarden(newPlant) {
    console.log(newPlant);
    const updatedPlants = [...user.gardens[0].plants, newPlant];
    console.log(updatedPlants);
    setUser({
      ...user,
      gardens: [
        (user.gardens[0] = { ...user.gardens[0], plants: updatedPlants }),
      ],
    });
  }
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
      .then((data) => updateUserGarden(data));
  }

  return (
    <div className="inv">
      <h3 className="plant-name">
        {plant.name} <br></br>
        <p className="plant-price">${plant.price}</p>
      </h3>
      <img className="pic-plant" src={plant.image} alt={plant.description} />
      <button onClick={addPlant} className="add-plant">
        Add to Garden
      </button>
    </div>
  );
}
export default InventoryCard;
