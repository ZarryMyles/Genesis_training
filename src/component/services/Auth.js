class Auth {
  login(user, userId) {
    // store.set("user", { name: user, access: true });
    localStorage.setItem("profileAccess", "true");
    localStorage.setItem("username", user);
    localStorage.setItem("user_id", userId);
    if (localStorage.getItem("profileAccess") === "true") return true;
    else return false;
  }
  logout() {
    localStorage.setItem("profileAccess", "false");
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
  }
}

export default new Auth();
