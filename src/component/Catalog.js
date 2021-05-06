import React, { useState } from "react";
import "./css/catalog.css";
// routes
import CourseList from "./CourseList";
// images
import GuySittingImg from "../images/img/webdev-guy-sitting.png";
import WebScreenImg from "../images/img/webdev-screen.png";
import ScrollDownImg from "../images/icons/scrolldown.png";

export default function Catalog() {
  const [searchInput, setSearchInput] = useState("");
  function displayImages() {
    return (
      <div
        id="webdev-images"
        className="d-none d-md-block position-relative col-6"
      >
        <img
          id="GuySittingImg"
          src={GuySittingImg}
          alt="course preview"
          height="300px"
          className="  position-absolute WebsScreenImg"
        />
        <img
          id="WebScreenImg"
          src={WebScreenImg}
          alt="course preview"
          height="250px"
          className="  position-absolute"
        />
      </div>
    );
  }
  function displayDescription() {
    return (
      <div
        id="CatelogDesc"
        className="text-light my-md-5 my-3 col-11  col-md-5 "
      >
        <h2 className="mx-4 catalog-header">Course Catalog</h2>
        <p className=" mx-4 py-3 lh-base catalog-content">
          Take a look at some of our courses.
          <br />
          You can get started right away for free.
          <br />
          To access quizzes and to save progress, however, you need to sign up.
          It only takes a minute.
        </p>
        {displaySearchbar(true)}
      </div>
    );
  }
  function displaySearchbar(main) {
    if (main)
      return (
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
      );
    else
      return (
        <>
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
        </>
      );
  }
  function displayScrollImg() {
    return (
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
    );
  }
  return (
    <div className="mb-5 pb-5">
      <div id="welcome-page" className="row mx-auto">
        {displayImages()}
        {displayDescription()}
      </div>
      {displayScrollImg()}
      {displaySearchbar(false)}
      <CourseList searchInput={searchInput.trim()} />
    </div>
  );
}
