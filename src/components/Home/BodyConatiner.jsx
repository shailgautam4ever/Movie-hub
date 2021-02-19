import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/newBanner.jpg";
import Movie from "../../Movie/Movie";
import Navbar from "./Navbar";
class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
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
          {movies.map((i) => (
            <Link to={`/movie/${i}`}>
              <div className="single-movie">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tom-and-jerry-et00300988-16-02-2021-03-03-32.jpg"></img>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default BodyContent;
