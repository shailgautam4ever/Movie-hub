import React from "react";

export default class Callback extends React.Component {
  componentDidMount() {
    const search = window.location.search;
    console.log("inside cdm");
    if (search) {
      // get code from query param
      const code = new URLSearchParams(search).get("code");
      if (code) {
        this.getAuthToken(code);
      }
    }
  }

  getAuthToken = (code) => {
    const confg = {
      client_id: "d3e8279ea176810f2047",
      client_secret: "6d4dbb814eb21ab2e60e533462954d4271c1e5ec",
      code,
    };
    const url = `https://github.com/login/oauth/access_token?client_id=${confg.client_id}&client_secret=${confg.client_secret}&code=${confg.code}`;
    fetch(url, {
      method: "POST",
    })
      .then((res) => res.text())
      .then((data) => {
        const token = new URLSearchParams(data).get("access_token");
        window.localStorage.setItem("token", token);
        this.fetchUserData(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchUserData = (token) => {
    const url = "https://api.github.com/user";
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("data", res);
      });
  };

  render() {
    return <p>Please wait while we redirect you</p>;
  }
}
