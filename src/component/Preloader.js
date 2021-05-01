import React, { useState, useEffect } from "react";
// css
import "./css/Preloader.css";
export default function Preloader(props) {
  const [size, setSize] = useState("preLoad preload-position-");
  const [preloaderColor, setPreloaderColor] = useState("preloader-color-");
  // size='big'/'small';           =>position fixed/relative
  useEffect(() => {
    setSize((size) => (props.size ? size + props.size : size + "big "));
    setPreloaderColor((color) =>
      props.color ? color + props.color : color + "green"
    );
  }, []);

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

  return (
    <div className={size}>
      <span className={preloaderColor}></span>
    </div>
  );
}
