import React from "react";
import BodyContent from "./BodyConatiner";
import "./Home.css";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="main-container">
          <LeftBar />
          <BodyContent />
          <RightBar />
        </div>
      </>
    );
  }
}
