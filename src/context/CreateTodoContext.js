import React, { useState, createContext } from "react";

export const CreateTodoContext = createContext();

export const CreateTodoProvider = (props) => {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <CreateTodoContext.Provider value={[isCreating, setIsCreating]}>
      {props.children}
    </CreateTodoContext.Provider>
  );
};
