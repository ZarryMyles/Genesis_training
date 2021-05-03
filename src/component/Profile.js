import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./css/profile.css";
// services
import API from "./services/API";
import axios from "axios";
// images
import IMAGES from "./IMAGES";
import ProfileImg from "../images/icons/profile-pic.png";
import Preloader from "./Preloader";
export default function Profile(props) {
  const [user, setUser] = useState();
  const [courselist, setCourseList] = useState();
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [localUsername, setLocalUsername] = useState(
    localStorage.getItem("username")
  );
  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  let getData = async () => {
    // fetching user profile info
    // trying with axios
    // const { data: fetchUser } = await axios.get(API.userProfile);
    // console.log(fetchUser, props.username);
    // setUser(fetchUser.filter((user) => user.username == props.username;));

    await fetch(API.userProfile).then((response) => {
      response.json().then((settings) => {
        let userFilter = settings.filter((user) => {
          // return user.username == props.username;
          return user.username === localUsername;
        });
        userFilter[0] !== undefined
          ? setUser(userFilter[0])
          : setRedirect(true);
      });
    });
    // fetching courselist
    const { data: fetchCourseList } = await axios.get(API.courseList);
    setCourseList(fetchCourseList);
  };
  function displayProfileCard() {
    return (
      <div className="profile-display align-items-center  flex-grow d-flex flex-column p-2">
        <div id="userProfileImg">
          <img src={ProfileImg} alt="profile-pic" />
        </div>
        <h3 id="username" className=" text-center ">
          {user ? user.username : ""}{" "}
        </h3>
      </div>
    );
  }
  function displayCourseImg(course) {
    let coursePath = course.link;
    let image_path = "../" + course.preview_img;

    return (
      <Link to={coursePath} style={{ textDecoration: "none", padding: "5px" }}>
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
  function userLevelImg(score) {
    if (score < 50) return IMAGES.userLevel1;
    else if (score < 100) return IMAGES.userLevel2;
    else if (score < 150) return IMAGES.userLevel3;
    else if (score < 200) return IMAGES.userLevel4;
  }
  function testScoreImg(score) {
    if (score < 5) return IMAGES.stars0;
    else if (score < 10) return IMAGES.stars1;
    else if (score < 15) return IMAGES.stars2;
    else if (score > 15) return IMAGES.stars3;
  }
  function displayPointsCard() {
    return (
      <div id="points-display" className="p-3">
        <div className="score-img-quote d-flex ">
          <div className="pointsImg align-self-center">
            <img
              src={userLevelImg(
                user &&
                  user.completedCourses &&
                  user.completedCourses.length > 0
                  ? user.completedCourses.reduce(
                      (score, course) => course.score + score,
                      0
                    )
                  : 0
              )}
              alt="user-badge"
              height="50px"
            />
          </div>
          <div className="points-quote text-light align-self-center ">
            <h6 className="p-2 my-auto">Keep up the good work!</h6>
          </div>
        </div>
        <div className="latest-tests mt-1 p-1">
          <div className="d-flex flex-column align-items-center">
            <h5 className="text-light">Recent Tests</h5>
            <div className="completed-test-list  text-light">
              <div className="test-name d-flex flex-column ">
                {user && user.completedCourses
                  ? user.completedCourses.map(({ name, score }) => {
                      return (
                        <div>
                          <span>{name}</span>{" "}
                          <span className="text-primary">
                            <img
                              className="ml-1 "
                              src={testScoreImg(score)}
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
  if (redirect) return <Redirect to="/login" />;
  else
    return loading ? (
      <Preloader size="big" color="purple" />
    ) : (
      <div className="d-md-flex flex-column  mt-5 mx-2 pt-4 p-1 mb-5 pb-5">
        <div className="d-md-flex flex-md-row flex-column justify-content-center ">
          {" "}
          {displayProfileCard()}
          {displayPointsCard()}
          <div id="courses-details">
            <div className="d-flex flex-column align-items-center text-light">
              <div>
                <h5>Enrolled Courses</h5>
                <h5 className="text-primary">
                  {user
                    ? user.completedCourseId.length +
                      user.currentCourseId.length
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
        </div>
        <div className="profileWrapper  d-flex flex-wrap justify-content-center m-2">
          <div className="completedCourse-wrapper p-3 m-2">
            <h4 className="text-success text-center">
              Ongoing Courses . . . You gotta finish 'em.
            </h4>
            <div id="CompletedCourses" className="d-flex flex-wrap">
              {user && courselist && user.currentCourseId.length > 0 ? (
                courselist.map(
                  (course) =>
                    user.currentCourseId.includes(parseInt(course.courseId)) &&
                    displayCourseImg(course)
                )
              ) : (
                <Preloader size={"small"} />
              )}
            </div>
          </div>
          <div className="completedCourse-wrapper p-3 m-2">
            <h4 className="text-light text-center">
              You have finished these so far . . . more to go!
            </h4>
            <div id="CompletedCourses" className="d-flex flex-wrap">
              {user && courselist && user.completedCourseId.length > 0 ? (
                courselist.map(
                  (course) =>
                    user.completedCourseId.includes(
                      parseInt(course.courseId)
                    ) && displayCourseImg(course)
                )
              ) : (
                <Preloader size={"small"} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
