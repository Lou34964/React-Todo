
import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  // add a state property called "newItem"
  // set the value of "this.state.newItem" to an empty string
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      newTodo: e.target.value
    });
  };

  // class method to submit form
  handleSubmit = e => {
    e.preventDefault();
    console.log("it's working!");
    // add our typed in item to the grocery list!
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <label htmlFor="item">New Todo</label>
        <input
          type="text"
          name="item"
          id="item"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;