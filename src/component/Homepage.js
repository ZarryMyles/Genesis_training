import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/homepage.css";
import { Animated } from "react-animated-css";
import home1 from "../images/img/home1.jpg";
import home2 from "../images/img/home2.jpg";
import home3 from "../images/img/home3.jpg";

export default function Homepage() {
  const [localUsername, setLocalUsername] = useState(
    localStorage.getItem("username")
  );
  const [profileAccess, setProfileAcces] = useState(
    localStorage.getItem("profileAccess") === "true"
  );
  const [catalogPath, setCatalogPath] = useState("/catalog");
  const [profilePath, setProfilePath] = useState("/profile");
  console.log(profileAccess);
  return (
    <div id="homeBody">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <a className="navbar-brand homeLogo" href="#">
              Zarix
            </a>{" "}
            <button
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              class="navbar-toggler"
              data-target="#navbarSupportedContent"
              data-toggle="collapse"
              type="button"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item active pronto">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item pronto">
                  <a className="nav-link" href={catalogPath}>
                    Catalog
                  </a>
                </li>
                <li className="nav-item pronto">
                  {!profileAccess ? (
                    <a className="nav-link" href="/login">
                      Sign-up
                    </a>
                  ) : (
                    <a className="nav-link" href={profilePath}>
                      Profile
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div
        className="carousel slide"
        data-ride="carousel"
        id="carouselExampleIndicators"
      >
        <ol className="carousel-indicators">
          <li
            class="active"
            data-slide-to="0"
            data-target="#carouselExampleIndicators"
          ></li>
          <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
          <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block w-100 tryPic hom1"></div>
            <div class="carousel-caption d-block">
              <Animated
                animationIn="bounceInRight"
                animationOut="fadeOut"
                animationInDelay="1s"
                isVisible={true}
              >
                <h5>Web Development</h5>
              </Animated>
              <Animated
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                animationInDelay="2s"
                isVisible={true}
              >
                <p>
                  Here, we'll only be teaching you the very essentials of
                  Web-Development.
                </p>
              </Animated>
              <Animated
                animationIn="bounceInRight"
                animationOut="fadeOut"
                animationInDelay="3s"
                isVisible={true}
              >
                <a href={catalogPath}>Explore</a>
              </Animated>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100 tryPic hom2"></div>
            <div class="carousel-caption d-block">
              <Animated
                animationIn="slideInDown"
                animationOut="fadeOut"
                animationInDelay="1s"
                isVisible={true}
              >
                <h5>Web Design</h5>
              </Animated>
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeOut"
                animationInDelay="2s"
                isVisible={true}
              >
                <p>
                  Learn the essentials of UI and UX design with a Hands-on
                  approach.
                </p>
              </Animated>
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDelay="3s"
                isVisible={true}
              >
                <a href={catalogPath}>Explore</a>
              </Animated>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100 tryPic hom3"></div>
            <div class="carousel-caption d-block">
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDelay="1s"
                isVisible={true}
              >
                <h5>Better Code</h5>
              </Animated>
              <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOut"
                animationInDelay="2s"
                isVisible={true}
              >
                <p>
                  Code Efficiency and Readability is a thing most tutorials skip
                  on. Not us.
                </p>
              </Animated>
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDelay="3s"
                isVisible={true}
              >
                <a href={catalogPath}>Explore</a>
              </Animated>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span aria-hidden="true" class="carousel-control-prev-icon"></span>{" "}
          <span className="sr-only">Previous</span>
        </a>{" "}
        <a
          className="carousel-control-next"
          data-slide="next"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span aria-hidden="true" class="carousel-control-next-icon"></span>{" "}
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
