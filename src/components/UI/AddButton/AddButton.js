import React, { useContext, useEffect } from "react";
import Classes from "./AddButton.module.css";
import { CreateTodoContext } from "../../../context/CreateTodoContext";

const AddButton = (props) => {
  const [isCreating, setIsCreating] = useContext(CreateTodoContext);
  useEffect(() => {
    setIsCreating(isCreating);
  });
  return (
    <button className={Classes.Button} onClick={() => setIsCreating(true)}>
      +
    </button>
  );
};

export default AddButton;
