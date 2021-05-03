class Auth {
  login(user) {
    // store.set("user", { name: user, access: true });
    localStorage.setItem("profileAccess", "true");
    localStorage.setItem("username", user);
    if (localStorage.getItem("profileAccess") === "true") return true;
    else return false;
  }
  logout() {
    localStorage.setItem("profileAccess", "false");
  }
}

export default new Auth();
