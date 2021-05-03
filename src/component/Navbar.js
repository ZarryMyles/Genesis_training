import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "./services/Auth";
import store from "store";
// css
import "./css/navbar.css";
export default function Navbar(props) {
  // state variables
  const [profileAccess, setProfileAcces] = useState(
    localStorage.getItem("profileAccess") === "true"
  );
  const [catalogPath, setCatalogPath] = useState("/catalog");
  const [profilePath, setProfilePath] = useState("/profile");

  return (
    <header>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top mnavbar"
          id="HomepageNav"
        >
          <a className="navbar-brand gen" href="#">
            Zarrix Tutorials
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
                <a className="nav-link mnav-link" href={catalogPath}>
                  Catalog
                </a>
              </li>
              <li className="nav-item mnav-i" id="navUl">
                {!profileAccess ? (
                  <a className="nav-link mnav-link" href="/login">
                    Sign-In
                  </a>
                ) : (
                  <a className="nav-link mnav-link" href={profilePath}>
                    Profile
                  </a>
                )}
              </li>
              {profileAccess && (
                <li className="nav-item mnav-i" id="navUl">
                  <a
                    className="nav-link mnav-link"
                    href={catalogPath}
                    onClick={auth.logout}
                  >
                    Sign-Out
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
