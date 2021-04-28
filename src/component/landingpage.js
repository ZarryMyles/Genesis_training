import React from "react";
import LoginAuth from "./LoginAuth";
export default function landingpage(props) {
  return (
    <div>
      <div className="text-center m-5">
        <button
          className="btn btn-default btn-outline-success text-light"
          onClick={() => {
            LoginAuth.login(() => {
              props.history.push("/test");
            });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
