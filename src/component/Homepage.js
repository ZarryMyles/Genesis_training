import React from "react";
import { Link } from "react-router-dom";
import "./css/homepage.css";
import readerpic from "../images/img/reader.png";
import FaCaretDown from "../images/icons/caret.svg";

export default function Homepage() {
  return (
    <div>
      <div className="container-fluid padding">
        <div
          className="row justify-content-center align-items-center"
          id="introText"
        >
          <div className="col-md-12 col-lg-7" id="mainHead">
            <h1 id="mainHead">
              Why spend money on useless bootcamps where you get no results?
            </h1>
            <div id="paragraphsHome">
              <p>
                <br />
                Join us now to experience the best hands-on tutorials for
                Web-development you can get, for Free.
              </p>
              <p>Scroll down, and hold on to your seats....</p>
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
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-12" id="scrollIconHome">
              <img
                id="FaCaretDown"
                src={FaCaretDown}
                alt="sample image"
                srcset=""
                height="50px"
                className="  position-absolute WebsScreenImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
