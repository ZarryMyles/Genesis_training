import axios from "axios";

const DATA = {
  async getUserData(api) {
    const response = await axios.get(api);
    // return response;git
  },
};

export default DATA;
