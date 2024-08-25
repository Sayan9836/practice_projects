export const Reducer = (state, action) => {
  let operations = "";

  const ADD = "add";
  const DELETE = "delete";
  const UPDATE = "update";
  switch (action.type) {
    case ADD:
      operations = [
        ...state,
        { text: action.payload.text, id: action.payload.id },
      ];
      return operations;

    case DELETE:
      operations = state.filter((todo) => todo.id !== action.payload.id);
      return operations;

    default:
      return state;
  }
};
