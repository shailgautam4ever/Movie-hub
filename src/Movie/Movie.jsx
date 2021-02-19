import React, { Component } from "react";
import {
  AiFillSmile,
  AiFillTwitterSquare,
  AiOutlineLike,
  AiTwotoneHeart,
} from "react-icons/ai";
import { withRouter } from "react-router";
import "./Movie.css";
class Movie extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log(window.location);
    //   const a = window.location.pathname;
    //   const b = a.split("/").reverse()[0];
    //   console.log(b);
    // window.location.pathname = "/";
  }
  render() {
    return (
      <>
        <div className="movie-content">
          <div className="movie-banner">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tom-and-jerry-et00300988-16-02-2021-03-03-32.jpg"></img>
          </div>
          <div className="movie-detail">
            <h2> TOM & JERRY</h2>
            <span>
              Like <AiOutlineLike />
            </span>
            <span>
              Spread Love give Love <AiTwotoneHeart />
              <AiFillSmile />
            </span>
          </div>
        </div>
        <div className="movie-description">
          <h3>About Uss</h3>
          <p>Hope you likr our movie!!!!</p>
        </div>
      </>
    );
  }
}

export default withRouter(Movie);
