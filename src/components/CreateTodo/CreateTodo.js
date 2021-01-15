import React, { useContext, useState, useEffect } from "react";
import Classes from "./CreateTodo.module.css";
import CreateTodoHeader from "./CreateTodoHeader/CreateTodoHeader";
// import { CreateTodoContext } from "../../context/CreateTodoContext";
// import { TodosContext } from "../../context/TodosContext";
import { EditingContext } from "../../context/EditingContext";
import { Context } from "../../context/Store";

const CreateTodo = () => {
  const [editInfo, setEditInfo] = useContext(EditingContext);
  // const [isCreating, setIsCreating] = useContext(CreateTodoContext);
  // const [todos, setTodos] = useContext(TodosContext);
  const [state, dispatch] = useContext(Context);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  // useEffect(() => {
  //   if (editInfo.isEditing) {
  //     setText(editInfo.editText);
  //     setDate(editInfo.editDate);
  //   }
  // }, [editInfo]);

  const CreateTodo = () => {
    if (state.isCreating) {
      const data = {
        text: text,
        id: new Date().getTime().toString(),
        animate: false,
        date: date,
      };
      dispatch({ type: "create_todo", payload: data });
      // setTodos([data, ...todos]);
      setText("");
      setDate("");
      // setIsCreating(false);
      dispatch({ type: "is_creating", payload: false });
    } //else if (editInfo.isEditing) {
    // const Todos = [...todos];

    // Todos[editInfo.editIndex] = {
    //   text: text,
    //   id: editInfo.editID,
    //   animate: false,
    //   date: date,
    // };

    // setTodos(Todos);
    // const Edit = { ...editInfo };
    // Edit.isEditing = false;
    // setEditInfo(Edit);
    // setText("");
    // setDate("");
    // }
  };

  return (
    <div
      className={Classes.CreateTodo}
      style={{
        opacity: state.isCreating || editInfo.isEditing ? "1" : "0",
        transform:
          state.isCreating || editInfo.isEditing ? "scale(1)" : "scale(0.8)",
        pointerEvents:
          state.isCreating || editInfo.isEditing ? "inherit" : "none",
      }}
    >
      <CreateTodoHeader
        cancel={() => {
          // setIsCreating(false);
          setEditInfo(false);
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
