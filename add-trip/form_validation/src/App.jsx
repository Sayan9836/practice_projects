import React from "react";
// import Form from "./components/FormTwo/Form";
// import TodoList from "./components/TodoList/TodoList";
// import AddTodo from "./components/TodoList/AddTodo";
// import FilterTodo from "./components/TodoList/FilterTodo";
// import { FilteredTodoLists } from "./state_management/selectors/FilteredTodoListState";
// import Counter from "./components/Counter_app/Counter";
// import Form from "./components/FormOne/Form";
import { useRecoilValue } from "recoil";
import ProductList from "./components/ecommerse/ProductList";
import Cart from "./components/ecommerse/Cart";

const App = () => {
  return (
    <div>
      {/* <Form /> */}
      {/* <Form /> */}
      {/* <Counter /> */}
      {/* <h1>TodoList</h1>
      <FilterTodo />
      <AddTodo />
      <TodoList /> */}
      <ProductList />
      <h1>CART...........................</h1>
      <Cart />
    </div>
  );
};

export default App;
