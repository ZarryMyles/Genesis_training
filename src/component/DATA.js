const DATA = {
  getUserData(api) {
    let data;
    data = fetch(api)
      .then((response) => response.json())
      .then((data) => data);
    console.log(data);
    // return data;
  },
};

export default DATA;
