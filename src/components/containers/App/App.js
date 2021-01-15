import React from "react";
import Classes from "./App.module.css";
import AppHeader from "../../AppHeader/AppHeader";
import Todos from "../../Todos/Todos";
import QuickTask from "../../QuickTask/QuickTask";
import CreateTodo from "../../CreateTodo/CreateTodo";
import AddButton from "../../UI/AddButton/AddButton";

const App = () => {
  return (
    <div className={Classes.App}>
      <AppHeader />
      <Todos />
      <CreateTodo />
      <QuickTask />
      <AddButton />
    </div>
  );
};

export default App;
