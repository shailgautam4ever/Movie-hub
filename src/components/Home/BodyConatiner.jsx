import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/newBanner.jpg";

class BodyContent extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="body-container">
        <div className="body-banner">
          <img src={Banner}></img>
        </div>
        <div className="movie-list">
          {movies.map((v, i) => (
            <Link to={`/movie/${i}`}>
              <div className="single-movie">
                <img src={v.img}></img>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default BodyContent;
