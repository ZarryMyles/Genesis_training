import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Other components
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Catalog from "./component/Catalog";
import CourseDisplay from "./component/CourseDisplay";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Quiz from "./component/Quiz";
import PrivateRoute from "./component/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={homepage} />
        <Route path="/catalog" component={catalog} />
        <Route path="/course/:coursename" component={coursedisplay} />
        <Route path="/login" component={loginUser} />
        <PrivateRoute path="/profile" component={profile} />
        <Route path="/quiz/:courseId/:courseName" component={quiz} />
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
    <Navbar username={props.match.params.username} />
    <Catalog />
  </Fragment>
);
const coursedisplay = (props) => (
  <Fragment>
    <Navbar />
    <div className="row pt-5 mx-auto">
      <CourseDisplay coursename={props.match.params.coursename} />
    </div>
  </Fragment>
);
const loginUser = () => (
  <Fragment>
    <Login />
  </Fragment>
);
const profile = () => (
  <Fragment>
    <Navbar />
    <Profile />
  </Fragment>
);
const quiz = (props) => (
  <Fragment>
    <Navbar />
    <Quiz
      courseId={props.match.params.courseId}
      courseName={props.match.params.courseName}
    />
  </Fragment>
);

export default App;
