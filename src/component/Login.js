import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// images
import LoginImg from "../images/img/undraw-login.png";
import UserImg from "../images/icons/user-icon.png";
// css
import "./css/login.css";
export default function Login(props) {
  const [signInStatus, setStatus] = useState(true);
  const [userMail, setUserMail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [username, setUsername] = useState();
  const [redirect, setredirect] = useState(false);
  const [wrongPassword, setWrongpassword] = useState(false);
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
    setStatus((prevStat) => !prevStat);
  }
  function handleKeypress(e) {
    let key = e.keyCode || e.which;
    if (key == 13) {
      submitHandler();
    }
  }
  function displayWrongPassword() {
    return (
      <div className="wrongpassword my-3">
        <div className="text-danger">Your username or password is wrong!</div>
      </div>
    );
  }
  function submitHandler() {
    if (userMail && password) {
      let userInfo = users.filter((user) => {
        return user.email == userMail;
      });
      console.log(userMail, password, userInfo[0]);
      if (userInfo[0] !== undefined && password == userInfo[0].password) {
        userInfo = userInfo[0];
        console.log(userInfo);
        setUsername(userInfo.username);

        setredirect(true);
      } else setWrongpassword(true);
    }
  }
  function redirectingPage() {
    let path = "/catalog/" + username;
    console.log(path);
    return <Redirect to={path} />;
  }

  // sign in and sign Up buttons
  function signIn() {
    return (
      <div className="login-info mx-auto">
        <div className="user-inputs text-light d-flex flex-column ">
          <img className="userImg " src={UserImg} alt="" srcset="" />
          <input
            className="mx-auto text-light text-center my-4  px-3 py-2"
            type="text"
            placeholder="enter your  email id"
            onChange={(e) => setUserMail(e.target.value)}
            name="userMail"
            onKeyPress={(e) => handleKeypress(e)}
          />
          <input
            className="mx-auto text-light text-center  my-4  px-3 py-2"
            type="password"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => handleKeypress(e)}
            name="password"
          />

          <button
            className="bg-outline-btn logging-btn-green  mt-3"
            onClick={submitHandler}
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
        <div className="user-inputs text-light d-flex flex-column ">
          <img className="userImg " src={UserImg} alt="" srcset="" />
          <input
            className="mx-auto text-light text-center my-4  px-3 py-2"
            type="text"
            placeholder="enter your email id"
            onChange={(e) => setUserMail(e.target.value)}
            name="email"
          />
          <input
            className="mx-auto text-light text-center  my-4  px-3 py-2"
            type="password"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <input
            className="mx-auto text-light text-center  my-4  px-3 py-2"
            type="password"
            placeholder="confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
          />
          <button className=" bg-outline-btn logging-btn-blue  mt-3">
            Sign Up
          </button>
        </div>
      </div>
    );
  }
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
