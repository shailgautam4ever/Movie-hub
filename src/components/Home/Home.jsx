import React from "react";
import Movie from "../../Movie/Movie";
import BodyContent from "./BodyConatiner";
import "./Home.css";
import LeftBar from "./LeftBar";
import Navbar from "./Navbar";
import RightBar from "./RightBar";
import Manage from '../Manage/Manage'
import { Redirect, Route, Switch } from "react-router";
import AddMovie from "../Manage/AddMovie";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="main-container">
          <LeftBar />
          <div className="body-container">
            <Navbar />
            <Switch>
              <Route path="/movie/:id">
                <Movie />
              </Route>
              <Route path='/manage/AddMovie'>
              <AddMovie/>
              </Route>
              <Route path='/manage'>
              <Manage/>
              </Route>
              <Route exact path="/">
                <BodyContent />
              </Route>
              <Redirect to="/"></Redirect>
            </Switch>

            
          </div>
          <RightBar />
        </div>
      </>
    );
  }
}
