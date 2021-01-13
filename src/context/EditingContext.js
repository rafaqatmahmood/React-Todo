import React, { useState, createContext } from "react";

export const EditingContext = createContext();

export const EditingProvider = (props) => {
  const [editInfo, setEditInfo] = useState({
    isEditing: false,
    editIndex: null,
    editText: "",
    editDate: "",
    editID: "",
  });
  return (
    <EditingContext.Provider value={[editInfo, setEditInfo]}>
      {props.children}
    </EditingContext.Provider>
  );
};
