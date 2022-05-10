import { React, useState, useEffect } from "react";

function Features({
  weather,
  brooklynWeather,
  austinWeather,
  miamiWeather,
  laWeather,
  botanyNews,
  plants,
}) {
  const [toggleWeather, setToggleWeather] = useState(false);
  const [toggleFeed, setToggleFeed] = useState(false);
  const [toggleTips, setToggleTips] = useState(false);
  const [toggleRandom, setToggleRandom] = useState(false);
  const [toggleFifth, setToggleFifth] = useState(false);
  const [tipsList, setTipsList] = useState(false);
  const [plantOfDay, setPlantOfDay] = useState([]);

  console.log(botanyNews);
  // console.log(plants[getRandomInt(0, 33)].image);

  function toggleList() {
    setTipsList(!tipsList);
  }

  function getPlant() {
    fetch(`/plants/${getRandomInt(0, 33)}`)
      .then((res) => res.json())
      .then((plants) => setPlantOfDay(plants));
  }

  useEffect(() => {
    getPlant();
  }, []);

  function toggle() {
    setToggleWeather(!toggleWeather);
    setToggleFeed(false);
    setToggleFifth(false);
    setToggleRandom(false);
    setToggleTips(false);
  }

  function toggle2() {
    setToggleFeed(!toggleFeed);
    setToggleWeather(false);
    setToggleFifth(false);
    setToggleRandom(false);
    setToggleTips(false);
  }
  function toggle3() {
    setToggleTips(!toggleTips);
    setToggleFeed(false);
    setToggleFifth(false);
    setToggleRandom(false);
    setToggleWeather(false);
  }
  function toggle4() {
    setToggleRandom(!toggleRandom);
    setToggleFeed(false);
    setToggleFifth(false);
    setToggleTips(false);
    setToggleWeather(false);
  }
  function toggle5() {
    setToggleFifth(!toggleFifth);
    setToggleFeed(false);
    setToggleRandom(false);
    setToggleTips(false);
    setToggleWeather(false);
  }

  function toggleClose() {
    setToggleFifth(false);
    setToggleRandom(false);
    setToggleTips(false);
    setToggleWeather(false);
    setToggleFeed(false);
    setTipsList(false);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <div id="features">
      <h1> FEATURES</h1>
      {!toggleWeather &&
      !toggleFeed &&
      !toggleTips &&
      !toggleRandom &&
      !toggleFifth ? (
        <a className="feature-list" onClick={toggle}>
          Weather Report
        </a>
      ) : null}
      {!toggleWeather ? <br></br> : null}
      {!toggleWeather ? <br></br> : null}
      {!toggleWeather &&
      !toggleFeed &&
      !toggleTips &&
      !toggleRandom &&
      !toggleFifth ? (
        <a className="feature-list" onClick={toggle2}>
          {" "}
          Garden Feed{" "}
        </a>
      ) : null}
      {!toggleWeather ? <br></br> : null}
      {!toggleWeather ? <br></br> : null}
      {!toggleWeather &&
      !toggleFeed &&
      !toggleTips &&
      !toggleRandom &&
      !toggleFifth ? (
        <a className="feature-list" onClick={toggle3}>
          {" "}
          Garden Care{" "}
        </a>
      ) : null}
      {!toggleWeather ? <br></br> : null}
      {!toggleWeather ? <br></br> : null}
      {!toggleWeather &&
      !toggleFeed &&
      !toggleTips &&
      !toggleRandom &&
      !toggleFifth ? (
        <a className="feature-list" onClick={toggle4}>
          {" "}
          Plant of the Day{" "}
        </a>
      ) : null}
      {!toggleWeather ? <br></br> : null}
      {!toggleWeather ? <br></br> : null}
      {!toggleWeather &&
      !toggleFeed &&
      !toggleTips &&
      !toggleRandom &&
      !toggleFifth ? (
        <a className="feature-list" onClick={toggle5}>
          {" "}
          Fifth{" "}
        </a>
      ) : null}
      {!toggleWeather ? <br></br> : null}
      {!toggleWeather ? <br></br> : null}

      {toggleFeed ? (
        <section className="twitterContainer">
          <div className="twitter-embed"></div>
          <button className="weather-button" onClick={toggleClose}>
            Close
          </button>
        </section>
      ) : null}

      {toggleTips ? (
        <div>
          {!tipsList ? (
            <h2 className="tips-enter" onClick={toggleList}>
              10 Tips To Care for Your Garden
            </h2>
          ) : null}
          {tipsList ? (
            <div className="big-tip">
              <div className="tips">
                <div className="tip-scroll">
                  <div className="flip-card-tips">
                    <div className="flip-card-inner-tips">
                      <div className="flip-card-front-tips">
                        <h2 className="tips-text">
                          Check the health of your plants
                        </h2>
                      </div>

                      <div className="flip-card-back-tips">
                        <p className="features-h2">
                          Whether you’re transplanting plants from nurseries or
                          growing your own from seeds, fully inspect your garden
                          plants to make sure they are pest and rot free.
                          <br></br>
                          <br></br>
                          Bringing in infected or diseased plants can harm the
                          whole garden.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-tips">
                    <div className="flip-card-inner-tips">
                      <div className="flip-card-front-tips">
                        <h2 className="tips-text">Water properly</h2>
                      </div>

                      <div className="flip-card-back-tips">
                        <p className="features-h2">
                          Overwatering can lead to fungi growth, leaf spots, and
                          unhealthy plants.<br></br>
                          <br></br> Only water as often as necessary during the
                          growing season for your specific plant species, and
                          let the soil dry between waterings to keep from
                          oversaturating. <br></br>
                          <br></br>The trick is to keep your garden well-watered
                          but not soaking, and avoid wetting the foliage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-tips">
                    <div className="flip-card-inner-tips">
                      <div className="flip-card-front-tips">
                        <h2 className="tips-text">Treat your soil</h2>
                      </div>

                      <div className="flip-card-back-tips">
                        <p className="features-h2">
                          Soil degrades over time and needs to be refreshed
                          every so often. <br></br>
                          <br></br>You can buy new soil from a local garden
                          center, so make sure to check the quality of your
                          garden soil and replace when necessary.
                          <br></br>
                          <br></br>Adding mulch is also useful for retaining the
                          soil moisture of your garden.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-tips">
                    <div className="flip-card-inner-tips">
                      <div className="flip-card-front-tips">
                        <h2 className="tips-text">
                          Clean your gardening tools
                        </h2>
                      </div>

                      <div className="flip-card-back-tips">
                        <p className="features-h2">
                          Garden tools should be cleaned to control disease and
                          prevent transferring any bacteria or dangerous
                          elements into your garden. <br></br>
                          <br></br>In addition to the other methods of garden
                          care, clean tools can help keep your garden healthy
                          longer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-tips">
                    <div className="flip-card-inner-tips">
                      <div className="flip-card-front-tips">
                        <h2 className="tips-text">Perform plant maintenance</h2>
                      </div>

                      <div className="flip-card-back-tips">
                        <p className="features-h2">
                          Deadhead, prune, and cull your plants as needed.
                          Deadheading removes old flower blooms to encourage new
                          growth. <br></br>
                          <br></br>Pruning is cutting back the branches of your
                          plants to control growth and make room for more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-tips">
                    <div className="flip-card-inner-tips">
                      <div className="flip-card-front-tips">
                        <h2 className="tips-text">Destroy the weeds</h2>
                      </div>

                      <div className="flip-card-back-tips">
                        <p className="features-h2">
                          Weeds are garden killers. <br></br>
                          <br></br>They can suffocate the roots of your healthy
                          plants, harbor pests, and become an unsightly
                          nuisance. <br></br>
                          <br></br>Weeds take up space and resources that your
                          plants could be using, so weeding your garden can keep
                          it healthy and growing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-tips">
                    <div className="flip-card-inner-tips">
                      <div className="flip-card-front-tips">
                        <h2 className="tips-text">Protect from animals</h2>
                      </div>

                      <div className="flip-card-back-tips">
                        <p className="features-h2">
                          Set up a barrier around your garden bed, like a wire
                          fence, to keep herbivores, critters, and other garden
                          pests from destroying your plants. <br></br>
                          <br></br>Wire fencing keeps your garden safe, while
                          also keeping it visible and exposed to the sun
                          (traditional fencing can sometimes block direct
                          sunlight).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-tips">
                    <div className="flip-card-inner-tips">
                      <div className="flip-card-front-tips">
                        <h2 className="tips-text">Stake your plants</h2>
                      </div>

                      <div className="flip-card-back-tips">
                        <p className="features-h2">
                          Staking involves fixing sticks into the ground and
                          tying your flower stems or other garden crops to them
                          with cloth or thread (you can also use a trellis).
                          <br></br>
                          <br></br>
                          Staking your plants—like cucumber, pepper, or tomato
                          plants—reinforces the stems and keeps them from
                          bending or breaking, keeping them upright and healthy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-tips">
                    <div className="flip-card-inner-tips">
                      <div className="flip-card-front-tips">
                        <h2 className="tips-text">Companion plants</h2>
                      </div>

                      <div className="flip-card-back-tips">
                        <p className="features-h2">
                          Companion planting, or intercropping, is when you
                          plant a variety of different crops together to
                          increase growth productivity, provide pollinators,
                          ward off pests, and control the habitat for beneficial
                          insects.<br></br>
                          <br></br> Intercropping is a great way to keep your
                          garden and flower beds thriving by surrounding them
                          with the right plants that will enable their
                          successful growth.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-tips">
                    <div className="flip-card-inner-tips">
                      <div className="flip-card-front-tips">
                        <h2 className="tips-text">Try raised beds</h2>
                      </div>

                      <div className="flip-card-back-tips">
                        <p className="features-h2">
                          Adding raised beds (or garden containers) to your
                          garden plans can significantly increase your plant’s
                          longevity. <br></br>
                          <br></br>Raised beds are great if you want to start
                          small, or plant a variety of sections. <br></br>
                          <br></br>Raised beds come with a barrier, provide
                          proper drainage, and can help keep your garden bed
                          safe from pathway weeds and other menaces.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <button className="tips-button" onClick={toggleClose}>
            Close
          </button>
        </div>
      ) : null}

      {toggleRandom ? (
        <div className="pod-div">
          <div className="pod-content">
            <div className="my-pod-card">
              <h3 className="pod-name">Plant of the Day</h3>
              <div className="pod">
                <img className="pod-img" src={plantOfDay.image}></img>
                <h3 className="pod-name">{plantOfDay.name}</h3>
              </div>
            </div>
          </div>
          <button className="weather-button" onClick={toggleClose}>
            Close
          </button>
        </div>
      ) : null}

      {toggleFifth ? (
        <div>
          Fifth
          <button className="weather-button" onClick={toggleClose}>
            Close
          </button>
        </div>
      ) : null}

      {toggleWeather ? (
        <div>
          <div className="big-weather">
            <div className="tips">
              <div className="weather-scroll">
                <div className="flip-card-weather">
                  <h2 className="features-h">
                    {weather.location.name}, {weather.location.region}
                  </h2>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className="gard-image"
                        src={
                          weather.forecast.forecastday[0].day
                            .daily_chance_of_rain > 49
                            ? "https://media.istockphoto.com/photos/summer-rain-in-a-field-of-colorful-flowers-picture-id182748564?b=1&k=20&m=182748564&s=170667a&w=0&h=gamOn2hH623etOkWMq1k-j_RTftK21eEcQGrVkKYBek="
                            : "https://images.all-free-download.com/images/graphiclarge/blue_sky_with_nature_vector_background_vector_545590.jpg"
                        }
                      />
                    </div>

                    <div className="flip-card-back">
                      <h2 className="features-h2">
                        Today: {weather.forecast.forecastday[0].day.avgtemp_f}{" "}
                        °F
                      </h2>
                      <p>
                        {
                          weather.forecast.forecastday[0].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                      <h2 className="features-h2"></h2>
                      <h2 className="features-h2">
                        Tomorrow:{" "}
                        {weather.forecast.forecastday[1].day.avgtemp_f} °F
                      </h2>

                      <p>
                        {
                          weather.forecast.forecastday[1].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                      <h2 className="features-h2">
                        Two Day: {weather.forecast.forecastday[2].day.avgtemp_f}{" "}
                        °F
                      </h2>

                      <p>
                        {
                          weather.forecast.forecastday[2].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-weather">
                  <h2 className="features-h">
                    {austinWeather.location.name},{" "}
                    {austinWeather.location.region}
                  </h2>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className="gard-image"
                        src={
                          austinWeather.forecast.forecastday[0].day
                            .daily_chance_of_rain > 49
                            ? "https://media.istockphoto.com/photos/summer-rain-in-a-field-of-colorful-flowers-picture-id182748564?b=1&k=20&m=182748564&s=170667a&w=0&h=gamOn2hH623etOkWMq1k-j_RTftK21eEcQGrVkKYBek="
                            : "https://images.all-free-download.com/images/graphiclarge/blue_sky_with_nature_vector_background_vector_545590.jpg"
                        }
                      />
                    </div>

                    <div className="flip-card-back">
                      <h2 className="features-h2">
                        Today:{" "}
                        {austinWeather.forecast.forecastday[0].day.avgtemp_f} °F
                      </h2>

                      <p>
                        {
                          austinWeather.forecast.forecastday[0].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                      <h2 className="features-h2">
                        Tomorrow:{" "}
                        {austinWeather.forecast.forecastday[1].day.avgtemp_f} °F
                      </h2>

                      <p>
                        {
                          austinWeather.forecast.forecastday[1].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                      <h2 className="features-h2">
                        Two Day:{" "}
                        {austinWeather.forecast.forecastday[2].day.avgtemp_f} °F
                      </h2>

                      <p>
                        {
                          austinWeather.forecast.forecastday[2].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-weather">
                  <h2 className="features-h">
                    {brooklynWeather.location.name},{" "}
                    {brooklynWeather.location.region}
                  </h2>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className="gard-image"
                        src={
                          brooklynWeather.forecast.forecastday[0].day
                            .daily_chance_of_rain > 49
                            ? "https://media.istockphoto.com/photos/summer-rain-in-a-field-of-colorful-flowers-picture-id182748564?b=1&k=20&m=182748564&s=170667a&w=0&h=gamOn2hH623etOkWMq1k-j_RTftK21eEcQGrVkKYBek="
                            : "https://images.all-free-download.com/images/graphiclarge/blue_sky_with_nature_vector_background_vector_545590.jpg"
                        }
                      />
                    </div>

                    <div className="flip-card-back">
                      <h2 className="features-h2">
                        Today:{" "}
                        {brooklynWeather.forecast.forecastday[0].day.avgtemp_f}{" "}
                        °F
                      </h2>

                      <p>
                        {
                          brooklynWeather.forecast.forecastday[0].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                      <h2 className="features-h2">
                        Tomorrow:{" "}
                        {brooklynWeather.forecast.forecastday[1].day.avgtemp_f}{" "}
                        °F
                      </h2>

                      <p>
                        {
                          brooklynWeather.forecast.forecastday[1].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                      <h2 className="features-h2">
                        Two Day:{" "}
                        {brooklynWeather.forecast.forecastday[2].day.avgtemp_f}{" "}
                        °F
                      </h2>

                      <p>
                        {
                          brooklynWeather.forecast.forecastday[2].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-weather">
                  <h2 className="features-h">
                    {laWeather.location.name}, {laWeather.location.region}
                  </h2>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className="gard-image"
                        src={
                          laWeather.forecast.forecastday[0].day
                            .daily_chance_of_rain > 49
                            ? "https://media.istockphoto.com/photos/summer-rain-in-a-field-of-colorful-flowers-picture-id182748564?b=1&k=20&m=182748564&s=170667a&w=0&h=gamOn2hH623etOkWMq1k-j_RTftK21eEcQGrVkKYBek="
                            : "https://images.all-free-download.com/images/graphiclarge/blue_sky_with_nature_vector_background_vector_545590.jpg"
                        }
                      />
                    </div>

                    <div className="flip-card-back">
                      <h2 className="features-h2">
                        Today: {laWeather.forecast.forecastday[0].day.avgtemp_f}{" "}
                        °F
                      </h2>

                      <p>
                        {
                          laWeather.forecast.forecastday[0].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                      <h2 className="features-h2">
                        Tomorrow:{" "}
                        {laWeather.forecast.forecastday[1].day.avgtemp_f} °F
                      </h2>

                      <p>
                        {
                          laWeather.forecast.forecastday[1].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                      <h2 className="features-h2">
                        Two Day:{" "}
                        {laWeather.forecast.forecastday[2].day.avgtemp_f} °F
                      </h2>

                      <p>
                        {
                          laWeather.forecast.forecastday[2].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-weather">
                  <h2 className="features-h">
                    {miamiWeather.location.name}, {miamiWeather.location.region}
                  </h2>

                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className="gard-image"
                        src={
                          miamiWeather.forecast.forecastday[0].day
                            .daily_chance_of_rain > 49
                            ? "https://media.istockphoto.com/photos/summer-rain-in-a-field-of-colorful-flowers-picture-id182748564?b=1&k=20&m=182748564&s=170667a&w=0&h=gamOn2hH623etOkWMq1k-j_RTftK21eEcQGrVkKYBek="
                            : "https://images.all-free-download.com/images/graphiclarge/blue_sky_with_nature_vector_background_vector_545590.jpg"
                        }
                      />
                    </div>

                    <div className="flip-card-back">
                      <h2 className="features-h2">
                        Today:{" "}
                        {miamiWeather.forecast.forecastday[0].day.avgtemp_f} °F
                      </h2>

                      <p>
                        {
                          miamiWeather.forecast.forecastday[0].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                      <h2 className="features-h2">
                        Tomorrow:{" "}
                        {miamiWeather.forecast.forecastday[1].day.avgtemp_f} °F
                      </h2>

                      <p>
                        {
                          miamiWeather.forecast.forecastday[1].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                      <h2 className="features-h2">
                        Two Day:{" "}
                        {miamiWeather.forecast.forecastday[2].day.avgtemp_f} °F
                      </h2>

                      <p>
                        {
                          miamiWeather.forecast.forecastday[2].day
                            .daily_chance_of_rain
                        }
                        % Rain Probability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="weather-button" onClick={toggle}>
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Features;
