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
import TestId from "./component/Testid";
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
          <Route path="/test/:id" component={TestId} />
        </Switch>
      </div>
    </Router>
  );
}
const homepage = () => (
  <Fragment>
    {/* <Navbar /> */}
    <Homepage />
  </Fragment>
);
const catalog = () => (
  <Fragment>
    <Navbar />
    <Catalog />
  </Fragment>
);
const coursedisplay = (props) => (
  <Fragment>
    <Navbar />{" "}
    <div className="row pt-5 mx-auto">
      {/* <CourseSidebar /> */}
      <CourseDisplay coursename={props.match.params.coursename} />
    </div>
  </Fragment>
);
const loginUser = () => (
  <Fragment>
    <Login />
  </Fragment>
);

export default App;
