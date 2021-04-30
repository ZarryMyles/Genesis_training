import React from "react";
import { Link } from "react-router-dom";
// css
import "./css/Preloader.css";
export default function Preloader() {
  return (
    <div>
      <div className="preLoad">
        <span></span>
      </div>
      {/* Use this With the following code on other components:

      $(window).on("load",function() {
          $(".Preloader").fadeOut("slow");
      });

      */}
    </div>
  );
}
