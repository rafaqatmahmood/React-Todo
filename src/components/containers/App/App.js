import React from "react";
import Classes from "./App.module.css";
import AppHeader from "../../AppHeader/AppHeader";
import Todos from "../../Todos/Todos";
import QuickTask from "../../QuickTask/QuickTask";
import CreateTodo from "../../CreateTodo/CreateTodo";
import { Store } from "../../../context/Store";
import AddButton from "../../UI/AddButton/AddButton";
import { EditingProvider } from "../../../context/EditingContext";

const App = () => {
  return (
    <Store>
      <div className={Classes.App}>
        <AppHeader />
        <EditingProvider>
          <Todos />
          <CreateTodo />
        </EditingProvider>
        <QuickTask />
        <AddButton />
      </div>
    </Store>
  );
};

export default App;
