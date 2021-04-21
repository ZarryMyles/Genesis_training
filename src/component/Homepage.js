import React from "react";
import { Link } from "react-router-dom";
import "./css/homepage.css";
import readerpic from "../images/img/reader.png";

export default function Homepage() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="contnav">
        <nav
          className="navbar navbar-expand-md  bg-primary sticky-top"
          id="hnavbar"
        >
          <div className="container-fluid" id="HomepageNav">
            <a className="navbar-brand" href="#">
              Genesis Tutorials
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    {" "}
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/Catalog">
                    {" "}
                    Catalog
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    {" "}
                    Contact
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    {" "}
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Main Body */}
      <div className="container-fluid padding">
        <div
          className="row justify-content-center align-items-center"
          id="introText"
        >
          <div className="col-md-12 col-lg-7" id="mainHead">
            <h1 id="mainHead">
              Wake up, <span id="neo">Neo...</span>
            </h1>
            <div id="paragraphsHome">
              <p>
                <br />
                So you're finally here.
              </p>
              <p>
                Whether you're new around here or been visiting every day, it
                doesn't matter.{" "}
              </p>
              <p>You're here now. Good job wasting valuable time</p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5" id="imgReader">
            <img
              id="readerpic"
              src={readerpic}
              alt="sample image"
              srcset=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
