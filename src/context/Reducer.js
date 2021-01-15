const Reducer = (state, action) => {
  switch (action.type) {
    case "create_todo":
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case "remove_todo":
      return {
        ...state,
        todos: state.todos.filter((val) => val.id !== action.payload),
      };
    case "animate_todo":
      return {
        ...state,
        todos: action.payload,
      };
    case "set_todo":
      return {
        ...state,
        todos: action.payload,
      };
    case "is_creating":
      return {
        ...state,
        isCreating: action.payload,
      };
    case "edit_info":
      return {
        ...state,
        editInfo: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
