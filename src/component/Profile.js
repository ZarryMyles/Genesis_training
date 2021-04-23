import React, { useState } from "react";
import "./css/profile.css";
// images
import ProfileImg from "../images/icons/profile-pic.png";
import PointsGif from "../images/icons/points.gif";
import PointsImg from "../images/icons/points.png";
import PointsBallImg from "../images/icons/points-ball.png";
import EditImg from "../images/icons/edit-icon.png";

export default function Profile(props) {
  const [user, setUser] = useState();

  let getData = async () => {
    await fetch(`/json/userProfile.json`).then((response) => {
      response.json().then((settings) => {
        let userFilter = settings.filter((user) => {
          return user.username == props.username;
        });
        setUser(userFilter[0]);
        // console.log(user);
      });
    });
  };
  getData();
  return (
    <div className="d-flex mt-5 mx-2 pt-4 p-1">
      <div>
        <div className="profile-display d-flex flex-column p-3">
          <div id="userProfileImg">
            <img src={ProfileImg} alt="profile-pic" height="150px" />
          </div>
          <h3 id="username" className="text-light mx-auto">
            {user ? user.name : ""}{" "}
            <img
              src={EditImg}
              alt="edit-icon"
              width="20px"
              className="my-auto"
            />
          </h3>
        </div>
      </div>
      <div className="profileWrapper  d-flex flex-wrap">
        <div id="points-display" className="p-3">
          <div className="score-img-quote d-flex ">
            <div className="pointsImg align-self-center">
              <img src={PointsImg} alt="points-gif" height="50px" />
            </div>
            <div id="scoreNo" className="text-light align-self-center p-2">
              <h2>{user ? user.score : "00"}</h2>
            </div>
            <div className="points-quote text-light align-self-center ">
              <h6 className="p-2 my-auto">Keep up the good work!</h6>
            </div>
          </div>
          <div className="latest-tests mt-1 p-1">
            <div className="d-flex flex-column align-items-center">
              <h6 className="text-light">Completed Tests</h6>
              <div className="completed-test-list  text-light">
                <div className="test-name d-flex flex-column ">
                  {user
                    ? user.completedCourses.map(({ name, score }) => {
                        return (
                          <div>
                            <span>{name}</span>{" "}
                            <span className="text-primary">
                              {score}
                              <img
                                className="ml-1 "
                                src={PointsBallImg}
                                alt="score"
                                height="25px"
                              />{" "}
                            </span>
                          </div>
                        );
                      })
                    : "Nothing Completed Yet"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="courses-details">
          <div className="d-flex flex-column align-items-center text-light">
            <div>
              <h5>Enrolled Courses</h5>
              <h5 className="text-primary">10</h5>
            </div>
            <div>
              <h5>Completed Courses</h5>
              <h5 className="text-success">8</h5>
            </div>
            <div>
              <h5>Ongoing Courses</h5>
              <h5 className="text-danger">2</h5>
            </div>
          </div>
        </div>
        <div id="CompletedCourses">
          <div></div>
        </div>
      </div>
    </div>
  );
}
