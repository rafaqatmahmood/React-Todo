import React, { useContext, useEffect } from "react";
import Todo from "./Todo/Todo";
import Classes from "./Todos.module.css";
import { TodosContext } from "../../context/TodosContext";
import Img from "../../assets/images/Nothing to do.png";

const Todos = (props) => {
  const [todos, setTodos] = useContext(TodosContext);

  useEffect(() => {
    setTodos(todos);
  });

  const removeTodo = (id, index) => {
    const items = todos.filter((val) => val.id !== id);
    const Todos = [...todos];
    Todos[index].animate = true;
    setTodos(Todos);
    setTimeout(() => setTodos(items), 400);
  };

  return (
    <div className={Classes.Todos}>
      {todos.length > 0 ? (
        <div className="row">
          {todos.map((val, index) => {
            return (
              <Todo
                key={val.id}
                index={index}
                text={val.text}
                checkClicked={() => removeTodo(val.id, index)}
                animate={val.animate}
              />
            );
          })}
        </div>
      ) : (
        <div className={Classes.Center}>
          <img className={Classes.Image} src={Img} alt='img not found!'/>
          <h2 className={Classes.Heading}>Nothing to do</h2>
        </div>
      )}
      {/* <h2 className={Classes.Heading}>Nothing to do</h2> */}
    </div>
  );
};

export default Todos;
