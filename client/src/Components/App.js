import "./App.css";
import { React, useEffect, useState } from "react";
import NavBar from "./NavBar.js";
import HomePage from "./HomePage";
import Inventory from "./Inventory";
import MyGarden from "./MyGarden";
import Features from "./Features";
import Explore from "./Explore";
import Signup from "../account/Signup";
import Login from "../account/Login";
import Account from "../account/Account";
import Cart from "../account/Cart";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [plants, setPlants] = useState([]);
  const [garden, setGarden] = useState([]);
  const [seedlings, setSeedlings] = useState([]);

  function getPlants() {
    fetch("/plants")
      .then((res) => res.json())
      .then((plants) => setPlants(plants));
  }

  function getGarden() {
    fetch("/gardens")
      .then((res) => res.json())
      .then((gardens) => setGarden(gardens));
  }

  function updateGardensOnAddPlant(newSeedling) {
    const plant = plants.find((p) => p.id === newSeedling.plant_id);
    const foundGarden = garden.find((g) => g.id === newSeedling.garden_id);
    const updatedGarden = {
      ...foundGarden,
      plants: [...foundGarden.plants, plant],
    };
    const filteredGardens = garden.filter((g) => g.id !== updatedGarden.id);
    const updatedGardens = [...filteredGardens, updatedGarden];
    const sorted = updatedGardens.sort((a, b) => a.id - b.id);
    setGarden(sorted);
  }

  function updateGardensOnDeletePlant(deletedGarden) {
    const filteredGardens = garden.filter((g) => g.id !== deletedGarden.id);
    const updatedGardens = [...filteredGardens, deletedGarden];
    const sorted = updatedGardens.sort((a, b) => a.id - b.id);
    setGarden(sorted);
  }

  function getSeedlings() {
    fetch("/seedlings")
      .then((res) => res.json())
      .then((seedling) => setSeedlings(seedling));
  }

  function updateSeedlingsOnAddPlant(newSeedling) {
    setSeedlings([...seedlings, newSeedling]);
  }

  function getUser() {
    fetch("/users/0").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  function updateUserGardenOnAddPlant(newSeedling) {
    const plant = plants.find((p) => p.id === newSeedling.plant_id);
    const foundGarden = garden.find((g) => g.id === newSeedling.garden_id);
    const updatedGarden = {
      ...foundGarden,
      plants: [...foundGarden.plants, plant],
    };
    setUser({
      ...user,
      gardens: [updatedGarden],
    });
  }

  function updateUserGardenOnDeletePlant(updatedGarden) {
    const filteredGardens = user.gardens.filter(
      (g) => g.id !== updatedGarden.id
    );
    const updatedGardens = [...filteredGardens, updatedGarden];
    setUser({ ...user, gardens: updatedGardens });
  }

  useEffect(() => {
    getUser();
    getPlants();
    getGarden();
    getSeedlings();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar isLoggedIn={!!user} user={user} />
        <Switch>
          <Route exact path="/">
            <HomePage />
            <MyGarden
              user={user}
              garden={garden}
              seedlings={seedlings}
              updateUserGardenOnDeletePlant={updateUserGardenOnDeletePlant}
              updateGardensOnDeletePlant={updateGardensOnDeletePlant}
            />
            <Inventory
              plants={plants}
              setUser={setUser}
              user={user}
              updateGardensOnAddPlant={updateGardensOnAddPlant}
              updateUserGardenOnAddPlant={updateUserGardenOnAddPlant}
              updateSeedlingsOnAddPlant={updateSeedlingsOnAddPlant}
            />
            <Features />
            <Explore garden={garden} user={user} />
          </Route>
          <Route exact path="/signup">
            <Signup onLogin={setUser} />
          </Route>
          <Route exact path="/login">
            <Login onLogin={setUser} />
          </Route>
          <Route exact path="/account">
            <Account user={user} onLogin={setUser} />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
