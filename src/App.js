import "./App.css";
import React, { Component, Fragment } from "react";
// Other components
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Catalog from "./component/Catalog";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={homep} />
          <Route path="/catalog" component={cat} />
        </Switch>
      </div>
    </Router>
  );
}
const homep = () => (
  <Fragment>
    <Navbar />
    <Homepage />
  </Fragment>
);
const cat = () => (
  <Fragment>
    <Navbar />
    <Catalog />
  </Fragment>
);

export default App;
