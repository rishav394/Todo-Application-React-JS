import React, { Component } from "react";

export default class AddForm extends Component {
  state = {
    task: "",
  };

  handleChange = e => {
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.task.length > 0) {
      this.props.addToTodo(this.state.task);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="input-field col s6">
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Add a new item here"
            />
          </div>
        </form>
      </div>
    );
  }
}
