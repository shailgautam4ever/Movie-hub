import React, { Component } from "react";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import movies from "../../DummyData/movie";

class RightBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies,
    };
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

          {movies
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3)
            .map((v, i) => (
              <div className="single-popular-container">
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
                    {Array.from({ length: v.rating }).map(() => (
                      <AiFillHeart color="red" />
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
