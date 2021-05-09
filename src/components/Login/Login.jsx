import React from "react";
import "../Home/Home.css";
export default class Login extends React.Component {
  handleOnLogin = () => {
    // console.log("wels login");
    // fetch(
    // ).catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <a
          href="https://github.com/login/oauth/authorize?client_id=d3e8279ea176810f2047&scope=user%20repo&redirect_uri=http://localhost:3000/callback"
          className="custom-button"
          //   onClick={this.handleOnLogin}
        >
          Login with github
        </a>
      </div>
    );
  }
}
