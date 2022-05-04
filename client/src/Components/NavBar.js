import React from "react";
import { NavLink } from "react-router-dom";
import flower from "./flower.gif";
import { Link, animateScroll as scroll } from "react-scroll";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  margin: "0 .1% .1%",
  background: "transparent",
  textDecoration: "none",
  color: "#934E48",
  fontSize: "20px",
  fontFamily: "Baskerville",
};

function NavBar({ isLoggedIn, user }) {
  return (
    <div className="bar">
      <nav className="navbar">
        <Link
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
          activeClass="active"
          to="inventory"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Inventory
        </Link>
        <Link
          activeClass="active"
          to="my-garden"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          My Garden
        </Link>
        <a className="header" href="/">
          Little
          <span>
            <img className="pot" src={flower}></img>{" "}
          </span>
          Leaf
        </a>
        <Link
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
          activeStyle={{
            textDecoration: "none",
          }}
          className="nav-element"
        >
          {" "}
          <p className="navvy">Account</p>{" "}
        </NavLink>
        {/* <div className="home_points">
          {isLoggedIn ? (
            <p>🪙 {user.points}</p>
          ) : (
            <img
              className="logo"
              src="https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95c10315-70ae-4f8a-ad38-e3729fc04eae_1764x1764.gif"
              alt="logo"
            ></img>
          )}
        </div> */}
      </nav>
    </div>
  );
}

export default NavBar;
