import React from "react";
import Img from "./web11.png";
import "./catalog.css";
export default function catalog() {
  return (
    <div>
      <div id="catelog-home">
        <div id="catalog-header">
          <nav class="navbar navbar-expand-lg ">
            <a class="navbar-brand text-light ml-4" href="#">
              Website Name
            </a>
            <button
              class="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon-light"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto topnav">
                <li class="nav-item ">
                  <a class="nav-link text-light" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#catelog-browse">
                    Discover
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link btn btn-outline-primary  mx-2 px-3 py-1"
                    type="button"
                    href="#"
                  >
                    Sign In
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link  btn btn-outline-success mx-2 px-3 py-1"
                    type="button"
                    href="#"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div id="welcome-page" className="d-flex my-4">
          <img
            src={Img}
            alt="sample image"
            srcset=""
            height="450px"
            className="m-4 col-6 d-none d-md-block "
          />
          <div id="CatelogDesc" className="text-light m-5">
            <h2 className=" ">Lorem ipsum dolor sit amet.</h2>
            <h4 className=" mx-3 py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              quisquam eveniet beatae doloribus id explicabo dolor unde omnis
              quis cupiditate?
            </h4>
            <div class="input-group m-5 row">
              <input
                id="CourseSearchInput"
                type="text"
                class="form-control col-6 "
                placeholder="Course Name"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline col-3"
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
      </div>
      <div id="catelog-browse" className="mx-auto my-5">
        <div id="searchInputs" className="row">
          <div class="input-group justify-content-center ">
            <div class="input-group mb-3 col-4 ">
              <input
                type="text"
                class="form-control text-color-dark-blue"
                placeholder="Search for course"
                aria-label="Search for course"
                aria-describedby="button-addon2"
              />
            </div>
            <select
              class="form-select bg-color-green mx-5 rounded p-2"
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
          <div id="htmlCourses"></div>
        </div>
      </div>
    </div>
  );
}
