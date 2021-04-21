import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// images
import LoginImg from "../images/img/undraw-login.png";
import UserImg from "../images/icons/user-icon.png";
// css
import "./css/login.css";
export default function Login() {
  const [signInStatus, SetStatus] = useState(true);
  let users;
  useEffect(() => {
    getData();
  });

  let getData = async () => {
    await fetch(`/json/userLogin.json`).then((response) => {
      response.json().then((data) => {
        users = data;
        console.log(users);
      });
    });
  };

  function toggleStat() {
    SetStatus((prevStat) => !prevStat);
  }
  function checkPassword() {
    // check for credentials once db ready
    return redirectToHome();
  }
  function redirectToHome() {
    return <Redirect to="/catalog/" />;
  }
  function signIn() {
    return (
      <div className="login-info mx-auto">
        <div className="user-inputs text-light d-flex flex-column ">
          <img className="userImg " src={UserImg} alt="" srcset="" />
          <input
            className="mx-auto text-light text-center my-4  px-3 py-2"
            type="text"
            placeholder="enter your  email id"
          />
          <input
            className="mx-auto text-light text-center  my-4  px-3 py-2"
            type="password"
            placeholder="enter your password"
          />

          <button
            className="bg-outline-btn logging-btn-green  mt-3"
            onClick={checkPassword}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }
  function signUp() {
    return (
      <div className="login-info mx-auto">
        <div className="user-inputs text-light d-flex flex-column ">
          <img className="userImg " src={UserImg} alt="" srcset="" />
          <input
            className="mx-auto text-light text-center my-4  px-3 py-2"
            type="text"
            placeholder="enter your email id"
          />
          <input
            className="mx-auto text-light text-center  my-4  px-3 py-2"
            type="password"
            placeholder="enter your password"
          />
          <input
            className="mx-auto text-light text-center  my-4  px-3 py-2"
            type="password"
            placeholder="confirm your password"
          />
          <button
            className=" bg-outline-btn logging-btn-blue  mt-3"
            onClick={checkPassword}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="login-container">
      <div class="toggle-switch-container ">
        <div className="login-checkbox-text">
          {signInStatus ? (
            <div className="text-green">Sign In</div>
          ) : (
            <div className="text-blue">Sign Up</div>
          )}
        </div>
        <input type="checkbox" onClick={toggleStat} />
      </div>
      <img
        id="LoginUndrawImg"
        className="d-none d-lg-block"
        src={LoginImg}
        alt=""
        srcset=""
      />
      {!signInStatus ? signIn() : signUp()}
    </div>
  );
}
