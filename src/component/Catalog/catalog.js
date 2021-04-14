import React, { Fragment } from "react";
import "./catalog.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// routes
import Story1 from "../Courses/story1/Story1";
// other components

// images
import GuySittingImg from "../../images/imgs/webdev-guy-sitting.png";
import WebScreenImg from "../../images/imgs/webdev-screen.png";

export default function catalog() {
  return (
    <Router>
      <div>
        <div id="catelog-home"></div>
      </div>
      {/* <Link to="/catalog/story1"/> */}
      <Switch>
        <Route path="/catalog" exact component={CatelogBrowse} />
        <Route path="/catalog/story1" component={Story} />
      </Switch>
    </Router>
  );
}
const Story = () => <Story1 />;
const CatelogBrowse = () => (
  <Fragment>
    <div id="welcome-page" className="row mx-auto">
      <div
        id="webdev-images"
        className="d-none d-md-block position-relative col-6"
      >
        <img
          id="GuySittingImg"
          src={GuySittingImg}
          alt="sample image"
          srcset=""
          height="300px"
          className="  position-absolute WebsScreenImg"
        />
        <img
          id="WebScreenImg"
          src={WebScreenImg}
          alt="sample image"
          srcset=""
          height="250px"
          className="  position-absolute"
        />
      </div>
      <div
        id="CatelogDesc"
        className="text-light my-md-5 my-3 col-12  col-md-6 "
      >
        <h2 className=" ">Lorem ipsum dolor sit amet.</h2>
        <h4 className=" mx-3 py-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          quisquam eveniet beatae doloribus id explicabo dolor unde omnis quis
          cupiditate?
        </h4>
        <div class="input-group mx-auto my-5 row justify-content-center">
          <input
            id="CourseSearchInput"
            type="text"
            class="form-control col-md-6 col-7 "
            placeholder="Course Name"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline col-3 p-1"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div
      id="discover-btn"
      className=" mb-5 d-flex justify-content-center flex-column"
      href="#catelog-browse"
    >
      <a href="#catelog-browse" className="btn my-4 align-self-center">
        Discover
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-bar-down text-light align-self-center"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
        />
      </svg>
    </div>

    <div id="catelog-browse" className="mx-auto m">
      <div id="searchInputs" className="row mx-auto">
        <div class="input-group justify-content-center ">
          <div class="input-group mb-3 col-md-4 col-6 ">
            <input
              type="text"
              class="form-control text-color-dark-blue"
              placeholder="Search for course"
              aria-label="Search for course"
              aria-describedby="button-addon2"
            />
          </div>
          <select
            class="form-select bg-color-green mx-md-5 rounded p-2"
            id="searchOptionFIlter"
          >
            <option selected className="text-light">
              Choose....
            </option>
            <option value="1" className="text-light">
              JS
            </option>
            <option className="text-light" value="2">
              CSS
            </option>
            <option className="text-light" value="3">
              HTML
            </option>
          </select>
        </div>
      </div>
      <div id="courseList">
        <div
          id="htmlCourses"
          className="p-3 mx-5 d-flex flex-row justify-content-center"
        >
          <div className="course p-1 m-4">
            <Link to="/catalog/story1">
              {" "}
              <div className="preview-img">
                {" "}
                <img src="" alt="preview img" srcset="" />
              </div>
              <h6 className="course-title text-center">HTML For Begginners </h6>
            </Link>
          </div>
          <div className="course p-1 m-4">
            <Link to="/catalog">
              {" "}
              <div className="preview-img">
                {" "}
                <img src="" alt="preview img" srcset="" />
              </div>
              <h6 className="course-title text-center">CSS </h6>
            </Link>
          </div>
          <div className="course p-1 m-4">
            <Link to="/catalog">
              {" "}
              <div className="preview-img">
                {" "}
                <img src="" alt="preview img" srcset="" />
              </div>
              <h6 className="course-title text-center">Bootstrap Grid </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
