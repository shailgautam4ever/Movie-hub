import React from "react";
import "./Manage.css";
import "../../Movie/Movie.css";
import { Link } from "react-router-dom";
export default class Manage extends React.Component {
  render() {
    const { movies, handleOnDelete } = this.props;
    return (
      <>
        <div className="df fd-c p-10">
          <Link to="/manage/AddMovie">
            <button className="custom-button">Add Movie</button>
          </Link>
          {movies.map((v, i) => (
            <div className="df jc-sb show-table">
              <p>{v.name}</p>
              <div>
                <Link to={`/manage/update-movie/${i}`}>
                  <button className="custom-button">Update</button>
                </Link>
                <button
                  className="custom-button"
                  onClick={(e) => handleOnDelete(e, v.id)}
                >
                  Delete
                </button>
                <Link to={`/movie/${i}`}>
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
