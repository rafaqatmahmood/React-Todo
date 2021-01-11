import React from "react";
import Todo from "./Todo/Todo";
import Classes from "./Todos.module.css";

const Todos = (props) => {
  return (
    <div className={Classes.Todos}>
      {props.todos.length > 0 ? (
        <div className="row">
          {props.todos.map((val, index) => {
            return (
              <Todo
                key={val.id}
                index={index}
                text={val.text}
                checkClicked={() => props.checkClicked(val.id, index)}
                animate={val.animate}
              />
            );
          })}
        </div>
      ) : (
        <h2 className={Classes.Heading}>Nothing to do</h2>
      )}
      {/* <h2 className={Classes.Heading}>Nothing to do</h2> */}
    </div>
  );
};

export default Todos;
