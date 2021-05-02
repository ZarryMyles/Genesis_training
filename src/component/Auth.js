class auth {
  constructor() {
    this.authenticated = false;
    this.userName = null;
  }

  login(cb, usr) {
    this.authenticated = true;
    this.authenticated = usr;
    setTimeout(cb, 200);
  }

  logout(cb) {
    this.authenticated = false;
    setTimeout(cb, 200);
  }

  isAuthenticated() {
    return this.authenticated, this.userName;
  }
}

export default new auth();
