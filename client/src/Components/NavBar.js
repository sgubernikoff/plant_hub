import React from "react";
import { NavLink } from "react-router-dom";
import flower from "./flower.gif";
import { Link, animateScroll as scroll } from "react-scroll";
import cart from "./cart.png";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  margin: "0 .1% .1%",
  background: "transparent",
  color: "#b33b30",
  fontSize: "20px",
  fontFamily: "Baskerville",
};

const accountWindow = window.location.href.includes("account")
  ? "/"
  : "inventory";

function NavBar({ isLoggedIn, user }) {
  return (
    <div className="bar">
      <nav className="navbar">
        <Link
          className="nav-element"
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="nav-element"
          activeClass="active"
          to="my-garden"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          My Garden
        </Link>
        <Link
          className="nav-element"
          activeClass="active"
          to={accountWindow}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Inventory
        </Link>
        <a className="header" href="/">
          Little
          <span>
            <img className="pot" src={flower}></img>{" "}
          </span>
          Leaf
        </a>
        <Link
          className="nav-element"
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Features
        </Link>
        <Link
          className="nav-element"
          activeClass="active"
          to="explore"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Explore
        </Link>
        <NavLink
          exact
          to={isLoggedIn ? "/account" : "/login"}
          style={linkStyles}
          className="nav-element"
        >
          {" "}
          <p className="navvy">Account</p>{" "}
        </NavLink>
        <a className="header" href="/cart">
          <span>
            <img className="cart-img" src={cart}></img>{" "}
          </span>
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
