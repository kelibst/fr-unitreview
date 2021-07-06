import React from "react";
import Icofont from "react-icofont";
import { NavLink } from "react-router-dom";
import AddUnit from "../../components/dashboard/AddUnit";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav nav-cust w-100">
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/dashboard/">
            <Icofont icon="chart-bar-graph" className="nav-icons" /> Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/reviews">
            <Icofont icon="book" className="nav-icons" /> Reviews
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/about">
            <Icofont icon="teacher" className="nav-icons" /> About
          </NavLink>
        </li>
      </ul>

      <AddUnit />
    </nav>
  );
};

export default NavBar;
