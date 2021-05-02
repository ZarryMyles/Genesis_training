import "./App.css";
import React, { Component, Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import Toastify from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Other components
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Catalog from "./component/Catalog";
import CourseDisplay from "./component/CourseDisplay";
import CourseSidebar from "./component/CourseSidebar";
import Login from "./component/Login";
import TestId from "./component/Testid";
import Profile from "./component/Profile";
import Preloader from "./component/Preloader";
import Quiz from "./component/Quiz";
import PrivateRoute from "./component/ProtectedRoute";
//others
import "bootstrap/dist/css/bootstrap.min.css";
import navbar from "./component/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={homepage} />
        <Route path="/catalog/:username" component={catalog} />
        <Route path="/course/:coursename" component={coursedisplay} />
        <Route path="/login" component={loginUser} />
        <PrivateRoute path="/profile/:username" component={profile} />
        <Route path="/pre" component={preLoader} />
        <Route path="/quiz" component={quiz} />
      </div>
    </Router>
  );
}
const homepage = () => (
  <Fragment>
    <Homepage />
  </Fragment>
);
const catalog = (props) => (
  <Fragment>
    {console.log("catalog", props.match.params.username)}
    <Navbar username={props.match.params.username} />
    <Catalog
      username={
        props.match.params.username === undefined
          ? "catalog"
          : props.match.params.username
      }
    />
  </Fragment>
);
const coursedisplay = (props) => (
  <Fragment>
    {/* need to send user info to nav so it updates even whn course is opened */}
    <Navbar />
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
const profile = (props) => (
  <Fragment>
    <Navbar username={props.match.params.username} />
    <Profile username={props.match.params.username} />
  </Fragment>
);
const preLoader = () => (
  <Fragment>
    <Preloader />
  </Fragment>
);
const quiz = () => (
  <Fragment>
    <Quiz />
  </Fragment>
);

export default App;
