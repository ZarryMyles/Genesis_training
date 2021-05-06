import React, { useState, useEffect } from "react";
import auth from "./services/Auth";
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
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top mnavbar"
        id="HomepageNav"
      >
        <div className="container-fluid">
          <a className="navbar-brand gen" href="#">
            Zarix Tutorials
          </a>
          <button
            className="navbar-toggler mnavbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navUli">
              <li className="nav-item active pronto mnav-i" id="navUl">
                <a className="nav-link mnav-link" href="/">
                  Home<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active mnav-i" id="navUl">
                <a className="nav-link mnav-link" href={catalogPath}>
                  Catalog
                </a>
              </li>
              <li className="nav-item active mnav-i" id="navUl">
                {!profileAccess ? (
                  <a className="nav-link mnav-link" href="/login">
                    Sign-In
                  </a>
                ) : (
                  <a className="nav-link active mnav-link" href={profilePath}>
                    Profile
                  </a>
                )}
              </li>
              {profileAccess && (
                <li className="nav-item active mnav-i" id="navUl">
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
        </div>
      </nav>
    </header>
  );
}
