import React, { useState } from "react";

export default function Testid(props) {
  let userInfo;
  let newUser = {
    userId: 4,
    name: "Oliver Queen",
    email: "oliver@gmail.com",
    password: "canary",
  };

  let getData = async () => {
    await fetch(`/json/userLogin.json`).then((response) => {
      response.json().then((data) => {
        userInfo = data;
        console.log(userInfo);
      });
    });
  };
  let addData = async () => {
    await fetch(`/json/`, {
      method: "POST",
      headers: {
        Accept: "userLogin.json",
      },
      body: newUser,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body);
      });
  };
  getData();
  addData();
  return (
    <div>
      <h1></h1>
    </div>
  );
}
