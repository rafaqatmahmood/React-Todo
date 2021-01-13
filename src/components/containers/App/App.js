import React from "react";
import Classes from "./App.module.css";
import AppHeader from "../../AppHeader/AppHeader";
import Todos from "../../Todos/Todos";
import QuickTask from "../../QuickTask/QuickTask";
import CreateTodo from "../../CreateTodo/CreateTodo";
import { TodosProvider } from "../../../context/TodosContext";
import { CreateTodoProvider } from "../../../context/CreateTodoContext";
import AddButton from "../../UI/AddButton/AddButton";

const App = () => {
  return (
    <TodosProvider>
      <CreateTodoProvider>
        <div className={Classes.App}>
          <AppHeader />
          <Todos />
          <QuickTask />
          <CreateTodo />
          <AddButton />
        </div>
      </CreateTodoProvider>
    </TodosProvider>
  );
};

export default App;
