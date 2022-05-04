import { React, useEffect, useState } from "react";

function MyGarden({ user, garden }) {
  const [popup, setPopup] = useState(false);

  function togglePop() {
    setPopup(!popup);
  }

  console.log(user);
  console.log(popup);
  const mapGarden =
    user && user.gardens[0].plants.length > 0
      ? user.gardens.map((item) => (
          <div className="center" key={item.name}>
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

  const mapPlants =
    user && user.gardens[0].plants.length > 0
      ? user.gardens[0].plants.map((item) => (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <img src={item.image}></img>
          </div>
        ))
      : null;

  return (
    <div id="my-garden">
      <h1>MY GARDEN</h1>
      {popup && user ? (
        <div className="modal">
          <div className="modal_content" onClick={togglePop}>
            <p className="close">Click to Close</p>
            <div>{mapPlants}</div>
          </div>
        </div>
      ) : (
        <div className="my-garden">{mapGarden}</div>
      )}
      {user ? null : (
        <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgyMDg0MTcxMzQwOTgxMzc5/gettyimages-1065711094sq.jpg"></img>
      )}
      {user ? (
        <div className="garden-butts">
          <button className="garden-buttons">Add New Garden</button>
          <button className="garden-buttons">Edit Garden</button>
          <button className="garden-buttons">Delete Garden</button>
        </div>
      ) : null}
    </div>
  );
}

export default MyGarden;
