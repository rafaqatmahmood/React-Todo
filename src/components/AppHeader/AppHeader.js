import React from "react";
import Classes from "./AppHeader.module.css";
import Header from "../hoc/Header/Header";

const AppHeader = () => {
  return (
    <Header>
      <div className={Classes.Logo}>Todo List</div>
    </Header>
  );
};

export default AppHeader;
