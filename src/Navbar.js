import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/">
            <button type="button" class="btn btn-secondary">
              Strona główna
            </button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">
            <button type="button" class="btn btn-secondary">
              O nas
            </button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/offer">
            <button type="button" class="btn btn-secondary">
              Oferta
            </button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">
            <button type="button" class="btn btn-secondary">
              Napisz do nas
            </button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact_details">
            <button type="button" class="btn btn-secondary">
              Dane firmy
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
