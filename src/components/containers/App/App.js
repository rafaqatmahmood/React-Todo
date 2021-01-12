import React, { useState } from "react";
import Classes from "./App.module.css";
import Header from "../../Header/Header";
import Todos from "../../Todos/Todos";
import QuickTask from "../../QuickTask/QuickTask";
// import CreateTodo from "../../CreateTodo/CreateTodo";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

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
  const removeTodo = (id, index) => {
    const items = todos.filter((val) => val.id !== id);
    console.log(items);
    const Todos = [...todos];
    Todos[index].animate = true;
    setTodos(Todos);
    setTimeout(() => setTodos(items), 400);
  };
  return (
    <div className={Classes.App}>
      <Header />
      <Todos todos={todos} checkClicked={removeTodo} />
      <QuickTask
        submited={handleSubmit}
        changed={(e) => setInput(e.target.value)}
        value={input}
      />
      {/* <CreateTodo /> */}
    </div>
  );
};

export default App;
