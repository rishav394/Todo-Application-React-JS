import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./Todos";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        task: "Buy some porn",
      },
      {
        id: 2,
        task: "Have medicine",
      },
    ],
  };

  deleteTodo = id => {
    console.log(id);
    const newTodoList = this.state.todos.filter(x => {
      //console.log(x.id);
      return x.id !== id;
    });
    console.log(newTodoList);

    this.setState({
      todos: newTodoList,
    });
  };

  addToTodo = task => {
    var x = {
      id: Math.floor(Math.random() * 100),
      task: task,
    };
    var arr = [...this.state.todos, x];
    this.setState({
      todos: arr,
    });
  };

  //==#region https://stackoverflow.com/a/41700815/4427870
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  //#endregion

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>My TODO Application made using React</p>
        </header>
        <div className="container">
          <Todos todolist={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddForm addToTodo={this.addToTodo} />
        </div>

        {/* https://stackoverflow.com/a/41700815/4427870 */}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}

export default App;
