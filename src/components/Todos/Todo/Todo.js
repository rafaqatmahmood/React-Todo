import React from "react";
import Classes from "./Todo.module.css";

const Todo = (props) => {
  let Class = "";

  if (props.animate) {
    Class = Classes.Remove;
  }
  console.log(props.animate);
  return (
    <div className={`${Classes.Todo} ${Class}`}>
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
