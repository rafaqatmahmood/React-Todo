import React from "react";
import Classes from "./QuickTask.module.css";

const QuickTask = (props) => {
  return (
    <form onSubmit={props.submited} className={Classes.Form}>
      <div className={Classes.FormGroup}>
        <input
          onChange={props.changed}
          value={props.value}
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
