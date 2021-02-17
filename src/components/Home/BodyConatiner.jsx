import React, { Component } from "react";
import Banner from "../../assets/newBanner.jpg";
class BodyContent extends Component {
  state = {};
  render() {
    return (
      <div className="body-container">
        <div className="body-nav">navbar</div>
        <div className="body-banner">
          <img src={Banner}></img>
        </div>
        <div className="movie-list">movie list</div>
      </div>
    );
  }
}

export default BodyContent;
