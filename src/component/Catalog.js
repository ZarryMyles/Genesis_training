import React, { Fragment, useState, createRef } from "react";
import "./css/catalog.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// routes

import CourseList from "./CourseList";
// images
import GuySittingImg from "../images/img/webdev-guy-sitting.png";
import WebScreenImg from "../images/img/webdev-screen.png";
import ScrollDownImg from "../images/icons/scrolldown.png";
import SearchIconImg from "../images/icons/search-icon.png";

export default function Catalog(props) {
  // trying to get the page to scroll to list on enter click
  const listDiv = createRef();
  function scrollToList() {
    listDiv.current.scrollIntoView({ behavior: "smooth" });
  }
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="mb-5 pb-5">
      <div>
        <div id="catelog-home"></div>
      </div>
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
          className="text-light my-md-5 my-3 col-11  col-md-5 "
        >
          <h2 className="mx-4 catalog-header">Lorem ipsum dolor sit amet.</h2>
          <p className=" mx-4 py-3 lh-base catalog-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            harum neque eius similique facere libero, hic repellat nemo
            aspernatur sequi sit voluptatem sed doloribus quos voluptate modi
            veniam, voluptates cum non veritatis ipsa consequatur quisquam?
          </p>
          <div id="catalog-input" class="input-group mx-4  my-5 row ">
            <input
              id="CourseSearchInput"
              type="text"
              class="form-control col-md-6 col-7 d-none d-md-block"
              placeholder="Course Name"
              aria-describedby="button-addon2"
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <a
              href="#scrollToCourseList"
              type="button"
              class="btn btn-outline col-3 p-1"
            >
              Search
            </a>
          </div>
        </div>
      </div>
      <div
        id="discover-btn"
        className="  mb-1 d-flex justify-content-center flex-column"
        href="#catalog-browse"
      >
        <div id="scrollDown" className="mx-auto">
          <a href="#scrollToCourseList">
            <img
              src={ScrollDownImg}
              alt="scroll-down"
              width="55px"
              className="mx-md-auto  d-none d-md-block"
            />
          </a>
        </div>
      </div>

      <div id="scrollToCourseList" style={{ paddingTop: "100px" }}></div>
      <div class="input-group justify-content-center mx-auto ">
        <div class="input-group mb-md-3 mb-1 col-md-4 col-sm-2 ">
          <input
            id="catalogSearchInput"
            type="text"
            class="form-control text-color-dark-blue courselist-search-input"
            placeholder="Search for course"
            aria-describedby="button-addon2"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <CourseList searchInput={searchInput.trim()} />
    </div>
  );
}
