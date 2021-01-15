import React, { useContext, useState, useEffect } from "react";
import Classes from "./CreateTodo.module.css";
import CreateTodoHeader from "./CreateTodoHeader/CreateTodoHeader";
import { Context } from "../../context/Store";

const CreateTodo = () => {
  const [state, dispatch] = useContext(Context);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (state.editInfo.isEditing) {
      setText(state.editInfo.editText);
      setDate(state.editInfo.editDate);
    }
  }, [state.editInfo]);

  const CreateTodo = () => {
    if (state.isCreating) {
      const data = {
        text: text,
        id: new Date().getTime().toString(),
        animate: false,
        date: date,
      };
      dispatch({ type: "create_todo", payload: data });
      setText("");
      setDate("");
      dispatch({ type: "is_creating", payload: false });
    } else if (state.editInfo.isEditing) {
      const Todos = [...state.todos];

      Todos[state.editInfo.editIndex] = {
        text: text,
        id: state.editInfo.editID,
        animate: false,
        date: date,
      };

      // setTodos(Todos);
      dispatch({ type: "set_todo", payload: Todos });
      const Edit = { ...state.editInfo };
      Edit.isEditing = false;
      dispatch({ type: "edit_info", payload: Edit });
      setText("");
      setDate("");
    }
  };

  return (
    <div
      className={Classes.CreateTodo}
      style={{
        opacity: state.isCreating || state.editInfo.isEditing ? "1" : "0",
        transform:
          state.isCreating || state.editInfo.isEditing
            ? "scale(1)"
            : "scale(0.8)",
        pointerEvents:
          state.isCreating || state.editInfo.isEditing ? "inherit" : "none",
      }}
    >
      <CreateTodoHeader
        cancel={() => {
          dispatch({ type: "is_creating", payload: false });
          dispatch({
            type: "edit_info",
            payload: { ...state.editInfo, isEditing: false },
          });
        }}
        create={CreateTodo}
      />
      <div className="row">
        <form
          className={Classes.Form}
          onSubmit={(e) => {
            e.preventDefault();
            CreateTodo();
          }}
        >
          <div className={Classes.Group}>
            <label htmlFor="Task" className={Classes.Label}>
              What is to be done?
            </label>
            <input
              id="Task"
              type="text"
              name="text"
              placeholder="Enter Task Here"
              onChange={(e) => setText(e.target.value)}
              value={text}
              className={Classes.Input}
            />
          </div>
          <div className={Classes.Group}>
            <label htmlFor="Date" className={Classes.Label}>
              Due date
            </label>
            <input
              id="Date"
              type="date"
              name="date"
              placeholder="Enter Task Here"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className={Classes.Input}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
