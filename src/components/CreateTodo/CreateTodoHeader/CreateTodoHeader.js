import React from "react";
import Header from "../../hoc/Header/Header";
import Classes from "./CreateTodoHeader.module.css";

const CreateTodoHeader = (props) => {
  return (
    <Header>
      <div className={Classes.HeaderRow}>
        <div className={Classes.Left}>
          <div className={Classes.Cancel} onClick={props.cancel}>
            cancel
          </div>
          <div>New Task</div>
        </div>
        <div className={Classes.Right}>
          <button className={Classes.Tick} onClick={props.create}>
            <i className="fa fa-check" aria-hidden="true"></i>
          </button>
        </div>
        <div className="right"></div>
      </div>
    </Header>
  );
};
export default CreateTodoHeader;
