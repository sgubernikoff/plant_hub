import React from "react";

function Explore({ garden, user }) {
  // console.log(garden);
  // console.log(user.gardens[0].plants[0]);
  const mapGarden =
    user && user.gardens[0].plants.length > 0
      ? garden.map((item) => (
          <div key={item.name}>
            <h2>{item.name}</h2>
            <img className="gard-image" src={item.plants[0].image} />)
          </div>
        ))
      : null;
  return (
    <div id="explore">
      <h1 className="exp-header">EXPLORE</h1>
      <div className="explorer">{mapGarden}</div>
    </div>
  );
}

export default Explore;
