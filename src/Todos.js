import React from "react";
import "./Todos.css";
// coz we dont need any states here

// No classes here coz no Components
const Todos = ({ todolist, deleteTodo }) => {
  const todos = todolist.length ? (
    todolist.map(x => {
      return (
        <div
          className="collection-item"
          key={x.id}
          onClick={() => deleteTodo(x.id)}
        >
          <span id="a">{x.task}</span>
          <span id="b">
            <s>{x.task}</s>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You are all set!</p>
  );

  return <div className="todos collection">{todos}</div>;
};

export default Todos;
