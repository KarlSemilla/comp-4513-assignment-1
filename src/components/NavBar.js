import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const HeaderMenu = function(props) {
  return (
    <div className="navbar">
      <Link to="/Home" className="logo">
        simpleMDB
      </Link>
      <Link to="/Home" className="nav-links">
        Home
      </Link>
      <Link to="/About" className="nav-links">
        About
      </Link>
    </div>
  );
};

export default HeaderMenu;
