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
    id: "img",
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
    this.state = {
      newMovie: {},
    };
  }

  handleOnStateChange = () => {
    const { handleOnAdd } = this.props;
    handleOnAdd(this.state.newMovie);
    this.setState({
      newMovie: {},
    });
  };

  handleOnChange = (e, id) => {
    const value = e.target.value;
    const { newMovie } = this.state;
    newMovie[id] = value;
    this.setState({ newMovie });
  };

  render() {
    const { newMovie } = this.state;
    return (
      <>
        <div className="Add-container fd-c">
          <div className="df fd-c jc-sb wrapper">
            <span className="title">Add New Movie</span>
            {form.map(({ label, type, id }) => (
              <div key={id} className="df ai-b jc-sb">
                <span>{label}</span>
                <input
                  value={newMovie[id] ? newMovie[id] : ""}
                  onChange={(e) => this.handleOnChange(e, id)}
                  className="search-bar"
                  type={type ? type : "text"}
                ></input>
              </div>
            ))}

            <div>
              <button
                onClick={this.handleOnStateChange}
                className="custom-button"
              >
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
