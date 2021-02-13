import React from "react";
export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: ["Cook", "Swim", "paint"],
      task: "",
    };
  }
  handleOnChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleOnClick = (e) => {
    const { task, List } = this.state;
    if (task) {
      List.push(task);
      this.setState({ List, task: "" });
      console.log({ task, List });
    }
  };

  handleOnDelete = (i) => {
    const { task, List } = this.state;
    List.splice(i, 1);
    this.setState({ List });
  };

  handleOnEdit = (i) => {
    const { task, List } = this.state;
    const newTask = prompt("Enter new value");
    if (newTask) {
      List.splice(i, 1, newTask);
      this.setState({ List });
    }
  };
  render() {
    const { List, task } = this.state;

    return (
      <>
        <h1>Welcome to Todo</h1>
        <p>Enter your task to do</p>
        <input onChange={this.handleOnChange} value={task} type="text" />
        <button onClick={this.handleOnClick}>Add</button>
        {List.map((value, i) => (
          <div>
            <p>{`${i + 1} ${value}`}</p>
            <button onClick={() => this.handleOnDelete(i)}>Delete</button>
            <button onClick={() => this.handleOnEdit(i)}>Edit</button>
          </div>
        ))}
      </>
    );
  }
}
