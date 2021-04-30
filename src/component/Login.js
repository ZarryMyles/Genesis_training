import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./css/login.css";
import axios from "axios";
import API from "./API";
// trying
import DATA from "./DATA";
import LoginAuth from "./LoginAuth";
// images
import LoginImg from "../images/img/undraw-login.png";
import UserImg from "../images/icons/user-icon.png";

export default function Login(props) {
  // state variables
  const [signInStatus, setStatus] = useState(true);
  const [userMail, setUserMail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [username, setUsername] = useState();
  const [redirect, setredirect] = useState(false);
  const [wrongPassword, setWrongpassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [users, setUser] = useState();

  useEffect(() => {
    getData();
    // testing();
  });

  let getData = async () => {
    await fetch(API.loginInfo).then((response) => {
      response.json().then((data) => {
        setUser(data);
      });
    });
  };
  // posting new user data
  function postData() {
    axios
      .post(API.loginInfo, {
        userId: 0,
        name: username,
        username: username,
        email: userMail,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
    axios.post(API.userProfile, {
      userId: null,
      name: username,
      username: username,
      email: userMail,
      score: 0,
      password: password,
      completedCourseId: [],
      currentCourseId: [],
      completedCourses: [],
    });
  }
  function toggleStat() {
    setStatus((prevStat) => !prevStat);
  }
  function handleKeypress(e, choice) {
    let key = e.keyCode || e.which;
    if (key === 13) {
      switch (choice) {
        case "signIn":
          loginHandler();
          break;
        case "signUp":
          signUpHandler();
          break;
      }
    }
  }
  function displayWrongPassword() {
    return (
      <div className="wrongpassword my-3">
        <div className="text-danger">Your username or password is wrong!</div>
      </div>
    );
  }
  function displayPasswordMismatch() {
    return (
      <div className="wrongpassword my-3">
        <div className="text-danger">Your Passwords donot match!</div>
      </div>
    );
  }

  // redirecting to catalog on logging in
  function loginHandler() {
    if (userMail && password) {
      let userInfo = users.filter((user) => {
        return user.email === userMail;
      });
      if (userInfo[0] !== undefined && password === userInfo[0].password) {
        userInfo = userInfo[0];
        setUsername(userInfo.username);
        // LoginAuth.login(() => {
        //   // props.history.push("/category");
        // });
        console.log("loggin in");
        setredirect(true);
      } else setWrongpassword(true);
    }
  }
  function redirectingPage() {
    let path = "/catalog/" + username;
    return <Redirect to={path} />;
  }
  function signUpHandler() {
    if (password !== confirmPassword) setPasswordsMatch(false);
    else {
      setPasswordsMatch(true);
      if (userMail && password && username && password === confirmPassword) {
        postData();
        setredirect(true);
      }
    }
  }

  // sign in and sign Up input screens
  function signIn() {
    return (
      <div className="login-info mx-auto">
        <div className="user-inputs user-inputs-login text-light d-flex flex-column ">
          <img className="userImg " src={UserImg} alt="" srcset="" />

          <input
            className="mx-auto text-light text-center my-4  px-3 py-2"
            type="text"
            placeholder="Enter your  email id"
            onChange={(e) => setUserMail(e.target.value)}
            name="userMail"
            onKeyPress={(e) => handleKeypress(e)}
          />
          <input
            className="mx-auto text-light text-center  my-4  px-3 py-2"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => handleKeypress(e, "signIn")}
            name="password"
          />

          <button
            className="bg-outline-btn logging-btn-green  mt-3"
            onClick={loginHandler}
          >
            Sign In
          </button>
          {wrongPassword ? displayWrongPassword() : ""}
        </div>
      </div>
    );
  }
  function signUp() {
    return (
      <div className="login-info mx-auto">
        <div className="user-inputs user-inputs-signup text-light d-flex flex-column ">
          <img className="userImg " src={UserImg} alt="" srcset="" />
          <input
            className="mx-auto text-light text-center my-4  px-3 py-2"
            type="text"
            placeholder="Enter your  username"
            onChange={(e) => setUsername(e.target.value)}
            name="userName"
            onKeyPress={(e) => handleKeypress(e)}
          />
          <input
            className="mx-auto text-light text-center my-4  px-3 py-2"
            type="text"
            placeholder="Enter your email id"
            onChange={(e) => setUserMail(e.target.value)}
            name="email"
          />
          <input
            className="mx-auto text-light text-center  my-4  px-3 py-2"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <input
            className="mx-auto text-light text-center  my-4  px-3 py-2"
            type="password"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyPress={(e) => handleKeypress(e, "signUp")}
            name="confirmPassword"
          />
          <button
            className=" bg-outline-btn logging-btn-blue  mt-3"
            onClick={signUpHandler}
          >
            Sign Up
          </button>
          {!passwordsMatch ? displayPasswordMismatch() : ""}
        </div>
      </div>
    );
  }
  // login screen container
  function loginScreen() {
    return (
      <div>
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

  return (
    <div className="login-container">
      {redirect ? redirectingPage() : loginScreen()}
    </div>
  );
}
