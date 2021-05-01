import React from "react";
import { Link } from "react-router-dom";
import "./css/homepage.css";
import { Animated } from "react-animated-css";
import home1 from "../images/img/home1.jpg";
import home2 from "../images/img/home2.jpg";
import home3 from "../images/img/home3.jpg";

export default function Homepage() {
  return (
    <div id="homeBody">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
          <div class="container">
            <a class="navbar-brand homeLogo" href="#">
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
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto ">
                <li class="nav-item active pronto">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item pronto">
                  <a class="nav-link" href="/catalog/user">
                    Catalog
                  </a>
                </li>
                <li class="nav-item pronto">
                  <a class="nav-link" href="/login">
                    Sign-up
                  </a>
                </li>
                {/* <li class="nav-item pronto">
                  <a class="nav-link" href="/login">
                    Log-in
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div
        class="carousel slide"
        data-ride="carousel"
        id="carouselExampleIndicators"
      >
        <ol class="carousel-indicators">
          <li
            class="active"
            data-slide-to="0"
            data-target="#carouselExampleIndicators"
          ></li>
          <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
          <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img alt="First slide" class="d-block w-100" src={home1} />
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
                  Here, at Zarix Tutorials, we strive to help you learn the very
                  essentials of Web Development without confusion.
                </p>
              </Animated>
              <Animated
                animationIn="bounceInRight"
                animationOut="fadeOut"
                animationInDelay="3s"
                isVisible={true}
              >
                <p>
                  <a href="/catalog/user">Explore</a>
                </p>
              </Animated>
            </div>
          </div>
          <div class="carousel-item">
            <img alt="Second slide" class="d-block w-100" src={home2} />
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
                  Learn the essentials of UI and UX design with Hands-on
                  approach.
                </p>
              </Animated>
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDelay="3s"
                isVisible={true}
              >
                <p>
                  <a href="/catalog/user">Explore</a>
                </p>
              </Animated>
            </div>
          </div>
          <div class="carousel-item">
            <img alt="Third slide" class="d-block w-100" src={home3} />
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
                  Code efficiency and Readability is a thing most tutorials skip
                  on. Not us
                </p>
              </Animated>
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDelay="3s"
                isVisible={true}
              >
                <p>
                  <a href="/catalog/user">Explore</a>
                </p>
              </Animated>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          data-slide="prev"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span aria-hidden="true" class="carousel-control-prev-icon"></span>{" "}
          <span class="sr-only">Previous</span>
        </a>{" "}
        <a
          class="carousel-control-next"
          data-slide="next"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span aria-hidden="true" class="carousel-control-next-icon"></span>{" "}
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
