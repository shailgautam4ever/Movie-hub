import React from "react";
import Movie from "../../Movie/Movie";
import BodyContent from "./BodyConatiner";
import "./Home.css";
import LeftBar from "./LeftBar";
import Navbar from "./Navbar";
import RightBar from "./RightBar";
import Manage from "../Manage/Manage";
import { Redirect, Route, Switch } from "react-router";
import AddMovie from "../Manage/AddMovie";
import movies from "../../DummyData/movie";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
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

  render() {
    const { movies } = this.state;
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
              <Route path="/manage/AddMovie">
                <AddMovie handleOnAdd={this.handleOnAdd} />
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
