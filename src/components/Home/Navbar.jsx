import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="body-nav">
        <span className="nav-item active">Movies</span>
        <span className="nav-item">TV shows</span>
        <span className="nav-item">Anime</span>
        <span>{localStorage.getItem("state")}</span>
      </div>
    );
  }
}

export default Navbar;
