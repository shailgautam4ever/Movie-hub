import React from "react";
import movies from "../../DummyData/movie";
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
  handleOnDelete = (e, id) => {
    const { movie } = this.state;
    const index = movie.findIndex((v) => v.id === id);
    movie.splice(index, 1);
    // movies = movie;
    this.setState({ movie });
  };
  render() {
    const { movie } = this.state;
    return (
      <>
        <div className="df fd-c p-10">
          <Link to="/manage/AddMovie">
            <button className="custom-button">Add Movie</button>
          </Link>
          {movie.map((v, i) => (
            <div className="df jc-sb show-table">
              <p>{v.name}</p>
              <div>
                <button className="custom-button">Update</button>
                <button
                  className="custom-button"
                  onClick={(e) => this.handleOnDelete(e, v.id)}
                >
                  Delete
                </button>
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
