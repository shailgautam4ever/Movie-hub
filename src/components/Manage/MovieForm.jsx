import React from "react";
import "./MovieForm.css";
import "../Home/Home.css";
import { withRouter } from "react-router";

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
class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovie: {},
    };
  }

  componentDidMount() {
    const { match, action } = this.props;
    const { movies } = this.props;
    if (action === "update") {
      const { id } = match.params;
      // console.log(movies[id]);
      this.setState({ newMovie: movies[id] });
    }
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
    console.log(this.state);
  };

  handleOnUpdate = () => {
    const { match, updateMovie } = this.props;
    const { id } = match.params;
    updateMovie(this.state.newMovie, id);
    this.setState({
      newMovie: {},
    });
  };

  render() {
    const { newMovie } = this.state;
    return (
      <>
        <div className="Add-container fd-c">
          <div className="df fd-c jc-sb wrapper">
            <span className="title">
              {this.props.action === "add" ? "Add New Movie" : "Update Movie"}
            </span>
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
              {this.props.action === "add" ? (
                <button
                  onClick={this.handleOnStateChange}
                  className="custom-button"
                >
                  Add
                </button>
              ) : (
                <button
                  onClick={() => this.handleOnUpdate()}
                  className="custom-button"
                >
                  Update
                </button>
              )}
              <button className="custom-button">Cancel</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(MovieForm);
