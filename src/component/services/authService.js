import http from "./HTTPService";
import API from "./API";

export function authLogin(email, password) {
  return http.post(API.auth, { email, password });
}
