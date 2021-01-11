import React from "react";
import Classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={Classes.Header}>
      <div className="row">
        <div className={Classes.Logo}>Todo List</div>
      </div>
    </header>
  );
};
export default Header;
