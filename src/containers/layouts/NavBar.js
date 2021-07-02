import React from "react";
import Icofont from "react-icofont";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav nav-cust w-100">
        <li className="nav-item">
          <NavLink className="nav-link text-dark" exact to="/">
            <Icofont icon="test-bulb" className="nav-icons" /> Hopitals
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

      {/* <AddHospital
        status="Add"
        hospital={{
          name: "",
          country: "",
          address: "",
          city: "",
          image: "",
        }}
      /> */}
    </nav>
  );
};

export default NavBar;
