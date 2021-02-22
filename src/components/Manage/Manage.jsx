import React from "react";
import movies from "../../DummyData/movie.json";
import "./Manage.css";
import "../../Movie/Movie.css";
import { Link } from "react-router-dom";
export default class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: movies,
    };
  }

  render() {
    const { movie } = this.state;
    return (
      <>
        <div className="df fd-c p-10">
            <Link to='/manage/AddMovie'>
          <button className="custom-button">Add Movie</button>
          </Link>
          {movie.map((v,i) => (
            <div className="df jc-sb show-table">
              <p>{v.name}</p>
              <div>
              <button className="custom-button">Update</button>
              <button className="custom-button">Delete</button>
              <Link to={`movie/${i}`}>
              <button className="custom-button">View</button>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
