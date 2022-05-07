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
    console.log(sorted);
    setGarden(sorted);
  }

  function updateGardensOnDeletePlant(deletedSeedling) {
    const foundGarden = garden.find((g) => deletedSeedling.garden_id === g.id);
    const deletedPlant = foundGarden.plants.find(
      (p) => p.id === deletedSeedling.plant_id
    );
    const index = foundGarden.plants.indexOf(deletedPlant);
    foundGarden.plants.splice(index, 1);
    // const firstHalf = foundGarden.plants.slice(0, index);
    // const secondHalf = foundGarden.plants.slice(index + 1);
    // const updatedGarden = {
    //   ...foundGarden,
    //   plants: [...firstHalf, ...secondHalf],
    // };
    const filteredGardens = garden.filter((g) => g.id !== foundGarden.id);
    const updatedGardens = [...filteredGardens, foundGarden];
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

  function updateSeedlingsOnDeletePlant(deletedSeedling) {
    setSeedlings(seedlings.filter((s) => s.id !== deletedSeedling.id));
  }

  console.log(seedlings);

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
    const updatedPlants = [...foundGarden.plants, plant];
    const sortedPlants = updatedPlants.sort((a, b) => a.id - b.id);
    const updatedGarden = {
      ...foundGarden,
      plants: sortedPlants,
    };
    setUser({
      ...user,
      gardens: [updatedGarden],
    });
    console.log("plant", plant);
    console.log("foundGarden", foundGarden);
    console.log("updatedPlants", updatedPlants);
    console.log("sortedPlants", sortedPlants);
    console.log("updatedGarden", updatedGarden);
    console.log("updatedUser", {
      ...user,
      gardens: [updatedGarden],
    });
  }

  function updateUserGardenOnDeletePlant(deletedSeedling) {
    // const plant = plants.find((p) => p.id === deletedSeedling.plant_id);
    const foundGarden = garden.find((g) => g.id === deletedSeedling.garden_id);
    console.log(foundGarden);
    const deletedPlant = foundGarden.plants.find(
      (p) => p.id === deletedSeedling.plant_id
    );
    const index = foundGarden.plants.indexOf(deletedPlant);
    foundGarden.plants.splice(index, 0);
    // const firstHalf = foundGarden.plants.slice(0, index);
    // const secondHalf = foundGarden.plants.slice(index + 1);
    // const updatedGarden = {
    //   ...foundGarden,
    //   plants: [...firstHalf, ...secondHalf],
    // };
    // const filteredGardens = user.gardens.filter((g) => g.id !== foundGarden.id);
    // const updatedGardens = [...filteredGardens, foundGarden];
    setUser({ ...user, gardens: [foundGarden] });
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
              updateSeedlingsOnDeletePlant={updateSeedlingsOnDeletePlant}
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
