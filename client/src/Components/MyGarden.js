import { React, useEffect, useState } from "react";

function MyGarden({ user, garden }) {
  console.log(user);
  const mapGarden =
    user && user.gardens[0].plants.length > 0
      ? user.gardens.map((item) => (
          <div key={item.name}>
            <h2>{item.name}</h2>
            <img className="garden-pic" src={item.plants[0].image} />
          </div>
        ))
      : null;
  return (
    <div id="my-garden">
      <h1>MY GARDEN</h1>
      {user ? (
        <div className="my-garden">{mapGarden}</div>
      ) : (
        <img src="pink-red-roses.jpg" />
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
