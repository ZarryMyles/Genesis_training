import axios from "axios";

const DATA = {
  getUserData(api) {
    let data;
    fetch(api)
      .then((response) => response.json())
      .then((info) => (data = info));
    console.log(api);
    // return data;
  },
};

export default DATA;
