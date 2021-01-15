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
    case "animate_completed":
      return {
        ...state,
        completed: action.payload,
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
    case "add_completed":
      return {
        ...state,
        completed: state.completed.concat(action.payload),
      };
    case "show_todo":
      return {
        ...state,
        showTodo: action.payload,
      };
    case "set_completed":
      return {
        ...state,
        completed: action.payload,
      };
    case "remove_completed":
      return {
        ...state,
        completed: state.completed.filter((val) => val.id !== action.payload),
      };
    case "toggle_dropdown":
      return {
        ...state,
        showDropDown: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
