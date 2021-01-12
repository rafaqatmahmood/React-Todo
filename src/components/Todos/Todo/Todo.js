import React from "react";
import Classes from "./Todo.module.css";

const Todo = (props) => {
  return (
    <div className={`${Classes.Todo} ${props.animate ? Classes.Remove : ""}`}>
      <input
        onClick={props.checkClicked}
        className={Classes.Checkbox}
        type="checkbox"
      />
      <p className={Classes.Text}>{props.text}</p>
    </div>
  );
};
export default Todo;
