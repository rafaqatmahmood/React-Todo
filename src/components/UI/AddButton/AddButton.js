import React, { useContext } from "react";
import Classes from "./AddButton.module.css";
import { Context } from "../../../context/Store";

const AddButton = (props) => {
  const [, dispatch] = useContext(Context);
  return (
    <button
      className={Classes.Button}
      onClick={() => dispatch({ type: "is_creating", payload: true })}
    >
      +
    </button>
  );
};

export default AddButton;
