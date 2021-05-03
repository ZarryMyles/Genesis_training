import http from "./HTTPService";
import API from "./API";

const userList = API.loginInfo;
const userProfile = API.userProfile;
export function register(user, userprofile) {
  http.post(userList, user);
  http.post(userProfile, userprofile);
}
