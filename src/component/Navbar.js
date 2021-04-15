import React from "react";
import { Link } from "react-router-dom";
// css
import "./css/navbar.css";
export default function navbar() {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg fixed-top " id="navbar-container">
          <a class="navbar-brand text-light ml-4" href="/">
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
                <a class="nav-link text-light my-1" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-light my-1"
                  href="/catalog#catelog-browse"
                >
                  Discover
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link btn btn-outline-primary  mx-2 my-1 px-3 py-1"
                  type="button"
                  href="#"
                >
                  Sign In
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  btn btn-outline-success mx-2 my-1 px-3 py-1"
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
    </div>
  );
}
