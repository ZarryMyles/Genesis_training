import React from "react";
// css
import "./css/Preloader.css";
export default function Preloader(props) {
  // return (
  //   <div>
  //     <div className="preLoad">
  //       <span></span>
  //     </div>
  //     {/* Use this With the following code on other components:

  //     $(window).on("load",function() {
  //         $(".Preloader").fadeOut("slow");
  //     });

  //     */}
  //   </div>
  // );
  if (props.small)
    return (
      <div className="preLoad preload-position-relative">
        <span></span>
      </div>
    );
  else
    return (
      <div className="preLoad preload-position-fixed">
        <span></span>
      </div>
    );
}
