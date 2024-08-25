import React from "react";
import { useRecoilState } from "recoil";
import { TodoListFilterState } from "../../state_management/atoms/TodoListFilterState";

const FilterTodo = () => {
  const [filter, setFilter] = useRecoilState(TodoListFilterState);
  return (
    <div>
      <h1>Filters</h1>
      <select
        name="filter_list"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="Show All">Show All</option>
        <option value="Show Complete">Show Complete</option>
        <option value="Show UnComplete">Show UnComplete</option>
      </select>
    </div>
  );
};

export default FilterTodo;
