import React, { useContext } from "react";
import Todo from "./Todo/Todo";
import Classes from "./Todos.module.css";
import Nothing from "../UI/Nothing/Nothing";
import { Context } from "../../context/Store";

const Todos = () => {
  const [state, dispatch] = useContext(Context);
  const removeTodo = (id, index) => {
    setTimeout(() => {
      const Todos = [...state.todos];
      Todos[index].animate = true;
      dispatch({ type: "animate_todo", payload: Todos });
      setTimeout(() => dispatch({ type: "remove_todo", payload: id }), 400);
      let item = state.todos.find((val) => val.id === id);
      item = { ...item, animate: false, id: new Date().getTime().toString() };
      dispatch({ type: "add_completed", payload: item });
    }, 200);
  };
  let content = <Nothing heading="Nothing to do" />;

  if (state.showTodo && state.todos.length > 0) {
    content = state.todos.map((val, index) => {
      return (
        <Todo
          key={val.id}
          id={val.id}
          index={index}
          text={val.text}
          checkClicked={() => removeTodo(val.id, index)}
          animate={val.animate}
          date={val.date}
        />
      );
    });
  } else if (!state.showTodo && state.completed.length > 0) {
    content = state.completed.map((val, index) => {
      return (
        <Todo
          key={val.id}
          id={val.id}
          index={index}
          text={val.text}
          // checkClicked={() => removeCompleted(val.id, index)}
          animate={val.animate}
          date={val.date}
          checked={true}
        />
      );
    });
  } else if (!state.showTodo && !state.completed.length > 0) {
    content = <Nothing heading="Nothing in Completed" />;
  }

  return (
    <div className={Classes.Todos}>
      <div className="row">{content}</div>
    </div>
  );
};

export default Todos;
