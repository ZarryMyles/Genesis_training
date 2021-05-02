import http from "./HTTPService";
import API from "./API";

const userList = API.loginInfo;
const userProfile = API.userProfile;
export function register(user, userprofile) {
  http.post(userList, user);
  http.post(userProfile, userprofile);
  //   const userProfilePromise = http.post(userProfile, {
  //     userId: 21,
  //     name: username.toString(),
  //     username: username.toString(),
  //     email: userMail.toString(),
  //     score: 0,
  //     password: password.toString(),
  //     completedCourseId: [],
  //     currentCourseId: [],
  //     completedCourses: [],
  //   });
}
