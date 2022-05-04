import React from "react";

function Explore({ garden, user }) {
  // console.log(garden);
  // console.log(user.gardens[0].plants[0]);
  const mapGarden =
    user && user.gardens[0].plants.length > 0
      ? garden.map((item) => (
          <div key={item.name}>
            <h2 className="explore-garden-name">{item.name}</h2>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="gard-image" src={item.plants[0].image} />
                </div>
                <div className="flip-card-back">
                  <h3>{item.name}</h3>
                  <p>Map out Plants with small images of plant next to it</p>
                </div>
              </div>
            </div>
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
