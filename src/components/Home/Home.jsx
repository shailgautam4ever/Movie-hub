import React from "react";
import Movie from "../../Movie/Movie";
import BodyContent from "./BodyConatiner";
import "./Home.css";
import LeftBar from "./LeftBar";
import Navbar from "./Navbar";
import RightBar from "./RightBar";
import Manage from "../Manage/Manage";
import { Redirect, Route, Switch } from "react-router";
import movies from "../../DummyData/movie";
import MovieForm from "../Manage/MovieForm";
import Login from "../Login/Login";
import Callback from "../Callback";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      user: null, // if user = null: not loggged in
    };
  }

  componentDidMount() {
    this.setState({ movies });
  }

  handleOnDelete = (e, id) => {
    const { movies } = this.state;
    const index = movies.findIndex((v) => v.id === id);
    movies.splice(index, 1);
    this.setState({ movies });
  };

  handleOnAdd = (newMovie) => {
    const { movies } = this.state;
    movies.push(newMovie);
    this.setState(movies);
  };

  updateMovie = (newMovie, id) => {
    const { movies } = this.state;
    movies[id] = newMovie;
    this.setState({ movies });
  };

  render() {
    const { movies, user } = this.state;

    if (!user) {
      return (
        <Switch>
          <Route path="/callback">
            <Callback />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      );
    }

    return (
      <>
        <div className="main-container">
          <LeftBar />
          <div className="body-container">
            <Navbar />
            <Switch>
              <Route path="/movie/:id">
                <Movie movies={movies} />
              </Route>
              <Route path="/manage/update-movie/:id">
                <MovieForm
                  action="update"
                  movies={movies}
                  updateMovie={this.updateMovie}
                />
              </Route>
              <Route path="/manage/AddMovie">
                <MovieForm action="add" handleOnAdd={this.handleOnAdd} />
              </Route>
              <Route path="/manage">
                <Manage movies={movies} handleOnDelete={this.handleOnDelete} />
              </Route>
              <Route exact path="/">
                <BodyContent movies={movies} />
              </Route>
              <Redirect to="/"></Redirect>
            </Switch>
          </div>
          <RightBar movies={movies} />
        </div>
      </>
    );
  }
}
