import React, { useContext } from "react";
import Todo from "./Todo/Todo";
import Classes from "./Todos.module.css";
import Img from "../../assets/images/Nothing to do.png";
import { Context } from "../../context/Store";

const Todos = () => {
  const [state, dispatch] = useContext(Context);
  const removeTodo = (id, index) => {
    const Todos = [...state.todos];
    Todos[index].animate = true;
    // setTodos(Todos);
    dispatch({ type: "animate_todo", payload: Todos });
    setTimeout(() => dispatch({ type: "remove_todo", payload: id }), 400);
  };

  return (
    <div className={Classes.Todos}>
      <div className="row">
        {state.todos.map((val, index) => {
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
        })}
      </div>

      <div
        className={Classes.Center}
        style={{ opacity: state.todos.length > 0 ? "0" : "1" }}
      >
        <img className={Classes.Image} src={Img} alt="img not found!" />
        <h2 className={Classes.Heading}>Nothing to do</h2>
      </div>
      {/* <h2 className={Classes.Heading}>Nothing to do</h2> */}
    </div>
  );
};

export default Todos;
