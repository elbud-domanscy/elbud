import React from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Router>
  );
}

export default App;
