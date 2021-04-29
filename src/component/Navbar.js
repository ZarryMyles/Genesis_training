import React, { useState } from "react";
import { Link } from "react-router-dom";
// css
import "./css/navbar.css";
export default function Navbar(props) {
  const [username, setUsername] = useState(props.username);
  return (
    <header>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top mnavbar"
          id="HomepageNav"
        >
          <a className="navbar-brand gen" href="#">
            Genesis Tutorials
          </a>
          <button
            className="navbar-toggler mnavbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="d-flex align-items-end navbar-nav ml-lg-auto mnavbar-nav"
              id="navUl"
            >
              <li className="nav-item active mnav-i" id="navUl">
                <a className="nav-link mnav-link" href="/">
                  Home<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mnav-i" id="navUl">
                <a className="nav-link mnav-link" href={"/catalog/" + username}>
                  Catalog
                </a>
              </li>
              {/* <li className="nav-item mnav-i" id="navUl">
                <a className="nav-link mnav-link" href="#">
                  Contact
                </a>
              </li> */}
              {username === undefined || username === "user" ? (
                <li className="nav-item mnav-i" id="navUl">
                  <a className="nav-link mnav-link" href="/login">
                    Sign In
                  </a>
                </li>
              ) : (
                <li className="nav-item mnav-i" id="navUl">
                  <a
                    className="nav-link mnav-link"
                    href={"/profile/" + username}
                  >
                    Profile
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
