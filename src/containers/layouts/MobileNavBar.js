import React from "react";
import Icofont from "react-icofont";
import { NavLink } from "react-router-dom";

const MobileNavBar = () => {
  return (
    <nav className="mobile">
      <ul className="navbar-nav mob pl-2 w-100">
        <li className="nav-item">
          <NavLink className="nav-link text-light" exact to="/">
            <Icofont icon="test-bulb" className="nav-icons" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/about">
            <Icofont icon="teacher" className="nav-icons" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavBar;
