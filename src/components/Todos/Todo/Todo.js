import React, { useContext } from "react";
import Classes from "./Todo.module.css";
import { Context } from "../../../context/Store";

const Todo = (props) => {
  const [state, dispatch] = useContext(Context);

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
    <div className={`${Classes.Todo} ${props.animate ? Classes.Remove : ""}`}>
      <input
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
