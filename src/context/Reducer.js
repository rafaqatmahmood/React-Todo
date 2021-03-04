const Reducer = (state, action) => {
  switch (action.type) {
    case "create_todo":
      return {
        ...state,
        todos: state.todos.concat(action.payload),
        isCreating: false,
      };
    case "remove_todo":
      return {
        ...state,
        todos: state.todos.filter((val) => val.id !== action.payload),
      };
    case "update_todo":
      return {
        ...state,
        todos: action.payload,
        isCreating: false,
        editInfo: state.editInfo.isEditing = false
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
    default:
      return state;
  }
};

export default Reducer;
