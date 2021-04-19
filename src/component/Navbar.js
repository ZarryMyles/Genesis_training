import React from "react";
import { Link } from "react-router-dom";
// css
import "./css/navbar.css";
export default function navbar() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top mnavbar">
          <a className="navbar-brand gen" href="#">Genesis Tutorials</a>
          <button className="navbar-toggler mnavbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="d-flex align-items-end navbar-nav ml-lg-auto mnavbar-nav">
              <li className="nav-item active mnav-i">
                <a className="nav-link mnav-link" href="#">Home<span className="sr-only">(current)
                  </span>
                </a>
              </li>
              <li className="nav-item mnav-i">
                <a className="nav-link mnav-link" href="#">Catalog</a>
              </li>
              <li className="nav-item mnav-i">
                <a className="nav-link mnav-link" href="#">Contact</a>
              </li>
              <li className="nav-item mnav-i">
                <a className="nav-link mnav-link" href="#">Sign In</a>
              </li> 
            </ul>       
          </div>
        </nav>
      </div>
    </header>
  );
}
