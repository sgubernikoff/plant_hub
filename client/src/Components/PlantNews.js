import React, { useEffect } from "react";

function PlantNews() {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "light");
    anchor.setAttribute("data-tweet-limit", "unlimitted");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("data-height", "500");
    anchor.setAttribute("data-width", "750");
    anchor.setAttribute(
      "href",
      "https://twitter.com/TheFlowerWorld?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    );
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div className="twitter">
      <h2 className="amaze-plants">Flower World Twitter Feed</h2>
      <div className="twitter-content">
        <div className="my-twitter-card">
          <section className="twitterContainer">
            <div className="twitter-embed"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PlantNews;
