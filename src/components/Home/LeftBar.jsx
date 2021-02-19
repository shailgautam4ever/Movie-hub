import React, { Component } from "react";
class LeftBar extends Component {
  state = {};
  render() {
    return (
      <div className="left-bar">
        <h2>Movie Hub</h2>
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
