import React from "react";
import "./AddMovie.css";
import "../Home/Home.css";
import movies from "../../DummyData/movie";

const form = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "genre",
    label: "Genre",
  },
  {
    id: "rating",
    label: "Rating",
  },
  {
    id: "image",
    label: "Image",
  },
  {
    id: "chooseFile",
    label: "Choose File",
    type: "file",
  },
];
export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOnChange = (e, id) => {
    const value = e.target.value;
    this.setState({
      [id]: value,
    });
    console.log(this.state);
  };
  handleOnAdd = () => {
    movies.push(this.state);
  };
  render() {
    return (
      <>
        <div className="Add-container fd-c">
          <div className="df fd-c jc-sb wrapper">
            <span className="title">Add New Movie</span>
            {form.map(({ label, type, id }) => (
              <div className="df ai-b jc-sb">
                <span>{label}</span>
                <input
                  onChange={(e) => this.handleOnChange(e, id)}
                  className="search-bar"
                  type={type ? type : "text"}
                ></input>
              </div>
            ))}

            <div>
              <button onClick={this.handleOnAdd} className="custom-button">
                Add
              </button>
              <button className="custom-button">Cancel</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
