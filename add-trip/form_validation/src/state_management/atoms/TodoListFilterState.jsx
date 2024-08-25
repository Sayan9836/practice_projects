import { atom } from "recoil";

export const TodoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});
