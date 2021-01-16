import React, { useState, useContext } from "react";
import Classes from "./Todo.module.css";
import { Context } from "../../../context/Store";

const Todo = (props) => {
  const [state, dispatch] = useContext(Context);
  const [, setChecked] = useState(props.checked);

  const handleClick = () => {
    if (state.showTodo) {
      dispatch({
        type: "edit_info",
        payload: {
          isEditing: true,
          editIndex: props.index,
          editText: props.text,
          editDate: props.date,
          editID: props.id,
        },
      });
    }
  };

  return (
    <div
      className={`${Classes.Todo} ${props.animate ? Classes.Remove : ""}`}
      style={{ textDecoration: props.checked ? "line-through" : "" }}
    >
      <input
        checked={props.checked}
        onChange={() => setChecked(!props.checked)}
        onClick={props.checkClicked}
        className={Classes.Checkbox}
        type="checkbox"
      />
      <p className={Classes.Text} onClick={handleClick}>
        <span>{props.text}</span> <strong>{props.date}</strong>
      </p>
    </div>
  );
};
export default Todo;
