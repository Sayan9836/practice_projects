import { selector } from "recoil";
import { TodoListFilterState } from "../atoms/TodoListFilterState";
import { todoListState } from "../atoms/TodoState";

export const FilteredTodoLists = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(TodoListFilterState);
    const list = get(todoListState);
    console.log(list);
    switch (filter) {
      case "Show Complete":
        return list.filter((todo) => todo.isComplete);
      case "Show UnComplete":
        return list.filter((todo) => !todo.isComplete);
      default:
        return list;
    }
  },
});
