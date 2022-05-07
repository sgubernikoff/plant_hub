import React from "react";

function Explore({ garden, user }) {
  console.log(garden);
  // console.log(user.gardens[0].plants[0]);
  // console.log(Math.floor(Math.random() * garden[0].plants.length - 1));
  const mapGarden = garden.map((item) => (
    <div key={item.name}>
      {item.plants[0] ? (
        <h2 className="explore-garden-name">{item.name}</h2>
      ) : null}
      {item.plants[0] ? (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {item.plants[0] ? (
                <img
                  className="gard-image"
                  src={
                    item.plants[
                      Math.floor(Math.random() * (item.plants.length - 1))
                    ].image
                  }
                />
              ) : null}
            </div>
            <div className="flip-card-back">
              <h3>{item.name}</h3>
              {item.plants[0] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[0].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[0].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[1] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[1].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[1].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[2] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[2].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[2].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[3] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[3].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[3].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[4] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[4].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[4].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[5] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[5].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[5].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[6] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[6].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[6].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[7] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[7].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[7].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[8] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[8].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[8].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[9] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[9].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[9].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[10] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[10].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[10].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[11] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[11].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[11].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[12] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[12].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[12].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[13] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[13].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[13].image}
                    ></img>
                  </li>
                </div>
              ) : null}
              {item.plants[14] ? (
                <div className="explore-div">
                  <li className="explore-list">
                    {" "}
                    {item.plants[14].name}
                    <img
                      className="small-garden-pic"
                      src={item.plants[14].image}
                    ></img>
                  </li>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  ));

  return (
    <div id="explore">
      <h1 className="exp-header">EXPLORE</h1>
      <div className="explorer">{mapGarden}</div>
    </div>
  );
}

export default Explore;
