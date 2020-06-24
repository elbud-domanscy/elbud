import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="offer">
      <h3>Nasza firma oferuje:</h3>

      <ul className="offered_items">
        <li>kosztorysowanie</li>
        <li>projektowanie</li>
        <li>adaptacje</li>
        <li>nadzór budowlany</li>
      </ul>
    </div>
  );
};

export default Offer;
