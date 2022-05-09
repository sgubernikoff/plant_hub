import { React, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function MyGarden({
  user,
  garden,
  seedlings,
  updateUserGardenOnDeletePlant,
  updateGardensOnDeletePlant,
  updateSeedlingsOnDeletePlant,
  updateUserGardenOnClearGarden,
  updateGardensOnClearGarden,
}) {
  const [popup, setPopup] = useState(false);
  const [areYouSure, setAreYouSure] = useState(false);

  // console.log(seedlings);
  // console.log(garden);
  console.log(user);

  function togglePop() {
    setPopup(!popup);
  }

  function toggleSure() {
    setAreYouSure(!areYouSure);
  }

  function findSeedling(plant) {
    // console.log(user.gardens[0].plants);
    const foundSeed = seedlings.find(
      (a) => a.plant_id === plant.id && a.garden_id === user.gardens[0].id
    );
    console.log(seedlings);
    return foundSeed.id;
  }

  function clearGarden() {
    toggleSure();
    fetch(`/clear_seedlings/${user.id}`).then((r) =>
      r.json().then((data) => {
        updateUserGardenOnClearGarden();
        updateGardensOnClearGarden();
      })
    );
  }

  const mapGarden =
    user && user.gardens[0].plants.length > 0
      ? user.gardens.map((item) => (
          <div className="center" key={uuidv4()}>
            <div className="property-card">
              <div className="property-image" onClick={togglePop}></div>
              <div className="property-description">
                <h5 className="garden-5"> {item.name} </h5>
                <p className="garden-p">Click here to view your garden.</p>
              </div>
            </div>
          </div>
        ))
      : null;

  // console.log("myplants", user.gardens[0].plants);
  // console.log("shit", user.gardens[0].plants);
  const mapPlants =
    user && user.gardens[0].plants.length > 0
      ? user.gardens[0].plants.map((item) => (
          // console.log(item)
          <div className="my-gard-card" key={uuidv4()}>
            <div className="item-hold">
              <p className="item-name">{item.name}</p>
              <p className="item-price">$ {item.price}</p>
            </div>
            <img className="pic" src={item.image}></img>
            <button
              className="remove"
              onClick={function handleDelete(event) {
                event.stopPropagation();
                fetch(`/seedlings/${findSeedling(item)}`, {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                }).then((r) =>
                  r.json().then((data) => {
                    updateUserGardenOnDeletePlant(data);
                    updateGardensOnDeletePlant(data);
                    updateSeedlingsOnDeletePlant(data);
                  })
                );
              }}
            >
              Remove Plant
            </button>
          </div>
        ))
      : null;

  return (
    <div id="my-garden">
      <h1>MY GARDEN</h1>
      {popup && user ? (
        <div className="modal">
          <div className="modal_content" onClick={!popup ? togglePop : null}>
            <p className="close" onClick={popup ? togglePop : null}>
              Click to Close
            </p>
            <div className="centered-plants">{mapPlants}</div>
          </div>
        </div>
      ) : (
        <div className="my-garden">{mapGarden}</div>
      )}
      {user ? null : (
        <div>
          <h2 className="please-login">
            Please <a href="/login">LOG IN</a> to view your garden!
          </h2>
        </div>
      )}
      {user ? (
        <div className="garden-butts">
          {user.gardens[0].plants[0] ? (
            <div>
              <button className="garden-buttons">Add Garden to Cart</button>
              <button className="garden-buttons" onClick={toggleSure}>
                Clear Garden
              </button>{" "}
              {areYouSure ? (
                <div>
                  <h2 className="sure">
                    This will remove all flowers from your garden.
                  </h2>
                  <h2 className="sure">
                    Are you sure you would like to clear your garden?
                  </h2>
                  <button className="garden-buttons" onClick={clearGarden}>
                    Yes
                  </button>
                  <button className="garden-buttons" onClick={toggleSure}>
                    No
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <h2 className="my-garden-prompt">
              Add a plant from Inventory to create your garden!
            </h2>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default MyGarden;
