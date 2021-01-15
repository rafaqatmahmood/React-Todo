import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialState = {
  todos: [],
  isCreating: false,
  editInfo: {
    isEditing: false,
    editIndex: null,
    editText: "",
    editDate: "",
    editID: "",
  },
};

export const Context = createContext();

export const Store = (props) => {
  const [state, depatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Context.Provider value={[state, depatch]}>
      {props.children}
    </Context.Provider>
  );
};
