import React, { useState, useContext } from "react";
import Classes from "./QuickTask.module.css";
import { TodosContext } from "../../context/TodosContext";

const QuickTask = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useContext(TodosContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      text: input,
      id: new Date().getTime().toString(),
      animate: false,
    };
    if (input.length > 0) setTodos([data, ...todos]);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className={Classes.Form}>
      <div className={Classes.FormGroup}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className={Classes.Input}
          type="text"
          placeholder="Enter Quick Task Here"
        />
        <button className={Classes.Button} type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default QuickTask;
