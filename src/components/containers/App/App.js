import React from "react";
import Classes from "./App.module.css";
import Header from "../../Header/Header";
import Todos from "../../Todos/Todos";
import QuickTask from "../../QuickTask/QuickTask";
// import CreateTodo from "../../CreateTodo/CreateTodo";
import { TodosProvider } from "../../../context/TodosContext";

const App = () => {
  return (
    <TodosProvider>
      <div className={Classes.App}>
        <Header />
        <Todos />
        <QuickTask />
        {/* <CreateTodo /> */}
      </div>
    </TodosProvider>
  );
};

export default App;
