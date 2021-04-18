import React, { Fragment } from "react";
import "./css/catalog.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// routes
import Story1 from "./Story1";
import CourseList from "./CourseList";
// images
import GuySittingImg from "../images/img/webdev-guy-sitting.png";
import WebScreenImg from "../images/img/webdev-screen.png";
import ScrollDownImg from "../images/icons/scrolldown.png";
export default function Catalog() {
  return (
    <div>
      <div>
        <div id="catelog-home"></div>
      </div>
      <Switch>
        <Route path="/catalog" exact component={CatelogBrowse} />
        <Route path="/catalog/story1" component={Story} />
      </Switch>
    </div>
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
        <h2 className="mx-4">Lorem ipsum dolor sit amet.</h2>
        <p className=" mx-4 py-3 lh-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla harum
          neque eius similique facere libero, hic repellat nemo aspernatur sequi
          sit voluptatem sed doloribus quos voluptate modi veniam, voluptates
          cum non veritatis ipsa consequatur quisquam?
        </p>
        <div class="input-group mx-4 mx my-5 row ">
          <input
            id="CourseSearchInput"
            type="text"
            class="form-control col-md-6 col-7 d-none d-md-block"
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
      className=" mb-md-5 mb-1 d-flex justify-content-center flex-column"
      href="#catalog-browse"
    >
      <div id="scrollDown" className="mx-auto">
        <a href="#catalog-browse">
          <img
            src={ScrollDownImg}
            alt="scroll-down"
            width="80px"
            className="mx-md-auto  d-none d-md-block"
          />
        </a>
      </div>
    </div>

    <div id="catalog-browse" className="mx-auto ">
      <div id="searchInputs" className="mx-auto">
        <div class="input-group justify-content-center mx-auto">
          <div class="input-group mb-md-3 mb-1 col-md-4 col-6 ">
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
            <option selected>Choose....</option>
            <option value="1">JS</option>
            <option value="2">CSS</option>
            <option value="3">HTML</option>
          </select>
        </div>
      </div>
      <CourseList />
    </div>
  </Fragment>
);
