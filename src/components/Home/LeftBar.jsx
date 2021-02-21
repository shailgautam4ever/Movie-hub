import React, { Component } from "react";
import { Link } from "react-router-dom";

class LeftBar extends Component {
  state = {};
  render() {
    return (
      <div className="left-bar">
        <Link to="/">
          <h2>Movie Hub</h2>
        </Link>
        <div>
          <p className="active">Menu</p>
          <div>
            <p>Home</p>
            <p>Profile</p>
            <p>Search</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftBar;
