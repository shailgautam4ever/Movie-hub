import React, { Component } from "react";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";

class RightBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
    };
  }

  // to sync with the props changes with are our component state
  // here we check when our props changes then we change our state with new array ref
  //faced empty state issue before using getDerivedStateFromProps
  static getDerivedStateFromProps(props, current_state) {
    console.log({ props, current_state });
    if (props.movies.length > 0) {
      const popular = [...props.movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
      return {
        movies: popular,
      };
    }
    return current_state;
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="right-bar">
        <div>
          <div className="search-bar">
            <AiOutlineSearch />
            <input placeholder="Search"></input>
          </div>
          <h2>Poupular</h2>

          {movies.map((v, i) => (
            <div key={i} className="single-popular-container">
              <div className="single-popular">
                <img
                  width="50px"
                  src="https://images-na.ssl-images-amazon.com/images/I/714Y-BkuKCL._SY355_.jpg"
                ></img>
              </div>
              <div className="single-popular-content">
                <span className="heading">{v.name}</span>
                <span className="genre">{v.genre}</span>
                <div>
                  {Array.from({ length: v.rating }).map((_, i) => (
                    <AiFillHeart key={i} color="red" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RightBar;
