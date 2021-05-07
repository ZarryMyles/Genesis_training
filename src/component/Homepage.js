import React, { useState } from "react";
import "./css/homepage.css";
import { Animated } from "react-animated-css";

export default function Homepage() {
  const [profileAccess, setProfileAcces] = useState(
    localStorage.getItem("profileAccess") === "true"
  );
  const catalogPath = "/catalog";
  const profilePath = "/profile";
  const homepageData = [
    {
      activeState: "active ",
      pictureName: "hom1",
      header: {
        text: "WEB DEVELOPMENT",
        animationIn: "bounceInRight",
        animationOut: "fadeOut",
        animationInDelay: "1s",
        isVisible: true,
      },

      description: {
        text:
          "Here, we'll only be teaching you the very essentials of Web-Development.",
        animationIn: "bounceInLeft",
        animationOut: "fadeOut",
        animationInDelay: "2s",
        isVisible: true,
      },
      button: {
        animationIn: "bounceInRight",
        animationOut: "fadeOut",
        animationInDelay: "3s",
      },
    },
    {
      activeState: " ",
      pictureName: "hom2",
      header: {
        text: "WEB DESIGN",
        animationIn: "slideInDown",
        animationOut: "fadeOut",
        animationInDelay: "1s",
        isVisible: true,
      },

      description: {
        text:
          "Learn the essentials of UI and UX design with a Hands-on approach.",
        animationIn: "fadeInUp",
        animationOut: "fadeOut",
        animationInDelay: "2s",
        isVisible: true,
      },
      button: {
        animationIn: "zoomIn",
        animationOut: "fadeOut",
        animationInDelay: "3s",
      },
    },
    {
      activeState: " ",
      pictureName: "hom3",

      header: {
        text: "Better Code",
        animationIn: "zoomIn",
        animationOut: "fadeOut",
        animationInDelay: "1s",
        isVisible: true,
      },

      description: {
        text:
          "Code Efficiency and Readability is a thing most tutorials skip on. Not us.",
        animationIn: "fadeInLeft",
        animationOut: "fadeOut",
        animationInDelay: "2s",
        isVisible: true,
      },
      button: {
        animationIn: "zoomIn",
        animationOut: "fadeOut",
        animationInDelay: "3s",
      },
    },
  ];
  function navbar() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <a className="navbar-brand homeLogo" href="#">
              Zarix
            </a>{" "}
            <button
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
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
                <li className="nav-item active pronto">
                  <a className="nav-link" href={catalogPath}>
                    Catalog
                  </a>
                </li>
                <li className="nav-item active pronto">
                  {!profileAccess ? (
                    <a className="nav-link" href="/login">
                      Sign-In
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
    );
  }
  function displayCarouselItem(data) {
    let pictureClassname = "d-block w-100 tryPic " + data.pictureName;
    let itemClassName = "carousel-item " + data.activeState;
    return (
      <div className={itemClassName}>
        <div className={pictureClassname}></div>
        <div class="carousel-caption d-block">
          <Animated
            animationIn={data.header.animationIn}
            animationOut={data.header.animationOut}
            animationInDelay={data.header.animationInDelay}
            isVisible={true}
          >
            <h5>{data.header.text}</h5>
          </Animated>
          <Animated
            animationIn={data.description.animationIn}
            animationOut={data.description.animationOut}
            animationInDelay={data.description.animationInDelay}
            isVisible={true}
          >
            <p>{data.description.text}</p>
          </Animated>
          <Animated
            animationIn={data.button.animationIn}
            animationOut={data.button.animationOut}
            animationInDelay={data.button.animationInDelay}
            isVisible={true}
          >
            <a href={catalogPath}>Explore</a>
          </Animated>
        </div>
      </div>
    );
  }
  function displayNavButtons() {
    return (
      <>
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
      </>
    );
  }
  return (
    <div id="homeBody">
      {navbar()}
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
          {homepageData.map((item) => displayCarouselItem(item))}
        </div>
        {displayNavButtons()}
      </div>
    </div>
  );
}
