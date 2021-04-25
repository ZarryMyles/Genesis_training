import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/profile.css";
// images
import ProfileImg from "../images/icons/profile-pic.png";
import PointsImg from "../images/icons/points.png";
import PointsBallImg from "../images/icons/points-ball.png";
import EditImg from "../images/icons/edit-icon.png";

export default function Profile(props) {
  const [user, setUser] = useState();
  const [courselist, setcourslist] = useState();
  let [userscore, setUserscore] = useState(0);

  useEffect(() => {
    let getData = async () => {
      await fetch(`/json/userProfile.json`).then((response) => {
        response.json().then((settings) => {
          let userFilter = settings.filter((user) => {
            return user.username == props.username;
          });
          setUser(userFilter[0]);
          // user score is being set before user is fetched--resolve later
          setUserscore(
            user
              ? user.completedCourses.reduce(
                  (score, course) => course.score + score,
                  0
                )
              : 0
          );
        });
      });
      await fetch(`/json/course.json`).then((response) => {
        response.json().then((list) => {
          setcourslist(list);
        });
      });
    };
    getData();
  }, []);
  function displayProfileCard() {
    return (
      <div>
        <div className="profile-display d-flex flex-column p-2">
          <div id="userProfileImg">
            <img src={ProfileImg} alt="profile-pic" height="150px" />
          </div>
          <h3 id="username" className="text-light text-center ">
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
    );
  }

  function displayCourseImg(course) {
    let coursePath = course.link;
    let image_path = "../" + course.preview_img;

    return (
      <Link
        to={coursePath}
        // onClick={coursedisplay}
        style={{ textDecoration: "none", padding: "5px" }}
      >
        <div className="preview-img-container overflow-hidden">
          <div
            id="preview-img"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url('${image_path}')`,
              minWidth: "100%",
              minHeight: "100%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          ></div>
        </div>
        <h6 className="course-list-title text-center py-1">{course.name}</h6>
      </Link>
    );
  }
  function displayPointsCard() {
    return (
      <div id="points-display" className="p-3">
        <div className="score-img-quote d-flex ">
          <div className="pointsImg align-self-center">
            <img src={PointsImg} alt="points-gif" height="50px" />
          </div>
          <div id="scoreNo" className="text-light align-self-center p-2">
            <h2>{user ? userscore : "00"}</h2>
          </div>
          <div className="points-quote text-light align-self-center ">
            <h6 className="p-2 my-auto">Keep up the good work!</h6>
          </div>
        </div>
        <div className="latest-tests mt-1 p-1">
          <div className="d-flex flex-column align-items-center">
            <h6 className="text-light">Recent Completed Tests</h6>
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
    );
  }
  return (
    <div className="d-flex mt-5 mx-2 pt-4 p-1 mb-5">
      {displayProfileCard()}
      <div className="profileWrapper  d-flex flex-wrap justify-content-center m-2">
        {displayPointsCard()}
        <div id="courses-details">
          <div className="d-flex flex-column align-items-center text-light">
            <div>
              <h5>Enrolled Courses</h5>
              <h5 className="text-primary">
                {user
                  ? user.completedCourseId.length + user.currentCourseId.length
                  : 0}
              </h5>
            </div>
            <div>
              <h5>Completed Courses</h5>
              <h5 className="text-success">
                {user ? user.completedCourseId.length : 0}
              </h5>
            </div>
            <div>
              <h5>Ongoing Courses</h5>
              <h5 className="text-danger">
                {user ? user.currentCourseId.length : 0}
              </h5>
            </div>
          </div>
        </div>
        <div className="completedCourse-wrapper p-3 m-2">
          <h4 className="text-success text-center">
            Ongoing Courses . . . You gotta finish 'em.
          </h4>
          <div id="CompletedCourses" className="d-flex flex-wrap">
            {user && courselist
              ? courselist.map((course) => {
                  if (user.currentCourseId.includes(course.courseId)) {
                    return displayCourseImg(course);
                  }
                })
              : ""}
          </div>
        </div>
        <div className="completedCourse-wrapper p-3 m-2">
          <h4 className="text-light text-center">
            You have finished these so far . . . more to go!
          </h4>
          <div id="CompletedCourses" className="d-flex flex-wrap">
            {user && courselist
              ? courselist.map((course) => {
                  if (user.completedCourseId.includes(course.courseId)) {
                    return displayCourseImg(course);
                  }
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
