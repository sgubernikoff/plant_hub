import { React } from "react";

function InventoryCard({ plant, user, setUser, garden, setGarden }) {
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
      .then((data) =>
        setUser({
          ...user,
          gardens: { plants: [...user.gardens[0].plants, data] },
        })
      );
  }
  console.log(garden);
  console.log(user);

  return (
    <div className="inv">
      {/* <img className="pic" src={plant.image} alt={plant.description} /> */}
      <h3>{plant.name}</h3>
      <p>$ {plant.price}</p>
      <button onClick={addPlant} className="add-plant">
        Add to Garden
      </button>
    </div>
  );
}
export default InventoryCard;
