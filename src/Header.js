import React from "react";
import Navbar from "./Navbar";
import logo from "./pictures/logo.png";

const Header = () => {
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <span>Kosztorysowanie, projektowanie, nadzór budowlany</span>
      <Navbar />
    </div>
  );
};

export default Header;
