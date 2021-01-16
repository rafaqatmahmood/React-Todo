import React, { useState, useContext } from "react";
import Classes from "./AppHeader.module.css";
import Header from "../hoc/Header/Header";
import { Context } from "../../context/Store";

const AppHeader = () => {
  const [state, dispatch] = useContext(Context);
  const [dropDown, setDropDown] = useState(false);
  return (
    <Header>
      <div className={Classes.HeaderRow}>
        <div className={Classes.Logo}>Todo List</div>
        <div className={Classes.DropDown}>
          <button
            className={Classes.Button}
            onClick={() => setDropDown(!dropDown)}
          >
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </button>
          <form
            className={Classes.Form}
            style={{ display: dropDown ? "block" : "none" }}
          >
            <div className={Classes.Group}>
              <input
                onChange={() => dispatch({ type: "show_todo", payload: true })}
                id="todos"
                checked={state.showTodo}
                className={Classes.Radio}
                value="input"
                type="radio"
                name="tab"
              />
              <label className={Classes.Label} htmlFor="todos">
                Todos
              </label>
            </div>
            <div className={Classes.Group}>
              <input
                onChange={() => dispatch({ type: "show_todo", payload: false })}
                checked={!state.showTodo}
                className={Classes.Radio}
                id="completed"
                value="input"
                type="radio"
                name="tab"
              />
              <label className={Classes.Label} htmlFor="completed">
                Completed
              </label>
            </div>
            <div className={Classes.Group}>
              <input
                onChange={() =>
                  dispatch({ type: "set_completed", payload: [] })
                }
                // checked={!state.showTodo}
                className={Classes.Radio}
                id="remove-completed"
                value="input"
                type="radio"
                name="tab"
              />
              <label className={Classes.Label} htmlFor="remove-completed">
                Remove Completed
              </label>
            </div>
          </form>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
