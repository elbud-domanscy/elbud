import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Offer from "./Offer";
import Contact from "./Contact";
import ContactDetails from "./ContactDetails";

const Content = () => {
  return (
    <div className="content container">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/offer">
          <Offer />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/contact_details">
          <ContactDetails />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
