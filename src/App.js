import "./App.css";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Other components
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Catalog from "./component/Catalog";
import CourseDisplay from "./component/CourseDisplay";
import CourseSidebar from "./component/CourseSidebar";
import Login from "./component/Login";
//others
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={homepage} />
          <Route path="/catalog" component={catalog} />
          <Route path="/course/:coursename" component={coursedisplay} />
          <Route path="/login" component={loginUser} />
        </Switch>
      </div>
    </Router>
  );
}
const homepage = () => (
  <Fragment>
    <Navbar />
    <Homepage />
  </Fragment>
);
const catalog = () => (
  <Fragment>
    <Navbar />
    <Catalog />
  </Fragment>
);
const coursedisplay = () => (
  <Fragment>
    <Navbar />{" "}
    <div className="mt-5 row pt-5 mx-auto">
      {/* <CourseSidebar /> */}
      <CourseDisplay />
    </div>
  </Fragment>
);
const loginUser = () => (
  <Fragment>
    <Login />
  </Fragment>
);
export default App;
