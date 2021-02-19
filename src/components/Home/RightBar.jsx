import React, { Component } from "react";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";

class RightBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [
        {
          name: "Justice League",
          genre: "Action, Thriller",
          rating: 4,
        },
        {
          name: "Godzilla vs Kong",
          genre: "Action, Thriller",
          rating: 5,
        },
        {
          name: "Croods 3",
          genre: "Anime, Comedy",
          rating: 5,
        },
        {
          name: "Tom & Jerry",
          genre: "Anime, Comedy",
          rating: 5,
        },
        {
          name: "Captain Marvel",
          genre: "Action",
          rating: 3,
        },
      ],
    };
  }
  render() {
    const { popular } = this.state;
    return (
      <div className="right-bar">
        <div>
          <div className="search-bar">
            <AiOutlineSearch />
            <input placeholder="Search"></input>
          </div>
          <h2>Poupular</h2>

          {popular.map((v) => (
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
