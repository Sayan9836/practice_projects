const ADD = "add_todo";
const DELETE = "delete_todo";
const UPDATE = "update_todo";

export const Reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.payload.text, id: action.payload.id }];
    case DELETE:
      return state.filter((todo) => todo.id !== action.payload.id);
    case UPDATE:
      console.log("update=>", action);
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { text: action.payload.text, id: action.payload.id }
          : todo,
      );
    default:
      return state;
  }
};
