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
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [plants, setPlants] = useState([]);
  const [garden, setGarden] = useState([]);

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

  function getUser() {
    fetch("/users/0").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  useEffect(() => {
    getUser();
    getPlants();
    getGarden();
  }, []);

  // console.log(user);

  return (
    <div className="App">
      <Router>
        <NavBar isLoggedIn={!!user} user={user} />
        <Switch>
          <Route exact path="/">
            <HomePage />
            <MyGarden user={user} garden={garden} />
            <Inventory plants={plants} setUser={setUser} user={user} />
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
