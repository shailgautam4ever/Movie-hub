import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/newBanner.jpg";
import Movie from "../../Movie/Movie";
import Navbar from "./Navbar";
import movies from "../../DummyData/movie.json";
class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies,
    };
  }
  render() {
    const { movies } = this.state;
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
